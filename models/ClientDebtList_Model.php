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
 
class ClientDebtList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_debt_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field firm_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="firm_id";
						
		$f_firm_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_id",$f_opts);
		$this->addField($f_firm_id);
		//********************
		
		//*** Field firm_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Организация';
		$f_opts['id']="firm_descr";
						
		$f_firm_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_descr",$f_opts);
		$this->addField($f_firm_descr);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field client_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Контрагент';
		$f_opts['id']="client_descr";
						
		$f_client_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_descr",$f_opts);
		$this->addField($f_client_descr);
		//********************
		
		//*** Field client_debt_period_days_from ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="client_debt_period_days_from";
						
		$f_client_debt_period_days_from=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_period_days_from",$f_opts);
		$this->addField($f_client_debt_period_days_from);
		//********************
		
		//*** Field client_debt_period_days_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Период задолженности';
		$f_opts['id']="client_debt_period_days_descr";
						
		$f_client_debt_period_days_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_debt_period_days_descr",$f_opts);
		$this->addField($f_client_debt_period_days_descr);
		//********************
		
		//*** Field def_debt ***
		$f_opts = array();
		
		$f_opts['alias']='Просроченная задолженность';
		$f_opts['length']=15;
		$f_opts['id']="def_debt";
						
		$f_def_debt=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"def_debt",$f_opts);
		$this->addField($f_def_debt);
		//********************
		
		//*** Field debt_total ***
		$f_opts = array();
		
		$f_opts['alias']='Долг всего';
		$f_opts['length']=15;
		$f_opts['id']="debt_total";
						
		$f_debt_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"debt_total",$f_opts);
		$this->addField($f_debt_total);
		//********************
		
		//*** Field days ***
		$f_opts = array();
		
		$f_opts['alias']='Дней просроченного долга';
		$f_opts['id']="days";
						
		$f_days=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"days",$f_opts);
		$this->addField($f_days);
		//********************
	
	}

}
?>
