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
 
class UnassignedOrderList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("deliv_unassigned_orders_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field number ***
		$f_opts = array();
		
		$f_opts['alias']='Номер';
		$f_opts['id']="number";
						
		$f_number=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"number",$f_opts);
		$this->addField($f_number);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		
		$f_opts['alias']='Дата';
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field delivery_plan_date ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="delivery_plan_date";
						
		$f_delivery_plan_date=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_plan_date",$f_opts);
		$this->addField($f_delivery_plan_date);
		//********************
		
		//*** Field delivery_plan_date_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Плановая дата выпуска';
		$f_opts['id']="delivery_plan_date_descr";
						
		$f_delivery_plan_date_descr=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_plan_date_descr",$f_opts);
		$this->addField($f_delivery_plan_date_descr);
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
		
		$f_opts['alias']='Клиент';
		$f_opts['id']="client_descr";
						
		$f_client_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_descr",$f_opts);
		$this->addField($f_client_descr);
		//********************
		
		//*** Field warehouse_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Склад';
		$f_opts['id']="warehouse_descr";
						
		$f_warehouse_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_descr",$f_opts);
		$this->addField($f_warehouse_descr);
		//********************
		
		//*** Field client_dest_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Адрес';
		$f_opts['id']="client_dest_descr";
						
		$f_client_dest_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_dest_descr",$f_opts);
		$this->addField($f_client_dest_descr);
		//********************
		
		//*** Field product_str ***
		$f_opts = array();
		
		$f_opts['alias']='Продукция';
		$f_opts['id']="product_str";
						
		$f_product_str=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_str",$f_opts);
		$this->addField($f_product_str);
		//********************
		
		//*** Field total_volume ***
		$f_opts = array();
		
		$f_opts['alias']='Объем';
		$f_opts['id']="total_volume";
						
		$f_total_volume=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_volume",$f_opts);
		$this->addField($f_total_volume);
		//********************
		
		//*** Field total_weight ***
		$f_opts = array();
		
		$f_opts['alias']='Вес';
		$f_opts['id']="total_weight";
						
		$f_total_weight=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_weight",$f_opts);
		$this->addField($f_total_weight);
		//********************
	
	}

}
?>
