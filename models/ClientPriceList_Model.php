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
 
class ClientPriceList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_price_lists");
			
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
		
		//*** Field production_city_id ***
		$f_opts = array();
		$f_opts['id']="production_city_id";
						
		$f_production_city_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_id",$f_opts);
		$this->addField($f_production_city_id);
		//********************
		
		//*** Field to_third_party_only ***
		$f_opts = array();
		$f_opts['id']="to_third_party_only";
						
		$f_to_third_party_only=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"to_third_party_only",$f_opts);
		$this->addField($f_to_third_party_only);
		//********************
		
		//*** Field part_ship_do_not_change_price ***
		$f_opts = array();
		$f_opts['id']="part_ship_do_not_change_price";
						
		$f_part_ship_do_not_change_price=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"part_ship_do_not_change_price",$f_opts);
		$this->addField($f_part_ship_do_not_change_price);
		//********************
		
		//*** Field min_order_quant ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="min_order_quant";
						
		$f_min_order_quant=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"min_order_quant",$f_opts);
		$this->addField($f_min_order_quant);
		//********************
		
		//*** Field default_price_list ***
		$f_opts = array();
		$f_opts['id']="default_price_list";
						
		$f_default_price_list=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"default_price_list",$f_opts);
		$this->addField($f_default_price_list);
		//********************
	
	}

}
?>
