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

function ClientDebtPeriod_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientDebtPeriodList_Model";
	options["objModelId"] = "ClientDebtPeriod_Model";
	ClientDebtPeriod_Controller.superclass.constructor.call(this,"ClientDebtPeriod_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ClientDebtPeriod_Controller,ControllerDb);

			ClientDebtPeriod_Controller.prototype.addInsert = function(){
	ClientDebtPeriod_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("days_from",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("days_to",options);
	
	pm.addParam(param);
	
	
}

			ClientDebtPeriod_Controller.prototype.addUpdate = function(){
	ClientDebtPeriod_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("days_from",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_days_from",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("days_to",options);
	
	pm.addParam(param);
	
	
}

			ClientDebtPeriod_Controller.prototype.addDelete = function(){
	ClientDebtPeriod_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("days_from",options));
}

			ClientDebtPeriod_Controller.prototype.addGetList = function(){
	ClientDebtPeriod_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("days_from",options));
	pm.addParam(new FieldInt("days_to",options));
	pm.addParam(new FieldString("days_descr",options));
}

			ClientDebtPeriod_Controller.prototype.addGetObject = function(){
	ClientDebtPeriod_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("days_from",options));
}

		