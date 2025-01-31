<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
 
class DOCOrderClosedList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_closed_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field number ***
		$f_opts = array();
		$f_opts['id']="number";
						
		$f_number=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"number",$f_opts);
		$this->addField($f_number);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field date_time_descr ***
		$f_opts = array();
		$f_opts['id']="date_time_descr";
						
		$f_date_time_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time_descr",$f_opts);
		$this->addField($f_date_time_descr);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field product_plan_date ***
		$f_opts = array();
		$f_opts['id']="product_plan_date";
						
		$f_product_plan_date=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_plan_date",$f_opts);
		$this->addField($f_product_plan_date);
		//********************
		
		//*** Field product_plan_date_descr ***
		$f_opts = array();
		$f_opts['id']="product_plan_date_descr";
						
		$f_product_plan_date_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_plan_date_descr",$f_opts);
		$this->addField($f_product_plan_date_descr);
		//********************
		
		//*** Field address_descr ***
		$f_opts = array();
		$f_opts['id']="address_descr";
						
		$f_address_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"address_descr",$f_opts);
		$this->addField($f_address_descr);
		//********************
		
		//*** Field warehouse_id ***
		$f_opts = array();
		$f_opts['id']="warehouse_id";
						
		$f_warehouse_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_id",$f_opts);
		$this->addField($f_warehouse_id);
		//********************
		
		//*** Field warehouse_descr ***
		$f_opts = array();
		$f_opts['id']="warehouse_descr";
						
		$f_warehouse_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_descr",$f_opts);
		$this->addField($f_warehouse_descr);
		//********************
		
		//*** Field delivery_fact_date ***
		$f_opts = array();
		$f_opts['id']="delivery_fact_date";
						
		$f_delivery_fact_date=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_fact_date",$f_opts);
		$this->addField($f_delivery_fact_date);
		//********************
		
		//*** Field ext_ship_num ***
		$f_opts = array();
		$f_opts['id']="ext_ship_num";
						
		$f_ext_ship_num=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_ship_num",$f_opts);
		$this->addField($f_ext_ship_num);
		//********************
		
		//*** Field products_descr ***
		$f_opts = array();
		$f_opts['id']="products_descr";
						
		$f_products_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"products_descr",$f_opts);
		$this->addField($f_products_descr);
		//********************
		
		//*** Field product_ids ***
		$f_opts = array();
		$f_opts['id']="product_ids";
						
		$f_product_ids=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_ids",$f_opts);
		$this->addField($f_product_ids);
		//********************
		
		//*** Field total ***
		$f_opts = array();
		$f_opts['id']="total";
						
		$f_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total",$f_opts);
		$this->addField($f_total);
		//********************
		
		//*** Field total_descr ***
		$f_opts = array();
		$f_opts['id']="total_descr";
						
		$f_total_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_descr",$f_opts);
		$this->addField($f_total_descr);
		//********************
		
		//*** Field total_quant ***
		$f_opts = array();
		$f_opts['id']="total_quant";
						
		$f_total_quant=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_quant",$f_opts);
		$this->addField($f_total_quant);
		//********************
		
		//*** Field state ***
		$f_opts = array();
		$f_opts['id']="state";
						
		$f_state=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"state",$f_opts);
		$this->addField($f_state);
		//********************
		
		//*** Field state_descr ***
		$f_opts = array();
		$f_opts['id']="state_descr";
						
		$f_state_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"state_descr",$f_opts);
		$this->addField($f_state_descr);
		//********************
	
	}

}
?>
