/*
DROP function doc_orders_divide(
	in_login_id integer,
	in_orig_doc_id integer,
	in_delivery_plan_date date,
	in_sales_manager_comment text,
	in_deliv_period_id integer,
	in_deliv_vehicle_count integer,
	in_deliv_cost_opt_id integer,
	in_deliv_total numeric,
	in_deliv_total_edit boolean
);
*/
CREATE OR REPLACE FUNCTION doc_orders_divide(
	in_login_id integer,
	in_orig_doc_id integer,
	--все реквизиты документа,подлежащие изменению
	in_delivery_plan_date date,
	in_sales_manager_comment text,
	in_deliv_period_id integer,
	in_deliv_vehicle_count integer,
	in_deliv_cost_opt_id integer,
	in_deliv_total numeric,
	in_deliv_total_edit boolean
)
	RETURNS VOID
AS $BODY$
DECLARE
	prod_row RECORD;
	er_text text;
	new_doc_id integer;
BEGIN
	--шапка нового документа - создаем из старого
	--new_doc_id = 
	INSERT INTO doc_orders
	(	date_time,
		number,
		client_id,
		client_number,
		delivery_plan_date,
		firm_id,
		user_id,
		sales_manager_comment,
		client_comment,
		warehouse_id,
		deliv_type,
		deliv_to_third_party,
		deliv_send_sms,
		deliv_add_cost_to_product,
		deliv_period_id,
		deliv_responsable,
		printed,
		ext_order_num,
		ext_order_id,
		product_plan_date,
		deliv_destination_id,
		deliv_responsable_tel,
		marketing_comment,
		client_user_id,
		deliv_vehicle_count,
		deliv_cost_opt_id,
		deliv_total_edit,
		deliv_total,
		city_route_distance,
		country_route_distance
	)
	(SELECT
	  now()::timestamp,--date_time
	  --просто номер без префикса
	  (SELECT coalesce( MAX(tmax.number::int),0)+1 FROM doc_orders AS tmax
		WHERE substr(tmax.number::varchar,1,length(const_new_order_prefix_val()))<>const_new_order_prefix_val()	  
	  ),
	  o.client_id,
	  o.client_number,
	  in_delivery_plan_date,
	  o.firm_id,
	  o.user_id,
	  in_sales_manager_comment,
	  o.client_comment,
	  o.warehouse_id,
	  o.deliv_type,
	  o.deliv_to_third_party,
	  o.deliv_send_sms,
	  o.deliv_add_cost_to_product,
	  in_deliv_period_id,
	  o.deliv_responsable,
	  false,--printed,
	  o.ext_order_num,
	  o.ext_order_id,
	  o.product_plan_date,
	  o.deliv_destination_id,
	  o.deliv_responsable_tel,
	  o.marketing_comment,
	  o.client_user_id,
	  in_deliv_vehicle_count,
	  in_deliv_cost_opt_id,
	  in_deliv_total_edit,
	  LEAST(in_deliv_total,o.deliv_total),
	  o.city_route_distance,
	  o.country_route_distance
	  
	FROM doc_orders o
	WHERE o.id=in_orig_doc_id)
	RETURNING id INTO new_doc_id;	
	
	--Удаление из временной нулевых строк
	DELETE FROM doc_orders_t_tmp_products
	WHERE login_id=in_login_id AND coalesce(quant,0)=0;
  
	--перенос новой тч в реальную таблицу
	PERFORM doc_orders_before_write(in_login_id,new_doc_id);

	--очистка временной таблицы
	DELETE FROM doc_orders_t_tmp_products
	WHERE login_id=in_login_id;

	--вставка во временную
	INSERT INTO doc_orders_t_tmp_products
	(	login_id,
		product_id,
		price,
		mes_length,
		mes_width,
		mes_height,
		measure_unit_id,
		pack_exists,
		pack_in_price,
		price_no_deliv,
		price_edit,
		quant,
		quant_base_measure_unit,
		volume,
		weight,
		total,
		total_pack	
	)
	(
	SELECT
		in_login_id,
		sub.product_id,
		sub.price,
		sub.mes_length,
		sub.mes_width,
		sub.mes_height,
		sub.measure_unit_id,
		sub.pack_exists,
		sub.pack_in_price,
		sub.price_no_deliv,
		sub.price_edit,

		sum(sub.quant) AS quant,
		sum(sub.quant_base_measure_unit) AS quant_base_measure_unit,
		sum(sub.volume) AS volume,
		sum(sub.weight) AS weight,
		sum(sub.total) AS total,
		sum(sub.total_pack) AS total_pack
		
	FROM (
		(SELECT
			p_orig.product_id,
			p_orig.price,
			p_orig.mes_length,
			p_orig.mes_width,
			p_orig.mes_height,
			p_orig.measure_unit_id,
			p_orig.pack_exists,
			p_orig.pack_in_price,
			p_orig.price_no_deliv,
			p_orig.price_edit,
		
			p_orig.quant,
			p_orig.quant_base_measure_unit,
			p_orig.volume,
			p_orig.weight,
			p_orig.total,
			p_orig.total_pack
		FROM doc_orders_t_products AS p_orig
		WHERE p_orig.doc_id=in_orig_doc_id)

		UNION ALL

		(SELECT 
			p_new.product_id,
			p_new.price,
			p_new.mes_length,
			p_new.mes_width,
			p_new.mes_height,
			p_new.measure_unit_id,
			p_new.pack_exists,
			p_new.pack_in_price,
			p_new.price_no_deliv,
			p_new.price_edit,
			-p_new.quant,
			-p_new.quant_base_measure_unit,
			-p_new.volume,
			-p_new.weight,
			-p_new.total,
			-p_new.total_pack
		FROM doc_orders_t_products AS p_new
		WHERE p_new.doc_id=new_doc_id)
	) AS sub	
	GROUP BY
		sub.product_id,
		sub.price,
		sub.mes_length,
		sub.mes_width,
		sub.mes_height,
		sub.measure_unit_id,
		sub.pack_exists,
		sub.pack_in_price,
		sub.price_no_deliv,
		sub.price_edit	
	HAVING sum(sub.quant)<>0
	)
	;
	
	--проверки
	er_text='';
	FOR prod_row IN
		SELECT
			t.*,
			t_orig.quant AS quant_orig,
			p.name AS product_descr
		FROM doc_orders_t_tmp_products t
		LEFT JOIN doc_orders_t_products AS t_orig
			ON t_orig.doc_id=in_orig_doc_id AND t_orig.product_id=t.product_id
		LEFT JOIN products AS p ON p.id=t.product_id
		WHERE t.login_id = in_login_id AND t.quant<0
	LOOP
		IF er_text<>'' THEN
			er_text = er_text ||', ';
		END IF;
		er_text = er_text ||
			format('%s остаток: %s затребовано: %s',
				prod_row.product_descr,
				prod_row.quant_orig,
				(prod_row.quant_orig-prod_row.quant)
			);
	END LOOP;
	
	IF (er_text<>'') THEN
		RAISE '%',er_text;
	END IF;
	
	--обновление суммы тр в старом документе
	IF (in_deliv_total>0) THEN
		UPDATE doc_orders
		SET deliv_total = deliv_total- in_deliv_total
		WHERE id=in_orig_doc_id;
	END IF;
	
	--если старый док вычерпан "ПОД НОЛЬ" - в архив!	
	IF (
		(SELECT sum(coalesce(t.quant,0))
		FROM doc_orders_t_tmp_products t
		WHERE t.login_id=in_login_id)=0
	) THEN	
		INSERT INTO doc_orders_states
		(doc_orders_id,date_time,state)
		VALUES (
			in_orig_doc_id,
			now()::timestamp,
			'closed'
		);
	END IF;
	
	--перенос в реальную таблицу и итоги
	PERFORM doc_orders_before_write(in_login_id,in_orig_doc_id);
		
	--отметка о связях
	INSERT INTO doc_orders_links
	VALUES (in_orig_doc_id,new_doc_id);
	
	--статус нового документа
	INSERT INTO doc_orders_states
	(doc_orders_id,date_time,state)
	VALUES (
		new_doc_id,
		now()::timestamp,
		'waiting_for_payment'
	);
END;
$BODY$ LANGUAGE plpgsql;
ALTER FUNCTION doc_orders_divide(
	in_login_id integer,
	in_orig_doc_id integer,
	in_delivery_plan_date date,
	in_sales_manager_comment text,
	in_deliv_period_id integer,
	in_deliv_vehicle_count integer,
	in_deliv_cost_opt_id integer,
	in_deliv_total numeric,
	in_deliv_total_edit boolean
)
OWNER TO polimerplast;	
