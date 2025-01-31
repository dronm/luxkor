--DROP function doc_order_recalc_quant_in_m2(int,int,int,int,numeric);

CREATE or REPLACE function doc_order_recalc_quant_in_m2(
		in_product_id int,
		in_mes_l int,
		in_mes_w int,
		in_mes_h int,		
		in_quant numeric
)
	RETURNS numeric
AS $body$
	WITH
		prod_int_mu AS (SELECT
				t_pmu.measure_unit_id AS mu_id
			FROM product_measure_units AS t_pmu
			LEFT JOIN measure_units AS t_mu ON t_mu.id=t_pmu.measure_unit_id
			WHERE t_pmu.product_id=in_product_id AND t_mu.is_int AND t_pmu.in_use					
			LIMIT 1
		)
	SELECT
		--перевод обратно в м2
		doc_order_calc_quant_in_mu_for_totals(
			in_product_id,
			6,--m2,
			in_mes_l,in_mes_w,in_mes_h,
			--количество в целой единице
			doc_order_calc_quant_in_mu_for_totals(
				15,
				--целая единица
				(SELECT prod_int_mu.mu_id FROM prod_int_mu),
				in_mes_l,in_mes_w,in_mes_h,
				in_quant,--quant
				6 --measure from
			),
			(SELECT prod_int_mu.mu_id FROM prod_int_mu)
		)
	;
$body$
language sql;

ALTER function doc_order_recalc_quant_in_m2(int,int,int,int,numeric) OWNER TO polimerplast;
