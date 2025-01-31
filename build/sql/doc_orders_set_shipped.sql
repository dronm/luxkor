-- FUNCTION: public.doc_orders_set_shipped(integer, character varying, integer, integer, integer, integer, boolean, text)

-- DROP FUNCTION public.doc_orders_set_shipped(integer, character varying, integer, integer, integer, integer, boolean, text);

CREATE OR REPLACE FUNCTION public.doc_orders_set_shipped(
	in_doc_id integer,
	in_view_id character varying,
	in_driver_id integer,
	in_deliv_vehicle_count integer,
	in_vehicle_id integer,
	in_deliv_destination_id integer,
	in_destination_to_ttn boolean,
	in_batch_num text
)
    RETURNS void
AS $BODY$
DECLARE
   	r RECORD;
	v_new_doc_id integer;
	--v_new_prod_k numeric;
	v_quant numeric;
	v_base_quant numeric;
	v_total numeric;
	v_total_deliv numeric;
	v_total_pack numeric;
	v_volume numeric;
	v_weight numeric;	
	v_new_doc_user_id integer;
	--
	v_pay_day  date;	
	v_firm_id integer;
	v_client_id integer;
	v_paid bool;
	
	--v_new_doc_deliv_total numeric(15,2);
BEGIN

	--всегда оплачено
	--UPDATE doc_orders SET paid=TRUE WHERE id=in_doc_id;

	--clear fact table
	DELETE FROM doc_orders_t_products WHERE doc_id=in_doc_id;

	v_new_doc_id = 0;
	
	--in_deliv_vehicle_count is ALWAYS SET!!!
	/*IF in_deliv_vehicle_count IS NULL THEN
		SELECT deliv_vehicle_count
		INTO v_deliv_vehicle_count
		FROM doc_orders
		WHERE id=in_doc_id;
	ELSE
		v_deliv_vehicle_count = in_deliv_vehicle_count;
	END IF;*/
	
	FOR r IN
	SELECT t.*,
		p.base_measure_unit_vol_m,
		p.base_measure_unit_weight_t
	FROM doc_orders_t_tmp_products AS t
	LEFT JOIN products p ON t.product_id=p.id
	WHERE view_id = in_view_id
	ORDER BY t.line_number
	LOOP
		IF r.price IS NULL THEN
			RAISE EXCEPTION 'Пустая цена в номенклатуре документа!';
		END IF;	
		/**
		 * Если в документе было больше,чем подтвердили
		 * создадим из данного документа еще один
		 * если меньше - нового докум.не создаем
		 */
		IF (r.quant_confirmed_base_measure_unit < r.quant_base_measure_unit) THEN
			--Новый документ
			--v_new_prod_k = 1 - r.quant_confirmed_base_measure_unit / r.quant_base_measure_unit;
			IF v_new_doc_id=0 THEN
				--Создадим шапку нового документа
				INSERT INTO doc_orders
				(date_time,
				number,
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
				deliv_cost_opt_id,
				deliv_responsable_tel,
				deliv_total_edit,
				deliv_total,
				deliv_expenses_edit,
				deliv_expenses,				
				deliv_vehicle_count,
				submit_user_id,
				client_contract_ext_id,
				client_contract_name
				)
				(
				SELECT
					h.date_time,
					--просто номер без префикса
					(SELECT coalesce( MAX(tmax.number::int),0)+1 FROM doc_orders AS tmax
					WHERE substr(tmax.number::varchar,1,length(const_new_order_prefix_val()))<>const_new_order_prefix_val()	  
					),					
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
					||'Остатки по заявке №'||h.number||coalesce(', счет №'||h.ext_order_num,''),
					
					h.warehouse_id,
					h.deliv_type,
					h.deliv_to_third_party,
					h.deliv_send_sms,
					h.deliv_add_cost_to_product,
					h.deliv_period_id,
					h.deliv_responsable,
					h.deliv_destination_id,
					h.client_user_id,
					h.deliv_cost_opt_id,
					h.deliv_responsable_tel,
					h.deliv_total_edit,
					CASE
						WHEN h.deliv_type='by_supplier' AND h.deliv_vehicle_count=in_deliv_vehicle_count
							THEN 0
						WHEN h.deliv_type='by_supplier' AND COALESCE(h.deliv_vehicle_count,0)>0
							THEN h.deliv_total - ROUND(h.deliv_total/h.deliv_vehicle_count*in_deliv_vehicle_count,2)
						ELSE 0
					END,
					h.deliv_expenses_edit,
					CASE
						WHEN h.deliv_type='by_supplier' AND h.deliv_vehicle_count=in_deliv_vehicle_count
							THEN 0
						WHEN h.deliv_type='by_supplier' AND COALESCE(h.deliv_vehicle_count,0)>0
							THEN h.deliv_expenses - ROUND(h.deliv_expenses/h.deliv_vehicle_count*in_deliv_vehicle_count,2)
						ELSE 0
					END,					
					CASE
						WHEN h.deliv_type='by_supplier' AND  COALESCE(h.deliv_vehicle_count,0)>in_deliv_vehicle_count
							THEN h.deliv_vehicle_count-in_deliv_vehicle_count
						ELSE 0
					END,
					h.submit_user_id,
					h.client_contract_ext_id,
					h.client_contract_name

				FROM doc_orders AS h
				WHERE h.id=in_doc_id
				)
				RETURNING id,user_id
				INTO
					v_new_doc_id,
					v_new_doc_user_id
				;
				
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
			
			/**
			 * Неподтвержденное количество в новую строку нового документа
			 */
			
			--базовое количество - остаток
			v_base_quant = 	r.quant_base_measure_unit - r.quant_confirmed_base_measure_unit;

			--количество в единице документа
			SELECT doc_order_calc_quant(
						r.product_id,
						r.measure_unit_id,
						r.mes_length,
						r.mes_width,
						r.mes_height,
						v_base_quant
			) INTO v_quant;	
			
			-- *** Значения в подтвержденном количестве ***
			v_volume = round(r.quant_confirmed_base_measure_unit * r.base_measure_unit_vol_m, 3);
			v_weight = round(r.quant_confirmed_base_measure_unit * r.base_measure_unit_weight_t, 3);
			
			v_total = CASE
					WHEN coalesce(r.quant_base_measure_unit,0) * coalesce(r.quant_confirmed_base_measure_unit,0)=0 THEN 0
					WHEN r.price_round THEN
						ceil(r.total / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit)
					ELSE
						round(r.total / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit,2)
				END;
				
			v_total_pack = CASE
				WHEN coalesce(r.quant_base_measure_unit,0) * coalesce(r.quant_confirmed_base_measure_unit,0)=0 THEN 0
				ELSE
					round(r.total_pack / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit,2)
				END;
				
			v_total_deliv = CASE
				WHEN coalesce(r.quant_base_measure_unit, 0) * coalesce(r.quant_confirmed_base_measure_unit, 0)=0 THEN 0
				ELSE
					round( coalesce(r.total_deliv, 0) / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit, 2)
				END;
			-- **************************
			
			--RAISE EXCEPTION 'v_total=%, r.price_round=%', v_total, r.price_round;
			
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
				price_edit,
				price_round,
				total_pack,
				total_deliv,
				price_no_deliv,
				total_no_deliv
				)
			VALUES (
				v_new_doc_id,
				r.line_number,
				r.product_id,
				
				/** количество в единице
				 * основного документа
				 */
				v_quant,				
				--цена из основного документа
				coalesce(r.price, 0),
				r.total - v_total,
				
				r.mes_length,
				r.mes_width,
				r.mes_height,
				r.measure_unit_id,
				r.pack_exists,
				r.pack_in_price,
				
				/*в новый док остаток*/
				v_base_quant,
				v_base_quant,
					
				r.volume - v_volume,
				r.weight - v_weight,
				
				TRUE, -- Чтобы цена НЕ пересчиталась ни при каких условиях!!! r.price_edit,
				r.price_round,
				r.total_pack - v_total_pack,
				
				r.total_deliv - v_total_deliv,
				
				CASE
					WHEN v_base_quant=0 THEN 0
					ELSE ((r.total - v_total) - (r.total_deliv - v_total_deliv)) / v_base_quant
				END,
				(r.total - v_total) - (r.total_deliv - v_total_deliv)
			);
			
		END IF;
		

		--количество в единице документа
		IF (r.quant_confirmed_base_measure_unit = r.quant_base_measure_unit) THEN
			--все как в основном документе
			v_quant		= r.quant;
			v_volume 	= r.volume;
			v_weight 	= r.weight;
			v_total		= r.total;			
			v_total_pack	= r.total_pack;
			v_total_deliv	= coalesce(r.total_deliv,0);
		ELSE
			--расчетным путем
			SELECT doc_order_calc_quant(
					r.product_id,
					r.measure_unit_id,
					r.mes_length,
					r.mes_width,
					r.mes_height,
					r.quant_confirmed_base_measure_unit
			) INTO v_quant;
			
			IF (r.quant_confirmed_base_measure_unit > r.quant_base_measure_unit) THEN
				v_volume = round(
					r.quant_confirmed_base_measure_unit *
					r.base_measure_unit_vol_m, 3
				);
				v_weight = round(r.quant_confirmed_base_measure_unit *
					r.base_measure_unit_weight_t, 3
				);
				v_total = CASE
						WHEN coalesce(r.quant_base_measure_unit,0) * coalesce(r.quant_confirmed_base_measure_unit,0)=0 THEN 0
						WHEN r.price_round THEN
							ceil(r.total / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit)
						ELSE
							round(r.total / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit,2)
					END;
					
				v_total_pack = CASE
						WHEN coalesce(r.quant_base_measure_unit,0) * coalesce(r.quant_confirmed_base_measure_unit,0)=0 THEN 0
						ELSE
							round(r.total_pack / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit,2)
					END;
					
				v_total_deliv = CASE
						WHEN coalesce(r.quant_base_measure_unit,0) * coalesce(r.quant_confirmed_base_measure_unit,0)=0 THEN 0
						ELSE
							round( coalesce(r.total_deliv,0) / r.quant_base_measure_unit * r.quant_confirmed_base_measure_unit,2)
					END;
			END IF;
		END IF;
--RAISE EXCEPTION 'v_total=%',v_total;				
--RAISE EXCEPTION 'price_no_deliv=%',round( (v_total-v_total_deliv) / r.quant_confirmed_base_measure_unit,2);		
		/**
		 * То что подтверждено - в реальную таблицу
		 */
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
			price_edit,
			price_round,
			total_pack,
			total_deliv,
			price_no_deliv,
			total_no_deliv
			)
		VALUES (
			in_doc_id,
			r.line_number,
			r.product_id,			
			v_quant,			
			coalesce(r.price,0),
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
			
			r.price_edit,
			r.price_round,
			v_total_pack,
			
			v_total_deliv,
			CASE
				WHEN coalesce(r.quant_confirmed_base_measure_unit,0)=0 THEN 0
				ELSE round( (v_total-v_total_deliv) / r.quant_confirmed_base_measure_unit,2)
			END,
			v_total-v_total_deliv
		);
		
	END LOOP;

	--ИТОГИ по новому документу
	IF (v_new_doc_id>0) THEN
		PERFORM doc_orders_update_totals(v_new_doc_id);
	END IF;

	--ИТОГИ по документу
	PERFORM doc_orders_update_totals(in_doc_id);
	
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
		
		COALESCE(d.total,0)+
		CASE
		WHEN d.deliv_type='by_supplier'::delivery_types
		AND coalesce(d.deliv_add_cost_to_product,FALSE)=FALSE THEN
			COALESCE(d.deliv_total,0)
		ELSE 0
		END+
		COALESCE(d.total_pack,0),
		
		(coalesce(d.paid,FALSE) OR coalesce(d.paid_by_bank,FALSE))
	INTO
		v_pay_day,
		v_client_id,
		v_firm_id,
		v_total,
		v_paid
	FROM doc_orders AS d
	LEFT JOIN clients AS cl ON cl.id=d.client_id
	WHERE d.id=in_doc_id;
	
	IF (v_pay_day IS NOT NULL) THEN
		INSERT INTO client_pay_schedules
		(doc_id,pay_date,firm_id,client_id,total)
		VALUES
		(in_doc_id,v_pay_day,v_firm_id,v_client_id,v_total);
	END IF;
	
	--ВЗАИМОРАСЧЕТЫ только если НЕ ОПЛАЧЕНО (физ лицо карточка/банк)
	IF NOT v_paid THEN
		UPDATE client_debts
		SET debt_total = debt_total + v_total,
		    update_date = now()
		WHERE
			firm_id = v_firm_id
			AND client_id = v_client_id
		;
	END IF;
	
	--Обновить доставки водителя если есть
	--RAISE EXCEPTION 'v_new_doc_deliv_total=%, in_deliv_vehicle_count=%',v_new_doc_deliv_total,in_deliv_vehicle_count;
	--RAISE EXCEPTION 'in_deliv_destination_id=%, in_vehicle_id=%, in_destination_to_ttn=%',in_deliv_destination_id,in_vehicle_id,in_destination_to_ttn;
	IF
		in_driver_id>0
		OR in_vehicle_id>0
		OR in_deliv_vehicle_count IS NOT NULL
		OR in_deliv_destination_id>0
		OR in_destination_to_ttn IS NOT NULL
		OR coalesce(in_batch_num, '') <>''		
	THEN
		UPDATE doc_orders
		SET
			driver_id = CASE WHEN in_driver_id>0 THEN in_driver_id ELSE driver_id END,
			vehicle_id = CASE WHEN in_vehicle_id>0 THEN in_vehicle_id ELSE vehicle_id END,
			deliv_destination_id = CASE WHEN in_deliv_destination_id>0 THEN in_deliv_destination_id ELSE deliv_destination_id END,
			destination_to_ttn = CASE WHEN in_destination_to_ttn IS NOT NULL THEN in_destination_to_ttn ELSE destination_to_ttn END,
			batch_num = CASE WHEN coalesce(in_batch_num, '') <>'' THEN in_batch_num ELSE batch_num END,						
			deliv_total =
				CASE
					WHEN coalesce(deliv_vehicle_count,0)=0 THEN deliv_total
					ELSE deliv_total/deliv_vehicle_count*in_deliv_vehicle_count
				END,
			deliv_expenses = 
				CASE
					WHEN coalesce(deliv_vehicle_count,0)=0 THEN deliv_expenses
					ELSE deliv_expenses/deliv_vehicle_count*in_deliv_vehicle_count
				END,
			deliv_vehicle_count = in_deliv_vehicle_count
			
		WHERE
			id=in_doc_id;
	END IF;

	/*IF in_doc_id = 39694 THEN
		SELECT total
		INTO v_total
		FROM doc_orders_t_products
		WHERE doc_id=v_new_doc_id ORDER BY line_number ASC LIMIT 1;
		
		RAISE EXCEPTION 'STOPPED v_total=%',v_total;
	END IF;	*/
	
	RETURN;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100 CALLED ON NULL INPUT;
ALTER FUNCTION public.doc_orders_set_shipped(integer, character varying, integer, integer, integer, integer, boolean, text)
    OWNER TO polimerplast;

