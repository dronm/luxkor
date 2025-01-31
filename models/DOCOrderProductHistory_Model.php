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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLText.php');
 
class DOCOrderProductHistory_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_products_history");
			
		//*** Field doc_orders_states_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="doc_orders_states_id";
						
		$f_doc_orders_states_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_orders_states_id",$f_opts);
		$this->addField($f_doc_orders_states_id);
		//********************
		
		//*** Field product_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="product_id";
						
		$f_product_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_id",$f_opts);
		$this->addField($f_product_id);
		//********************
		
		//*** Field fields ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="fields";
						
		$f_fields=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"fields",$f_opts);
		$this->addField($f_fields);
		//********************
		
		//*** Field oper ***
		$f_opts = array();
		$f_opts['length']=8;
		$f_opts['id']="oper";
						
		$f_oper=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"oper",$f_opts);
		$this->addField($f_oper);
		//********************
		
		//*** Field old_vals ***
		$f_opts = array();
		$f_opts['id']="old_vals";
						
		$f_old_vals=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"old_vals",$f_opts);
		$this->addField($f_old_vals);
		//********************
	
	}

}
?>
