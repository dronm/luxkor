-- Function: doc_orders_states_process()
-- DROP FUNCTION doc_orders_states_process();

CREATE OR REPLACE FUNCTION doc_orders_states_process()
  RETURNS trigger AS
$BODY$
BEGIN
	IF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		DELETE FROM doc_orders_head_history
		WHERE doc_orders_states_id=OLD.id;
		
		DELETE FROM doc_orders_products_history
		WHERE doc_orders_states_id=OLD.id;
		
		DELETE FROM client_pay_schedules
		WHERE doc_id=OLD.doc_orders_id;
		
		RETURN OLD;
		
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='INSERT') THEN
		IF NEW.state='shipped'::order_states THEN
			--setting vehicle_states_data tracker id and client_zone
			SELECT
				vh.tracker_id,
				ST_Buffer(dest.zone_center::geography,const_client_geo_zone_radius_m_val())::geometry,
				w.zone
			INTO
				NEW.tracker_id,
				NEW.client_zone,
				NEW.production_zone
			
			FROM deliveries dlv
			LEFT JOIN vehicles vh ON vh.id = dlv.vehicle_id
			LEFT JOIN doc_orders o ON o.id = dlv.doc_order_id
			LEFT JOIN client_destinations dest ON dest.id = o.deliv_destination_id
			LEFT JOIN warehouses w ON w.id = o.warehouse_id
			WHERE
				dlv.doc_order_id = NEW.doc_orders_id
				AND dest.zone_center IS NOT NULL
				AND const_client_geo_zone_radius_m_val()>0
				AND vh.tracker_id IS NOT NULL
				AND vh.tracker_id<>''
			;
		END IF;
		
		RETURN NEW;
	END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION doc_orders_states_process() OWNER TO polimerplast;



-- Trigger: doc_orders_states_trigger on doc_orders_states
-- DROP TRIGGER doc_orders_states_trigger ON doc_orders_states;
/*
CREATE TRIGGER doc_orders_states_trigger
  BEFORE DELETE
  ON doc_orders_states
  FOR EACH ROW
  EXECUTE PROCEDURE doc_orders_states_process();
  
CREATE TRIGGER doc_orders_states_after_trigger
  AFTER INSERT
  ON doc_orders_states
  FOR EACH ROW
  EXECUTE PROCEDURE doc_orders_states_process();
  
*/  
