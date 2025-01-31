-- VIEW: naspunkt_list

--DROP VIEW naspunkt_list;

CREATE OR REPLACE VIEW naspunkt_list AS
	SELECT
		np.id,
		pct.id AS city_id,
		pct.name AS city_descr,
		np.name,
		np.distance
	FROM naspunkts AS np
	LEFT JOIN production_cities AS pct ON pct.id=np.city_id
	ORDER BY pct.name,np.name
	;
	
ALTER VIEW naspunkt_list OWNER TO polimerplast;
