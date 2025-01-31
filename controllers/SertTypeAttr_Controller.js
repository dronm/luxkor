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

function SertTypeAttr_Controller(servConnector){
	options = {};
	options["listModelId"] = "SertTypeAttr_Model";
	options["objModelId"] = "SertTypeAttr_Model";
	SertTypeAttr_Controller.superclass.constructor.call(this,"SertTypeAttr_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(SertTypeAttr_Controller,ControllerDb);

			SertTypeAttr_Controller.prototype.addInsert = function(){
	SertTypeAttr_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("sert_type_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("attr_text",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("attr_val_norm",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("attr_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("attr_val_min",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("attr_val_max",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			SertTypeAttr_Controller.prototype.addUpdate = function(){
	SertTypeAttr_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("sert_type_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("attr_text",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("attr_val_norm",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("attr_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("attr_val_min",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("attr_val_max",options);
	
	pm.addParam(param);
	
	
}

			SertTypeAttr_Controller.prototype.addDelete = function(){
	SertTypeAttr_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			SertTypeAttr_Controller.prototype.addGetList = function(){
	SertTypeAttr_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("sert_type_id",options));
	pm.addParam(new FieldString("attr_text",options));
	pm.addParam(new FieldString("attr_val_norm",options));
	pm.addParam(new FieldString("attr_val",options));
	pm.addParam(new FieldFloat("attr_val_min",options));
	pm.addParam(new FieldFloat("attr_val_max",options));
}

			SertTypeAttr_Controller.prototype.addGetObject = function(){
	SertTypeAttr_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		