-- Function: doc_orders_before_write(integer, integer)

-- DROP FUNCTION doc_orders_before_write(integer, integer);

CREATE OR REPLACE FUNCTION doc_orders_before_write(in_login_id integer, in_doc_id integer)
  RETURNS void AS
$BODY$
BEGIN				
	
	--clear fact table
	DELETE FROM doc_orders_t_products WHERE doc_id=in_doc_id;
	
	--copy data from temp to fact table
	INSERT INTO doc_orders_t_products
	(doc_id,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,volume,weight,price,price_edit,total,total_pack,mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price)
	(SELECT in_doc_id
	,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,volume,weight,price,price_edit,total,total_pack,mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price
	FROM doc_orders_t_tmp_products
	WHERE login_id=in_login_id);				
	
	--clear temp table
	DELETE FROM doc_orders_t_tmp_products WHERE login_id=in_login_id;

	--*******************
	--clear fact table
	DELETE FROM doc_orders_t_cust_surveys WHERE doc_id=in_doc_id;
	
	--copy data from temp to fact table
	INSERT INTO doc_orders_t_cust_surveys
	(doc_id,line_number,
		customer_survey_question_id,points,answer_comment)
	(SELECT in_doc_id,line_number,
		customer_survey_question_id,points,answer_comment
	FROM doc_orders_t_tmp_cust_surveys
	WHERE login_id=in_login_id);				
	
	--clear temp table
	DELETE FROM doc_orders_t_tmp_cust_surveys WHERE login_id=in_login_id;
	
	--*******************
	
	--totals
	PERFORM doc_orders_update_totals(in_doc_id);
	/*
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
	*/
END;
$BODY$
  LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION doc_orders_before_write(integer, integer) OWNER TO polimerplast;
