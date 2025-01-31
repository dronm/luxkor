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
 
class VehicleList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("vehicles_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		
		$f_opts['alias']='Код';
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field plate ***
		$f_opts = array();
		
		$f_opts['alias']='Гос.номер';
		$f_opts['id']="plate";
						
		$f_plate=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"plate",$f_opts);
		$this->addField($f_plate);
		//********************
		
		//*** Field model ***
		$f_opts = array();
		
		$f_opts['alias']='Модель';
		$f_opts['id']="model";
						
		$f_model=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"model",$f_opts);
		$this->addField($f_model);
		//********************
		
		//*** Field production_city_id ***
		$f_opts = array();
		
		$f_opts['alias']='Город код';
		$f_opts['id']="production_city_id";
						
		$f_production_city_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_id",$f_opts);
		$this->addField($f_production_city_id);
		//********************
		
		//*** Field production_city_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Город';
		$f_opts['id']="production_city_descr";
						
		$f_production_city_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_descr",$f_opts);
		$this->addField($f_production_city_descr);
		//********************
		
		//*** Field driver_id ***
		$f_opts = array();
		
		$f_opts['alias']='Водитель код';
		$f_opts['id']="driver_id";
						
		$f_driver_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"driver_id",$f_opts);
		$this->addField($f_driver_id);
		//********************
		
		//*** Field driver_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Водитель';
		$f_opts['id']="driver_descr";
						
		$f_driver_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"driver_descr",$f_opts);
		$this->addField($f_driver_descr);
		//********************
		
		//*** Field employed ***
		$f_opts = array();
		
		$f_opts['alias']='Постоянный';
		$f_opts['id']="employed";
						
		$f_employed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"employed",$f_opts);
		$this->addField($f_employed);
		//********************
		
		//*** Field vol ***
		$f_opts = array();
		
		$f_opts['alias']='Объем';
		$f_opts['id']="vol";
						
		$f_vol=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vol",$f_opts);
		$this->addField($f_vol);
		//********************
		
		//*** Field load_weight_t ***
		$f_opts = array();
		
		$f_opts['alias']='Грузоподъемность';
		$f_opts['id']="load_weight_t";
						
		$f_load_weight_t=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"load_weight_t",$f_opts);
		$this->addField($f_load_weight_t);
		//********************
		
		//*** Field vl_wt ***
		$f_opts = array();
		
		$f_opts['alias']='объем/грузоподъемность';
		$f_opts['id']="vl_wt";
						
		$f_vl_wt=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vl_wt",$f_opts);
		$this->addField($f_vl_wt);
		//********************
		
		//*** Field carrier_id ***
		$f_opts = array();
		
		$f_opts['alias']='Перевозчник';
		$f_opts['id']="carrier_id";
						
		$f_carrier_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"carrier_id",$f_opts);
		$this->addField($f_carrier_id);
		//********************
		
		//*** Field carrier_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Перевозчник';
		$f_opts['id']="carrier_descr";
						
		$f_carrier_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"carrier_descr",$f_opts);
		$this->addField($f_carrier_descr);
		//********************
		
		//*** Field trailer_model ***
		$f_opts = array();
		
		$f_opts['alias']='Модель прицепа';
		$f_opts['id']="trailer_model";
						
		$f_trailer_model=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"trailer_model",$f_opts);
		$this->addField($f_trailer_model);
		//********************
		
		//*** Field trailer_plate ***
		$f_opts = array();
		
		$f_opts['alias']='Номер прицепа';
		$f_opts['id']="trailer_plate";
						
		$f_trailer_plate=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"trailer_plate",$f_opts);
		$this->addField($f_trailer_plate);
		//********************
		
		//*** Field driver_match_1c ***
		$f_opts = array();
		
		$f_opts['alias']='Водитель связан с 1с';
		$f_opts['id']="driver_match_1c";
						
		$f_driver_match_1c=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"driver_match_1c",$f_opts);
		$this->addField($f_driver_match_1c);
		//********************
	
	}

}
?>
