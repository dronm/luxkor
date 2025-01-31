/*Снабженец получает информацию о факте назначения временного интервала (автомобиля) на отгрузку на завтра
выбрать назначения на определенную дату, не отгруженные

	mes_body text,
	email text,
	mes_subject  text,
	firm text,
	client text
*/

-- View: email_text_order_remind

--DROP VIEW email_text_order_remind;

CREATE OR REPLACE VIEW email_text_order_remind AS 
	WITH templ AS (SELECT t.template AS v,t.mes_subject AS s
			FROM email_templates t
			WHERE t.email_type='order_remind'
			)

	SELECT
		d.deliv_date,
		sms_templates_text(
			ARRAY[		
			ROW('user',u.name_full::text)::template_value,
			ROW('firm',f.name::text)::template_value,
			ROW('client',cl.name_full::text)::template_value,
			ROW('products',o.product_str::text)::template_value,
			ROW('number',o.number::text)::template_value,
			ROW('vm',o.total_volume::text)::template_value,
			ROW('wt',o.total_weight::text)::template_value,
			ROW('car',v.plate::text)::template_value,
			ROW('car_model',v.model::text)::template_value,
			ROW('time',dh.name::text)::template_value
			],
			(SELECT v FROM templ)
		) AS mes_body,		
	
		u.email::text AS email,
		(SELECT s FROM templ) AS mes_subject,
		f.name::text AS firm,
		cl.name::text AS client
	FROM deliveries AS d
	LEFT JOIN delivery_hours AS dh ON dh.id = d.delivery_hour_id
	LEFT JOIN doc_orders AS o ON o.id = d.doc_order_id
	LEFT JOIN vehicles AS v ON v.id = d.vehicle_id
	LEFT JOIN users AS u ON u.id=o.client_user_id
	LEFT JOIN firms AS f ON f.id=o.firm_id
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	WHERE o.deliv_type<>'by_client' AND u.email IS NOT NULL AND u.email<>''
	;

ALTER VIEW email_text_order_remind OWNER TO polimerplast;
