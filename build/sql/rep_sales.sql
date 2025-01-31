-- View: rep_sales

--DROP VIEW rep_sales;

CREATE OR REPLACE VIEW rep_sales AS 
	SELECT 
		o.id,
		o.number,
		o.firm_id,
		f.name AS firm_descr,		
		o.client_id,
		cl.name AS client_descr,
		o.delivery_fact_date AS date_time,
		date8_time5_descr(o.delivery_fact_date) As date_time_descr,
		t.product_id,
		p.name AS product_descr,
		
		o.warehouse_id,
		w.name AS warehouse_descr,
		
		w.production_city_id,
		pc.name AS production_city_descr,

		o.user_id,
		u.name AS user_descr,
		
		o.deliv_type AS delivery_type,
		get_delivery_types_descr(o.deliv_type) AS delivery_type_descr,
		
		t.volume,
		t.quant_base_measure_unit,
		
		t.total
		
	FROM doc_orders_t_products AS t
	LEFT JOIN doc_orders AS o ON t.doc_id=o.id
	LEFT JOIN firms AS f ON f.id=o.firm_id
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	LEFT JOIN warehouses AS w ON w.id=o.warehouse_id
	LEFT JOIN production_cities AS pc ON pc.id=w.production_city_id		
	LEFT JOIN products AS p ON p.id=t.product_id
	LEFT JOIN users AS u ON u.id=o.user_id
	WHERE o.delivery_fact_date IS NOT NULL
	;
ALTER TABLE rep_sales OWNER TO polimerplast;