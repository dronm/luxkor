/* Copyright (c) 2016 
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
function ClientDebt_View(id,options){
	options = options || {};
	options.title = "Долги клиентов";
	
	ClientDebt_View.superclass.constructor.call(this,
		id,options);
		
	var controller = new Client_Controller(new ServConnector(HOST_NAME));
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	
	row.addElement(new GridDbHeadCell(id+"_col_id",{"value":"Код",
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_firm_descr",{"value":"Фирма",
		"readBind":{"valueFieldId":"firm_descr"},
		"colAttrs":{"align":"center"},"sortable":true,"sortCol":"firm_id",
		"sort":"asc"
		}));
	row.addElement(new GridDbHeadCell(id+"_col_client_descr",{"value":"Клиент",
		"readBind":{"valueFieldId":"client_descr"},
		"colAttrs":{"align":"center"},"sortable":true,"sortCol":"client_id"
		}));
	row.addElement(new GridDbHeadCell(id+"_col_client_debt_period_days_descr",{"value":"Период просрочки",
		"readBind":{"valueFieldId":"client_debt_period_days_descr"},
		"colAttrs":{"align":"center"},"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_days",{"value":"Дней просрочки",
		"readBind":{"valueFieldId":"days"},
		"colAttrs":{"align":"center"},"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_def_debt",{"value":"Просроченный долг",
		"readBind":{"valueFieldId":"def_debt"},
		"colAttrs":{"align":"center"},"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_debt_total",{"value":"Долг всего",
		"readBind":{"valueFieldId":"debt_total"},
		"colAttrs":{"align":"center"},"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_update_date_descr",{"value":"Дата обновления",
		"readBind":{"valueFieldId":"update_date_descr"},
		"colAttrs":{"align":"center"}
		}));
		
	
	head.addElement(row);
	
	var cmd = new GridCommands(id+"_grid_cmd",{"noInsert":true,"noEdit":true,"noCopy":true,"noDelete":true,"noRefresh":true});
	
	this.m_grid = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"readMethodId":"get_debt_list",
		"controller":controller,
		"readModelId":"ClientDebtList_Model",
		"editViewClass":null,
		"editInline":null,
		"pagination":null,
		"commandPanel":cmd,
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	);
	
	cmd.addElement(new BtnRefreshClientDebts({"grid":this.m_grid}));
	this.addElement(this.m_grid);
}
extend(ClientDebt_View,ViewList);
