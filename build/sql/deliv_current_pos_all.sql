-- View: deliv_current_pos_all

--DROP VIEW deliv_current_pos_all;

CREATE OR REPLACE VIEW deliv_current_pos_all AS 
SELECT
	v.id,
	v.plate,
	v.model,
	v.vol,
	v.load_weight_t,
	
	(SELECT
		ARRAY[
		(tr.period + age(now(), timezone('UTC'::text, now())::timestamp with time zone))::text,
		(date5_time5_descr(tr.period + age(now(), timezone('UTC'::text, now())::timestamp with time zone)))::text,
		tr.longitude::text,
		tr.latitude::text,
		round(tr.speed,0)::text,
		tr.ns::text,
		tr.ew::text,
		(tr.recieved_dt + age(now(), timezone('UTC'::text, now())::timestamp with time zone))::text,
		(date5_time5_descr(tr.recieved_dt + age(now(), timezone('UTC'::text, now())::timestamp with time zone)))::text,
		tr.odometer::text,
		engine_descr(tr.engine_on)::text,
		tr.voltage::text,
		heading_descr(tr.heading)::text,
		tr.heading::text,
		tr.lon::text,
		tr.lat::text
		]
    FROM car_tracking AS tr
    WHERE tr.car_id::text = v.tracker_id::text
    ORDER BY tr.period DESC
    LIMIT 1
	) AS tr_data
  FROM vehicles v
  WHERE v.tracker_id IS NOT NULL AND v.tracker_id::text <> ''::text
  ORDER BY v.plate;

ALTER TABLE deliv_current_pos_all
  OWNER TO polimerplast;
