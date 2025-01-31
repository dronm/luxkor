-- Function: public.sess_write(character varying, text, character varying)

-- DROP FUNCTION public.sess_write(character varying, text, character varying);

CREATE OR REPLACE FUNCTION public.sess_write(
    in_id character varying,
    in_data text,
    in_remote_ip character varying)
  RETURNS void AS
$BODY$
BEGIN
	UPDATE sessions
	SET
		set_time = now(),
		data = in_data
	WHERE id = in_id;
	
	IF FOUND THEN
		RETURN;
	END IF;
	
	BEGIN
		INSERT INTO sessions (id, data, set_time)
		VALUES(in_id, in_data, now());
		
		INSERT INTO logins(date_time_in,ip,session_id)
		VALUES(now(),in_remote_ip,in_id);
		
	EXCEPTION WHEN OTHERS THEN
		UPDATE sessions
		SET
			set_time = now(),
			data = in_data
		WHERE id = in_id;
	END;
	
	RETURN;

END;	
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION public.sess_write(character varying, text, character varying)
  OWNER TO polimerplast;

