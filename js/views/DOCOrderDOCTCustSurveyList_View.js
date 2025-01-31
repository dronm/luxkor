/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function DOCOrderDOCTCustSurveyList_View(id,options){
	options = options || {};
	DOCOrderDOCTCustSurveyList_View.superclass.constructor.call(this,
		id,options);
	
	var head = new GridHead();
	var row = new GridRowDOCT(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_customer_survey_question_descr",{"value":"Вопрос",
		"readBind":{"valueFieldId":"customer_survey_question_descr"}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_points",{"value":"Баллы",
		"readBind":{"valueFieldId":"points"},
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_answer_comment",{"value":"Комментарий",
		"readBind":{"valueFieldId":"answer_comment"}		
		}));
	head.addElement(row);
	
	this.setGridControl(new GridDbDOCT(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":new DOCOrderDOCTCustSurvey_Controller(new ServConnector(HOST_NAME)),
		"readModelId":"DOCOrderDOCTCustSurveyList_Model",
		"editViewClass":DOCOrderDOCTCustSurveyInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(null,{
			"noInsert":true,
			"noCopy":true,
			"noDelete":true,
			"noPrint":true,
			"noRefresh":true
		}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));	
}
extend(DOCOrderDOCTCustSurveyList_View,ViewDocumentDetail);