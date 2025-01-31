-- View: sms_client_change_time

--DROP VIEW sms_client_change_time;

CREATE OR REPLACE VIEW sms_client_change_time AS 
	SELECT
		o.id AS doc_order_id,
		dlv.deliv_date,
		o.deliv_responsable_tel AS cel_phone,
		sms_templates_text(
			ARRAY[
			format('("user","%s")',
				o.deliv_responsable::text)::template_value,
			format('("client","%s")',
				replace(cl.name_full::text,'"',''))::template_value,
			format('("driver","%s")',
				dr.name::text)::template_value,
			format('("plate","%s")',
				v.plate::text)::template_value,								
			format('("period","%s")',
				dlvh.h_from::text||'-'||dlvh.h_to::text)::template_value,												
			format('("tel","%s")',
				dr.cel_phone::text)::template_value,				
			format('("vm","%s")',
				o.total_volume::text)::template_value,				
			format('("wt","%s")',
				o.total_weight::text)::template_value
			],
			(SELECT t.template FROM sms_templates t
			WHERE t.sms_type='client_change_time'::sms_types)
		) AS message
		
	FROM doc_orders o
	LEFT JOIN clients cl ON cl.id=o.client_id	
	LEFT JOIN deliveries dlv ON dlv.doc_order_id=o.id	
	LEFT JOIN vehicles v ON v.id=dlv.vehicle_id	
	LEFT JOIN drivers dr ON dr.id=v.driver_id	
	LEFT JOIN delivery_hours dlvh ON dlvh.id=dlv.delivery_hour_id	
	WHERE o.deliv_responsable_tel IS NOT NULL
		AND o.deliv_responsable_tel<>''
	;
ALTER TABLE sms_client_change_time OWNER TO polimerplast;