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
function DelivCostOptList_View(id,options){
	options = options || {};
	options.title = "Ценовые категории.";
	DelivCostOptList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new DelivCostOpt_Controller(new ServConnector(HOST_NAME));
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},
		"visible":false,"keyCol":true
		}));	
	row.addElement(new GridDbHeadCell(id+"_col_descr",{"value":"Наименование",
		"readBind":{"valueFieldId":"descr"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_volume_m",{"value":"Объем,м3",
		"readBind":{"valueFieldId":"volume_m"},
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_weight_t",{"value":"Груз-ть,т",
		"readBind":{"valueFieldId":"weight_t"},
		"colAttrs":{"align":"center"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"DelivCostOptList_Model",
		"editViewClass":DelivCostOptInline_View,
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
extend(DelivCostOptList_View,ViewList);