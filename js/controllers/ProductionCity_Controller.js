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

function ProductionCity_Controller(servConnector){
	options = {};
	options["listModelId"] = "ProductionCityList_Model";
	options["objModelId"] = "ProductionCityDialog_Model";
	ProductionCity_Controller.superclass.constructor.call(this,"ProductionCity_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ProductionCity_Controller,ControllerDb);

			ProductionCity_Controller.prototype.addInsert = function(){
	ProductionCity_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldGeomPolygon("zone",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			ProductionCity_Controller.prototype.addUpdate = function(){
	ProductionCity_Controller.superclass.addUpdate.call(this);
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
	
	var param = new FieldGeomPolygon("zone",options);
	
	pm.addParam(param);
	
	
}

			ProductionCity_Controller.prototype.addDelete = function(){
	ProductionCity_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ProductionCity_Controller.prototype.addGetList = function(){
	ProductionCity_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("name");
	
}

			ProductionCity_Controller.prototype.addGetObject = function(){
	ProductionCity_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		