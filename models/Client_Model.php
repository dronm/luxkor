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
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');
 
class Client_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("clients");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		$f_opts['length']=150;
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
		
		//*** Field name_full ***
		$f_opts = array();
		$f_opts['id']="name_full";
						
		$f_name_full=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name_full",$f_opts);
		$this->addField($f_name_full);
		//********************
		
		//*** Field inn ***
		$f_opts = array();
		$f_opts['length']=12;
		$f_opts['id']="inn";
						
		$f_inn=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"inn",$f_opts);
		$this->addField($f_inn);
		//********************
		
		//*** Field kpp ***
		$f_opts = array();
		$f_opts['length']=10;
		$f_opts['id']="kpp";
						
		$f_kpp=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"kpp",$f_opts);
		$this->addField($f_kpp);
		//********************
		
		//*** Field addr_reg ***
		$f_opts = array();
		$f_opts['id']="addr_reg";
						
		$f_addr_reg=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"addr_reg",$f_opts);
		$this->addField($f_addr_reg);
		//********************
		
		//*** Field addr_mail ***
		$f_opts = array();
		$f_opts['id']="addr_mail";
						
		$f_addr_mail=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"addr_mail",$f_opts);
		$this->addField($f_addr_mail);
		//********************
		
		//*** Field addr_mail_same_as_reg ***
		$f_opts = array();
		$f_opts['id']="addr_mail_same_as_reg";
						
		$f_addr_mail_same_as_reg=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"addr_mail_same_as_reg",$f_opts);
		$this->addField($f_addr_mail_same_as_reg);
		//********************
		
		//*** Field telephones ***
		$f_opts = array();
		$f_opts['id']="telephones";
						
		$f_telephones=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"telephones",$f_opts);
		$this->addField($f_telephones);
		//********************
		
		//*** Field ogrn ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="ogrn";
						
		$f_ogrn=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ogrn",$f_opts);
		$this->addField($f_ogrn);
		//********************
		
		//*** Field okpo ***
		$f_opts = array();
		$f_opts['length']=20;
		$f_opts['id']="okpo";
						
		$f_okpo=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"okpo",$f_opts);
		$this->addField($f_okpo);
		//********************
		
		//*** Field acc ***
		$f_opts = array();
		$f_opts['length']=20;
		$f_opts['id']="acc";
						
		$f_acc=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"acc",$f_opts);
		$this->addField($f_acc);
		//********************
		
		//*** Field bank_name ***
		$f_opts = array();
		$f_opts['id']="bank_name";
						
		$f_bank_name=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"bank_name",$f_opts);
		$this->addField($f_bank_name);
		//********************
		
		//*** Field bank_code ***
		$f_opts = array();
		$f_opts['length']=9;
		$f_opts['id']="bank_code";
						
		$f_bank_code=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"bank_code",$f_opts);
		$this->addField($f_bank_code);
		//********************
		
		//*** Field bank_acc ***
		$f_opts = array();
		$f_opts['length']=20;
		$f_opts['id']="bank_acc";
						
		$f_bank_acc=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"bank_acc",$f_opts);
		$this->addField($f_bank_acc);
		//********************
		
		//*** Field registered ***
		$f_opts = array();
		$f_opts['defaultValue']='false';
		$f_opts['id']="registered";
						
		$f_registered=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"registered",$f_opts);
		$this->addField($f_registered);
		//********************
		
		//*** Field pay_type ***
		$f_opts = array();
		$f_opts['id']="pay_type";
						
		$f_pay_type=new FieldSQLEnum($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_type",$f_opts);
		$this->addField($f_pay_type);
		//********************
		
		//*** Field pay_delay_days ***
		$f_opts = array();
		$f_opts['id']="pay_delay_days";
						
		$f_pay_delay_days=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_delay_days",$f_opts);
		$this->addField($f_pay_delay_days);
		//********************
		
		//*** Field pay_fix_to_dow ***
		$f_opts = array();
		$f_opts['defaultValue']='true';
		$f_opts['id']="pay_fix_to_dow";
						
		$f_pay_fix_to_dow=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_fix_to_dow",$f_opts);
		$this->addField($f_pay_fix_to_dow);
		//********************
		
		//*** Field pay_dow_days ***
		$f_opts = array();
		$f_opts['id']="pay_dow_days";
						
		$f_pay_dow_days=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_dow_days",$f_opts);
		$this->addField($f_pay_dow_days);
		//********************
		
		//*** Field pay_ban_on_debt_days ***
		$f_opts = array();
		$f_opts['defaultValue']='true';
		$f_opts['id']="pay_ban_on_debt_days";
						
		$f_pay_ban_on_debt_days=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_ban_on_debt_days",$f_opts);
		$this->addField($f_pay_ban_on_debt_days);
		//********************
		
		//*** Field pay_debt_days ***
		$f_opts = array();
		$f_opts['defaultValue']='5';
		$f_opts['id']="pay_debt_days";
						
		$f_pay_debt_days=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_debt_days",$f_opts);
		$this->addField($f_pay_debt_days);
		//********************
		
		//*** Field pay_ban_on_debt_sum ***
		$f_opts = array();
		$f_opts['defaultValue']='false';
		$f_opts['id']="pay_ban_on_debt_sum";
						
		$f_pay_ban_on_debt_sum=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_ban_on_debt_sum",$f_opts);
		$this->addField($f_pay_ban_on_debt_sum);
		//********************
		
		//*** Field pay_debt_sum ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="pay_debt_sum";
						
		$f_pay_debt_sum=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pay_debt_sum",$f_opts);
		$this->addField($f_pay_debt_sum);
		//********************
		
		//*** Field login_allowed ***
		$f_opts = array();
		$f_opts['defaultValue']='true';
		$f_opts['id']="login_allowed";
						
		$f_login_allowed=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"login_allowed",$f_opts);
		$this->addField($f_login_allowed);
		//********************
		
		//*** Field sms_on_order_change ***
		$f_opts = array();
		$f_opts['defaultValue']='true';
		$f_opts['id']="sms_on_order_change";
						
		$f_sms_on_order_change=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sms_on_order_change",$f_opts);
		$this->addField($f_sms_on_order_change);
		//********************
		
		//*** Field email_sert ***
		$f_opts = array();
		$f_opts['defaultValue']='true';
		$f_opts['id']="email_sert";
						
		$f_email_sert=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"email_sert",$f_opts);
		$this->addField($f_email_sert);
		//********************
		
		//*** Field show_delivery_tab ***
		$f_opts = array();
		$f_opts['defaultValue']='true';
		$f_opts['id']="show_delivery_tab";
						
		$f_show_delivery_tab=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"show_delivery_tab",$f_opts);
		$this->addField($f_show_delivery_tab);
		//********************
		
		//*** Field ext_id ***
		$f_opts = array();
		$f_opts['length']=36;
		$f_opts['id']="ext_id";
						
		$f_ext_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_id",$f_opts);
		$this->addField($f_ext_id);
		//********************
		
		//*** Field client_activity_id ***
		$f_opts = array();
		$f_opts['id']="client_activity_id";
						
		$f_client_activity_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_activity_id",$f_opts);
		$this->addField($f_client_activity_id);
		//********************
		
		//*** Field def_firm_id ***
		$f_opts = array();
		$f_opts['id']="def_firm_id";
						
		$f_def_firm_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"def_firm_id",$f_opts);
		$this->addField($f_def_firm_id);
		//********************
		
		//*** Field def_warehouse_id ***
		$f_opts = array();
		$f_opts['id']="def_warehouse_id";
						
		$f_def_warehouse_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"def_warehouse_id",$f_opts);
		$this->addField($f_def_warehouse_id);
		//********************
		
		//*** Field deleted ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
		
		//*** Field email ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="email";
						
		$f_email=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"email",$f_opts);
		$this->addField($f_email);
		//********************
		
		//*** Field deliv_add_cost_to_product ***
		$f_opts = array();
		$f_opts['id']="deliv_add_cost_to_product";
						
		$f_deliv_add_cost_to_product=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deliv_add_cost_to_product",$f_opts);
		$this->addField($f_deliv_add_cost_to_product);
		//********************
		
		//*** Field is_supplier ***
		$f_opts = array();
		$f_opts['id']="is_supplier";
						
		$f_is_supplier=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"is_supplier",$f_opts);
		$this->addField($f_is_supplier);
		//********************
		
		//*** Field is_carrier ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="is_carrier";
						
		$f_is_carrier=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"is_carrier",$f_opts);
		$this->addField($f_is_carrier);
		//********************
		
		//*** Field comment_text ***
		$f_opts = array();
		$f_opts['id']="comment_text";
						
		$f_comment_text=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"comment_text",$f_opts);
		$this->addField($f_comment_text);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_name,$direct);

	}

}
?>
