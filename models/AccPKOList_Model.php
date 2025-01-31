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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
 
class AccPKOList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("acc_pko_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field date_time_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Дата';
		$f_opts['id']="date_time_descr";
						
		$f_date_time_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time_descr",$f_opts);
		$this->addField($f_date_time_descr);
		//********************
		
		//*** Field acc_pko_type ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="acc_pko_type";
						
		$f_acc_pko_type=new FieldSQLEnum($this->getDbLink(),$this->getDbName(),$this->getTableName(),"acc_pko_type",$f_opts);
		$this->addField($f_acc_pko_type);
		//********************
		
		//*** Field acc_pko_type_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Тип ПКО';
		$f_opts['id']="acc_pko_type_descr";
						
		$f_acc_pko_type_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"acc_pko_type_descr",$f_opts);
		$this->addField($f_acc_pko_type_descr);
		//********************
		
		//*** Field total ***
		$f_opts = array();
		
		$f_opts['alias']='Сумма';
		$f_opts['length']=15;
		$f_opts['id']="total";
						
		$f_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total",$f_opts);
		$this->addField($f_total);
		//********************
		
		//*** Field order_list ***
		$f_opts = array();
		
		$f_opts['alias']='Заявки';
		$f_opts['id']="order_list";
						
		$f_order_list=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"order_list",$f_opts);
		$this->addField($f_order_list);
		//********************
	
	}

}
?>
