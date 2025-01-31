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

function MeasureUnit_Controller(servConnector){
	options = {};
	options["listModelId"] = "MeasureUnitList_Model";
	options["objModelId"] = "MeasureUnitDialog_Model";
	MeasureUnit_Controller.superclass.constructor.call(this,"MeasureUnit_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(MeasureUnit_Controller,ControllerDb);

			MeasureUnit_Controller.prototype.addInsert = function(){
	MeasureUnit_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name_full",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("is_int",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			MeasureUnit_Controller.prototype.addUpdate = function(){
	MeasureUnit_Controller.superclass.addUpdate.call(this);
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
	
	var param = new FieldString("name_full",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("is_int",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	
}

			MeasureUnit_Controller.prototype.addDelete = function(){
	MeasureUnit_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			MeasureUnit_Controller.prototype.addGetList = function(){
	MeasureUnit_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
}

			MeasureUnit_Controller.prototype.addGetObject = function(){
	MeasureUnit_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		