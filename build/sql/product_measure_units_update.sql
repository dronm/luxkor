-- Function: product_measure_units_update(int,int,boolean,text)

--DROP FUNCTION product_measure_units_update(int,int,boolean,text);

CREATE OR REPLACE FUNCTION product_measure_units_update(IN in_product_id int,
	IN in_measure_unit_id int, IN in_in_use boolean,
	IN in_calc_formula text)
RETURNS void AS
$BODY$
BEGIN
	UPDATE product_measure_units
		SET in_use = in_in_use,
			calc_formula = in_calc_formula
	WHERE product_id=in_product_id
		AND measure_unit_id=in_measure_unit_id;	
	IF FOUND THEN
		RETURN;
	END IF;
	BEGIN
		INSERT INTO product_measure_units
		(product_id, measure_unit_id, in_use, calc_formula)
		VALUES (in_product_id, in_measure_unit_id, in_in_use, in_calc_formula);
	EXCEPTION WHEN OTHERS THEN
	UPDATE product_measure_units
		SET in_use = in_in_use,
			calc_formula = in_calc_formula
	WHERE product_id=in_product_id
		AND measure_unit_id=in_measure_unit_id;	
	END;
	RETURN;		
end;		
$BODY$
LANGUAGE plpgsql VOLATILE STRICT COST 100;	
ALTER FUNCTION product_measure_units_update(int,int,boolean,text) OWNER TO polimerplast;

