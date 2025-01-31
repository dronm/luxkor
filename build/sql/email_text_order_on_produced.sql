-- Function: email_text_order_on_produced(order_id integer)

--DROP FUNCTION email_text_order_on_produced(integer);

CREATE OR REPLACE FUNCTION email_text_order_on_produced(integer)
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
		WHERE t.email_type='order_on_produced'
		)	
	SELECT
		sms_templates_text(
			ARRAY[
			ROW('user',u.name_full::text)::template_value,
			ROW('firm',f.name::text)::template_value,
			ROW('client',cl.name_full::text)::template_value,
			ROW('products',o.product_str::text)::template_value,
			ROW('number',o.number::text)::template_value,
			ROW('vm',o.total_volume::text)::template_value,
			ROW('wt',o.total_weight::text)::template_value
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
	--только САМОВЫВОЗ
	WHERE o.id=$1 AND o.deliv_type='by_client' AND u.email IS NOT NULL AND u.email<>''
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION email_text_order_on_produced(integer) OWNER TO polimerplast;
