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
 
class CarrierOrderList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("carrier_orders_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field carrier_id ***
		$f_opts = array();
		
		$f_opts['alias']='Перевозчик код';
		$f_opts['id']="carrier_id";
						
		$f_carrier_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"carrier_id",$f_opts);
		$this->addField($f_carrier_id);
		//********************
		
		//*** Field carrier_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Перевозчик';
		$f_opts['id']="carrier_descr";
						
		$f_carrier_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"carrier_descr",$f_opts);
		$this->addField($f_carrier_descr);
		//********************
		
		//*** Field driver_id ***
		$f_opts = array();
		
		$f_opts['alias']='Водитель код';
		$f_opts['id']="driver_id";
						
		$f_driver_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"driver_id",$f_opts);
		$this->addField($f_driver_id);
		//********************
		
		//*** Field driver_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Водитель';
		$f_opts['id']="driver_descr";
						
		$f_driver_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"driver_descr",$f_opts);
		$this->addField($f_driver_descr);
		//********************
		
		//*** Field vehicle_id ***
		$f_opts = array();
		
		$f_opts['alias']='ТС код';
		$f_opts['id']="vehicle_id";
						
		$f_vehicle_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_id",$f_opts);
		$this->addField($f_vehicle_id);
		//********************
		
		//*** Field vehicle_descr ***
		$f_opts = array();
		
		$f_opts['alias']='ТС';
		$f_opts['id']="vehicle_descr";
						
		$f_vehicle_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_descr",$f_opts);
		$this->addField($f_vehicle_descr);
		//********************
		
		//*** Field ord ***
		$f_opts = array();
		
		$f_opts['alias']='Порядок';
		$f_opts['id']="ord";
						
		$f_ord=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ord",$f_opts);
		$this->addField($f_ord);
		//********************
		
		//*** Field today_ord ***
		$f_opts = array();
		
		$f_opts['alias']='На сегодня';
		$f_opts['id']="today_ord";
						
		$f_today_ord=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"today_ord",$f_opts);
		$this->addField($f_today_ord);
		//********************
	
	}

}
?>
