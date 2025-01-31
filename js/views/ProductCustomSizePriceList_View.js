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
function ProductCustomSizePriceList_View(id,options){
	options = options || {};
	//options.title = "Наценка на продукцию";
	ProductCustomSizePriceList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ProductCustomSizePrice_Controller(new ServConnector(HOST_NAME));
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("product_id",{"sign":"e","keyFieldIds":["product_id"]});
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_product_id",{
		"readBind":{"valueFieldId":"product_id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_category",{"value":"Категория",
		"readBind":{"valueFieldId":"category"},"keyCol":true,"descrCol":true,
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_quant",{"value":"При количестве больше",
		"readBind":{"valueFieldId":"quant"},
		"colAttrs":{"align":"right"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_price",{"value":"Наценка, руб. за базовую единицу",
		"readBind":{"valueFieldId":"price"},
		"colAttrs":{"align":"right"}
		}));
		
	head.addElement(row);
	this.m_grid = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ProductCustomSizePrice_Model",
		"editViewClass":ProductCustomSizePriceInline_View,
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
extend(ProductCustomSizePriceList_View,ViewList);

ProductCustomSizePriceList_View.prototype.setProductId = function(id){
	this.m_grid.m_filter.m_params["product_id"].key=id;
	this.m_grid.m_methParams["product_id"] = id;
	this.m_grid.m_autoRefresh = true;
}