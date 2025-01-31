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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLDateTimeTZ.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLJSONB.php');
 
class DocOrderAttachment_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("doc_order_attachments");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['length']=36;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field date_time ***
		$f_opts = array();
		$f_opts['defaultValue']='CURRENT_TIMESTAMP';
		$f_opts['id']="date_time";
						
		$f_date_time=new FieldSQLDateTimeTZ($this->getDbLink(),$this->getDbName(),$this->getTableName(),"date_time",$f_opts);
		$this->addField($f_date_time);
		//********************
		
		//*** Field doc_order_id ***
		$f_opts = array();
		$f_opts['id']="doc_order_id";
						
		$f_doc_order_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"doc_order_id",$f_opts);
		$this->addField($f_doc_order_id);
		//********************
		
		//*** Field file_inf ***
		$f_opts = array();
		$f_opts['id']="file_inf";
						
		$f_file_inf=new FieldSQLJSONB($this->getDbLink(),$this->getDbName(),$this->getTableName(),"file_inf",$f_opts);
		$this->addField($f_file_inf);
		//********************
		
		//*** Field file_data ***
		$f_opts = array();
		$f_opts['id']="file_data";
						
		$f_file_data=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"file_data",$f_opts);
		$this->addField($f_file_data);
		//********************
		
		//*** Field preview_data ***
		$f_opts = array();
		$f_opts['id']="preview_data";
						
		$f_preview_data=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"preview_data",$f_opts);
		$this->addField($f_preview_data);
		//********************
	
	}

}
?>
