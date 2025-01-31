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
function CarrierList_View(id,options){
	options = options || {};
	//options.title = "Перевозчики";
	CarrierList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Carrier_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_client_id",{
		"readBind":{"valueFieldId":"client_id"},"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_client_descr",{"value":"Реквизиты",
		"readBind":{"valueFieldId":"client_descr"}
		}));
		
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"CarrierList_Model",
		"editViewClass":CarrierInline_View,
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
extend(CarrierList_View,ViewList);
