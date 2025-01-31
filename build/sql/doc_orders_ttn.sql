-- View: doc_orders_ttn

-- DROP VIEW doc_orders_ttn;

CREATE OR REPLACE VIEW doc_orders_ttn AS 
	SELECT
		h.id AS doc_id,
		h.ext_ship_id,
		''::text AS deliv_time,
		''::text AS deliv_kind,
		
		wh.address AS wareh_descr,
		
		CASE
			WHEN coalesce(h.destination_to_ttn,FALSE) THEN
				dest.address
			ELSE cl.addr_reg
		END AS dest_descr,
				
		CASE
			WHEN ttn_pairs.firm_id IS NOT NULL THEN
				(SELECT ttn_data.driver_ref FROM
					(SELECT
						t_cl.ext_id AS carrier_ref,
						t_dr.ext_id AS driver_ref,
						t_dr.drive_perm AS driver_drive_perm,
						t_vh.model AS vh_model,
						t_vh.plate AS vh_plate,
						t_vh.trailer_plate AS vh_trailer_plate,
						t_vh.trailer_model As vh_trailer_model
					FROM carrier_orders t
					LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
					LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
					LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
					LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
					WHERE t.ord=carrier_orders_today_ord(
						(SELECT st.date_time FROM doc_orders_states AS st WHERE st.doc_orders_id=h.id AND st.state='shipped')
					)
					) AS ttn_data
				)
			WHEN order_dr.id IS NOT NULL THEN order_dr.ext_id
			ELSE dr.ext_id
		END AS driver_ref,
		CASE
			WHEN ttn_pairs.firm_id IS NOT NULL THEN
				(SELECT ttn_data.driver_drive_perm FROM
					(SELECT
						t_cl.ext_id AS carrier_ref,
						t_dr.ext_id AS driver_ref,
						t_dr.drive_perm AS driver_drive_perm,
						t_vh.model AS vh_model,
						t_vh.plate AS vh_plate,
						t_vh.trailer_plate AS vh_trailer_plate,
						t_vh.trailer_model As vh_trailer_model
					FROM carrier_orders t
					LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
					LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
					LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
					LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
					WHERE t.ord=carrier_orders_today_ord(
						(SELECT st.date_time FROM doc_orders_states AS st WHERE st.doc_orders_id=h.id AND st.state='shipped')
					)
					) AS ttn_data
				)			
			WHEN order_dr.id IS NOT NULL THEN order_dr.drive_perm
			ELSE dr.drive_perm
		END AS driver_drive_perm,		
		CASE
			WHEN ttn_pairs.firm_id IS NOT NULL THEN
				(SELECT ttn_data.vh_trailer_plate FROM
					(SELECT
						t_cl.ext_id AS carrier_ref,
						t_dr.ext_id AS driver_ref,
						t_dr.drive_perm AS driver_drive_perm,
						t_vh.model AS vh_model,
						t_vh.plate AS vh_plate,
						t_vh.trailer_plate AS vh_trailer_plate,
						t_vh.trailer_model As vh_trailer_model
					FROM carrier_orders t
					LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
					LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
					LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
					LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
					WHERE t.ord=carrier_orders_today_ord(
						(SELECT st.date_time FROM doc_orders_states AS st WHERE st.doc_orders_id=h.id AND st.state='shipped')
					)
					) AS ttn_data
				)			
			WHEN order_vh.id IS NOT NULL THEN order_vh.trailer_plate
			ELSE vh.trailer_plate
		END AS vh_trailer_plate,
		CASE
			WHEN ttn_pairs.firm_id IS NOT NULL THEN
				(SELECT ttn_data.vh_trailer_model FROM
					(SELECT
						t_cl.ext_id AS carrier_ref,
						t_dr.ext_id AS driver_ref,
						t_dr.drive_perm AS driver_drive_perm,
						t_vh.model AS vh_model,
						t_vh.plate AS vh_plate,
						t_vh.trailer_plate AS vh_trailer_plate,
						t_vh.trailer_model As vh_trailer_model
					FROM carrier_orders t
					LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
					LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
					LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
					LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
					WHERE t.ord=carrier_orders_today_ord(
						(SELECT st.date_time FROM doc_orders_states AS st WHERE st.doc_orders_id=h.id AND st.state='shipped')
					)
					) AS ttn_data
				)						
			WHEN order_vh.id IS NOT NULL THEN order_vh.trailer_model
			ELSE vh.trailer_model
		END AS vh_trailer_model,
		CASE
			WHEN ttn_pairs.firm_id IS NOT NULL THEN
				(SELECT ttn_data.carrier_ref FROM
					(SELECT
						t_cl.ext_id AS carrier_ref,
						t_dr.ext_id AS driver_ref,
						t_dr.drive_perm AS driver_drive_perm,
						t_vh.model AS vh_model,
						t_vh.plate AS vh_plate,
						t_vh.trailer_plate AS vh_trailer_plate,
						t_vh.trailer_model As vh_trailer_model
					FROM carrier_orders t
					LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
					LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
					LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
					LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
					WHERE t.ord=carrier_orders_today_ord(
						(SELECT st.date_time FROM doc_orders_states AS st WHERE st.doc_orders_id=h.id AND st.state='shipped')
					)
					) AS ttn_data
				)
			WHEN order_carr_cl.id IS NOT NULL THEN order_carr_cl.ext_id
			ELSE NULL
		END AS carrier_ref,
		CASE
			WHEN ttn_pairs.firm_id IS NOT NULL THEN
				(SELECT ttn_data.vh_plate FROM
					(SELECT
						t_cl.ext_id AS carrier_ref,
						t_dr.ext_id AS driver_ref,
						t_dr.drive_perm AS driver_drive_perm,
						t_vh.model AS vh_model,
						t_vh.plate AS vh_plate,
						t_vh.trailer_plate AS vh_trailer_plate,
						t_vh.trailer_model As vh_trailer_model
					FROM carrier_orders t
					LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
					LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
					LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
					LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
					WHERE t.ord=carrier_orders_today_ord(
						(SELECT st.date_time FROM doc_orders_states AS st WHERE st.doc_orders_id=h.id AND st.state='shipped')
					)
					) AS ttn_data
				)									
			WHEN order_vh.id IS NOT NULL THEN order_vh.plate
			ELSE vh.plate
		END AS vh_plate,
		CASE
			WHEN ttn_pairs.firm_id IS NOT NULL THEN
				(SELECT ttn_data.vh_model FROM
					(SELECT
						t_cl.ext_id AS carrier_ref,
						t_dr.ext_id AS driver_ref,
						t_dr.drive_perm AS driver_drive_perm,
						t_vh.model AS vh_model,
						t_vh.plate AS vh_plate,
						t_vh.trailer_plate AS vh_trailer_plate,
						t_vh.trailer_model As vh_trailer_model
					FROM carrier_orders t
					LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
					LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
					LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
					LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
					WHERE t.ord=carrier_orders_today_ord(
						(SELECT st.date_time FROM doc_orders_states AS st WHERE st.doc_orders_id=h.id AND st.state='shipped')
					)
					) AS ttn_data
				)									
			WHEN order_vh.id IS NOT NULL THEN order_vh.model	
			ELSE vh.model
		END AS vh_model,
		
		--УДАЛИТЬ ПОСЛЕ УСТАНОВКИ ИЗМЕНЕНИЙ
		coalesce(frm.name,'')||' '||coalesce(frm.sert_header,'') AS firm_descr,
		vh.trailer_model AS veh_trailer_model,
		vh.model AS veh_model,
		dr.ext_id AS driver_ext_id,
		dr.name AS driver_name,
		cr.name AS carrier_descr,
		dr.drive_perm AS drive_perm,
		
		h.deliv_type		
		
	FROM doc_orders AS h
	LEFT JOIN deliveries AS dlv ON dlv.doc_order_id=h.id
	LEFT JOIN firms AS frm ON frm.id=h.firm_id
	LEFT JOIN vehicles AS vh ON dlv.vehicle_id=vh.id
	LEFT JOIN carriers AS cr ON cr.id=vh.carrier_id
	LEFT JOIN drivers AS dr ON vh.driver_id=dr.id
	LEFT JOIN warehouses AS wh ON wh.id=h.warehouse_id
	LEFT JOIN clients AS cl ON cl.id=h.client_id
	LEFT JOIN client_destinations_list AS dest ON dest.id=h.deliv_destination_id
	
	LEFT JOIN drivers AS order_dr ON order_dr.id=h.driver_id
	LEFT JOIN vehicles AS order_vh ON order_vh.id=h.vehicle_id
	LEFT JOIN carriers AS order_carr ON order_carr.id=order_vh.carrier_id
	LEFT JOIN clients AS order_carr_cl ON order_carr_cl.id=order_carr.client_id
	
	LEFT JOIN 
		(SELECT
			ttn_attr_pairs.warehouse_id,
			ttn_attr_pairs.firm_id
		FROM ttn_attr_pairs
		) AS ttn_pairs ON ttn_pairs.firm_id=h.firm_id AND ttn_pairs.warehouse_id=h.warehouse_id
	
	;
ALTER TABLE doc_orders_ttn OWNER TO polimerplast;

