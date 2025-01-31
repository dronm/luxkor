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

function EmailTemplate_Controller(servConnector){
	options = {};
	options["listModelId"] = "EmailTemplateList_Model";
	options["objModelId"] = "EmailTemplateList_Model";
	EmailTemplate_Controller.superclass.constructor.call(this,"EmailTemplate_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(EmailTemplate_Controller,ControllerDb);

			EmailTemplate_Controller.prototype.addInsert = function(){
	EmailTemplate_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="Тип email";
	param = new FieldEnum("email_type",options);
	options["values"] = 'new_account,reset_pwd,order,order_changed,order_wait_for_client,order_cancel,order_remind,shipment,balance_to_client,order_on_produced';
	
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
	options["alias"]="Тема";
	var param = new FieldText("mes_subject",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Поля";
	var param = new FieldText("fields",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			EmailTemplate_Controller.prototype.addUpdate = function(){
	EmailTemplate_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Тип email";
	param = new FieldEnum("email_type",options);
	options["values"] = 'new_account,reset_pwd,order,order_changed,order_wait_for_client,order_cancel,order_remind,shipment,balance_to_client,order_on_produced';
	
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
	options["alias"]="Тема";
	var param = new FieldText("mes_subject",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Поля";
	var param = new FieldText("fields",options);
	
	pm.addParam(param);
	
	
}

			EmailTemplate_Controller.prototype.addDelete = function(){
	EmailTemplate_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			EmailTemplate_Controller.prototype.addGetList = function(){
	EmailTemplate_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("email_type",options));
	pm.addParam(new FieldString("email_type_descr",options));
	pm.addParam(new FieldText("template",options));
	pm.addParam(new FieldText("fields",options));
}

			EmailTemplate_Controller.prototype.addGetObject = function(){
	EmailTemplate_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		