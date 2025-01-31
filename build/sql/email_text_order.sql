-- Function: email_text_order(order_id integer)

--DROP FUNCTION email_text_order(integer);

CREATE OR REPLACE FUNCTION email_text_order(integer)
  RETURNS RECORD AS
$BODY$
	WITH 
		templ AS (
		SELECT t.template AS v,t.mes_subject AS s
		FROM email_templates t
		WHERE t.email_type='order'
		)	
	SELECT
		sms_templates_text(
			ARRAY[
				ROW('user',u.name_full::text)::template_value,
				ROW('client',cl.name_full::text)::template_value,
				ROW('firm',f.name::text::text)::template_value
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
	WHERE o.id=$1
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION email_text_order(integer) OWNER TO polimerplast;
