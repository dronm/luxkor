-- View: public.doc_orders_t_tmp_cust_surveys_list

DROP VIEW public.doc_orders_t_tmp_cust_surveys_list;

CREATE OR REPLACE VIEW public.doc_orders_t_tmp_cust_surveys_list AS 
	SELECT
	 	t.login_id,
	 	t.view_id,
		t.line_number,
		t.customer_survey_question_id,
		q.question AS customer_survey_question_descr,
		t.points,
		t.answer_comment
	FROM doc_orders_t_tmp_cust_surveys t
	LEFT JOIN customer_survey_questions q ON q.id = t.customer_survey_question_id
	ORDER BY t.line_number;

ALTER TABLE public.doc_orders_t_tmp_cust_surveys_list
  OWNER TO polimerplast;

