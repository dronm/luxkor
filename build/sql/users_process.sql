-- Function: users_process()

-- DROP FUNCTION users_process();

CREATE OR REPLACE FUNCTION users_process()
  RETURNS trigger AS
$BODY$
DECLARE
	v_orders_cnt int;
BEGIN
	IF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		--склады
		DELETE FROM user_warehouses WHERE user_id=OLD.id;
		
		RETURN OLD;
	END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION users_process()
  OWNER TO polimerplast;
