-- View: deliv_unassigned_orders_list

--DROP VIEW deliv_unassigned_orders_list;

CREATE OR REPLACE VIEW deliv_unassigned_orders_list AS 
	SELECT 
		o.id,
		o.number,
		o.date_time,
		o.delivery_plan_date,
		date8_descr(o.delivery_plan_date) AS delivery_plan_date_descr,
		o.client_id AS client_id,
		cl.name AS client_descr,
		pct.name||', '||w.name AS warehouse_descr,
		d.address AS client_dest_descr,
		o.product_str,
		o.total_volume,
		o.total_weight
	FROM doc_orders AS o
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	LEFT JOIN warehouses AS w ON w.id=o.warehouse_id
	LEFT JOIN production_cities AS pct ON pct.id=w.production_city_id
	LEFT JOIN client_destinations_list AS d ON d.id=o.deliv_destination_id
	LEFT JOIN deliveries AS dlv ON dlv.doc_order_id=o.id
	WHERE
		o.deliv_type='by_supplier'::delivery_types
		AND dlv.doc_order_id IS NULL
		AND
		(o.total_volume>0
		OR o.total_weight>0)
	
		AND
		(SELECT st.state
		FROM doc_orders_states st
		WHERE st.doc_orders_id=o.id
		ORDER BY st.date_time DESC
		LIMIT 1) IN (
		--'shipped'::order_states,
					'producing'::order_states,
					'produced'::order_states,
					'loading'::order_states
					)
	ORDER BY o.date_time;
ALTER TABLE deliv_unassigned_orders_list OWNER TO polimerplast;	