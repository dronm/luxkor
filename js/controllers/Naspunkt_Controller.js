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

function Naspunkt_Controller(servConnector){
	options = {};
	options["listModelId"] = "NaspunktList_Model";
	options["objModelId"] = "NaspunktList_Model";
	Naspunkt_Controller.superclass.constructor.call(this,"Naspunkt_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(Naspunkt_Controller,ControllerDb);

			Naspunkt_Controller.prototype.addInsert = function(){
	Naspunkt_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("distance",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			Naspunkt_Controller.prototype.addUpdate = function(){
	Naspunkt_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("distance",options);
	
	pm.addParam(param);
	
	
}

			Naspunkt_Controller.prototype.addDelete = function(){
	Naspunkt_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Naspunkt_Controller.prototype.addGetList = function(){
	Naspunkt_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("city_id",options));
	pm.addParam(new FieldString("city_descr",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldInt("distance",options));
}

			Naspunkt_Controller.prototype.addGetObject = function(){
	Naspunkt_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		