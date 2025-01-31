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
function DOCOrderDOCTShipmentInline_View(id,options){
	options = options || {};

	var model_id = "DOCOrderDOCTProductDialog_Model";	
	this.m_measureCheckText = "";
	
	options.readModelId = model_id;
	DOCOrderDOCTShipmentInline_View.superclass.constructor.call(this,
		id,options);
		
	var self = this;
	
	//невидимые поля
	this.addDataControl(new Control(id+"_product_id",
		"span",
		{"name":"product_id",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"product_id",
		"keyFieldIds":null},
		{"valueFieldId":"product_id","keyFieldIds":null}
	);
	this.addDataControl(new Control(id+"_measure_unit_id",
		"span",
		{"name":"measure_unit_id",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"measure_unit_id",
		"keyFieldIds":null},
		{"valueFieldId":"measure_unit_id","keyFieldIds":null}
	);
	this.addDataControl(new Control(id+"_measure_unit_is_int",
		"span",
		{"name":"measure_unit_is_int",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"measure_unit_is_int",
		"keyFieldIds":null},
		{"valueFieldId":"measure_unit_is_int","keyFieldIds":null}
	);
	this.addDataControl(new Control(id+"_base_measure_unit_id",
		"span",
		{"name":"base_measure_unit_id",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"base_measure_unit_id",
		"keyFieldIds":null},
		{"valueFieldId":"base_measure_unit_id","keyFieldIds":null}
	);	
	this.addDataControl(new Control(id+"_base_measure_unit_is_int",
		"span",
		{"name":"base_measure_unit_is_int",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"base_measure_unit_is_int",
		"keyFieldIds":null},
		{"valueFieldId":"base_measure_unit_is_int","keyFieldIds":null}
	);
	
	this.addDataControl(new Control(id+"_mes_length",
		"span",
		{"name":"mes_length",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"mes_length",
		"keyFieldIds":null},
		{"valueFieldId":"mes_length","keyFieldIds":null}
	);
	this.addDataControl(new Control(id+"_mes_width",
		"span",
		{"name":"mes_width",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"mes_width",
		"keyFieldIds":null},
		{"valueFieldId":"mes_width","keyFieldIds":null}
	);
	this.addDataControl(new Control(id+"_mes_height",
		"span",
		{"name":"mes_height",
		"visible":false,
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"mes_height",
		"keyFieldIds":null},
		{"valueFieldId":"mes_height","keyFieldIds":null}
	);
	
	//Продукция
	this.addDataControl(new Edit(id+"_product_descr",
		{"name":"product_descr","enabled":false,"tableLayout":false,
		"attrs":{"size":"25"}}
		),
		{"modelId":model_id,
		"valueFieldId":"product_descr",
		"keyFieldIds":null},
		{"valueFieldId":"product_descr","keyFieldIds":null}
	);
	//Единица базовая
	this.addDataControl(new Edit(id+"_base_measure_unit_descr",
		{"name":"base_measure_unit_descr",
		"tableLayout":false,
		"enabled":false,
		"attrs":{"size":"5"}
		}
		),
		{"modelId":model_id,
		"valueFieldId":"base_measure_unit_descr",
		"keyFieldIds":null},
		{"valueFieldId":"base_measure_unit_descr","keyFieldIds":null}
	);
	//Количество базовое
	this.addDataControl(new EditFloat(id+"_quant_base_measure_unit",
		{"name":"quant_base_measure_unit",
		"tableLayout":false,
		"precision":"9",
		"enabled":false,
		"attrs":{"size":"10","maxlength":"20"}
		}
		),
		{"modelId":model_id,
		"valueFieldId":"quant_base_measure_unit",
		"keyFieldIds":null},
		{"valueFieldId":"quant_base_measure_unit","keyFieldIds":null}
	);
	//Количество подтверждено базовое
	this.addDataControl(new EditFloat(id+"_quant_confirmed_base_measure_unit",
		{"name":"quant_confirmed_base_measure_unit",
		"precision":"9",
		"tableLayout":false,
		"attrs":{"size":"10","maxlength":"20"},
		"events":{
			"input":function(){
				self.onChangeBaseQuant();
			},
			"focus":function(){
				$(this.getNode()).select();
			}
		}
		}
		),
		{"modelId":model_id,
		"valueFieldId":"quant_confirmed_base_measure_unit",
		"keyFieldIds":null},
		{"valueFieldId":"quant_confirmed_base_measure_unit","keyFieldIds":null}
	);
	
	//Единица документа
	this.addDataControl(new Edit(id+"_measure_unit_descr",
		{"name":"measure_unit_descr",
		"tableLayout":false,
		"enabled":false,
		"attrs":{"size":"5"}
		}
		),
		{"modelId":model_id,
		"valueFieldId":"measure_unit_descr",
		"keyFieldIds":null},
		{"valueFieldId":"measure_unit_descr","keyFieldIds":null}
	);
	//Количество документа
	this.addDataControl(new EditFloat(id+"_quant",
		{"name":"quant",
		"tableLayout":false,
		"enabled":false,
		"attrs":{"size":"5"}}
		),
		{"modelId":model_id,
		"valueFieldId":"quant",
		"keyFieldIds":null},
		{"valueFieldId":"quant","keyFieldIds":null}
	);
	
	//Количество подтверждено документ
	this.m_quantCtrl = new DOCOrderQuantEdit(id+"_quant_confirmed_measure_unit",
		{"name":"quant_confirmed_measure_unit",
		"tableLayout":false,
		"events":{
			"input":function(){
				self.onChangeDocQuant();
			},
			"focus":function(){
				$(this.getNode()).select();
			}
		},	
		"attrs":{"size":"5"}}
	);	
	this.addDataControl(this.m_quantCtrl,
		{"modelId":model_id,
		"valueFieldId":"quant_confirmed_measure_unit",
		"keyFieldIds":null},
		{"valueFieldId":"quant_confirmed","keyFieldIds":null}
	);
	
}
extend(DOCOrderDOCTShipmentInline_View,ViewInlineGridEditDOCT);

DOCOrderDOCTShipmentInline_View.prototype.onChangeQuant = function(
				measureUnitId,
				measureUnitIsIntId,
				getQuantConfirmedId,
				setQuantConfirmedId,
				measureUnitFromId
){
	var product_id = nd("DOCOrderDOCTShipmentList_View_gridEditView_product_id").getAttribute("old_product_id");
	var measure_unit_id = nd("DOCOrderDOCTShipmentList_View_gridEditView_"+measureUnitId).getAttribute("old_"+measureUnitId);
	var measure_unit_is_int = nd("DOCOrderDOCTShipmentList_View_gridEditView_"+measureUnitIsIntId).getAttribute("old_"+measureUnitIsIntId);
	var mes_length = nd("DOCOrderDOCTShipmentList_View_gridEditView_mes_length").getAttribute("old_mes_length");
	var mes_width = nd("DOCOrderDOCTShipmentList_View_gridEditView_mes_width").getAttribute("old_mes_width");
	var mes_height = nd("DOCOrderDOCTShipmentList_View_gridEditView_mes_height").getAttribute("old_mes_height");	
	var quant = toFloat(nd("DOCOrderDOCTShipmentList_View_gridEditView_"+getQuantConfirmedId).value);
	if (quant){
		var self = this;
		var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
		
		contr.run("calc_quant",{
			"async":true,
			"params":{
				"product_id":product_id,
				"mes_length":mes_length,
				"mes_width":mes_width,
				"mes_height":mes_height,
				"quant":quant,
				"measure_unit_id":measure_unit_id,
				"measure_unit_id_from":measureUnitFromId
			},
			"func":function(resp){
				self.m_quantCtrl.m_isInt = measure_unit_is_int;
				
				var m = resp.getModelById("calc_quant");
				m.setActive(true);
				if (m.getNextRow()){
					nd("DOCOrderDOCTShipmentList_View_gridEditView_"+setQuantConfirmedId).value=
						m.getFieldValue("quant");
				}
				//measure unit check
				self.m_measureCheckText = "";	
				var m = resp.getModelById("product_measure_units_check");
				m.setActive(true);
				while (m.getNextRow()){
					self.m_measureCheckText+=(self.m_measureCheckText!="")? ", ":"Дробные значения для единиц: ";
					self.m_measureCheckText+=
						m.getFieldValue("measure_unit_descr")+" ("+
						m.getFieldValue("quant")+")";
				}
				self.m_quantCtrl.setComment(self.m_measureCheckText);				
			}
		}
		);
	}
	else{
		nd("DOCOrderDOCTShipmentList_View_gridEditView_"+setQuantConfirmedId).value="0";
	}
}
DOCOrderDOCTShipmentInline_View.prototype.onChangeBaseQuant = function(){
	this.onChangeQuant(
		"measure_unit_id",
		"measure_unit_is_int",
		"quant_confirmed_base_measure_unit",
		"quant_confirmed_measure_unit",
		"0"
	);
}
DOCOrderDOCTShipmentInline_View.prototype.onChangeDocQuant = function(){
	this.onChangeQuant(
		"base_measure_unit_id",
		"base_measure_unit_is_int",
		"quant_confirmed_measure_unit",
		"quant_confirmed_base_measure_unit",
		nd("DOCOrderDOCTShipmentList_View_gridEditView_measure_unit_id").getAttribute("old_measure_unit_id")
	);
}
DOCOrderDOCTShipmentInline_View.prototype.setMethodParams = function(pm,checkRes){	
	DOCOrderDOCTShipmentInline_View.superclass.setMethodParams.call(this,pm,checkRes);
	var er_text = this.m_measureCheckText;
	try{
		this.m_quantCtrl.validate(this.m_quantCtrl.getValue());
	}
	catch(e){
		checkRes.incorrect_vals=true;
		er_text+=(er_text=="")? er_text:", ";
		er_text+=e.message;
	}
	if (er_text!="") {
		checkRes.incorrect_vals=true;
		this.m_quantCtrl.setComment(er_text);
	}
	
}

DOCOrderDOCTShipmentInline_View.prototype.onGetData = function(resp){
	DOCOrderDOCTShipmentInline_View.superclass.onGetData.call(this,resp);	
	
	var m = resp.getModelById("DOCOrderDOCTProductDialog_Model",true);
	if (m.getNextRow()){
		this.m_quantCtrl.m_isInteger = (m.getFieldValue("measure_unit_is_int")=="true");
		//console.log("setting m_isInteger="+this.m_quantCtrl.m_isInteger);
	}
}
