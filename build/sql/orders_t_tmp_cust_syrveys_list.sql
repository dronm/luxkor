-- View: doc_orders_t_tmp_cust_surveys_list

--DROP VIEW doc_orders_t_tmp_cust_surveys_list;

CREATE OR REPLACE VIEW doc_orders_t_tmp_cust_surveys_list AS 
	SELECT 
		t.login_id,
		t.line_number,
		t.customer_survey_question_id,
		q.question AS customer_survey_question_descr,
		t.points,
		t.answer_comment
		
	FROM doc_orders_t_tmp_cust_surveys AS t
	LEFT JOIN customer_survey_questions AS q ON q.id=t.customer_survey_question_id
	ORDER BY t.line_number;
ALTER TABLE doc_orders_t_tmp_cust_surveys_list OWNER TO polimerplast;

