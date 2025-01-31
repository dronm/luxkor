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
function PayOrderList_View(id,options){
	options = options || {};
	options.title = "Оплата счетов";
	PayOrderList_View.superclass.constructor.call(this,
		id,options);
		
	var controller = new DOCOrder_Controller(new ServConnector(HOST_NAME));
	
	var filter = new GridFilter(id+"_filter");
	var period = new EditPeriodQuater(id+"_period");	
	filter.addFilterControl(period.getControlFrom(),
		{"sign":"ge","valueFieldId":"date_time"}
		);	
	filter.addFilterControl(period.getControlTo(),
		{"sign":"le","valueFieldId":"date_time"}
		);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{"value":"Код",
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_number",{"value":"Счет №",
		"readBind":{"valueFieldId":"number"},
		"colAttrs":{"align":"center"},
		"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_date_time_descr",{"value":"Дата",
		"readBind":{"valueFieldId":"date_time_descr"},
		"colAttrs":{"align":"center"},
		"sortable":true,"sort":"asc","sortCol":"date_time"
		}));
	row.addElement(new GridDbHeadCell(id+"_col_total_descr",{"value":"Сумма",
		"readBind":{"valueFieldId":"total_descr"},
		"colAttrs":{"align":"right"},
		"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_firm_descr",{"value":"Организация",
		"readBind":{"valueFieldId":"firm_descr"},
		"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_firm_id",{
		"readBind":{"valueFieldId":"firm_id"},
		"sortable":true,"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_state_descr",{"value":"Статус",
		"readBind":{"valueFieldId":"state_descr"},
		"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_state",{
		"readBind":{"valueFieldId":"state"},
		"visible":false,"fieldValueToRowClass":true
		}));
		
	head.addElement(row);
	
	var cont = new ControlContainer(this.getId()+"_panel","div",{"className":"panel"});
	
	cont.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"PayOrderList_Model",
		"readMethodId":"pay_orders_list",
		"editViewClass":null,
		"editInline":null,
		"pagination":new GridPagination(id+"_page",
			{"countPerPage":CONSTANT_VALS.grid_rows_per_page_count}),
		"commandPanel":new GridCommands(id+"_cmd",{
			"controller":controller,"noInsert":true,
			"noEdit":true,"noDelete":true,"noCopy":true}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"asyncEditRead":false
		}
	));
	
	this.addElement(cont);
}
extend(PayOrderList_View,ViewList);