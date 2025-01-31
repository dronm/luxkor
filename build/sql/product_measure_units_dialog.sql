-- View: product_measure_units_dialog

--DROP VIEW product_measure_units_dialog;

CREATE OR REPLACE VIEW product_measure_units_dialog AS 
	SELECT
		pmu.product_id,
		pmu.measure_unit_id,
		mu.name AS measure_unit_descr,
		pmu.in_use,
		pmu.calc_formula
	FROM product_measure_units AS pmu
	LEFT JOIN measure_units AS mu ON mu.id=pmu.measure_unit_id
	;

ALTER TABLE product_measure_units_dialog OWNER TO polimerplast;

