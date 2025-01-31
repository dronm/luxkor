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
 
class ClientFirmBankAccount_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("client_firm_bank_accounts");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		
		$f_opts['alias']='Клиент код';
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field firm_id ***
		$f_opts = array();
		
		$f_opts['alias']='Фирма код';
		$f_opts['id']="firm_id";
						
		$f_firm_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"firm_id",$f_opts);
		$this->addField($f_firm_id);
		//********************
		
		//*** Field ext_bank_account_id ***
		$f_opts = array();
		
		$f_opts['alias']='Ссылка 1с на р/счет контрагента';
		$f_opts['length']=36;
		$f_opts['id']="ext_bank_account_id";
						
		$f_ext_bank_account_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_bank_account_id",$f_opts);
		$this->addField($f_ext_bank_account_id);
		//********************
		
		//*** Field ext_bank_account_descr ***
		$f_opts = array();
		
		$f_opts['alias']='Расчетный счет';
		$f_opts['id']="ext_bank_account_descr";
						
		$f_ext_bank_account_descr=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_bank_account_descr",$f_opts);
		$this->addField($f_ext_bank_account_descr);
		//********************
	
	}

}
?>
