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
function EmailTemplateList_View(id,options){
	options = options || {};
	options.title = "Шаблоны эл.писем";
	EmailTemplateList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new EmailTemplate_Controller(options.connect);
			
	var head = new GridHead();
	var row = new GridRow("Driver_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{"value":"Код",
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_email_type_descr",{"value":"Тип",
		"readBind":{"valueFieldId":"email_type_descr"},
		"sortable":true,"sort":"asc"
		}));
	row.addElement(new GridDbHeadCell(id+"_col_mes_subject",{"value":"Тема",
		"readBind":{"valueFieldId":"mes_subject"}
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
		"readModelId":"EmailTemplateList_Model",
		"editViewClass":EmailTemplateListInline_View,
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
extend(EmailTemplateList_View,ViewList);