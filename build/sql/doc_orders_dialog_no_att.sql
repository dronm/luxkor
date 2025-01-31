-- View: doc_orders_dialog_no_att

--DROP VIEW doc_orders_print_h;
--DROP VIEW doc_orders_dialog_no_att;

CREATE OR REPLACE VIEW doc_orders_dialog_no_att AS 
	SELECT
		d.id,		
		
		d.delivery_plan_date,
		date8_descr(d.delivery_plan_date::date) AS delivery_plan_date_descr,
		
		d.number,
		d.processed,
		d.printed,
		
		d.client_id,
		cl.name AS client_descr,
		
		d.warehouse_id,
		w.name AS warehouse_descr,
		
		d.client_number,
		d.client_user_id,
		u.name AS client_user_descr,
		u.cel_phone AS client_user_cel_phone,
		d.firm_id,
		f.name AS firm_descr,
		
		--sub.state,
		--get_order_states_descr(sub.state) AS state_descr,
		(SELECT s1.state FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=d.id
		ORDER BY s1.date_time DESC
		LIMIT 1
		) AS state,		
		(SELECT get_order_states_descr(s1.state) FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=d.id
		ORDER BY s1.date_time DESC
		LIMIT 1
		) AS state_descr,		
		
		--children
		(SELECT TRUE FROM doc_orders_links t
		WHERE t.main_doc_id = d.id LIMIT 1) AS has_children,
		
		d.deliv_destination_id,
		cldest.address AS deliv_destination_descr,
		
		d.deliv_type,
		get_delivery_types_descr(d.deliv_type) AS deliv_type_descr,
		d.deliv_to_third_party,
		d.deliv_period_id,
		dp.name AS deliv_period_descr,
		d.deliv_responsable,
		
		--d.deliv_vehicle_id,--временно
		d.deliv_cost_opt_id,
		cost_opts.descr AS deliv_cost_opt_descr,
		
		d.deliv_vehicle_count,
		v.descr AS deliv_vehicle_descr,
		v.vol AS deliv_vehicle_vol,
		v.load_weight_t AS deliv_vehicle_load_weight_t,
		d.deliv_send_sms,
		d.deliv_responsable_tel,
		d.tel,
		coalesce(d.deliv_total,0) AS deliv_total,
		d.deliv_total_edit,
		format_money(d.deliv_total) AS deliv_total_descr,
		d.deliv_add_cost_to_product,
		d.sales_manager_comment,
		d.client_comment,
		
		d.city_route_distance,
		d.country_route_distance,
		
		d.destination_to_ttn,
		coalesce(d.total_pack,0) AS total_pack,
		
		(SELECT cld.debt_total FROM client_debts cld WHERE cld.client_id=d.client_id AND cld.firm_id=d.firm_id LIMIT 1) debt_total,
		(SELECT sum(cld.def_debt) FROM client_debts cld WHERE cld.client_id=d.client_id AND cld.firm_id=d.firm_id) def_debt,
		
		d.deliv_expenses,
		d.deliv_pay_bank,		
		d.deliv_expenses_edit,
		
		d.gruzopoluchatel_id,
		cl2.name AS gruzopoluchatel_descr,
		
		d.vehicle_id AS vehicle_id,
		o_v.plate||coalesce(' '||o_dr.name,'') AS vehicle_descr,
		
		d.client_contract_name,
		d.client_contract_ext_id
				
		
	FROM doc_orders AS d
	LEFT JOIN clients AS cl ON cl.id=d.client_id
	LEFT JOIN clients AS cl2 ON cl2.id=d.gruzopoluchatel_id

	/*
	LEFT JOIN (
		SELECT
			t.client_id,
			t.firm_id,
			t.debt_total AS debt_total,
			sum(t.def_debt) AS def_debt
		FROM client_debts AS t
		GROUP BY t.client_id,t.firm_id,t.debt_total
	) cld ON cld.client_id = d.client_id AND cld.firm_id = d.firm_id
	*/
	
	LEFT JOIN users AS u ON u.id=d.user_id
	LEFT JOIN firms AS f ON f.id=d.firm_id
	LEFT JOIN delivery_periods AS dp ON dp.id=d.deliv_period_id
	LEFT JOIN vehicles_select_list AS v ON v.id=d.deliv_vehicle_id
	LEFT JOIN warehouses AS w ON w.id=d.warehouse_id
	LEFT JOIN client_destinations_list AS cldest ON cldest.id=d.deliv_destination_id
	LEFT JOIN deliv_cost_opts_list AS cost_opts ON cost_opts.id=d.deliv_cost_opt_id
	LEFT JOIN vehicles AS o_v ON o_v.id=d.vehicle_id
	LEFT JOIN drivers AS o_dr ON o_dr.id=o_v.driver_id
	;

ALTER TABLE doc_orders_dialog_no_att OWNER TO polimerplast;

