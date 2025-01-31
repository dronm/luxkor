-- View: doc_orders_cust_survey_dialog

--DROP VIEW doc_orders_cust_survey_dialog;

CREATE OR REPLACE VIEW doc_orders_cust_survey_dialog AS 
	SELECT
		d.id,		
		
		d.cust_surv_date_time,
		date8_time5_descr(d.cust_surv_date_time) AS cust_surv_date_time_descr,
		
		d.number,
		d.processed,
		
		d.client_id,
		cl.name AS client_descr,
		
		d.deliv_responsable,
		d.deliv_responsable_tel,
		
		u.name AS client_user_descr,
		u.cel_phone AS client_user_cel_phone,
		
		d.cust_surv_comment
		
	FROM doc_orders AS d
	LEFT JOIN clients AS cl ON cl.id=d.client_id
	LEFT JOIN users AS u ON u.id=d.user_id
	;

ALTER TABLE doc_orders_cust_survey_dialog OWNER TO polimerplast;

