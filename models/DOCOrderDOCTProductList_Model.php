<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQLDOCT20.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
 
class DOCOrderDOCTProductList_Model extends ModelSQLDOCT20{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_t_tmp_products_list");
			
		//*** Field view_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['length']=32;
		$f_opts['id']="view_id";
						
		$f_view_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"view_id",$f_opts);
		$this->addField($f_view_id);
		//********************
		
		//*** Field line_number ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="line_number";
						
		$f_line_number=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"line_number",$f_opts);
		$this->addField($f_line_number);
		//********************
		
		//*** Field total_no_deliv ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="total_no_deliv";
						
		$f_total_no_deliv=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"total_no_deliv",$f_opts);
		$this->addField($f_total_no_deliv);
		//********************
		
		//*** Field price_no_deliv ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="price_no_deliv";
						
		$f_price_no_deliv=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"price_no_deliv",$f_opts);
		$this->addField($f_price_no_deliv);
		//********************
	
	}

}
?>
