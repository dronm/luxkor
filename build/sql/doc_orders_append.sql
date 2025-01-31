-- Function: doc_orders_append(in_target_doc_id integer, in_source_doc_id_ar integer[],in_login_id integer)

-- DROP FUNCTION doc_orders_append(in_target_doc_id integer, in_source_doc_id_ar integer[],in_login_id integer);

CREATE OR REPLACE FUNCTION doc_orders_append(in_target_doc_id integer, in_source_doc_id_ar integer[],in_login_id integer)
  RETURNS VOID AS
$$
DECLARE
	v_view_id varchar(32);
BEGIN
	--******************* Табличные части *****************************
	SELECT md5(now()::text) INTO v_view_id;
	
	INSERT INTO doc_orders_t_tmp_products
	(	view_id,
		login_id,
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
		v_view_id,
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
			p_source.product_id,
			p_source.price,
			p_source.mes_length,
			p_source.mes_width,
			p_source.mes_height,
			p_source.measure_unit_id,
			p_source.pack_exists,
			p_source.pack_in_price,
			p_source.price_no_deliv,
			p_source.price_edit,
		
			p_source.quant,
			p_source.quant_base_measure_unit,
			p_source.volume,
			p_source.weight,
			p_source.total,
			p_source.total_pack
		FROM doc_orders_t_products AS p_source
		WHERE p_source.doc_id =ANY(in_source_doc_id_ar))
		UNION ALL
		(SELECT
			p_target.product_id,
			p_target.price,
			p_target.mes_length,
			p_target.mes_width,
			p_target.mes_height,
			p_target.measure_unit_id,
			p_target.pack_exists,
			p_target.pack_in_price,
			p_target.price_no_deliv,
			p_target.price_edit,
		
			p_target.quant,
			p_target.quant_base_measure_unit,
			p_target.volume,
			p_target.weight,
			p_target.total,
			p_target.total_pack
		FROM doc_orders_t_products AS p_target
		WHERE p_target.doc_id =in_target_doc_id)		
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
	);
	
	DELETE FROM doc_orders_t_products WHERE doc_id = in_target_doc_id;
	
	--copy data from temp to fact table
	INSERT INTO doc_orders_t_products
	(doc_id,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,volume,weight,price,price_edit,total,total_pack,mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price)
	(SELECT in_target_doc_id
	,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,volume,weight,price,price_edit,total,total_pack,mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price
	FROM doc_orders_t_tmp_products
	WHERE view_id=v_view_id);				
	
	DELETE FROM doc_orders_t_tmp_products WHERE view_id = v_view_id;
	
	--******************* ШАПКА *******************************
	PERFORM doc_orders_update_totals(in_target_doc_id);

	UPDATE doc_orders
	SET
		sales_manager_comment = coalesce(sales_manager_comment,'')||
			CASE
				WHEN length(
					(SELECT string_agg(coalesce(t.sales_manager_comment,''),'')
					FROM doc_orders t WHERE t.id=ANY(in_source_doc_id_ar)
					)
					)>0 THEN
					', присоединение:'
				ELSE 'присоединение:'
			END
			||(SELECT string_agg('№'||t.number||
				CASE WHEN length(coalesce(t.sales_manager_comment,''))=0 THEN ''
				ELSE ' '
				END
				||coalesce(t.sales_manager_comment,''),',')
			FROM doc_orders t WHERE t.id=ANY(in_source_doc_id_ar)
			)
			
		,deliv_total = deliv_total + (SELECT sum(coalesce(t.deliv_total,0))
					FROM doc_orders t WHERE t.id=ANY(in_source_doc_id_ar)
					)		
	WHERE id = in_target_doc_id;
	
	
	--********* Закрытие старых ************************
	UPDATE doc_orders
	SET
		sales_manager_comment = coalesce(sales_manager_comment,'')||
			CASE WHEN length(coalesce(sales_manager_comment,''))=0 THEN ''
			ELSE ' '
			END
			||'Закрыта присоединением с заявкой №'||(SELECT t.number FROM doc_orders t WHERE t.id=in_target_doc_id)
	WHERE doc_orders.id =ANY(in_source_doc_id_ar)
	;
	
	--статус
	INSERT INTO doc_orders_states
	(doc_orders_id,date_time,state)
	(SELECT 
		*,
		now()::timestamp,
		'canceled_by_sales_manager'::order_states
	FROM explode_array(in_source_doc_id_ar)
	);
	
END;	
$$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_append(in_target_doc_id integer, in_source_doc_id_ar integer[],in_login_id integer) OWNER TO polimerplast;
