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
function DeliveryPeriodInline_View(id,options){
	options = options || {};
	DeliveryPeriodInline_View.superclass.constructor.call(this,
		id,options);	
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":"DeliveryPeriod_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{"maxlength":50,"size":20,"required":"required"}}),
		{"modelId":"DeliveryPeriod_Model",
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
}
extend(DeliveryPeriodInline_View,ViewInlineGridEdit);