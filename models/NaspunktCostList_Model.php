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
 
class NaspunktCostList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("naspunkt_costs");
			
		//*** Field city_id ***
		$f_opts = array();
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
		
		//*** Field deliv_cost_opt_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="deliv_cost_opt_id";
						
		$f_deliv_cost_opt_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_cost_opt_id",$f_opts);
		$this->addField($f_deliv_cost_opt_id);
		//********************
		
		//*** Field deliv_cost_opt_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Категория';
		$f_opts['id']="deliv_cost_opt_descr";
						
		$f_deliv_cost_opt_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_cost_opt_descr",$f_opts);
		$this->addField($f_deliv_cost_opt_descr);
		//********************
		
		//*** Field distance ***
		$f_opts = array();
		
		$f_opts['alias']='Расстояние (км.)';
		$f_opts['id']="distance";
						
		$f_distance=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"distance",$f_opts);
		$this->addField($f_distance);
		//********************
		
		//*** Field cost ***
		$f_opts = array();
		
		$f_opts['alias']='Стоимость';
		$f_opts['length']=19;
		$f_opts['id']="cost";
						
		$f_cost=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"cost",$f_opts);
		$this->addField($f_cost);
		//********************
	
	}

}
?>
