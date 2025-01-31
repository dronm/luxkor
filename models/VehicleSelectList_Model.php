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
 
class VehicleSelectList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("vehicles_select_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		
		$f_opts['alias']='Код';
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field descr ***
		$f_opts = array();
		
		$f_opts['alias']='Автомобиль';
		$f_opts['id']="descr";
						
		$f_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"descr",$f_opts);
		$this->addField($f_descr);
		//********************
		
		//*** Field plate ***
		$f_opts = array();
		
		$f_opts['alias']='Гос.номер';
		$f_opts['id']="plate";
						
		$f_plate=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"plate",$f_opts);
		$this->addField($f_plate);
		//********************
		
		//*** Field complete_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Автомобиль';
		$f_opts['id']="complete_descr";
						
		$f_complete_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"complete_descr",$f_opts);
		$this->addField($f_complete_descr);
		//********************
	
	}

}
?>
