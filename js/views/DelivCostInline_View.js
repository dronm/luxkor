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
function DelivCostInline_View(id,options){
	options = options || {};
	DelivCostInline_View.superclass.constructor.call(this,
		id,options);	
	
	var model_id = "DelivCostList_Model";
	
	this.addDataControl(
		new Edit(id+"_id",{"name":"id",
			"visible":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new ProductionCityEditObject("production_city_id",
			id+"_production_city",true),
		{"modelId":model_id,
		"valueFieldId":"production_city_descr",
		"keyFieldIds":["production_city_id"]},
		{"valueFieldId":null,"keyFieldIds":["production_city_id"]}
	);
	
	this.addDataControl(new DelivCostOptEdit({
				fieldId:"deliv_cost_opt_id",
				controlId:id+"_deliv_cost_opt",
				inLine:true
			}),
		{"modelId":model_id,
		"valueFieldId":"deliv_cost_opt_descr",
		"keyFieldIds":["deliv_cost_opt_id"]},
		{"valueFieldId":null,"keyFieldIds":["deliv_cost_opt_id"]}
	);
	
	this.addDataControl(new DelivCostEditObject({
			"fieldId":"deliv_cost_type",
			"controlId":id+"_deliv_cost_type",
			"inLine":true			
			}),
		{"modelId":model_id,
		"valueFieldId":"deliv_cost_type_descr",
		"keyFieldIds":["deliv_cost_type"]},
		{"valueFieldId":null,"keyFieldIds":["deliv_cost_type"]}
	);
	this.addDataControl(
		new EditMoney(id+"_cost",
		{"attrs":{"required":"required"}}),
		{"modelId":model_id,
		"valueFieldId":"cost",
		"keyFieldIds":null},
		{"valueFieldId":"cost","keyFieldIds":null}
	);	
	this.addDataControl(
		new EditMoney(id+"_cost2",
		{"attrs":{"required":"required"}}),
		{"modelId":model_id,
		"valueFieldId":"cost2",
		"keyFieldIds":null},
		{"valueFieldId":"cost2","keyFieldIds":null}
	);	
	
}
extend(DelivCostInline_View,ViewInlineGridEdit);
