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
function DelivCostOptInline_View(id,options){
	options = options || {};
	DelivCostOptInline_View.superclass.constructor.call(this,
		id,options);	
	
	var model_id = "DelivCostOptList_Model";
	
	this.addDataControl(
		new Edit(id+"_id",{"name":"id",
			"visible":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_descr",{"name":"descr","enabled":false}),
		{"modelId":model_id,
		"valueFieldId":"descr",
		"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null}
	);
	this.addDataControl(
		new EditNum(id+"_volume_m",{"name":"volume_m"}),
		{"modelId":model_id,
		"valueFieldId":"volume_m",
		"keyFieldIds":null},
		{"valueFieldId":"volume_m","keyFieldIds":null}
	);
	this.addDataControl(
		new EditFloat(id+"_weight_t",{"name":"weight_t",
		"precision":"2","attrs":{"maxlength":"15"}}),
		{"modelId":model_id,
		"valueFieldId":"weight_t",
		"keyFieldIds":null},
		{"valueFieldId":"weight_t","keyFieldIds":null}
	);
	
}
extend(DelivCostOptInline_View,ViewInlineGridEdit);