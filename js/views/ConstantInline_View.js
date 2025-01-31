/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ô
/** Requirements
 * @requires controls/View.js
*/

function ConstInline_View(id,options){
	options = options || {};
	
	ConstInline_View.superclass.constructor.call(this,
		id,options);
	this.addDataControl(
		new EditString("ConstantList_Model_val",
		{"attrs":{"name":"val"}}
		),
		{"modelId":"ConstantList_Model",
		"valueFieldId":"val_descr",
		"keyFieldIds":null},
		{"valueFieldId":"val","keyFieldIds":null}
	);
}
extend(ConstInline_View,ViewInlineGridEditConst);

function ConstDefStoreInline_View(id,options){
	options = options || {};
	ConstDefStoreInline_View.superclass.constructor.call(this,
		id,options);
	this.addDataControl(
		new EditObject("ConstantList_Model_val",
		{"attrs":{"name":"val"},
		"methodId":"get_list",
		"modelId":"StoreList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":["val_id"],
		"controller":new Store_Controller(options.connect),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":StoreList_View
		}
		),
		{"modelId":"ConstantList_Model",
		"valueFieldId":"val_descr",
		"keyFieldIds":null},
		{"valueFieldId":"val","keyFieldIds":null}
	);	
}
extend(ConstDefStoreInline_View,ViewInlineGridEditConst);