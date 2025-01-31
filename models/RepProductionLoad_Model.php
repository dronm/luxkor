<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelReportSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
 
class RepProductionLoad_Model extends ModelReportSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("production_load");
			
		//*** Field delivery_plan_date ***
		$f_opts = array();
		
		$f_opts['alias']='Дата отгрузки';
		$f_opts['id']="delivery_plan_date";
						
		$f_delivery_plan_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_plan_date",$f_opts);
		$this->addField($f_delivery_plan_date);
		//********************
		
		//*** Field delivery_plan_date_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Дата отгрузки';
		$f_opts['id']="delivery_plan_date_descr";
						
		$f_delivery_plan_date_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"delivery_plan_date_descr",$f_opts);
		$this->addField($f_delivery_plan_date_descr);
		//********************
		
		//*** Field product_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="product_id";
						
		$f_product_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_id",$f_opts);
		$this->addField($f_product_id);
		//********************
		
		//*** Field product_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Продукция';
		$f_opts['id']="product_descr";
						
		$f_product_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_descr",$f_opts);
		$this->addField($f_product_descr);
		//********************
		
		//*** Field quant ***
		$f_opts = array();
		
		$f_opts['alias']='Количество';
		$f_opts['id']="quant";
						
		$f_quant=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"quant",$f_opts);
		$this->addField($f_quant);
		//********************
		
		//*** Field warehouse_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="warehouse_id";
						
		$f_warehouse_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_id",$f_opts);
		$this->addField($f_warehouse_id);
		//********************
	
	}

}
?>
