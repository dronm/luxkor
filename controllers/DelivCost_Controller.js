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

function DelivCost_Controller(servConnector){
	options = {};
	options["listModelId"] = "DelivCostList_Model";
	options["objModelId"] = "DelivCostList_Model";
	DelivCost_Controller.superclass.constructor.call(this,"DelivCost_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(DelivCost_Controller,ControllerDb);

			DelivCost_Controller.prototype.addInsert = function(){
	DelivCost_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_cost_opt_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("deliv_cost_type",options);
	options["values"] = 'city,country';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("cost",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			DelivCost_Controller.prototype.addUpdate = function(){
	DelivCost_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_cost_opt_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("deliv_cost_type",options);
	options["values"] = 'city,country';
	
	pm.addParam(param);
	
	param = new FieldEnum("old_deliv_cost_type",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("cost",options);
	
	pm.addParam(param);
	
	
}

			DelivCost_Controller.prototype.addDelete = function(){
	DelivCost_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldEnum("deliv_cost_type",options));
}

			DelivCost_Controller.prototype.addGetList = function(){
	DelivCost_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("production_city_id",options));
	pm.addParam(new FieldString("production_city_descr",options));
	pm.addParam(new FieldInt("deliv_cost_opt",options));
	pm.addParam(new FieldString("deliv_cost_opt_descr",options));
	pm.addParam(new FieldString("deliv_cost_type",options));
	pm.addParam(new FieldString("deliv_cost_type_descr",options));
	pm.addParam(new FieldFloat("cost",options));
}

			DelivCost_Controller.prototype.addGetObject = function(){
	DelivCost_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		