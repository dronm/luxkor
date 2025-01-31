-- View: deliv_assigned_orders_for_client

--DROP VIEW deliv_assigned_orders_for_client;


CREATE OR REPLACE VIEW deliv_assigned_orders_for_client AS 
	SELECT 
		t.deliv_date,
		o.client_id,
		t.vehicle_id,
		t.added_date_time,
		o.id AS order_id,
		
		--накладная
		'Накл.:'||o.number::text||' '||
		'от '||w.address||' '||
		'до '||d.address||'. '||
		'Продукция: '||o.product_str||'. '||
		'Вес: '||o.total_weight||' '||
		'Объем: '||o.total_volume
		AS order_descr,
		
		--ТС
		vh.plate||' ,'||vh.model||' '||vh.vol::text || 'м3/' ||vh.load_weight_t::text||'т' AS vh_descr,
		
		--Водитель
		dr.name||' '||dr.cel_phone AS driver_descr,
		
		'Время: '||dh.h_from||'-'||dh.h_to AS deliv_hour_descr
		
	FROM deliveries t
	LEFT JOIN doc_orders AS o ON o.id=t.doc_order_id
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	LEFT JOIN warehouses AS w ON w.id=o.warehouse_id
	LEFT JOIN client_destinations_list AS d ON d.id=o.deliv_destination_id
	LEFT JOIN vehicles AS vh ON vh.id=t.vehicle_id
	LEFT JOIN drivers AS dr ON dr.id=vh.driver_id
	LEFT JOIN delivery_hours As dh ON dh.id=t.delivery_hour_id
	WHERE 
		(SELECT st.state FROM doc_orders_states AS st
		WHERE st.doc_orders_id=o.id
		ORDER BY st.date_time DESC
		LIMIT 1
		)
		NOT IN (
			'closed',
			'canceled',
			'canceled_by_sales_manager',
			'canceled_by_client'
		)
		
	;
ALTER TABLE deliv_assigned_orders_for_client OWNER TO polimerplast;

