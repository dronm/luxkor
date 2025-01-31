-- View: user_warehouses_list

--DROP VIEW user_warehouses_list;

CREATE OR REPLACE VIEW user_warehouses_list AS 
	SELECT
		t.*,
		w.name AS warehouse_descr
	FROM user_warehouses AS t
	LEFT JOIN warehouses AS w ON w.id=t.warehouse_id
	ORDER BY t.user_id,w.name;
ALTER TABLE user_warehouses_list OWNER TO polimerplast;

