-- View: doc_orders_divis_dialog

DROP VIEW doc_orders_divis_dialog;

CREATE OR REPLACE VIEW doc_orders_divis_dialog AS 
	SELECT
		d.id AS main_doc_id,
		d.deliv_period_id,
		dp.name AS deliv_period_descr,
		d.deliv_cost_opt_id,
		cost_opts.descr AS deliv_cost_opt_descr,
		d.sales_manager_comment,
		d.deliv_total,
		FALSE AS deliv_total_edit,
		d.deliv_add_cost_to_product,
		d.deliv_vehicle_count,
		
		--общий остаток объема для расчета тр
		CASE
			WHEN d.total_volume>0 THEN
				d.deliv_total/d.total_volume
			ELSE 0
		END AS deliv_price,
		
		--статус для проверки
		(SELECT s1.state
		FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=d.id
		ORDER BY s1.date_time DESC
		LIMIT 1
		) AS state,
		
		--нужно для определения надобности заполенения категории цена на доставку
		d.deliv_type
		
	FROM doc_orders AS d
	LEFT JOIN delivery_periods AS dp ON dp.id=d.deliv_period_id
	LEFT JOIN deliv_cost_opts_list AS cost_opts ON cost_opts.id=d.deliv_cost_opt_id
	;

ALTER TABLE doc_orders_divis_dialog OWNER TO polimerplast;

