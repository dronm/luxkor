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
 
class SMSTemplateList_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("sms_templates_list");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field sms_type ***
		$f_opts = array();
		$f_opts['id']="sms_type";
						
		$f_sms_type=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sms_type",$f_opts);
		$this->addField($f_sms_type);
		//********************
		
		//*** Field sms_type_descr ***
		$f_opts = array();
		$f_opts['id']="sms_type_descr";
						
		$f_sms_type_descr=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sms_type_descr",$f_opts);
		$this->addField($f_sms_type_descr);
		//********************
		
		//*** Field template ***
		$f_opts = array();
		$f_opts['id']="template";
						
		$f_template=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"template",$f_opts);
		$this->addField($f_template);
		//********************
		
		//*** Field fields ***
		$f_opts = array();
		$f_opts['id']="fields";
						
		$f_fields=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"fields",$f_opts);
		$this->addField($f_fields);
		//********************
	
	}

}
?>
