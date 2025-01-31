-- Function: public.product_measure_units_check(integer, integer, integer, integer, integer, numeric)

-- DROP FUNCTION public.product_measure_units_check(integer, integer, integer, integer, integer, numeric);

CREATE OR REPLACE FUNCTION public.product_measure_units_check(
    IN product_id integer,
    IN mes_l integer,
    IN mes_w integer,
    IN mes_h integer,
    IN measure_unit_id integer,
    IN quant numeric)
  RETURNS TABLE(measure_unit_id integer, measure_unit_descr text, quant numeric) AS
$BODY$

	WITH
	-- пересчет в базовое количество
	base_quant AS (SELECT 
		eval(
			eval_params(
				(SELECT t.calc_formula
				FROM product_measure_units t
				WHERE t.product_id=$1
				AND t.measure_unit_id=$5)
				,$2,$3,$4
			)
		)*$6::numeric(30,20) AS q
	)
	SELECT
			mu.id,
			mu.name_full::text,
			ROUND(
				( CASE WHEN eval(eval_params(pmu.calc_formula,$2,$3,$4))=0 THEN 0
				ELSE (SELECT t.q FROM base_quant t) / eval(eval_params(pmu.calc_formula,$2,$3,$4))
				END
				)
			,4) AS quant
		FROM product_measure_units AS pmu
		LEFT JOIN measure_units AS mu ON mu.id=pmu.measure_unit_id
		WHERE
			pmu.product_id=$1
			AND pmu.in_use AND mu.is_int
			AND mu.id<>$5
			AND 
				@(
				( CASE WHEN eval(eval_params(pmu.calc_formula,$2,$3,$4))=0 THEN 0 ELSE (SELECT t.q FROM base_quant t) / eval(eval_params(pmu.calc_formula,$2,$3,$4)) END) -
				ROUND(
					CASE WHEN eval(eval_params(pmu.calc_formula,$2,$3,$4))=0 THEN 0 ELSE (SELECT t.q FROM base_quant t) / eval(eval_params(pmu.calc_formula,$2,$3,$4)) END
					)
				)>const_product_measure_unit_check_deviat_val()
		;
		
$BODY$
  LANGUAGE sql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.product_measure_units_check(integer, integer, integer, integer, integer, numeric)
  OWNER TO polimerplast;

