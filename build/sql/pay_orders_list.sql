-- View: pay_orders_list

--DROP VIEW pay_orders_list;

CREATE OR REPLACE VIEW pay_orders_list AS 
	SELECT 
		d.id,
		d.number,
		d.date_time,
		date8_descr(d.date_time::date) AS date_time_descr,
		d.client_id,
		d.total,
		format_money(d.total) AS total_descr,
		d.firm_id,
		f.name AS firm_descr,
		
		(SELECT s1.state FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=d.id
		ORDER BY s1.date_time DESC
		LIMIT 1) AS state,
		
		get_order_states_descr(
		(SELECT s1.state FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=d.id
		ORDER BY s1.date_time DESC
		LIMIT 1)
		) AS state_descr
		
	FROM doc_orders AS d
	LEFT JOIN firms AS f ON f.id=d.firm_id
	ORDER BY d.date_time,d.number;
ALTER TABLE pay_orders_list OWNER TO polimerplast;