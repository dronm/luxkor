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
function VehicleGridListInline_View(id,options){
	options = options || {};
	
	VehicleGridListInline_View.superclass.constructor.call(this,
		id,options);	
		
	this.addDataControl(
		),
		{"modelId":model,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
}
extend(VehicleGridListInline_View,ViewInlineGridEdit);
