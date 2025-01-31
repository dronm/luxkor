/* Copyright (c) 2024 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires controls/View.js
*/

/* constructor */
function DOCOrderDOCTProdBatchInline_View(id,options){
	options = options || {};

	var model_id = "DOCOrderDOCTProdBatchList_Model";	
	
	options.readModelId = model_id;
	DOCOrderDOCTProdBatchInline_View.superclass.constructor.call(this,
		id,options);
		
	var self = this;
	
	//batch
	this.m_prodBatchCtrl = new ProdBatchEdit({
		"fieldId":"ext_id",
		"controlId":(id+"batch"),
		"noOpen":true,
		"winObj":options.winObj,
		"mainView":this,
		"inLine":true,
		"orderId":options.params.getOrderId()
		});
	this.addDataControl(this.m_prodBatchCtrl,
		{"modelId":model_id, "valueFieldId":"batch_descr", "keyFieldIds":["ext_id"]},
		{"valueFieldId":null, "keyFieldIds":["ext_id"]}
	);	

	// this.addDataControl(new ProdBatchEdit("batch_descr", id+"_batch_descr", true, null,
	// 	{"mainView":this
	// 	}
	// 	),
	// 	{"modelId":model_id,
	// 	"valueFieldId":"batch_descr",
	// 	"keyFieldIds":["ext_id"]},
	// 	{"valueFieldId":"batch_descr","keyFieldIds":["ext_id"]}
	// );
}
extend(DOCOrderDOCTProdBatchInline_View,ViewInlineGridEditDOCT);

