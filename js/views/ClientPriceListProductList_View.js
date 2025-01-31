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
function ClientPriceListProductList_View(id,options){
	options = options || {};
	options.title = "Цены на продукцию";
	ClientPriceListProductList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientPriceListProduct_Controller(new ServConnector(HOST_NAME));
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("price_list_id",{"sign":"e","keyFieldIds":["price_list_id"]});
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_price_list_id",{
		"readBind":{"valueFieldId":"price_list_id"},
		"keyCol":true,"visible":false}));				
	row.addElement(new GridDbHeadCell(id+"_col_product_id",{
		"readBind":{"valueFieldId":"product_id"},
		"keyCol":true,"visible":false
		}));				
	row.addElement(new GridDbHeadCell(id+"_col_product_descr",{"value":"Продукция",
		"readBind":{"valueFieldId":"product_descr"}}));		
	row.addElement(new GridDbHeadCell(id+"_col_measure_unit_descr",{"value":"Един.изм.",
		"readBind":{"valueFieldId":"measure_unit_descr"},
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_price",{"value":"Цена",
		"readBind":{"valueFieldId":"price"},
		"colAttrs":{"align":"right"}
		}));
	row.addElement(new GridDbHeadCell(id+"_discount_volume",{"value":"При объеме больше",
		"readBind":{"valueFieldId":"discount_volume"},
		"colAttrs":{"align":"right"}
		}));
	row.addElement(new GridDbHeadCell(id+"_discount_total",{"value":"Скидка,руб",
		"readBind":{"valueFieldId":"discount_total"},
		"colAttrs":{"align":"right"}
		}));
	row.addElement(new GridDbHeadCell(id+"_pack_price_descr",{"value":"Цена упаковки",
		"readBind":{"valueFieldId":"pack_price_descr"},
		"colAttrs":{"align":"right"}
		}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"get_list",
		"readModelId":"ClientPriceListProduct_Model",
		"editViewClass":ClientPriceListProductInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_grid_cmd",{
		"tableId":id+"_grid","noInsert":true
		}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"rowSelect":true,
		"noAutoRefresh":true,
		"methParams":{"price_list_id":null},		
		"enabled":options.enabled
		}
	);	
	this.addElement(this.m_grid);
}
extend(ClientPriceListProductList_View,ViewList);

ClientPriceListProductList_View.prototype.setPriceListId = function(id){
	this.m_grid.m_filter.m_params["price_list_id"].key=id;
	this.m_grid.m_methParams["price_list_id"] = id;
	this.m_grid.m_autoRefresh = true;	
}