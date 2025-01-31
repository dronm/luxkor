-- Function: deliv_assigned_orders_list(date,int)

DROP FUNCTION deliv_assigned_orders_list(date,int);

CREATE OR REPLACE FUNCTION deliv_assigned_orders_list(
		in_date date,
		in_client_id int)
  RETURNS TABLE (
		vh_id int,
		vh_load_weight_t numeric,
		vh_vol int,
		vh_descr text,		
		vh_driver_cel_phone text,
		vh_city_id int,
		vh_city_descr text,
		vh_state text,
		vh_state_descr text,
		
		--delivery period
		per_descr text,
		per_id int,
		
		--order information
		o_id int,
		o_number text,
		o_client_descr text,
		o_warehouse_descr text,
		o_client_dest_descr text,
		o_product_str text,
		o_total_volume numeric,
		o_total_weight numeric
	
	) AS
$BODY$
WITH
	vh_assigned AS (
		SELECT t.vehicle_id FROM deliveries t
		WHERE t.deliv_date=$1
	),
	det AS
	(
	--Доставки
	SELECT 
		dlv.vehicle_id,
		dlv.added_date_time AS deliv_added_date_time,
		h.name::text AS hour_descr,
		h.h_from AS hour_ord,
		h.id AS hour_id,
		o.id AS order_id,
		o.number::text AS order_number,
		cl.name::text AS client_descr,
		w.name::text AS warehouse_descr,
		d.address::text AS client_dest_descr,
		o.product_str::text,
		o.total_volume,
		o.total_weight
		
	FROM deliveries AS dlv
	LEFT JOIN delivery_hours AS h ON h.id=dlv.delivery_hour_id
	LEFT JOIN doc_orders AS o ON o.id=dlv.doc_order_id
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	LEFT JOIN warehouses AS w ON w.id=o.warehouse_id
	LEFT JOIN client_destinations_list AS d ON d.id=o.deliv_destination_id	
	WHERE dlv.deliv_date=$1	AND ($2=0 OR ($2>0 AND cl.id=$2))
	
	-- +Все постоянные авто НО не удаленные
	UNION	
	SELECT 
		v.id AS vehicle_id,
		NULL AS deliv_added_date_time,
		NULL AS hour_descr,
		NULL AS hour_ord,
		NULL AS hour_id,
		NULL AS order_id,
		NULL AS order_number,
		NULL AS client_descr,
		NULL AS warehouse_descr,
		NULL AS client_dest_descr,
		NULL,
		0 AS total_volume,
		0 AS total_weight
	FROM vehicles AS v
	WHERE
		$2=0
		AND v.employed=TRUE
		AND NOT v.id IN
			(SELECT t.vehicle_id FROM vh_assigned t)		
		AND NOT v.id IN
			(SELECT t.vehicle_id FROM delivery_deleted_vehicles t
			WHERE t.date=$1)
		
	-- +Все авто добавленные на сегодня
	UNION	
	SELECT
		v.vehicle_id AS vehicle_id,
		NULL AS deliv_added_date_time,
		NULL AS hour_descr,
		NULL AS hour_ord,
		NULL AS hour_id,
		NULL AS order_id,
		NULL AS order_number,
		NULL AS client_descr,
		NULL AS warehouse_descr,
		NULL AS client_dest_descr,
		NULL,
		0 AS total_volume,
		0 AS total_weight	
	FROM delivery_extra_vehicles AS v
	WHERE
		$2=0
		AND v.date=$1
		AND NOT v.vehicle_id IN
		(SELECT t.vehicle_id FROM vh_assigned t)	
	),
	vh_states AS (
	SELECT
		max(v.date_time),
		v.vehicle_id,
		v.state::text,
		get_vehicle_states_descr(v.state)::text AS state_descr
	FROM vehicle_states_data AS v
	WHERE v.date_time::date=$1
		AND v.vehicle_id IN (SELECT DISTINCT det.vehicle_id FROM det)
	GROUP BY v.vehicle_id,v.state,state_descr
	)
	
	SELECT 
		--vehicle
		v.id AS vh_id,
		v.load_weight_t AS vh_load_weight_t,
		v.vol AS vh_vol,
		format('%s, %s (%s/%s), %s',
			dr.name,
			v.plate,
			v.vol::text,
			v.load_weight_t::text,			
			dr.cel_phone
		) AS vh_descr,
		dr.cel_phone AS vh_driver_cel_phone,
		ct.id AS vh_city_id,
		ct.name AS vh_city_descr,
		vst.state AS vh_state,
		vst.state_descr AS vh_state_descr,
		
		--delivery period
		det.hour_descr AS per_descr,
		det.hour_id AS per_id,
		
		--order information
		det.order_id AS o_id,
		det.order_number AS o_number,
		det.client_descr AS o_client_descr,
		det.warehouse_descr AS o_warehouse_descr,
		det.client_dest_descr AS o_client_dest_descr,
		det.product_str AS o_product_str,
		det.total_volume AS o_total_volume,
		det.total_weight AS o_total_weight
	FROM det
	LEFT JOIN vehicles AS v ON v.id=det.vehicle_id
	LEFT JOIN drivers AS dr ON dr.id=v.driver_id
	LEFT JOIN production_cities AS ct ON ct.id=v.production_city_id
	LEFT JOIN vh_states AS vst ON vst.vehicle_id=v.id
	ORDER BY vh_city_descr,
			det.hour_ord,
			dr.name
	;
$BODY$
LANGUAGE sql VOLATILE COST 100 ROWS 1000;  
ALTER FUNCTION deliv_assigned_orders_list(date,int) OWNER TO polimerplast;
	