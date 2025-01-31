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
function DriverInline_View(id,options){
	options = options || {};
	DriverInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model = "DriverList_Model";
	
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
		{"attrs":{"maxlength":100,
				"size":50,
				"required":"required"},
		"alwaysUpdate":true
		}),
		{"modelId":model,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
	this.addDataControl(
		new EditString(id+"_drive_perm",
		{"attrs":{"maxlength":10,"size":5}}),
		{"modelId":model,
		"valueFieldId":"drive_perm",
		"keyFieldIds":null},
		{"valueFieldId":"drive_perm","keyFieldIds":null}
	);
	this.addDataControl(
		new EditCellPhone(id+"_cel_phone"),
		{"modelId":model,
		"valueFieldId":"cel_phone",
		"keyFieldIds":null},
		{"valueFieldId":"cel_phone","keyFieldIds":null}
	);
	this.addDataControl(
		new Control(id+"_cel_match_1c","div"),
		{"modelId":model,
		"valueFieldId":null,
		"keyFieldIds":null},
		{}
	);
	
}
extend(DriverInline_View,ViewInlineGridEdit);