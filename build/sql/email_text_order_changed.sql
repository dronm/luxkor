-- Function: email_text_order_changed(order_id integer)

--DROP FUNCTION email_text_order_changed(integer);

CREATE OR REPLACE FUNCTION email_text_order_changed(integer)
  RETURNS RECORD AS
$BODY$
	WITH 
		templ AS (
		SELECT t.template AS v,t.mes_subject AS s
		FROM email_templates t
		WHERE t.email_type='order_changed'
		)	
	SELECT
		sms_templates_text(
			ARRAY[
			ROW('number',o.number::text)::template_value,
			ROW('user',u.name_full::text)::template_value,
			ROW('firm',f.name::text)::template_value,
			ROW('client',cl.name_full::text)::template_value
			],
			(SELECT v FROM templ)
		)	
		AS mes_body,		
		u.email::text AS email,
		(SELECT s FROM templ) AS mes_subject,
		f.name::text AS firm,
		cl.name::text AS client
	FROM doc_orders o
	LEFT JOIN users AS u ON u.id=o.client_user_id
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	LEFT JOIN firms AS f ON f.id=o.firm_id
	WHERE o.id=$1 AND u.email IS NOT NULL AND u.email<>''
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION email_text_order_changed(integer) OWNER TO polimerplast;
