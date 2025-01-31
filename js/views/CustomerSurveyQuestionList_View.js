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
function CustomerSurveyQuestionList_View(id,options){
	options = options || {};
	options.title = "Список вопросов для опроса";
	CustomerSurveyQuestionList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new CustomerSurveyQuestion_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_question",{"value":"Вопрос",
		"readBind":{"valueFieldId":"question"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_max_points",{"value":"Макс.кол-во баллов",
		"readBind":{"valueFieldId":"max_points"},
		"colAttrs":{"align":"center"}
		}));		
	row.addElement(new GridDbHeadCellBool(id+"_col_in_use",{"value":"Активен",
		"readBind":{"valueFieldId":"in_use"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"CustomerSurveyQuestion_Model",
		"editViewClass":CustomerSurveyQuestionInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));
}
extend(CustomerSurveyQuestionList_View,ViewList);