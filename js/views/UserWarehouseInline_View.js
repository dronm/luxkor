/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/View.js
*/

/* constructor */
function UserWarehouseInline_View(id,options){
	options = options || {};
	UserWarehouseInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model_id = "UserWarehouseList_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"visible":false,"name":"id"}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_user_id",{"visible":false,"name":"user_id"}),
		{"modelId":model_id,
		"valueFieldId":"user_id",
		"keyFieldIds":null},
		{"valueFieldId":"user_id","keyFieldIds":null}
	);
	
	this.addDataControl(new WarehouseEditObject("warehouse_id",id+"_warehouse",true),
		{"modelId":model_id,
		"valueFieldId":"warehouse_descr",
		"keyFieldIds":["warehouse_id"]},
		{"valueFieldId":null,"keyFieldIds":["warehouse_id"]}
	);
}
extend(UserWarehouseInline_View,ViewInlineGridEdit);