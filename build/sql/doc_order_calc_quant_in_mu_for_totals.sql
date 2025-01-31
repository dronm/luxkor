/*
DROP function doc_order_calc_quant_in_mu_for_totals(
		in_product_id integer,
		in_in_measure_unit_id integer,
		mes_l integer,
		in_mes_w integer,
		in_mes_h integer,		
		in_quant numeric,
		in_measure_unit_id_from integer		
);
*/
/**
 * Пересчитывает количество в любой единице
 * в количество в другой единице вызывается ТОЛЬКО ИЗ doc_order_totals
 */
CREATE or REPLACE function doc_order_calc_quant_in_mu_for_totals(
		in_product_id integer,
		in_measure_unit_id integer,
		in_mes_l integer,
		in_mes_w integer,
		in_mes_h integer,		
		in_quant numeric,
		in_measure_unit_id_from integer		
)
	RETURNS numeric
AS $body$
	
	SELECT
		CASE
			WHEN coalesce((SELECT mu.is_int FROM measure_units AS mu WHERE mu.id=in_measure_unit_id),FALSE) THEN ceil(val * in_quant)
			ELSE round(val * in_quant,9)
		END
	FROM
	(
		WITH
		measure_unit_in_base AS (
		SELECT
			eval(
				eval_params(
					(SELECT
						pmu.calc_formula
					FROM product_measure_units AS pmu
					WHERE pmu.product_id=in_product_id AND pmu.measure_unit_id=in_measure_unit_id
					),
					in_mes_l,in_mes_w,in_mes_h
				)
			) AS val		
		)
		SELECT
			CASE WHEN (SELECT val FROM measure_unit_in_base)=0 THEN 0
			ELSE
				eval(
					eval_params(
						(SELECT
							pmu.calc_formula
						FROM product_measure_units AS pmu
						WHERE pmu.product_id=in_product_id AND pmu.measure_unit_id=in_measure_unit_id_from
						),
						in_mes_l,in_mes_w,in_mes_h
					)
				)
				/ (SELECT val FROM measure_unit_in_base)
			END
			AS val
	) AS q
	
	;
$body$
language sql;
ALTER function doc_order_calc_quant_in_mu_for_totals(
		in_product_id integer,
		in_measure_unit_id integer,
		in_mes_l integer,
		in_mes_w integer,
		in_mes_h integer,		
		in_quant numeric,
		in_measure_unit_id_from integer		
) OWNER TO polimerplast;
