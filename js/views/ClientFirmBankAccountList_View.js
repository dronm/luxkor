/* Copyright (c) 2020 
 *	Andrey Mikhalevich, Katren ltd.
 
 * @requires controls/ViewList.js1
 *
 */
function ClientFirmBankAccountList_View(id,options){
	options = options || {};
	//options.title = "Ответственные лица";
	options.viewContClassName = "panel panel-default";
	ClientFirmBankAccountList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientFirmBankAccount_Controller(new ServConnector(HOST_NAME));
	
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
	row.addElement(new GridDbHeadCell(id+"_col_firm_id",{
		"readBind":{"valueFieldId":"firm_id"},
		"visible":false
		}));				
		
	row.addElement(new GridDbHeadCell(id+"_col_firm_descr",{"value":"Фирма",
		"readBind":{"valueFieldId":"firm_descr"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_ext_bank_account_descr",{"value":"Расчетный счет",
		"readBind":{"valueFieldId":"ext_bank_account_descr"}
		}));
	//row.addElement(new GridDbHeadSysCell(id+"_col_sys",{"value":"..."}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ClientFirmBankAccountList_Model",
		"editViewClass":ClientFirmBankAccountInline_View,
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
extend(ClientFirmBankAccountList_View,ViewList);

ClientFirmBankAccountList_View.prototype.setClientId = function(id){
	this.m_grid.m_filter.m_params["client_id"].key=id;
	this.m_grid.m_methParams["client_id"] = id;
	this.m_grid.m_autoRefresh = true;
}
