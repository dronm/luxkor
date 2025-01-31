-- View: doc_orders_data_for_ext

DROP VIEW doc_orders_data_for_ext;

/**
 * АТРИБУТЫ ВОДИТЕЛЬ - ДЛЯ ЗАПИСИ В СВОЙСТВА!!!
 */
CREATE OR REPLACE VIEW doc_orders_data_for_ext AS 

	/* ТАКОЕ НЕ РАБОТАЕТ БОЛЬШЕ!!!
	WITH
	ttn_data AS (
		SELECT
			t_cl.ext_id AS carrier_ref,
			t_dr.ext_id AS driver_ref,
			t_dr.name AS driver_name,
			t_dr.drive_perm AS driver_drive_perm,
			t_dr.cel_phone AS driver_cel_phone,
			t_vh.model AS vh_model,
			t_vh.plate AS vh_plate,
			t_vh.load_weight_t AS vh_load_weight_t,
			t_vh.vol AS vh_vol,
			t_vh.trailer_plate AS vh_trailer_plate,
			t_vh.trailer_model As vh_trailer_model
		FROM carrier_orders t
		LEFT JOIN carriers AS t_cr ON t_cr.id=t.carrier_id
		LEFT JOIN clients AS t_cl ON t_cl.id=t_cr.client_id
		LEFT JOIN drivers AS t_dr ON t_dr.id=t.driver_id
		LEFT JOIN vehicles AS t_vh ON t_vh.id=t.vehicle_id
		WHERE t.ord=carrier_orders_today_ord(now()::timestamp without time zone)
	)
	*/
	
	SELECT
		--t.doc_id,
		h.id AS doc_id,
		
		--ШАПКА
		f.ext_id AS firm_ref,
		w.ext_id AS warehouse_ref,
		w.address AS warehouse_address,
		cl.ext_id AS client_ref,
		(cl.pay_type='cash'::payment_types) AS pay_cash,
		
		CASE
		WHEN h.deliv_type='by_supplier'::delivery_types
			AND coalesce(h.deliv_add_cost_to_product,FALSE)=FALSE THEN
				h.deliv_total
		ELSE 0
		END AS deliv_total,
		h.deliv_type,
		
		h.total_pack AS pack_total,
		h.number,
		

		h.deliv_destination AS deliv_address,
		-- CASE
		-- 	WHEN coalesce(h.destination_to_ttn,FALSE) THEN
		--
		-- 	ELSE cl.addr_reg
		-- END AS deliv_address,
		
		order_dr.ext_id AS driver_ref,
		order_dr.name AS driver_name,
		order_dr.drive_perm AS driver_drive_perm,
		order_dr.cel_phone AS driver_cel_phone,

		order_vh.trailer_plate AS vh_trailer_plate,
		order_vh.trailer_model AS vh_trailer_model,
		
		order_carr_cl.ext_id AS carrier_ref,
		
		order_vh.model AS vh_model,
		order_vh.plate AS vh_plate,
		order_vh.vol AS vh_vol,
		order_vh.load_weight_t AS vh_load_weight_t,
		
		--ТАБЛИЦА
		
		p.name AS group_name,
		pg.ext_id AS product_group_ref,
		
		p.fin_group,
		p.analit_group,
		
		products_descr(p,
			t.mes_length,t.mes_width,t.mes_height,
			TRUE
			,h.firm_id
			) AS product_name,
		
		t.mes_length AS mes_length,
		t.mes_width AS mes_width,
		t.mes_height AS mes_height,
		mu.name AS measure_unit,
		mu.ext_id AS measure_unit_ref,
		bmu.ext_id AS base_measure_unit_ref,

		eval(
			eval_params(
				pmu.calc_formula,
				t.mes_length,t.mes_width,t.mes_height
			)
		) AS measure_unit_k,
		/*
		CASE WHEN t.quant_base_measure_unit>0 THEN
			t.quant/t.quant_base_measure_unit
		ELSE 0::numeric
		END AS measure_unit_k,
		*/
		
		t.quant AS quant,
		--t.quant_confirmed AS quant_confirmed,
		
		CASE
			WHEN COALESCE(t.quant)=0 THEN 0
			ELSE ROUND(t.total/t.quant,2)
		END AS price,
		t.total AS total,
		
		h.ext_order_id,
		h.ext_ship_id,
		h.client_comment,
		h.sales_manager_comment,
		h.deliv_vehicle_count,
		
		f.nds AS firm_nds,
		f.nds_val AS firm_nds_val,
		
		h.total_volume AS total_volume,
		h.total_weight AS total_weight,
		
		h.deliv_expenses,
		
		cl2.ext_id AS gruzopoluchatel_ref,
		
		h.client_contract_ext_id,
		
		cl_f_acc.ext_bank_account_id AS firm_bank_acc_ext_id,
		
		h.deliv_add_cost_to_product,
		CASE
		WHEN h.deliv_type='by_supplier'::delivery_types
			AND coalesce(h.deliv_add_cost_to_product,FALSE)=TRUE THEN
				h.deliv_total
		ELSE 0
		END AS deliv_add_cost_to_product_total,
		
		h.order_num,
		ss.code AS sale_store_address_code,
		
		h.batch_num,
		
		(SELECT
			string_agg(b.ext_id,',')
		FROM doc_orders_t_prod_batches AS b
		WHERE b.doc_id = h.id
		) as prod_batches
		
	--FROM doc_orders_t_products t
	--LEFT JOIN doc_orders h ON h.id=t.doc_id
	FROM doc_orders AS h
	LEFT JOIN doc_orders_t_products t ON t.doc_id=h.id
	
	LEFT JOIN products p ON p.id=t.product_id
	LEFT JOIN firms f ON f.id=h.firm_id
	LEFT JOIN warehouses w ON w.id=h.warehouse_id
	LEFT JOIN clients cl ON cl.id=h.client_id
	LEFT JOIN client_firm_bank_accounts cl_f_acc ON cl_f_acc.client_id=h.client_id AND cl_f_acc.firm_id=h.firm_id
	LEFT JOIN clients cl2 ON cl2.id=h.gruzopoluchatel_id
	LEFT JOIN measure_units mu ON mu.id=t.measure_unit_id
	LEFT JOIN product_measure_units AS pmu
			ON pmu.product_id=p.id AND pmu.measure_unit_id=t.measure_unit_id
	LEFT JOIN measure_units bmu ON bmu.id=p.base_measure_unit_id
	LEFT JOIN product_groups pg ON pg.id=p.product_group_id
	
	LEFT JOIN vehicles AS order_vh ON order_vh.id=h.vehicle_id
	LEFT JOIN drivers AS order_dr ON order_dr.id=order_vh.driver_id	
	LEFT JOIN carriers AS order_carr ON order_carr.id=order_vh.carrier_id
	LEFT JOIN clients AS order_carr_cl ON
	--order_carr_cl.id=order_carr.client_id
		--Печатать или нет пустого как НАШИ АВТО зависит от зачения параметра в Фирме
		(	h.vehicle_id IS NULL
			--const_order_no_carrier_print_val
			AND f.order_no_carrier_print=TRUE
			AND order_carr_cl.id=(SELECT carrier_client_on_firm(client_ids_on_firm,49) FROM carriers WHERE id=1)			
		)
		OR (order_carr.client_ids_on_firm IS NULL AND order_carr_cl.id=order_carr.client_id)
		OR (order_carr.client_ids_on_firm IS NOT NULL AND order_carr_cl.id=carrier_client_on_firm(order_carr.client_ids_on_firm,h.firm_id))
		
	LEFT JOIN sale_store_addresses AS ss ON ss.id = h.sale_store_address_id
	;
ALTER TABLE doc_orders_data_for_ext OWNER TO polimerplast;

