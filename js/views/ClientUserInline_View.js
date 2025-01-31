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
function ClientUserInline_View(id,options){
	options = options || {};
	ClientUserInline_View.superclass.constructor.call(this,
		id,options);	
	this.addDataControl(
		new Edit(id+"_id",{"visible":false,"name":"id"}),
		{"modelId":"ClientUserList_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_client_id",{"visible":false,"name":"client_id"}),
		{"modelId":"ClientUserList_Model",
		"valueFieldId":"client_id",
		"keyFieldIds":null},
		{"valueFieldId":"client_id","keyFieldIds":null}
	);	
	this.addDataControl(
		new EditString(id+"_name_full",
		{"attrs":{"maxlength":150,"size":50},
			"name":"name_full"}),
		{"modelId":"ClientUserList_Model",
		"valueFieldId":"name_full",
		"keyFieldIds":null},
		{"valueFieldId":"name_full","keyFieldIds":null}
	);
	this.addDataControl(
		new EditString(id+"_email",
		{"attrs":{"maxlength":50,"size":15},
			"name":"email"}),
		{"modelId":"ClientUserList_Model",
		"valueFieldId":"email",
		"keyFieldIds":null},
		{"valueFieldId":"email","keyFieldIds":null}
	);		
	this.addDataControl(
		new EditCellPhone(id+"_cel_phone",
		{"name":"cel_phone"}),
		{"modelId":"ClientUserList_Model",
		"valueFieldId":"cel_phone",
		"keyFieldIds":null},
		{"valueFieldId":"cel_phone","keyFieldIds":null}
	);			
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{"maxlength":50,"size":15},
			"name":"name"}),
		{"modelId":"ClientUserList_Model",
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);	
}
extend(ClientUserInline_View,ViewInlineGridEdit);