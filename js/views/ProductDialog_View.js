/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewDialog.js
*/

/* constructor */
function ProductDialog_View(id,options){
	options = options || {};
	options.tagName="div";
	ProductDialog_View.superclass.constructor.call(this,
		id,options);
	options.enabled=false;
	var ctrl;
	var model_id = "ProductDialog_Model";
	var self = this;
	
	this.m_idCtrl = new Edit(id+"_id",{"visible":false,"name":"id","tableLayout":false});
	this.addDataControl(this.m_idCtrl,
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	
	ctrl = new EditString(id+"_name",
		{"labelCaption":"Наименование:",
		"name":"name",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":100,
			"size":100,
			"required":"required"
			}
		}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"name",
		"keyFieldIds":null},
	{"valueFieldId":"name","keyFieldIds":null});	
	this.addControl(ctrl);

	//наименование для 1с
	//Теперь с 20/06/22 - СПРАВОЧНИК!!!
	ctrl = new EditString(id+"_name_for_1c",
		{"labelCaption":"Наименование для 1с:",
		"name":"name_for_1c",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":100,
			"size":100,
			"required":"required"
			}
		}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"name_for_1c",
		"keyFieldIds":null},
	{"valueFieldId":"name_for_1c","keyFieldIds":null});	
	this.addControl(ctrl);
	

	//номенклатурная группа В комплексной не используется!!!
	/*
	ctrl = new ProductGroupEdit(
		{controlId:"product_group",
		"fieldId":"product_group_id"}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"product_group_descr",
		"keyFieldIds":["product_group_id"]},
	{"valueFieldId":null,"keyFieldIds":["product_group_id"]});	
	this.addControl(ctrl);
	*/
	
	//Группа фин.учета для 1с
	ctrl = new EditString(id+"_fin_group",
		{"labelCaption":"Группа финансового учета:",
		"name":"fin_group",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":500,
			"size":100
			}
		}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"fin_group",
		"keyFieldIds":null},
	{"valueFieldId":"fin_group","keyFieldIds":null});	
	this.addControl(ctrl);

	//Группа аналит.учета для 1с
	ctrl = new EditString(id+"_analit_group",
		{"labelCaption":"Группа аналитического учета:",
		"name":"analit_group",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":500,
			"size":100
			}
		}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"analit_group",
		"keyFieldIds":null},
	{"valueFieldId":"analit_group","keyFieldIds":null});	
	this.addControl(ctrl);
	
	this.addDataControl(
		new EditCheckBox(id+"_deleted",
		{"labelCaption":"Удален:",
		"name":"name",
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"deleted",
		"keyFieldIds":null},
		{"valueFieldId":"deleted","keyFieldIds":null,
		"modelId":"Warehouse_Model"}
	);

	//****** Панель Наименования 1с ***************
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Наименования для 1с",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть наименования для 1с"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});	

	this.m_product1cNameList = new Product1cNameList_View("Product1cNameList",options);
	cont.addElement(this.m_product1cNameList);
	cont_m.addElement(cont);
	this.addElement(cont_m);
	
	//****** Панель Склады ***************
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Склады отгрузки продукции",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть склады отгрузки продукции"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});	
	this.m_productWarehouseList = new ProductWarehouseList_View("ProductWarehouseList",options);
	cont.addElement(this.m_productWarehouseList);
	cont_m.addElement(cont);
	this.addElement(cont_m);
	
	//
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Размеры продукции",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть размеры продукции"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});	
	//row1
	var bs_col = get_bs_col();
	var dimen_table =new ControlContainer("dimen_table","table",{"className":"table"});
	var dimen_table_tr1 =new ControlContainer("dimen_tr1","tr",{});
	dimen_table_tr1.addElement(new Control("dimen_tr1_td1","th",{"value":"Параметр","className":bs_col+"1"}));
	dimen_table_tr1.addElement(new Control("dimen_tr1_td2","th",{"value":"Название на форме","className":bs_col+"3"}));
	dimen_table_tr1.addElement(new Control("dimen_tr1_td3","th",{"value":"Фикс.знач.","className":bs_col+"1"}));
	dimen_table_tr1.addElement(new Control("dimen_tr1_td4","th",{"value":"Мин.знач.","className":bs_col+"1"}));
	dimen_table_tr1.addElement(new Control("dimen_tr1_td5","th",{"value":"Макс.знач.","className":bs_col+"1"}));
	dimen_table_tr1.addElement(new Control("dimen_tr1_td6","th",{"value":"Знач.по умолч.","className":bs_col+"1"}));
	dimen_table_tr1.addElement(new Control("dimen_tr1_td7","th",{"value":"Показыв. значения списком","className":bs_col+"1"}));
	dimen_table_tr1.addElement(new Control("dimen_tr1_td8","th",{"value":"Значения,разделенные ;","className":bs_col+"3"}));
	dimen_table.addElement(dimen_table_tr1);
	
	var dimen_ids=["length","width","height"];
	var dimen_names=["Длина","Ширина","Высота"];
	for (var ind=0;ind<dimen_ids.length;ind++){
		var row_ind = ind + 2;
		dimen_table_tr =new ControlContainer("dimen_tr"+row_ind,"tr",{});	
		//dt1
		ctrl = new EditCheckBox(id+"_mes_"+dimen_ids[ind]+"_exists",
			{"name":"mes_"+dimen_ids[ind]+"_exists","labelCaption":dimen_names[ind],
			"tableLayout":false}
		);
		this.bindControl(ctrl,
			{"modelId":model_id,
			"valueFieldId":"mes_"+dimen_ids[ind]+"_exists",
			"keyFieldIds":null},
		{"valueFieldId":"mes_"+dimen_ids[ind]+"_exists","keyFieldIds":null});	
		var dimen_tr_td1 = new ControlContainer("dimen_tr"+row_ind+"_td1","td",{"className":bs_col+"1"});
		dimen_tr_td1.addElement(ctrl);
		dimen_table_tr.addElement(dimen_tr_td1);
		//dt2
		ctrl = new EditString(id+"_mes_"+dimen_ids[ind]+"_name",
			{"name":"mes_"+dimen_ids[ind]+"_name","attrs":{"maxlength":"50"},
			"noClear":true,
			"tableLayout":false}
		);
		this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_name",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_name","keyFieldIds":null}
		);	
		var dimen_tr_td2 = new ControlContainer("dimen_tr"+row_ind+"_td2","td",{"className":bs_col+"3"});
		dimen_tr_td2.addElement(ctrl);
		dimen_table_tr.addElement(dimen_tr_td2);
		//dt3
		ctrl = new EditCheckBox(id+"_mes_"+dimen_ids[ind]+"_fix",
			{"name":"mes_"+dimen_ids[ind]+"_fix","tableLayout":false}
		);
		this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_fix",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_fix","keyFieldIds":null}
		);	
		var ctrl2 = new EditNum(id+"_mes_"+dimen_ids[ind]+"_fix_val",
			{"name":"mes_"+dimen_ids[ind]+"_fix_val","attrs":{"size":"5","maxlength":"3"},
			"tableLayout":false}
		);
		this.bindControl(ctrl2,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_fix_val",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_fix_val","keyFieldIds":null}
		);		
		var dimen_tr_td3 = new ControlContainer("dimen_tr"+row_ind+"_td3","td",{"className":bs_col+"1"});
		dimen_tr_td3.addElement(ctrl);
		dimen_tr_td3.addElement(ctrl2);
		dimen_table_tr.addElement(dimen_tr_td3);
		
		//dt4
		ctrl = new EditNum(id+"_mes_"+dimen_ids[ind]+"_min_val",
			{"name":"mes_"+dimen_ids[ind]+"_min_val","attrs":{"maxlength":"10","size":"10"},
			"tableLayout":false}
		);
		this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_min_val",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_min_val","keyFieldIds":null}
		);	
		var dimen_tr_td4 = new ControlContainer("dimen_tr"+row_ind+"_td4","td",{"className":bs_col+"1"});
		dimen_tr_td4.addElement(ctrl);
		dimen_table_tr.addElement(dimen_tr_td4);
		//dt5
		ctrl = new EditNum(id+"_mes_"+dimen_ids[ind]+"_max_val",
			{"name":"mes_"+dimen_ids[ind]+"_max_val","attrs":{"maxlength":"10","size":"10"},
			"tableLayout":false}
		);
		this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_max_val",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_max_val","keyFieldIds":null}
		);	
		var dimen_tr_td5 = new ControlContainer("dimen_tr"+row_ind+"_td5","td",{"className":bs_col+"1"});
		dimen_tr_td5.addElement(ctrl);
		dimen_table_tr.addElement(dimen_tr_td5);
		//dt6
		ctrl = new EditNum(id+"_mes_"+dimen_ids[ind]+"_def_val",
			{"name":"mes_"+dimen_ids[ind]+"_def_val","attrs":{"maxlength":"10","size":"10"},
			"tableLayout":false}
		);
		this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_def_val",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_def_val","keyFieldIds":null}
		);	
		var dimen_tr_td6 = new ControlContainer("dimen_tr"+row_ind+"_td6","td",{"className":bs_col+"1"});
		dimen_tr_td6.addElement(ctrl);
		dimen_table_tr.addElement(dimen_tr_td6);
		//dt7
		ctrl = new EditCheckBox(id+"_mes_"+dimen_ids[ind]+"_seq",
			{"name":"mes_"+dimen_ids[ind]+"_seq","tableLayout":false,
			"events":{
				"change":function(){
					/*
					var en = (self.getViewControlValue(id+"_mes_"+dimen_ids[ind]+"_seq")=="true");
					var _ctrl = self.getViewControl(id+"_mes_"+dimen_ids[ind]+"_vals");
					if (_ctrl){
						_ctrl.setEnabled(en);
						if (!en){
							_ctrl.setValue("");
						}
					}
					*/
				}
			}
			}
		);
		this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_seq",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_seq","keyFieldIds":null}
		);	
		var dimen_tr_td7 = new ControlContainer("dimen_tr"+row_ind+"_td7","td",{"className":bs_col+"1"});
		dimen_tr_td7.addElement(ctrl);
		dimen_table_tr.addElement(dimen_tr_td7);
		//dt8
		ctrl = new EditString(id+"_mes_"+dimen_ids[ind]+"_vals",
			{"name":"mes_"+dimen_ids[ind]+"_vals","tableLayout":false,
			"noClear":true
			}
		);
		this.bindControl(ctrl,{"modelId":model_id,"valueFieldId":"mes_"+dimen_ids[ind]+"_vals",
			"keyFieldIds":null},{"valueFieldId":"mes_"+dimen_ids[ind]+"_vals","keyFieldIds":null}
		);	
		var dimen_tr_td8 = new ControlContainer("dimen_tr"+row_ind+"_td8","td",{"className":bs_col+"3"});
		dimen_tr_td8.addElement(ctrl);
		dimen_table_tr.addElement(dimen_tr_td8);
		
		dimen_table.addElement(dimen_table_tr);
	}	
	cont.addElement(dimen_table);
	cont_m.addElement(cont);
	this.addControl(cont_m);
	
	//****** Панель Единица ***************
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Единицы продукции",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть единицы продукции"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});	
	ctrl = new MeasureUnitEditObject("base_measure_unit_id",id+"_measure_unit",false);
	ctrl.setDefaultId();
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"base_measure_unit_descr",
		"keyFieldIds":["base_measure_unit_id"]},
	{"valueFieldId":null,"keyFieldIds":["base_measure_unit_id"]});	
	cont.addElement(ctrl);	
	//объем
	var sub_cont=new ControlContainer("vol_sub_cont","div",{});
	ctrl = new EditFloat(id+"_base_measure_unit_vol_m",
		{"labelCaption":"Транспортировочный объем 1 базовой ед.:",
		"name":"base_measure_unit_vol_m",
		"precision":3,
		"buttonClear":false,
		"tableLayout":false,
		"winObj":this.m_winObj,
		"attrs":{"maxlength":10,"size":5}}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"base_measure_unit_vol_m",
		"keyFieldIds":null},{"valueFieldId":"base_measure_unit_vol_m","keyFieldIds":null});		
	sub_cont.addElement(ctrl);
	cont.addElement(sub_cont);	
	//масса
	var sub_cont=new ControlContainer("weight_sub_cont","div",{});
	ctrl = new EditFloat(id+"_base_measure_unit_weight_t",
		{"labelCaption":"Масса 1 базовой ед., т.:","name":"base_measure_unit_weight_t",
		"precision":3,		
		"buttonClear":false,"tableLayout":false,
		"attrs":{"maxlength":19,"size":10}}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"base_measure_unit_weight_t",
		"keyFieldIds":null},{"valueFieldId":"base_measure_unit_weight_t","keyFieldIds":null});		
	sub_cont.addElement(ctrl);
	//sub_cont.addElement(new Control(null,"span",{"value":"т"}));
	cont.addElement(sub_cont);	
	
	//Единица заявки
	ctrl = new MeasureUnitEditObject("order_measure_unit_id",id+"_order_measure_unit",false,null,{
		"labelCaption":"Единица заявки:"});
	ctrl.setDefaultId();
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"order_measure_unit_descr",
		"keyFieldIds":["order_measure_unit_id"]},
	{"valueFieldId":null,"keyFieldIds":["order_measure_unit_id"]});	
	cont.addElement(ctrl);		
	
	//список единиц измерения с формулами	
	//var sub_cont=new ControlContainer(uuid(),"div",{"className":"row"});
	this.m_productMeasureUnitList = new ProductMeasureUnitList_View("ProductMeasureUnitList",options);
	//sub_cont.addElement(this.m_productMeasureUnitList);
	//cont.addElement(sub_cont);
	cont.addElement(this.m_productMeasureUnitList);
	
	cont_m.addElement(cont);
	this.addControl(cont_m);
	
	//****** Панель Упаковка ***************
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Упаковка",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть упаковку"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});	
	
	ctrl = new EditString(id+"_pack_name",
		{"labelCaption":"Упаковка в пленку:","name":"pack_name",
		"buttonClear":false,"tableLayout":false,
		"attrs":{"maxlength":50,"size":25}}
	);
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"pack_name","keyFieldIds":null},
	{"valueFieldId":"pack_name","keyFieldIds":null});	
	cont.addElement(ctrl);
	//
	ctrl = new EditCheckBox(id+"_pack_default",
		{"labelCaption":"По умолчанию:","name":"pack_default",
		"buttonClear":false,"tableLayout":false,"labelAlign":"left"}
	);
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"pack_default","keyFieldIds":null},
	{"valueFieldId":"pack_default","keyFieldIds":null});	
	cont.addElement(ctrl);
	//***
	ctrl = new EditCheckBox(id+"_pack_not_free",
		{"labelCaption":"Упаковка платная:","name":"pack_not_free",
		"buttonClear":false,"tableLayout":false,"labelAlign":"left"}
	);
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"pack_not_free","keyFieldIds":null},
	{"valueFieldId":"pack_not_free","keyFieldIds":null});	
	cont.addElement(ctrl);
	//***
	sub_cont=new ControlContainer("pack_base_measure_unit_count_l","div",{});
	ctrl = new EditNum(id+"_pack_base_measure_unit_count",
		{"labelCaption":"Упаковка кратно, баз.ед.:","name":"pack_base_measure_unit_count",
		"attrs":{"maxlength":"5","size":"2"},"buttonClear":false,
		"tableLayout":false}
	);
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"pack_base_measure_unit_count","keyFieldIds":null},
	{"valueFieldId":"pack_base_measure_unit_count","keyFieldIds":null});	
	sub_cont.addElement(ctrl);
	//sub_cont.addElement(new Control(null,"span",{"value":"баз.ед."}));
	cont.addElement(sub_cont);
	//***
	
	/*!!!Убрали кратно упаковкам!!!
	ctrl = new EditCheckBox(id+"_pack_full_package_only",
		{"labelCaption":"Отпуск только кратно упаковке:","name":"pack_full_package_only",
		"buttonClear":false,"tableLayout":false,"labelAlign":"left"}
	);
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"pack_full_package_only","keyFieldIds":null},
	{"valueFieldId":"pack_full_package_only","keyFieldIds":null});	
	cont.addElement(ctrl);
	*/
	
	cont_m.addElement(cont);
	this.addControl(cont_m);

	
	//****** Панель Наценка ***************
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Наценка",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть наценку"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});	
	//***
	this.m_abnSizePriceCtrl = new EditCheckBox(id+"_extra_pay_for_abnormal_size",
		{"labelCaption":"Наценка за нестандартные размеры по алгоритму","name":"extra_pay_for_abnormal_size",
		"buttonClear":false,"tableLayout":false,
		"events":{
			"change":function(){				
				var en = (self.m_abnSizePriceCtrl.getValue()=="true");
				self.m_abnSizePriceAlwaysCtrl.setEnabled(en);
				if (!en){
					self.m_abnSizePriceAlwaysCtrl.setValue("false");
				}
			}
		}
		}
	);
	this.bindControl(this.m_abnSizePriceCtrl,{"modelId":model_id,
		"valueFieldId":"extra_pay_for_abnormal_size","keyFieldIds":null},
	{"valueFieldId":"extra_pay_for_abnormal_size","keyFieldIds":null});	
	cont.addElement(this.m_abnSizePriceCtrl);	
	//***
	this.m_abnSizePriceAlwaysCtrl = new EditCheckBox(id+"_extra_pay_for_abn_size_always",
		{"labelCaption":"Наценка не зависит от размеров",
		"name":"extra_pay_for_abn_size_always",
		"buttonClear":false,"tableLayout":false,
		"enabled":false}
	);
	this.bindControl(this.m_abnSizePriceAlwaysCtrl,{"modelId":model_id,
		"valueFieldId":"extra_pay_for_abn_size_always","keyFieldIds":null},
	{"valueFieldId":"extra_pay_for_abn_size_always","keyFieldIds":null});	
	cont.addElement(this.m_abnSizePriceAlwaysCtrl);	
	
	//***
	ctrl = new EditString(id+"_extra_pay_calc_formula",
		{"labelCaption":"Количество изделий в базовой единице","name":"extra_pay_calc_formula",
		"buttonClear":false,"attrs":{"size":"80"},"tableLayout":false}
	);
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"extra_pay_calc_formula","keyFieldIds":null},
	{"valueFieldId":"extra_pay_calc_formula","keyFieldIds":null});	
	cont.addElement(ctrl);		
	
	
	//таблица Категорий
	var sub_cont=new ControlContainer(uuid(),"div",{});
	this.m_productCustomSizePriceList = new ProductCustomSizePriceList_View("productCustomSizePriceList",options);
	sub_cont.addElement(this.m_productCustomSizePriceList);
	cont.addElement(sub_cont);

	cont_m.addElement(cont);
	this.addControl(cont_m);		

	//****** Панель Паспорт качества ***************
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Паспорт качества",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть паспорт качества"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});	
	
	ctrl = new SertTypeEdit(
		{"fieldId":"sert_type_id",
		"controlId":id+"_sert_type",
		"inLine":false
		}
	);
	this.bindControl(ctrl,{"modelId":model_id,
		"valueFieldId":"sert_type_descr","keyFieldIds":["sert_type_id"]},
	{"valueFieldId":null,"keyFieldIds":["sert_type_id"]});	
	
	cont.addElement(ctrl);
	cont_m.addElement(cont);
	this.addControl(cont_m);		
	
	this.m_ctrlSave = new ButtonCmd(id+"btnSave",
		{"caption":"Записать",
		"onClick":function(){
			self.onClickSave();
		},
		"attrs":{"title":"Записать"}
		});	
}
extend(ProductDialog_View,ViewDialog);

ProductDialog_View.prototype.onGetData = function(resp){
	ClientDialog_View.superclass.onGetData.call(this,resp);	
	var id=this.getDataControl("ProductList_View_gridEditView_id").control.getAttr("old_id");
	if (id){
		//Наименования
		this.m_product1cNameList.setProductId(id);
		this.m_product1cNameList.m_grid.setEnabled(true);
		this.m_product1cNameList.m_grid.onRefresh();		
	
		//Склады
		this.m_productWarehouseList.setProductId(id);
		this.m_productWarehouseList.m_grid.setEnabled(true);
		this.m_productWarehouseList.m_grid.onRefresh();		
		//measure units
		this.m_productMeasureUnitList.setProductId(id);
		this.m_productMeasureUnitList.m_grid.setEnabled(true);
		this.m_productMeasureUnitList.m_grid.onRefresh();
		//Нестандартные размеры
		this.m_productCustomSizePriceList.setProductId(id);
		this.m_productCustomSizePriceList.m_grid.setEnabled(true);
		this.m_productCustomSizePriceList.m_grid.onRefresh();	
	}
}
