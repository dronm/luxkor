-- View: sms_templates_list

DROP VIEW sms_templates_list;

CREATE OR REPLACE VIEW sms_templates_list AS 
	SELECT
		st.id,
		st.sms_type,
		get_sms_types_descr(st.sms_type) AS sms_type_descr,
		st.template,
		st.comment_text,
		'['||array_to_string(st.fields,'],[')||']' AS fields
	FROM sms_templates AS st;

ALTER TABLE sms_templates_list OWNER TO polimerplast;

