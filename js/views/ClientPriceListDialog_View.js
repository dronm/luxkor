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
function ClientPriceListDialog_View(id,options){
	options = options || {};
	
	ClientPriceListDialog_View.superclass.constructor.call(this,
		id,options);	
		
	var cont=new ControlContainer("client_price_cont","div",{"className":"panel"});
	
	this.m_idCtrl = new Edit(id+"_id",{"visible":false,"name":"id"});
	this.bindControl(this.m_idCtrl,
		{"modelId":"ClientPriceListDialog_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	cont.addElement(this.m_idCtrl);
	
	var ctrl = new EditString(id+"_name",
		{"attrs":{"maxlength":100,"size":20,"required":"required"},
		"labelCaption":"Наименование:","name":"name"}
		);
	this.bindControl(ctrl,
		{"modelId":"ClientPriceListDialog_Model",
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	//Цены на виды продукции
	options.enabled = false;
	this.m_productList = new ClientPriceListProductList_View("ClientPriceListProductList",options);
	cont.addElement(this.m_productList);
	
	if (!CONST_CONTROLS.pruductionCity){
		CONST_CONTROLS.pruductionCity=new ProductionCityEditObject("production_city_id",id+"_production_city",false);
	}
	else{
		CONST_CONTROLS.pruductionCity.setDefaultId();
	}
	this.bindControl(CONST_CONTROLS.pruductionCity,
		{"modelId":"ClientPriceListDialog_Model",
		"valueFieldId":"production_city_descr",
		"keyFieldIds":["production_city_id"]},
		{"valueFieldId":null,"keyFieldIds":["production_city_id"]}
	);
	cont.addElement(CONST_CONTROLS.pruductionCity);
	
	var ctrl = new EditCheckBox(id+"_part_ship_do_not_change_price",
		{"labelCaption":"Неполная доставка не влияет на цену за базовую единицу",
		"name":"part_ship_do_not_change_price"});
	this.bindControl(ctrl,
		{"modelId":"ClientPriceListDialog_Model",
		"valueFieldId":"part_ship_do_not_change_price",
		"keyFieldIds":null},
		{"valueFieldId":"part_ship_do_not_change_price","keyFieldIds":null}		
	);
	cont.addElement(ctrl);
	
	var ctrl = 	new EditNum(id+"_min_order_quant",
		{"name":"min_order_quant","buttonClear":false,
		"labelCaption":"Заказ не менее (м3):","attrs":{
			"maxlength":19,"size":"5","value":0}});
	this.bindControl(ctrl,
		{"modelId":"ClientPriceListDialog_Model",
		"valueFieldId":"min_order_quant",
		"keyFieldIds":null},
		{"valueFieldId":"min_order_quant","keyFieldIds":null}					
	);
	cont.addElement(ctrl);	
	
	var ctrl = new EditCheckBox(id+"_to_third_party_only",
		{"labelCaption":"Только при доставке третьим лицам",
		"name":"to_third_party_only"});
	this.bindControl(ctrl,
		{"modelId":"ClientPriceListDialog_Model",
		"valueFieldId":"to_third_party_only",
		"keyFieldIds":null},
		{"valueFieldId":"to_third_party_only","keyFieldIds":null}		
	);
	cont.addElement(ctrl);

	var ctrl = new EditCheckBox(id+"_default_price_list",
		{"labelCaption":"По умолчанию",
		"name":"default_price_list"});
	this.bindControl(ctrl,
		{"modelId":"ClientPriceListDialog_Model",
		"valueFieldId":"default_price_list",
		"keyFieldIds":null},
		{"valueFieldId":"default_price_list","keyFieldIds":null}		
	);
	cont.addElement(ctrl);
	
	var self = this;
	
	this.m_printPriceBtn = new Button(id+"_print",
		{"caption":"Печать прайса",
		"enabled":false,
		"onClick":function(){
			var contr = new ClientPriceList_Controller(new ServConnector(HOST_NAME));
			/*
			var meth = contr.getPublicMethodById("print_price");
			meth.setParamValue(contr.PARAM_VIEW,"ViewXSLT");
			meth.setParamValue("templ","PriceList");
			meth.setParamValue("price_id",self.m_idCtrl.getValue());			
			top.location.href = HOST_NAME+"index.php?"+
				contr.getQueryString(meth);
			*/
			contr.run("print_price",{
				"async":true,
				"params":{
					"v":"ViewXSLT",
					"templ":"PriceList",
					"price_id":self.m_idCtrl.getValue()
				},
				"xml":false,
				"func":function(resp){					
					WindowPrint.show({
						"content":resp,"close":false,"print":false
					});
				},
				"cont":this
			});
			
		},
		"attrs":{"title":"напечатать прайс"}
	});	
	cont.addElement(this.m_printPriceBtn);

	this.addControl(cont);	
		
	this.m_ctrlSave = new ButtonCmd(id+"btnSave",
		{"caption":"Записать",
		"onClick":function(){
			self.onClickSave();
		},
		"attrs":{
			"title":"Записать"}
		});
	
}
extend(ClientPriceListDialog_View,ViewDialog);

ClientPriceListDialog_View.prototype.onGetData = function(resp){
	ClientPriceListDialog_View.superclass.onGetData.call(this,resp);	
	var id=this.getDataControl(this.getId()+"_id").control.getAttr("old_id");
	this.m_productList.setPriceListId(id);	
	this.m_productList.m_grid.onRefresh();
	this.m_productList.setEnabled(true);
	this.m_printPriceBtn.setEnabled(true);
}	
