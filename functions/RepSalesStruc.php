<?php
/*
ф
http://localhost/polimerplast/index.php?
c=Report_Controller&
f=sales&
v=ViewHTMLXSLT&
cond_fields=date_time%2Cdate_time%2Cclient_id&
cond_vals=12%2F05%2F16%2C12%2F05%2F16%2C62&
cond_sgns=ge%2Cle%2Ce&
cond_ic=0%2C0&
templ=RepSales&
groups=%5B%7B%22descr%22%3A%22111%22%2C%22fields%22%3A%22client_descr%2Cclient_login_allowed%22%7D%2C%7B%22descr%22%3A%22222%22%2C%22fields%22%3A%22client_pay_type%2Cclient_pay_debt_days%22%7D%2C%7B%22descr%22%3A%22333%22%2C%22fields%22%3A%22firm_descr%2Cproduct_descr%22%7D%5D&
agg_fields=client_debt_total&
agg_types=sum


http://localhost/polimerplast/index.php?c=Report_Controller&f=sales&v=ViewHTMLXSLT&cond_fields=date_time%2Cdate_time%2Cclient_id&cond_vals=12%2F05%2F16%2C12%2F05%2F16%2C62&cond_sgns=ge%2Cle%2Ce&cond_ic=0%2C0&templ=RepSales&groups=[{%22descr%22%3A%22111%22%2C%22fields%22%3A%22client_descr%2Cclient_login_allowed%22}%2C{%22descr%22%3A%22222%22%2C%22fields%22%3A%22client_pay_type%2Cclient_pay_debt_days%22}%2C{%22descr%22%3A%22333%22%2C%22fields%22%3A%22firm_descr%2Cproduct_descr%22}]&agg_fields=client_debt_total&agg_types=sum


WITH
detail AS (
	SELECT
	firms.name::text AS "Фирма",
	clients.name::text||' '||clients.login_allowed::text||' '||client_activities.name::text AS "Клиент",
	SUM(doc_orders.city_route_distance) AS city_route_distance
	FROM doc_orders_t_products
	LEFT JOIN doc_orders ON doc_orders.id=doc_orders_t_products.doc_id
	LEFT JOIN clients ON clients.id=doc_orders.client_id
	LEFT JOIN client_activities ON client_activities.id=clients.client_activity_id
	LEFT JOIN firms ON firms.id=doc_orders.firm_id
	WHERE
	(doc_orders.date_time >= '2016-05-01 07:00:00') AND(doc_orders.date_time <= '2016-05-31 23:59:59')
	--AND(doc_orders.client_id = 62)
	GROUP BY "Фирма","Клиент"
	ORDER BY "Фирма","Клиент"
),
grp_1 AS (
	SELECT
		"Фирма",
		''::text AS "Клиент",
		SUM(detail.city_route_distance) AS city_route_distance
	FROM detail
	GROUP BY "Фирма"
)

SELECT
	detail.*,
	2 AS sys_level_val,
	2 AS sys_level_count
FROM detail

UNION 	

--Группиро 1
SELECT
	grp_1.*,
	1 AS sys_level_val,
	2 AS sys_level_count	
FROM grp_1

UNION 	
--totals
SELECT 
	''::text AS "Фирма",
	''::text AS "Клиент",
	SUM(detail.city_route_distance) AS city_route_distance,
	3 AS sys_level_val,
	2 AS sys_level_count		
FROM detail

ORDER BY "Фирма","Клиент"


*/
	$joins = array(
		"doc_orders"=>array(
			"sub_joins"=>array(),
			"clause"=>"doc_orders ON doc_orders.id=doc_orders_t_products.doc_id"
		),

		"clients"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"clients ON clients.id=doc_orders.client_id"
		),
		"client_activities"=>array(
			"sub_joins"=>array("doc_orders","clients"),
			"clause"=>"client_activities ON client_activities.id=clients.client_activity_id"
		),
		"enum_list_payment_types"=>array(
			"sub_joins"=>array("doc_orders","clients"),
			"clause"=>"enum_list_payment_types ON enum_list_payment_types.id=clients.pay_type"
		),
		"client_debt_totals"=>array(
			"sub_joins"=>array("doc_orders","clients"),
			"clause"=>"
				(SELECT
					t.firm_id,
					t.client_id,
					t.days AS days,
					t.def_debt AS total
				FROM client_debts t
				) AS client_debt_totals
				ON client_debt_totals.client_id=clients.id"
		),
		"client_debt_periods"=>array(
			"sub_joins"=>array("doc_orders","clients"),
			"clause"=>"
				(SELECT
					t.firm_id,
					t.client_id,
					client_debt_periods_list.days_descr,
					client_debt_periods_list.days_from
				FROM client_debts t
				LEFT JOIN client_debt_periods_list ON client_debt_periods_list.days_from=t.client_debt_period_days_from
				) AS client_debt_periods
				ON client_debt_periods.client_id=clients.id"
		),
		"client_contracts_count"=>array(
			"sub_joins"=>array("doc_orders","clients"),
			"clause"=>"
				(SELECT
					t.client_id,
					(count(*)>0) client_contracts_exist
				FROM client_contracts t
				GROUP BY t.client_id
				) AS client_contracts_count
				ON client_contracts_count.client_id=clients.id"
		),
		"client_contracts_end"=>array(
			"sub_joins"=>array("doc_orders","clients"),
			"clause"=>"
				(SELECT
					t.client_id,
					MAX(t.date_to) client_contract_end
				FROM client_contracts t
				GROUP BY t.client_id
				) AS client_contracts_end
				ON client_contracts_end.client_id=clients.id"
		),
		"firms"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"firms ON firms.id=doc_orders.firm_id"
		),
		"production_cities"=>array(
			"sub_joins"=>array("doc_orders","warehouses"),
			"clause"=>"production_cities ON production_cities.id=warehouses.production_city_id"
		),
		"users"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"users ON users.id=doc_orders.user_id"
		),																											
		"enum_list_delivery_types"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"enum_list_delivery_types ON enum_list_delivery_types.id=doc_orders.deliv_type"
		),			
		"client_destinations_list"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"client_destinations_list ON client_destinations_list.id=doc_orders.deliv_destination_id"				
		),
		"delivery_periods"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"delivery_periods ON delivery_periods.id=doc_orders.deliv_period_id"
		),
		"warehouses"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"warehouses ON warehouses.id=doc_orders.warehouse_id"				
		),												
		"deliveries_virt"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"
				(SELECT
					dr.id AS driver_id,
					dr.name AS driver_descr,
					vh.plate AS vehicle_descr,
					vh.id AS vehicle_id,
					dlv.doc_order_id
				FROM deliveries dlv
				LEFT JOIN vehicles AS vh ON vh.id=dlv.vehicle_id
				LEFT JOIN drivers AS dr ON dr.id=vh.driver_id
				) AS deliveries_virt ON deliveries_virt.doc_order_id=doc_orders.id AND doc_orders.driver_id IS NULL"
		),
		"order_deliv_virt"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"
				(SELECT
					drv.id AS driver_id,
					drv.name AS driver_descr,
					vh.plate AS vehicle_descr,
					vh.id AS vehicle_id
				FROM drivers drv
				LEFT JOIN vehicles AS vh ON vh.driver_id=drv.id
				) AS order_deliv_virt ON order_deliv_virt.driver_id=doc_orders.driver_id"
		),
		
		"doc_orders_states"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"(
				SELECT
					st.doc_orders_id,
					st_descr.descr AS doc_state,
					date8_time5_descr(st.date_time) AS doc_state_date_time_descr,
					st.date_time::date AS doc_state_date,
					u.name AS doc_state_user,
					u.id AS doc_state_user_id,
					st.state AS doc_state_id
				FROM doc_orders_states AS st
				LEFT JOIN users u ON u.id=st.user_id
				LEFT JOIN enum_list_order_states st_descr ON st_descr.id=st.state
				ORDER BY st.date_time DESC
				) AS doc_orders_states ON doc_orders_states.doc_orders_id=doc_orders.id"				
		),												
		
		//added 26/07/23
		"doc_orders_last_states"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"(
				SELECT
					st.doc_orders_id,
					max(st.date_time) AS date_time
				FROM doc_orders_states AS st
				GROUP BY st.doc_orders_id
				) AS doc_st ON doc_st.doc_orders_id = doc_orders.id
				LEFT JOIN doc_orders_states AS doc_orders_last_states ON doc_orders_last_states.doc_orders_id = doc_st.doc_orders_id
					AND doc_orders_last_states.date_time = doc_st.date_time
				LEFT JOIN enum_list_order_states AS last_state_descr ON last_state_descr.id = doc_orders_last_states.state"
		),												
		
		"doc_customer_survey_results"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"(
				SELECT
					csurv.doc_id AS doc_order_id,
					sum(csurv.points) AS point_count
				FROM doc_orders_t_cust_surveys AS csurv				
				LEFT JOIN customer_survey_questions q ON q.id=csurv.customer_survey_question_id
				GROUP BY csurv.doc_id
				) AS doc_customer_survey_results ON doc_customer_survey_results.doc_order_id=doc_orders.id"
		),												
		"products"=>array(
			"sub_joins"=>array(),
			"clause"=>"products ON doc_orders_t_products.product_id=products.id"
		),												
		"products_base_mu"=>array(
			"sub_joins"=>array("products"),
			"clause"=>"measure_units AS products_base_mu ON products_base_mu.id=products.base_measure_unit_id"
		),												
		"client_debts"=>array(
			"sub_joins"=>array("clients"),
			"clause"=>"client_debts ON client_debts.client_id=clients.id"
		),																	
		"doc_coord_counts"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"(
				SELECT
					st.doc_orders_id,
					count(*) AS coord_count
				FROM doc_orders_states AS st
				WHERE st.state='waiting_for_client'::order_states
				GROUP BY st.doc_orders_id
			) AS doc_coord_counts ON doc_coord_counts.doc_orders_id=doc_orders.id"
		),
		
		"doc_coord_time_sale_deps"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"(SELECT
					st.doc_orders_id,
					(SELECT st2.date_time
					FROM doc_orders_states AS st2
					WHERE st2.doc_orders_id=st.doc_orders_id AND st2.date_time>st.date_time
					ORDER BY st2.date_time ASC
					LIMIT 1
					) - st.date_time AS coord_time_sale_dep
				FROM doc_orders_states AS st
				WHERE st.state='waiting_for_us'::order_states
				GROUP BY st.doc_orders_id,st.date_time
			) AS doc_coord_time_sale_deps ON doc_coord_time_sale_deps.doc_orders_id=doc_orders.id"
		),

		"doc_coord_time_clients"=>array(
			"sub_joins"=>array("doc_orders"),
			"clause"=>"(SELECT
					st.doc_orders_id,
					(SELECT st2.date_time
					FROM doc_orders_states AS st2
					WHERE st2.doc_orders_id=st.doc_orders_id AND st2.date_time>st.date_time
					ORDER BY st2.date_time ASC
					LIMIT 1
					) - st.date_time AS coord_time_sale_client
				FROM doc_orders_states AS st
				WHERE st.state='waiting_for_client'::order_states
				GROUP BY st.doc_orders_id,st.date_time
			) AS doc_coord_time_clients ON doc_coord_time_clients.doc_orders_id=doc_orders.id"
		)
	
	);
	
/*Все возможные поля*/
$field_resolver = 	
	array(
		"doc_date_time" => array(
			"field"=>"date_time",
			"table"=>"doc_orders"
		),
		"doc_date_time_descr" => array(
			"fieldExpr"=>"date5_time5_descr(doc_orders.date_time)",
			"table"=>"doc_orders"
		),
		
		"doc_delivery_fact_date" => array(
			"field"=>"delivery_fact_date",
			"table"=>"doc_orders"
		),
		"doc_delivery_fact_date_descr" => array(
			"fieldExpr"=>"date5_time5_descr(doc_orders.delivery_fact_date)",
			"table"=>"doc_orders"
		),
		
		"doc_order_delivered" => array(
			"fieldExpr"=>"delivery_fact_date IS NOT NULL",
			"table"=>"doc_orders"
		),
	
		//*** Клиенты ***
		"doc_client_id" => array(
			"field"=>"client_id",
			"table"=>"doc_orders"
		),
		
		"client_descr" => array(
			"field"=>"name",
			"fieldWhere"=>"id",
			"table"=>"clients"
		),
		
		"client_login_allowed" => array(
			"fieldWhere"=>"login_allowed",
			"fieldExpr"=>"CASE WHEN clients.login_allowed THEN 'Разрешен' ELSE 'Запрещен' END",
			"table"=>"clients"
		),
		
		"client_activity_descr" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"client_activities"
		),
		
		"client_pay_type" => array(
			"fieldSelect"=>"descr",
			"field"=>"id",
			"table"=>"enum_list_payment_types"
		),
		
		"client_pay_debt_days" => array(
			"field"=>"pay_debt_days",
			"table"=>"clients"
		),
		
		"client_pay_debt_sum" => array(
			"field"=>"pay_debt_sum",
			"table"=>"clients"
		),
		
		"client_debt_period_days_descr" => array(
			"fieldWhere"=>"days_from",
			"field"=>"days_descr",
			"table"=>"client_debt_periods"
		),
		
		"client_contracts_exist" => array(
			"fieldWhere"=>"client_contracts_exist",
			"fieldExpr"=>"bool_descr(client_contracts_exist)",
			"table"=>"client_contracts_count"
		),
		
		"client_contract_end" => array(
			"fieldWhere"=>"client_contract_end",
			"fieldExpr"=>"date8_descr(client_contracts_end.client_contract_end)",
			"table"=>"client_contracts_end"
		),
		

		//*** Заявки ***
		"doc_number" => array(
			"field"=>"number",
			"table"=>"doc_orders"
		),

		"firm_descr" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"firms"
		),

		"production_city_descr" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"production_cities"
		),
				
		"doc_delivery_plan_date" => array(
			"fieldExpr"=>"date8_descr(delivery_plan_date)",
			"table"=>"doc_orders"
		),		
		
		//Своевременное выполнение
		"doc_in_time" => array(
			"fieldExprWhere"=>"(doc_orders.delivery_plan_date >= doc_orders.delivery_fact_date::date)",
			"fieldExpr"=>"(CASE WHEN doc_orders.delivery_plan_date >= doc_orders.delivery_fact_date::date THEN 'Своевременное' ELSE 'Опаздание' END)",
			"table"=>"doc_orders"
		),
		"doc_overlimit" => array(
			"fieldExpr"=>"('НЕТ')",
			"table"=>"doc_orders"
		),
		
		"doc_user_descr" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"users"
		),
		"doc_user_id" => array(
			"field"=>"id",
			"table"=>"users"
		),
			
		"doc_delivery_type_descr" => array(
			"field"=>"id",
			"fieldSelect"=>"descr",
			"table"=>"enum_list_delivery_types"
		),
		
		"doc_deliv_to_third_party" => array(
			"fieldWhere"=>"deliv_to_third_party",
			"fieldExpr"=>"(CASE WHEN deliv_to_third_party THEN 'Третьим лицам' ELSE 'Не третьим лицам' END)",
			"table"=>"doc_orders"
		),

		"doc_deliv_pay_bank" => array(
			"fieldWhere"=>"deliv_pay_bank",
			"fieldExpr"=>"(CASE WHEN deliv_pay_bank THEN 'Безн.' ELSE 'Нал.' END)",
			"table"=>"doc_orders"
		),
		
		"doc_deliv_destination_descr" => array(
			"field"=>"address",
			"table"=>"client_destinations_list"
		),				
		
		"doc_deliv_period" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"delivery_periods"
		),
			
		"doc_warehouse_descr" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"warehouses"
		),
			
		"doc_driver_descr" => array(
			//"fieldWhere"=>"driver_id",
			"fieldExprWhere"=>"(CASE WHEN doc_orders.driver_id IS NOT NULL THEN doc_orders.driver_id ELSE deliveries_virt.driver_id END)",
			"fieldExpr"=>"(CASE WHEN doc_orders.driver_id IS NOT NULL THEN order_deliv_virt.driver_descr ELSE deliveries_virt.driver_descr END)",
			"table"=>["order_deliv_virt","deliveries_virt"]
		),			
		"doc_driver_id" => array(
			"fieldExpr"=>"(CASE WHEN doc_orders.driver_id IS NOT NULL THEN doc_orders.driver_id ELSE deliveries_virt.driver_id END)",
			"table"=>["order_deliv_virt","deliveries_virt"]
		),			
		
		"doc_vehicle_descr" => array(
			"fieldExprWhere"=>"(CASE WHEN doc_orders.driver_id IS NOT NULL THEN order_deliv_virt.vehicle_descr ELSE deliveries_virt.vehicle_descr END)",
			"fieldExpr"=>"(CASE WHEN doc_orders.driver_id IS NOT NULL THEN order_deliv_virt.vehicle_descr ELSE deliveries_virt.vehicle_descr END)",
			"table"=>["order_deliv_virt","deliveries_virt"]
		),				
		
		"doc_ext_order_num" => array(
			"field"=>"ext_order_num",
			"table"=>"doc_orders"
		),				

		"doc_ext_ship_num" => array(
			"field"=>"ext_ship_num",
			"table"=>"doc_orders"
		),				

		"doc_state" => array(
			"field"=>"doc_state",
			"table"=>"doc_orders_states"
		),				
		"doc_state_id" => array(
			"field"=>"doc_state_id",
			"table"=>"doc_orders_states"
		),				
		
		"doc_state_date_time" => array(
			"fieldWhere"=>"doc_state_date",
			"field"=>"doc_state_date_time_descr",
			"table"=>"doc_orders_states"
		),				
		"doc_state_user" => array(
			"fieldWhere"=>"doc_state_user_id",
			"field"=>"doc_state_user",
			"table"=>"doc_orders_states"
		),		
				
		//added 26/07/32
		"doc_last_state_id" => array(
			"fieldExpr"=>"doc_orders_last_states.state",
			"table"=>"doc_orders_last_states"
		),				
		"doc_last_state" => array(
			"fieldExpr"=>"last_state_descr.descr",
			"table"=>"doc_orders_last_states"
		),				
		
		"doc_sales_manager_comment" => array(
			"field"=>"sales_manager_comment",
			"table"=>"doc_orders"
		),				
		
		"doc_client_comment" => array(
			"field"=>"client_comment",
			"table"=>"doc_orders"
		),				

		"doc_customer_survey_points" => array(
			"field"=>"point_count",
			"table"=>"doc_customer_survey_results"
		),				

		"doct_product_descr" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"products"
		),	
		
		"doct_product_mes" => array(
			"fieldExpr"=>"products_descr(products,doc_orders_t_products.mes_length,doc_orders_t_products.mes_width,doc_orders_t_products.mes_height,FALSE)",
			"table"=>"products"
		),
		"doct_product_mes_length" => array(
			"field"=>"mes_length",
			"table"=>"doc_orders_t_products"
		),
		"doct_product_mes_width" => array(
			"field"=>"mes_width",
			"table"=>"doc_orders_t_products"
		),
		"doct_product_mes_height" => array(
			"field"=>"mes_height",
			"table"=>"doc_orders_t_products"
		),
				
		"doct_base_measure_descr" => array(
			"fieldWhere"=>"id",
			"field"=>"name",
			"table"=>"products_base_mu"
		),													
		
		"doct_pack_exists" => array(
			"fieldWhere"=>"pack_exists",
			"fieldExpr"=>"bool_descr(pack_exists)",
			"table"=>"doc_orders_t_products"
		),

		"doct_extra_price_category" => array(
			"fieldExprWhere"=>"(CASE
				WHEN
					product_extra_pay_for_abnormal_size(products,doc_orders_t_products.mes_length,doc_orders_t_products.mes_width)
				THEN				
					COALESCE(
						(SELECT csp.category
						FROM product_custom_size_prices AS csp
						WHERE csp.product_id=doc_orders_t_products.product_id
							AND csp.quant<=
							eval(eval_params(
								products.extra_pay_calc_formula,
								doc_orders_t_products.mes_length,
								doc_orders_t_products.mes_width,
								doc_orders_t_products.mes_height
							))							
						ORDER BY csp.quant DESC LIMIT 1
						)
					,0)
				
				ELSE 0
				END)",
			"fieldExpr"=>"(CASE
				WHEN
					product_extra_pay_for_abnormal_size(products,doc_orders_t_products.mes_length,doc_orders_t_products.mes_width)
				THEN				
					COALESCE(
						(SELECT csp.category
						FROM product_custom_size_prices AS csp
						WHERE csp.product_id=doc_orders_t_products.product_id
							AND csp.quant<=
							eval(eval_params(
								products.extra_pay_calc_formula,
								doc_orders_t_products.mes_length,
								doc_orders_t_products.mes_width,
								doc_orders_t_products.mes_height
							))							
						ORDER BY csp.quant DESC LIMIT 1
						)
					,0)
				
				ELSE 0
				END)",
			"table"=>["doc_orders_t_products","products"]
		),
		
		//facts
		"doc_city_route_distance" => array(
			"fieldExpr"=>"round(coalesce(doc_orders.city_route_distance,0)/1000,3)",
			"table"=>"doc_orders"
		),
		
		"doc_country_route_distance" => array(
			"fieldExpr"=>"round(coalesce(doc_orders.country_route_distance,0)/1000,3)",
			"table"=>"doc_orders"
		),
		
		/*Количество раз которое встречался статус на "согласовании у клиента"*/
		"doc_coord_count" => array(
			"field"=>"coord_count",
			"table"=>"doc_coord_counts"
		),
		
		/*Время (интервал в часах:минутах) мужду статусами "согласование Полимерпласт" и любым другим следующим статусом*/
		"doc_coord_time_sale_dep" => array(
			"field"=>"coord_time_sale_dep",
			"table"=>"doc_coord_time_sale_deps"
		),		
		
		/*Время (интервал в часах:минутах) мужду статусами "на согласовании у клиента" и любым другим следующим статусом*/
		"doc_coord_time_client" => array(
			"field"=>"coord_time_sale_client",
			"table"=>"doc_coord_time_clients"
		),		
		"doct_quant" => array(
			"field"=>"quant",
			"table"=>"doc_orders_t_products"
		),
		
		"doct_volume" => array(
			"field"=>"volume",
			"table"=>"doc_orders_t_products"
		),
		
		"doct_weight" => array(
			"field"=>"weight",
			"table"=>"doc_orders_t_products"
		),
		
		"doct_total" => array(
			"field"=>"total",
			"table"=>"doc_orders_t_products"
		),
		"doc_deliv_total" => array(
			"field"=>"deliv_total",
			"table"=>"doc_orders"
		),

		"doc_deliv_expenses" => array(
			"field"=>"deliv_expenses",
			"table"=>"doc_orders"
		),
		
		"client_debt_days" => array(
			"field"=>"days",
			"table"=>"client_debt_totals"
		),
		"client_debt_total" => array(
			"field"=>"total",
			"table"=>"client_debt_totals"
		)						
	);	
?>
