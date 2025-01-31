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
function ReportVariantInline_View(id,options){
	options = options || {};
	ReportVariantInline_View.superclass.constructor.call(this,
		id,options);	
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":"ReportVariant_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{"maxlength":100,"size":50,"required":"required"}}),
		{"modelId":"ReportVariant_Model",
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
}
extend(ReportVariantInline_View,ViewInlineGridEdit);