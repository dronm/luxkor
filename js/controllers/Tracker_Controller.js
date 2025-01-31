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

function Tracker_Controller(servConnector){
	options = {};
	options["listModelId"] = "TrackerList_Model";
	options["objModelId"] = "TrackerList_Model";
	Tracker_Controller.superclass.constructor.call(this,"Tracker_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(Tracker_Controller,ControllerDb);

			Tracker_Controller.prototype.addInsert = function(){
	Tracker_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("tracker_server_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("sim_number",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("sim_id",options);
	
	pm.addParam(param);
	
	
}

			Tracker_Controller.prototype.addUpdate = function(){
	Tracker_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldString("id",options);
	
	pm.addParam(param);
	
	param = new FieldString("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("tracker_server_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("sim_number",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("sim_id",options);
	
	pm.addParam(param);
	
	
}

			Tracker_Controller.prototype.addDelete = function(){
	Tracker_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldString("id",options));
}

			Tracker_Controller.prototype.addGetList = function(){
	Tracker_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldString("id",options));
	pm.addParam(new FieldInt("tracker_server_id",options));
	pm.addParam(new FieldString("tracker_server_descr",options));
	pm.addParam(new FieldString("sim_number",options));
	pm.addParam(new FieldString("sim_id",options));
}

			Tracker_Controller.prototype.addGetObject = function(){
	Tracker_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldString("id",options));
}

		