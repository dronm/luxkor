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
 
class ClientDebtPeriodList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_debt_periods_list");
			
		//*** Field days_from ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="days_from";
						
		$f_days_from=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"days_from",$f_opts);
		$this->addField($f_days_from);
		//********************
		
		//*** Field days_to ***
		$f_opts = array();
		$f_opts['id']="days_to";
						
		$f_days_to=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"days_to",$f_opts);
		$this->addField($f_days_to);
		//********************
		
		//*** Field days_descr ***
		$f_opts = array();
		$f_opts['id']="days_descr";
						
		$f_days_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"days_descr",$f_opts);
		$this->addField($f_days_descr);
		//********************
	
	}

}
?>
