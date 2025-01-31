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
function DeliveryHour_View(id,options){
	options = options || {};
	options.title = "Часы доставки";
	DeliveryHour_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new DeliveryHour_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_h_from",{"value":"С",
		"readBind":{"valueFieldId":"h_from"},
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_h_to",{"value":"По",
		"readBind":{"valueFieldId":"h_to"},
		"colAttrs":{"align":"center"}
		}));

		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"DeliveryHour_Model",
		"editViewClass":DeliveryHourInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));
}
extend(DeliveryHour_View,ViewList);