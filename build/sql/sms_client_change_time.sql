-- View: sms_client_change_time

-- DROP VIEW sms_client_change_time;

CREATE OR REPLACE VIEW sms_client_change_time AS 
	SELECT
		o.id AS doc_order_id,
		dlv.deliv_date,
		o.deliv_responsable_tel AS cel_phone,
		sms_templates_text(
			ARRAY[
				ROW('user',o.deliv_responsable::text)::template_value,
				ROW('client',cl.name_full::text)::template_value,
				ROW('driver',dr.name::text)::template_value,
				ROW('plate',v.plate::text)::template_value,
				ROW('period',dlvh.h_from::text||'-'::text||dlvh.h_to::text)::template_value,
				ROW('tel',dr.cel_phone::text)::template_value,
				ROW('vm',o.total_volume::text)::template_value,
				ROW('wt',o.total_weight::text)::template_value
			],
			( SELECT t.template FROM sms_templates t
			WHERE t.sms_type = 'client_change_time'::sms_types)
		) AS message
	FROM doc_orders o
	LEFT JOIN clients cl ON cl.id = o.client_id
	LEFT JOIN deliveries dlv ON dlv.doc_order_id = o.id
	LEFT JOIN vehicles v ON v.id = dlv.vehicle_id
	LEFT JOIN drivers dr ON dr.id = v.driver_id
	LEFT JOIN delivery_hours dlvh ON dlvh.id = dlv.delivery_hour_id
	WHERE o.deliv_responsable_tel IS NOT NULL
		AND o.deliv_responsable_tel::text <> ''::text
		AND o.deliv_type='by_supplier'::delivery_types
		AND tel_cel_correct(o.deliv_responsable_tel::text)
		;

ALTER TABLE sms_client_change_time
  OWNER TO polimerplast;
