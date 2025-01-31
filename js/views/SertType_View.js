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
function SertType_View(id,options){
	options = options || {};
	options.title = "Сертификаты";
	SertType_View.superclass.constructor.call(this,
		id,options);
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Описание",
		"readBind":{"valueFieldId":"name"},
		"descrCol":true}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":new SertType_Controller(new ServConnector(HOST_NAME)),
		"readModelId":"SertType_Model",
		"readMethodId":"get_list",
		"editViewClass":SertTypeDialog_View,
		"editInline":false,
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
extend(SertType_View,ViewList);