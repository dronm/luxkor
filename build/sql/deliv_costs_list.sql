-- View: deliv_costs_list

--DROP VIEW deliv_costs_list;

CREATE OR REPLACE VIEW deliv_costs_list AS 
	SELECT
		dc.id,
		dc.production_city_id,
		ct.name AS production_city_descr,
		dc.deliv_cost_opt_id,
		dco.descr AS deliv_cost_opt_descr,
		
		dc.deliv_cost_type,
		get_deliv_cost_types_descr(dc.deliv_cost_type) AS deliv_cost_type_descr,
		dc.cost,
		dc.cost2
		
	FROM deliv_costs AS dc
	LEFT JOIN production_cities AS ct ON ct.id=dc.production_city_id
	LEFT JOIN deliv_cost_opts_list AS dco ON dco.id=dc.deliv_cost_opt_id
	ORDER BY
		ct.name,
		dco.volume_m DESC,
		CASE
			WHEN dc.deliv_cost_type='city' THEN 0
			ELSE 1
		END;
ALTER TABLE deliv_costs_list OWNER TO polimerplast;
