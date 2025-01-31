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
function DOCOrderDOCTProductList_View(id,options){
	options = options || {};
	DOCOrderDOCTProductList_View.superclass.constructor.call(this,
		id,options);
	
	var head = new GridHead();
	var row = new GridRowDOCT(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_product_descr",{"value":"Продукция",
		"readBind":{"valueFieldId":"product_descr"}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_pack_exists",{"value":"Упак.",
		"readBind":{"valueFieldId":"pack_exists"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_measure_unit_descr",{"value":"Ед-ца",
		"readBind":{"valueFieldId":"measure_unit_descr"},
		"colAttrs":{"align":"center"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_quant",{"value":"Кол-во",
		"readBind":{"valueFieldId":"quant"},
		"colAttrs":{"align":"right"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_price_descr",{"value":"Цена",
		"readBind":{"valueFieldId":"price_descr"},
		"colAttrs":{"align":"right"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_total_descr",{"value":"Сумма",
		"readBind":{"valueFieldId":"total_descr"},
		"colAttrs":{"align":"right"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_total",{
		"readBind":{"valueFieldId":"total"},"visible":false}));		
	row.addElement(new GridDbHeadCell(id+"_col_total_pack",{
		"readBind":{"valueFieldId":"total_pack"},"visible":false}));				
	row.addElement(new GridDbHeadCell(id+"_col_volume",{
		"readBind":{"valueFieldId":"volume"},"visible":false}));		
	row.addElement(new GridDbHeadCell(id+"_col_weight",{
		"readBind":{"valueFieldId":"weight"},"visible":false}));		
	row.addElement(new GridDbHeadCell(id+"_col_oper",{
		"readBind":{"valueFieldId":"oper"},
		"fieldValueToRowClass":true,"visible":false
		}));
		
	head.addElement(row);
	
	var grid = new GridDbDOCT(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":new DOCOrderDOCTProduct_Controller(new ServConnector(HOST_NAME)),
		"readModelId":"DOCOrderDOCTProductList_Model",
		"editViewClass":DOCOrderDOCTProductDialog_View,
		"editInline":false,
		"pagination":null,
		"commandPanel":new GridCommands(),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"editViewParams":{"warehouseCtrl":options.warehouseCtrl},
		"editWinClass":WIN_CLASS,
		"afterRefresh":options.afterRefresh,
		"onModified":options.onModified,
		"onDelete":options.onDelete
		}
	);
	grid.onGetData = function(resp){
		GridDbDOCT.superclass.onGetData.call(this,resp);
		if(options.afterRefresh)options.afterRefresh();
	}
	
	this.setGridControl(grid);	
}
extend(DOCOrderDOCTProductList_View,ViewDocumentDetail);

DOCOrderDOCTProductList_View.prototype.setWarehouseId=function(id){
	this.getGridControl().setEditViewParam("warehouseId",id);
}
DOCOrderDOCTProductList_View.prototype.setClientId=function(id){
	this.getGridControl().setEditViewParam("clientId",id);
}
DOCOrderDOCTProductList_View.prototype.setToThirdParty=function(val){
	this.getGridControl().setEditViewParam("toThirdParty",val);
}
DOCOrderDOCTProductList_View.prototype.setDelivAddToCost=function(val){
	this.getGridControl().setEditViewParam("delivAddToCost",val);
}
DOCOrderDOCTProductList_View.prototype.setDelivTotal=function(val){
	this.getGridControl().setEditViewParam("delivTotal",val);
}
DOCOrderDOCTProductList_View.prototype.getLineCount=function(){
	var b_n = this.getGridControl().getBody().m_node;
	if (b_n){
		return b_n.getElementsByTagName("tr").length;
	}
}
DOCOrderDOCTProductList_View.prototype.onRefresh=function(callBack){
	this.getGridControl().onRefresh(callBack);
}
