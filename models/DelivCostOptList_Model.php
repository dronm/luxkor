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
 
class DelivCostOptList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("deliv_cost_opts_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field volume_m ***
		$f_opts = array();
		$f_opts['id']="volume_m";
						
		$f_volume_m=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"volume_m",$f_opts);
		$this->addField($f_volume_m);
		//********************
		
		//*** Field weight_t ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="weight_t";
						
		$f_weight_t=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"weight_t",$f_opts);
		$this->addField($f_weight_t);
		//********************
		
		//*** Field descr ***
		$f_opts = array();
		$f_opts['id']="descr";
						
		$f_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"descr",$f_opts);
		$this->addField($f_descr);
		//********************
	
	}

}
?>
