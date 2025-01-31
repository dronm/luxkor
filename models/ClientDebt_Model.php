<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
 
class ClientDebt_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_debts");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field firm_id ***
		$f_opts = array();
		$f_opts['id']="firm_id";
						
		$f_firm_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_id",$f_opts);
		$this->addField($f_firm_id);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field client_debt_period_days_from ***
		$f_opts = array();
		$f_opts['id']="client_debt_period_days_from";
						
		$f_client_debt_period_days_from=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_period_days_from",$f_opts);
		$this->addField($f_client_debt_period_days_from);
		//********************
		
		//*** Field def_debt ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="def_debt";
						
		$f_def_debt=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"def_debt",$f_opts);
		$this->addField($f_def_debt);
		//********************
		
		//*** Field debt_total ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="debt_total";
						
		$f_debt_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"debt_total",$f_opts);
		$this->addField($f_debt_total);
		//********************
		
		//*** Field days ***
		$f_opts = array();
		$f_opts['id']="days";
						
		$f_days=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"days",$f_opts);
		$this->addField($f_days);
		//********************
		
		//*** Field update_date ***
		$f_opts = array();
		$f_opts['id']="update_date";
						
		$f_update_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"update_date",$f_opts);
		$this->addField($f_update_date);
		//********************
	
	}

}
?>
