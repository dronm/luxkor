/* Copyright (c) 2015 
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
function ActivityTypeList_View(id,options){
	options = options || {};
	options.title = "Виды деятельности";
	ActivityTypeList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Warehouse_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_production_city_descr",{"value":"Город",
		"readBind":{"valueFieldId":"production_city_descr"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_address",{"value":"Адрес",
		"readBind":{"valueFieldId":"address"}
		}));				
	row.addElement(new GridDbHeadCell(id+"_firm_descr",{"value":"Организация",
		"readBind":{"valueFieldId":"firm_descr"}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_on_map",{"value":"Объект на карте",
		"readBind":{"valueFieldId":"on_map"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"WarehouseList_Model",
		"editViewClass":WarehouseDialog_View,
		"editInline":false,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"asyncEditRead":false,
		"winObj":options.winObj
		}
	));
}
extend(ActivityTypeList_View,ViewList);