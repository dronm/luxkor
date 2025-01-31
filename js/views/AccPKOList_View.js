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
function AccPKOList_View(id,options){
	options = options || {};
	options.title = "ПКО";
	AccPKOList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new AccPKO_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_date_time_descr",{"value":"Дата",
		"readBind":{"valueFieldId":"date_time_descr"},"descrCol":true,
		"sortable":true,"sort":"desc","sortCol":"date_time"
		}));
	row.addElement(new GridDbHeadCell(id+"_col_acc_pko_type_descr",{"value":"Тип",
		"readBind":{"valueFieldId":"acc_pko_type_descr"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_order_list",{"value":"Номера заявок",
		"readBind":{"valueFieldId":"order_list"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_total",{"value":"Сумма",
		"colAttrs":{"align":"right"},
		"readBind":{"valueFieldId":"total"}
		}));				
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"AccPKOList_Model",
		"editViewClass":WarehouseDialog_View,
		"editInline":false,
		"pagination":new GridPagination(id+":page",
			{"countPerPage":CONSTANT_VALS.grid_rows_per_page_count}),

		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noInsert":true,"noEdit":true,"noDelete":true,"noCopy":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"asyncEditRead":false,
		"winObj":options.winObj
		}
	));
}
extend(AccPKOList_View,ViewList);
