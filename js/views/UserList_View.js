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
function UserList_View(id,options){
	options = options || {};
	options.title = "Пользователи";
	UserList_View.superclass.constructor.call(this,
		id,options);
		
	var controller = new User_Controller(new ServConnector(HOST_NAME));
	var head = new GridHead();
	var row = new GridRow("UserList_row1");	
	row.addElement(new GridDbHeadCell("UserList_col_id",{"value":"Код",
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell("UserList_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell("UserList_col_role_descr",{"value":"Роль",
	"readBind":{"valueFieldId":"role_descr"}}));
	row.addElement(new GridDbHeadCell("UserList_col_warehouse_descr",{"value":"Подразд.",
	"readBind":{"valueFieldId":"warehouse_descr"}}));
	
	row.addElement(new GridDbHeadCellBool("UserList_col_match_1c",{"value":"Соотв.1с",
	"readBind":{"valueFieldId":"match_1c"}}));
	
	head.addElement(row);
	
	this.addElement(new GridDb("grid_UserList",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"UserList_Model",
		"editViewClass":UserDialog_View,
		"editInline":false,
		"pagination":null,
		"commandPanel":new GridCommands("UserListCommands",{"controller":controller}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));
}
extend(UserList_View,ViewList);