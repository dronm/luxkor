/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires 
*/
function FirmEditObject(fieldId,controlId,inLine,defaultId,opts){
	var contr = new Firm_Controller(new ServConnector(HOST_NAME))
	var pm = contr.getPublicMethodById(contr.METH_GET_LIST);
	pm.setParamValue(contr.PARAM_COND_FIELDS,"deleted");
	pm.setParamValue(contr.PARAM_COND_VALS,"false");
	pm.setParamValue(contr.PARAM_COND_SGNS,"e");
	
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"FirmList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":FirmList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	for(var opt in opts){
		options[opt] = opts[opt];
	}
	options.attrs=options.attrs||{};
	//options.attrs.required="required";
	
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Организация:";
	}	
	FirmEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(FirmEditObject,EditSelectObject);

function ContractStateEditObject(fieldId,controlId,inLine,defaultId){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_enum_list",
		"modelId":"EnumList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Enum_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"methParams":{"id":"contract_states"},
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Состояние:";
	}	
	ContractStateEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(ContractStateEditObject,EditSelectObject);

function ProductionCityEditObject(fieldId,controlId,inLine,defaultId,opts){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ProductionCityList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new ProductionCity_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":ProductionCityList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	opts = opts||{};
	for(var opt in opts){
		options[opt] = opts[opt];
	}				
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Город отгрузки:";
	}	
	ProductionCityEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(ProductionCityEditObject,EditSelectObject);

function MeasureUnitEditObject(fieldId,controlId,inLine,defaultId,opts){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"MeasureUnitList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new MeasureUnit_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":MeasureUnitList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	opts = opts||{};
	for(var opt in opts){
		options[opt] = opts[opt];
	}			
	if (
	(inLine==undefined || (inLine!=undefined && !inLine))
	&&!options.labelCaption
	){
		options.labelCaption = "Базовая единица:";
	}	
	MeasureUnitEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(MeasureUnitEditObject,EditSelectObject);

function ProductMeasureUnitEditObject(opts){
	var contr = new ProductMeasureUnit_Controller(new ServConnector(HOST_NAME));
	var pm = contr.getPublicMethodById(contr.METH_GET_LIST);
	pm.setParamValue(contr.PARAM_COND_FIELDS,"product_id,in_use");
	pm.setParamValue(contr.PARAM_COND_SGNS,"e,e");
	pm.setParamValue(contr.PARAM_COND_VALS,opts.productId+",true");
	options =
		{"attrs":{"required":"required"},
		"name":opts.fieldId,
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ProductMeasureUnit_Model",
		"lookupValueFieldId":"measure_unit_descr",
		"lookupKeyFieldIds":["measure_unit_id"],
		"keyFieldIds":[opts.fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"listView":ProductMeasureUnitList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Единица:";
	}	
	ProductMeasureUnitEditObject.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(ProductMeasureUnitEditObject,EditSelectObject);

function ClientEditObject(fieldId,controlId,inLine,opts){
	opts = opts||{};
	options = 
		{"methodId":"complete",
		"tableLayout":false,
		"modelId":"ClientComplete_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Client_Controller(new ServConnector(HOST_NAME)),
		"minLengthForQuery":1,
		"mid":"1",
		"objectView":ClientDialog_View,
		"noSelect":false,
		"noOpen":opts.noOpen||false,
		//"winObj":opts.winObj,
		"listView":ClientSelectList_View,
		"value":opts.descr,
		//"visible":opts.visible,
		//"onSelected":opts.onSelected,
		"attrs":{
			"fkey_client_id":opts.id||""
		}
	};
	if(opts.required===true||opts.required==undefined){
		options.attrs.required = "required";
	}
	for(var opt in opts){
		options[opt] = opts[opt];
	}					
	if ((inLine==undefined || (inLine!=undefined && !inLine)) && options.labelCaption==undefined){
		options["labelCaption"] = "Заказчик:";
	}
	ClientEditObject.superclass.constructor.call(this,
		controlId,options);		
}
extend(ClientEditObject,EditObject);

function ProductEditObject(fieldId,controlId,inLine,defaultId,opts){
	var contr = new Product_Controller(new ServConnector(HOST_NAME));
	var pm = contr.getPublicMethodById(contr.METH_GET_LIST);
	pm.setParamValue(contr.PARAM_COND_FIELDS,"deleted");
	pm.setParamValue(contr.PARAM_COND_VALS,"false");
	pm.setParamValue(contr.PARAM_COND_SGNS,"e");

	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ProductList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":ProductList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId,
		"editContClassName":"input-group "+get_bs_col()+"3"
	};
	opts = opts ||{};
	for(var opt in opts){
		options[opt] = opts[opt];
	}						
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Продукция:";
	}	
	ProductEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(ProductEditObject,EditSelectObject);

function ProductForFilterEditObject(fieldId,controlId,inLine,defaultId){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_filter_list",
		"modelId":"ProductFilterList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Product_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":ProductList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId,
		"editContClassName":"input-group "+get_bs_col()+"3"
	};

	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Продукция:";
	}	
	ProductForFilterEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(ProductForFilterEditObject,EditSelectObject);

function DelivTypeEditObject(opts){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_enum_list",
		"modelId":"EnumList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new Enum_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"methParams":{"id":"delivery_types"},
		"defaultId":(opts.defaultId==undefined)? "by_supplier":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}		
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Вид доставки:";
	}	
	DelivTypeEditObject.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(DelivTypeEditObject,EditSelectObject);

function DeliveryPeriodEditObject(fieldId,controlId,inLine,defaultId,opts){
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"DeliveryPeriod_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new DeliveryPeriod_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":DeliveryPeriodList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	opts = opts||{};
	for(var opt in opts){
		options[opt] = opts[opt];
	}					
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Период:";
	}	
	DeliveryPeriodEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(DeliveryPeriodEditObject,EditSelectObject);

function WarehouseEditObject(fieldId,controlId,inLine,defaultId,opts){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"WarehouseList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Warehouse_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":WarehouseList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	for(var opt in opts){
		options[opt] = opts[opt];
	}			
	
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Склад:";
	}	
	WarehouseEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(WarehouseEditObject,EditSelectObject);

function OrderWarehouseEditObject(fieldId,controlId,inLine,defaultId,opts){
	var contr = new Warehouse_Controller(new ServConnector(HOST_NAME));
	this.m_pm = contr.getPublicMethodById("get_list_for_order");
	this.m_pm.setParamValue("product_id","0");

	options =
		{"tableLayout":false,
		"methodId":"get_list_for_order",
		"modelId":"WarehouseList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":WarehouseList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId
		//"noAutoRefresh":true
	};
	for(var opt in opts){
		options[opt] = opts[opt];
	}
	options.attrs=options.attrs||{};
	options.attrs.required="required";
	
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Склад:";
	}	
	OrderWarehouseEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(OrderWarehouseEditObject,EditSelectObject);
OrderWarehouseEditObject.prototype.setProductId = function(productId){
	this.m_pm.setParamValue("product_id",productId);
}

function ClientUserEditObject(fieldId,controlId,inLine,defaultId,opts){
	var contr = new ClientUser_Controller(new ServConnector(HOST_NAME));
	this.m_pm = contr.getPublicMethodById(contr.METH_GET_LIST);
	this.m_pm.setParamValue(contr.PARAM_COND_FIELDS,"client_id");
	this.m_pm.setParamValue(contr.PARAM_COND_SGNS,"e");	
	this.m_paramId = contr.PARAM_COND_VALS;
	
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ClientUserList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":ClientUserList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId,
		"noAutoRefresh":true
	};
	opts = opts||{};
	for(var opt in opts){
		options[opt] = opts[opt];
	}				
	
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Ответственный:";
	}	
	ClientUserEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(ClientUserEditObject,EditSelectObject);
ClientUserEditObject.prototype.setClientId = function(clientId){
	this.m_pm.setParamValue(this.m_paramId,clientId);
}

function ProductForOrderEditObject(opts){
	var contr = new Product_Controller(new ServConnector(HOST_NAME));
	this.m_pm = contr.getPublicMethodById("get_list_for_order");
	this.m_pm.setParamValue("warehouse_id","0");

	var pm = contr.getPublicMethodById("get_list");
	pm.setParamValue(contr.PARAM_COND_FIELDS,"deleted");
	pm.setParamValue(contr.PARAM_COND_VALS,"false");
	pm.setParamValue(contr.PARAM_COND_SGNS,"e");

	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ProductList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"listView":ProductList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}		
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Продукция:";
	}	
	ProductForOrderEditObject.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(ProductForOrderEditObject,EditSelectObject);
ProductForOrderEditObject.prototype.setWarehouseId = function(warehouseId){
	this.m_pm.setParamValue("warehouse_id",warehouseId);
}

function OrderStateEditObject(fieldId,controlId,inLine,defaultId,opts){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_enum_list",
		"modelId":"EnumList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Enum_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"methParams":{"id":"order_states"},
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	for(var opt in opts){
		options[opt] = opts[opt];
	}				
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Статус:";
	}	
	OrderStateEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(OrderStateEditObject,EditSelectObject);

function UserEditObject(fieldId,controlId,inLine,defaultId,opts){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"UserList_Model",
		"lookupValueFieldId":"name_full",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new User_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":UserList_View,
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	opts = opts||{};
	for(var opt in opts){
		options[opt] = opts[opt];
	}					
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Пользователь:";
	}	
	UserEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(UserEditObject,EditSelectObject);

function CustSurvQuesionEditObject(fieldId,controlId,inLine,defaultId){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_list",
		"modelId":"CustomerSurveyQuestion_Model",
		"lookupValueFieldId":null,
		"lookupKeyFieldIds":null,
		"keyFieldIds":[fieldId],
		"controller":new CustomerSurveyQuestion_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":true,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"defaultId":(defaultId==undefined)? "undefined":defaultId,
		"enabled":false,
		"buttonClear":false
	};
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Вопрос:";
	}	
	CustSurvQuesionEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(CustSurvQuesionEditObject,EditObject);

function DriverEditObject(fieldId,controlId,inLine,opts){
	opts = opts||{};
	options = 
		{"methodId":"complete",
		"tableLayout":false,
		"modelId":"DriverList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Driver_Controller(new ServConnector(HOST_NAME)),
		"minLengthForQuery":1,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":DriverList_View,
		"value":opts.descr,
		"attrs":{"required":"required","fkey_driver_id":opts.id||""}
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}				
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Водитель:";
	}
	DriverEditObject.superclass.constructor.call(this,
		controlId,options);		
}
extend(DriverEditObject,EditObject);

function CarrierEditObject(fieldId,controlId,inLine,opts){
	opts = opts||{};
	options = 
		{"methodId":"get_list",
		"tableLayout":false,
		"modelId":"CarrierList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Carrier_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":CarrierList_View,
		"value":opts.descr,
		"attrs":{"required":"required","fkey_carrier_id":opts.id||""}
	};
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Перевозчик:";
	}
	CarrierEditObject.superclass.constructor.call(this,
		controlId,options);		
}
extend(CarrierEditObject,EditSelectObject);

function PayTypeEditObject(fieldId,controlId,inLine,defaultId,opts){
	opts = opts||{};
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_enum_list",
		"modelId":"EnumList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Enum_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"methParams":{"id":"payment_types"},
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	for(var opt in opts){
		options[opt] = opts[opt];
	}			
	
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Условия оплаты:";
	}	
	PayTypeEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(PayTypeEditObject,EditSelectObject);

function DelivCostEditObject(opts){
	//fieldId,controlId,inLine,defaultId
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_enum_list",
		"modelId":"EnumList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new Enum_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"methParams":{"id":"deliv_cost_types"},
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}			
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Тип:";
	}	
	DelivCostEditObject.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(DelivCostEditObject,EditSelectObject);

function SMSTypeEditObject(fieldId,controlId,inLine,defaultId){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_enum_list",
		"modelId":"EnumList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Enum_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"methParams":{"id":"sms_types"},
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Тип:";
	}	
	SMSTypeEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(SMSTypeEditObject,EditSelectObject);

function EmailTypeEditObject(fieldId,controlId,inLine,defaultId){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":"get_enum_list",
		"modelId":"EnumList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":new Enum_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":null,
		"methParams":{"id":"email_types"},
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Тип:";
	}	
	EmailTypeEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(EmailTypeEditObject,EditSelectObject);

function DelivCostOptEdit(opts){
	options =
		{"attrs":{"required":"required"},
		"tableLayout":true,
		"methodId":"get_list",
		"modelId":"DelivCostOptList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new DelivCostOpt_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":DelivCostOptList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Ценовая категория ТС:";
	}	
	DelivCostOptEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(DelivCostOptEdit,EditSelectObject);

function VehicleListEdit(opts){
	options =
		{"tableLayout":false,
		"methodId":"get_select_list",
		"modelId":"VehicleSelectList_Model",
		"lookupValueFieldId":"descr",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new Vehicle_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":VehicleList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "ТС:";
	}	
	VehicleListEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(VehicleListEdit,EditSelectObject);

function ClientActivityEdit(opts){
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ClientActivityList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new ClientActivity_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":ClientActivity_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Вид деятельности:";
	}	
	ClientActivityEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(ClientActivityEdit,EditSelectObject);

function SertTypeEdit(opts){
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"SertType_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new SertType_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":SertType_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Сертификат:";
	}	
	SertTypeEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(SertTypeEdit,EditSelectObject);

function TrackServerEdit(opts){
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"TrackerServer_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new TrackerServer_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":TrackerServerList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Сервер:";
	}	
	TrackServerEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(TrackServerEdit,EditSelectObject);

function TrackerEdit(opts){
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"TrackerList_Model",
		"lookupValueFieldId":"id",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new Tracker_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":TrackerList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Трекер:";
	}	
	TrackerEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(TrackerEdit,EditSelectObject);

function VehicleEditObject(opts){
	opts = opts||{};
	options = 
		{"methodId":"complete",
		"tableLayout":false,
		"modelId":"VehicleSelectList_Model",
		"lookupValueFieldId":"complete_descr",//"plate"
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new Vehicle_Controller(new ServConnector(HOST_NAME)),
		"minLengthForQuery":1,
		"ic":"1",
		"mid":"1",
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":VehicleList_View,
		"value":opts.descr,
		"attrs":{"required":"required","fkey_vehicle_id":opts.id||""}
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}		
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Автомобиль:";
	}
	VehicleEditObject.superclass.constructor.call(this,
		opts.controlId,options);		
}
extend(VehicleEditObject,EditObject);

function ProductGroupEdit(opts){
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ProductGroupList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":new ProductGroup_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":ProductGroupList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Номенкл.группа:";
	}	
	ProductGroupEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(ProductGroupEdit,EditSelectObject);

function ClientDebtPeriodEdit(opts){
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"ClientDebtPeriodList_Model",
		"lookupValueFieldId":"days_descr",
		"lookupKeyFieldIds":["days_from"],
		"keyFieldIds":[opts.fieldId],
		"controller":new ClientDebtPeriod_Controller(new ServConnector(HOST_NAME)),
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":ClientDebtPeriodList_View,
		"defaultId":(opts.defaultId==undefined)? "undefined":opts.defaultId
	};
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Период долга:";
	}	
	ClientDebtPeriodEdit.superclass.constructor.call(this,
		opts.controlId,options);	
}
extend(ClientDebtPeriodEdit,EditSelectObject);

function ClientExtContractEdit(opts){
	options = 
		{"methodId":"complete",
		"tableLayout":false,
		"modelId":"ClientExtContractList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["ext_id"],
		"keyFieldIds":[opts.fieldId],
		"noAutoComplete":true,
		"winObj":this.m_winObj,
		"listView":ClientExtContractList_View,
		"attrs":{"fkey_vehicle_id":opts.id||""},
		"buttonSelect":new ButtonSelectObject(opts.controlId+'_btn_select',
			{"controller":new Client_Controller(new ServConnector(HOST_NAME)),
			"modelId":"ClientExtContractList_Model",
			"listView":ClientExtContractList_View,
			"keyFieldIds":[opts.fieldId],
			"lookupKeyFieldIds":["ext_id"],
			"onSelected":null,
			"multySelect":false,
			"extraFields":null,
			"controlId":opts.controlId,
			"methParams":{"client_id":null,"firm_id":null},
			"onBeforeViewCreate":function(){
					var pm = this.m_controller.getPublicMethodById("get_client_ext_contract_list");
					pm.setParamValue("client_id",opts.mainView.m_clientCtrl.getAttr("fkey_client_id"));
					pm.setParamValue("firm_id",opts.mainView.m_FirmCtrl.getFieldValue());
				}
			})		
	};
	
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Договор:";
	}	
	ClientExtContractEdit.superclass.constructor.call(this,opts.controlId,options);	
	
	this.setAttr("disabled","disabled");
}
extend(ClientExtContractEdit,EditObject);

ClientExtContractEdit.prototype.setEnabled = function(enabled){
	if (this.m_label){
		this.m_label.setEnabled(enabled);
	}
	if (this.m_buttons){
		this.m_buttons.setEnabled(enabled);
	}
	//ClientExtContractEdit.superclass.setEnabled.call(this,enabled);
}

function FirmExtBankAccountEdit(opts){
	options = 
		{
		"methodId":"complete",
		"tableLayout":false,
		"modelId":"FirmExtBankAccountList_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["ext_id"],
		"keyFieldIds":[opts.fieldId],
		"winObj":this.m_winObj,
		"listView":FirmExtBankAccountList_View,
		"attrs":{"fkey_ext_bank_account_id":opts.controlId||""},
		"buttonSelect":new ButtonSelectObject(opts.controlId+'_btn_select',
			{"controller":new Firm_Controller(new ServConnector(HOST_NAME)),
			"modelId":"FirmExtBankAccountList_Model",
			"listView":FirmExtBankAccountList_View,
			"keyFieldIds":[opts.fieldId],
			"lookupKeyFieldIds":["ext_id"],
			"multySelect":false,
			"extraFields":null,
			"controlId":opts.controlId,
			"methParams":{"firm_id":null},
			"onBeforeViewCreate":function(){
					var firm_ctrl = opts.mainView.m_dataControls[opts.mainView.getId()+"_firm_descr"];
					var pm = this.m_controller.getPublicMethodById("get_firm_ext_bank_account_list");
					pm.setParamValue("firm_id",firm_ctrl.getValue());
			},
			"onSelected":function(keys,descrs,extraFields){
				var m_id = (opts.mainView.getIsNew())? opts.mainView.m_insertMethId:opts.mainView.m_updateMethId;
				opts.mainView.setWriteMethodId();
				var contr = opts.mainView.getWriteController();
				contr.getPublicMethodById(m_id).setParamValue("ext_bank_account_descr",descrs["name"]);
			}
			}
		),
		"noAutoComplete":false		
	};
	
	opts.options=opts.options||{};
	for(var opt in opts.options){
		options[opt] = opts.options[opt];
	}	
	
	if (opts.inLine==undefined || (opts.inLine!=undefined && !opts.inLine)){
		options["labelCaption"] = "Счет:";
	}	
	FirmExtBankAccountEdit.superclass.constructor.call(this,opts.controlId,options);	
	
	//this.setAttr("disabled","disabled");
}
extend(FirmExtBankAccountEdit,EditObject);

FirmExtBankAccountEdit.prototype.setEnabled = function(enabled){
	if (this.m_label){
		this.m_label.setEnabled(enabled);
	}
	if (this.m_buttons){
		this.m_buttons.setEnabled(enabled);
	}
	//FirmExtBankAccountEdit.superclass.setEnabled.call(this,enabled);
}


function SaleStoreAddressEditObject(fieldId,controlId,inLine,defaultId,opts){
	var contr = new SaleStoreAddress_Controller(new ServConnector(HOST_NAME))
	var pm = contr.getPublicMethodById(contr.METH_GET_LIST);
  //pm.setParamValue(contr.PARAM_COND_FIELDS,"deleted");
	//pm.setParamValue(contr.PARAM_COND_VALS,"false");
	//pm.setParamValue(contr.PARAM_COND_SGNS,"e");
	
	options =
		{"tableLayout":false,
		"methodId":"get_list",
		"modelId":"SaleStoreAddress_Model",
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":this.m_winObj,
		"listView":SaleStoreAddressList_View,
		"contClassName":"aaa",
		"defaultId":(defaultId==undefined)? "undefined":defaultId
	};
	for(var opt in opts){
		options[opt] = opts[opt];
	}
	options.attrs=options.attrs||{};
	//options.attrs.required="required";
	
	if (inLine==undefined || (inLine!=undefined && !inLine)){
		options["labelCaption"] = "Адрес магазина:";
	}	
	SaleStoreAddressEditObject.superclass.constructor.call(this,
		controlId,options);	
}
extend(SaleStoreAddressEditObject,EditSelectObject);
