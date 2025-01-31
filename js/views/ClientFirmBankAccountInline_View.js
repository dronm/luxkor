/** Copyright (c) 2020
 *	Andrey Mikhalevich, Katren ltd.
 *
 * @requires controls/View.js
 */
function ClientFirmBankAccountInline_View(id,options){
	options = options || {};
	ClientFirmBankAccountInline_View.superclass.constructor.call(this,
		id,options);
			
	this.addDataControl(
		new Edit(id+"_id",{"visible":false,"name":"id"}),
		{"modelId":"ClientFirmBankAccountList_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new Edit(id+"_client_id",{"visible":false,"name":"client_id"}),
		{"modelId":"ClientFirmBankAccountList_Model",
		"valueFieldId":"client_id",
		"keyFieldIds":null},
		{"valueFieldId":"client_id","keyFieldIds":null}
	);	
	this.addDataControl(
		new Edit(id+"_firm_id",{"visible":false,"name":"firm_id"}),
		{"modelId":"ClientFirmBankAccountList_Model",
		"valueFieldId":"firm_id",
		"keyFieldIds":null},
		{"valueFieldId":"firm_id","keyFieldIds":null}
	);	
	
	this.addDataControl(
		new FirmEditObject(
			"firm_descr",
			id+"_firm_descr",
			true,
			null,
			{"attrs":{},
			"name":"firm_descr"
			}
		),
		{"modelId":"ClientFirmBankAccountList_Model",
		"valueFieldId":"firm_descr",
		"keyFieldIds":["firm_id"]},
		{"valueFieldId":null,"keyFieldIds":["firm_id"]}
	);
	this.addDataControl(
		new FirmExtBankAccountEdit({
			"fieldId":"ext_bank_account_id",
			"controlId":id+"ext_bank_account_descr",
			"mainView":this,
			"options":{},
			"inLine":true
		}),
		{"modelId":"ClientFirmBankAccountList_Model",
		"valueFieldId":"ext_bank_account_descr",
		"keyFieldIds":["ext_bank_account_id"]},
		{"valueFieldId":null,"keyFieldIds":["ext_bank_account_id"]}
	);		
}
extend(ClientFirmBankAccountInline_View,ViewInlineGridEdit);

