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

function CarrierOrder_Controller(servConnector){
	options = {};
	options["listModelId"] = "CarrierOrderList_Model";
	options["objModelId"] = "CarrierOrderList_Model";
	CarrierOrder_Controller.superclass.constructor.call(this,"CarrierOrder_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(CarrierOrder_Controller,ControllerDb);

			CarrierOrder_Controller.prototype.addInsert = function(){
	CarrierOrder_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="Перевозчик код";
	var param = new FieldInt("carrier_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Водитель код";
	var param = new FieldInt("driver_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="ТС код";
	var param = new FieldInt("vehicle_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Порядок";
	var param = new FieldInt("ord",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			CarrierOrder_Controller.prototype.addUpdate = function(){
	CarrierOrder_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Перевозчик код";
	var param = new FieldInt("carrier_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Водитель код";
	var param = new FieldInt("driver_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="ТС код";
	var param = new FieldInt("vehicle_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Порядок";
	var param = new FieldInt("ord",options);
	
	pm.addParam(param);
	
	
}

			CarrierOrder_Controller.prototype.addDelete = function(){
	CarrierOrder_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			CarrierOrder_Controller.prototype.addGetList = function(){
	CarrierOrder_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("carrier_id",options));
	pm.addParam(new FieldString("carrier_descr",options));
	pm.addParam(new FieldInt("driver_id",options));
	pm.addParam(new FieldString("driver_descr",options));
	pm.addParam(new FieldInt("vehicle_id",options));
	pm.addParam(new FieldString("vehicle_descr",options));
	pm.addParam(new FieldInt("ord",options));
	pm.addParam(new FieldInt("today_ord",options));
}

			CarrierOrder_Controller.prototype.addGetObject = function(){
	CarrierOrder_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		