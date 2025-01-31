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

function ProductWarehouse_Controller(servConnector){
	options = {};
	options["listModelId"] = "ProductWarehouseList_Model";
	options["objModelId"] = "ProductWarehouseList_Model";
	ProductWarehouse_Controller.superclass.constructor.call(this,"ProductWarehouse_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ProductWarehouse_Controller,ControllerDb);

			ProductWarehouse_Controller.prototype.addInsert = function(){
	ProductWarehouse_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	
}

			ProductWarehouse_Controller.prototype.addUpdate = function(){
	ProductWarehouse_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_product_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_warehouse_id",{});
	pm.addParam(param);
	
	
}

			ProductWarehouse_Controller.prototype.addDelete = function(){
	ProductWarehouse_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("warehouse_id",options));
}

			ProductWarehouse_Controller.prototype.addGetList = function(){
	ProductWarehouse_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("warehouse_id",options));
	pm.addParam(new FieldString("warehouse_descr",options));
}

			ProductWarehouse_Controller.prototype.addGetObject = function(){
	ProductWarehouse_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("warehouse_id",options));
}

		