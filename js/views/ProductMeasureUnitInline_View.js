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
function ProductMeasureUnitInline_View(id,options){
	options = options || {};
	ProductMeasureUnitInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model_id = "ProductMeasureUnit_Model";	
		
	this.addDataControl(
		new Edit(id+"_product_id",{"name":"product_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"product_id",
		"keyFieldIds":null},
		{"valueFieldId":"product_id","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_measure_unit_id",{"name":"measure_unit_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"measure_unit_id",
		"keyFieldIds":null},
		{"valueFieldId":"measure_unit_id","keyFieldIds":null}
	);	
	this.addDataControl(
		new Edit(id+"_measure_unit_descr",{"name":"measure_unit_descr",
		"attrs":{"disabled":"disabled"}}),
		{"modelId":model_id,
		"valueFieldId":"measure_unit_descr",
		"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null}
	);	
	
	this.addDataControl(
		new EditCheckBox(id+"_in_use",{"name":"in_use",
		"alwaysUpdate":true}),
		{"modelId":model_id,"valueFieldId":"in_use","keyFieldIds":null},
		{"valueFieldId":"in_use","keyFieldIds":null}
	);
	
	this.addDataControl(
		new EditString(id+"_calc_formula",
		{"attrs":{"maxlength":250,"size":50},
		"alwaysUpdate":true}),
		{"modelId":model_id,
		"valueFieldId":"calc_formula",
		"keyFieldIds":null},
		{"valueFieldId":"calc_formula","keyFieldIds":null}
	);
}
extend(ProductMeasureUnitInline_View,ViewInlineGridEdit);