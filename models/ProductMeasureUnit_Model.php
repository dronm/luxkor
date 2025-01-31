<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLText.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class ProductMeasureUnit_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("product_measure_units");
			
		//*** Field product_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="product_id";
						
		$f_product_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_id",$f_opts);
		$this->addField($f_product_id);
		//********************
		
		//*** Field measure_unit_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="measure_unit_id";
						
		$f_measure_unit_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"measure_unit_id",$f_opts);
		$this->addField($f_measure_unit_id);
		//********************
		
		//*** Field calc_formula ***
		$f_opts = array();
		$f_opts['id']="calc_formula";
						
		$f_calc_formula=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"calc_formula",$f_opts);
		$this->addField($f_calc_formula);
		//********************
		
		//*** Field in_use ***
		$f_opts = array();
		$f_opts['id']="in_use";
						
		$f_in_use=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"in_use",$f_opts);
		$this->addField($f_in_use);
		//********************
	
	}

}
?>
