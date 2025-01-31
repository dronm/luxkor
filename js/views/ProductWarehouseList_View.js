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
function ProductWarehouseList_View(id,options){
	options = options || {};
	//options.title = "Склады продукции";
	ProductWarehouseList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ProductWarehouse_Controller(new ServConnector(HOST_NAME));
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("product_id",{"sign":"e","keyFieldIds":["product_id"]});
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_product_id",{
		"readBind":{"valueFieldId":"product_id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_warehouse_id",{
		"readBind":{"valueFieldId":"warehouse_id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_warehouse_descr",{"value":"Наименование",
		"readBind":{"valueFieldId":"warehouse_descr"},"descrCol":true
		}));
		
	head.addElement(row);
	this.m_grid = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ProductWarehouseList_Model",
		"editViewClass":ProductWarehouseInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true,"noExport":true}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"noAutoRefresh":true,
		"methParams":{"product_id":null},
		"enabled":options.enabled
		}
	);
	this.addElement(this.m_grid);
}
extend(ProductWarehouseList_View,ViewList);

ProductWarehouseList_View.prototype.setProductId = function(id){
	this.m_grid.m_filter.m_params["product_id"].key=id;
	this.m_grid.m_methParams["product_id"] = id;
	this.m_grid.m_autoRefresh = true;
}