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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');
 
class SMSTemplate_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("sms_templates");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field sms_type ***
		$f_opts = array();
		$f_opts['primaryKey'] = FALSE;
		$f_opts['autoInc']=FALSE;
		
		$f_opts['alias']='Тип SMS';
		$f_opts['id']="sms_type";
						
		$f_sms_type=new FieldSQLEnum($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sms_type",$f_opts);
		$this->addField($f_sms_type);
		//********************
		
		//*** Field template ***
		$f_opts = array();
		
		$f_opts['alias']='Шаблон';
		$f_opts['id']="template";
						
		$f_template=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"template",$f_opts);
		$this->addField($f_template);
		//********************
		
		//*** Field comment_text ***
		$f_opts = array();
		
		$f_opts['alias']='Комментарий';
		$f_opts['id']="comment_text";
						
		$f_comment_text=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"comment_text",$f_opts);
		$this->addField($f_comment_text);
		//********************
		
		//*** Field fields ***
		$f_opts = array();
		
		$f_opts['alias']='Поля';
		$f_opts['id']="fields";
						
		$f_fields=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"fields",$f_opts);
		$this->addField($f_fields);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_sms_type,$direct);

	}

}
?>
