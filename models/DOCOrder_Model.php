<?php
require_once(FRAME_WORK_PATH.'basic_classes/ModelSQLDOCPl.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLText.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');

require_once('functions/ExtProg.php');
require_once('functions/PPEmailSender.php');

class DOCOrder_Model extends ModelSQLDOCPl{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		
		$f_opts['alias']='Дата пдч.';
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field number ***
		$f_opts = array();
		
		$f_opts['alias']='Номер';
		$f_opts['length']=10;
		$f_opts['id']="number";
						
		$f_number=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"number",$f_opts);
		$this->addField($f_number);
		//********************
		
		//*** Field processed ***
		$f_opts = array();
		
		$f_opts['alias']='Проведен';
		$f_opts['id']="processed";
						
		$f_processed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"processed",$f_opts);
		$this->addField($f_processed);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field gruzopoluchatel_id ***
		$f_opts = array();
		$f_opts['id']="gruzopoluchatel_id";
						
		$f_gruzopoluchatel_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"gruzopoluchatel_id",$f_opts);
		$this->addField($f_gruzopoluchatel_id);
		//********************
		
		//*** Field client_number ***
		$f_opts = array();
		$f_opts['length']=12;
		$f_opts['id']="client_number";
						
		$f_client_number=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_number",$f_opts);
		$this->addField($f_client_number);
		//********************
		
		//*** Field delivery_plan_date ***
		$f_opts = array();
		$f_opts['id']="delivery_plan_date";
						
		$f_delivery_plan_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_plan_date",$f_opts);
		$this->addField($f_delivery_plan_date);
		//********************
		
		//*** Field delivery_fact_date ***
		$f_opts = array();
		$f_opts['id']="delivery_fact_date";
						
		$f_delivery_fact_date=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_fact_date",$f_opts);
		$this->addField($f_delivery_fact_date);
		//********************
		
		//*** Field product_plan_date ***
		$f_opts = array();
		$f_opts['id']="product_plan_date";
						
		$f_product_plan_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_plan_date",$f_opts);
		$this->addField($f_product_plan_date);
		//********************
		
		//*** Field client_user_id ***
		$f_opts = array();
		$f_opts['id']="client_user_id";
						
		$f_client_user_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_user_id",$f_opts);
		$this->addField($f_client_user_id);
		//********************
		
		//*** Field firm_id ***
		$f_opts = array();
		$f_opts['id']="firm_id";
						
		$f_firm_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_id",$f_opts);
		$this->addField($f_firm_id);
		//********************
		
		//*** Field user_id ***
		$f_opts = array();
		$f_opts['id']="user_id";
						
		$f_user_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"user_id",$f_opts);
		$this->addField($f_user_id);
		//********************
		
		//*** Field sales_manager_comment ***
		$f_opts = array();
		$f_opts['id']="sales_manager_comment";
						
		$f_sales_manager_comment=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sales_manager_comment",$f_opts);
		$this->addField($f_sales_manager_comment);
		//********************
		
		//*** Field client_comment ***
		$f_opts = array();
		$f_opts['id']="client_comment";
						
		$f_client_comment=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_comment",$f_opts);
		$this->addField($f_client_comment);
		//********************
		
		//*** Field marketing_comment ***
		$f_opts = array();
		$f_opts['id']="marketing_comment";
						
		$f_marketing_comment=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"marketing_comment",$f_opts);
		$this->addField($f_marketing_comment);
		//********************
		
		//*** Field warehouse_id ***
		$f_opts = array();
		$f_opts['id']="warehouse_id";
						
		$f_warehouse_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_id",$f_opts);
		$this->addField($f_warehouse_id);
		//********************
		
		//*** Field deliv_destination_id ***
		$f_opts = array();
		$f_opts['id']="deliv_destination_id";
						
		$f_deliv_destination_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_destination_id",$f_opts);
		$this->addField($f_deliv_destination_id);
		//********************
		
		//*** Field deliv_destination ***
		$f_opts = array();
		
		$f_opts['alias']='field unique to this db, used instead of ref to client_destinations';
		$f_opts['id']="deliv_destination";
						
		$f_deliv_destination=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_destination",$f_opts);
		$this->addField($f_deliv_destination);
		//********************
		
		//*** Field deliv_type ***
		$f_opts = array();
		$f_opts['id']="deliv_type";
						
		$f_deliv_type=new FieldSQLEnum($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_type",$f_opts);
		$this->addField($f_deliv_type);
		//********************
		
		//*** Field deliv_to_third_party ***
		$f_opts = array();
		$f_opts['id']="deliv_to_third_party";
						
		$f_deliv_to_third_party=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_to_third_party",$f_opts);
		$this->addField($f_deliv_to_third_party);
		//********************
		
		//*** Field deliv_send_sms ***
		$f_opts = array();
		$f_opts['id']="deliv_send_sms";
						
		$f_deliv_send_sms=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_send_sms",$f_opts);
		$this->addField($f_deliv_send_sms);
		//********************
		
		//*** Field deliv_add_cost_to_product ***
		$f_opts = array();
		$f_opts['id']="deliv_add_cost_to_product";
						
		$f_deliv_add_cost_to_product=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_add_cost_to_product",$f_opts);
		$this->addField($f_deliv_add_cost_to_product);
		//********************
		
		//*** Field deliv_period_id ***
		$f_opts = array();
		$f_opts['id']="deliv_period_id";
						
		$f_deliv_period_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_period_id",$f_opts);
		$this->addField($f_deliv_period_id);
		//********************
		
		//*** Field deliv_responsable ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="deliv_responsable";
						
		$f_deliv_responsable=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_responsable",$f_opts);
		$this->addField($f_deliv_responsable);
		//********************
		
		//*** Field deliv_responsable_tel ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="deliv_responsable_tel";
						
		$f_deliv_responsable_tel=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_responsable_tel",$f_opts);
		$this->addField($f_deliv_responsable_tel);
		//********************
		
		//*** Field tel ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="tel";
						
		$f_tel=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"tel",$f_opts);
		$this->addField($f_tel);
		//********************
		
		//*** Field deliv_vehicle_id ***
		$f_opts = array();
		$f_opts['id']="deliv_vehicle_id";
						
		$f_deliv_vehicle_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_vehicle_id",$f_opts);
		$this->addField($f_deliv_vehicle_id);
		//********************
		
		//*** Field deliv_cost_opt_id ***
		$f_opts = array();
		$f_opts['id']="deliv_cost_opt_id";
						
		$f_deliv_cost_opt_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_cost_opt_id",$f_opts);
		$this->addField($f_deliv_cost_opt_id);
		//********************
		
		//*** Field deliv_vehicle_count ***
		$f_opts = array();
		$f_opts['id']="deliv_vehicle_count";
						
		$f_deliv_vehicle_count=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_vehicle_count",$f_opts);
		$this->addField($f_deliv_vehicle_count);
		//********************
		
		//*** Field deliv_total ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="deliv_total";
						
		$f_deliv_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_total",$f_opts);
		$this->addField($f_deliv_total);
		//********************
		
		//*** Field deliv_total_edit ***
		$f_opts = array();
		$f_opts['id']="deliv_total_edit";
						
		$f_deliv_total_edit=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_total_edit",$f_opts);
		$this->addField($f_deliv_total_edit);
		//********************
		
		//*** Field total ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="total";
						
		$f_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total",$f_opts);
		$this->addField($f_total);
		//********************
		
		//*** Field total_pack ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['defaultValue']='0';
		$f_opts['id']="total_pack";
						
		$f_total_pack=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_pack",$f_opts);
		$this->addField($f_total_pack);
		//********************
		
		//*** Field total_quant ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="total_quant";
						
		$f_total_quant=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_quant",$f_opts);
		$this->addField($f_total_quant);
		//********************
		
		//*** Field total_volume ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="total_volume";
						
		$f_total_volume=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_volume",$f_opts);
		$this->addField($f_total_volume);
		//********************
		
		//*** Field total_weight ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="total_weight";
						
		$f_total_weight=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_weight",$f_opts);
		$this->addField($f_total_weight);
		//********************
		
		//*** Field printed ***
		$f_opts = array();
		$f_opts['id']="printed";
						
		$f_printed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"printed",$f_opts);
		$this->addField($f_printed);
		//********************
		
		//*** Field ext_order_num ***
		$f_opts = array();
		$f_opts['length']=11;
		$f_opts['id']="ext_order_num";
						
		$f_ext_order_num=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_order_num",$f_opts);
		$this->addField($f_ext_order_num);
		//********************
		
		//*** Field ext_order_id ***
		$f_opts = array();
		$f_opts['length']=36;
		$f_opts['id']="ext_order_id";
						
		$f_ext_order_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_order_id",$f_opts);
		$this->addField($f_ext_order_id);
		//********************
		
		//*** Field ext_ship_num ***
		$f_opts = array();
		$f_opts['length']=11;
		$f_opts['id']="ext_ship_num";
						
		$f_ext_ship_num=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_ship_num",$f_opts);
		$this->addField($f_ext_ship_num);
		//********************
		
		//*** Field ext_ship_id ***
		$f_opts = array();
		$f_opts['length']=36;
		$f_opts['id']="ext_ship_id";
						
		$f_ext_ship_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_ship_id",$f_opts);
		$this->addField($f_ext_ship_id);
		//********************
		
		//*** Field ext_invoice_num ***
		$f_opts = array();
		$f_opts['length']=11;
		$f_opts['id']="ext_invoice_num";
						
		$f_ext_invoice_num=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_invoice_num",$f_opts);
		$this->addField($f_ext_invoice_num);
		//********************
		
		//*** Field ext_invoice_id ***
		$f_opts = array();
		$f_opts['length']=36;
		$f_opts['id']="ext_invoice_id";
						
		$f_ext_invoice_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_invoice_id",$f_opts);
		$this->addField($f_ext_invoice_id);
		//********************
		
		//*** Field ext_invoice_date_time ***
		$f_opts = array();
		$f_opts['id']="ext_invoice_date_time";
						
		$f_ext_invoice_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_invoice_date_time",$f_opts);
		$this->addField($f_ext_invoice_date_time);
		//********************
		
		//*** Field cust_surv_date_time ***
		$f_opts = array();
		$f_opts['id']="cust_surv_date_time";
						
		$f_cust_surv_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"cust_surv_date_time",$f_opts);
		$this->addField($f_cust_surv_date_time);
		//********************
		
		//*** Field cust_surv_comment ***
		$f_opts = array();
		$f_opts['id']="cust_surv_comment";
						
		$f_cust_surv_comment=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"cust_surv_comment",$f_opts);
		$this->addField($f_cust_surv_comment);
		//********************
		
		//*** Field product_str ***
		$f_opts = array();
		$f_opts['id']="product_str";
						
		$f_product_str=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_str",$f_opts);
		$this->addField($f_product_str);
		//********************
		
		//*** Field product_ids ***
		$f_opts = array();
		$f_opts['id']="product_ids";
						
		$f_product_ids=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_ids",$f_opts);
		$this->addField($f_product_ids);
		//********************
		
		//*** Field submit_user_id ***
		$f_opts = array();
		$f_opts['id']="submit_user_id";
						
		$f_submit_user_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"submit_user_id",$f_opts);
		$this->addField($f_submit_user_id);
		//********************
		
		//*** Field paid ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="paid";
						
		$f_paid=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"paid",$f_opts);
		$this->addField($f_paid);
		//********************
		
		//*** Field paid_by_bank ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="paid_by_bank";
						
		$f_paid_by_bank=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"paid_by_bank",$f_opts);
		$this->addField($f_paid_by_bank);
		//********************
		
		//*** Field acc_pko ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="acc_pko";
						
		$f_acc_pko=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"acc_pko",$f_opts);
		$this->addField($f_acc_pko);
		//********************
		
		//*** Field city_route_distance ***
		$f_opts = array();
		$f_opts['id']="city_route_distance";
						
		$f_city_route_distance=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"city_route_distance",$f_opts);
		$this->addField($f_city_route_distance);
		//********************
		
		//*** Field country_route_distance ***
		$f_opts = array();
		$f_opts['id']="country_route_distance";
						
		$f_country_route_distance=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"country_route_distance",$f_opts);
		$this->addField($f_country_route_distance);
		//********************
		
		//*** Field destination_to_ttn ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="destination_to_ttn";
						
		$f_destination_to_ttn=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"destination_to_ttn",$f_opts);
		$this->addField($f_destination_to_ttn);
		//********************
		
		//*** Field deliv_expenses ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="deliv_expenses";
						
		$f_deliv_expenses=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_expenses",$f_opts);
		$this->addField($f_deliv_expenses);
		//********************
		
		//*** Field deliv_expenses_edit ***
		$f_opts = array();
		$f_opts['id']="deliv_expenses_edit";
						
		$f_deliv_expenses_edit=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_expenses_edit",$f_opts);
		$this->addField($f_deliv_expenses_edit);
		//********************
		
		//*** Field deliv_pay_bank ***
		$f_opts = array();
		$f_opts['id']="deliv_pay_bank";
						
		$f_deliv_pay_bank=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_pay_bank",$f_opts);
		$this->addField($f_deliv_pay_bank);
		//********************
		
		//*** Field driver_id ***
		$f_opts = array();
		$f_opts['id']="driver_id";
						
		$f_driver_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"driver_id",$f_opts);
		$this->addField($f_driver_id);
		//********************
		
		//*** Field vehicle_id ***
		$f_opts = array();
		$f_opts['id']="vehicle_id";
						
		$f_vehicle_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_id",$f_opts);
		$this->addField($f_vehicle_id);
		//********************
		
		//*** Field client_contract_ext_id ***
		$f_opts = array();
		$f_opts['length']=36;
		$f_opts['id']="client_contract_ext_id";
						
		$f_client_contract_ext_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_contract_ext_id",$f_opts);
		$this->addField($f_client_contract_ext_id);
		//********************
		
		//*** Field client_contract_name ***
		$f_opts = array();
		$f_opts['length']=150;
		$f_opts['id']="client_contract_name";
						
		$f_client_contract_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_contract_name",$f_opts);
		$this->addField($f_client_contract_name);
		//********************
		
		//*** Field sale_store_address_id ***
		$f_opts = array();
		
		$f_opts['alias']='Адрес магазина';
		$f_opts['id']="sale_store_address_id";
						
		$f_sale_store_address_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sale_store_address_id",$f_opts);
		$this->addField($f_sale_store_address_id);
		//********************
		
		//*** Field order_num ***
		$f_opts = array();
		
		$f_opts['alias']='Номер заказа';
		$f_opts['id']="order_num";
						
		$f_order_num=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"order_num",$f_opts);
		$this->addField($f_order_num);
		//********************
		
		//*** Field batch_num ***
		$f_opts = array();
		
		$f_opts['alias']='Номер партии';
		$f_opts['id']="batch_num";
						
		$f_batch_num=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"batch_num",$f_opts);
		$this->addField($f_batch_num);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_date_time,$direct);

	}


	public function set_ship_deliv_expenses($extShipId,$delivExpenses){
	
		$head = ['ext_ship_id'=>$extShipId,'deliv_expenses'=>$delivExpenses];
		ExtProg::set_deliv_expenses($head);
	}

	public function create_alter_order($docId){
		$link = $this->getDbLink();
		$head=NULL;
		$items=NULL;
		
		DOCOrder_Controller::docDataForExt($link,$docId,$head,$items);
		$res = array();
		ExtProg::order($head,$items,$res);
		
		if (
		isset($res['orderRef'])
		&&
			(!isset($head['ext_order_id'])
			|| ( isset($head['ext_order_id']) && $head['ext_order_num']!=$res['orderNum'] )
			)
		){
			//Отметка о счете
			$link->query(sprintf(
			"UPDATE doc_orders
			SET
				ext_order_id='%s',
				ext_order_num='%s'
			WHERE id=%d",
			$res['orderRef'],
			$res['orderNum'],
			$docId
			));
		}
		
		//Печатная форма счета из 1с, если сеть eamil
		$ar = $link->query_first(sprintf(
		"SELECT
			h.ext_order_id,
			(u.email IS NOT NULL) AS email_exists
		FROM doc_orders h
		LEFT JOIN users AS u ON u.id=h.client_user_id
		WHERE h.id=%d",
		$docId
		));
		if (!is_array($ar) || !count($ar)){
			throw new Exception("Документ не найден!");
		}
	
		if (strlen($ar['ext_order_id']) && $ar['email_exists']=='t'){			
			$tmp_file = ExtProg::print_order(
				$ar['ext_order_id'],$_SESSION['user_ext_id'],1,
				array('name'=>('Счет_'.uniqid().'.pdf'),'toFile'=>TRUE)
				);
	
			//отправить по мылу счет
			$mail_id = PPEmailSender::addEMail(
				$link,
				sprintf("email_text_order(%d)",$docId),
				array($tmp_file),
				'order'
				);
		}	
	}
	
	public function insert($needId = FALSE, $row = NULL){
		$view_id_for_db = "'".$_REQUEST['view_id']."'";
	
		$link = $this->getDbLink();
		$link->query('BEGIN');
		try{	
			if ($_SESSION['role_id']=='client'){
				$state = 'waiting_for_us';
				
				//Префикс нумерации
				$num_q = 
				"SELECT
					const_new_order_prefix_val() || coalesce(MAX( substr(t.number::varchar,length(const_new_order_prefix_val())+1)::int ),0)+1
				FROM doc_orders AS t
				WHERE
					substr(t.number::varchar,1,length(const_new_order_prefix_val()))=const_new_order_prefix_val()";
				
			}
			else{
				//Просто номер
				$num_q = 
				"SELECT
					coalesce( MAX(t.number::int),0)+1
				FROM doc_orders AS t
				WHERE
					substr(t.number::varchar,1,length(const_new_order_prefix_val()))<>const_new_order_prefix_val()";
			
				//По Новому ТЗ от ноября 2016 в производство ТОЛЬКО через кнопку!!!
				$state = 'waiting_for_payment';
			
				/*ТАК БЫЛО РАНЬШЕ: статус зависит от вида работы
				с клиентом - нал/предоплата/отсрочка
				*/
				/*
				$ar = $link->query_first(sprintf(
					"SELECT pay_type FROM clients WHERE id=%d",
					$this->getFieldById('client_id')->getValueForDb()
				));
				if (is_array($ar)&&count($ar)>0){
					$state = ($ar['pay_type']=='with_delay')? 'producing':'waiting_for_payment';
				}
				*/
			}
		
			//ВСТАВКА ДОКУМЕНТА
			$ids_ar = $link->query_first($this->getInsertQuery(TRUE));
			$doc_id = $ids_ar['id'];
			$link->query(
				sprintf("SELECT %s_before_write(%s,%d)",
				$this->getTableName(),$view_id_for_db,$doc_id)
			);
			
			$link->query(
				sprintf("UPDATE %s
				SET
					processed = %s,
					number = (%s)
				WHERE id=%d",
				$this->getTableName(),$this->getFieldById('processed')->getValueForDb(),$num_q,
				$doc_id));			
			
			$link->query(
				sprintf("INSERT INTO doc_orders_states
				(
					doc_orders_id,
					date_time,
					state,
					user_id)
				VALUES (
					%d,
					now()::timestamp without time zone,
					'%s'::order_states,
					'%s')",
				$doc_id,
				$state,
				$_SESSION['user_id'])
			);
			if ($state != 'waiting_for_us'){
				//счет
				$this->create_alter_order($doc_id);
			}
			
			$link->query('COMMIT');
		}
		catch(Exception $e){
			$link->query('ROLLBACK');
			throw $e;
		}
		
		return array('id'=>$doc_id);
	}
	public function update(){		
		if ($this->getFieldById('cust_surv_date_time')->getValue()){
			//Маркетолог проводит опрос			
			parent::update();
		}
		else{	
			$view_id_for_db = "'".$_REQUEST['view_id']."'";
				
			$doc_id = $this->getFieldById('id')->getOldValueForDb();
			$link = $this->getDbLink();
			
			//Проверка статуса документа
			
			$ar = $link->query_first(sprintf(
			"SELECT
				st.id AS state_id,
				st.state,
				st.state IN (
					'produced',
					'loading',
					'on_way',
					'unloading',
					'closed',
					'canceled',
					'canceled_by_sales_manager',
					'canceled_by_client'
				) AS check,
				(SELECT COALESCE(cl.login_allowed,FALSE)
				FROM clients cl
				WHERE cl.id=o.client_id
				) AS client_login_allowed
			FROM doc_orders_states AS st
			LEFT JOIN doc_orders AS o ON o.id=st.doc_orders_id
			WHERE st.doc_orders_id=%d
			ORDER BY st.date_time DESC
			LIMIT 1
			",$doc_id));
			
			$closed_state = (is_array($ar)&&count($ar)&&$ar['check']=='t');
			/*
			if (is_array($ar)&&count($ar)&&$ar['check']=='t'){
				throw new Exception('Не верный статус документа!');
			}
			*/
			
			/*может поменятся в тек.модуле!!!!*/
			if ($_SESSION['role_id']=='client'){
				$new_state = 'waiting_for_us';
			}
			else if ($_SESSION['role_id']!='client'&&$closed_state){
				//мы изменняем в закрытом статусе: коммент+телефон+дата+расходы на доставку
				$new_state = NULL;
			}
			else if ($_SESSION['role_id']!='client'
				&&$ar['client_login_allowed']=='f'){
				/** статус НЕ надо менять
				 * Т.К у клиента нет личного кабинета
				 */
				$new_state = NULL;
			}
			else{
				//может и не надо менять если поменяли только наш коммент
				$new_state = 'waiting_for_client';
			}
			
			$link->query('BEGIN');
			try{
				$create_alter_order = FALSE;
				
				if (isset($new_state)){
					$res = $link->query_first(
						sprintf("INSERT INTO doc_orders_states
						(
							doc_orders_id,
							date_time,
							state,
							user_id)
						VALUES (
							%d,
							now()::timestamp without time zone,
							'%s',
							'%s')
						RETURNING id",
						$doc_id,
						$new_state,
						$_SESSION['user_id'])
					);
				}
				else{
					$res = array('id'=>$ar['state_id']);
				}
				
				$modif = FALSE;
				
				if (is_array($res)&&count($res)){
					//all differances
					
					/** список полей изменение которых
					 * не передается клиенту
					 */
					$fields_us_only = array('sales_manager_comment');
					$fields_us_modif = FALSE;

					/** список полей изменение которых
					 * не влияет на счет
					 */
					$fields_order_no_modif = array('delivery_plan_date','deliv_responsable_tel','tel','vehicle_id');
					
					$sel = '';
					$sel_no_modif = '';
					
					$deliv_expenses = NULL;
					
					$fields = $this->getFieldIterator();				
					while($fields->valid()) {
						$field = $fields->current();
						$f_id = $field->getId();
						
						if (!is_null($field->getValue())){
							//значение изменилось
							$f_val = $field->getValueForDb();

							if ($f_id=='deliv_expenses'||$f_id=='deliv_expenses_edit'){
								if ($f_id=='deliv_expenses'){
									$deliv_expenses = $f_val;
								}
							}
							else if (array_key_exists($f_id,$fields_us_only)){
								//изменилось наше поле - не фиксируем
								$fields_us_modif = TRUE;
							}
							else if (array_key_exists($f_id,$fields_order_no_modif)){
								//изменилось поле которое не изменит счет, но сменит статус
								$sel_no_modif.= ($sel_no_modif=='')? '':' UNION ';
								$sel_no_modif.= sprintf("(SELECT
									%d,
									'%s',
									d.%s::text,
									%s::text
								FROM doc_orders AS d
								WHERE d.id=%d AND coalesce(d.%s::text,'')<>%s::text)",
								$res['id'], $f_id, $f_id,$f_val,
								$doc_id, $f_id, $f_val);							
							}							
							else{							
								$sel.= ($sel=='')? '':' UNION ';
								$sel.= sprintf("(SELECT
									%d,
									'%s',
									d.%s::text,
									%s::text
								FROM doc_orders AS d
								WHERE d.id=%d AND coalesce(d.%s::text,'')<>%s::text)",
								$res['id'], $f_id, $f_id,$f_val,
								$doc_id, $f_id, $f_val);							
							}
						}
						$fields->next();
					}
					if (strlen($sel)){
						$q = sprintf("INSERT INTO doc_orders_head_history
						(doc_orders_states_id, field, old_val, new_val)
						(%s)",$sel);
						$qres = $link->query($q);
						$modif = $modif||($link->affected_rows($qres)>0);
					}
					if (strlen($sel_no_modif)){
						$link->query(
						sprintf("INSERT INTO doc_orders_head_history
						(doc_orders_states_id, field, old_val, new_val)
						(%s)",$sel_no_modif)
						);
					}
									
					//products
					$t_attrs = array('quant','mes_length','mes_width','mes_height','price',
						'pack_exists','pack_in_price');
					$fld = '';
					$old_vals='';
					$cond='';
					foreach($t_attrs as $f){
						$fld.= ($fld=='')? "":"||','||";
						$fld.=sprintf(
						"CASE
							WHEN not_equal(t.%s,t_tmp.%s) THEN '%s'
							ELSE ''
						END",$f,$f,$f);

						$old_vals.= ($old_vals=='')? "":"||','||";
						$old_vals.=sprintf(
						"CASE
							WHEN not_equal(t.%s,t_tmp.%s) THEN t.%s::text
							ELSE ''							
						END",$f,$f,$f);
						
						$cond.= ($cond=='')? "":" OR ";
						$cond.=sprintf("not_equal(t.%s,t_tmp.%s)",$f,$f);						
					}
					$sel = sprintf(
					"(SELECT
						%d,
						COALESCE(t_tmp.product_id,t.product_id),
						CASE
							WHEN t_tmp.product_id IS NOT NULL
								AND t.product_id IS NOT NULL THEN
								'modif'
							WHEN t_tmp.product_id IS NULL
								AND t.product_id IS NOT NULL THEN
								'delete'
							WHEN t_tmp.product_id IS NOT NULL
								AND t.product_id IS NULL THEN
								'add'									
						END AS oper,
						%s AS fields,
						%s AS old_vals
						
					FROM doc_orders_t_tmp_products AS t_tmp
					FULL JOIN doc_orders_t_products AS t
						ON t.product_id=t_tmp.product_id AND t.doc_id=%d
							AND t.mes_height=t_tmp.mes_height
							AND t.mes_length=t_tmp.mes_length
							AND t.mes_width=t_tmp.mes_width
					WHERE t_tmp.view_id=%s AND (%s))
					UNION ALL
					(SELECT 
						%d,
						t.product_id,
						'delete' AS oper,
						'product_id' AS fields,
						pr.name AS old_vals
						FROM doc_orders_t_products t
						LEFT JOIN products pr ON pr.id=t.product_id
						WHERE t.doc_id=%d AND t.product_id NOT IN (
							SELECT t_tmp.product_id
							FROM doc_orders_t_tmp_products t_tmp
							WHERE t_tmp.view_id=%s
						)					
					)
					",
					$res['id'],
					$fld,
					$old_vals,
					$doc_id, $view_id_for_db, $cond,
					
					$res['id'],
					$doc_id,$view_id_for_db
					);
					
					$q = sprintf("INSERT INTO doc_orders_products_history
					(doc_orders_states_id,
					product_id,oper,fields,old_vals)
					(%s)",$sel);
					$qres = $link->query($q);
					$modif = $modif||($link->affected_rows($qres)>0);
					//throw new Exception('modif='.$modif);				
					
					if (!$modif&&isset($new_state)&&$fields_us_modif){
						/** если изменились только наши атрибуты
						 * удалим новый статус
						 */
						$link->query(sprintf(
						"DELETE FROM doc_orders_states
							WHERE id=%d",
						$res['id'])
						);
						$create_alter_order = TRUE;
					}
					else if (!$modif&&isset($new_state)){
						/** если подтверждаем без изменений
						 * то выписываем счет на оплату!
						 */
						//сменим статус
						$link->query(sprintf(
						"UPDATE doc_orders_states
							SET state='waiting_for_payment'
							WHERE id=%d",
						$res['id']));
					
						$create_alter_order = TRUE;
					}					
					/* Мы изменили заявку  и не надо отдавать клиенту
					 */
					else if ($modif&&!isset($new_state)){
						$create_alter_order = TRUE;
					}
				}
				/*
				if ($_SESSION['role_id']!='client'){
					//Последний редактировавший
					$this->getFieldById('submit_user_id')->setValue($_SESSION['user_id']);
				}
				*/
				
				//ОБНОВЛЕНИЕ ДОКУМЕНТА
				$link->query(
					sprintf("SELECT %s_before_write(%s,%d)",
					$this->getTableName(),$view_id_for_db,
					$this->getFieldById('id')->getOldValue())
				);
				$q = $this->getUpdateQuery();
				if ($q!=''){
					if (!is_null($deliv_expenses)){
						$q.=' RETURNING ext_ship_id';
					}
				
					$q_id = $link->query($q);
				}
				
				if ($new_state=='waiting_for_client'){
					//отправим собщение
					PPEmailSender::addEMail(
						$link,
						sprintf("email_text_order_changed(%d)",$doc_id),
						NULL,
						'order_changed'
						);
				}				
				
				//Added 27/02/24: if order is derived from a split order - do not create 1c Order!
				$derived_from_split_order = ($ar['state'] == 'waiting_for_us');				
				
				if (
				!$create_alter_order
				&& !is_null($deliv_expenses)
				&& ($ar = $link->fetch_array($q_id))
				&& $ar['ext_ship_id']
				){
					$this->set_ship_deliv_expenses($ar['ext_ship_id'],$deliv_expenses);

				}else if ($create_alter_order && !$derived_from_split_order){
					$this->create_alter_order($doc_id);
				}
				
				$link->query('COMMIT');
				
			}
			catch(Exception $e){
				$link->query('ROLLBACK');
				throw $e;
			}
		}
	}		
}
?>