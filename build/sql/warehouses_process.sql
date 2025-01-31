-- Function: warehouses_process()

-- DROP FUNCTION warehouses_process();

CREATE OR REPLACE FUNCTION warehouses_process()
  RETURNS trigger AS
$BODY$
DECLARE
	v_id int;
BEGIN
	IF (TG_WHEN='BEFORE') THEN
		v_id = 0;
		IF (TG_OP='UPDATE') THEN
			IF (NEW.zone IS NULL OR ST_AsText(NEW.zone)<>ST_AsText(OLD.zone)) THEN
				v_id = NEW.id;
			END IF;
		ELSE
			--удаление
			v_id = OLD.id;
			
			DELETE FROM user_warehouses WHERE warehouse_id = v_id;
		END IF;
		
		IF v_id>0 THEN
			DELETE FROM deliv_distance_cache WHERE warehouse_id = v_id;
		END IF;
		
		IF (TG_OP='UPDATE') THEN
			RETURN NEW;
		ELSE
			RETURN OLD;
		END IF;
	END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION warehouses_process() OWNER TO polimerplast;
