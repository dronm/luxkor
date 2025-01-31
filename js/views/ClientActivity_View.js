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
function ClientActivity_View(id,options){
	options = options || {};
	options.title = "Виды деятельности";
	ClientActivity_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientActivity_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"}
		}));
		
	row.addElement(new GridDbHeadCellBool(id+"_col_match_1c",{"value":"Соответствует 1с",
		"readBind":{"valueFieldId":"match_1c"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ClientActivityList_Model",
		"editViewClass":ClientActivityInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{
			"noPrint":true,
			"noCopy":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));
}
extend(ClientActivity_View,ViewList);