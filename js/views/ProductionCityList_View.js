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
function ProductionCityList_View(id,options){
	options = options || {};
	options.title = "Города отгрузки";
	ProductionCityList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ProductionCity_Controller(new ServConnector(HOST_NAME));
			
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{"visible":false,
		"readBind":{"valueFieldId":"id"},"keyCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true,
		"sortable":true,"sort":"asc"
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ProductionCityList_Model",
		"editViewClass":ProductionCityDialog_View,
		"editInline":false,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_commands",{"controller":controller,
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"asyncEditRead":false,
		"winObj":options.winObj
		}
	));
}
extend(ProductionCityList_View,ViewList);