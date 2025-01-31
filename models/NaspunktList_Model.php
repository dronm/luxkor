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
 
class NaspunktList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("naspunkt_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field city_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="city_id";
						
		$f_city_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"city_id",$f_opts);
		$this->addField($f_city_id);
		//********************
		
		//*** Field city_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Город';
		$f_opts['id']="city_descr";
						
		$f_city_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"city_descr",$f_opts);
		$this->addField($f_city_descr);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		
		$f_opts['alias']='Наименование';
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
		
		//*** Field distance ***
		$f_opts = array();
		
		$f_opts['alias']='Расстояние (км.)';
		$f_opts['id']="distance";
						
		$f_distance=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"distance",$f_opts);
		$this->addField($f_distance);
		//********************
	
	}

}
?>
