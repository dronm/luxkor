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

function TTNAttrPair_Controller(servConnector){
	options = {};
	options["listModelId"] = "TTNAttrPairList_Model";
	options["objModelId"] = "TTNAttrPairList_Model";
	TTNAttrPair_Controller.superclass.constructor.call(this,"TTNAttrPair_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(TTNAttrPair_Controller,ControllerDb);

			TTNAttrPair_Controller.prototype.addInsert = function(){
	TTNAttrPair_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="Фирма";
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Склад";
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			TTNAttrPair_Controller.prototype.addUpdate = function(){
	TTNAttrPair_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Фирма";
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Склад";
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	
}

			TTNAttrPair_Controller.prototype.addDelete = function(){
	TTNAttrPair_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			TTNAttrPair_Controller.prototype.addGetList = function(){
	TTNAttrPair_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("firm_id",options));
	pm.addParam(new FieldString("firm_descr",options));
	pm.addParam(new FieldInt("warehouse_id",options));
	pm.addParam(new FieldString("warehouse_descr",options));
}

			TTNAttrPair_Controller.prototype.addGetObject = function(){
	TTNAttrPair_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		