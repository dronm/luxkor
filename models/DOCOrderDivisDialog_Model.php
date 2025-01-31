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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLText.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
 
class DOCOrderDivisDialog_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_divis_dialog");
			
		//*** Field main_doc_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="main_doc_id";
						
		$f_main_doc_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"main_doc_id",$f_opts);
		$this->addField($f_main_doc_id);
		//********************
		
		//*** Field delivery_plan_date ***
		$f_opts = array();
		$f_opts['id']="delivery_plan_date";
						
		$f_delivery_plan_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_plan_date",$f_opts);
		$this->addField($f_delivery_plan_date);
		//********************
		
		//*** Field sales_manager_comment ***
		$f_opts = array();
		$f_opts['id']="sales_manager_comment";
						
		$f_sales_manager_comment=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sales_manager_comment",$f_opts);
		$this->addField($f_sales_manager_comment);
		//********************
		
		//*** Field deliv_period_id ***
		$f_opts = array();
		$f_opts['id']="deliv_period_id";
						
		$f_deliv_period_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_period_id",$f_opts);
		$this->addField($f_deliv_period_id);
		//********************
		
		//*** Field deliv_vehicle_count ***
		$f_opts = array();
		$f_opts['id']="deliv_vehicle_count";
						
		$f_deliv_vehicle_count=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_vehicle_count",$f_opts);
		$this->addField($f_deliv_vehicle_count);
		//********************
		
		//*** Field deliv_cost_opt_id ***
		$f_opts = array();
		$f_opts['id']="deliv_cost_opt_id";
						
		$f_deliv_cost_opt_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_cost_opt_id",$f_opts);
		$this->addField($f_deliv_cost_opt_id);
		//********************
		
		//*** Field state ***
		$f_opts = array();
		$f_opts['id']="state";
						
		$f_state=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"state",$f_opts);
		$this->addField($f_state);
		//********************
		
		//*** Field deliv_total ***
		$f_opts = array();
		$f_opts['id']="deliv_total";
						
		$f_deliv_total=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_total",$f_opts);
		$this->addField($f_deliv_total);
		//********************
		
		//*** Field deliv_total_edit ***
		$f_opts = array();
		$f_opts['id']="deliv_total_edit";
						
		$f_deliv_total_edit=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_total_edit",$f_opts);
		$this->addField($f_deliv_total_edit);
		//********************
	
	}

}
?>
