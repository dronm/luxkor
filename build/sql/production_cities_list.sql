-- View: production_cities_list

--DROP VIEW production_cities_list;

CREATE OR REPLACE VIEW production_cities_list AS 
	SELECT
		pc.id,
		pc.name
	FROM production_cities AS pc;

ALTER TABLE production_cities_list OWNER TO polimerplast;

