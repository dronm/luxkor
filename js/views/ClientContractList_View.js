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
function ClientContractList_View(id,options){
	options = options || {};
	options.title = "Договоры контрагента";
	options.viewContClassName = "panel panel-default";
	ClientContractList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientContract_Controller(options.connect);
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("client_id",{"sign":"e","keyFieldIds":["client_id"]});
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_client_id",{
		"readBind":{"valueFieldId":"client_id"},
		"visible":false
		}));				
	row.addElement(new GridDbHeadCell(id+"_col_firm_descr",{"value":"Организация",
		"readBind":{"valueFieldId":"firm_descr"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_state_descr",{"value":"Состояние",
		"readBind":{"valueFieldId":"state_descr"},
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_number",{"value":"Номер",
		"readBind":{"valueFieldId":"number"},
		"colAttrs":{"align":"center"},
		"colAttrs":{"align":"center"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_date_from_descr",{"value":"Дата",
		"readBind":{"valueFieldId":"date_from_descr"},
		"colAttrs":{"align":"center"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_date_to_descr",{"value":"Срок действия",
		"readBind":{"valueFieldId":"date_to_descr"},
		"colAttrs":{"align":"center"}
		}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"get_list",
		"readModelId":"ClientContractList_Model",
		"editViewClass":ClientContractInline_View,
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
		"methParams":{"client_id":null},
		"enabled":options.enabled
		}
	);	
	this.addElement(this.m_grid);
}
extend(ClientContractList_View,ViewList);

ClientContractList_View.prototype.setClientId = function(id){
	this.m_grid.m_filter.m_params["client_id"].key=id;
	this.m_grid.m_methParams["client_id"] = id;
	this.m_grid.m_autoRefresh = true;	
}