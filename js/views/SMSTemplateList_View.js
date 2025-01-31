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
function SMSTemplateList_View(id,options){
	options = options || {};
	options.title = "Шаблоны CMC";
	SMSTemplateList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new SMSTemplate_Controller(options.connect);
			
	var head = new GridHead();
	var row = new GridRow("Driver_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{"value":"Код",
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_sms_type_descr",{"value":"Тип",
		"readBind":{"valueFieldId":"sms_type_descr"},
		"sortable":true,"sort":"asc"
		}));
	row.addElement(new GridDbHeadCell(id+"_comment_text",{"value":"Описание",
		"readBind":{"valueFieldId":"comment_text"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_template",{"value":"Шаблон",
		"readBind":{"valueFieldId":"template"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_fields",{"value":"Поля",
		"readBind":{"valueFieldId":"fields"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"SMSTemplateList_Model",
		"editViewClass":SMSTemplateListInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{
			"noInsert":true,
			"noCopy":true,
			"noDelete":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"noExport":true
		}
	));
}
extend(SMSTemplateList_View,ViewList);