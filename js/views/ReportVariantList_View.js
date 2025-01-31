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
function ReportVariantList_View(id,options){
	options = options || {};
	//options.title = "Варианты отчета";
	ReportVariantList_View.superclass.constructor.call(this,
		id,options);
	
	//var controller = new ReportVariant_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":options.readController,
		"readModelId":"ReportVariant_Model",
		"editViewClass":ReportVariantInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{
			"noPrint":true,"noRefresh":true,
			"noCopy":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj,
		"methParams":options.methParams
		}
	));
}
extend(ReportVariantList_View,ViewList);
