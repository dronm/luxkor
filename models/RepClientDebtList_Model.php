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
 
class RepClientDebtList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("rep_debts");
			
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
		
		//*** Field shipped_not_payed ***
		$f_opts = array();
		
		$f_opts['alias']='Отгружено, не оплачено';
		$f_opts['length']=15;
		$f_opts['id']="shipped_not_payed";
						
		$f_shipped_not_payed=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"shipped_not_payed",$f_opts);
		$this->addField($f_shipped_not_payed);
		//********************
		
		//*** Field not_shipped_payed ***
		$f_opts = array();
		
		$f_opts['alias']='Оплачено, не отгружено';
		$f_opts['length']=15;
		$f_opts['id']="not_shipped_payed";
						
		$f_not_shipped_payed=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"not_shipped_payed",$f_opts);
		$this->addField($f_not_shipped_payed);
		//********************
		
		//*** Field balance ***
		$f_opts = array();
		
		$f_opts['alias']='Сумма';
		$f_opts['length']=15;
		$f_opts['id']="balance";
						
		$f_balance=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"balance",$f_opts);
		$this->addField($f_balance);
		//********************
	
	}

}
?>
