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

function SMSForSending_Controller(servConnector){
	options = {};
	options["listModelId"] = "SMSForSendingList_Model";
	SMSForSending_Controller.superclass.constructor.call(this,"SMSForSending_Controller",servConnector,options);	
	
	//methods
	this.addGetList();
	
}
extend(SMSForSending_Controller,ControllerDb);

			SMSForSending_Controller.prototype.addGetList = function(){
	SMSForSending_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("tel",options));
	pm.addParam(new FieldText("body",options));
	pm.addParam(new FieldDateTime("date_time",options));
	pm.addParam(new FieldBool("sent",options));
	pm.addParam(new FieldDateTime("sent_date_time",options));
	pm.addParam(new FieldBool("delivered",options));
	pm.addParam(new FieldDateTime("delivered_date_time",options));
	pm.addParam(new FieldEnum("sms_type",options));
	pm.addParam(new FieldText("sms_id",options));
}

		