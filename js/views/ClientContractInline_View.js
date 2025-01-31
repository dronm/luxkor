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
function ClientContractInline_View(id,options){
	options = options || {};
	ClientContractInline_View.superclass.constructor.call(this,
		id,options);	
	this.addDataControl(
		new Edit(id+"_id",{"visible":false,"name":"id"}),
		{"modelId":"ClientContractList_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_client_id",{"visible":false,"name":"client_id"}),
		{"modelId":"ClientContractList_Model",
		"valueFieldId":"client_id",
		"keyFieldIds":null},
		{"valueFieldId":"client_id","keyFieldIds":null}
	);
	
	if (!CONST_CONTROLS["firm"]){
		CONST_CONTROLS["firm"]=new FirmEditObject("firm_id",id+"_firm",true);
	}
	else{
		CONST_CONTROLS.firm.setDefaultId();
	}
	this.addDataControl(CONST_CONTROLS.firm,
		{"modelId":"ClientContractList_Model",
		"valueFieldId":"firm_descr",
		"keyFieldIds":["firm_id"]},
		{"valueFieldId":null,"keyFieldIds":["firm_id"]}
	);
	
	if (!CONST_CONTROLS.contract_state){
		CONST_CONTROLS.contract_state=new ContractStateEditObject("state",id+"_state",true);
	}
	else{
		CONST_CONTROLS.contract_state.setDefaultId();
	}
	this.addDataControl(CONST_CONTROLS.contract_state,
		{"modelId":"ClientContractList_Model",
		"valueFieldId":"state_descr",
		"keyFieldIds":["state"]},
		{"valueFieldId":null,"keyFieldIds":["state"]}
	);
	this.addDataControl(
		new EditString(id+"_number",
		{"name":"number","attrs":{"maxlength":"50","size":"10"}}),
		{"modelId":"ClientContractList_Model",
		"valueFieldId":"number",
		"keyFieldIds":null},
		{"valueFieldId":"number","keyFieldIds":null}
	);	
	this.addDataControl(
		new EditDate(id+"_date_from",
		{"name":"date_from",
		"noSelect":true}),
		{"modelId":"ClientContractList_Model",
		"valueFieldId":"date_from_descr",
		"keyFieldIds":null},
		{"valueFieldId":"date_from","keyFieldIds":null}
	);	
	
	this.addDataControl(
		new EditDate(id+"_date_to",
		{"name":"date_to",
		"noSelect":true}),
		{"modelId":"ClientContractList_Model",
		"valueFieldId":"date_to_descr",
		"keyFieldIds":null},
		{"valueFieldId":"date_to","keyFieldIds":null}
	);	
}
extend(ClientContractInline_View,ViewInlineGridEdit);