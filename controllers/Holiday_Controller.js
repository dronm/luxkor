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

function Holiday_Controller(servConnector){
	options = {};
	options["listModelId"] = "HolidayList_Model";
	options["objModelId"] = "HolidayList_Model";
	Holiday_Controller.superclass.constructor.call(this,"Holiday_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(Holiday_Controller,ControllerDb);

			Holiday_Controller.prototype.addInsert = function(){
	Holiday_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldDate("date",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	
}

			Holiday_Controller.prototype.addUpdate = function(){
	Holiday_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldDate("date",options);
	
	pm.addParam(param);
	
	param = new FieldDate("old_date",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	
}

			Holiday_Controller.prototype.addDelete = function(){
	Holiday_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldDate("date",options));
}

			Holiday_Controller.prototype.addGetList = function(){
	Holiday_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldDate("date",options));
	pm.addParam(new FieldString("date_str",options));
	pm.addParam(new FieldString("name",options));
}

			Holiday_Controller.prototype.addGetObject = function(){
	Holiday_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldDate("date",options));
}

		