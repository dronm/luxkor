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

function SaleStoreAddress_Controller(servConnector){
	options = {};
	options["listModelId"] = "SaleStoreAddress_Model";
	options["objModelId"] = "SaleStoreAddress_Model";
	SaleStoreAddress_Controller.superclass.constructor.call(this,"SaleStoreAddress_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(SaleStoreAddress_Controller,ControllerDb);

			SaleStoreAddress_Controller.prototype.addInsert = function(){
	SaleStoreAddress_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="Код";
	var param = new FieldString("code",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Наименование адреса";
	var param = new FieldText("name",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			SaleStoreAddress_Controller.prototype.addUpdate = function(){
	SaleStoreAddress_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Код";
	var param = new FieldString("code",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Наименование адреса";
	var param = new FieldText("name",options);
	
	pm.addParam(param);
	
	
}

			SaleStoreAddress_Controller.prototype.addDelete = function(){
	SaleStoreAddress_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			SaleStoreAddress_Controller.prototype.addGetList = function(){
	SaleStoreAddress_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("code",options));
	pm.addParam(new FieldText("name",options));
}

			SaleStoreAddress_Controller.prototype.addGetObject = function(){
	SaleStoreAddress_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		