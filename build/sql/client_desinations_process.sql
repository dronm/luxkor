-- Function: client_destinations_process()

-- DROP FUNCTION client_destinations_process();

CREATE OR REPLACE FUNCTION client_destinations_process()
  RETURNS trigger AS
$BODY$
DECLARE
	v_id int;
BEGIN
	IF (TG_WHEN='AFTER') THEN
		v_id = 0;
		IF (TG_OP='UPDATE') THEN
			IF (ST_AsText(NEW.zone_center)<>ST_AsText(OLD.zone_center)) THEN
				v_id = NEW.id;
			END IF;
		ELSE
			--удаление
			v_id = OLD.id;
		END IF;
		
		IF v_id>0 THEN
			DELETE FROM deliv_distance_cache
			WHERE client_destination_id = v_id;
		END IF;
		
		IF (TG_OP='UPDATE') THEN
			RETURN NEW;
		ELSE
			RETURN OLD;
		END IF;
		
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		DELETE FROM deliv_distance_cache
		WHERE client_destination_id = OLD.id;
		
		RETURN OLD;
	END IF;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION client_destinations_process()
  OWNER TO polimerplast;
