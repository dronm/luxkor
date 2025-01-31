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

function CustomerSurveyQuestion_Controller(servConnector){
	options = {};
	options["listModelId"] = "CustomerSurveyQuestion_Model";
	options["objModelId"] = "CustomerSurveyQuestion_Model";
	CustomerSurveyQuestion_Controller.superclass.constructor.call(this,"CustomerSurveyQuestion_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(CustomerSurveyQuestion_Controller,ControllerDb);

			CustomerSurveyQuestion_Controller.prototype.addInsert = function(){
	CustomerSurveyQuestion_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldText("question",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("max_points",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("in_use",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			CustomerSurveyQuestion_Controller.prototype.addUpdate = function(){
	CustomerSurveyQuestion_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("question",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("max_points",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("in_use",options);
	
	pm.addParam(param);
	
	
}

			CustomerSurveyQuestion_Controller.prototype.addDelete = function(){
	CustomerSurveyQuestion_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			CustomerSurveyQuestion_Controller.prototype.addGetList = function(){
	CustomerSurveyQuestion_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldText("question",options));
	pm.addParam(new FieldInt("max_points",options));
	pm.addParam(new FieldBool("in_use",options));
}

			CustomerSurveyQuestion_Controller.prototype.addGetObject = function(){
	CustomerSurveyQuestion_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		