-- View: production_cities_dialog

--DROP VIEW production_cities_dialog;

CREATE OR REPLACE VIEW production_cities_dialog AS 
	SELECT
		pc.id,pc.name,
		replace(replace(st_astext(pc.zone),'POLYGON((',''),'))','') AS zone_str,
		replace(replace(st_astext(ST_Centroid(pc.zone)),'POINT(',''),')','') AS zone_center_str		
	FROM production_cities AS pc;

ALTER TABLE production_cities_dialog OWNER TO polimerplast;

