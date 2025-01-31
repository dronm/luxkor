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
 
class Vehicle_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("vehicles");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field model ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="model";
						
		$f_model=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"model",$f_opts);
		$this->addField($f_model);
		//********************
		
		//*** Field plate ***
		$f_opts = array();
		$f_opts['length']=20;
		$f_opts['id']="plate";
						
		$f_plate=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"plate",$f_opts);
		$this->addField($f_plate);
		//********************
		
		//*** Field vol ***
		$f_opts = array();
		$f_opts['id']="vol";
						
		$f_vol=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vol",$f_opts);
		$this->addField($f_vol);
		//********************
		
		//*** Field employed ***
		$f_opts = array();
		$f_opts['id']="employed";
						
		$f_employed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"employed",$f_opts);
		$this->addField($f_employed);
		//********************
		
		//*** Field load_weight_t ***
		$f_opts = array();
		$f_opts['length']=10;
		$f_opts['id']="load_weight_t";
						
		$f_load_weight_t=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"load_weight_t",$f_opts);
		$this->addField($f_load_weight_t);
		//********************
		
		//*** Field production_city_id ***
		$f_opts = array();
		$f_opts['id']="production_city_id";
						
		$f_production_city_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_id",$f_opts);
		$this->addField($f_production_city_id);
		//********************
		
		//*** Field carrier_id ***
		$f_opts = array();
		$f_opts['id']="carrier_id";
						
		$f_carrier_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"carrier_id",$f_opts);
		$this->addField($f_carrier_id);
		//********************
		
		//*** Field driver_id ***
		$f_opts = array();
		$f_opts['id']="driver_id";
						
		$f_driver_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"driver_id",$f_opts);
		$this->addField($f_driver_id);
		//********************
		
		//*** Field deliv_cost_opt_id ***
		$f_opts = array();
		$f_opts['id']="deliv_cost_opt_id";
						
		$f_deliv_cost_opt_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_cost_opt_id",$f_opts);
		$this->addField($f_deliv_cost_opt_id);
		//********************
		
		//*** Field trailer_model ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="trailer_model";
						
		$f_trailer_model=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"trailer_model",$f_opts);
		$this->addField($f_trailer_model);
		//********************
		
		//*** Field trailer_plate ***
		$f_opts = array();
		$f_opts['length']=20;
		$f_opts['id']="trailer_plate";
						
		$f_trailer_plate=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"trailer_plate",$f_opts);
		$this->addField($f_trailer_plate);
		//********************
		
		//*** Field tracker_id ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="tracker_id";
						
		$f_tracker_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"tracker_id",$f_opts);
		$this->addField($f_tracker_id);
		//********************
	
	}

}
?>
