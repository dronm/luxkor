/* Copyright (c) 2022
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
function Product1cNameInline_View(id,options){
	options = options || {};
	Product1cNameInline_View.superclass.constructor.call(this, id, options);	
		
	var model_id = "Product1cNameList_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"visible":false,"name":"id"}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_user_id",{"visible":false,"name":"product_id"}),
		{"modelId":model_id,
		"valueFieldId":"product_id",
		"keyFieldIds":null},
		{"valueFieldId":"product_id","keyFieldIds":null}
	);
	
	this.addDataControl(new FirmEditObject("firm_id",id+"_firm",true),
		{"modelId":model_id,
		"valueFieldId":"firm_descr",
		"keyFieldIds":["firm_id"]},
		{"valueFieldId":null,"keyFieldIds":["firm_id"]}
	);
	
	this.addDataControl(new EditString("name_for_1c",{
			"maxlength":"100"
		}),
		{"modelId":model_id,
		"valueFieldId":"name_for_1c",
		"keyFieldIds":null},
		{"valueFieldId":"name_for_1c","keyFieldIds":null}
	);
	
}
extend(Product1cNameInline_View, ViewInlineGridEdit);
