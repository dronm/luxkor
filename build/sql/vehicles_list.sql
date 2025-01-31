-- View: vehicles_list

--DROP VIEW vehicles_list;

CREATE OR REPLACE VIEW vehicles_list AS 
	SELECT 
		v.id,
		v.plate,
		v.model,
		v.production_city_id,
		pct.name AS production_city_descr,
		v.driver_id AS driver_id,
		dr.name AS driver_descr,
		v.employed,
		v.vol,
		v.load_weight_t,
		v.model||' '||v.vol::text || 'м3/' ||v.load_weight_t::text||'т' AS vl_wt,
		v.carrier_id,
		
		v.trailer_model,
		v.trailer_plate,
		
		cr.name AS carrier_descr,
		
		v.deliv_cost_opt_id,
		dco.descr AS deliv_cost_opt_descr,
		
		(dr.ext_id IS NOT NULL AND dr.ext_id<>'') driver_match_1c
		
	FROM vehicles AS v
	LEFT JOIN production_cities AS pct ON pct.id=v.production_city_id
	LEFT JOIN drivers AS dr ON dr.id=v.driver_id
	LEFT JOIN carriers AS cr ON cr.id=v.carrier_id
	LEFT JOIN deliv_cost_opts_list AS dco ON dco.id=v.deliv_cost_opt_id
	ORDER BY dr.name;
	--v.plate;
ALTER TABLE vehicles_list OWNER TO polimerplast;

