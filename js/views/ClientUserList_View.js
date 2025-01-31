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
function ClientUserList_View(id,options){
	options = options || {};
	//options.title = "Ответственные лица";
	options.viewContClassName = "panel panel-default";
	ClientUserList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientUser_Controller(new ServConnector(HOST_NAME));
	
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
	row.addElement(new GridDbHeadCell(id+"_col_name_full",{"value":"ФИО",
		"readBind":{"valueFieldId":"name_full"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_email",{"value":"Email",
		"readBind":{"valueFieldId":"email"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_cel_phone",{"value":"Телефон",
		"readBind":{"valueFieldId":"cel_phone"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Логин",
		"readBind":{"valueFieldId":"name"}
		}));
	row.addElement(new GridDbHeadSysCell(id+"_col_sys",{"value":"..."}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ClientUserList_Model",
		"editViewClass":ClientUserInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_grid_cmd",{
		"tableId":id+"_grid"
		}),
		"rowCommandPanelClass":ClientUserGridRowCommands,
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
extend(ClientUserList_View,ViewList);

ClientUserList_View.prototype.setClientId = function(id){
	this.m_grid.m_filter.m_params["client_id"].key=id;
	this.m_grid.m_methParams["client_id"] = id;
	this.m_grid.m_autoRefresh = true;
}