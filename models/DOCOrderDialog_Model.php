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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLJSONB.php');
 
class DOCOrderDialog_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_dialog");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field def_debt ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="def_debt";
						
		$f_def_debt=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"def_debt",$f_opts);
		$this->addField($f_def_debt);
		//********************
		
		//*** Field debt_total ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="debt_total";
						
		$f_debt_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"debt_total",$f_opts);
		$this->addField($f_debt_total);
		//********************
		
		//*** Field vehicle_id ***
		$f_opts = array();
		$f_opts['id']="vehicle_id";
						
		$f_vehicle_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_id",$f_opts);
		$this->addField($f_vehicle_id);
		//********************
		
		//*** Field vehicle_descr ***
		$f_opts = array();
		$f_opts['id']="vehicle_descr";
						
		$f_vehicle_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_descr",$f_opts);
		$this->addField($f_vehicle_descr);
		//********************
		
		//*** Field attachments ***
		$f_opts = array();
		$f_opts['id']="attachments";
		$f_opts['noValueOnCopy'] = TRUE;
						
		$f_attachments=new FieldSQLJSONB($this->getDbLink(),$this->getDbName(),$this->getTableName(),"attachments",$f_opts);
		$this->addField($f_attachments);
		//********************
	
	}

}
?>
