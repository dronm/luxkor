-- Function: public.doc_orders_before_open(character varying, integer, integer)

-- DROP FUNCTION public.doc_orders_before_open(character varying, integer, integer);

CREATE OR REPLACE FUNCTION public.doc_orders_before_open(
    in_view_id character varying,
    in_login_id integer,
    in_doc_id integer)
  RETURNS void AS
$BODY$
BEGIN
	--DELETE FROM doc_orders_t_tmp_products WHERE login_id=in_login_id;
	DELETE FROM doc_orders_t_tmp_products WHERE view_id=in_view_id;
	
	IF (in_doc_id IS NOT NULL AND in_doc_id>0) THEN
		INSERT INTO doc_orders_t_tmp_products
		(login_id,view_id,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,
		volume,weight,price,price_edit,price_round,total,total_pack,
		mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price,total_deliv,
		price_no_deliv,total_no_deliv)
		(SELECT in_login_id, in_view_id
		,line_number,product_id,quant,quant_confirmed,quant_base_measure_unit,quant_confirmed_base_measure_unit,
		volume,weight,price,price_edit,price_round,
		total,total_pack,mes_length,mes_width,mes_height,measure_unit_id,pack_exists,pack_in_price,total_deliv,
		price_no_deliv,total_no_deliv
		FROM doc_orders_t_products
		WHERE doc_id=in_doc_id);
	END IF;

	DELETE FROM doc_orders_t_tmp_cust_surveys WHERE view_id=in_view_id;	
	IF (in_doc_id IS NOT NULL AND in_doc_id>0) THEN	
		INSERT INTO doc_orders_t_tmp_cust_surveys
		(login_id,view_id,line_number,customer_survey_question_id,points,answer_comment)
		(SELECT in_login_id, in_view_id
		,line_number,customer_survey_question_id,points,answer_comment
		FROM doc_orders_t_cust_surveys
		WHERE doc_id=in_doc_id);
	END IF;

	DELETE FROM doc_orders_t_tmp_prod_batches WHERE view_id=in_view_id;	
	IF (in_doc_id IS NOT NULL AND in_doc_id>0) THEN	
		INSERT INTO doc_orders_t_tmp_prod_batches
		(login_id, view_id, line_number, ext_id, batch_descr)
		(SELECT in_login_id, in_view_id
		,line_number,
			ext_id, batch_descr
		FROM doc_orders_t_prod_batches
		WHERE doc_id=in_doc_id);
	END IF;
	
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION public.doc_orders_before_open(character varying, integer, integer)
  OWNER TO polimerplast;

