-- VIEW: naspunkt_distances

--DROP VIEW naspunkt_costs;

CREATE OR REPLACE VIEW naspunkt_costs AS
	SELECT		
		np.city_id,
		np.city_descr,
		costs.deliv_cost_opt_id,
		costs.deliv_cost_opt_descr,
		np.id AS naspunkt_id,
		np.name AS naspunkt_descr,
		np.distance,

		SUM(
		CASE
			WHEN costs.deliv_cost_type = 'city' THEN
				costs.cost
			ELSE
				costs.cost * np.distance
		END) AS cost
		
	FROM naspunkt_list AS np
	LEFT JOIN deliv_costs_list AS costs ON np.city_id=costs.production_city_id

	GROUP BY 
		np.city_id,
		np.city_descr,
		costs.deliv_cost_opt_id,
		costs.deliv_cost_opt_descr,
		np.id,
		np.name,
		np.distance

	ORDER BY
		np.city_descr,
		costs.deliv_cost_opt_descr,
		np.name	
	;	
ALTER VIEW naspunkt_costs OWNER TO polimerplast;
