/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function DOCOrderCancel_View(id,options){
	options = options || {};
	
	options.writeController = new DOCOrder_Controller(new ServConnector(HOST_NAME));
	options.customWriteMethod = true;
	options.writeMethodId = "set_cancel_cause";
	options.writeController.getPublicMethodById(options.writeMethodId).setParamValue("doc_id",options.doc_id);
	
	DOCOrderCancel_View.superclass.constructor.call(this,
		id,options);
	var cont=new ControlContainer(id+"_panel","div",{"className":"panel"});
	//cont.addElement(new Control(id+"_panel_cause_t","span",{"value":"Укажите причину отмены заявки:"}));
	
	var ctrl = new EditText(id+"_cause",
		{"labelCaption":"Укажите причину отмены заявки:",
		"name":"cause",
		"rows":"5",
		"attrs":{"maxlength":500,"required":"required"},
		"tableLayout":false
		}
	);
	this.bindControl(ctrl,
		{"modelId":null,
		"valueFieldId":"cause",
		"keyFieldIds":null},
		{"valueFieldId":"cause","keyFieldIds":null,
		"modelId":null}
	);
	cont.addElement(ctrl);
	this.addControl(cont);
}
extend(DOCOrderCancel_View,ViewDialog);