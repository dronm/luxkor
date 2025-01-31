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

function DOCOrderDOCTCustSurvey_Controller(servConnector){
	options = {};
	options["listModelId"] = "DOCOrderDOCTCustSurveyList_Model";
	options["objModelId"] = "DOCOrderDOCTCustSurveyList_Model";
	DOCOrderDOCTCustSurvey_Controller.superclass.constructor.call(this,"DOCOrderDOCTCustSurvey_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(DOCOrderDOCTCustSurvey_Controller,ControllerDb);

			DOCOrderDOCTCustSurvey_Controller.prototype.addInsert = function(){
	DOCOrderDOCTCustSurvey_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("view_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("line_number",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("login_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("customer_survey_question_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("points",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("answer_comment",options);
	
	pm.addParam(param);
	
	
}

			DOCOrderDOCTCustSurvey_Controller.prototype.addUpdate = function(){
	DOCOrderDOCTCustSurvey_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldString("view_id",options);
	
	pm.addParam(param);
	
	param = new FieldString("old_view_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("line_number",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_line_number",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("login_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("customer_survey_question_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_customer_survey_question_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("points",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("answer_comment",options);
	
	pm.addParam(param);
	
	
}

			DOCOrderDOCTCustSurvey_Controller.prototype.addDelete = function(){
	DOCOrderDOCTCustSurvey_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
	pm.addParam(new FieldInt("customer_survey_question_id",options));
}

			DOCOrderDOCTCustSurvey_Controller.prototype.addGetList = function(){
	DOCOrderDOCTCustSurvey_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
		var options = {};
		
			options["required"]=true;
						
		pm.addParam(new FieldString("view_id",options));
	
}

			DOCOrderDOCTCustSurvey_Controller.prototype.addGetObject = function(){
	DOCOrderDOCTCustSurvey_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
}

		