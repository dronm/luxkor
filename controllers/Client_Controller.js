/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires common/functions.js
 * @requires core/ControllerDb.js
*/
//ф
/* constructor */

function Client_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientList_Model";
	options["objModelId"] = "ClientDialog_Model";
	Client_Controller.superclass.constructor.call(this,"Client_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.addComplete();
	this.add_get_unreg_list();
	this.add_get_unreg_client_list();
	this.add_get_user_list();
	this.add_get_contract_list();
	this.add_complete_from_1c();
	this.add_attrs_from_1c();
	this.add_register();
	this.add_check_on_user_name();
	this.add_check_on_inn();
	this.add_get_pop_firm();
	this.add_get_debts_on_firm();
	this.add_get_debt_list();
	this.add_refresh_debts();
	
}
extend(Client_Controller,ControllerDb);

			Client_Controller.prototype.addInsert = function(){
	Client_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("name_full",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("inn",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("kpp",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("addr_reg",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("addr_mail",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("addr_mail_same_as_reg",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("telephones",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ogrn",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("okpo",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("acc",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("bank_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("bank_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("bank_acc",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("registered",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("pay_type",options);
	options["values"] = 'cash,in_advance,with_delay';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("pay_delay_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pay_fix_to_dow",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("pay_dow_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pay_ban_on_debt_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("pay_debt_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pay_ban_on_debt_sum",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("pay_debt_sum",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("login_allowed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("sms_on_order_change",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("email_sert",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("show_delivery_tab",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_activity_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("def_firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("def_warehouse_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			Client_Controller.prototype.addUpdate = function(){
	Client_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("name_full",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("inn",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("kpp",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("addr_reg",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("addr_mail",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("addr_mail_same_as_reg",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("telephones",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ogrn",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("okpo",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("acc",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("bank_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("bank_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("bank_acc",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("registered",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("pay_type",options);
	options["values"] = 'cash,in_advance,with_delay';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("pay_delay_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pay_fix_to_dow",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("pay_dow_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pay_ban_on_debt_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("pay_debt_days",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pay_ban_on_debt_sum",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("pay_debt_sum",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("login_allowed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("sms_on_order_change",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("email_sert",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("show_delivery_tab",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_activity_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("def_firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("def_warehouse_id",options);
	
	pm.addParam(param);
	
	
}

			Client_Controller.prototype.addDelete = function(){
	Client_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Client_Controller.prototype.addGetList = function(){
	Client_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldText("occupation",options));
	pm.addParam(new FieldString("inn",options));
	pm.addParam(new FieldString("contract_descr",options));
	pm.addParam(new FieldString("contract_period",options));
	pm.addParam(new FieldString("terms",options));
	pm.addParam(new FieldBool("banned",options));
	pm.addParam(new FieldString("client_activity_descr",options));
	pm.addParam(new FieldBool("login_allowed",options));
	pm.addParam(new FieldInt("def_firm_id",options));
	pm.addParam(new FieldInt("def_warehouse_id",options));
	pm.addParam(new FieldFloat("def_debt",options));
	pm.addParam(new FieldFloat("debt_total",options));
}

			Client_Controller.prototype.addGetObject = function(){
	Client_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			Client_Controller.prototype.addComplete = function(){
	Client_Controller.superclass.addComplete.call(this);
	
	var options = {};
	
	var pm = this.getComplete();
	pm.addParam(new FieldString("name",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("name");
}

			Client_Controller.prototype.add_get_unreg_list = function(){
	var pm = this.addMethodById('get_unreg_list');
	
}

			Client_Controller.prototype.add_get_unreg_client_list = function(){
	var pm = this.addMethodById('get_unreg_client_list');
	
}

			Client_Controller.prototype.add_get_user_list = function(){
	var pm = this.addMethodById('get_user_list');
	
				
		pm.addParam(new FieldInt("client_id"));
	
			
}

			Client_Controller.prototype.add_get_contract_list = function(){
	var pm = this.addMethodById('get_contract_list');
	
				
		pm.addParam(new FieldInt("client_id"));
	
			
}

			Client_Controller.prototype.add_complete_from_1c = function(){
	var pm = this.addMethodById('complete_from_1c');
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

			Client_Controller.prototype.add_attrs_from_1c = function(){
	var pm = this.addMethodById('attrs_from_1c');
	
				
		pm.addParam(new FieldString("name"));
	
			
}

			Client_Controller.prototype.add_register = function(){
	var pm = this.addMethodById('register');
	
				
		pm.addParam(new FieldString("name"));
	
				
		pm.addParam(new FieldString("inn"));
	
				
		pm.addParam(new FieldString("kpp"));
	
				
		pm.addParam(new FieldText("addr_reg"));
	
				
		pm.addParam(new FieldText("addr_mail"));
	
				
		pm.addParam(new FieldBool("addr_mail_same_as_reg"));
	
				
		pm.addParam(new FieldText("telephones"));
	
				
		pm.addParam(new FieldString("ogrn"));
	
				
		pm.addParam(new FieldString("okpo"));
	
				
		pm.addParam(new FieldString("acc"));
	
				
		pm.addParam(new FieldText("bank_name"));
	
				
		pm.addParam(new FieldString("bank_code"));
	
				
		pm.addParam(new FieldString("bank_acc"));
	
				
		pm.addParam(new FieldString("user_name_full"));
	
				
		pm.addParam(new FieldString("user_name"));
	
				
		pm.addParam(new FieldString("user_pwd"));
	
				
		pm.addParam(new FieldString("user_email"));
	
				
		pm.addParam(new FieldString("user_phone"));
	
			
}

			Client_Controller.prototype.add_check_on_user_name = function(){
	var pm = this.addMethodById('check_on_user_name');
	
				
		pm.addParam(new FieldString("user_name"));
	
			
}

			Client_Controller.prototype.add_check_on_inn = function(){
	var pm = this.addMethodById('check_on_inn');
	
				
		pm.addParam(new FieldString("inn"));
	
			
}

			Client_Controller.prototype.add_get_pop_firm = function(){
	var pm = this.addMethodById('get_pop_firm');
	
				
		pm.addParam(new FieldInt("client_id"));
	
			
}

			Client_Controller.prototype.add_get_debts_on_firm = function(){
	var pm = this.addMethodById('get_debts_on_firm');
	
				
		pm.addParam(new FieldInt("firm_id"));
	
				
		pm.addParam(new FieldInt("client_id"));
	
			
}

			Client_Controller.prototype.add_get_debt_list = function(){
	var pm = this.addMethodById('get_debt_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			Client_Controller.prototype.add_refresh_debts = function(){
	var pm = this.addMethodById('refresh_debts');
	
}

		