-- View: product_groups_list

--DROP VIEW product_groups_list;

CREATE OR REPLACE VIEW product_groups_list AS 
	SELECT 
		id,
		name,
		(ext_id IS NOT NULL AND ext_id<>'') match_1c
	FROM product_groups
	ORDER BY name;
ALTER TABLE product_groups_list OWNER TO polimerplast;

