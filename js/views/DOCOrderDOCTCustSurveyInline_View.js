/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/View.js
*/

/* constructor */
function DOCOrderDOCTCustSurveyInline_View(id,options){
	options = options || {};
	DOCOrderDOCTCustSurveyInline_View.superclass.constructor.call(this,
		id,options);
		
	var model = "DOCOrderDOCTCustSurveyList_Model";
		
	this.addDataControl(new CustSurvQuesionEditObject("customer_survey_question_id",id+"_customer_survey_question",true),
		{"modelId":model,
		"valueFieldId":"customer_survey_question_descr",
		"keyFieldIds":["customer_survey_question_id"]},
		{"valueFieldId":null,"keyFieldIds":["customer_survey_question_id"]}
	);
	
	this.addDataControl(
		new EditNum(id+"_points",
		{"name":"points","attrs":{"maxlength":5,"size":2,"required":"required"}}
		),
		{"modelId":model,
		"valueFieldId":"points",
		"keyFieldIds":null},
		{"valueFieldId":"points","keyFieldIds":null}
	);
	this.addDataControl(
		new EditText(id+"_answer_comment",
		{"name":"answer_comment","rows":"3"}
		),
		{"modelId":model,
		"valueFieldId":"answer_comment",
		"keyFieldIds":null},
		{"valueFieldId":"answer_comment","keyFieldIds":null}
	);
	
}
extend(DOCOrderDOCTCustSurveyInline_View,ViewInlineGridEditDOCT);