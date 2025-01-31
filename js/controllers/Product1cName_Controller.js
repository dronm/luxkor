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

function Product1cName_Controller(servConnector){
	options = {};
	options["listModelId"] = "Product1cNameList_Model";
	options["objModelId"] = "Product1cNameList_Model";
	Product1cName_Controller.superclass.constructor.call(this,"Product1cName_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(Product1cName_Controller,ControllerDb);

			Product1cName_Controller.prototype.addInsert = function(){
	Product1cName_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name_for_1c",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			Product1cName_Controller.prototype.addUpdate = function(){
	Product1cName_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name_for_1c",options);
	
	pm.addParam(param);
	
	
}

			Product1cName_Controller.prototype.addDelete = function(){
	Product1cName_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Product1cName_Controller.prototype.addGetList = function(){
	Product1cName_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("firm_id",options));
	pm.addParam(new FieldString("firm_descr",options));
	pm.addParam(new FieldString("name_for_1c",options));
}

			Product1cName_Controller.prototype.addGetObject = function(){
	Product1cName_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		