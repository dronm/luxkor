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

function CustomerSurvey_Controller(servConnector){
	options = {};
	options["listModelId"] = "CustomerSurveyList_Model";
	options["objModelId"] = "CustomerSurveyList_Model";
	CustomerSurvey_Controller.superclass.constructor.call(this,"CustomerSurvey_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(CustomerSurvey_Controller,ControllerDb);

			CustomerSurvey_Controller.prototype.addInsert = function(){
	CustomerSurvey_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	
}

			CustomerSurvey_Controller.prototype.addUpdate = function(){
	CustomerSurvey_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	
}

			CustomerSurvey_Controller.prototype.addDelete = function(){
	CustomerSurvey_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
}

			CustomerSurvey_Controller.prototype.addGetList = function(){
	CustomerSurvey_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
}

			CustomerSurvey_Controller.prototype.addGetObject = function(){
	CustomerSurvey_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
}

		