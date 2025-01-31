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
 
class DOCOrderDOCTFCustSurvey_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_orders_t_cust_surveys");
			
		//*** Field doc_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="doc_id";
						
		$f_doc_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_id",$f_opts);
		$this->addField($f_doc_id);
		//********************
		
		//*** Field line_number ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="line_number";
						
		$f_line_number=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"line_number",$f_opts);
		$this->addField($f_line_number);
		//********************
		
		//*** Field customer_survey_question_id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="customer_survey_question_id";
						
		$f_customer_survey_question_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"customer_survey_question_id",$f_opts);
		$this->addField($f_customer_survey_question_id);
		//********************
		
		//*** Field points ***
		$f_opts = array();
		$f_opts['id']="points";
						
		$f_points=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"points",$f_opts);
		$this->addField($f_points);
		//********************
		
		//*** Field answer_comment ***
		$f_opts = array();
		$f_opts['id']="answer_comment";
						
		$f_answer_comment=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"answer_comment",$f_opts);
		$this->addField($f_answer_comment);
		//********************
	
	}

}
?>
