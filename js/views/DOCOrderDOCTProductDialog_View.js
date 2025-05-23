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
function DOCOrderDOCTProductDialog_View(id,options){
	options = options || {};
	options.readModelId="DOCOrderDOCTProductDialog_Model";
	options.tagName = "div";
	options.formCaption = "Продукция заявки";
	
	DOCOrderDOCTProductDialog_View.superclass.constructor.call(this,
		id,options);	
		
	this.m_headWarehouseCtrl = options.params.warehouseCtrl;
	
	var self = this;
	
	this.m_evOnProdChange = function(e){
		e = EventHandler.fixMouseEvent(e);
		if (e.target.selectedIndex>=0){
			self.onProductSelected(
				e.target.options[e.target.selectedIndex].value);
		}		
	};
	
	this.m_evOnWHChange = function(e){
			e = EventHandler.fixMouseEvent(e);
			if (e.target.selectedIndex>=0){
				self.onWarehouseSelected(e.target.options[e.target.selectedIndex].value);
		}		
	};	
	this.m_evOnProductName = function (e) {
		self.m_btnAddTo1c.setEnabled(true);
		self.m_ctrlNameForPrint.setValue("");
	}
	//******* ПАНЕЛЬ НАИМЕНОВАНИЕ*************
	var cont=new ControlContainer("product_cont","div",{"className":"row"});
	//Наименование
	// var ctrl = new ProductForOrderEditObject({
	this.m_productName = new ProductEditObject("product_id",
		id+"_product",
		false,
		{ 
			extraFields: ["ref", "name_full"],
			onClear: function(){
				self.m_btnAddTo1c.setEnabled(true);
			},
			onSelected: function(row){
				self.m_ctrlNameForPrint.setValue(row.getAttribute("name_full"));
				self.m_btnAddTo1c.setEnabled(false);
				self.createProduct();
			}
		}
	);
	this.bindControl(this.m_productName,
		{"modelId":"DOCOrderDOCTProductDialog_Model","valueFieldId":"product_descr","keyFieldIds":["product_id"]},
		{"valueFieldId":null,"keyFieldIds":["product_id"]});	
	cont.addElement(this.m_productName);

	//for 1c
	this.m_ctrlNameForPrint = new EditString(id+"_name_for_print",{
		"labelCaption":"Наименование для печати:",
		"name":"name_for_print",
		"tableLayout":false,
		"buttonClear":false,
		"attrs":{"maxlength":500,"size":5}}
	);
	cont.addElement(this.m_ctrlNameForPrint);

	this.m_btnAddTo1c = new ButtonCmd(id+"btnAddTo1c",
					{"caption":"Создать в 1с",
					//"enabled":false,
					"onClick":function(){
						self.onCreateIn1c();
					},
					"attrs":{
						"title":"создать номенклатуру в 1с"
					}
				}
			);
	cont.addElement(this.m_btnAddTo1c);

	//
	//Склад из списка складов продукции
	this.m_WarehouseCtrl = new OrderWarehouseEditObject("warehouse_id",id+"_warehouse",false,options.params.warehouseId);
	cont.addElement(this.m_WarehouseCtrl);

	this.addControl(cont);	
}
extend(DOCOrderDOCTProductDialog_View,ViewDialogGridEditDOCT);

/*
	Собираем динамически панель с размерами исходя из
	параметров продукции
*/
DOCOrderDOCTProductDialog_View.prototype.onProductSelected = function(productId){
	//обновим список складов
	//debugger;
	var old_wh_id = this.m_WarehouseCtrl.getFieldValue();
	this.m_WarehouseCtrl.setProductId(productId);
	this.m_WarehouseCtrl.onRefresh();
	//если старый склад есть в списке - не меняем!
	var wh_f = false;
	for(var wh_id in this.m_WarehouseCtrl.m_elements){
		if (this.m_WarehouseCtrl.m_elements[wh_id].getOptionId()==old_wh_id){
			wh_f = true;
			break;
		}
	}	
	if (!wh_f){
		this.m_WarehouseCtrl.setByIndex(1);		
	}
	
	// this.setWHouseWarn();
	
	this.m_params.warehouseId = this.m_WarehouseCtrl.getFieldValue();
	/*
	for (var i in this.m_dimenCont.m_elements){
		this.m_dimenCont.m_elements[i].removeDOM();
		this.m_dimenCont.m_elements[i].clear();
		delete this.m_dimenCont.m_elements[i];
	}
	this.m_dimenCont.clear();
	this.m_dimenCont.removeDOM();
	*/
	if (this.m_prodAttrCont){
		this.m_prodAttrCont.removeDOM();
	}
	
	if (productId!="undefined"){
		//get product attrs
		var self = this;
		var contr = new Product_Controller(new ServConnector(HOST_NAME));
		contr.run("get_object",{
			"async":false,
			"params":{"id":productId},
			"func":function(resp){
				var model = resp.getModelById("ProductDialog_Model");
				model.setActive(true);
				if (model.getNextRow()){
					self.onGetProductAttrs(model);
				}
			},
			"errControl":this.getErrorControl()
		});
	}
}
DOCOrderDOCTProductDialog_View.prototype.onGetProductAttrs = function(model){	
	var model_id = "DOCOrderDOCTProductDialog_Model";
	
	//Размеры+упаковка+количество
	this.m_prodAttrCont = new ControlContainer("prod_param_cont","div",{"className":"row"});
	
	var panel_n_tag = "h4";
	
	var cont = new ControlContainer(uuid(),"div",{"className":get_bs_col()+"4"});	
	//размеры
	// cont.addElement(new Control(uuid(),panel_n_tag,{value:"Размеры"}));
	
	var dimen_ids=["length","width","height"];
	var col_ind = 0;	
	var self = this;
	var id = this.getId();
	
	for (var ind=0;ind<dimen_ids.length;ind++){
		if (model.getFieldValue("mes_"+dimen_ids[ind]+"_exists")=="true"){
			var opts = {
				"name":"mes_"+dimen_ids[ind],
				"tableLayout":false,
				"className":"form-control",
				"labelCaption":model.getFieldValue("mes_"+dimen_ids[ind]+"_name")+", мм.:",
				"minValue":model.getFieldValue("mes_"+dimen_ids[ind]+"_min_val"),
				"maxValue":model.getFieldValue("mes_"+dimen_ids[ind]+"_max_val"),
				"attrs":{"maxlength":"10","size":"5"},
				"events":{
					"input":function(){
						self.calcTotals();
					}
				}
				};
			//умолчание
			var v = model.getFieldValue("mes_"+dimen_ids[ind]+"_def_val");
			if (v){
				opts.value = v;
			}
			//фиксированное 
			if (model.getFieldValue("mes_"+dimen_ids[ind]+"_fix")=="true"){
				opts.attrs=opts.attrs||{};
				opts.attrs["disabled"] = "disabled";
				opts.attrs["value"]=model.getFieldValue("mes_"+dimen_ids[ind]+"_fix_val");
			}
			
			var ctrl = new EditNum(id+"_mes_"+dimen_ids[ind],opts);
			this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind],
				"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind],"keyFieldIds":null}
			);
			cont.addElement(ctrl);
			
			col_ind+=1;
		}
	}
	this.m_prodAttrCont.addElement(cont);
	
	//ПАНЕЛЬ Упаковка средняя
	this.m_packNotFree=false;

	// var cont = new ControlContainer("pack_cont","div",{"className":get_bs_col()+"4"});
	// cont.addElement(new Control(uuid(),panel_n_tag,{"value":"Упаковка"}));
	// var opts = {
	// 	"name":"pack_exists",
	// 	"labelCaption":model.getFieldValue("pack_name")+":",
	// 	"tableLayout":false,
	// 	"labelAlign":"right"
	// };
	// if (model.getFieldValue("pack_not_free")=="false"){
	// 	//бесплатно
	// 	this.m_packNotFree=false;
	// 	opts.checked="checked";
	// 	opts.attrs=opts.attrs||{};
	// 	opts.attrs.disabled = "disabled";
	// 	opts.events={"change":function(){
	// 			self.evOnPackExistsChange();
	// 		}			
	// 	};		
	// }
	// else{
	// 	//Платно
	// 	if (model.getFieldValue("pack_default")=="true"){
	// 		opts.checked="checked";
	// 		opts.attrs=opts.attrs||{};
	// 		opts.attrs.disabled = "disabled";					
	// 		opts.events={"change":function(){
	// 				self.evOnPackExistsChange();
	// 			}			
	// 		};
	//
	// 	}
	// 	else{
	// 		opts.events={"change":function(){
	// 				self.evOnPackExistsChange();
	// 				self.calcTotals();					
	// 			}			
	// 		};
	// 	}
	// }
	// this.m_packCtrl = new EditCheckBox(id+"_pack_exists",opts);
	// this.bindControl(this.m_packCtrl,{"modelId":model_id,"valueFieldId":"pack_exists",
	// 	"keyFieldIds":null},{"valueFieldId":"pack_exists","keyFieldIds":null}
	// );
	// cont.addElement(this.m_packCtrl);
	// if (!this.m_packNotFree){
	// 	cont.addElement(new Control("","span",{"value":"Бесплатная упаковка."}));
	// }
	// else{
	// 	//включать в стоимость
	// 	this.m_packInPriceCtrl = new EditCheckBox(id+"_pack_in_price",{
	// 		"name":"pack_in_price",
	// 		"labelCaption":"Включать стоимость упаковки в цену:",
	// 		"tableLayout":false,
	// 		"enabled":false,
	// 		"labelAlign":"right",
	// 		"events":{"change":function(){
	// 				self.calcTotals();
	// 			}
	// 		}
	// 		});
	// 	this.bindControl(this.m_packInPriceCtrl,{"modelId":model_id,"valueFieldId":"pack_in_price",
	// 		"keyFieldIds":null},{"valueFieldId":"pack_in_price","keyFieldIds":null}
	// 	);		
	// 	cont.addElement(this.m_packInPriceCtrl);
	// }
	// this.m_prodAttrCont.addElement(cont);

	//Панель количество правая
	var cont =new ControlContainer("quant_cont","div",{"className":get_bs_col()+"4"});
	cont.addElement(new Control(uuid(),panel_n_tag,{"value":"Количество:"}));
	
	var sub_cont =new ControlContainer("quant_cont","div",{"className":"row"});
	this.m_quantCtrl = new DOCOrderQuantEdit(id+"_quant",
		{"name":"quant","tableLayout":false,
		"is_int": true,
		"editContClassName":"input-group "+get_bs_col()+"6",
		"attrs":{"maxlength":"19","required":"required"},
		"notZero":true,		
		"events":{"input":function(){
					self.calcTotals();
				}
			}
		}		
	);
	this.bindControl(this.m_quantCtrl,{"modelId":model_id,"valueFieldId":"quant",
		"keyFieldIds":null},{"valueFieldId":"quant","keyFieldIds":null}
	);				
	sub_cont.addElement(this.m_quantCtrl);	
	//Единица	
	var productId = model.getFieldValue("id");
	var ctrl =new ProductMeasureUnitEditObject(
		{"fieldId":"measure_unit_id",
		"controlId":id+"_measure_unit",
		"inLine":true,
		"productId":productId,
		"options":{"winObj":this.m_winObj,
			"editContClassName":"input-group "+get_bs_col()+"6"
			// "events":{
			// 	"change":function(){
			// 		// self.calcQuant();
			// 	}
			// }
		}
		});
	//var mu_descr = (this.m_isNew)? "base_measure_unit_descr":"measure_unit_descr";
	//var mu_id = (this.m_isNew)? "base_measure_unit_id":"measure_unit_id";
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"measure_unit_descr",
		"keyFieldIds":["measure_unit_id"]},
		{"valueFieldId":null,"keyFieldIds":["measure_unit_id"]}
	);
	if (this.m_isNew){
		var base_measure_unit_id = model.getFieldValue("base_measure_unit_id");
		if (base_measure_unit_id!=undefined){
			ctrl.setFieldValue("id",base_measure_unit_id);
			ctrl.setValue(model.getFieldValue("base_measure_unit_descr"));
		}
	}
	sub_cont.addElement(ctrl);	
	cont.addElement(sub_cont);	

	//Итоги
	var sub_cont =new ControlContainer("total_cont","div",{className:"row"});
	var cl_lbl = get_bs_col()+"8";
	var cl_fl = get_bs_col()+"4 DOCOrderTot";
	
	//количество
	var cont_quant =new ControlContainer("total_quant_cont","div",{className:"form-group"});
	// cont_quant.addElement(new Control(uuid(),"Label",{
	// 	"className":cl_lbl,
	// 	"value":"Количество в базовых единицах, м3:"
	// 	}))
	this.m_totQuantCtrl = new Control(id+"_quant_base_measure_unit",
		"span",{
			className:cl_fl,
			"visible":false
		});
	this.bindControl(this.m_totQuantCtrl,{"modelId":model_id,
		"valueFieldId":"quant_base_measure_unit",
		"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null}
	);				
	cont_quant.addElement(this.m_totQuantCtrl);	
	sub_cont.addElement(cont_quant);
	
	//объем
	// var cont_vol =new ControlContainer("total_vol_cont","div",{className:"form-group"});
	// cont_vol.addElement(new Control(uuid(),"Label",{
	// 	"className":cl_lbl,
	// 	"value":"Транспортировочный объем, м3:"
	// 	}))
	//
	// this.m_totVolCtrl = new Control(id+"_volume",
	// 	"span",{className:cl_fl});
	// this.bindControl(this.m_totVolCtrl,{"modelId":model_id,
	// 	"valueFieldId":"volume",
	// 	"keyFieldIds":null},
	// 	{"valueFieldId":null,"keyFieldIds":null}
	// );				
	// cont_vol.addElement(this.m_totVolCtrl);
	// sub_cont.addElement(cont_vol);
	//
	//масса
	// var cont_w =new ControlContainer("total_w_cont","div",{className:"form-group"});
	// cont_w.addElement(new Control(uuid(),"Label",{
	// 	"className":cl_lbl,
	// 	"value":"Масса, т.:"
	// 	}))	
	// this.m_totWeightCtrl = new Control(id+"_weight",
	// 	"span",{"className":cl_fl});
	// this.bindControl(this.m_totWeightCtrl,{"modelId":model_id,
	// 	"valueFieldId":"weight",
	// 	"keyFieldIds":null},
	// 	{"valueFieldId":null,"keyFieldIds":null}
	// );				
	// cont_w.addElement(this.m_totWeightCtrl);
	// sub_cont.addElement(cont_w);
	
	//разрешение на редактирование цены, суммы
	var def_money_en = false;
	if (SERV_VARS.ROLE_ID!="client"){
		def_money_en = true;
		this.m_priceEditCtrl = new EditCheckBox(id+"_price_edit",{
				"name":"price_edit",
				"labelCaption":"Произвольная цена:",
				"tableLayout":false,
				"enabled":true,
				"checked":def_money_en,
				"labelAlign":"right",
				"events":{
					"change":function(){
						var v = (self.m_priceEditCtrl.getValue()=="true");
						self.m_totPriceCtrl.setEnabled(v);
						self.m_totSumCtrl.setEnabled(v);
						//если по прайсу - пересчитать!
						if(!v){
							self.m_priceEditted = false;
							self.calcTotals();
						}
					}
				}
			}
		);
		this.bindControl(this.m_priceEditCtrl,{"modelId":model_id,"valueFieldId":"price_edit",
			"keyFieldIds":null},{"valueFieldId":"price_edit","keyFieldIds":null}
		);
		sub_cont.addElement(this.m_priceEditCtrl);

		//price_round added on 06/08/24
		this.m_priceRoundCtrl = new EditCheckBox(id+"_price_round",{
				"name":"price_round",
				"labelCaption":"Округлять сумму",
				"tableLayout":false,
				"enabled":true,
				"checked":def_money_en,
				"labelAlign":"right",
				"events":{
					"change":function(){
						self.calcTotals();
					}
				}
			}
		);
		this.bindControl(this.m_priceRoundCtrl,{"modelId":model_id,"valueFieldId":"price_round",
			"keyFieldIds":null},{"valueFieldId":"price_round","keyFieldIds":null}
		);
		sub_cont.addElement(this.m_priceRoundCtrl);
	}
		
	//цена
	this.m_totPriceCtrl = new EditMoney(id+"_price",
		{"labelCaption":"Цена, руб.:",
		"name":"price",
		"tableLayout":false,
		"enabled":def_money_en,
		"events":{
				"input":function(){
					//пересчет суммы
					self.calcTotals();
					self.m_priceEditted = true;
				}
			}			
	});
	this.bindControl(this.m_totPriceCtrl,{"modelId":model_id,
		"valueFieldId":"price_no_deliv",
		"keyFieldIds":null},
		{"valueFieldId":"price_no_deliv","keyFieldIds":null}
	);				
	sub_cont.addElement(this.m_totPriceCtrl);
	
	//Сумма
	this.m_totSumCtrl = new EditMoney(id+"_total",
		{"labelCaption":"Сумма, руб.:",
		"enabled":def_money_en,
		"name":"total",
		"tableLayout":false,
		"events": {
			"input":function(){
				//пересчет Цены
				var pr = toFloat(self.m_totSumCtrl.getValue()) / toFloat(self.m_totQuantCtrl.getValue());
				pr = Math.round(pr * 100) / 100;
				self.m_totPriceCtrl.setValue(pr.toFixed(2));
				self.m_priceEditted = true;
			}
		}
	});
	this.bindControl(this.m_totSumCtrl,{"modelId":model_id,
		"valueFieldId":"total_no_deliv",
		"keyFieldIds":null},
		{"valueFieldId":"total_no_deliv","keyFieldIds":null}
	);				
	sub_cont.addElement(this.m_totSumCtrl);
		
	cont.addElement(sub_cont);	
	this.m_prodAttrCont.addElement(cont);	
	
	this.m_prodAttrCont.toDOM(this.m_node);	
	
	this.m_quantCtrl.getNode().focus();
}
DOCOrderDOCTProductDialog_View.prototype.onWarehouseSelected = function(warehouseId){
	//обновим список с продукцией
	var ctrl = this.getDataControl(this.getId()+"_product").control;
	// ctrl.setWarehouseId(warehouseId);
	// ctrl.onRefresh();
	
	// this.setWHouseWarn();	
		
	this.m_params.warehouseId = warehouseId;
	this.calcTotals();
}
DOCOrderDOCTProductDialog_View.prototype.toDOM = function(parent){
	DOCOrderDOCTProductDialog_View.superclass.toDOM.call(this,parent);
	
	//События	
	EventHandler.addEvent(
		this.getDataControl(this.getId()+"_product").control.getNode(),
		"change", this.m_evOnProdChange
	);
	EventHandler.addEvent(
		this.m_WarehouseCtrl.getNode(),
		"change", this.m_evOnWHChange
	);
	EventHandler.addEvent(
		this.m_productName.getNode(),
		"input", this.m_evOnProductName
	);
}
DOCOrderDOCTProductDialog_View.prototype.removeDOM = function(){
	DOCOrderDOCTProductDialog_View.superclass.removeDOM.call(this);
	//События
	EventHandler.removeEvent(
		this.getDataControl(this.getId()+"_product").control.getNode(),
		"change", this.m_evOnProdChange
	);
	EventHandler.removeEvent(
		this.m_WarehouseCtrl.getNode(),
		"change", this.m_evOnWHChange
	);
	EventHandler.removeEvent(
		this.m_productName.getNode(),
		"change", this.m_evOnProductName
	);
	if (this.m_packCtrl){
		EventHandler.removeEvent(
			this.m_packCtrl.getNode(),
			"change", this.m_evOnPackExistsChange);			
	}
}

DOCOrderDOCTProductDialog_View.prototype.onGetData = function(resp,isNew){
	var model = resp.getModelById("DOCOrderDOCTProductDialog_Model");	
	model.setActive(true);
	if (model.getNextRow()){
		var product_id = model.getFieldValue("product_id");
		this.onProductSelected(product_id);
				
		if (SERV_VARS.ROLE_ID!="client"){
			var pr_en = (model.getFieldValue("price_edit")=="true");
			this.m_totPriceCtrl.setEnabled(pr_en);
			this.m_totSumCtrl.setEnabled(pr_en);
		}
		
		this.m_oldMeasureUnitId = model.getFieldValue("measure_unit_id");
	}		
	model.setRowBOF();
	DOCOrderDOCTProductDialog_View.superclass.onGetData.call(this,resp,isNew);	
}

DOCOrderDOCTProductDialog_View.prototype.onWriteOk = function(resp){
	DOCOrderDOCTProductDialog_View.superclass.onWriteOk.call(this,resp);
	this.m_headWarehouseCtrl.setByFieldId(this.m_WarehouseCtrl.getValue());
}
DOCOrderDOCTProductDialog_View.prototype.calcTotals = function(){
	const quant = parseFloat(this.m_quantCtrl.getValue());
	const price = parseFloat(this.m_totPriceCtrl.getValue());
	const tot = (isNaN(quant) | isNaN(price))? 0 : quant * price;
	this.m_totSumCtrl.setValue(tot.toFixed(2));
	console.log(quant,price,tot)
}

DOCOrderDOCTProductDialog_View.prototype.setTotals = function(struc){
	this.m_totQuantCtrl.setValue(struc.base_quant);
	// this.m_totVolCtrl.setValue(struc.volume_m);
	// this.m_totWeightCtrl.setValue(struc.weight_t);
	this.m_totPriceCtrl.setValue(struc.price);
	this.m_totSumCtrl.setValue(struc.total);
}
DOCOrderDOCTProductDialog_View.prototype.setMethodParams = function(pm,checkRes){	
	DOCOrderDOCTProductDialog_View.superclass.setMethodParams.call(this,pm,checkRes);
	
	if (this.m_measureCheckText!=undefined
	&&this.m_measureCheckText!="") {
		checkRes.incorrect_vals=true;
		this.m_quantCtrl.setComment(this.m_measureCheckText);
	}	
	pm.setParamValue("warehouse_id",this.m_params.warehouseId);
	pm.setParamValue("client_id",this.m_params.clientId);
	pm.setParamValue("deliv_to_third_party",this.m_params.toThirdParty);
}

DOCOrderDOCTProductDialog_View.prototype.evOnPackExistsChange = function(){	
	if (this.m_packInPriceCtrl){
		var en;
		if (this.m_packCtrl.getValue()=="false"){
			this.m_packInPriceCtrl.setValue(false);		
			en = false;
		}
		else{
			en = true;
		}
		this.m_packInPriceCtrl.setEnabled(en);
	}
}
DOCOrderDOCTProductDialog_View.prototype.calcQuant = function(){
	var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
	var id = this.getId();
	var par_measure_unit_id = this.getDataControlValue(id+"_measure_unit");
	var par_product_id = this.getDataControlValue(id+"_product");
	var par_mes_l = parseInt(this.getDataControlValue(id+"_mes_length"));
	var par_mes_w = parseInt(this.getDataControlValue(id+"_mes_width"));
	var par_mes_h = parseInt(this.getDataControlValue(id+"_mes_height"));
	var par_base_quant = parseFloat(this.m_totQuantCtrl.getValue());
	
	if (par_base_quant
		&&(par_measure_unit_id!="undefined")
		&&par_product_id
		&&par_mes_l
		&&par_mes_w
		&&par_mes_h	
	){
		var self = this;
		this.m_measureCheckText = "";
		contr.run("calc_quant",{
			"async":true,
			"errControl":this.getErrorControl(),
			"params":{
					"product_id":par_product_id,
					"measure_unit_id":par_measure_unit_id,
					//"measure_unit_id_from":self.m_oldMeasureUnitId,
					"mes_length":par_mes_l,
					"mes_width":par_mes_w,
					"mes_height":par_mes_h,
					"quant":par_base_quant					
			},
			"func":function(resp){
				self.m_quantCtrl.m_isInt = 
					(self.getDataControl(self.getId()+"_measure_unit").control.getFieldAttr("is_int")=="true");
				var m = resp.getModelById("calc_quant",true);
				if (m.getNextRow()){
					self.m_quantCtrl.setValue(
						m.getFieldValue("quant"));
				}				
				//measure units check
				self.measureUnitsCheck(resp);
				self.m_oldMeasureUnitId = par_measure_unit_id;
			}
		}
		);
	}
}
DOCOrderDOCTProductDialog_View.prototype.measureUnitsCheck = function(resp){
	this.m_measureCheckText = "";	
	var m = resp.getModelById("product_measure_units_check");
	m.setActive(true);
	while (m.getNextRow()){
		this.m_measureCheckText+=(this.m_measureCheckText!="")? ", ":"Дробные значения для единиц: ";
		this.m_measureCheckText+=
			m.getFieldValue("measure_unit_descr")+" ("+
			m.getFieldValue("quant")+")";
	}
	this.m_quantCtrl.setComment(this.m_measureCheckText);
}

DOCOrderDOCTProductDialog_View.prototype.getFormWidth = function(){
	return "950";
}
DOCOrderDOCTProductDialog_View.prototype.getFormHeight = function(){
	return "650";
}
DOCOrderDOCTProductDialog_View.prototype.setWHouseWarn = function(){
	if (this.m_headWarehouseCtrl.getValue()!=this.m_WarehouseCtrl.getValue()){
		this.m_WarehouseCtrl.setComment("Продукция не соответствует складу в заявке.");
		DOMHandler.addClass(this.m_WarehouseCtrl.m_node,this.INCORRECT_VAL_CLASS);
	}
	else{
		this.m_WarehouseCtrl.setValid();
		this.m_WarehouseCtrl.setComment("");
	}
}

DOCOrderDOCTProductDialog_View.prototype.onCreateIn1c = function(){
	const contr = new Product_Controller(new ServConnector(HOST_NAME));
	const self = this;

	this.m_btnAddTo1c.setEnabled(false);
	this.m_productName.setEnabled(false);
	this.m_ctrlNameForPrint.setEnabled(false);

	contr.run("create_in_1c",{
		"params":{
			"name":this.m_productName.getValue(),
			"name_for_print":this.m_ctrlNameForPrint.getValue(),
			"base_measure_unit_id": 1, //шт
			"warehouse_id": this.m_WarehouseCtrl.getValue()
		},
		"func":function(resp){
			if (resp.modelExists("ProductDialog_Model")){
				var m = resp.getModelById("ProductDialog_Model",true);
				if(m.getNextRow()){
					console.log("new prod ref:",m.getFieldValue("ref_1c"))
					self.m_productName.m_node.setAttribute("fkey_product_id", m.getFieldValue("id"));
					self.m_productName.m_node.setAttribute("ref", m.getFieldValue("ref_1c"));
					self.m_productName.m_node.classList.remove("error");
					self.m_btnAddTo1c.setEnabled(false);
					self.m_ctrlNameForPrint.setEnabled(true);
					self.m_productName.setEnabled(true);

					self.onGetProductAttrs(m);
				}
			}
		},
		"err":function(resp,errCode,errStr){
			self.m_btnAddTo1c.setEnabled(true);
			self.m_productName.setEnabled(true);
			self.m_ctrlNameForPrint.setEnabled(true);

			window.showTempError(errStr, null, ERR_MSG_WAIT_MS);
		}
	});				

}

DOCOrderDOCTProductDialog_View.prototype.createProduct = function(){
	const name = this.m_productName.getValue();
	if(!name || !name.length){
		return;
	}
	const ref1c = this.m_productName.m_node.getAttribute("ref");
	if(!ref1c || !ref1c.length){
		return;
	}

	const contr = new Product_Controller(new ServConnector(HOST_NAME));
	const self = this;
	contr.run("upsert",{
		"params":{
			"name": name,
			"name_for_print":this.m_ctrlNameForPrint.getValue(),
			"base_measure_unit_id": 1, //шт
			"warehouse_id": this.m_WarehouseCtrl.getValue(),
			"ref_1c": ref1c
		},
		"func":function(resp){
			if (resp.modelExists("ProductDialog_Model")){
				var m = resp.getModelById("ProductDialog_Model",true);
				if(m.getNextRow()){
					self.m_productName.m_node.setAttribute("fkey_product_id", m.getFieldValue("id"));
					self.onGetProductAttrs(m);
				}
			}
		},
		"err":function(resp,errCode,errStr){
			window.showTempError(errStr, null, ERR_MSG_WAIT_MS);
		}
	});				
}
