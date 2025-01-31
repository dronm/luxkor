-- View: sms_client_on_produced

--DROP VIEW sms_client_on_produced;

CREATE OR REPLACE VIEW sms_client_on_produced AS 
	SELECT
		o.id AS doc_order_id,
		o.deliv_responsable_tel AS cel_phone,
		sms_templates_text(
			ARRAY[
				ROW('user',u.name_full::text)::template_value,
				ROW('client',cl.name_full::text)::template_value,
				ROW('order',o.number::text)::template_value,
				ROW('vm',o.total_volume::text)::template_value,
				ROW('wt',o.total_weight::text)::template_value			
			],
			(SELECT t.template FROM sms_templates t
			WHERE t.sms_type='client_on_produced'::sms_types)
		) AS message
		
	FROM doc_orders o
	LEFT JOIN clients cl ON cl.id=o.client_id	
	LEFT JOIN users u ON u.id=o.client_user_id
	WHERE o.deliv_type='by_client'::delivery_types
		AND o.deliv_responsable_tel IS NOT NULL
		AND o.deliv_responsable_tel::text <> ''::text
		AND tel_cel_correct(o.deliv_responsable_tel::text)
	;
ALTER TABLE sms_client_on_produced OWNER TO polimerplast;
