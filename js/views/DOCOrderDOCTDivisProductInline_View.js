/* Copyright (c) 2015 
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
function DOCOrderDOCTDivisProductInline_View(id,options){
	options = options || {};

	var model_id = "DOCOrderDOCTProductDialog_Model";	
	this.m_measureCheckText = "";
	
	options.readMethodId = "get_object_for_divis";
	options.readModelId = model_id;
	DOCOrderDOCTDivisProductInline_View.superclass.constructor.call(this,
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
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
	);
	
	//Продукция
	this.addDataControl(new Edit(id+"_product_descr",
		{"name":"product_descr","enabled":false,"tableLayout":false,
		"attrs":{"size":"25"}}
		),
		{"modelId":model_id,
		"valueFieldId":"product_descr",
		"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null}
	);
	//Упаковка
	this.addDataControl(new Edit(id+"_pack_exists",
		{"name":"pack_exists","enabled":false,"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":null,
		"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
	);
	//Количество базовое
	this.addDataControl(new EditFloat(id+"_quant_base_measure_unit",
		{"name":"quant_base_measure_unit",
		"tableLayout":false,
		"attrs":{"size":"5"},
		"events":{
			"input":function(){
				self.onChangeBaseQuant();
			}
		}		
		}
		),
		{"modelId":model_id,
		"valueFieldId":"quant_base_measure_unit",
		"keyFieldIds":null},
		{"valueFieldId":"quant_base_measure_unit","keyFieldIds":null}
	);
	//Цена
	this.addDataControl(new EditFloat(id+"_price",
		{"name":"price",
		"tableLayout":false,
		"enabled":false,
		"attrs":{"size":"5"}
		}
		),
		{"modelId":model_id,
		"valueFieldId":"price",
		"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null}
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
		{"valueFieldId":null,"keyFieldIds":null}
	);
	//Количество документа
	this.addDataControl(new EditFloat(id+"_quant",
		{"name":"quant",
		"tableLayout":false,
		"attrs":{"size":"5"},
		"events":{
			"input":function(){
				self.onChangeDocQuant();
			}
		}				
		}
		),
		{"modelId":model_id,
		"valueFieldId":"quant",
		"keyFieldIds":null},
		{"valueFieldId":"quant","keyFieldIds":null}
	);
	
	//Сумма
	this.addDataControl(new EditFloat(id+"_total_descr",
		{"name":"total_descr",
		"tableLayout":false,
		"enabled":false,
		"attrs":{"size":"5"}
		}
		),
		{"modelId":model_id,
		"valueFieldId":"total_descr",
		"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null}
	);	
}
extend(DOCOrderDOCTDivisProductInline_View,ViewInlineGridEditDOCT);

DOCOrderDOCTDivisProductInline_View.prototype.onChangeQuant = function(
				measureUnitId,
				measureUnitIsIntId,
				getQuantConfirmedId,
				setQuantConfirmedId,
				measureUnitFromId
){
	var pref = "DOCOrderDOCTDivisProductList_View_gridEditView_";
	var product_id = nd(pref+"product_id").getAttribute("old_product_id");
	var measure_unit_id = nd(pref+measureUnitId).getAttribute("old_"+measureUnitId);
	var measure_unit_is_int = nd(pref+measureUnitIsIntId).getAttribute("old_"+measureUnitIsIntId);
	var mes_length = nd(pref+"mes_length").getAttribute("old_mes_length");
	var mes_width = nd(pref+"mes_width").getAttribute("old_mes_width");
	var mes_height = nd(pref+"mes_height").getAttribute("old_mes_height");	
	var quant = toFloat(nd(pref+getQuantConfirmedId).value);
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
				var q_node = nd(pref+setQuantConfirmedId);
				q_node.m_isInt = measure_unit_is_int;
				
				var m = resp.getModelById("calc_quant");
				m.setActive(true);
				if (m.getNextRow()){
					q_node.value = m.getFieldValue("quant");
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
				self.getViewControl(pref+setQuantConfirmedId).setComment(self.m_measureCheckText);				
			}
		}
		);
	}
	else{
		nd(pref+setQuantConfirmedId).value="0";
	}
}
DOCOrderDOCTDivisProductInline_View.prototype.onChangeBaseQuant = function(){
	this.onChangeQuant(
		"measure_unit_id",
		"measure_unit_is_int",
		"quant_base_measure_unit",
		"quant",
		"0"
	);
}
DOCOrderDOCTDivisProductInline_View.prototype.onChangeDocQuant = function(){
	this.onChangeQuant(
		"base_measure_unit_id",
		"base_measure_unit_is_int",
		"quant",
		"quant_base_measure_unit",
		nd("DOCOrderDOCTDivisProductList_View_gridEditView_measure_unit_id").getAttribute("old_measure_unit_id")
	);
}
DOCOrderDOCTDivisProductInline_View.prototype.setMethodParams = function(pm,checkRes){	
	DOCOrderDOCTDivisProductInline_View.superclass.setMethodParams.call(this,pm,checkRes);
	var quantCtrl = this.getViewControl("DOCOrderDOCTDivisProductList_View_gridEditView_quant");
	var er_text = this.m_measureCheckText;
	try{
		quantCtrl.validate(quantCtrl.getValue());
	}
	catch(e){
		checkRes.incorrect_vals=true;
		er_text+=(er_text=="")? er_text:", ";
		er_text+=e.message;
	}
	if (er_text!="") {
		checkRes.incorrect_vals=true;
		quantCtrl.setComment(er_text);
	}
	
}

DOCOrderDOCTDivisProductInline_View.prototype.onGetData = function(resp){
	DOCOrderDOCTDivisProductInline_View.superclass.onGetData.call(this,resp);
	var m = resp.getModelById("DOCOrderDOCTProductDialog_Model",true);
	if (m.getNextRow()){
		this.getViewControl(this.getId()+"_quant_base_measure_unit").setMaxValue(
			m.getFieldValue("quant_orig"));
		this.getViewControl(this.getId()+"_quant").setMaxValue(
			m.getFieldValue("doc_quant_orig"));
	}
}