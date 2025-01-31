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

function MailForSending_Controller(servConnector){
	options = {};
	options["listModelId"] = "MailForSendingList_Model";
	MailForSending_Controller.superclass.constructor.call(this,"MailForSending_Controller",servConnector,options);	
	
	//methods
	this.addGetList();
	
}
extend(MailForSending_Controller,ControllerDb);

			MailForSending_Controller.prototype.addGetList = function(){
	MailForSending_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldDateTime("date_time",options));
	pm.addParam(new FieldString("from_addr",options));
	pm.addParam(new FieldString("from_name",options));
	pm.addParam(new FieldString("to_addr",options));
	pm.addParam(new FieldString("to_name",options));
	pm.addParam(new FieldString("reply_addr",options));
	pm.addParam(new FieldString("reply_name",options));
	pm.addParam(new FieldText("body",options));
	pm.addParam(new FieldString("sender_addr",options));
	pm.addParam(new FieldString("subject",options));
	pm.addParam(new FieldBool("sent",options));
	pm.addParam(new FieldDateTime("sent_date_time",options));
	pm.addParam(new FieldText("send_error",options));
	pm.addParam(new FieldEnum("email_type",options));
}

		