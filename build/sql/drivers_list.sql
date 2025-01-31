-- View: drivers_list

--DROP VIEW drivers_list;

CREATE OR REPLACE VIEW drivers_list AS 
	SELECT 
		l.*,
		(ext_id IS NOT NULL AND ext_id<>'') match_1c
	FROM drivers AS l
	ORDER BY l.name;
ALTER TABLE drivers_list OWNER TO polimerplast;

