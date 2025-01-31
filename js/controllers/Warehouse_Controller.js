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

function Warehouse_Controller(servConnector){
	options = {};
	options["listModelId"] = "WarehouseList_Model";
	options["objModelId"] = "WarehouseDialog_Model";
	Warehouse_Controller.superclass.constructor.call(this,"Warehouse_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_get_list_for_order();
	
}
extend(Warehouse_Controller,ControllerDb);

			Warehouse_Controller.prototype.addInsert = function(){
	Warehouse_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldGeomPolygon("zone",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("default_firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lon",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lat",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("address",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("tel",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("email",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deleted",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			Warehouse_Controller.prototype.addUpdate = function(){
	Warehouse_Controller.superclass.addUpdate.call(this);
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
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldGeomPolygon("zone",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("default_firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lon",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lat",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("address",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("tel",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("email",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deleted",options);
	
	pm.addParam(param);
	
	
}

			Warehouse_Controller.prototype.addDelete = function(){
	Warehouse_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Warehouse_Controller.prototype.addGetList = function(){
	Warehouse_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldBool("deleted",options));
}

			Warehouse_Controller.prototype.addGetObject = function(){
	Warehouse_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			Warehouse_Controller.prototype.add_get_list_for_order = function(){
	var pm = this.addMethodById('get_list_for_order');
	
				
		pm.addParam(new FieldInt("product_id"));
	
			
}

		