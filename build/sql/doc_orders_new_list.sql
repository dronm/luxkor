-- View: doc_orders_new_list

--DROP VIEW doc_orders_new_list;

CREATE OR REPLACE VIEW doc_orders_new_list AS 
	SELECT
		d.id,
		d.number,
		d.date_time,
		d.date_time_descr,
		
		d.delivery_plan_date,
		d.delivery_plan_date_descr,
		d.behind_plan,
		
		d.address_descr,		
		d.client_id,
		d.client_descr,		
		d.warehouse_id,
		d.warehouse_descr,
		d.products_descr,
		d.product_ids,
		d.total,
		d.total_descr,		
		d.total_quant,
		d.total_volume,		
		d.state,		
		d.state_descr
	
	FROM doc_orders_list AS d
	
	WHERE d.state='new'::order_states
		OR d.state='waiting_for_us'::order_states
		OR d.state='waiting_for_client'::order_states
		;
ALTER TABLE doc_orders_new_list OWNER TO polimerplast;

