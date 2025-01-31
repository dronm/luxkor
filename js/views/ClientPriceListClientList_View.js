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
function ClientPriceListClientList_View(id,options){
	options = options || {};
	options.title = "Прайс листы клиента";
	ClientPriceListClientList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new ClientPriceListClient_Controller(new ServConnector(HOST_NAME));
	
	//filter
	var filter = new ListFilter();
	filter.addFilter("client_id",{"sign":"e","keyFieldIds":["client_id"]});
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));			
	row.addElement(new GridDbHeadCell(id+"_col_client_price_list_descr",{"value":"Наименование",
		"readBind":{"valueFieldId":"client_price_list_descr"},"descrCol":true
		}));
		
	head.addElement(row);
	
	this.m_grid=new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ClientPriceListClientList_Model",
		"editViewClass":null,
		"editInline":true,
		"pagination":null,
		"commandPanel":new ClientPriceListClientGridCom(id+"_grid_cmd",{
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
extend(ClientPriceListClientList_View,ViewList);

ClientPriceListClientList_View.prototype.setClientId = function(id){
	this.m_grid.m_filter.m_params["client_id"].key=id;
	this.m_grid.m_methParams["client_id"] = id;
	this.m_grid.m_autoRefresh = true;	
	this.m_grid.getCommandPanel().client_id=id;
}