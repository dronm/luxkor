CREATE OR REPLACE FUNCTION before_log_out()
  RETURNS trigger AS
$BODY$
BEGIN
	IF NEW.date_time_out IS NOT NULL THEN
		PERFORM doc_tmp_clear_on_login_id(NEW.id);
	END IF;
	
	RETURN NEW;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION before_log_out() OWNER TO polimerplast;

