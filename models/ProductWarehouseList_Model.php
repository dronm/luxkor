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
 
class ProductWarehouseList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("product_warehouses_list");
			
		//*** Field product_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="product_id";
						
		$f_product_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_id",$f_opts);
		$this->addField($f_product_id);
		//********************
		
		//*** Field warehouse_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="warehouse_id";
						
		$f_warehouse_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_id",$f_opts);
		$this->addField($f_warehouse_id);
		//********************
		
		//*** Field warehouse_descr ***
		$f_opts = array();
		$f_opts['id']="warehouse_descr";
						
		$f_warehouse_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_descr",$f_opts);
		$this->addField($f_warehouse_descr);
		//********************
	
	}

}
?>
