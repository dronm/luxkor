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

function Vehicle_Controller(servConnector){
	options = {};
	options["listModelId"] = "VehicleList_Model";
	options["objModelId"] = "VehicleDialog_Model";
	Vehicle_Controller.superclass.constructor.call(this,"Vehicle_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.add_get_select_list();
	this.addGetObject();
	this.addComplete();
	
}
extend(Vehicle_Controller,ControllerDb);

			Vehicle_Controller.prototype.addInsert = function(){
	Vehicle_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("model",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("plate",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("vol",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("employed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("load_weight_t",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("carrier_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("driver_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_cost_opt_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("trailer_model",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("trailer_plate",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("tracker_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
		var options = {};
						
		pm.addParam(new FieldString("driver_descr",options));
	
		var options = {};
						
		pm.addParam(new FieldString("driver_drive_perm",options));
	
		var options = {};
						
		pm.addParam(new FieldString("driver_cel_phone",options));
	
	
}

			Vehicle_Controller.prototype.addUpdate = function(){
	Vehicle_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("model",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("plate",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("vol",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("employed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("load_weight_t",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("carrier_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("driver_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_cost_opt_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("trailer_model",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("trailer_plate",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("tracker_id",options);
	
	pm.addParam(param);
	
		var options = {};
						
		pm.addParam(new FieldString("driver_descr",options));
	
		var options = {};
						
		pm.addParam(new FieldString("driver_drive_perm",options));
	
		var options = {};
						
		pm.addParam(new FieldString("driver_cel_phone",options));
	
	
}

			Vehicle_Controller.prototype.addDelete = function(){
	Vehicle_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Vehicle_Controller.prototype.addGetList = function(){
	Vehicle_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("plate",options));
	pm.addParam(new FieldString("model",options));
	pm.addParam(new FieldInt("production_city_id",options));
	pm.addParam(new FieldString("production_city_descr",options));
	pm.addParam(new FieldInt("driver_id",options));
	pm.addParam(new FieldString("driver_descr",options));
	pm.addParam(new FieldBool("employed",options));
	pm.addParam(new FieldInt("vol",options));
	pm.addParam(new FieldFloat("load_weight_t",options));
	pm.addParam(new FieldString("vl_wt",options));
	pm.addParam(new FieldInt("carrier_id",options));
	pm.addParam(new FieldString("carrier_descr",options));
	pm.addParam(new FieldString("trailer_model",options));
	pm.addParam(new FieldString("trailer_plate",options));
	pm.addParam(new FieldString("driver_match_1c",options));
}

			Vehicle_Controller.prototype.add_get_select_list = function(){
	var pm = this.addMethodById('get_select_list');
	
}

			Vehicle_Controller.prototype.addGetObject = function(){
	Vehicle_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			Vehicle_Controller.prototype.addComplete = function(){
	Vehicle_Controller.superclass.addComplete.call(this);
	
	var options = {};
	
	var pm = this.getComplete();
	pm.addParam(new FieldString("complete_descr",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("complete_descr");
}

		