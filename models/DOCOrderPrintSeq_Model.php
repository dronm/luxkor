<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
 
class DOCOrderPrintSeq_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_order_prints_seq");
			
		//*** Field doc_id ***
		$f_opts = array();
		$f_opts['id']="doc_id";
						
		$f_doc_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_id",$f_opts);
		$this->addField($f_doc_id);
		//********************
		
		//*** Field cnt ***
		$f_opts = array();
		$f_opts['id']="cnt";
						
		$f_cnt=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"cnt",$f_opts);
		$this->addField($f_cnt);
		//********************
	
	}

}
?>
