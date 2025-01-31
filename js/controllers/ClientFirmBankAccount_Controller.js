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

function ClientFirmBankAccount_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientFirmBankAccountList_Model";
	options["objModelId"] = "ClientFirmBankAccountList_Model";
	ClientFirmBankAccount_Controller.superclass.constructor.call(this,"ClientFirmBankAccount_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ClientFirmBankAccount_Controller,ControllerDb);

			ClientFirmBankAccount_Controller.prototype.addInsert = function(){
	ClientFirmBankAccount_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="Клиент код";
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Фирма код";
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Ссылка 1с на р/счет контрагента";
	var param = new FieldString("ext_bank_account_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Расчетный счет";
	var param = new FieldText("ext_bank_account_descr",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			ClientFirmBankAccount_Controller.prototype.addUpdate = function(){
	ClientFirmBankAccount_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Клиент код";
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Фирма код";
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Ссылка 1с на р/счет контрагента";
	var param = new FieldString("ext_bank_account_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Расчетный счет";
	var param = new FieldText("ext_bank_account_descr",options);
	
	pm.addParam(param);
	
	
}

			ClientFirmBankAccount_Controller.prototype.addDelete = function(){
	ClientFirmBankAccount_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ClientFirmBankAccount_Controller.prototype.addGetList = function(){
	ClientFirmBankAccount_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("client_id",options));
	pm.addParam(new FieldString("client_descr",options));
	pm.addParam(new FieldInt("firm_id",options));
	pm.addParam(new FieldString("firm_descr",options));
	pm.addParam(new FieldString("ext_bank_account_id",options));
	pm.addParam(new FieldText("ext_bank_account_descr",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("client_id,firm_descr");
	
}

			ClientFirmBankAccount_Controller.prototype.addGetObject = function(){
	ClientFirmBankAccount_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		