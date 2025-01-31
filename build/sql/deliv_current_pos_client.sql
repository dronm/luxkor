-- Function: deliv_current_pos_client(int,date)

--DROP FUNCTION deliv_current_pos_client(int,date);

CREATE OR REPLACE FUNCTION deliv_current_pos_client(int,date)
RETURNS TABLE(
	id int,
	plate text,
	model text,
	vol int,
	load_weight_t numeric,
	tr_data text[]
)
AS 
$body$
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
	  FROM deliveries AS deliv
	  LEFT JOIN doc_orders AS o ON o.id=deliv.doc_order_id
	  LEFT JOIN vehicles v ON v.id=deliv.vehicle_id
	  WHERE deliv.deliv_date=$2
		AND o.client_id=$1
		AND v.tracker_id IS NOT NULL
		AND v.tracker_id::text <> ''::text
	  ORDER BY v.plate;
$body$
LANGUAGE SQL;

ALTER FUNCTION deliv_current_pos_client(int,date)
  OWNER TO polimerplast;
