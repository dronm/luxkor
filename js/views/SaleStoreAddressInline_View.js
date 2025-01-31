
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
function SaleStoreAddressInline_View(id,options){
	options = options || {};
	SaleStoreAddressInline_View.superclass.constructor.call(this,
		id,options);	
		
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":"SaleStoreAddress_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditString(id+"_code",
		{"attrs":{
				"maxlength":10,
				"size":5,
				"required":"required"
				},
		"alwaysUpdate":true
		}),
		{"modelId":"SaleStoreAddress_Model",
		"valueFieldId":"code",
		"keyFieldIds":null},
		{"valueFieldId":"code","keyFieldIds":null}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{
				"maxlength":100,
				"size":50,
				"required":"required"
				},
		"alwaysUpdate":true
		}),
		{"modelId":"SaleStoreAddress_Model",
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
}
extend(SaleStoreAddressInline_View,ViewInlineGridEdit);
