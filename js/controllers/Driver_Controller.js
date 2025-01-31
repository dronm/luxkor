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

function Driver_Controller(servConnector){
	options = {};
	options["listModelId"] = "DriverList_Model";
	options["objModelId"] = "DriverList_Model";
	Driver_Controller.superclass.constructor.call(this,"Driver_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.addComplete();
	this.add_get_veh_attrs();
	
}
extend(Driver_Controller,ControllerDb);

			Driver_Controller.prototype.addInsert = function(){
	Driver_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("drive_perm",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("cel_phone",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			Driver_Controller.prototype.addUpdate = function(){
	Driver_Controller.superclass.addUpdate.call(this);
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
	
	var param = new FieldString("drive_perm",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("cel_phone",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	
}

			Driver_Controller.prototype.addDelete = function(){
	Driver_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Driver_Controller.prototype.addGetList = function(){
	Driver_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldString("drive_perm",options));
	pm.addParam(new FieldString("cel_phone",options));
	pm.addParam(new FieldString("ext_id",options));
	pm.addParam(new FieldString("match_1c",options));
}

			Driver_Controller.prototype.addGetObject = function(){
	Driver_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			Driver_Controller.prototype.addComplete = function(){
	Driver_Controller.superclass.addComplete.call(this);
	
	var options = {};
	
	var pm = this.getComplete();
	pm.addParam(new FieldString("name",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("name");
}

			Driver_Controller.prototype.add_get_veh_attrs = function(){
	var pm = this.addMethodById('get_veh_attrs');
	
				
		pm.addParam(new FieldInt("driver_id"));
	
			
}

		