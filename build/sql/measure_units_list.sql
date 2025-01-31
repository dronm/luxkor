-- View: measure_units_list

--DROP VIEW measure_units_list;

CREATE OR REPLACE VIEW measure_units_list AS 
	SELECT mu.id,mu.name
	FROM measure_units AS mu
	ORDER BY mu.name;
ALTER TABLE measure_units_list OWNER TO polimerplast;

