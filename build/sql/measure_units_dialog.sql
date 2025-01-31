-- View: measure_units_dialog

--DROP VIEW measure_units_dialog;

CREATE OR REPLACE VIEW measure_units_dialog AS 
	SELECT mu.id,mu.name,mu.name_full,mu.is_int
	FROM measure_units AS mu
	ORDER BY mu.name;
ALTER TABLE measure_units_dialog OWNER TO polimerplast;

