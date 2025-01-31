-- Function: public.doc_orders_update_totals(integer)

-- DROP FUNCTION public.doc_orders_update_totals(integer);

CREATE OR REPLACE FUNCTION public.doc_orders_update_totals(in_doc_id integer)
  RETURNS void AS
$BODY$
	UPDATE doc_orders
	SET
		product_str = prod.products,
		product_ids = prod.product_ids,
		total_quant = prod.quant_sum,
		total_volume = prod.volume_sum,
		total_weight = prod.weight_sum,
		total = prod.total_sum,
		total_pack = prod.total_pack_sum
	FROM (
		SELECT
			string_agg(p.name,',') AS products,
			array_agg(p.id) AS product_ids,
			SUM(t.quant) AS quant_sum,
			SUM(t.volume) AS volume_sum,
			SUM(t.weight) AS weight_sum,
			coalesce(SUM(t.total),0) AS total_sum,
			coalesce(SUM(t.total_pack),0) AS total_pack_sum
		FROM doc_orders_t_products AS t
		LEFT JOIN products AS p ON p.id=t.product_id
		WHERE t.doc_id=$1
	) AS prod
	WHERE id=$1;

$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION public.doc_orders_update_totals(integer)
  OWNER TO polimerplast;

