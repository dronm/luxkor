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
function ClientActivityInline_View(id,options){
	options = options || {};
	ClientActivityInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model = "ClientActivity_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"name":"id",
			"visible":false}),
		{"modelId":model,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{"maxlength":50,
				"size":25,
				"required":"required"}}
		),
		{"modelId":model,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
}
extend(ClientActivityInline_View,ViewInlineGridEdit);