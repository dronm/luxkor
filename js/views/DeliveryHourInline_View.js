/* Copyright (c) 2015 
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
function DeliveryHourInline_View(id,options){
	options = options || {};
	DeliveryHourInline_View.superclass.constructor.call(this,
		id,options);	
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":"DeliveryHour_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditNum(id+"_h_from",
		{"attrs":{"maxlength":2,"size":3,"required":"required"}}),
		{"modelId":"DeliveryHour_Model",
		"valueFieldId":"h_from",
		"keyFieldIds":null},
		{"valueFieldId":"h_from","keyFieldIds":null}
	);
	this.addDataControl(
		new EditNum(id+"_h_to",
		{"attrs":{"maxlength":2,"size":3,"required":"required"}}),
		{"modelId":"DeliveryHour_Model",
		"valueFieldId":"h_to",
		"keyFieldIds":null},
		{"valueFieldId":"h_to","keyFieldIds":null}
	);
	
}
extend(DeliveryHourInline_View,ViewInlineGridEdit);