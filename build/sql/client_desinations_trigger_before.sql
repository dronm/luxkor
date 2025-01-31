-- Trigger: client_destinations_trigger_before on client_destinations

-- DROP TRIGGER client_destinations_trigger_before ON client_destinations;

CREATE TRIGGER client_destinations_trigger_before
  BEFORE DELETE
  ON client_destinations
  FOR EACH ROW
  EXECUTE PROCEDURE client_destinations_process();
