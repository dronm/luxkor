-- Function: email_text_balance_to_client(firm_id integer,client_id integer)

--DROP FUNCTION email_text_balance_to_client(firm_id integer,client_id integer);

CREATE OR REPLACE FUNCTION email_text_balance_to_client(firm_id integer,client_id integer)
  RETURNS RECORD AS
/*
	mes_body text,
	email text,
	mes_subject text,
	firm text,
	client text
*/  
$BODY$
	WITH 
		templ AS (
		SELECT
			t.template AS v,
			t.mes_subject AS s
		FROM email_templates t
		WHERE t.email_type='balance_to_client'
		),
		
		user_data AS (
			SELECT
				u.name::text,
				u.email::text
		FROM users u
		WHERE u.client_id=$2
			AND u.email IS NOT NULL AND u.email<>''
		LIMIT 1
		),
		firm_data AS (
			SELECT
				f.name::text AS name
		FROM firms f WHERE f.id=$1
		),
		client_data AS (
			SELECT
				cl.name::text
		FROM clients cl WHERE cl.id=$2
		)
	SELECT
		sms_templates_text(
			ARRAY[
			ROW('user',(SELECT t.name FROM user_data t))::template_value,
			ROW('client',(SELECT t.name FROM client_data t))::template_value,
			ROW('firm',(SELECT t.name FROM firm_data t))::template_value
			],
			(SELECT v FROM templ)
		)
		
		AS mes_body,		
		(SELECT t.email FROM user_data t) AS email,
		(SELECT s FROM templ) AS mes_subject,
		(SELECT t.name FROM firm_data t) AS firm,
		(SELECT t.name FROM client_data t) AS client
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION email_text_balance_to_client(firm_id integer,client_id integer)
	OWNER TO polimerplast;
