-- Function: deliv_assigned_orders_list(date,int)

DROP FUNCTION deliv_assigned_orders_list(date,int);

CREATE OR REPLACE FUNCTION deliv_assigned_orders_list(
		in_date date,
		in_client_id int)
  RETURNS TABLE (
		vh_id int,
		vh_wt numeric,
		vh_vm int,
		vh_descr text,		
		vh_tel text,
		vh_city_id int,
		vh_city_descr text,
		vh_state text,
		vh_state_descr text,
		
		--delivery period
		per_descr text,
		per_id int,
		per_h_to int,
		
		--order information
		o_id int,
		o_number text,
		o_client_descr text,
		o_warehouse_descr text,
		o_client_dest_descr text,
		o_product_str text,
		o_vm numeric,
		o_wt numeric,
		o_state order_states
	
	) AS
$BODY$
	WITH vh_list AS
	(SELECT
		v.id
	FROM vehicles v
	WHERE
		--Все постоянные авто НО не удаленные
		(v.employed
		AND NOT v.id IN
			(SELECT t.vehicle_id FROM delivery_deleted_vehicles t
			WHERE t.date=$1)
		)
		--Все НЕ постоянные авто, добавленные на сегодня
		OR
		((v.employed=FALSE OR v.employed IS NULL)
		AND v.id IN
			(SELECT t.vehicle_id
			FROM delivery_extra_vehicles t
			WHERE t.date=$1)	
		)	
	)
	SELECT
		--vehicle
		vh.id				AS vh_id,
		vh.load_weight_t	AS vh_wt,
		vh.vol				AS vh_vm,
		format('%s, %s (%s/%s), %s',
			dr.name,
			vh.plate,
			vh.vol::text,
			vh.load_weight_t::text,			
			dr.cel_phone
		)					AS vh_descr,
		dr.cel_phone		AS vh_tel,
		
		--city
		pct.id				AS vh_city_id,
		pct.name			AS vh_city_descr,

		--state
		(vst.state) AS vh_state,
		vst.state_descr		AS vh_state_descr,

		--delivery period
		per.name			AS per_descr,
		per.id				AS per_id,
		per.h_to			AS per_h_to,

		--order information
		dlv.o_id,
		dlv.o_number,
		dlv.o_client_descr,
		dlv.o_warehouse_descr,
		dlv.o_client_dest_descr,
		dlv.o_product_str,
		dlv.o_vm,
		dlv.o_wt,
		dlv.o_state
		
	FROM vehicles AS vh
	CROSS JOIN (
		SELECT id,name,h_from,h_to
		FROM delivery_hours
		ORDER BY h_from
	) AS per
	LEFT JOIN (
		SELECT 
			t.vehicle_id,
			t.delivery_hour_id,
			t.added_date_time,
			o.id			AS o_id,
			o.number::text		AS o_number,
			cl.name::text		AS o_client_descr,
			w.name::text		AS o_warehouse_descr,
			d.address::text		AS o_client_dest_descr,
			o.product_str		AS o_product_str,
			o.total_volume		AS o_vm,
			o.total_weight		AS o_wt,
			(SELECT t.state FROM doc_orders_states t WHERE t.doc_orders_id=o.id ORDER BY t.date_time DESC LIMIT 1) AS o_state
			
		FROM deliveries t
		LEFT JOIN doc_orders AS o ON o.id=t.doc_order_id
		LEFT JOIN clients AS cl ON cl.id=o.client_id
		LEFT JOIN warehouses AS w ON w.id=o.warehouse_id
		LEFT JOIN client_destinations_list AS d ON d.id=o.deliv_destination_id
		WHERE t.deliv_date=$1
			AND ($2=0 OR ($2>0 AND cl.id=$2))
			AND t.vehicle_id IN (SELECT vh_list.id FROM vh_list)
	) AS dlv ON dlv.vehicle_id=vh.id AND dlv.delivery_hour_id=per.id		
	
	LEFT JOIN drivers AS dr ON dr.id=vh.driver_id
	LEFT JOIN production_cities AS pct ON pct.id=vh.production_city_id
	LEFT JOIN (
		SELECT
			max(v.date_time),
			v.vehicle_id,
			v.state::text,
			get_vehicle_states_descr(v.state)::text AS state_descr
		FROM vehicle_states_data AS v
		WHERE v.date_time::date=$1
			AND v.vehicle_id IN (SELECT vh_list.id FROM vh_list)
		GROUP BY v.vehicle_id,v.state,state_descr
	) AS vst ON vst.vehicle_id=vh.id
	WHERE vh.id IN (SELECT vh_list.id FROM vh_list)
	ORDER BY
		vh_city_descr,
		--vh.plate,
		vh_descr,
		per.h_from,
		dlv.added_date_time
	;
$BODY$
LANGUAGE sql VOLATILE COST 100 ROWS 1000;  
ALTER FUNCTION deliv_assigned_orders_list(date,int) OWNER TO polimerplast;
	
