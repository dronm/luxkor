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
function ProductList_View(id,options){
	options = options || {};
	options.title = "Продукция";
	ProductList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Product_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_measure_unit_descr",{"value":"Баз.единица",
		"readBind":{"valueFieldId":"measure_unit_descr"},
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_warehouses_descr",{"value":"Склады",
		"readBind":{"valueFieldId":"warehouses_descr"}
		}));
		
	row.addElement(new GridDbHeadCellBool(id+"_deleted",{"value":"Удален",
		"readBind":{"valueFieldId":"deleted"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ProductList_Model",
		"editViewClass":ProductDialog_View,
		"editInline":false,
		"pagination":new GridPagination(id+"_page",
			{"countPerPage":CONSTANT_VALS.grid_rows_per_page_count}),
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
extend(ProductList_View,ViewList);
