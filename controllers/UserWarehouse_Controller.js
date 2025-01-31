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

function UserWarehouse_Controller(servConnector){
	options = {};
	options["listModelId"] = "UserWarehouseList_Model";
	options["objModelId"] = "UserWarehouseList_Model";
	UserWarehouse_Controller.superclass.constructor.call(this,"UserWarehouse_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(UserWarehouse_Controller,ControllerDb);

			UserWarehouse_Controller.prototype.addInsert = function(){
	UserWarehouse_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			UserWarehouse_Controller.prototype.addUpdate = function(){
	UserWarehouse_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	
}

			UserWarehouse_Controller.prototype.addDelete = function(){
	UserWarehouse_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			UserWarehouse_Controller.prototype.addGetList = function(){
	UserWarehouse_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("user_id",options));
	pm.addParam(new FieldInt("warehouse_id",options));
	pm.addParam(new FieldString("warehouse_descr",options));
}

			UserWarehouse_Controller.prototype.addGetObject = function(){
	UserWarehouse_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		