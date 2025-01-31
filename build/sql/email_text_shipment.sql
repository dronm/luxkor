-- Function: email_text_shipment(order_id integer)

--DROP FUNCTION email_text_shipment(integer);

CREATE OR REPLACE FUNCTION email_text_shipment(integer)
  RETURNS RECORD AS
  /*
	mes_body text,
	email text,
	mes_subject  text,
	firm text,
	client text
  
  */
$BODY$
	WITH 
		templ AS (
		SELECT t.template AS v,t.mes_subject AS s
		FROM email_templates t
		WHERE t.email_type='shipment'
		)	
	SELECT
		sms_templates_text(
			ARRAY[
			ROW('user',u.name_full::text)::template_value,
			ROW('firm',f.name::text::text)::template_value,
			ROW('client',cl.name_full::text)::template_value,
			ROW('number',o.number::text)::template_value
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
--	AND o.deliv_type='by_client'
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION email_text_shipment(integer) OWNER TO polimerplast;
