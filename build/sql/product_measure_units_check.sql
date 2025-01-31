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
	prod_int_mu AS (SELECT
				t_pmu.measure_unit_id AS mu_id
			FROM product_measure_units AS t_pmu
			LEFT JOIN measure_units AS t_mu ON t_mu.id=t_pmu.measure_unit_id
			WHERE t_pmu.product_id=$1 AND t_mu.is_int AND t_pmu.in_use					
			LIMIT 1
		),
	prod_base_mu AS (SELECT
				products.base_measure_unit_id AS mu_id
			FROM products
			WHERE products.id=$1
		),
	base_quant AS (SELECT 
		CASE
			WHEN $5=6 THEN
				(SELECT
					--перевод из целой в базовую
					doc_order_calc_quant_in_mu(
						$1,
						(SELECT prod_base_mu.mu_id FROM prod_base_mu),
						$2,$3,$4,
						--количество в целых единицах
						doc_order_calc_quant_in_mu(
							$1,
							--целая единица
							(SELECT prod_int_mu.mu_id FROM prod_int_mu),
							$2,$3,$4,
							$6,--quant
							6 --measure from
						),
						(SELECT prod_int_mu.mu_id FROM prod_int_mu)
					)
				)
			ELSE
				eval(
					eval_params(
						(SELECT t.calc_formula
						FROM product_measure_units t
						WHERE t.product_id=$1
						AND t.measure_unit_id=$5)
						,$2,$3,$4
					)
				) *$6::numeric(30,20)
		END
		AS q
	)
	SELECT
			mu.id,
			mu.name_full::text,
						
			CASE
				WHEN eval(eval_params(pmu.calc_formula,$2,$3,$4))=0 THEN 0
				--было round(,4)
				ELSE round( (SELECT t.q FROM base_quant t) / eval(eval_params(pmu.calc_formula,$2,$3,$4)),4 )
			END AS quant
			
		FROM product_measure_units AS pmu
		LEFT JOIN measure_units AS mu ON mu.id=pmu.measure_unit_id
		WHERE
			pmu.product_id=$1
			AND pmu.in_use AND mu.is_int
			AND mu.id<>$5
			AND 
				@(
				(CASE
					WHEN eval(eval_params(pmu.calc_formula,$2,$3,$4))=0 THEN 0
					ELSE (SELECT t.q FROM base_quant t) / eval(eval_params(pmu.calc_formula,$2,$3,$4))
				END) -
				(CASE
					WHEN eval(eval_params(pmu.calc_formula,$2,$3,$4))=0 THEN 0
					--Было round
					ELSE round( (SELECT t.q FROM base_quant t) / eval(eval_params(pmu.calc_formula,$2,$3,$4)) )
				END)
				)>const_product_measure_unit_check_deviat_val()
		;
		
$BODY$
  LANGUAGE sql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.product_measure_units_check(integer, integer, integer, integer, integer, numeric)
  OWNER TO polimerplast;

