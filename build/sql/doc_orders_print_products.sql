-- View: doc_orders_print_products

DROP VIEW doc_orders_print_products;

CREATE OR REPLACE VIEW doc_orders_print_products AS 
	SELECT
		t.*,
		products_descr(p,t.mes_length,t.mes_width,t.mes_height,FALSE)
			AS dimen,
		mu.name AS base_measure_unit_descr,
		mu_o.name AS order_measure_unit_descr,
		
		doc_order_calc_quant_in_mu(
			t.product_id,
			p.order_measure_unit_id,
			t.mes_length,
			t.mes_width,
			t.mes_height,
			t.quant_base_measure_unit,
			p.base_measure_unit_id
		) AS quant_order_measure_unit,
		
		--настандартные размеры
		CASE
			WHEN
				product_extra_pay_for_abnormal_size(p,t.mes_length,t.mes_width)
			THEN				
				COALESCE(
					(SELECT csp.category
					FROM product_custom_size_prices AS csp
					WHERE csp.product_id=t.product_id
						AND csp.quant<=
						eval(eval_params(
							p.extra_pay_calc_formula,
							t.mes_length,
							t.mes_width,
							t.mes_height
						))							
					ORDER BY csp.quant DESC LIMIT 1
					)
				,0)
				
			ELSE 0
		END AS extra_price_category		
		
	FROM doc_orders_t_products_dialog AS t
	LEFT JOIN products AS p ON p.id=t.product_id
	LEFT JOIN measure_units AS mu ON mu.id=p.base_measure_unit_id
	LEFT JOIN measure_units AS mu_o ON mu_o.id=p.order_measure_unit_id
	ORDER BY t.doc_id,t.line_number
	;
ALTER TABLE doc_orders_print_products OWNER TO polimerplast;

