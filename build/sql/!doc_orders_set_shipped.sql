-- Function: doc_orders_set_shipped(integer, integer)

-- DROP FUNCTION doc_orders_set_shipped(integer, integer);

CREATE OR REPLACE FUNCTION doc_orders_set_shipped(
		in_doc_id integer,
		in_login_id integer)
  RETURNS void AS
$BODY$
DECLARE
    r RECORD;
	v_new_doc_id integer;
	v_new_prod_k numeric;
	v_quant numeric;
	v_total numeric;
	v_volume numeric;
	v_weight numeric;	
	v_new_doc_user_id integer;
	--
	v_pay_day  date;	
	v_firm_id integer;
	v_client_id integer;
	
BEGIN
	--всегда оплачено
	UPDATE doc_orders SET paid=TRUE WHERE id=in_doc_id;

	--clear fact table
	DELETE FROM doc_orders_t_products WHERE doc_id=in_doc_id;

	v_new_doc_id = 0;
	FOR r IN
	SELECT *
	FROM doc_orders_t_tmp_products
	WHERE login_id = in_login_id
	LOOP
		/*
		Если в документе было больше,чем подтвердили
		создадим из данного документа еще один
		если меньше - нового докум.не создаем
		*/
		IF (r.quant_confirmed_base_measure_unit<
		r.quant_base_measure_unit) THEN
			--Новый документ
			v_new_prod_k = r.quant_confirmed_base_measure_unit/r.quant_base_measure_unit;
			IF v_new_doc_id=0 THEN
				--Создадим шапку нового документа
				INSERT INTO doc_orders
				(date_time,
				client_id,
				delivery_plan_date,
				firm_id,
				user_id,
				sales_manager_comment,
				warehouse_id,
				deliv_type,
				deliv_to_third_party,
				deliv_send_sms,
				deliv_add_cost_to_product,
				deliv_period_id,
				deliv_responsable,
				deliv_destination_id,
				client_user_id,
				deliv_total_edit,
				deliv_cost_opt_id,
				deliv_responsable_tel,
				deliv_total
				)
				(
				SELECT
					h.date_time,
					h.client_id,
					h.delivery_plan_date,
					h.firm_id,
					h.user_id,
					
					coalesce(h.sales_manager_comment,'')||
						CASE
							WHEN empty(h.sales_manager_comment) THEN
								''
							ELSE ' '
						END
					||'Остатки по заявке №'||h.number,
					
					h.warehouse_id,
					h.deliv_type,
					h.deliv_to_third_party,
					h.deliv_send_sms,
					h.deliv_add_cost_to_product,
					h.deliv_period_id,
					h.deliv_responsable,
					h.deliv_destination_id,
					h.client_user_id,
					h.deliv_total_edit,
					h.deliv_cost_opt_id,
					h.deliv_responsable_tel,
					ROUND(h.deliv_total*v_new_prod_k,2)
				FROM doc_orders AS h
				WHERE h.id=in_doc_id
				)
				RETURNING id,user_id INTO v_new_doc_id,v_new_doc_user_id;
				
				--Отметим связку
				INSERT INTO doc_orders_links
				VALUES (in_doc_id,v_new_doc_id);
				
				--Статус документа
				INSERT INTO doc_orders_states
				(doc_orders_id,date_time,state,user_id)
				VALUES (v_new_doc_id,
					now()::timestamp,
					'waiting_for_us'::order_states,
					v_new_doc_user_id);
			END IF;
			/*Неподтвержденное количество
			в новую строку нового документа
			*/
			v_quant = ROUND(r.quant*v_new_prod_k,3);
			v_total = ROUND(r.total*v_new_prod_k,2);
			v_volume = ROUND(r.volume*v_new_prod_k,3);
			v_weight = ROUND(r.weight*v_new_prod_k,3);
			
			INSERT INTO doc_orders_t_products
				(doc_id,
				line_number,
				product_id,
				quant,
				price,
				total,
				mes_length,
				mes_width,
				mes_height,
				measure_unit_id,
				pack_exists,
				pack_in_price,
				quant_base_measure_unit,
				quant_confirmed_base_measure_unit,
				volume,
				weight,
				price_edit)
			VALUES (
				v_new_doc_id,
				r.line_number,
				r.product_id,
				v_quant,
				r.price,
				v_total,
				r.mes_length,
				r.mes_width,
				r.mes_height,
				r.measure_unit_id,
				r.pack_exists,
				r.pack_in_price,
				r.quant_confirmed_base_measure_unit,
				r.quant_confirmed_base_measure_unit,
				v_volume,
				v_weight,
				r.price_edit
			);
			--ИТОГИ по документу
			UPDATE doc_orders
			SET
				product_str = prod.products,
				total_quant = prod.quant_sum,
				total_volume = prod.volume_sum,
				total_weight = prod.weight_sum,
				total = prod.total_sum,
				total_pack = prod.total_pack_sum,
				deliv_vehicle_count = prod.vh_cnt
			FROM (
				SELECT
					string_agg(p.name,',') AS products,
					SUM(t.quant) AS quant_sum,
					SUM(t.volume) AS volume_sum,
					SUM(t.weight) AS weight_sum,
					coalesce(SUM(t.total),0) AS total_sum,
					coalesce(SUM(t.total_pack),0) AS total_pack_sum,
					(SELECT
						GREATEST(
							GREATEST(
								round(SUM(t.volume)/dco.volume_m),
								round(SUM(t.weight)/dco.weight_t)
							),
							1
						)
					FROM deliv_cost_opts AS dco
					WHERE dco.id=(SELECT o_tmp1.deliv_cost_opt_id
								FROM doc_orders o_tmp1
								WHERE o_tmp1.id=v_new_doc_id
								)
					) AS vh_cnt
				FROM doc_orders_t_products AS t
				LEFT JOIN products AS p ON p.id=t.product_id
				WHERE t.doc_id=v_new_doc_id
			) AS prod
			WHERE id=v_new_doc_id;
			
			/*остатки - то что подтверждено*/
			v_quant = r.quant - v_quant;
			v_total = r.total - v_total;
			v_volume = r.volume - v_volume;
			v_weight = r.weight - v_weight;
		ELSIF (r.quant_confirmed_base_measure_unit>
		r.quant_base_measure_unit) THEN
			/* подтвердили больше чем в заявке!*/
			v_new_prod_k = r.quant_confirmed_base_measure_unit/r.quant_base_measure_unit;
			
			v_quant = ROUND(r.quant*v_new_prod_k,3);
			v_total = ROUND(r.total*v_new_prod_k,2);
			v_volume = ROUND(r.volume*v_new_prod_k,3);
			v_weight = ROUND(r.weight*v_new_prod_k,3);			
			/*
			RAISE 'in_login_id=%,
				in_doc_id=%,
				v_quant=%,
				v_total=%,
				v_volume=%,
				v_weight=%,
				r.price=%',
				in_login_id,in_doc_id,
				v_quant,v_total,v_volume,v_weight,
				r.price;
			*/
		ELSE
			--старые значения
			v_quant = r.quant;
			v_total = r.total;
			v_volume = r.volume;
			v_weight = r.weight;
		END IF;
		/* То что подтверждено в реальную
		таблицу */
		INSERT INTO doc_orders_t_products
			(doc_id,
			line_number,
			product_id,
			quant,
			price,
			total,
			mes_length,
			mes_width,
			mes_height,
			measure_unit_id,
			pack_exists,
			pack_in_price,
			quant_base_measure_unit,
			quant_confirmed_base_measure_unit,
			volume,
			weight,
			price_edit)
		VALUES (
			in_doc_id,
			r.line_number,
			r.product_id,
			v_quant,
			r.price,
			v_total,
			r.mes_length,
			r.mes_width,
			r.mes_height,
			r.measure_unit_id,
			r.pack_exists,
			r.pack_in_price,
			r.quant_confirmed_base_measure_unit,
			r.quant_confirmed_base_measure_unit,
			v_volume,
			v_weight,
			r.price_edit
		);
		--ИТОГИ по документу
		UPDATE doc_orders
		SET
			product_str = prod.products,
			total_quant = prod.quant_sum,
			total_volume = prod.volume_sum,
			total_weight = prod.weight_sum,
			total = prod.total_sum,
			total_pack = prod.total_pack_sum
		FROM (
			SELECT
				string_agg(p.name,',') AS products,
				SUM(t.quant) AS quant_sum,
				SUM(t.volume) AS volume_sum,
				SUM(t.weight) AS weight_sum,
				coalesce(SUM(t.total),0) AS total_sum,
				coalesce(SUM(t.total_pack),0) AS total_pack_sum
			FROM doc_orders_t_products AS t
			LEFT JOIN products AS p ON p.id=t.product_id
			WHERE t.doc_id=in_doc_id
		) AS prod
		WHERE id=in_doc_id;
		
		
	END LOOP;
	
	--ГРАФИК ПЛАТЕЖЕЙ
	v_pay_day = NULL;
	SELECT
		CASE
			WHEN cl.pay_type<>'cash'::payment_types THEN
				pay_date(
					now()::date,
					cl.pay_type,
					cl.pay_delay_days,
					cl.pay_fix_to_dow,
					cl.pay_dow_days
				)
			ELSE NULL
		END AS pay_day,
		d.client_id,
		d.firm_id,
		d.total
	INTO
		v_pay_day,
		v_client_id,
		v_firm_id,
		v_total	
	FROM doc_orders AS d
	LEFT JOIN clients AS cl ON cl.id=d.client_id
	WHERE d.id=in_doc_id;
	
	IF (v_pay_day IS NOT NULL) THEN
		INSERT INTO client_pay_schedules
		(doc_id,pay_date,firm_id,client_id,total)
		VALUES
		(in_doc_id,v_pay_day,v_firm_id,v_client_id,v_total);
	END IF;
	
	RETURN;
END;		
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_set_shipped(integer, integer)
  OWNER TO polimerplast;
