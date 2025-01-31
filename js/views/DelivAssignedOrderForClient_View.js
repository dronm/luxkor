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
function DelivAssignedOrderForClient_View(id,options){
	options = options || {};
	options.title = "Доставки клиента";
	DelivAssignedOrderForClient_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Delivery_Controller(new ServConnector(HOST_NAME));
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_order_id",{
		"readBind":{"valueFieldId":"order_id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_order_descr",{"value":"Документ",
		"readBind":{"valueFieldId":"order_descr"},"descrCol":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_vh_descr",{"value":"ТС",
		"readBind":{"valueFieldId":"vh_descr"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_driver_descr",{"value":"Водитель",
		"readBind":{"valueFieldId":"driver_descr"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_deliv_hour_descr",{"value":"Время доставки",
		"readBind":{"valueFieldId":"deliv_hour_descr"}
		}));
		
	head.addElement(row);
	
	this.m_grid = new DelivAssignedOrderForClientGridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"assigned_orders_for_client",
		"readModelId":"assigned_orders_for_client",
		"editViewClass":null,
		"editInline":null,
		"pagination":null,
		"commandPanel":null,
		"rowCommandPanelClass":null,
		"filter":options.filter,
		"refreshInterval":2*60*1000,//CONSTANT_VALS.db_controls_refresh_sec*1000,
		"onSelect":options.onSelect,
		"winObj":options.winObj,
		"asyncEditRead":false,
		"noAutoRefresh":true
		}
	);
	this.addElement(this.m_grid);
}
extend(DelivAssignedOrderForClient_View,ViewList);

/* constructor */
function DelivAssignedOrderForClientGridDb(id,options){
	options = options || {};
	DelivAssignedOrderForClientGridDb.superclass.constructor.call(this,
		id,options);		
}
extend(DelivAssignedOrderForClientGridDb,GridDbDOC);

DelivAssignedOrderForClientGridDb.prototype.onGetData = function(resp){
	DelivAssignedOrderForClientGridDb.superclass.onGetData.call(this,resp);
	
	this.m_autoRefresh = true;
	//проверим данные и добавим/удалим карту
	var n = this.getNode();
	var td = n.getElementsByTagName("td");
	if (td.length&&!this.m_deliveryView.m_map){
		this.m_deliveryView.addMap();
		this.m_deliveryView.m_mapCont.toDOM(this.m_deliveryView.getNode());
	}
	else if (!td.length&&this.m_deliveryView.m_map){
		this.m_deliveryView.m_mapCont.removeDOM();
		delete this.m_deliveryView.m_map;
	}			
}

DelivAssignedOrderForClientGridDb.prototype.selectRow = function(newRow,oldRow){
	DelivAssignedOrderForClientGridDb.superclass.selectRow.call(this,newRow,oldRow);
	
	if (this.m_selectedRowKeys&&this.m_deliveryView.m_map){
		var id = json2obj(this.m_selectedRowKeys).id;		
		this.m_deliveryView.m_map.setCurVehicleId(id);
	}
}
