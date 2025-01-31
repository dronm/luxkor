-- Trigger: clients_trigger on client_destinations

-- DROP TRIGGER clients_trigger ON client_destinations;

CREATE TRIGGER clients_trigger
  BEFORE DELETE
  ON clients FOR EACH ROW
  EXECUTE PROCEDURE clients_process();
