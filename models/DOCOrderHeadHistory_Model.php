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
 
class DOCOrderHeadHistory_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_head_history");
			
		//*** Field doc_orders_states_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="doc_orders_states_id";
						
		$f_doc_orders_states_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_orders_states_id",$f_opts);
		$this->addField($f_doc_orders_states_id);
		//********************
		
		//*** Field field ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="field";
						
		$f_field=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"field",$f_opts);
		$this->addField($f_field);
		//********************
		
		//*** Field old_val ***
		$f_opts = array();
		$f_opts['id']="old_val";
						
		$f_old_val=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"old_val",$f_opts);
		$this->addField($f_old_val);
		//********************
	
	}

}
?>
