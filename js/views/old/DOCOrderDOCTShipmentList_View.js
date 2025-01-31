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
function DOCOrderDOCTShipmentList_View(id,options){
	options = options || {};
	DOCOrderDOCTShipmentList_View.superclass.constructor.call(this,
		id,options);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	
	row.addElement(new GridDbHeadCell(id+"_col_view_id",{
		"readBind":{"valueFieldId":"view_id"},"keyCol":true,
		"visible":false,
		"attrs":{"rowspan":2}
		}));				
	
	row.addElement(new GridDbHeadCell(id+"_col_line_number",{"value":"№",
		"readBind":{"valueFieldId":"line_number"},"keyCol":true,
		"colAttrs":{"align":"center"},
		"attrs":{"rowspan":2}
		}));		
	
	var row2 = new GridRow(id+"_row2");

	var col_mu = new GridDbHeadCell(id+"_col_measure_unit_descr",{"value":"Наим.",
		"readBind":{"valueFieldId":"measure_unit_descr"},
		"colAttrs":{"align":"center"}
	});	
	var col_quant = new GridDbHeadCell(id+"_col_quant",{"value":"Кол.",
		"readBind":{"valueFieldId":"quant"},
		"colAttrs":{"align":"right"}
		});
	var col_quant_conf = new GridDbHeadCell(id+"_col_quant_confirmed_base_measure_unit",{"value":"Кол.отгр.",
		"readBind":{"valueFieldId":"quant_confirmed_base_measure_unit"},
		"colAttrs":{"align":"right"}
	});		
	var col_doc_mu = new GridDbHeadCell(id+"_col_doc_measure_unit_descr",{"value":"Наим.",
		"readBind":{"valueFieldId":"doc_measure_unit_descr"},
		"colAttrs":{"align":"center"}
	});
	var col_doc_quant = new GridDbHeadCell(id+"_col_doc_quant",{"value":"Кол.",
		"readBind":{"valueFieldId":"doc_quant"},
		"colAttrs":{"align":"right"}
	});
	var col_doc_quant_conf = new GridDbHeadCell(id+"_col_quant_confirmed_measure_unit",{"value":"Кол.отгр.",
		"readBind":{"valueFieldId":"quant_confirmed_measure_unit"},
		"colAttrs":{"align":"right"}
	});	
	row.addElement(new GridDbHeadCell(id+"_col_product_descr",{"value":"Продукция",
		"readBind":{"valueFieldId":"product_descr"},
		"attrs":{"rowspan":"2"}
		}));	
	//базовое
	row.addElement(new GridDbHeadCell("_col_base",{"value":"Базовая единица",
		"attrs":{"colspan":3},
		"colSpanArray":[col_mu,col_quant,col_quant_conf]
		}));
	//документ
	row.addElement(new GridDbHeadCell("_col_doc",{"value":"Единица док-та",
		"attrs":{"colspan":3},
		"colSpanArray":[col_doc_mu,col_doc_quant,col_doc_quant_conf]
		}));
		
	row2.addElement(col_mu);
	row2.addElement(col_quant);
	row2.addElement(col_quant_conf);
	row2.addElement(col_doc_mu);
	row2.addElement(col_doc_quant);
	row2.addElement(col_doc_quant_conf);
	
	head.addElement(row);
	head.addElement(row2);
	
	this.setGridControl(new GridDbDOCT(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":new DOCOrderDOCTProduct_Controller(new ServConnector(HOST_NAME)),
		"readModelId":"DOCOrderDOCTProductList_Model",
		"editViewClass":DOCOrderDOCTShipmentInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{
			"noInsert":true,"noCopy":true,"noDelete":true,
			"noPrint":true,"noRefresh":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));	
}
extend(DOCOrderDOCTShipmentList_View,ViewDocumentDetail);
