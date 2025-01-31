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
function ClientPriceListList_View(id,options){
	options = options || {};
	options.title = "Прайс листы контрагента";
	options.viewContClassName = "panel panel-default";
	ClientPriceListList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientPriceList_Controller(new ServConnector(HOST_NAME));
	
	//filter
	//var filter = new ListFilter();
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_production_city_descr",{"value":"Город",
		"readBind":{"valueFieldId":"production_city_descr"}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_to_third_party_only",{"value":"Для трет.лиц",
		"readBind":{"valueFieldId":"to_third_party_only"}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_default_price_list",{"value":"По умолч.",
		"readBind":{"valueFieldId":"default_price_list"}
		}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ClientPriceListList_Model",
		"editViewClass":ClientPriceListDialog_View,
		"editInline":false,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_grid_cmd",{
		"tableId":id+"_grid"
		}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"rowSelect":true,
		"noAutoRefresh":false,
		"methParams":{"client_id":null},
		"enabled":options.enabled
		//"editWinClass":WIN_CLASS
		}
	);	
	this.addElement(this.m_grid);
}
extend(ClientPriceListList_View,ViewList);