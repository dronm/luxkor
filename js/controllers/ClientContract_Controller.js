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

function ClientContract_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientContractList_Model";
	options["objModelId"] = "ClientContractList_Model";
	ClientContract_Controller.superclass.constructor.call(this,"ClientContract_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ClientContract_Controller,ControllerDb);

			ClientContract_Controller.prototype.addInsert = function(){
	ClientContract_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Состояние";
	param = new FieldEnum("state",options);
	options["values"] = 'signed,not_signed';
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Дата с";
	var param = new FieldDate("date_from",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Дата по";
	var param = new FieldDate("date_to",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="номер";
	var param = new FieldString("number",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			ClientContract_Controller.prototype.addUpdate = function(){
	ClientContract_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Состояние";
	param = new FieldEnum("state",options);
	options["values"] = 'signed,not_signed';
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Дата с";
	var param = new FieldDate("date_from",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Дата по";
	var param = new FieldDate("date_to",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="номер";
	var param = new FieldString("number",options);
	
	pm.addParam(param);
	
	
}

			ClientContract_Controller.prototype.addDelete = function(){
	ClientContract_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ClientContract_Controller.prototype.addGetList = function(){
	ClientContract_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("client_id",options));
	pm.addParam(new FieldString("firm_descr",options));
	pm.addParam(new FieldString("state",options));
	pm.addParam(new FieldString("state_descr",options));
	pm.addParam(new FieldString("date_to_descr",options));
}

			ClientContract_Controller.prototype.addGetObject = function(){
	ClientContract_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		