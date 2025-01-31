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
function UserWarehouseList_View(id,options){
	options = options || {};
	options.title = "Склады пользователя";
	options.viewContClassName = "panel panel-default";
	UserWarehouseList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new UserWarehouse_Controller(options.connect);
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("user_id",{"sign":"e","keyFieldIds":["user_id"]});
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_user_id",{
		"readBind":{"valueFieldId":"user_id"},
		"visible":false
		}));				
	row.addElement(new GridDbHeadCell(id+"_col_warehouse_descr",{"value":"Склад",
		"readBind":{"valueFieldId":"warehouse_descr"},"descrCol":true
		}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"get_list",
		"readModelId":"UserWarehouseList_Model",
		"editViewClass":UserWarehouseInline_View,
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
		"methParams":{"user_id":null},
		"enabled":options.enabled
		}
	);	
	this.addElement(this.m_grid);
}
extend(UserWarehouseList_View,ViewList);

UserWarehouseList_View.prototype.setUserId = function(id){
	//console.log("setting user id="+id);
	this.m_grid.m_filter.m_params["user_id"].key=id;
	this.m_grid.m_methParams["user_id"] = id;
	this.m_grid.m_autoRefresh = true;	
}
