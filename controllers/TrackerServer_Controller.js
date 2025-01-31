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

function TrackerServer_Controller(servConnector){
	options = {};
	options["listModelId"] = "TrackerServer_Model";
	options["objModelId"] = "TrackerServer_Model";
	TrackerServer_Controller.superclass.constructor.call(this,"TrackerServer_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(TrackerServer_Controller,ControllerDb);

			TrackerServer_Controller.prototype.addInsert = function(){
	TrackerServer_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="IP адрес";
	var param = new FieldString("ip",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Описание";
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			TrackerServer_Controller.prototype.addUpdate = function(){
	TrackerServer_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="IP адрес";
	var param = new FieldString("ip",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Описание";
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	
}

			TrackerServer_Controller.prototype.addDelete = function(){
	TrackerServer_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			TrackerServer_Controller.prototype.addGetList = function(){
	TrackerServer_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("ip",options));
	pm.addParam(new FieldString("name",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("id");
	
}

			TrackerServer_Controller.prototype.addGetObject = function(){
	TrackerServer_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		