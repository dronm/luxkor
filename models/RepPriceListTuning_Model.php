<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelReportSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class RepPriceListTuning_Model extends ModelReportSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("price_list_tuning");
			
		//*** Field client_id ***
		$f_opts = array();
		
		$f_opts['alias']='Код клиента';
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field client_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Наименование клиента';
		$f_opts['id']="client_descr";
						
		$f_client_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_descr",$f_opts);
		$this->addField($f_client_descr);
		//********************
		
		//*** Field production_city_id ***
		$f_opts = array();
		
		$f_opts['alias']='Код города';
		$f_opts['id']="production_city_id";
						
		$f_production_city_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_id",$f_opts);
		$this->addField($f_production_city_id);
		//********************
		
		//*** Field production_city_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Наименование города';
		$f_opts['id']="production_city_descr";
						
		$f_production_city_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_descr",$f_opts);
		$this->addField($f_production_city_descr);
		//********************
		
		//*** Field to_third_party_only ***
		$f_opts = array();
		
		$f_opts['alias']='Для третьих лиц';
		$f_opts['id']="to_third_party_only";
						
		$f_to_third_party_only=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"to_third_party_only",$f_opts);
		$this->addField($f_to_third_party_only);
		//********************
		
		//*** Field price_list_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Наименование прайса';
		$f_opts['id']="price_list_descr";
						
		$f_price_list_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"price_list_descr",$f_opts);
		$this->addField($f_price_list_descr);
		//********************
		
		//*** Field product_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Наименование продукции';
		$f_opts['id']="product_descr";
						
		$f_product_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_descr",$f_opts);
		$this->addField($f_product_descr);
		//********************
		
		//*** Field product_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Цена';
		$f_opts['length']=15;
		$f_opts['id']="product_descr";
						
		$f_product_descr=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_descr",$f_opts);
		$this->addField($f_product_descr);
		//********************
	
	}

}
?>
