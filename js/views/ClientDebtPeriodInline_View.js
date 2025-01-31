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
function ClientDebtPeriodInline_View(id,options){
	options = options || {};
	ClientDebtPeriodInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model = "ClientDebtPeriod_Model";
		
	this.addDataControl(
		new EditNum(id+"_days_from",{"name":"days_from"}),
		{"modelId":model,
		"valueFieldId":"days_from",
		"keyFieldIds":null},
		{"valueFieldId":"days_from","keyFieldIds":null}
	);
	this.addDataControl(
		new EditNum(id+"_days_to",{"name":"days_to"}),
		{"modelId":model,
		"valueFieldId":"days_to",
		"keyFieldIds":null},
		{"valueFieldId":"days_to","keyFieldIds":null}
	);
}
extend(ClientDebtPeriodInline_View,ViewInlineGridEdit);