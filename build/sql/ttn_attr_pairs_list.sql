-- VIEW: ttn_attr_pairs_list

--DROP VIEW ttn_attr_pairs_list;

CREATE OR REPLACE VIEW ttn_attr_pairs_list AS
	SELECT
		ttn_attr_pairs.*,
		firms.name AS firm_descr,
		warehouses.name AS warehouse_descr
	FROM ttn_attr_pairs
	LEFT JOIN firms ON firms.id=ttn_attr_pairs.firm_id
	LEFT JOIN warehouses ON warehouses.id=ttn_attr_pairs.warehouse_id
	ORDER BY firms.name,warehouses.name
	;
	
ALTER VIEW ttn_attr_pairs_list OWNER TO ;
