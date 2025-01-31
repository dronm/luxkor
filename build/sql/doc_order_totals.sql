-- DROP FUNCTION public.doc_order_totals(integer, integer, integer, integer, integer, integer, numeric, integer, boolean, boolean, boolean, boolean, boolean, numeric, numeric);

/**
 * New function 27/08/19
 * Добавлен параметр total numeric, если price_edit=TRUE AND total>0 !!!СУММА Остается неизменной!!!
 * если же price_edit=TRUE AND total=0 Сумма пересчитывается от цены
 * Вызывается из DOCOrderDOCTProduct_Controller, если пользователь с ролью клиента, то цена всегда от прайса, доже если цена типа вручную
 *
 * 06/09/24 added parameter price_round, after price_edit
 */

-- DROP FUNCTION public.doc_order_totals(int4, int4, int4, int4, int4, int4, numeric, int4, bool, bool, bool, bool, bool, numeric, numeric);

CREATE OR REPLACE FUNCTION public.doc_order_totals(
	in_warehouse_id integer,
	in_client_id integer,
	in_product_id integer,
	in_mes_l integer,
	in_mes_w integer,
	in_mes_h integer,
	in_quant numeric,
	in_measure_unit_id integer,
	in_pack boolean,
	in_pack_in_price boolean,
	in_to_third_party_only boolean,
	in_price_edit boolean,
	in_price_round boolean,
	in_price numeric,
	in_total numeric
)
 RETURNS record
 LANGUAGE sql
AS $function$
	WITH
		prod_int_mu AS (SELECT
				t_pmu.measure_unit_id AS mu_id
			FROM product_measure_units AS t_pmu
			LEFT JOIN measure_units AS t_mu ON t_mu.id=t_pmu.measure_unit_id
			WHERE t_pmu.product_id = in_product_id AND t_mu.is_int AND t_pmu.in_use					
			LIMIT 1
		),
		prod_base_mu AS (SELECT
				products.base_measure_unit_id AS mu_id
			FROM products
			WHERE products.id = in_product_id
		),
	
		product_params AS (
		SELECT
			coalesce(p.base_measure_unit_vol_m,0) AS base_measure_unit_vol_m,
			coalesce(p.base_measure_unit_weight_t,0) AS base_measure_unit_weight_t,
			CASE
			--м2
			WHEN in_measure_unit_id = 6 THEN
				(SELECT
					--перевод из целой в базовую
					doc_order_calc_quant_in_mu_for_totals(
						in_product_id,
						(SELECT prod_base_mu.mu_id FROM prod_base_mu),
						in_mes_l, in_mes_w, in_mes_h,
						--количество в целых единицах
						doc_order_calc_quant_in_mu_for_totals(
							in_product_id,
							--целая единица
							(SELECT prod_int_mu.mu_id FROM prod_int_mu),
							in_mes_l, in_mes_w, in_mes_h,
							in_quant,
							6 --measure from
						),
						(SELECT prod_int_mu.mu_id FROM prod_int_mu)
					)
				)
			ELSE
				eval(
					eval_params(
						pmu.calc_formula,
						in_mes_l,
						in_mes_w,
						in_mes_h
					)
				) * in_quant
			END
			AS base_quant,
			
			--настандартные размеры
			CASE
				WHEN in_price_edit THEN in_price --цена вручную
				WHEN product_extra_pay_for_abnormal_size(p, in_mes_l, in_mes_w)
					/*
					p.extra_pay_for_abnormal_size=TRUE
					AND (
							p.extra_pay_for_abn_size_always=TRUE
							OR (
								p.mes_length_def_val<>in_mes_l
								OR
								p.mes_width_def_val<>in_mes_w
							)
						)
					*/
				THEN
					
					COALESCE(
						(SELECT csp.price
						FROM product_custom_size_prices AS csp
						WHERE csp.product_id = in_product_id
							AND csp.quant<=
							eval(eval_params(
								p.extra_pay_calc_formula,
								in_mes_l,
								in_mes_w,
								in_mes_h
							))							
						ORDER BY csp.quant DESC LIMIT 1
						)
					,0)
					
				ELSE 0
			END AS extra_price
		FROM products p
		LEFT JOIN product_measure_units AS pmu
			ON pmu.product_id=p.id AND pmu.measure_unit_id = in_measure_unit_id
		WHERE p.id = in_product_id
		),
		
		price_list AS (
			SELECT *
			FROM product_price(
				in_client_id,				
				(SELECT w.production_city_id
					FROM warehouses w WHERE w.id = in_warehouse_id
				),
				in_to_third_party_only,
				in_product_id,
				(SELECT t.base_quant FROM product_params t) / in_quant
			)				
			AS (price numeric,price_pack numeric,discount_total numeric)
		),
		
		price AS (
			SELECT
				--Цена на продукцию + доп.цена за нестандартные размеры + упаковка
				(SELECT t.price FROM price_list t) +
				(SELECT t.extra_price FROM product_params t) +
				CASE
					WHEN in_pack AND in_pack_in_price THEN
						(SELECT t.price_pack FROM price_list t)
					ELSE 0
				END AS val
		)
		
	SELECT			
		--БАЗОВОЕ КОЛИЧЕСТВО
		round( (SELECT t.base_quant FROM product_params t) ,6) AS base_quant,
		
		--ОБЪЕМ
		round(
		(SELECT t.base_measure_unit_vol_m FROM product_params t)*
		(SELECT t.base_quant FROM product_params t)
		,2) AS volume_m,

		--МАССА
		round(
		(SELECT t.base_measure_unit_weight_t FROM product_params t)*
		(SELECT t.base_quant FROM product_params t)
		,3) AS weight_t,
		
		--ЦЕНА БЕЗ ТР - чистая		
		CASE
		WHEN in_price_round and coalesce((SELECT t.base_quant FROM product_params t),0) = 0 THEN 0
		WHEN in_price_round THEN
			round(
				ceil(
					CASE
					WHEN in_price_edit AND in_mes_l<>0 THEN in_total
					WHEN in_price_edit AND in_mes_l=0 THEN in_price * (SELECT t.base_quant FROM product_params t)			
					ELSE (SELECT price.val FROM price) * (SELECT t.base_quant FROM product_params t)
					END
					--Скидка за объем
					- (SELECT coalesce(t.discount_total,0) FROM price_list t)
				) / (SELECT t.base_quant FROM product_params t)
			,2)
		WHEN in_price_edit THEN in_price
		ELSE
			round( (SELECT price.val FROM price) ,2)
		END,
		
		--СУММА
		CASE
		WHEN in_price_round THEN
			ceil(
				CASE
				WHEN in_price_edit AND in_mes_l<>0 THEN in_total
				WHEN in_price_edit AND in_mes_l=0 THEN in_price * (SELECT t.base_quant FROM product_params t)			
				ELSE (SELECT price.val FROM price) * (SELECT t.base_quant FROM product_params t)
				END
				--Скидка за объем
				- (SELECT coalesce(t.discount_total,0) FROM price_list t)
			)
		ELSE
			round(
				CASE
				WHEN in_price_edit AND in_mes_l<>0 THEN in_total
				WHEN in_price_edit AND in_mes_l=0 THEN in_price * (SELECT t.base_quant FROM product_params t)			
				ELSE (SELECT price.val FROM price) * (SELECT t.base_quant FROM product_params t)
				END
				--Скидка за объем
				- (SELECT coalesce(t.discount_total,0) FROM price_list t)
			,2)
		END	
		AS total,
		
		CASE
			WHEN in_pack AND in_pack_in_price=FALSE THEN
				(SELECT t.price_pack FROM price_list t)
				--Количество
				* (SELECT t.base_quant FROM product_params t)
			ELSE 0
		END AS total_pack
		
	;
$function$
;

ALTER FUNCTION public.doc_order_totals(integer, integer, integer, integer, integer, integer, numeric, integer, boolean, boolean, boolean, boolean, boolean, numeric, numeric)
  OWNER TO polimerplast;

