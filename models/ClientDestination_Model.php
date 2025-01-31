<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLText.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
 
class ClientDestination_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_destinations");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field value ***
		$f_opts = array();
		$f_opts['id']="value";
						
		$f_value=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"value",$f_opts);
		$this->addField($f_value);
		//********************
		
		//*** Field zone_center ***
		$f_opts = array();
		$f_opts['id']="zone_center";
						
		$f_zone_center=new FieldSQLGeomPoint($this->getDbLink(),$this->getDbName(),$this->getTableName(),"zone_center",$f_opts);
		$this->addField($f_zone_center);
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
		
		//*** Field region ***
		$f_opts = array();
		$f_opts['id']="region";
						
		$f_region=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"region",$f_opts);
		$this->addField($f_region);
		//********************
		
		//*** Field region_code ***
		$f_opts = array();
		$f_opts['id']="region_code";
						
		$f_region_code=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"region_code",$f_opts);
		$this->addField($f_region_code);
		//********************
		
		//*** Field raion ***
		$f_opts = array();
		$f_opts['id']="raion";
						
		$f_raion=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"raion",$f_opts);
		$this->addField($f_raion);
		//********************
		
		//*** Field raion_code ***
		$f_opts = array();
		$f_opts['id']="raion_code";
						
		$f_raion_code=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"raion_code",$f_opts);
		$this->addField($f_raion_code);
		//********************
		
		//*** Field gorod ***
		$f_opts = array();
		$f_opts['id']="gorod";
						
		$f_gorod=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"gorod",$f_opts);
		$this->addField($f_gorod);
		//********************
		
		//*** Field gorod_code ***
		$f_opts = array();
		$f_opts['id']="gorod_code";
						
		$f_gorod_code=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"gorod_code",$f_opts);
		$this->addField($f_gorod_code);
		//********************
		
		//*** Field naspunkt ***
		$f_opts = array();
		$f_opts['id']="naspunkt";
						
		$f_naspunkt=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"naspunkt",$f_opts);
		$this->addField($f_naspunkt);
		//********************
		
		//*** Field naspunkt_code ***
		$f_opts = array();
		$f_opts['id']="naspunkt_code";
						
		$f_naspunkt_code=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"naspunkt_code",$f_opts);
		$this->addField($f_naspunkt_code);
		//********************
		
		//*** Field ulitza ***
		$f_opts = array();
		$f_opts['id']="ulitza";
						
		$f_ulitza=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ulitza",$f_opts);
		$this->addField($f_ulitza);
		//********************
		
		//*** Field ulitza_code ***
		$f_opts = array();
		$f_opts['id']="ulitza_code";
						
		$f_ulitza_code=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ulitza_code",$f_opts);
		$this->addField($f_ulitza_code);
		//********************
		
		//*** Field dom ***
		$f_opts = array();
		$f_opts['id']="dom";
						
		$f_dom=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"dom",$f_opts);
		$this->addField($f_dom);
		//********************
		
		//*** Field korpus ***
		$f_opts = array();
		$f_opts['id']="korpus";
						
		$f_korpus=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"korpus",$f_opts);
		$this->addField($f_korpus);
		//********************
		
		//*** Field kvartira ***
		$f_opts = array();
		$f_opts['id']="kvartira";
						
		$f_kvartira=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"kvartira",$f_opts);
		$this->addField($f_kvartira);
		//********************
		
		//*** Field addr_index ***
		$f_opts = array();
		$f_opts['id']="addr_index";
						
		$f_addr_index=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"addr_index",$f_opts);
		$this->addField($f_addr_index);
		//********************
		
		//*** Field value ***
		$f_opts = array();
		$f_opts['id']="value";
						
		$f_value=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"value",$f_opts);
		$this->addField($f_value);
		//********************
	
	}

}
?>
