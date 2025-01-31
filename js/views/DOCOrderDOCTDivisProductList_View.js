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
function DOCOrderDOCTDivisProductList_View(id,options){
	options = options || {};
	DOCOrderDOCTDivisProductList_View.superclass.constructor.call(this,
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
	
	var col_quant = new GridDbHeadCell(id+"_col_quant",{"value":"Кол-во",
		"readBind":{"valueFieldId":"quant"},
		"colAttrs":{"align":"right"}
	});	
	var col_mu = new GridDbHeadCell(id+"_col_measure_unit_descr",{"value":"Наим.",
		"readBind":{"valueFieldId":"measure_unit_descr"},
		"colAttrs":{"align":"center"}
		});	
	var col_price = new GridDbHeadCell(id+"_col_price_descr",{"value":"Цена",
		"readBind":{"valueFieldId":"price_descr"},
		"colAttrs":{"align":"right"}
	});
	var col_doc_mu = new GridDbHeadCell(id+"_col_doc_measure_unit_descr",{"value":"Наим.",
		"readBind":{"valueFieldId":"doc_measure_unit_descr"},
		"colAttrs":{"align":"center"}
		});	
	var col_doc_quant = new GridDbHeadCell(id+"_col_doc_quant",{"value":"Кол-во",
		"readBind":{"valueFieldId":"doc_quant"},
		"colAttrs":{"align":"right"}
	});	
	
	row.addElement(new GridDbHeadCell(id+"_col_product_descr",{"value":"Продукция",
		"readBind":{"valueFieldId":"product_descr"},
		"attrs":{"rowspan":"2"}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_pack_exists",{"value":"Упак.",
		"readBind":{"valueFieldId":"pack_exists"},
		"attrs":{"rowspan":"2"}
		}));
	//базовое
	row.addElement(new GridDbHeadCell("_col_base",{"value":"Базовая единица",
		"attrs":{"colspan":3},
		"colSpanArray":[col_mu,col_quant,col_price]
		}));
	//документ
	row.addElement(new GridDbHeadCell("_col_doc",{"value":"Единица док-та",
		"attrs":{"colspan":2},
		"colSpanArray":[col_doc_mu,col_doc_quant]
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_total_descr",{"value":"Сумма",
		"readBind":{"valueFieldId":"total_descr"},
		"colAttrs":{"align":"right"},
		"attrs":{"rowspan":"2"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_total",{
		"readBind":{"valueFieldId":"total"},"visible":false,
		"attrs":{"rowspan":"2"}}));
	row.addElement(new GridDbHeadCell(id+"_col_total_pack",{
		"readBind":{"valueFieldId":"total_pack"},"visible":false,
		"attrs":{"rowspan":"2"}}));
	row.addElement(new GridDbHeadCell(id+"_col_volume",{
		"readBind":{"valueFieldId":"volume"},"visible":false,
		"attrs":{"rowspan":"2"}}));
	row.addElement(new GridDbHeadCell(id+"_col_weight",{
		"readBind":{"valueFieldId":"weight"},"visible":false,
		"attrs":{"rowspan":"2"}}));
	row.addElement(new GridDbHeadCell(id+"_col_oper",{
		"readBind":{"valueFieldId":"oper"},
		"fieldValueToRowClass":true,"visible":false,
		"attrs":{"rowspan":"2"}
		}));
	
	row2.addElement(col_mu);
	row2.addElement(col_quant);
	row2.addElement(col_price);
	row2.addElement(col_doc_mu);
	row2.addElement(col_doc_quant);
	
	head.addElement(row);
	head.addElement(row2);
	
	var grid = new GridDbDOCT(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":new DOCOrderDOCTProduct_Controller(new ServConnector(HOST_NAME)),
		"readModelId":"DOCOrderDOCTProductList_Model",
		"editViewClass":DOCOrderDOCTDivisProductInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{
			"noInsert":true,"noCopy":true
		}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"editViewParams":{"delivTotal":0},
		"editWinClass":null,
		"afterRefresh":options.afterRefresh
		}
	);
	grid.onGetData = function(resp){
		GridDbDOCT.superclass.onGetData.call(this,resp);
		options.afterRefresh();
	}
	
	this.setGridControl(grid);	
}
extend(DOCOrderDOCTDivisProductList_View,ViewDocumentDetail);
/*
DOCOrderDOCTDivisProductList_View.prototype.setToThirdParty=function(val){
	this.getGridControl().setEditViewParam("toThirdParty",val);
}
DOCOrderDOCTDivisProductList_View.prototype.setDelivAddToCost=function(val){
	this.getGridControl().setEditViewParam("delivAddToCost",val);
}
DOCOrderDOCTDivisProductList_View.prototype.setDelivTotal=function(val){
	this.getGridControl().setEditViewParam("delivTotal",val);
}
*/
DOCOrderDOCTDivisProductList_View.prototype.getLineCount=function(){
	var b_n = this.getGridControl().getBody().m_node;
	if (b_n){
		return b_n.getElementsByTagName("tr").length;
	}
}
DOCOrderDOCTDivisProductList_View.prototype.onRefresh=function(){
	this.getGridControl().onRefresh();
}
