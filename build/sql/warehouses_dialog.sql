-- View: warehouses_dialog

--DROP VIEW warehouses_dialog;

CREATE OR REPLACE VIEW warehouses_dialog AS 
	SELECT
		w.id,
		w.name,
		w.address,
		w.tel,
		w.email,
		replace(replace(st_astext(w.zone),'POLYGON((',''),'))','') AS zone_str,
		replace(replace(st_astext(ST_Centroid(w.zone)),'POINT(',''),')','') AS zone_center_str,
		f.id AS default_firm_id,
		f.name AS default_firm_descr,
		pc.id AS production_city_id,
		pc.name AS production_city_descr,
		w.deleted
	FROM warehouses AS w
	LEFT JOIN firms AS f ON f.id=w.default_firm_id
	LEFT JOIN production_cities AS pc ON pc.id=w.production_city_id
	;

ALTER TABLE warehouses_dialog OWNER TO polimerplast;

