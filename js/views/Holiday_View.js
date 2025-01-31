/* Copyright (c) 2016 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function Holiday_View(id,options){
	options = options || {};
	options.title = "Праздники";
	Holiday_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Holiday_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_date",{
		"readBind":{"valueFieldId":"date"},"keyCol":true,
		"visible":false
		}));	
	row.addElement(new GridDbHeadCell(id+"_col_date",{"value":"Дата",
		"readBind":{"valueFieldId":"date_str"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"HolidayList_Model",
		"editViewClass":HolidayInline_View,
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
extend(Holiday_View,ViewList);
