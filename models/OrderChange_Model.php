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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
 
class OrderChange_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("order_changes");
			
		//*** Field doc_order_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="doc_order_id";
						
		$f_doc_order_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_order_id",$f_opts);
		$this->addField($f_doc_order_id);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field field ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['length']=50;
		$f_opts['id']="field";
						
		$f_field=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"field",$f_opts);
		$this->addField($f_field);
		//********************
		
		//*** Field old_value ***
		$f_opts = array();
		$f_opts['id']="old_value";
						
		$f_old_value=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"old_value",$f_opts);
		$this->addField($f_old_value);
		//********************
	
	}

}
?>
