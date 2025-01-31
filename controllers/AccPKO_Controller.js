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

function AccPKO_Controller(servConnector){
	options = {};
	options["listModelId"] = "AccPKOList_Model";
	options["objModelId"] = "AccPKOList_Model";
	AccPKO_Controller.superclass.constructor.call(this,"AccPKO_Controller",servConnector,options);	
	
	//methods
	this.addGetList();
	this.addGetObject();
	
}
extend(AccPKO_Controller,ControllerDb);

			AccPKO_Controller.prototype.addGetList = function(){
	AccPKO_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldDateTime("date_time",options));
	pm.addParam(new FieldString("date_time_descr",options));
	pm.addParam(new FieldEnum("acc_pko_type",options));
	pm.addParam(new FieldString("acc_pko_type_descr",options));
	pm.addParam(new FieldFloat("total",options));
	pm.addParam(new FieldText("order_list",options));
}

			AccPKO_Controller.prototype.addGetObject = function(){
	AccPKO_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		