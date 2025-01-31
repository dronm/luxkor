-- View: product_1c_names_list

--DROP VIEW product_1c_names_list;

CREATE OR REPLACE VIEW product_1c_names_list AS 
	SELECT 
		t.id,
		t.product_id,
		t.firm_id,
		f.name AS firm_descr,
		t.name_for_1c
		
	FROM product_1c_names AS t
	LEFT JOIN firms AS f ON f.id = t.firm_id
	ORDER BY t.name_for_1c;
ALTER TABLE product_1c_names_list OWNER TO ;

