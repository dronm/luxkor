/* Copyright (c) 2024 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function ProdBatch1CList_View(id,options){
	options = options || {};
	options.title = "Партии продукции";
	ProdBatch1CList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ProdBatch_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_ext_id",{
		"readBind":{"valueFieldId":"ext_id"},"keyCol":true,
		"visible":false
		}));
	// row.addElement(new GridDbHeadCell(id+"_col_batch_date",{"value":"Дата",
	// 	"readBind":{"valueFieldId":"batch_date"},"descrCol":false,
	// 	"sortable":false
	// 	}));
	// row.addElement(new GridDbHeadCell(id+"_col_batch_num",{"value":"Номер",
	// 	"readBind":{"valueFieldId":"batch_num"},"descrCol":false,
	// 	"sortable":true,"sort":"desc","sortCol":"batch_num"
	// 	}));		
	// row.addElement(new GridDbHeadCell(id+"_col_prod_name",{"value":"Продукция",
	// 	"colAttrs":{"align":"right"},
	// 	"readBind":{"valueFieldId":"prod_name"}
	// 	}));				
	row.addElement(new GridDbHeadCell(id+"_col_batch_descr",{"value":"Партия",
		"colAttrs":{"align":"left"},
		"readBind":{"valueFieldId":"batch_descr"},
		"descrCol":true
		}));				
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ProdBatch1CList_Model",
		"readMethodId":"get_list",
		"editViewClass":null,
		"editInline":true,
		"pagination": null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noInsert":true,"noEdit":true,"noDelete":true,"noCopy":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"asyncEditRead":false,
		"winObj":options.winObj
		}
	));
}
extend(ProdBatch1CList_View,ViewList);
