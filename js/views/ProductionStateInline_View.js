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
function ProductionStateInline_View(id,options){
	options = options || {};
	ProductionStateInline_View.superclass.constructor.call(this,
		id,options);	
	var model_id = "ProductionState_Model";
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditNum(id+"_ord",
		{"attrs":{"required":"required"}}),
		{"modelId":model_id,
		"valueFieldId":"ord",
		"keyFieldIds":null},
		{"valueFieldId":"ord","keyFieldIds":null}
	);	
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{"maxlength":100,"size":50,"required":"required"}}),
		{"modelId":model_id,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
}
extend(ProductionStateInline_View,ViewInlineGridEdit);