-- View: warehouses_list

DROP VIEW warehouses_list;

CREATE OR REPLACE VIEW warehouses_list AS 
	SELECT 
		w.id,
		w.name,
		(w.zone IS NOT NULL) AS on_map,
		w.default_firm_id AS firm_id,
		f.name AS firm_descr,
		w.production_city_id,
		pc.name AS production_city_descr,
		w.address,
		w.deleted
	FROM warehouses AS w
	LEFT JOIN firms AS f ON f.id=w.default_firm_id
	LEFT JOIN production_cities AS pc ON pc.id=w.production_city_id
	ORDER BY w.name;
ALTER TABLE warehouses_list OWNER TO polimerplast;

