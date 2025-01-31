-- View: firm_list

--DROP VIEW firm_list;

CREATE OR REPLACE VIEW firm_list AS 
	SELECT 
		id,
		name,
		(ext_id IS NOT NULL AND ext_id<>'') match_1c,
		nds,
		cash,
		deleted,
		order_no_carrier_print,
		nds_val
	FROM firms
	ORDER BY name;
ALTER TABLE firm_list OWNER TO polimerplast;

