-- Trigger: client_destinations_trigger on client_destinations

-- DROP TRIGGER client_destinations_trigger ON client_destinations;

CREATE TRIGGER client_destinations_trigger
  AFTER UPDATE OR DELETE
  ON client_destinations
  FOR EACH ROW
  EXECUTE PROCEDURE client_destinations_process();
