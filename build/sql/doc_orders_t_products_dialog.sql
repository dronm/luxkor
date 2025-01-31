-- View: doc_orders_t_products_dialog

--drop view doc_orders_print_products;
--DROP VIEW doc_orders_t_products_dialog;

CREATE OR REPLACE VIEW doc_orders_t_products_dialog AS 
	SELECT
		t.doc_id,
		t.line_number,
		t.product_id,
		p.name AS product_descr,
		t.quant,
		ROUND(t.quant,0) AS quant_descr,
		t.quant_base_measure_unit,
		t.volume,
		t.weight,
		t.price,
		t.price_no_deliv,
		t.price_edit,
		t.price_round,
		format_money(t.price) AS price_descr,
		t.total,
		format_money(t.total) AS total_descr,
		t.mes_length,
		t.mes_width,
		t.mes_height,
		t.measure_unit_id,
		mu.name AS measure_unit_descr,
		t.pack_exists,
		t.pack_in_price
		
	FROM doc_orders_t_products AS t
	LEFT JOIN products AS p ON p.id=t.product_id
	LEFT JOIN measure_units AS mu ON mu.id=t.measure_unit_id
	ORDER BY t.line_number;
ALTER TABLE doc_orders_t_products_dialog OWNER TO polimerplast;

