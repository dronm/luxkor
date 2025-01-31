/**
 *	Copyright (c) 2012,2019 
 *	Andrey Mikhalevich, Katren ltd.
 */
function ClientExtContractList_View(id,options){
	options = options || {};
	options.title = "Договоры контрагента";
	options.viewContClassName = "panel panel-default";
	ClientExtContractList_View.superclass.constructor.call(this,id,options);
	
	var controller = options.readController;//||new Client_Controller(options.connect);
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("client_id",{"sign":"e","keyFieldIds":["client_id"]});
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_ext_id",{
		"readBind":{"valueFieldId":"ext_id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"get_client_ext_contract_list",
		"readModelId":"ClientExtContractList_Model",
		"editViewClass":null,
		"editInline":null,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_grid_cmd",{
			"tableId":id+"_grid",
			"noInsert":true,
			"noEdit":true,
			"noCopy":true,
			"noDelete":true,
			"noExport":true
		}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"rowSelect":true,
		"noAutoRefresh":false,
		"enabled":options.enabled
		}
	);	
	this.addElement(this.m_grid);
}
extend(ClientExtContractList_View,ViewList);

