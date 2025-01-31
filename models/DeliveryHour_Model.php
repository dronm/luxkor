<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');
 
class DeliveryHour_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("delivery_hours");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field h_from ***
		$f_opts = array();
		$f_opts['id']="h_from";
						
		$f_h_from=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"h_from",$f_opts);
		$this->addField($f_h_from);
		//********************
		
		//*** Field h_to ***
		$f_opts = array();
		$f_opts['id']="h_to";
						
		$f_h_to=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"h_to",$f_opts);
		$this->addField($f_h_to);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_h_from,$direct);

	}

}
?>
