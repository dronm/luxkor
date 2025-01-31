<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelReportSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class RepSale_Model extends ModelReportSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("rep_sales");
			
		//*** Field doc_id ***
		$f_opts = array();
		
		$f_opts['alias']='Код заказа';
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="doc_id";
						
		$f_doc_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_id",$f_opts);
		$this->addField($f_doc_id);
		//********************
		
		//*** Field doc_date_time ***
		$f_opts = array();
		
		$f_opts['alias']='Дата подачи';
		$f_opts['id']="doc_date_time";
						
		$f_doc_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_date_time",$f_opts);
		$this->addField($f_doc_date_time);
		//********************
		
		//*** Field doc_delivery_fact_date ***
		$f_opts = array();
		
		$f_opts['alias']='Дата отгрузки';
		$f_opts['id']="doc_delivery_fact_date";
						
		$f_doc_delivery_fact_date=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_delivery_fact_date",$f_opts);
		$this->addField($f_doc_delivery_fact_date);
		//********************
		
		//*** Field doc_order_delivered ***
		$f_opts = array();
		$f_opts['id']="doc_order_delivered";
						
		$f_doc_order_delivered=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_order_delivered",$f_opts);
		$this->addField($f_doc_order_delivered);
		//********************
		
		//*** Field doc_client_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="doc_client_id";
						
		$f_doc_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_client_id",$f_opts);
		$this->addField($f_doc_client_id);
		//********************
		
		//*** Field client_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Заказчик';
		$f_opts['id']="client_descr";
						
		$f_client_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_descr",$f_opts);
		$this->addField($f_client_descr);
		//********************
		
		//*** Field client_login_allowed ***
		$f_opts = array();
		$f_opts['id']="client_login_allowed";
						
		$f_client_login_allowed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_login_allowed",$f_opts);
		$this->addField($f_client_login_allowed);
		//********************
		
		//*** Field client_activity_descr ***
		$f_opts = array();
		$f_opts['id']="client_activity_descr";
						
		$f_client_activity_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_activity_descr",$f_opts);
		$this->addField($f_client_activity_descr);
		//********************
		
		//*** Field client_pay_type ***
		$f_opts = array();
		$f_opts['id']="client_pay_type";
						
		$f_client_pay_type=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_pay_type",$f_opts);
		$this->addField($f_client_pay_type);
		//********************
		
		//*** Field client_pay_debt_days ***
		$f_opts = array();
		$f_opts['id']="client_pay_debt_days";
						
		$f_client_pay_debt_days=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_pay_debt_days",$f_opts);
		$this->addField($f_client_pay_debt_days);
		//********************
		
		//*** Field client_pay_ban_on_debt_days ***
		$f_opts = array();
		$f_opts['id']="client_pay_ban_on_debt_days";
						
		$f_client_pay_ban_on_debt_days=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_pay_ban_on_debt_days",$f_opts);
		$this->addField($f_client_pay_ban_on_debt_days);
		//********************
		
		//*** Field client_pay_debt_sum ***
		$f_opts = array();
		$f_opts['id']="client_pay_debt_sum";
						
		$f_client_pay_debt_sum=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_pay_debt_sum",$f_opts);
		$this->addField($f_client_pay_debt_sum);
		//********************
		
		//*** Field client_debt_period_days_descr ***
		$f_opts = array();
		$f_opts['id']="client_debt_period_days_descr";
						
		$f_client_debt_period_days_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_period_days_descr",$f_opts);
		$this->addField($f_client_debt_period_days_descr);
		//********************
		
		//*** Field client_debt_days ***
		$f_opts = array();
		$f_opts['id']="client_debt_days";
						
		$f_client_debt_days=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_days",$f_opts);
		$this->addField($f_client_debt_days);
		//********************
		
		//*** Field client_debt_total ***
		$f_opts = array();
		$f_opts['id']="client_debt_total";
						
		$f_client_debt_total=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_total",$f_opts);
		$this->addField($f_client_debt_total);
		//********************
		
		//*** Field client_contracts_exist ***
		$f_opts = array();
		$f_opts['id']="client_contracts_exist";
						
		$f_client_contracts_exist=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_contracts_exist",$f_opts);
		$this->addField($f_client_contracts_exist);
		//********************
		
		//*** Field client_contract_end ***
		$f_opts = array();
		$f_opts['id']="client_contract_end";
						
		$f_client_contract_end=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_contract_end",$f_opts);
		$this->addField($f_client_contract_end);
		//********************
		
		//*** Field doc_number ***
		$f_opts = array();
		
		$f_opts['alias']='Номер заказа';
		$f_opts['id']="doc_number";
						
		$f_doc_number=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_number",$f_opts);
		$this->addField($f_doc_number);
		//********************
		
		//*** Field firm_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Фирма';
		$f_opts['id']="firm_descr";
						
		$f_firm_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_descr",$f_opts);
		$this->addField($f_firm_descr);
		//********************
		
		//*** Field doc_last_state ***
		$f_opts = array();
		
		$f_opts['alias']='Последний статус';
		$f_opts['id']="doc_last_state";
						
		$f_doc_last_state=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_last_state",$f_opts);
		$this->addField($f_doc_last_state);
		//********************
		
		//*** Field production_city_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Город отгрузки';
		$f_opts['id']="production_city_descr";
						
		$f_production_city_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_descr",$f_opts);
		$this->addField($f_production_city_descr);
		//********************
		
		//*** Field doc_delivery_plan_date ***
		$f_opts = array();
		$f_opts['id']="doc_delivery_plan_date";
						
		$f_doc_delivery_plan_date=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_delivery_plan_date",$f_opts);
		$this->addField($f_doc_delivery_plan_date);
		//********************
		
		//*** Field doc_in_time ***
		$f_opts = array();
		$f_opts['id']="doc_in_time";
						
		$f_doc_in_time=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_in_time",$f_opts);
		$this->addField($f_doc_in_time);
		//********************
		
		//*** Field doc_user_id ***
		$f_opts = array();
		$f_opts['id']="doc_user_id";
						
		$f_doc_user_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_user_id",$f_opts);
		$this->addField($f_doc_user_id);
		//********************
		
		//*** Field doc_user_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Пользователь';
		$f_opts['id']="doc_user_descr";
						
		$f_doc_user_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_user_descr",$f_opts);
		$this->addField($f_doc_user_descr);
		//********************
		
		//*** Field doc_overlimit ***
		$f_opts = array();
		$f_opts['id']="doc_overlimit";
						
		$f_doc_overlimit=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_overlimit",$f_opts);
		$this->addField($f_doc_overlimit);
		//********************
		
		//*** Field doc_delivery_type_descr ***
		$f_opts = array();
		$f_opts['id']="doc_delivery_type_descr";
						
		$f_doc_delivery_type_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_delivery_type_descr",$f_opts);
		$this->addField($f_doc_delivery_type_descr);
		//********************
		
		//*** Field doc_deliv_to_third_party ***
		$f_opts = array();
		$f_opts['id']="doc_deliv_to_third_party";
						
		$f_doc_deliv_to_third_party=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_deliv_to_third_party",$f_opts);
		$this->addField($f_doc_deliv_to_third_party);
		//********************
		
		//*** Field doc_deliv_destination_descr ***
		$f_opts = array();
		$f_opts['id']="doc_deliv_destination_descr";
						
		$f_doc_deliv_destination_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_deliv_destination_descr",$f_opts);
		$this->addField($f_doc_deliv_destination_descr);
		//********************
		
		//*** Field doc_deliv_period ***
		$f_opts = array();
		$f_opts['id']="doc_deliv_period";
						
		$f_doc_deliv_period=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_deliv_period",$f_opts);
		$this->addField($f_doc_deliv_period);
		//********************
		
		//*** Field doc_warehouse_id ***
		$f_opts = array();
		$f_opts['id']="doc_warehouse_id";
						
		$f_doc_warehouse_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_warehouse_id",$f_opts);
		$this->addField($f_doc_warehouse_id);
		//********************
		
		//*** Field doc_warehouse_descr ***
		$f_opts = array();
		$f_opts['id']="doc_warehouse_descr";
						
		$f_doc_warehouse_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_warehouse_descr",$f_opts);
		$this->addField($f_doc_warehouse_descr);
		//********************
		
		//*** Field doc_driver_id ***
		$f_opts = array();
		$f_opts['id']="doc_driver_id";
						
		$f_doc_driver_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_driver_id",$f_opts);
		$this->addField($f_doc_driver_id);
		//********************
		
		//*** Field doc_driver_descr ***
		$f_opts = array();
		$f_opts['id']="doc_driver_descr";
						
		$f_doc_driver_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_driver_descr",$f_opts);
		$this->addField($f_doc_driver_descr);
		//********************
		
		//*** Field doc_vehicle_id ***
		$f_opts = array();
		$f_opts['id']="doc_vehicle_id";
						
		$f_doc_vehicle_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_vehicle_id",$f_opts);
		$this->addField($f_doc_vehicle_id);
		//********************
		
		//*** Field doc_vehicle_descr ***
		$f_opts = array();
		$f_opts['id']="doc_vehicle_descr";
						
		$f_doc_vehicle_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_vehicle_descr",$f_opts);
		$this->addField($f_doc_vehicle_descr);
		//********************
		
		//*** Field doc_ext_order_num ***
		$f_opts = array();
		$f_opts['id']="doc_ext_order_num";
						
		$f_doc_ext_order_num=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_ext_order_num",$f_opts);
		$this->addField($f_doc_ext_order_num);
		//********************
		
		//*** Field doc_ext_ship_num ***
		$f_opts = array();
		$f_opts['id']="doc_ext_ship_num";
						
		$f_doc_ext_ship_num=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_ext_ship_num",$f_opts);
		$this->addField($f_doc_ext_ship_num);
		//********************
		
		//*** Field doc_state ***
		$f_opts = array();
		$f_opts['id']="doc_state";
						
		$f_doc_state=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_state",$f_opts);
		$this->addField($f_doc_state);
		//********************
		
		//*** Field doc_state_id ***
		$f_opts = array();
		$f_opts['id']="doc_state_id";
						
		$f_doc_state_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_state_id",$f_opts);
		$this->addField($f_doc_state_id);
		//********************
		
		//*** Field doc_state_date_time ***
		$f_opts = array();
		$f_opts['id']="doc_state_date_time";
						
		$f_doc_state_date_time=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_state_date_time",$f_opts);
		$this->addField($f_doc_state_date_time);
		//********************
		
		//*** Field doc_state_user ***
		$f_opts = array();
		$f_opts['id']="doc_state_user";
						
		$f_doc_state_user=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_state_user",$f_opts);
		$this->addField($f_doc_state_user);
		//********************
		
		//*** Field doc_sales_manager_comment ***
		$f_opts = array();
		$f_opts['id']="doc_sales_manager_comment";
						
		$f_doc_sales_manager_comment=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_sales_manager_comment",$f_opts);
		$this->addField($f_doc_sales_manager_comment);
		//********************
		
		//*** Field doc_client_comment ***
		$f_opts = array();
		$f_opts['id']="doc_client_comment";
						
		$f_doc_client_comment=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_client_comment",$f_opts);
		$this->addField($f_doc_client_comment);
		//********************
		
		//*** Field doc_customer_survey_question ***
		$f_opts = array();
		$f_opts['id']="doc_customer_survey_question";
						
		$f_doc_customer_survey_question=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_customer_survey_question",$f_opts);
		$this->addField($f_doc_customer_survey_question);
		//********************
		
		//*** Field doc_deliv_total ***
		$f_opts = array();
		
		$f_opts['alias']='Стоимость доставки';
		$f_opts['id']="doc_deliv_total";
						
		$f_doc_deliv_total=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_deliv_total",$f_opts);
		$this->addField($f_doc_deliv_total);
		//********************
		
		//*** Field doct_product_descr ***
		$f_opts = array();
		$f_opts['id']="doct_product_descr";
						
		$f_doct_product_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_product_descr",$f_opts);
		$this->addField($f_doct_product_descr);
		//********************
		
		//*** Field doct_product_mes ***
		$f_opts = array();
		$f_opts['id']="doct_product_mes";
						
		$f_doct_product_mes=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_product_mes",$f_opts);
		$this->addField($f_doct_product_mes);
		//********************
		
		//*** Field doct_product_mes_length ***
		$f_opts = array();
		$f_opts['id']="doct_product_mes_length";
						
		$f_doct_product_mes_length=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_product_mes_length",$f_opts);
		$this->addField($f_doct_product_mes_length);
		//********************
		
		//*** Field doct_product_mes_width ***
		$f_opts = array();
		$f_opts['id']="doct_product_mes_width";
						
		$f_doct_product_mes_width=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_product_mes_width",$f_opts);
		$this->addField($f_doct_product_mes_width);
		//********************
		
		//*** Field doct_product_mes_height ***
		$f_opts = array();
		$f_opts['id']="doct_product_mes_height";
						
		$f_doct_product_mes_height=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_product_mes_height",$f_opts);
		$this->addField($f_doct_product_mes_height);
		//********************
		
		//*** Field doct_base_measure_id ***
		$f_opts = array();
		$f_opts['id']="doct_base_measure_id";
						
		$f_doct_base_measure_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_base_measure_id",$f_opts);
		$this->addField($f_doct_base_measure_id);
		//********************
		
		//*** Field doct_base_measure_descr ***
		$f_opts = array();
		$f_opts['id']="doct_base_measure_descr";
						
		$f_doct_base_measure_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_base_measure_descr",$f_opts);
		$this->addField($f_doct_base_measure_descr);
		//********************
		
		//*** Field doct_pack_exists ***
		$f_opts = array();
		$f_opts['id']="doct_pack_exists";
						
		$f_doct_pack_exists=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_pack_exists",$f_opts);
		$this->addField($f_doct_pack_exists);
		//********************
		
		//*** Field doc_city_route_distance ***
		$f_opts = array();
		
		$f_opts['alias']='Киллометраж доставки город';
		$f_opts['id']="doc_city_route_distance";
						
		$f_doc_city_route_distance=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_city_route_distance",$f_opts);
		$this->addField($f_doc_city_route_distance);
		//********************
		
		//*** Field doc_country_route_distance ***
		$f_opts = array();
		
		$f_opts['alias']='Киллометраж доставки межгород';
		$f_opts['id']="doc_country_route_distance";
						
		$f_doc_country_route_distance=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_country_route_distance",$f_opts);
		$this->addField($f_doc_country_route_distance);
		//********************
		
		//*** Field doc_coord_count ***
		$f_opts = array();
		
		$f_opts['alias']='Количество согласований';
		$f_opts['id']="doc_coord_count";
						
		$f_doc_coord_count=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_coord_count",$f_opts);
		$this->addField($f_doc_coord_count);
		//********************
		
		//*** Field doc_coord_time_sale_dep ***
		$f_opts = array();
		
		$f_opts['alias']='Время согласования ОП';
		$f_opts['id']="doc_coord_time_sale_dep";
						
		$f_doc_coord_time_sale_dep=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_coord_time_sale_dep",$f_opts);
		$this->addField($f_doc_coord_time_sale_dep);
		//********************
		
		//*** Field doc_coord_time_client ***
		$f_opts = array();
		
		$f_opts['alias']='Время согласования ОП';
		$f_opts['id']="doc_coord_time_client";
						
		$f_doc_coord_time_client=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_coord_time_client",$f_opts);
		$this->addField($f_doc_coord_time_client);
		//********************
		
		//*** Field doct_quant ***
		$f_opts = array();
		
		$f_opts['alias']='Кол-во в базовых единицах';
		$f_opts['length']=19;
		$f_opts['id']="doct_quant";
						
		$f_doct_quant=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_quant",$f_opts);
		$this->addField($f_doct_quant);
		//********************
		
		//*** Field doct_weight ***
		$f_opts = array();
		
		$f_opts['alias']='Масса';
		$f_opts['length']=19;
		$f_opts['id']="doct_weight";
						
		$f_doct_weight=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_weight",$f_opts);
		$this->addField($f_doct_weight);
		//********************
		
		//*** Field doct_volume ***
		$f_opts = array();
		
		$f_opts['alias']='Объем';
		$f_opts['length']=19;
		$f_opts['id']="doct_volume";
						
		$f_doct_volume=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_volume",$f_opts);
		$this->addField($f_doct_volume);
		//********************
		
		//*** Field doct_total ***
		$f_opts = array();
		
		$f_opts['alias']='Стоимость продукции';
		$f_opts['length']=19;
		$f_opts['id']="doct_total";
						
		$f_doct_total=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_total",$f_opts);
		$this->addField($f_doct_total);
		//********************
		
		//*** Field client_debt_days ***
		$f_opts = array();
		
		$f_opts['alias']='Просроченная дебиторская задолженность (дни)';
		$f_opts['id']="client_debt_days";
						
		$f_client_debt_days=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_days",$f_opts);
		$this->addField($f_client_debt_days);
		//********************
		
		//*** Field client_debt_total ***
		$f_opts = array();
		
		$f_opts['alias']='Просроченная дебиторская задолженность (стоимость)';
		$f_opts['length']=19;
		$f_opts['id']="client_debt_total";
						
		$f_client_debt_total=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_total",$f_opts);
		$this->addField($f_client_debt_total);
		//********************
		
		//*** Field doc_customer_survey_points ***
		$f_opts = array();
		
		$f_opts['alias']='Баллы опроса';
		$f_opts['id']="doc_customer_survey_points";
						
		$f_doc_customer_survey_points=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_customer_survey_points",$f_opts);
		$this->addField($f_doc_customer_survey_points);
		//********************
		
		//*** Field doc_deliv_expenses ***
		$f_opts = array();
		
		$f_opts['alias']='Затраты на доставку';
		$f_opts['id']="doc_deliv_expenses";
						
		$f_doc_deliv_expenses=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_deliv_expenses",$f_opts);
		$this->addField($f_doc_deliv_expenses);
		//********************
		
		//*** Field doct_extra_price_category ***
		$f_opts = array();
		$f_opts['id']="doct_extra_price_category";
						
		$f_doct_extra_price_category=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doct_extra_price_category",$f_opts);
		$this->addField($f_doct_extra_price_category);
		//********************
		
		//*** Field sys_level_val ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="sys_level_val";
						
		$f_sys_level_val=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sys_level_val",$f_opts);
		$this->addField($f_sys_level_val);
		//********************
		
		//*** Field sys_level_count ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="sys_level_count";
						
		$f_sys_level_count=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sys_level_count",$f_opts);
		$this->addField($f_sys_level_count);
		//********************
		
		//*** Field sys_level_col_count ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="sys_level_col_count";
						
		$f_sys_level_col_count=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sys_level_col_count",$f_opts);
		$this->addField($f_sys_level_col_count);
		//********************
	
	}

}
?>
