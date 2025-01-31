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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
 
class VehicleStopList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("");
			
		//*** Field vh_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="vh_id";
						
		$f_vh_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vh_id",$f_opts);
		$this->addField($f_vh_id);
		//********************
		
		//*** Field vh_id_list ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="vh_id_list";
						
		$f_vh_id_list=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vh_id_list",$f_opts);
		$this->addField($f_vh_id_list);
		//********************
		
		//*** Field vh_descr ***
		$f_opts = array();
		
		$f_opts['alias']='ТС';
		$f_opts['id']="vh_descr";
						
		$f_vh_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vh_descr",$f_opts);
		$this->addField($f_vh_descr);
		//********************
		
		//*** Field date_time_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Дата';
		$f_opts['id']="date_time_descr";
						
		$f_date_time_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time_descr",$f_opts);
		$this->addField($f_date_time_descr);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field duration ***
		$f_opts = array();
		
		$f_opts['alias']='Продолжит.стоянки';
		$f_opts['id']="duration";
						
		$f_duration=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"duration",$f_opts);
		$this->addField($f_duration);
		//********************
		
		//*** Field address ***
		$f_opts = array();
		
		$f_opts['alias']='Адрес';
		$f_opts['id']="address";
						
		$f_address=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"address",$f_opts);
		$this->addField($f_address);
		//********************
	
	}

}
?>
