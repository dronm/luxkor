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
function SertTypeAttrInline_View(id,options){
	options = options || {};
	SertTypeAttrInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model = "SertTypeAttr_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"visible":false,"name":"id"}),
		{"modelId":model,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(new Edit(id+"_sert_type_id",{
			"visible":false,"name":"sert_type_id"}),
		{"modelId":model,
		"valueFieldId":"sert_type_id",
		"keyFieldIds":null},
		{"valueFieldId":"sert_type_id","keyFieldIds":null}
	);
		
	this.addDataControl(new EditString(id+"_attr_text",
			{"name":"attr_text",
			"attrs":{"maxlength":"250","size":"50"}
			}
		),
		{"modelId":model,
		"valueFieldId":"attr_text",
		"keyFieldIds":null},
		{"valueFieldId":"attr_text","keyFieldIds":null}
	);	
	
	this.addDataControl(new EditString(id+"_attr_val",
			{"name":"attr_val",
			"attrs":{"maxlength":"50","size":"20"}
			}
		),
		{"modelId":model,
		"valueFieldId":"attr_val",
		"keyFieldIds":null},
		{"valueFieldId":"attr_val","keyFieldIds":null}
	);	
	this.addDataControl(new EditString(id+"_attr_val_norm",
			{"name":"attr_val_norm",
			"attrs":{"maxlength":"50","size":"20"}
			}
		),
		{"modelId":model,
		"valueFieldId":"attr_val_norm",
		"keyFieldIds":null},
		{"valueFieldId":"attr_val_norm","keyFieldIds":null}
	);	
	this.addDataControl(new EditFloat(id+"_attr_val_min",
			{"name":"attr_val_min",
			"precision":4,
			"attrs":{"maxlength":"15","size":"15"}
			}
		),
		{"modelId":model,
		"valueFieldId":"attr_val_min",
		"keyFieldIds":null},
		{"valueFieldId":"attr_val_min","keyFieldIds":null}
	);	

	this.addDataControl(new EditFloat(id+"_attr_val_max",
			{"name":"attr_val_max",
			"precision":4,
			"attrs":{"maxlength":"15","size":"15"}
			}
		),
		{"modelId":model,
		"valueFieldId":"attr_val_max",
		"keyFieldIds":null},
		{"valueFieldId":"attr_val_max","keyFieldIds":null}
	);	
	
}
extend(SertTypeAttrInline_View,ViewInlineGridEdit);