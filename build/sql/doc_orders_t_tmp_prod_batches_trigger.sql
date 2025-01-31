-- Trigger: doc_orders_t_tmp_prod_batches_before_trigger on doc_orders_t_tmp_prod_batches

-- DROP TRIGGER doc_orders_t_tmp_prod_batches_before_trigger ON doc_orders_t_tmp_prod_batches;
/*
CREATE TRIGGER doc_orders_t_tmp_prod_batches_before_trigger
  BEFORE DELETE OR INSERT OR UPDATE
  ON doc_orders_t_tmp_prod_batches FOR EACH ROW
  EXECUTE PROCEDURE doc_orders_t_tmp_prod_batches_process();
  */
  
/*
  CREATE TRIGGER doc_orders_t_tmp_prod_batches_after_trigger
  AFTER DELETE OR INSERT OR UPDATE
  ON doc_orders_t_tmp_prod_batches FOR EACH ROW
  EXECUTE PROCEDURE doc_orders_t_tmp_prod_batches_process();
  */
