-- View: public.doc_orders_t_tmp_prod_batches_list

-- DROP VIEW public.doc_orders_t_tmp_prod_batches_list;

CREATE OR REPLACE VIEW public.doc_orders_t_tmp_prod_batches_list
 AS
 SELECT
 	t.login_id,
	t.view_id,
	t.line_number,
	t.batch_descr,
	t.ext_id	
   FROM doc_orders_t_tmp_prod_batches t
  ORDER BY t.line_number;

ALTER TABLE public.doc_orders_t_tmp_prod_batches_list
    OWNER TO polimerplast;


