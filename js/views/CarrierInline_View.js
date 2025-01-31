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
function CarrierInline_View(id,options){
	options = options || {};
	CarrierInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model = "CarrierList_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":model,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{"maxlength":100,"size":50,"required":"required"}}),
		{"modelId":model,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_client_id",{"name":"client_id","visible":false}),
		{"modelId":model,
		"valueFieldId":"client_id",
		"keyFieldIds":null},
		{"valueFieldId":"client_id","keyFieldIds":null}
	);
	this.addDataControl(new ClientEditObject("client_id",id+"_client",true),
		{"modelId":model,
		"valueFieldId":"client_descr",
		"keyFieldIds":["client_id"]},
		{"valueFieldId":null,"keyFieldIds":["client_id"]}	
	);
	
}
extend(CarrierInline_View,ViewInlineGridEdit);
