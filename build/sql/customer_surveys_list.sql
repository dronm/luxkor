-- Function: customer_surveys_list(int,int)

--DROP FUNCTION customer_surveys_list(int,int);

CREATE OR REPLACE FUNCTION customer_surveys_list(IN in_doc_order_id int)
RETURNS table(
	doc_order_id int,
	question_id int,
	question_descr text,
	points int,
	answer_comment text	
	)AS
$BODY$
BEGIN
	RETURN QUERY
		SELECT 
			in_doc_order_id AS doc_order_id,
			q.id AS question_id,
			q.question::text AS question_descr,
			sur.points,
			sur.answer_comment
		FROM customer_survey_questions AS q
		LEFT JOIN customer_surveys AS sur
			ON sur.customer_survey_question_id=q.id AND sur.doc_order_id=in_doc_order_id
			
		WHERE q.in_use
		ORDER BY q.question;
end;		
$BODY$
LANGUAGE plpgsql VOLATILE STRICT COST 100;	
ALTER FUNCTION customer_surveys_list(int) OWNER TO polimerplast;

