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
function ClientDebtPeriodList_View(id,options){
	options = options || {};
	options.title = "Периоды задолженности";
	ClientDebtPeriodList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientDebtPeriod_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_days_from",{
		"value":"От",
		"readBind":{"valueFieldId":"days_from"},"keyCol":true,
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_days_to",{
		"value":"До",
		"readBind":{"valueFieldId":"days_to"},
		"colAttrs":{"align":"center"}
		}));		
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ClientDebtPeriodList_Model",
		"editViewClass":ClientDebtPeriodInline_View,
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
extend(ClientDebtPeriodList_View,ViewList);