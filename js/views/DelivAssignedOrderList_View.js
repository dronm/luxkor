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
function DelivAssignedOrderList_View(id,options){
	options = options || {};
	options.title = "Распределение доставок";
	DelivAssignedOrderList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Delivery_Controller(new ServConnector(HOST_NAME));
	
	this.m_grid = new DelivAssignedOrderGridDb(id+"_grid",
		{"head":new GridHead(),
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"assigned_orders_list",
		"readModelId":"assigned_orders_list",
		"editViewClass":null,
		"editInline":null,
		"pagination":null,
		"commandPanel":
			(SERV_VARS.ROLE_ID=="client")? null:
			new DelivAssignedOrderGridCommands(id+"_cmd",{
				"controller":controller
			}),
		"rowCommandPanelClass":null,
		"filter":options.filter,
		"refreshInterval":0,//CONSTANT_VALS.db_controls_refresh_sec*1000,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	);
	this.m_grid.SELECTED_CLASS="selected_veh";
	this.addElement(this.m_grid);
}
extend(DelivAssignedOrderList_View,ViewList);