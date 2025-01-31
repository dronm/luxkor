-- Function: public.doc_orders_before_write(character varying, integer)

-- DROP FUNCTION public.doc_orders_before_write(character varying, integer);

CREATE OR REPLACE FUNCTION public.doc_orders_before_write(
    in_view_id character varying,
    in_doc_id integer)
  RETURNS void AS
$BODY$
BEGIN				
	--clear fact table
	DELETE FROM doc_orders_t_products WHERE doc_id=in_doc_id;
	
	--copy data from temp to fact table
	INSERT INTO doc_orders_t_products
	(doc_id,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,volume,weight,price,price_edit,price_round,total,total_pack,
	mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price,total_deliv,
	price_no_deliv,total_no_deliv)
	(SELECT in_doc_id
	,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,volume,weight,price,price_edit,price_round,total,total_pack,
	mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price,total_deliv,
	price_no_deliv,total_no_deliv
	FROM doc_orders_t_tmp_products
	WHERE view_id=in_view_id);				
	
	--clear temp table
	DELETE FROM doc_orders_t_tmp_products WHERE view_id=in_view_id;

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
	WHERE view_id=in_view_id);				
	
	--clear temp table
	DELETE FROM doc_orders_t_tmp_cust_surveys WHERE view_id=in_view_id;
	
	--*******************

	--clear fact table
	/*
	** DOCOrder_Controller->set_shipped() **
	
	DELETE FROM doc_orders_t_prod_batches WHERE doc_id=in_doc_id;
	--copy data from temp to fact table
	INSERT INTO doc_orders_t_prod_batches
	(doc_id,line_number,
		ext_id, batch_descr)
	(SELECT in_doc_id,line_number,
		ext_id, batch_descr
	FROM doc_orders_t_tmp_prod_batches
	WHERE view_id=in_view_id);				
	*/
	
	--clear temp table
	DELETE FROM doc_orders_t_tmp_prod_batches WHERE view_id=in_view_id;
	
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
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION public.doc_orders_before_write(character varying, integer)
  OWNER TO polimerplast;

