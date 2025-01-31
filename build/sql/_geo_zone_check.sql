-- Function: geo_zone_check()

-- DROP FUNCTION geo_zone_check();

CREATE OR REPLACE FUNCTION geo_zone_check()
  RETURNS trigger AS
$BODY$
DECLARE
	v_cur_state vehicle_states;
	v_new_state vehicle_states;
	v_vehicle_id int;
	v_point_in_zone boolean;
	v_zone record;
	V_SRID int;
	v_zones_query text;
	
	-- true - control IN, false - control OUT
	v_control_in boolean;
	
	v_true_point boolean;
	v_point geometry;
	v_client_zone geometry;
	v_int int;
BEGIN
	V_SRID = 4326;
	--current vehicle state
	SELECT
		st.state, st.vehicle_id, st.client_zone
	INTO v_cur_state,v_vehicle_id,v_client_zone
	FROM vehicle_states_data AS st
	WHERE st.tracker_id = NEW.car_id
	ORDER BY st.date_time DESC
	LIMIT 1;
	
	-- что мониторим?
	IF (v_cur_state='at_base'::vehicle_states) THEN
		/*если выехал с базы, значит:
				to_client, если есть заявки со статусом shipped
				иначе - free
		*/
		v_control_in = false;
		SELECT 
			CASE
				WHEN COUNT(*)>0 THEN 'to_client'::vehicle_states
				ELSE 'free'::vehicle_states
			END,
			d.doc_order_id
		INTO v_new_state, v_int
		FROM deliveries AS d
		LEFT JOIN doc_orders o ON o.id = d.doc_order_id
		WHERE
			d.vehicle_id = v_vehicle_id
			AND d.deliv_date=now()::date
			AND (SELECT st.state FROM doc_orders_states st ON st.doc_orders_id = o.id ORDER BY DESC LIMIT 1) = 'shipped'::order_states;
		
		v_zones_query = '
			SELECT
				ct.zone	AS zone,
				'''||v_new_state||'''::vehicle_states AS state
			FROM vehicles AS v
			LEFT JOIN production_cities AS ct ON ct.id=v.production_city_id
			WHERE v.tracker_id = '''||NEW.car_id||'''';
			
	ELSIF (v_cur_state='at_client'::vehicle_states) THEN
		/*Если выехал из зоны ЭТОГО клиента, значит:
			to_client, если есть заявки со статусом shipped
			иначе - to_base или free
			в зависимости от времени
		*/
		v_control_in = false;		
		SELECT 
			CASE
				WHEN COUNT(*)>0 THEN 'to_client'::vehicle_states
				ELSE 'to_base'::vehicle_states
			END,
			d.doc_order_id
		INTO v_new_state, v_int
		FROM deliveries AS d
		LEFT JOIN doc_orders o ON o.id = d.doc_order_id
		WHERE
			d.vehicle_id = v_vehicle_id
			AND d.deliv_date=now()::date
			AND (SELECT st.state FROM doc_orders_states st ON st.doc_orders_id = o.id ORDER BY DESC LIMIT 1) = 'shipped'::order_states;		
			
		v_zones_query = 'SELECT
			v_client_zone AS zone,
			'''||v_new_state||'''::vehicle_states AS state
			';
		
	ELSIF (v_cur_state='to_client'::vehicle_states) THEN
		/*Если попал в зону любого клиента,
		у когорого есть заявки со статусами shipped||to_client, значит at_client
		если попал в зону завода - at_base
		*/
		v_control_in = true;
		v_zones_query = '
			(SELECT
				dest.zone AS zone,
				''at_client''::vehicle_states AS state
			FROM deliveries AS d
			LEFT JOIN orders AS o ON o.id=d.doc_order_id
			LEFT JOIN client_destinations AS dest ON dest.id=o.deliv_destination_id
			WHERE 
				() IN (''shipped'',''to_client'')
				d.deliv_date=now()::date AND d.vehicle_id='''||v_vehicle_id||'''
			)
			UNION ALL
			(SELECT
				ct.zone	AS zone,
				''at_base''::vehicle_states AS state
			FROM vehicles AS v
			LEFT JOIN production_cities AS ct ON ct.id=v.production_city_id
			WHERE v.tracker='||NEW.car_id||'
			)
			';
		
	ELSIF (v_cur_state='to_base'::vehicle_states) THEN
		/*если попал в зону завода - at_base
		если не рабочее время  free
		*/
		v_control_in = true;
	END IF;
	
	v_point = ST_GeomFromText('POINT('||NEW.lon::text||' '||NEW.lat::text||')');
	v_geo_zone_check_points_count = const_geo_zone_check_points_count_val()-1;
	FOR v_zone IN EXECUTE v_zones_query
	LOOP
		/*
		проверим для начала первую точку
		если не подходит дальше проверять не будем 
		*/
		v_point_in_zone = st_contains(v_zone.zone,v_point,V_SRID);
		IF (v_point_in_zone AND v_control_in)
		OR
		(v_point_in_zone=false AND v_control_in=false)
			THEN
			/*Точка подходит, но...
			проверим еще X последних точек из базы
			для уверенности что надо менять статус
			*/
			SELECT COUNT(*)
			INTO v_int
			FROM car_tracking AS t
			WHERE t.car_id = NEW.car_id
				AND (
					(v_control_in AND st_contains(v_zone.zone,
					ST_GeomFromText('POINT('||t.lon::text||' '||t.lat::text||')')
					,V_SRID)
					) OR
					(v_control_in=false AND st_contains(v_zone.zone,
					ST_GeomFromText('POINT('||t.lon::text||' '||t.lat::text||')')
					,V_SRID)=false
					)
					
				)
			ORDER BY t.period DESC
			LIMIT v_geo_zone_check_points_count OFFSET 1
			-- STATE CHANGE
			IF (v_geo_zone_check_points_count=v_int AND v_zone.state<>v_cur_state) THEN		
				INSERT INTO vehicle_states_data
				(
					date_time,
					vehicle_id,
					tracker_id,
					state,
					client_zone
				)
				VALUES(
					now(),
					v_vehicle_id,
					NEW.car_id,
					v_zone.state,
					v_client_zone);
					
				/* 
				IF v_new_state='to_client' THEN
					--SMS принимающему
					INSERT INTO
					(tel,body,sms_type)
					(SELECT
						t.cel_phone,
						t.message,
						'client_on_leave_prod'::sms_types
					FROM sms_client_on_leave_prod t
					WHERE doc_order_id=v_int)
				
				ELSIF 	v_new_state='to_client' THEN
					--SMS для водителя о след. заказе
					INSERT INTO
					(tel,body,sms_type)
					(SELECT
						t.cel_phone,
						t.message,
						'driver_new_deliv'::sms_types
					FROM sms_driver_new_deliv t
					WHERE doc_order_id=v_int)		
				END IF;
							
				*/
					
			END IF;
			
			EXIT;		
		END IF;	
	END LOOP;
	
	RETURN NEW;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION geo_zone_check() OWNER TO polimerplast;
