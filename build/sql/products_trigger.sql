-- Trigger: products_trigger on client_destinations

-- DROP TRIGGER products_trigger ON products;

CREATE TRIGGER products_trigger
  BEFORE DELETE
  ON products FOR EACH ROW
  EXECUTE PROCEDURE products_process();
