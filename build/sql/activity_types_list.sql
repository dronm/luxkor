-- View: activity_types_list

--DROP VIEW activity_types_list;

CREATE OR REPLACE VIEW activity_types_list AS 
	SELECT 
		id,
		name
	FROM activity_types
	ORDER BY name;
ALTER TABLE activity_types_list OWNER TO polimerplast;

