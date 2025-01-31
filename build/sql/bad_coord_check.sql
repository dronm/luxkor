-- Function: bad_coord_check()

-- DROP FUNCTION bad_coord_check();

CREATE OR REPLACE FUNCTION bad_coord_check()
  RETURNS trigger AS
$BODY$
BEGIN
	IF NEW.period>((now() at time zone 'UTC')+'30 minutes'::interval) THEN
		IF NEW.gps_valid=1 THEN
			NEW.period=NEW.recieved_dt;
		ELSE
			--skeep bad record
			RETURN NULL;
		END IF;
	END IF;

	RETURN NEW;
	
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION bad_coord_check() OWNER TO polimerplast;
