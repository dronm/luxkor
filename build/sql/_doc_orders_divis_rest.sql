DROP function doc_orders_divis_rest(orig_doc_id integer, new_doc_id integer);
/*
CREATE OR REPLACE FUNCTION doc_orders_divis_rest(orig_doc_id integer, new_doc_id integer)
	RETURNS TABLE(
		product_id int,
		price numeric,
		mes_length int,
		mes_width int,
		mes_height int,
		measure_unit_id int,
		pack_exists boolean,
		pack_in_price boolean,
		price_no_deliv numeric,
		price_edit boolean,

		quant numeric,
		quant_base_measure_unit numeric,
		volume numeric,
		weight numeric,
		total numeric,
		total_pack numeric
	)
AS $body$
	SELECT
		sub.product_id,
		sub.price,
		sub.mes_length,
		sub.mes_width,
		sub.mes_height,
		sub.measure_unit_id,
		sub.pack_exists,
		sub.pack_in_price,
		sub.price_no_deliv,
		sub.price_edit,

		sum(sub.quant) AS quant,
		sum(sub.quant_base_measure_unit) AS quant_base_measure_unit,
		sum(sub.volume) AS volume,
		sum(sub.weight) AS weight,
		sum(sub.total) AS total,
		sum(sub.total_pack) AS total_pack
		
	FROM (
		(SELECT
			p_orig.product_id,
			p_orig.price,
			p_orig.mes_length,
			p_orig.mes_width,
			p_orig.mes_height,
			p_orig.measure_unit_id,
			p_orig.pack_exists,
			p_orig.pack_in_price,
			p_orig.price_no_deliv,
			p_orig.price_edit,
		
			p_orig.quant,
			p_orig.quant_base_measure_unit,
			p_orig.volume,
			p_orig.weight,
			p_orig.total,
			p_orig.total_pack
		FROM doc_orders_t_products AS p_orig
		WHERE p_orig.doc_id=$1)

		UNION ALL

		(SELECT 
			p_new.product_id,
			p_new.price,
			p_new.mes_length,
			p_new.mes_width,
			p_new.mes_height,
			p_new.measure_unit_id,
			p_new.pack_exists,
			p_new.pack_in_price,
			p_new.price_no_deliv,
			p_new.price_edit,
			-p_new.quant,
			-p_new.quant_base_measure_unit,
			-p_new.volume,
			-p_new.weight,
			-p_new.total,
			-p_new.total_pack
		FROM doc_orders_t_products AS p_new
		WHERE p_new.doc_id=$2)
	) AS sub
	GROUP BY
		sub.product_id,
		sub.price,
		sub.mes_length,
		sub.mes_width,
		sub.mes_height,
		sub.measure_unit_id,
		sub.pack_exists,
		sub.pack_in_price,
		sub.price_no_deliv,
		sub.price_edit
	;
$body$ LANGUAGE sql;
ALTER FUNCTION doc_orders_divis_rest(orig_doc_id integer, new_doc_id integer)
OWNER TO polimerplast;	
*/