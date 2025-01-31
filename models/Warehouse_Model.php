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
 
class Warehouse_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("warehouses");
			
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
		$f_opts['length']=50;
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
		
		//*** Field zone ***
		$f_opts = array();
		$f_opts['id']="zone";
						
		$f_zone=new FieldSQLGeomPolygon($this->getDbLink(),$this->getDbName(),$this->getTableName(),"zone",$f_opts);
		$this->addField($f_zone);
		//********************
		
		//*** Field production_city_id ***
		$f_opts = array();
		$f_opts['id']="production_city_id";
						
		$f_production_city_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"production_city_id",$f_opts);
		$this->addField($f_production_city_id);
		//********************
		
		//*** Field default_firm_id ***
		$f_opts = array();
		$f_opts['id']="default_firm_id";
						
		$f_default_firm_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"default_firm_id",$f_opts);
		$this->addField($f_default_firm_id);
		//********************
		
		//*** Field near_road_lon ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="near_road_lon";
						
		$f_near_road_lon=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"near_road_lon",$f_opts);
		$this->addField($f_near_road_lon);
		//********************
		
		//*** Field near_road_lat ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="near_road_lat";
						
		$f_near_road_lat=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"near_road_lat",$f_opts);
		$this->addField($f_near_road_lat);
		//********************
		
		//*** Field address ***
		$f_opts = array();
		$f_opts['id']="address";
						
		$f_address=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"address",$f_opts);
		$this->addField($f_address);
		//********************
		
		//*** Field tel ***
		$f_opts = array();
		$f_opts['id']="tel";
						
		$f_tel=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"tel",$f_opts);
		$this->addField($f_tel);
		//********************
		
		//*** Field email ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="email";
						
		$f_email=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"email",$f_opts);
		$this->addField($f_email);
		//********************
		
		//*** Field deleted ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_name,$direct);

	}

}
?>
