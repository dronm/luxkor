-- View: mail_for_sending_list

DROP VIEW mail_for_sending_list;

CREATE OR REPLACE VIEW mail_for_sending_list AS 
	SELECT
		t.*,
		get_email_types_descr(t.email_type) AS email_type_descr,
		date8_time5_descr(t.date_time) AS date_time_descr,
		date8_time5_descr(t.sent_date_time) AS sent_date_time_descr		
	FROM mail_for_sending AS t
	ORDER BY t.date_time DESC;
ALTER TABLE mail_for_sending_list OWNER TO polimerplast;

