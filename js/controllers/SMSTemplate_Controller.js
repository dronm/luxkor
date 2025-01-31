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

function SMSTemplate_Controller(servConnector){
	options = {};
	options["listModelId"] = "SMSTemplateList_Model";
	options["objModelId"] = "SMSTemplateList_Model";
	SMSTemplate_Controller.superclass.constructor.call(this,"SMSTemplate_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(SMSTemplate_Controller,ControllerDb);

			SMSTemplate_Controller.prototype.addInsert = function(){
	SMSTemplate_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="Тип SMS";
	param = new FieldEnum("sms_type",options);
	options["values"] = 'client_on_deliv,client_remind,client_deliv_remind,client_change_time,client_on_produced,client_on_leave_prod,driver_first_deliv,driver_new_deliv';
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Шаблон";
	var param = new FieldText("template",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Комментарий";
	var param = new FieldText("comment_text",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Поля";
	var param = new FieldText("fields",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			SMSTemplate_Controller.prototype.addUpdate = function(){
	SMSTemplate_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Тип SMS";
	param = new FieldEnum("sms_type",options);
	options["values"] = 'client_on_deliv,client_remind,client_deliv_remind,client_change_time,client_on_produced,client_on_leave_prod,driver_first_deliv,driver_new_deliv';
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Шаблон";
	var param = new FieldText("template",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Комментарий";
	var param = new FieldText("comment_text",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Поля";
	var param = new FieldText("fields",options);
	
	pm.addParam(param);
	
	
}

			SMSTemplate_Controller.prototype.addDelete = function(){
	SMSTemplate_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			SMSTemplate_Controller.prototype.addGetList = function(){
	SMSTemplate_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("sms_type",options));
	pm.addParam(new FieldString("sms_type_descr",options));
	pm.addParam(new FieldText("template",options));
	pm.addParam(new FieldText("fields",options));
}

			SMSTemplate_Controller.prototype.addGetObject = function(){
	SMSTemplate_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		