-- View: client_price_lists_list

--DROP VIEW product_warehouses_list;

CREATE OR REPLACE VIEW product_warehouses_list AS 
	SELECT
		pw.product_id,
		pw.warehouse_id AS warehouse_id,
		w.name AS warehouse_descr
		
	FROM product_warehouses AS pw
	LEFT JOIN warehouses AS w ON w.id=pw.warehouse_id
	;
ALTER TABLE product_warehouses_list OWNER TO polimerplast;

