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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class ClientDialog_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_dialog");
			
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
		
		//*** Field name_full ***
		$f_opts = array();
		$f_opts['id']="name_full";
						
		$f_name_full=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name_full",$f_opts);
		$this->addField($f_name_full);
		//********************
		
		//*** Field occupation ***
		$f_opts = array();
		$f_opts['id']="occupation";
						
		$f_occupation=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"occupation",$f_opts);
		$this->addField($f_occupation);
		//********************
		
		//*** Field inn ***
		$f_opts = array();
		$f_opts['id']="inn";
						
		$f_inn=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"inn",$f_opts);
		$this->addField($f_inn);
		//********************
		
		//*** Field banned ***
		$f_opts = array();
		$f_opts['id']="banned";
						
		$f_banned=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"banned",$f_opts);
		$this->addField($f_banned);
		//********************
		
		//*** Field def_firm_id ***
		$f_opts = array();
		$f_opts['id']="def_firm_id";
						
		$f_def_firm_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"def_firm_id",$f_opts);
		$this->addField($f_def_firm_id);
		//********************
		
		//*** Field def_warehouse_id ***
		$f_opts = array();
		$f_opts['id']="def_warehouse_id";
						
		$f_def_warehouse_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"def_warehouse_id",$f_opts);
		$this->addField($f_def_warehouse_id);
		//********************
		
		//*** Field deleted ***
		$f_opts = array();
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
		
		//*** Field email ***
		$f_opts = array();
		$f_opts['id']="email";
						
		$f_email=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"email",$f_opts);
		$this->addField($f_email);
		//********************
		
		//*** Field deliv_add_cost_to_product ***
		$f_opts = array();
		$f_opts['id']="deliv_add_cost_to_product";
						
		$f_deliv_add_cost_to_product=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_add_cost_to_product",$f_opts);
		$this->addField($f_deliv_add_cost_to_product);
		//********************
		
		//*** Field is_supplier ***
		$f_opts = array();
		$f_opts['id']="is_supplier";
						
		$f_is_supplier=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"is_supplier",$f_opts);
		$this->addField($f_is_supplier);
		//********************
		
		//*** Field is_carrier ***
		$f_opts = array();
		$f_opts['id']="is_carrier";
						
		$f_is_carrier=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"is_carrier",$f_opts);
		$this->addField($f_is_carrier);
		//********************
		
		//*** Field comment_text ***
		$f_opts = array();
		$f_opts['id']="comment_text";
						
		$f_comment_text=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"comment_text",$f_opts);
		$this->addField($f_comment_text);
		//********************
	
	}

}
?>
