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
 
class PayOrderList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("pay_orders_list");
			
		//*** Field id ***
		$f_opts = array();
		
		$f_opts['alias']='Код заявки';
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		
		$f_opts['alias']='Клиент код';
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field number ***
		$f_opts = array();
		
		$f_opts['alias']='Номер заявки';
		$f_opts['id']="number";
						
		$f_number=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"number",$f_opts);
		$this->addField($f_number);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		
		$f_opts['alias']='Дата заявки';
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field date_time_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Дата заявки';
		$f_opts['id']="date_time_descr";
						
		$f_date_time_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time_descr",$f_opts);
		$this->addField($f_date_time_descr);
		//********************
		
		//*** Field total ***
		$f_opts = array();
		
		$f_opts['alias']='Сумма';
		$f_opts['length']=15;
		$f_opts['id']="total";
						
		$f_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total",$f_opts);
		$this->addField($f_total);
		//********************
		
		//*** Field total_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Сумма';
		$f_opts['id']="total_descr";
						
		$f_total_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_descr",$f_opts);
		$this->addField($f_total_descr);
		//********************
		
		//*** Field firm_id ***
		$f_opts = array();
		
		$f_opts['alias']='Организация код';
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
		
		//*** Field state ***
		$f_opts = array();
		
		$f_opts['alias']='Статус код';
		$f_opts['id']="state";
						
		$f_state=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"state",$f_opts);
		$this->addField($f_state);
		//********************
		
		//*** Field state_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Статус';
		$f_opts['id']="state_descr";
						
		$f_state_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"state_descr",$f_opts);
		$this->addField($f_state_descr);
		//********************
	
	}

}
?>
