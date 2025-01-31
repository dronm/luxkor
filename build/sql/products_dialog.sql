-- View: products_dialog

--DROP VIEW products_dialog;

CREATE OR REPLACE VIEW products_dialog AS 
	SELECT 
		p.id,
		p.name,
		p.name_for_1c,
		p.mes_length_exists,
		p.mes_length_name,
		p.mes_length_fix,
		p.mes_length_fix_val,
		p.mes_length_min_val,
		p.mes_length_max_val,
		p.mes_length_def_val,
		p.mes_length_seq,
		array_to_string(p.mes_length_vals,';') AS mes_length_vals,
		p.mes_width_exists,
		p.mes_width_name,
		p.mes_width_fix,
		p.mes_width_fix_val,
		p.mes_width_min_val,
		p.mes_width_max_val,
		p.mes_width_def_val,
		p.mes_width_seq,
		array_to_string(p.mes_width_vals,';') AS mes_width_vals,
		p.mes_height_exists,
		p.mes_height_name,
		p.mes_height_fix,
		p.mes_height_fix_val,
		p.mes_height_min_val,
		p.mes_height_max_val,
		p.mes_height_def_val,
		p.mes_height_seq,			
		array_to_string(p.mes_height_vals,';') AS mes_height_vals,
		
		p.base_measure_unit_id,
		mu.name AS base_measure_unit_descr,
		p.order_measure_unit_id,
		mu_o.name AS order_measure_unit_descr,
		
		p.base_measure_unit_vol_m,
		p.base_measure_unit_weight_t,
		p.pack_name,
		p.pack_default,
		p.pack_not_free,
		p.pack_full_package_only,
		p.pack_base_measure_unit_count,
		p.extra_pay_for_abnormal_size,
		p.extra_pay_for_abn_size_always,
		p.extra_pay_calc_formula,
		p.xslt_pattern,
		const_main_measure_unit_id_val() AS main_measure_unit_id,
		(SELECT t.name FROM measure_units t WHERE t.id=const_main_measure_unit_id_val())
			AS main_measure_unit_descr,
		mu.is_int,
		p.sert_type_id,
		sert.name AS sert_type_descr,
		p.product_group_id,
		pg.name AS product_group_descr,
		
		p.fin_group,
		p.deleted,
		p.analit_group		
	
	FROM products AS p
	LEFT JOIN measure_units AS mu ON mu.id=p.base_measure_unit_id
	LEFT JOIN measure_units AS mu_o ON mu_o.id=p.order_measure_unit_id
	LEFT JOIN sert_types AS sert ON sert.id=p.sert_type_id
	LEFT JOIN product_groups AS pg ON pg.id=p.product_group_id
	ORDER BY p.name;
ALTER TABLE products_dialog OWNER TO polimerplast;

