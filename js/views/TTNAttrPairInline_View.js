/** Copyright (c) 2017
	Andrey Mikhalevich, Katren ltd.
 */
function TTNAttrPairInline_View(id,options){
	options = options || {};
	CarrierInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model_id = "TTNAttrPairList_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new Edit(id+"_firm_id",{"name":"firm_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"firm_id",
		"keyFieldIds":null},
		{"valueFieldId":"firm_id","keyFieldIds":null}
	);
	this.addDataControl(new FirmEditObject("ttn_pair_firm_id",id+"ttn_pair_firm",true),
		{"modelId":model_id,
		"valueFieldId":"firm_descr",
		"keyFieldIds":["firm_id"]},
		{"valueFieldId":null,"keyFieldIds":["firm_id"]}	
	);	
	this.addDataControl(
		new Edit(id+"_warehouse_id",{"name":"warehouse_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"warehouse_id",
		"keyFieldIds":null},
		{"valueFieldId":"warehouse_id","keyFieldIds":null}
	);
	this.addDataControl(new WarehouseEditObject("ttn_pair_warehouse_id",id+"ttn_pair_warehouse",true),
		{"modelId":model_id,
		"valueFieldId":"warehouse_descr",
		"keyFieldIds":["warehouse_id"]},
		{"valueFieldId":null,"keyFieldIds":["warehouse_id"]}	
	);	
}
extend(TTNAttrPairInline_View,ViewInlineGridEdit);
