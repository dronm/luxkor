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
 
class ProductComplete_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("products_complete");
			
		//*** Field ref ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="ref";
						
		$f_ref=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ref",$f_opts);
		$this->addField($f_ref);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
		
		//*** Field name_fulll ***
		$f_opts = array();
		$f_opts['id']="name_fulll";
						
		$f_name_fulll=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name_fulll",$f_opts);
		$this->addField($f_name_fulll);
		//********************
	
	}

}
?>
