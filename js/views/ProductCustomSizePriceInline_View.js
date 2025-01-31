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
function ProductCustomSizePriceInline_View(id,options){
	options = options || {};
	ProductCustomSizePriceInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model_id = "ProductCustomSizePrice_Model";	
		
	this.addDataControl(
		new Edit(id+"_product_id",{"name":"product_id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"product_id",
		"keyFieldIds":null},
		{"valueFieldId":"product_id","keyFieldIds":null}
	);
	this.addDataControl(
		new EditNum(id+"_category",{"name":"category",
		"attrs":{"size":"5"}}),
		{"modelId":model_id,"valueFieldId":"category","keyFieldIds":null},
		{"valueFieldId":"category","keyFieldIds":null}
	);
	
	this.addDataControl(
		new EditFloat(id+"_quant",
		{"attrs":{"maxlength":19,"size":5},"name":"quant"}),
		{"modelId":model_id,
		"valueFieldId":"quant",
		"keyFieldIds":null},
		{"valueFieldId":"quant","keyFieldIds":null}
	);
	this.addDataControl(
		new EditMoney(id+"_price",{"name":"price"}),
		{"modelId":model_id,
		"valueFieldId":"price",
		"keyFieldIds":null},
		{"valueFieldId":"price","keyFieldIds":null}
	);
	
}
extend(ProductCustomSizePriceInline_View,ViewInlineGridEdit);