-- Trigger: product_warehouses_trigger on product_warehouses

-- DROP TRIGGER product_warehouses_trigger ON product_warehouses;

CREATE TRIGGER product_warehouses_trigger
  AFTER INSERT OR UPDATE OR DELETE
  ON product_warehouses FOR EACH ROW
  EXECUTE PROCEDURE product_warehouses_process();
