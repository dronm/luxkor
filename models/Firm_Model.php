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
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');
 
class Firm_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("firms");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		$f_opts['length']=100;
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
		
		//*** Field ext_id ***
		$f_opts = array();
		$f_opts['length']=36;
		$f_opts['id']="ext_id";
						
		$f_ext_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_id",$f_opts);
		$this->addField($f_ext_id);
		//********************
		
		//*** Field sert_header ***
		$f_opts = array();
		$f_opts['id']="sert_header";
						
		$f_sert_header=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sert_header",$f_opts);
		$this->addField($f_sert_header);
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
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
		
		//*** Field order_no_carrier_print ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="order_no_carrier_print";
						
		$f_order_no_carrier_print=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"order_no_carrier_print",$f_opts);
		$this->addField($f_order_no_carrier_print);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_name,$direct);

	}

}
?>
