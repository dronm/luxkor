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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTime.php');
 
class VehicleState_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("vehicle_states_data");
			
		//*** Field vehicle_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="vehicle_id";
						
		$f_vehicle_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_id",$f_opts);
		$this->addField($f_vehicle_id);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTime($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field state ***
		$f_opts = array();
		$f_opts['id']="state";
						
		$f_state=new FieldSQLEnum($this->getDbLink(),$this->getDbName(),$this->getTableName(),"state",$f_opts);
		$this->addField($f_state);
		//********************
		
		//*** Field tracker ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="tracker";
						
		$f_tracker=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"tracker",$f_opts);
		$this->addField($f_tracker);
		//********************
		
		//*** Field to_client_zone ***
		$f_opts = array();
		$f_opts['id']="to_client_zone";
						
		$f_to_client_zone=new FieldSQLGeometry($this->getDbLink(),$this->getDbName(),$this->getTableName(),"to_client_zone",$f_opts);
		$this->addField($f_to_client_zone);
		//********************
	
	}

}
?>
