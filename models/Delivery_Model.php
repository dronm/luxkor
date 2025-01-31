<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class Delivery_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("deliveries");
			
		//*** Field vehicle_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="vehicle_id";
						
		$f_vehicle_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_id",$f_opts);
		$this->addField($f_vehicle_id);
		//********************
		
		//*** Field doc_order_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="doc_order_id";
						
		$f_doc_order_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_order_id",$f_opts);
		$this->addField($f_doc_order_id);
		//********************
		
		//*** Field delivery_hour_id ***
		$f_opts = array();
		$f_opts['id']="delivery_hour_id";
						
		$f_delivery_hour_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_hour_id",$f_opts);
		$this->addField($f_delivery_hour_id);
		//********************
		
		//*** Field closed ***
		$f_opts = array();
		$f_opts['defaultValue']='false';
		$f_opts['id']="closed";
						
		$f_closed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"closed",$f_opts);
		$this->addField($f_closed);
		//********************
		
		//*** Field deliv_date ***
		$f_opts = array();
		$f_opts['id']="deliv_date";
						
		$f_deliv_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_date",$f_opts);
		$this->addField($f_deliv_date);
		//********************
		
		//*** Field added_date_time ***
		$f_opts = array();
		$f_opts['id']="added_date_time";
						
		$f_added_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"added_date_time",$f_opts);
		$this->addField($f_added_date_time);
		//********************
	
	}

}
?>
