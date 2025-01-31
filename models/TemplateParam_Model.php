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
 
class TemplateParam_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("template_params");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field template ***
		$f_opts = array();
		$f_opts['length']=100;
		$f_opts['id']="template";
						
		$f_template=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"template",$f_opts);
		$this->addField($f_template);
		//********************
		
		//*** Field user_id ***
		$f_opts = array();
		
		$f_opts['alias']='Пользователь';
		$f_opts['id']="user_id";
						
		$f_user_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"user_id",$f_opts);
		$this->addField($f_user_id);
		//********************
		
		//*** Field param ***
		$f_opts = array();
		$f_opts['length']=100;
		$f_opts['id']="param";
						
		$f_param=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"param",$f_opts);
		$this->addField($f_param);
		//********************
		
		//*** Field val ***
		$f_opts = array();
		$f_opts['id']="val";
						
		$f_val=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"val",$f_opts);
		$this->addField($f_val);
		//********************
	
	}

}
?>
