-- Function: customer_surveys_update(int,int,int,text)

--DROP FUNCTION customer_surveys_update(int,int,int,text);

CREATE OR REPLACE FUNCTION customer_surveys_update(
	IN in_doc_order_id int,
	IN question_id int,
	IN in_points int,
	IN in_question_comment text)
RETURNS void AS
$BODY$
BEGIN
	UPDATE customer_surveys
		SET points = in_points,
			question_comment = in_question_comment
	WHERE doc_order_id=in_doc_order_id
		AND customer_survey_question_id=in_question_id;	
	IF FOUND THEN
		RETURN;
	END IF;
	BEGIN
		INSERT INTO customer_surveys
		(doc_order_id, customer_survey_question_id, points, question_comment)
		VALUES (in_doc_order_id, in_question_id, in_points, in_question_comment);
	EXCEPTION WHEN OTHERS THEN
	UPDATE customer_surveys
		SET points = in_points,
			question_comment = in_question_comment
	WHERE doc_order_id=in_doc_order_id
		AND customer_survey_question_id=in_question_id;	
	END;
	RETURN;		
end;		
$BODY$
LANGUAGE plpgsql VOLATILE STRICT COST 100;	
ALTER FUNCTION customer_surveys_update(int,int,int,text) OWNER TO polimerplast;

