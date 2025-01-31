-- View: trackers_list

DROP VIEW trackers_list;

CREATE OR REPLACE VIEW trackers_list AS 
	SELECT
		t.*,
		ts.name AS tracker_server_descr,
		date8_time5_descr(
		(SELECT MAX(tr.recieved_dt)
		FROM car_tracking tr
		WHERE tr.car_id=t.id)
		) AS last_tracker_data
	FROM trackers AS t
	LEFT JOIN tracker_servers ts ON ts.id=t.tracker_server_id
	ORDER BY t.id;
ALTER TABLE trackers_list OWNER TO polimerplast;

