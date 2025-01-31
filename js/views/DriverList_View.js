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
function DriverList_View(id,options){
	options = options || {};
	//options.title = "Водители";
	DriverList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Driver_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"ФИО",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_drive_perm",{"value":"Вод.удост.",
		"readBind":{"valueFieldId":"drive_perm"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_cel_phone",{"value":"Телефон",
		"readBind":{"valueFieldId":"cel_phone"}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_match_1c",{"value":"Соотв.1с",
		"readBind":{"valueFieldId":"match_1c"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"DriverList_Model",
		"editViewClass":DriverInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj,
		"extraFields":["match_1c"]
		}
	));
}
extend(DriverList_View,ViewList);

DriverList_View.prototype.getFormWidth = function(){
	return "1250";
}
DriverList_View.prototype.getFormHeight = function(){
	return "600";
}

