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

function DeliveryHour_Controller(servConnector){
	options = {};
	options["listModelId"] = "DeliveryHour_Model";
	options["objModelId"] = "DeliveryHour_Model";
	DeliveryHour_Controller.superclass.constructor.call(this,"DeliveryHour_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(DeliveryHour_Controller,ControllerDb);

			DeliveryHour_Controller.prototype.addInsert = function(){
	DeliveryHour_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("h_from",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("h_to",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			DeliveryHour_Controller.prototype.addUpdate = function(){
	DeliveryHour_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("h_from",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("h_to",options);
	
	pm.addParam(param);
	
	
}

			DeliveryHour_Controller.prototype.addDelete = function(){
	DeliveryHour_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			DeliveryHour_Controller.prototype.addGetList = function(){
	DeliveryHour_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("h_from",options));
	pm.addParam(new FieldInt("h_to",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("h_from");
	
}

			DeliveryHour_Controller.prototype.addGetObject = function(){
	DeliveryHour_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		