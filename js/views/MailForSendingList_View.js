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
function MailForSendingList_View(id,options){
	options = options || {};
	options.title = "СМС сообщения";
	MailForSendingList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new MailForSending_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_date_time_descr",{"value":"Дата",
		"readBind":{"valueFieldId":"date_time_descr"},
		"sortable":true,"sort":"desc","sortCol":"date_time",
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_email_type_descr",{"value":"Тип",
		"readBind":{"valueFieldId":"email_type_descr"},
		"sortable":true,"sortCol":"email_type",
		"colAttrs":{"align":"center"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_to_addr",{"value":"Получатель",
		"readBind":{"valueFieldId":"to_addr"},
		"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_body",{"value":"Содержание",
		"readBind":{"valueFieldId":"body"}
		}));
				
	row.addElement(new GridDbHeadCell(id+"_col_sent_date_time_descr",{"value":"Отправка",
		"readBind":{"valueFieldId":"sent_date_time_descr"},
		"sortable":true,"sortCol":"sent_date_time",
		"colAttrs":{"align":"center"}
		}));

	row.addElement(new GridDbHeadCell(id+"_col_send_error",{"value":"Ошибки отправки",
		"readBind":{"valueFieldId":"send_error"}
		}));
		
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"MailForSendingList_Model",
		"editViewClass":null,
		"editInline":null,
		"pagination":new GridPagination(id+"_page",
			{"countPerPage":CONSTANT_VALS.grid_rows_per_page_count}),
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true,
			"noInsert":true,
			"noEdit":true,
			"noCopy":true,
			"noDelete":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"asyncEditRead":true,
		"winObj":options.winObj
		}
	));
}
extend(MailForSendingList_View,ViewList);
