<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDate.php');
 
class DeliveryVehicle_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("delivery_vehicles");
			
		//*** Field deliv_date ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="deliv_date";
						
		$f_deliv_date=new FieldSQLDate($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_date",$f_opts);
		$this->addField($f_deliv_date);
		//********************
		
		//*** Field vehicle_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="vehicle_id";
						
		$f_vehicle_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"vehicle_id",$f_opts);
		$this->addField($f_vehicle_id);
		//********************
	
	}

}
?>
