-- Function: close_pending_session()

-- DROP FUNCTION close_pending_session();

CREATE OR REPLACE FUNCTION close_pending_session()
  RETURNS void AS
$BODY$
	SELECT doc_tmp_clear_on_login_id(t.id)
	FROM logins t WHERE t.date_time_out IS NULL AND (now()-t.date_time_in)>'48 hours';
	
	UPDATE logins
		SET date_time_out = now()
	WHERE id IN 
	(
	SELECT t.id FROM logins t WHERE t.date_time_out IS NULL AND (now()-t.date_time_in)>'48 hours'
	);
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION close_pending_session() OWNER TO polimerplast;
