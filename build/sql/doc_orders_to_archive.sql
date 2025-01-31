--DROP function doc_orders_to_archive();

CREATE OR REPLACE FUNCTION doc_orders_to_archive()
RETURNS VOID
AS $body$
	-- смена статусов
	INSERT INTO doc_orders_states
	(doc_orders_id,date_time,state)

	(
	SELECT
		DISTINCT ON (doc_orders_id) doc_orders_id,
		now()::timestamp,
		'canceled_by_sales_manager'::order_states
	FROM doc_orders_states
	WHERE date_time<now()::date-(const_wait_days_before_arch_val()||' days')::interval
		 AND state='waiting_for_client'::order_states
	ORDER BY doc_orders_id, date_time DESC
	);
$body$ LANGUAGE sql;
ALTER function doc_orders_to_archive() OWNER TO polimerplast;