/*
CREATE TYPE doc_order_vm_wt AS (id int, vm numeric, wt numeric);
ALTER TYPE doc_order_vm_wt OWNER TO polimerplast;
*/

/*
DROP function deliv_place_orders(
	in_date date,
	in_period_id int,
	in_vehicle_id int,
	in_veh_vm numeric,
	in_veh_wt numeric,
	in_orders doc_order_vm_wt[],	
	in_vm numeric,
	in_wt numeric
	);
*/
CREATE or REPLACE function deliv_place_orders(
	in_date date,
	in_period_id int,
	in_vehicle_id int,
	in_veh_vm numeric,
	in_veh_wt numeric,
	in_orders doc_order_vm_wt[],	
	in_vm numeric,
	in_wt numeric
)
	RETURNS VOID AS
$BODY$
DECLARE
	v_per_vm numeric;
	v_per_wt numeric;
	v_order doc_order_vm_wt;
	v_next_per_id int;	
	v_order_ar doc_order_vm_wt[];
BEGIN
	--RAISE '$1=%, $2=%, $3=%, $4=%, $5=%, $6=%, $7=%, 8=%',$1,$2,$3,$4,$5,$6,$7,$8;
	SELECT
		sum(o.total_volume),
		sum(o.total_weight)
	INTO v_per_vm,v_per_wt
	FROM deliveries d
	LEFT JOIN doc_orders o ON o.id=d.doc_order_id
	LEFT JOIN vehicles v ON v.id=d.vehicle_id
	WHERE d.deliv_date = $1
		AND d.delivery_hour_id = $2
		AND d.vehicle_id=$3
	;
	/*
	RAISE 'v_per_vm=%,
		$7=%,
		$4=%,
		vm=%',
		COALESCE(v_per_vm,0),
		$7,$4,
		(COALESCE(v_per_vm,0)+$7)<=$4;
	*/
	/*
	RAISE 'v_per_wt=%,
		$8=%,
		$5=%,
		wt=%',
		COALESCE(v_per_wt,0),
		$8,$5,
		(COALESCE(v_per_wt,0)+$8)<=$5;
	
	
	RAISE 'vm=%,
		wt=%',
		(COALESCE(v_per_vm,0)+$7)<=$4,
		(COALESCE(v_per_wt,0)+$8)<=$5;
	
	*/
	IF (COALESCE(v_per_vm,0)+$7)<=$4
	AND (COALESCE(v_per_wt,0)+$8)<=$5 THEN
		--все заявки входят в период		
		FOREACH v_order IN ARRAY $6
		LOOP
			/*
			RAISE 'vehicle_id=%,
			foc_order_id=%,
			delivery_hour_id=%,
			deliv_date=%,
			added_date_time=%',
			$3,v_order.id,$2,
			$1,now()::timestamp;
			*/
			INSERT INTO deliveries
			(vehicle_id,doc_order_id,delivery_hour_id,
			deliv_date,added_date_time)
			VALUES ($3,v_order.id,$2,
			$1,now()::timestamp);
		END LOOP;		
	ELSE
		--RAISE 'НЕ ВХОДИТ!!!';
		v_order_ar = ARRAY(
			WITH
			sub AS
			(SELECT
					d.added_date_time AS dt, 
					o.id,
					o.total_volume vm,
					o.total_weight wt,
					
					--Свободно после ухода заявки
					(SELECT
						SUM(t_o.total_volume)
					FROM deliveries t_d
					LEFT JOIN doc_orders t_o ON t_o.id=t_d.doc_order_id
					WHERE t_d.vehicle_id=$3 AND t_d.deliv_date=$1 AND t_d.delivery_hour_id=$2 AND t_d.added_date_time>=d.added_date_time
					)
					+
					($4-
						(SELECT
							SUM(t_o.total_volume)
						FROM deliveries t_d
						LEFT JOIN doc_orders t_o ON t_o.id=t_d.doc_order_id
						WHERE t_d.vehicle_id=$3 AND t_d.deliv_date=$1 AND t_d.delivery_hour_id=$2
						)					
					)
					AS rest_vm,

					--Свободно после ухода заявки
					(SELECT
						SUM(t_o.total_weight)
					FROM deliveries t_d
					LEFT JOIN doc_orders t_o ON t_o.id=t_d.doc_order_id
					WHERE t_d.vehicle_id=$3 AND t_d.deliv_date=$1 AND t_d.delivery_hour_id=$2 AND t_d.added_date_time>=d.added_date_time
					)
					+
					($5 - 
						(SELECT
							SUM(t_o.total_weight)
						FROM deliveries t_d
						LEFT JOIN doc_orders t_o ON t_o.id=t_d.doc_order_id
						WHERE t_d.vehicle_id=$3 AND t_d.deliv_date=$1 AND t_d.delivery_hour_id=$2
						)					
					)
					AS rest_wt

					
				FROM deliveries d
				LEFT JOIN doc_orders o ON o.id=d.doc_order_id
				WHERE d.vehicle_id=$3 AND d.deliv_date=$1 AND d.delivery_hour_id=$2
				ORDER BY d.added_date_time DESC
			)
			(SELECT
				(sub.id,sub.vm,sub.wt)::doc_order_vm_wt
			FROM sub
			WHERE sub.rest_vm<=$7 AND sub.rest_wt<=$8
			ORDER BY sub.dt DESC
			)
			UNION ALL

			(SELECT
				(sub.id,sub.vm,sub.wt)::doc_order_vm_wt

			FROM sub
			WHERE sub.rest_vm>=$7 AND sub.rest_wt>=$8
			ORDER BY sub.dt DESC
			LIMIT 1
			)
		);

		v_per_vm = 0;
		v_per_wt = 0;
		
		FOREACH v_order IN ARRAY v_order_ar
		LOOP
			v_per_vm = v_per_vm + v_order.vm;
			v_per_wt = v_per_wt + v_order.wt;

			DELETE FROM deliveries
			WHERE doc_order_id = v_order.id;
		
		END LOOP;
		
		--след.период, если есть
		SELECT t.id
		INTO v_next_per_id
		FROM delivery_hours t
		WHERE t.h_from>
			(SELECT tt.h_from
			FROM delivery_hours tt
			WHERE tt.id=$2)
		LIMIT 1;
		/*
		RAISE '
			in_date date=%,
			in_period_id=%,
			in_vehicle_id=%,
			in_veh_vm=%,
			in_veh_wt=%,
			v_order[1].id=%,
			v_order[1].vm=%,
			v_order[1].wt=%,
			in_vm=%,
			in_wt=%',
				$1,
				v_next_per_id,
				$3,
				$4,
				$5,
				v_order_ar[2].id,	
				v_order_ar[2].vm,	
				v_order_ar[2].wt,	
				v_per_vm,
				v_per_wt
		;
		*/
		FOREACH v_order IN ARRAY $6
		LOOP
			INSERT INTO deliveries
			(vehicle_id,doc_order_id,delivery_hour_id,
			deliv_date,added_date_time)
			VALUES ($3,v_order.id,$2,
			$1,now()::timestamp);
		END LOOP;
		
		IF v_next_per_id IS NOT NULL THEN
			--ЕСТЬ период
			PERFORM deliv_place_orders(
				$1,
				v_next_per_id,
				$3,
				$4,
				$5,
				v_order_ar,	
				v_per_vm,
				v_per_wt
			);
		END IF;
	END IF;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE COST 100;
  
ALTER function deliv_place_orders(
	in_date date,
	in_period_id int,
	in_vehicle_id int,
	in_veh_vm numeric,
	in_veh_wt numeric,
	in_orders doc_order_vm_wt[],	
	in_vm numeric,
	in_wt numeric
) OWNER TO polimerplast;