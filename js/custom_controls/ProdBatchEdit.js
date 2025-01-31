function ProdBatchEdit(opts){
	// this.m_orderId = opts.orderId;
	let contr = new ProdBatch_Controller(new ServConnector(HOST_NAME));
	contr.getPublicMethodById("complete_from_1c").setParamValue("doc_order_id", opts.orderId);

	options = 
		{
		"methodId":"complete_from_1c",
		"tableLayout":false,
		"modelId":"ProdBatch1CList_Model",
		"lookupValueFieldId":"batch_descr",
		"patternParamId":"pattern",
		"lookupKeyFieldIds":["ext_id"],
		"controller":contr,
		"minLengthForQuery":"1",
		"ic":"1",
		"mid":"1",
		"keyFieldIds":[opts.fieldId],
		"winObj":this.m_winObj,
		"listView":ProdBatch1CList_View,
		"attrs":{"fkey_ext_id": "ext_id"},
		"buttonSelect":new ButtonSelectObject(opts.controlId+'_btn_select',
			{"controller": contr,
				"modelId":"ProdBatch1CList_Model",
				"listView":ProdBatch1CList_View,
				"keyFieldIds":["ext_id"],
				"lookupKeyFieldIds":["ext_id"],
				"multySelect":false,
				"extraFields":null,
				"controlId":opts.controlId,
				"methParams":{"doc_order_id":null},
				"onBeforeViewCreate":function(){
						// var firm_ctrl = opts.mainView.m_dataControls[opts.mainView.getId()+"_firm_descr"];
						// var pm = this.m_controller.getPublicMethodById("get_firm_ext_bank_account_list");
						// pm.setParamValue("doc_order_id",firm_ctrl.getValue());
						// console.log("onBeforeViewCreate")
				},
				"onSelected":function(keys,descrs,extraFields){
					let methId = (opts.mainView.getIsNew())? opts.mainView.m_insertMethId:opts.mainView.m_updateMethId;
					opts.mainView.setWriteMethodId(methId);
					var contr = opts.mainView.getWriteController();
					contr.getPublicMethodById(methId).setParamValue("batch_descr", descrs["batch_descr"]);
					}
		}),
		"onSelected":function(input){
			let methId = (opts.mainView.getIsNew())? opts.mainView.m_insertMethId:opts.mainView.m_updateMethId;
			opts.mainView.setWriteMethodId(methId);
			var contr = opts.mainView.getWriteController();
			contr.getPublicMethodById(methId).setParamValue("batch_descr", input.value);
		},
		"noAutoComplete":true
	};
	
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Партия:";
	}	
	ProdBatchEdit.superclass.constructor.call(this,opts.controlId,options);	
	
	//this.setAttr("disabled","disabled");
}
extend(ProdBatchEdit,EditObject);
