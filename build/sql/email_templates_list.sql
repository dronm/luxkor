-- View: email_templates_list

DROP VIEW email_templates_list;

CREATE OR REPLACE VIEW email_templates_list AS 
	SELECT
		st.id,
		st.email_type,
		st.mes_subject,
		get_email_types_descr(st.email_type) AS email_type_descr,
		st.template,
		st.comment_text,
		'['||array_to_string(st.fields,'],[')||']' AS fields
	FROM email_templates AS st;

ALTER TABLE email_templates_list OWNER TO polimerplast;

