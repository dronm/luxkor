-- View: sms_for_sending_list

DROP VIEW sms_for_sending_list;

CREATE OR REPLACE VIEW sms_for_sending_list AS 
	SELECT
		t.*,
		get_sms_types_descr(t.sms_type) As sms_type_descr,
		date8_time5_descr(t.date_time) AS date_time_descr,
		date8_time5_descr(t.delivered_date_time) AS delivered_date_time_descr,
		date8_time5_descr(t.sent_date_time) AS sent_date_time_descr
	FROM sms_for_sending AS t
	ORDER BY t.date_time DESC;
ALTER TABLE sms_for_sending_list OWNER TO polimerplast;

