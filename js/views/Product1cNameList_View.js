/* Copyright (c) 2022 
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
function Product1cNameList_View(id,options){
	options = options || {};
	options.title = "Наименовния для 1с по организациям";
	options.viewContClassName = "panel panel-default";
	Product1cNameList_View.superclass.constructor.call(this, id, options);
	
	var controller = new Product1cName_Controller(options.connect);
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("product_id",{"sign":"e","keyFieldIds":["product_id"]});
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_product_id",{
		"readBind":{"valueFieldId":"product_id"},
		"visible":false
		}));				
	row.addElement(new GridDbHeadCell(id+"_col_firm_descr",{"value":"Фирма",
		"readBind":{"valueFieldId":"firm_descr"},"descrCol":true
		}));

	row.addElement(new GridDbHeadCell(id+"_col_name_for_1c",{"value":"Наименования для 1с",
		"readBind":{"valueFieldId":"name_for_1c"},"descrCol":true
		}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"get_list",
		"readModelId":"Product1cNameList_Model",
		"editViewClass":Product1cNameInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_grid_cmd",{
			"tableId":id+"_grid"
		}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"rowSelect":true,
		"noAutoRefresh":true,
		"methParams":{"product_id":null},
		"enabled":options.enabled
		}
	);	
	this.addElement(this.m_grid);
}
extend(Product1cNameList_View,ViewList);

Product1cNameList_View.prototype.setProductId = function(id){
	console.log("setting product id="+id);
	this.m_grid.m_filter.m_params["product_id"].key=id;
	this.m_grid.m_methParams["product_id"] = id;
	this.m_grid.m_autoRefresh = true;	
}
