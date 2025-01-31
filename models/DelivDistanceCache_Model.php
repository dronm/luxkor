<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
 
class DelivDistanceCache_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("deliv_distance_cache");
			
		//*** Field warehouse_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="warehouse_id";
						
		$f_warehouse_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouse_id",$f_opts);
		$this->addField($f_warehouse_id);
		//********************
		
		//*** Field client_destination_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="client_destination_id";
						
		$f_client_destination_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_destination_id",$f_opts);
		$this->addField($f_client_destination_id);
		//********************
		
		//*** Field city_route ***
		$f_opts = array();
		$f_opts['id']="city_route";
						
		$f_city_route=new FieldSQLGeomPolygon($this->getDbLink(),$this->getDbName(),$this->getTableName(),"city_route",$f_opts);
		$this->addField($f_city_route);
		//********************
		
		//*** Field city_route_distance ***
		$f_opts = array();
		$f_opts['id']="city_route_distance";
						
		$f_city_route_distance=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"city_route_distance",$f_opts);
		$this->addField($f_city_route_distance);
		//********************
		
		//*** Field country_route ***
		$f_opts = array();
		$f_opts['id']="country_route";
						
		$f_country_route=new FieldSQLGeomPolygon($this->getDbLink(),$this->getDbName(),$this->getTableName(),"country_route",$f_opts);
		$this->addField($f_country_route);
		//********************
		
		//*** Field country_route_distance ***
		$f_opts = array();
		$f_opts['id']="country_route_distance";
						
		$f_country_route_distance=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"country_route_distance",$f_opts);
		$this->addField($f_country_route_distance);
		//********************
	
	}

}
?>
