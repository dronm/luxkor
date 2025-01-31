<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
 
class ClientPriceListProduct_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_price_list_products");
			
		//*** Field price_list_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="price_list_id";
						
		$f_price_list_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"price_list_id",$f_opts);
		$this->addField($f_price_list_id);
		//********************
		
		//*** Field product_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="product_id";
						
		$f_product_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_id",$f_opts);
		$this->addField($f_product_id);
		//********************
		
		//*** Field price ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="price";
						
		$f_price=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"price",$f_opts);
		$this->addField($f_price);
		//********************
		
		//*** Field discount_volume ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="discount_volume";
						
		$f_discount_volume=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"discount_volume",$f_opts);
		$this->addField($f_discount_volume);
		//********************
		
		//*** Field discount_total ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="discount_total";
						
		$f_discount_total=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"discount_total",$f_opts);
		$this->addField($f_discount_total);
		//********************
		
		//*** Field pack_price ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="pack_price";
						
		$f_pack_price=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pack_price",$f_opts);
		$this->addField($f_pack_price);
		//********************
	
	}

}
?>
