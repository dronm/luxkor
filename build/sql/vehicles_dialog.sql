-- View: vehicles_dialog

--DROP VIEW vehicles_dialog;

CREATE OR REPLACE VIEW vehicles_dialog AS 
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
		
		v.tracker_id,
		
		CASE
			WHEN v.tracker_id IS NOT NULL THEN
				date8_time5_descr(
				(SELECT MAX(tr.recieved_dt)
				FROM car_tracking tr
				WHERE tr.car_id=v.tracker_id)
				)
			ELSE NULL
		END
		AS last_tracker_data,
		
		(dr.ext_id IS NOT NULL) AS match_1c,
		
		dr.drive_perm AS driver_drive_perm,
		dr.cel_phone AS driver_cel_phone
		
		
	FROM vehicles AS v
	LEFT JOIN production_cities AS pct ON pct.id=v.production_city_id
	LEFT JOIN drivers AS dr ON dr.id=v.driver_id
	LEFT JOIN carriers AS cr ON cr.id=v.carrier_id
	LEFT JOIN deliv_cost_opts_list AS dco ON dco.id=v.deliv_cost_opt_id
	;

ALTER TABLE vehicles_dialog
  OWNER TO polimerplast;
