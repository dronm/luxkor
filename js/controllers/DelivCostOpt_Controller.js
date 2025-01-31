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

function DelivCostOpt_Controller(servConnector){
	options = {};
	options["listModelId"] = "DelivCostOptList_Model";
	options["objModelId"] = "DelivCostOptList_Model";
	DelivCostOpt_Controller.superclass.constructor.call(this,"DelivCostOpt_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(DelivCostOpt_Controller,ControllerDb);

			DelivCostOpt_Controller.prototype.addInsert = function(){
	DelivCostOpt_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("volume_m",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("weight_t",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			DelivCostOpt_Controller.prototype.addUpdate = function(){
	DelivCostOpt_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("volume_m",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("weight_t",options);
	
	pm.addParam(param);
	
	
}

			DelivCostOpt_Controller.prototype.addDelete = function(){
	DelivCostOpt_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			DelivCostOpt_Controller.prototype.addGetList = function(){
	DelivCostOpt_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("volume_m",options));
	pm.addParam(new FieldFloat("weight_t",options));
	pm.addParam(new FieldString("descr",options));
}

			DelivCostOpt_Controller.prototype.addGetObject = function(){
	DelivCostOpt_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		