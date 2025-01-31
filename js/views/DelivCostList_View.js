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
function DelivCostList_View(id,options){
	options = options || {};
	options.title = "Тарифы по доставке";
	DelivCostList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new DelivCost_Controller(new ServConnector(HOST_NAME));
	
	var filter = new GridFilter();
	filter.addFilterControl(
		new ProductionCityEditObject("production_city_id",
			id+"_filter_production_city",false),
	{"sign":"e","valueFieldId":"production_city_id"}
	);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
		/*
	row.addElement(new GridDbHeadCell(id+"_col_production_city_id",{
		"readBind":{"valueFieldId":"deliv_cost_type"},
		"visible":false
		}));
	*/
	row.addElement(new GridDbHeadCell(id+"_col_production_city_descr",{"value":"Город",
		"readBind":{"valueFieldId":"production_city_descr"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_deliv_cost_opt_descr",{"value":"Категория цены",
		"readBind":{"valueFieldId":"deliv_cost_opt_descr"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_deliv_cost_type_descr",{"value":"Тип",
		"readBind":{"valueFieldId":"deliv_cost_type_descr"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_cost",{"value":"Цена",
		"readBind":{"valueFieldId":"cost"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_cost2",{"value":"Себест.",
		"readBind":{"valueFieldId":"cost2"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"DelivCostList_Model",
		"editViewClass":DelivCostInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));
}
extend(DelivCostList_View,ViewList);
