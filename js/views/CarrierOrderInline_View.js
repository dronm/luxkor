/** Copyright (c) 2017
	Andrey Mikhalevich, Katren ltd.
 */
function CarrierOrderInline_View(id,options){
	options = options || {};
	CarrierInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model_id = "CarrierOrderList_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	
	//carier
	this.addDataControl(
		new Edit(id+"_carrier_id",{"name":"carrier_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"carrier_id",
		"keyFieldIds":null},
		{"valueFieldId":"carrier_id","keyFieldIds":null}
	);
	this.addDataControl(new CarrierEditObject("carrier",id+"_carrier",true),
		{"modelId":model_id,
		"valueFieldId":"carrier_descr",
		"keyFieldIds":["carrier_id"]},
		{"valueFieldId":null,"keyFieldIds":["carrier_id"]}	
	);
	
	//driver	
	this.addDataControl(
		new Edit(id+"_driver_id",{"name":"driver_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"driver_id",
		"keyFieldIds":null},
		{"valueFieldId":"driver_id","keyFieldIds":null}
	);
	this.addDataControl(new DriverEditObject("driver_id",id+"_driver",true),
		{"modelId":model_id,
		"valueFieldId":"driver_descr",
		"keyFieldIds":["driver_id"]},
		{"valueFieldId":null,"keyFieldIds":["driver_id"]}	
	);
	
	//vehicle	
	this.addDataControl(
		new Edit(id+"_vehicle_id",{"name":"vehicle_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"vehicle_id",
		"keyFieldIds":null},
		{"valueFieldId":"vehicle_id","keyFieldIds":null}
	);
	this.addDataControl(new VehicleEditObject({
		fieldId:"vehicle_id",controlId:id+"_vehicle",inLine:true}),
		{"modelId":model_id,
		"valueFieldId":"vehicle_descr",
		"keyFieldIds":["vehicle_id"]},
		{"valueFieldId":null,"keyFieldIds":["vehicle_id"]}	
	);
		
	this.addDataControl(
		new EditNum(id+"_ord",{"name":"ord"}),
		{"modelId":model_id,
		"valueFieldId":"ord",
		"keyFieldIds":null},
		{"valueFieldId":"ord","keyFieldIds":null}
	);
	
}
extend(CarrierOrderInline_View,ViewInlineGridEdit);
