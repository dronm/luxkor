-- View: regl_client_list_for_balance

--DROP VIEW regl_client_list_for_balance;

CREATE OR REPLACE VIEW regl_client_list_for_balance AS   
	SELECT DISTINCT ON (o.client_id,o.firm_id)
		cl.id AS client_id,
		cl.ext_id AS client_ext_id,
		f.id AS firm_id,
		f.ext_id AS firm_ext_id
	FROM doc_orders AS o
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	LEFT JOIN firms AS f ON f.id=o.firm_id
	WHERE o.delivery_fact_date BETWEEN now()::date-'3 months'::interval AND now()::date-'1 day'::interval
		AND cl.pay_type='with_delay'::payment_types
	;
ALTER TABLE regl_client_list_for_balance
  OWNER TO polimerplast;
	