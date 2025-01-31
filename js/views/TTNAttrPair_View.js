/** Copyright (c) 2017 
	Andrey Mikhalevich, Katren ltd.
*/
function TTNAttrPair_View(id,options){
	options = options || {};
	
	TTNAttrPair_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new TTNAttrPair_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_firm",{
		"readBind":{"valueFieldId":"firm_id"},"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_firm_descr",{"value":"Фирма",
		"readBind":{"valueFieldId":"firm_descr"},"descrCol":true
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_warehouse",{
		"readBind":{"valueFieldId":"warehouse_id"},"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_warehouse_descr",{"value":"Склад",
		"readBind":{"valueFieldId":"warehouse_descr"},"descrCol":true
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"TTNAttrPairList_Model",
		"editViewClass":TTNAttrPairInline_View,
		"editInline":true,
		"pagination":null,
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
extend(TTNAttrPair_View,ViewList);
