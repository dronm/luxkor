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

function Bank_Controller(servConnector){
	options = {};
	options["listModelId"] = "BankList_Model";
	options["objModelId"] = "BankList_Model";
	Bank_Controller.superclass.constructor.call(this,"Bank_Controller",servConnector,options);	
	
	//methods
	this.addGetList();
	this.addGetObject();
	this.addComplete();
	
}
extend(Bank_Controller,ControllerDb);

			Bank_Controller.prototype.addGetList = function(){
	Bank_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldString("bik",options));
	pm.addParam(new FieldString("codegr",options));
	pm.addParam(new FieldString("gr_descr",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldString("korshet",options));
	pm.addParam(new FieldString("adres",options));
	pm.addParam(new FieldString("gor",options));
	pm.addParam(new FieldInt("tgoup",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("codegr,bik");
	
}

			Bank_Controller.prototype.addGetObject = function(){
	Bank_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldString("bik",options));
}

			Bank_Controller.prototype.addComplete = function(){
	Bank_Controller.superclass.addComplete.call(this);
	
	var options = {};
	
	var pm = this.getComplete();
	pm.addParam(new FieldString("bik",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("bik");
}

		