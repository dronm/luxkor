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
 
class TrackerList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("trackers_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		
		$f_opts['alias']='Идентификатор';
		$f_opts['length']=15;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field tracker_server_id ***
		$f_opts = array();
		$f_opts['sysCol']=TRUE;
		$f_opts['id']="tracker_server_id";
						
		$f_tracker_server_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"tracker_server_id",$f_opts);
		$this->addField($f_tracker_server_id);
		//********************
		
		//*** Field tracker_server_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Сервер';
		$f_opts['id']="tracker_server_descr";
						
		$f_tracker_server_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"tracker_server_descr",$f_opts);
		$this->addField($f_tracker_server_descr);
		//********************
		
		//*** Field sim_number ***
		$f_opts = array();
		
		$f_opts['alias']='Номер SIM';
		$f_opts['id']="sim_number";
						
		$f_sim_number=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sim_number",$f_opts);
		$this->addField($f_sim_number);
		//********************
		
		//*** Field sim_id ***
		$f_opts = array();
		
		$f_opts['alias']='Идентификатор SIM';
		$f_opts['id']="sim_id";
						
		$f_sim_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sim_id",$f_opts);
		$this->addField($f_sim_id);
		//********************
	
	}

}
?>
