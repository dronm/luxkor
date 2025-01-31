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
 
class SertTypeAttr_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("sert_types_attrs");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field sert_type_id ***
		$f_opts = array();
		$f_opts['id']="sert_type_id";
						
		$f_sert_type_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sert_type_id",$f_opts);
		$this->addField($f_sert_type_id);
		//********************
		
		//*** Field attr_text ***
		$f_opts = array();
		$f_opts['length']=250;
		$f_opts['id']="attr_text";
						
		$f_attr_text=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"attr_text",$f_opts);
		$this->addField($f_attr_text);
		//********************
		
		//*** Field attr_val_norm ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="attr_val_norm";
						
		$f_attr_val_norm=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"attr_val_norm",$f_opts);
		$this->addField($f_attr_val_norm);
		//********************
		
		//*** Field attr_val ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="attr_val";
						
		$f_attr_val=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"attr_val",$f_opts);
		$this->addField($f_attr_val);
		//********************
		
		//*** Field attr_val_min ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="attr_val_min";
						
		$f_attr_val_min=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"attr_val_min",$f_opts);
		$this->addField($f_attr_val_min);
		//********************
		
		//*** Field attr_val_max ***
		$f_opts = array();
		$f_opts['length']=19;
		$f_opts['id']="attr_val_max";
						
		$f_attr_val_max=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"attr_val_max",$f_opts);
		$this->addField($f_attr_val_max);
		//********************
	
	}

}
?>
