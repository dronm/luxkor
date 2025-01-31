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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
 
class CustomerSurveyQuestion_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("customer_survey_questions");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field question ***
		$f_opts = array();
		$f_opts['id']="question";
						
		$f_question=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"question",$f_opts);
		$this->addField($f_question);
		//********************
		
		//*** Field max_points ***
		$f_opts = array();
		$f_opts['id']="max_points";
						
		$f_max_points=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"max_points",$f_opts);
		$this->addField($f_max_points);
		//********************
		
		//*** Field in_use ***
		$f_opts = array();
		$f_opts['id']="in_use";
						
		$f_in_use=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"in_use",$f_opts);
		$this->addField($f_in_use);
		//********************
	
	}

}
?>
