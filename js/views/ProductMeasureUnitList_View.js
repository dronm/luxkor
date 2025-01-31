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
function ProductMeasureUnitList_View(id,options){
	options = options || {};
	//options.title = "Единицы продукции";
	ProductMeasureUnitList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ProductMeasureUnit_Controller(new ServConnector(HOST_NAME));
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("product_id",{"sign":"e","keyFieldIds":["product_id"]});
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_product_id",{
		"readBind":{"valueFieldId":"product_id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_measure_unit_id",{
		"readBind":{"valueFieldId":"measure_unit_id"},"keyCol":true,
		"visible":false
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_measure_unit_descr",{"value":"Единица",
		"readBind":{"valueFieldId":"measure_unit_descr"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_in_use",{"value":"Используется",
		"readBind":{"valueFieldId":"in_use"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_calc_formula",{"value":"Формула",
		"readBind":{"valueFieldId":"calc_formula"}
		}));
		
	head.addElement(row);
	this.m_grid = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ProductMeasureUnit_Model",
		"editViewClass":ProductMeasureUnitInline_View,
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
extend(ProductMeasureUnitList_View,ViewList);

ProductMeasureUnitList_View.prototype.setProductId = function(id){
	this.m_grid.m_filter.m_params["product_id"].key=id;
	this.m_grid.m_methParams["product_id"] = id;
	this.m_grid.m_autoRefresh = true;
}