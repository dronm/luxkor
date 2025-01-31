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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class ClientList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_list");
			
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
		
		//*** Field contract_descr ***
		$f_opts = array();
		$f_opts['id']="contract_descr";
						
		$f_contract_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"contract_descr",$f_opts);
		$this->addField($f_contract_descr);
		//********************
		
		//*** Field contract_period ***
		$f_opts = array();
		$f_opts['id']="contract_period";
						
		$f_contract_period=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"contract_period",$f_opts);
		$this->addField($f_contract_period);
		//********************
		
		//*** Field terms ***
		$f_opts = array();
		$f_opts['id']="terms";
						
		$f_terms=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"terms",$f_opts);
		$this->addField($f_terms);
		//********************
		
		//*** Field banned ***
		$f_opts = array();
		$f_opts['id']="banned";
						
		$f_banned=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"banned",$f_opts);
		$this->addField($f_banned);
		//********************
		
		//*** Field client_activity_descr ***
		$f_opts = array();
		$f_opts['id']="client_activity_descr";
						
		$f_client_activity_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_activity_descr",$f_opts);
		$this->addField($f_client_activity_descr);
		//********************
		
		//*** Field login_allowed ***
		$f_opts = array();
		$f_opts['id']="login_allowed";
						
		$f_login_allowed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"login_allowed",$f_opts);
		$this->addField($f_login_allowed);
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
		
		//*** Field deleted ***
		$f_opts = array();
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
		
		//*** Field deliv_add_cost_to_product ***
		$f_opts = array();
		$f_opts['id']="deliv_add_cost_to_product";
						
		$f_deliv_add_cost_to_product=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_add_cost_to_product",$f_opts);
		$this->addField($f_deliv_add_cost_to_product);
		//********************
	
	}

}
?>
