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

function DeliveryPeriod_Controller(servConnector){
	options = {};
	options["listModelId"] = "DeliveryPeriod_Model";
	options["objModelId"] = "DeliveryPeriod_Model";
	DeliveryPeriod_Controller.superclass.constructor.call(this,"DeliveryPeriod_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(DeliveryPeriod_Controller,ControllerDb);

			DeliveryPeriod_Controller.prototype.addInsert = function(){
	DeliveryPeriod_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			DeliveryPeriod_Controller.prototype.addUpdate = function(){
	DeliveryPeriod_Controller.superclass.addUpdate.call(this);
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
	
	
}

			DeliveryPeriod_Controller.prototype.addDelete = function(){
	DeliveryPeriod_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			DeliveryPeriod_Controller.prototype.addGetList = function(){
	DeliveryPeriod_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
}

			DeliveryPeriod_Controller.prototype.addGetObject = function(){
	DeliveryPeriod_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		