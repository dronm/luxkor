-- View: sms_undeliv_orders_remind

--DROP VIEW sms_undeliv_orders_remind;

CREATE OR REPLACE VIEW sms_undeliv_orders_remind AS 
	SELECT
		o.deliv_responsable_tel AS cel_phone,
		sms_templates_text(
			ARRAY[
				ROW('user',u.name_full::text)::template_value,
				ROW('client',cl.name_full::text)::template_value,
				ROW('date',date8_descr(o.delivery_plan_date::date)::text)::template_value,
				ROW('vm',o.total_volume::text)::template_value,
				ROW('wt',o.total_weight::text)::template_value,
				ROW('order',o.number::text)::template_value
			],
			(SELECT t.template FROM sms_templates t
			WHERE t.sms_type='client_deliv_remind'::sms_types)
		) AS message
		
	FROM doc_orders o
	LEFT JOIN clients cl ON cl.id=o.client_id	
	LEFT JOIN users u ON u.id=o.client_user_id	
	LEFT JOIN warehouses w ON w.id=o.warehouse_id	
	WHERE o.delivery_plan_date<now()::date+'1 day'::interval
		AND o.deliv_type='by_client'::delivery_types
		AND o.deliv_responsable_tel IS NOT NULL
		AND o.deliv_responsable_tel::text <> ''::text
		AND tel_cel_correct(o.deliv_responsable_tel::text)
		AND
		(
		SELECT s1.state
		FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=o.id
		ORDER BY s1.date_time DESC
		LIMIT 1
		) NOT IN (
			'closed'::order_states,
			'canceled'::order_states,
			'canceled_by_sales_manager'::order_states,
			'canceled_by_client'::order_states
			)		
	ORDER BY o.delivery_plan_date
	;
ALTER TABLE sms_undeliv_orders_remind OWNER TO polimerplast;
