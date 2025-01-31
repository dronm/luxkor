<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
 
class DOCOrderLink_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_links");
			
		//*** Field main_doc_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="main_doc_id";
						
		$f_main_doc_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"main_doc_id",$f_opts);
		$this->addField($f_main_doc_id);
		//********************
		
		//*** Field child_doc_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="child_doc_id";
						
		$f_child_doc_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"child_doc_id",$f_opts);
		$this->addField($f_child_doc_id);
		//********************
	
	}

}
?>
