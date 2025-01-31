-- Function: email_new_account(user_id int,client_id int,new_pwd text)

--DROP FUNCTION email_new_account(user_id int,client_id int,new_pwd text);

CREATE OR REPLACE FUNCTION email_new_account(user_id int,client_id int,new_pwd text)
  RETURNS RECORD  AS
$BODY$
	WITH 
		templ AS (
		SELECT t.template AS v,t.mes_subject AS s
		FROM email_templates t
		WHERE t.email_type='new_account'
		)	
	SELECT
		sms_templates_text(
			ARRAY[
				ROW('user',u.name::text)::template_value,
				ROW('pwd',$3)::template_value,
				ROW('client',(
					SELECT cl.name::text
					FROM clients cl
					WHERE cl.id=$2
					)
				)::template_value
			],
			(SELECT v FROM templ)
		)
		AS mes_body,		
		u.email::text AS email,
		(SELECT s FROM templ) AS mes_subject,
		''::text AS firm,
		u.name::text AS client
	FROM users u
	WHERE u.id=$1;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION email_new_account(user_id int,client_id int,new_pwd text) OWNER TO polimerplast;
