-- Function: product_measure_units_list(int,int)

--DROP FUNCTION product_measure_units_list(int,int);

CREATE OR REPLACE FUNCTION product_measure_units_list(IN in_product_id int,
	IN in_measure_unit_id int)
RETURNS table(
	product_id int,
	measure_unit_id int,
	measure_unit_descr text,
	in_use boolean,
	calc_formula text,
	is_int boolean
	)AS
$BODY$
BEGIN
	RETURN QUERY
		SELECT 
			in_product_id AS product_id,
			mu.id AS measure_unit_id,
			mu.name::text AS measure_unit_descr,
			pmu.in_use,
			pmu.calc_formula,
			mu.is_int
		FROM measure_units AS mu
		LEFT JOIN product_measure_units AS pmu
			ON pmu.measure_unit_id=mu.id AND pmu.product_id=in_product_id
		WHERE (in_measure_unit_id IS NULL OR in_measure_unit_id=0)
		OR (in_measure_unit_id>0 AND mu.id=in_measure_unit_id)			
		ORDER BY mu.name;
end;		
$BODY$
LANGUAGE plpgsql VOLATILE STRICT COST 100;	
ALTER FUNCTION product_measure_units_list(int,int) OWNER TO polimerplast;

