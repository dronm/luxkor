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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class WarehouseDialog_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("warehouses_dialog");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
		
		//*** Field firm_id ***
		$f_opts = array();
		$f_opts['id']="firm_id";
						
		$f_firm_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_id",$f_opts);
		$this->addField($f_firm_id);
		//********************
		
		//*** Field firm_descr ***
		$f_opts = array();
		$f_opts['id']="firm_descr";
						
		$f_firm_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_descr",$f_opts);
		$this->addField($f_firm_descr);
		//********************
		
		//*** Field production_city_id ***
		$f_opts = array();
		$f_opts['id']="production_city_id";
						
		$f_production_city_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_id",$f_opts);
		$this->addField($f_production_city_id);
		//********************
		
		//*** Field production_city_descr ***
		$f_opts = array();
		$f_opts['id']="production_city_descr";
						
		$f_production_city_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_descr",$f_opts);
		$this->addField($f_production_city_descr);
		//********************
		
		//*** Field zone_str ***
		$f_opts = array();
		$f_opts['id']="zone_str";
						
		$f_zone_str=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"zone_str",$f_opts);
		$this->addField($f_zone_str);
		//********************
		
		//*** Field zone_center_str ***
		$f_opts = array();
		$f_opts['id']="zone_center_str";
						
		$f_zone_center_str=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"zone_center_str",$f_opts);
		$this->addField($f_zone_center_str);
		//********************
		
		//*** Field deleted ***
		$f_opts = array();
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
	
	}

}
?>
