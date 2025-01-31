-- Trigger: products_trigger on client_destinations

-- DROP TRIGGER products_trigger ON client_destinations;

CREATE TRIGGER products_trigger
  BEFORE DELETE
  ON products FOR EACH ROW
  EXECUTE PROCEDURE products_process();
