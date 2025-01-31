<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
 
class HolidayList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("holidays_list");
			
		//*** Field date ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="date";
						
		$f_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date",$f_opts);
		$this->addField($f_date);
		//********************
		
		//*** Field date_str ***
		$f_opts = array();
		$f_opts['id']="date_str";
						
		$f_date_str=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_str",$f_opts);
		$this->addField($f_date_str);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
	
	}

}
?>
