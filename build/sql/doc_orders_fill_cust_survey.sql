-- Function: doc_orders_fill_cust_survey(varchar(32),integer)

-- DROP FUNCTION doc_orders_fill_cust_survey(varchar(32),integer);

CREATE OR REPLACE FUNCTION doc_orders_fill_cust_survey(
	in_view_id varchar(32), in_login_id integer)
  RETURNS void AS
$BODY$
	--Удалим все строки
	DELETE FROM doc_orders_t_tmp_cust_surveys
	WHERE view_id=$1;
	
	INSERT INTO doc_orders_t_tmp_cust_surveys
	(view_id,login_id,line_number,customer_survey_question_id)
	(SELECT
		$1,$2,
		row_number() OVER (ORDER BY question),
		id
	FROM customer_survey_questions
	WHERE in_use = TRUE
	ORDER BY question);
	
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_fill_cust_survey(varchar(32),integer) OWNER TO polimerplast;
