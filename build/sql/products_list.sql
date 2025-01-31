-- View: products_list

--DROP VIEW products_list;

CREATE OR REPLACE VIEW products_list AS 
	SELECT 
		p.id,
		p.name,
		p.base_measure_unit_id AS measure_unit_id,
		m.name AS measure_unit_descr,
		COALESCE(p.warehouses_str,'') AS warehouses_descr,
		p.deleted
	FROM products AS p
	LEFT JOIN measure_units AS m ON m.id=p.base_measure_unit_id
	ORDER BY p.name;
ALTER TABLE products_list OWNER TO polimerplast;

