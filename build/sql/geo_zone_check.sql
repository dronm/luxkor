-- Function: geo_zone_check()

-- DROP FUNCTION geo_zone_check();

CREATE OR REPLACE FUNCTION geo_zone_check()
  RETURNS trigger AS
$BODY$
BEGIN
/*
	--Выборка заявок с изменениями:
	--либо был в зоне, стал в другой зоне или нигде
	--либо был нигде стал в какой-то зоне
*/	
	INSERT INTO doc_orders_states
	(
		doc_orders_id,
		date_time,
		state,
		tracker_id,
		client_zone,
		production_zone
	)
	(
	SELECT 
		last_state.doc_order_id,
		now()::timestamp,
		last_state.new_state,
		NEW.car_id, --'5021511401',
		last_state.client_zone,
		last_state.production_zone		
	FROM (
		WITH
		srid AS (SELECT 4326 AS v),
		cur_data AS (
			SELECT				
				NEW.lon::text AS lon,
				NEW.lat::text AS lat,
				NEW.car_id::text AS tracker_id,
				ST_GeomFromText('POINT('||NEW.lon::text||' '||NEW.lat::text||')',(SELECT srid.v FROM srid)) AS g
				/*
				'65.614937'::text AS lon,
				'57.118877'::text AS lat,
				'5021511401'::text AS tracker_id,
				ST_GeomFromText('POINT(65.614937 57.118877)',(SELECT srid.v FROM srid)) AS g
				*/
		)
		SELECT DISTINCT ON (st.doc_orders_id)
			st.doc_orders_id AS doc_order_id,
			st.state AS old_state,
			--расчет нового статуса
			CASE
				--сейчас у клиента
				WHEN st_contains(st.client_zone, (SELECT cur_data.g FROM cur_data)) THEN					
					'unloading'::order_states
					
				-- сейчас на базе
				WHEN st_contains(st.production_zone, (SELECT cur_data.g FROM cur_data))	AND st.state = 'unloading'::order_states THEN
					'closed'::order_states
				
				--Не на база и не у клиента - значит выехал от клиента
				WHEN NOT st_contains(st.production_zone, (SELECT cur_data.g FROM cur_data)) AND st.state = 'unloading' THEN
					'closed'::order_states
				
				ELSE 'on_way'::order_states
			END AS new_state,
			
			(SELECT cur_data.tracker_id FROM cur_data) AS tracker_id,
			
			st.client_zone,
			st.production_zone
			
		FROM doc_orders_states AS st
		WHERE
			st.tracker_id = (SELECT cur_data.tracker_id FROM cur_data)

			AND
			(SELECT t.state FROM doc_orders_states t WHERE t.doc_orders_id=st.doc_orders_id ORDER BY t.date_time DESC LIMIT 1)<>'closed'::order_states
			/*
			IN ('shipped'::order_states,
					'loading'::order_states,
					'on_way'::order_states,
					'unloading'::order_states
					)
			*/
			AND st.client_zone IS NOT NULL AND st.production_zone IS NOT NULL

			--предыдущие Х точек в той же зоне или так же ни в какой зоне
			AND
			coalesce(
			(
				SELECT count(*) = const_geo_zone_check_points_count_val()-1 FROM
				(
					SELECT
						CASE
						WHEN st_contains(st.client_zone, (SELECT cur_data.g FROM cur_data)) THEN
							st_contains(st.client_zone, ST_GeomFromText('POINT('||t.lon::text||' '||t.lat::text||')',(SELECT srid.v FROM srid)))
						WHEN st_contains(st.production_zone, (SELECT cur_data.g FROM cur_data)) THEN
							st_contains(st.production_zone, ST_GeomFromText('POINT('||t.lon::text||' '||t.lat::text||')',(SELECT srid.v FROM srid)))
						ELSE
							NOT st_contains(st.client_zone, ST_GeomFromText('POINT('||t.lon::text||' '||t.lat::text||')',(SELECT srid.v FROM srid)))
							AND
							NOT st_contains(st.production_zone, ST_GeomFromText('POINT('||t.lon::text||' '||t.lat::text||')',(SELECT srid.v FROM srid)))
						END
						AS res
					FROM car_tracking t
					WHERE t.car_id = (SELECT cur_data.tracker_id FROM cur_data)
					ORDER BY t.period DESC
					LIMIT const_geo_zone_check_points_count_val()-1 OFFSET 1
				) sub
				WHERE sub.res = TRUE
			),FALSE)
			
		ORDER BY st.doc_orders_id, st.date_time DESC
		
	) AS last_state
	WHERE last_state.new_state<>last_state.old_state
	);
	
	RETURN NEW;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION geo_zone_check() OWNER TO polimerplast;
