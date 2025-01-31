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
function SertTypeAttr_View(id,options){
	options = options || {};
	
	SertTypeAttr_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new SertTypeAttr_Controller(options.connect);
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("sert_type_id",{"sign":"e","keyFieldIds":["sert_type_id"]});
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_sert_type_id",{
		"readBind":{"valueFieldId":"sert_type_id"},
		"visible":false
		}));				
	row.addElement(new GridDbHeadCell(id+"_col_attr_text",{"value":"Атрибут",
		"readBind":{"valueFieldId":"attr_text"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_attr_val",{"value":"Значение",
		"readBind":{"valueFieldId":"attr_val"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_attr_val_norm",{"value":"Норма",
		"readBind":{"valueFieldId":"attr_val_norm"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_attr_val_min",{"value":"Знач.от",
		"readBind":{"valueFieldId":"attr_val_min"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_attr_val_max",{"value":"Знач.до",
		"readBind":{"valueFieldId":"attr_val_max"}
		}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"get_list",
		"readModelId":"SertTypeAttr_Model",
		"editViewClass":SertTypeAttrInline_View,
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
		"methParams":{"sert_type_id":null},
		"enabled":options.enabled
		}
	);	
	this.addElement(this.m_grid);
}
extend(SertTypeAttr_View,ViewList);

SertTypeAttr_View.prototype.setSertTypeId = function(id){
	this.m_grid.m_filter.m_params["sert_type_id"].key=id;
	this.m_grid.m_methParams["sert_type_id"] = id;
	this.m_grid.m_autoRefresh = true;	
}