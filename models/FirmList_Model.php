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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class FirmList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("firm_list");
			
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
		
		//*** Field match_1c ***
		$f_opts = array();
		$f_opts['id']="match_1c";
						
		$f_match_1c=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"match_1c",$f_opts);
		$this->addField($f_match_1c);
		//********************
		
		//*** Field nds ***
		$f_opts = array();
		$f_opts['id']="nds";
						
		$f_nds=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"nds",$f_opts);
		$this->addField($f_nds);
		//********************
		
		//*** Field nds_val ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="nds_val";
						
		$f_nds_val=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"nds_val",$f_opts);
		$this->addField($f_nds_val);
		//********************
		
		//*** Field cash ***
		$f_opts = array();
		$f_opts['id']="cash";
						
		$f_cash=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"cash",$f_opts);
		$this->addField($f_cash);
		//********************
		
		//*** Field deleted ***
		$f_opts = array();
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
		
		//*** Field order_no_carrier_print ***
		$f_opts = array();
		$f_opts['id']="order_no_carrier_print";
						
		$f_order_no_carrier_print=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"order_no_carrier_print",$f_opts);
		$this->addField($f_order_no_carrier_print);
		//********************
	
	}

}
?>
