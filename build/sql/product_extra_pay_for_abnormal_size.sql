-- Function: public.product_extra_pay_for_abnormal_size(products,mes_lenfgth integer, mes_width integer)

-- DROP FUNCTION public.product_extra_pay_for_abnormal_size(products,mes_lenfgth integer, mes_width integer)

CREATE OR REPLACE FUNCTION public.product_extra_pay_for_abnormal_size(products,mes_lenfgth integer, mes_width integer)
  RETURNS boolean AS
$BODY$
	SELECT 
		$1.extra_pay_for_abnormal_size
		AND
		(
			$1.extra_pay_for_abn_size_always
			OR
			(
				$1.mes_length_def_val<>$2
				OR
				$1.mes_width_def_val<>$3
			)
		)
	;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION public.product_extra_pay_for_abnormal_size(products,mes_lenfgth integer, mes_width integer)
  OWNER TO polimerplast;

