-- View: client_activities_list

--DROP VIEW client_activities_list;

CREATE OR REPLACE VIEW client_activities_list AS 
	SELECT 
		id,
		name,
		(ext_id IS NOT NULL AND ext_id<>'') match_1c
	FROM client_activities
	ORDER BY name;
ALTER TABLE client_activities_list OWNER TO polimerplast;

