/* Copyright (c) 2015 
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
function DOCOrderDivisDialog_View(id,options){
	options = options || {};
	options.tagName="div";
	options.readMethodId = "get_divis";
	options.insertMethodId = "divide";
	
	DOCOrderDivisDialog_View.superclass.constructor.call(this,
		id,options);
	
	this.m_viewId = hex_md5(uuid());
		
	var self = this;	
	var model_id = "DOCOrderDivisDialog_Model";
	
	var cont = new ControlContainer(id+"_header","div",{"className":"panel"})
	
	//Планируемая дата выполнения
	var ctrl = new EditDate(id+"_delivery_plan_date",
		{"labelCaption":"Планируемая дата выполнения:","name":"delivery_plan_date",
		"buttonClear":false,"tableLayout":false,
		"attrs":{"required":"required"}}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":null,"keyFieldIds":null},
		{"valueFieldId":"delivery_plan_date","keyFieldIds":null});	
	cont.addElement(ctrl);
	
	var ctrl = new Edit(id+"_main_doc_id",{
		"visible":false,
		"name":"main_doc_id","tableLayout":false});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"main_doc_id",
		"keyFieldIds":null},
		{"valueFieldId":"main_doc_id","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	//Период доставки
	this.m_DelivPeriodCtrl = new DeliveryPeriodEditObject("deliv_period",id+"_deliv_period",false,3);
	this.m_DelivPeriodCtrl.setRequired(true);
	this.bindControl(this.m_DelivPeriodCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_period_descr","keyFieldIds":["deliv_period_id"]},
		{"valueFieldId":null,"keyFieldIds":["deliv_period_id"]});	
	cont.addElement(this.m_DelivPeriodCtrl);	
	
	//АВТОТРАНСПОРТ
	this.m_delivCostOptCtrl = new DelivCostOptEdit({
		"fieldId":"deliv_cost_opt_id",
		"controlId":id+"_deliv_cost_opt",
		"inLine":false,
		"options":{"events":{
			"change":function(){
				self.calcVehicleCount();
			}
		}}
		});		
	this.bindControl(this.m_delivCostOptCtrl,
		{"modelId":model_id,"valueFieldId":null,"keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":["deliv_cost_opt_id"]});	
	cont.addElement(this.m_delivCostOptCtrl);	
	
	this.m_delivVehicleCntCtrl = new EditNum(id+"_deliv_vehicle_count",
			{"labelCaption":"Кол-во автомоб.:",
			"name":"deliv_vehicle_count",
			//"enabled":false,
			"minValue":1,
			"maxValue":1,
			"tableLayout":false,
			"buttonClear":false,
			"attrs":{"maxlength":5,"size":5,
			"required":"required"}}
		);	
	this.bindControl(this.m_delivVehicleCntCtrl,
		{"modelId":model_id,"valueFieldId":null,"keyFieldIds":null},
		{"valueFieldId":"deliv_vehicle_count","keyFieldIds":null});	
	cont.addElement(this.m_delivVehicleCntCtrl);	
	
	//Стоимость доставки
	var ctrl_edit = new Control(id+"_deliv_total_edit","div",{
		"name":"deliv_total_edit",
		"tableLayout":false,
		"visible":false,
		"value":"false"});
	this.bindControl(ctrl_edit,
		{"modelId":model_id,"valueFieldId":"deliv_total_edit","keyFieldIds":null},
		{"valueFieldId":"deliv_total_edit","keyFieldIds":null});	
	cont.addElement(ctrl_edit);		
	
	this.m_delivCost = new EditMoneyEditable(id+"_deliv_total",
		{"labelCaption":"Стоимость доставки",
		"name":"deliv_total",
		"tableLayout":false,
		"editAllowedFieldCtrl":ctrl_edit
		}
		);		
	this.bindControl(this.m_delivCost,
		{"modelId":model_id,"valueFieldId":"deliv_total","keyFieldIds":null},
		{"valueFieldId":"deliv_total","keyFieldIds":null});	
	cont.addElement(this.m_delivCost);	
	cont.addElement(new Control("deliv_total_l","span",{"value":"руб."}));
	
	//Включать стоимость доставки
	this.m_delivAddToCostCtrl = new EditCheckBox(id+"_deliv_add_cost_to_product",
		{"labelCaption":"Включать стоимость доставки пропорцилнально в стоимость продукции","name":"deliv_add_cost_to_product",
		"enabled":false,
		"buttonClear":false,
		"labelAlign":"left",
		"tableLayout":false,		
		"attrs":{},
		}
	);		
	this.bindControl(this.m_delivAddToCostCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_add_cost_to_product","keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null});	
	cont.addElement(this.m_delivAddToCostCtrl);		
	
	//header
	this.addControl(cont);
	
	var cont = new ControlContainer("table_panel","div",{"className":"panel"});
		
	//Продукция
	this.m_productDetails = new DOCOrderDOCTDivisProductList_View("DOCOrderDOCTDivisProductList_View",
		{"connect":new ServConnector(HOST_NAME),
		"errorControl":this.getErrorControl(),
		"afterRefresh":function(){
			self.refreshProdTotals();
		}		
		});	
	this.addDetailControl(this.m_productDetails,cont);
	this.m_productDetails.getGridControl().setViewId(this.m_viewId);
	
	//Итоговая строка
	var sub_cont = new ControlContainer(id+"_prod_tot_l","div",{"className":"panel_left"});
	//Объем
	sub_cont.addElement(new Control("prod_tot_vl1","span",{"value":"Транспортировочный объем: "}));
	this.m_totVol = new Control("prod_tot_vol","span");
	sub_cont.addElement(this.m_totVol);
	sub_cont.addElement(new Control("prod_tot_vl2","span",{"value":" м3"}));
	//масса
	sub_cont.addElement(new Control("prod_tot_w","span",{"value":", масса груза: "}));
	this.m_totWt = new Control("prod_tot_wt","span");
	sub_cont.addElement(this.m_totWt);
	sub_cont.addElement(new Control("prod_tot_wt2","span",{"value":" т."}));
	cont.addElement(sub_cont);
	
	//Сумма
	var sub_cont = new ControlContainer(id+"_prod_tot_r","div",{"className":"panel_right"});
	sub_cont.addElement(new Control("prod_tot_r1","span",{"value":"Итого:"}));
	this.m_totSum = new Control("prod_tot_r2","span");
	sub_cont.addElement(this.m_totSum);
	sub_cont.addElement(new Control("prod_tot_r3","span",{"value":" руб."}));
	cont.addElement(sub_cont);
	
	//Упаковка
	var sub_cont = new ControlContainer(id+"_prod_totp_r","div",{"className":"panel_right"});
	sub_cont.addElement(new Control("prod_totp_r1","span",{"value":"Итого упаковка:"}));
	this.m_totSumPack = new Control("prod_totp_r2","span");
	sub_cont.addElement(this.m_totSumPack);
	sub_cont.addElement(new Control("prod_totp_r3","span",{"value":" руб."}));
	cont.addElement(sub_cont);	
	
	//Сумма+ТР+Упаковка
	var sub_cont = new ControlContainer(id+"_prod_tot_r2","div",{"className":"panel_right"});
	sub_cont.addElement(new Control("prod_tot_r4","span",{"value":"Итого с доставкой и упак.:"}));
	this.m_totTotal = new Control("prod_tot_r5","span");
	sub_cont.addElement(this.m_totTotal);
	sub_cont.addElement(new Control("prod_tot_r6","span",{"value":" руб."}));
	cont.addElement(sub_cont);
	
	//table
	this.addControl(cont);
		
	
	//******************
	var cont = new ControlContainer("footer_panel","div",{"className":"panel"});
	var ctrl = new EditString(id+"_sales_manager_comment",
		{"labelCaption":"Комментарий внутр.:","name":"sales_manager_comment",
		"buttonClear":false,"tableLayout":false,
		"attrs":{"size":"150"}}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"sales_manager_comment","keyFieldIds":null},
		{"valueFieldId":"sales_manager_comment","keyFieldIds":null});	
	cont.addElement(ctrl);		
	
	//footer
	this.addControl(cont);	
}
extend(DOCOrderDivisDialog_View,ViewDialog);

DOCOrderDivisDialog_View.prototype.m_detailContainer;

DOCOrderDivisDialog_View.prototype.addDetailControl = function(detailControl,panel){
	if (this.m_details==undefined){
		var detail_row = new ControlContainer(this.getId()+"_det_row","tr");
		var td = new ControlContainer(this.getId()+"_det_row","td",{"attrs":{"colspan":"2"}});
		detail_row.addElement(td);
		this.m_details = new ControlContainer(this.getId()+"_details","div",{"attrs":{"class":"tabber"}});
		td.addElement(this.m_details);
		panel.addElement(td);
	}
	this.m_details.addElement(detailControl);
}
DOCOrderDivisDialog_View.prototype.getDetailControl = function(controlId){
	return this.m_details.getElementById(controlId);
}
DOCOrderDivisDialog_View.prototype.readData = function(async,isCopy){
	var contr = this.getReadController();
	contr.getPublicMethodById("get_divis").setParamValue("view_id",this.m_viewId);
	
	DOCOrderDivisDialog_View.superclass.readData.call(this,false,isCopy);
}

DOCOrderDivisDialog_View.prototype.onClickSave = function(){
	var cmd_insert = this.getIsNew();
	if (cmd_insert){		
		//need return new serial id if any
		var contr = this.getWriteController();
		var meth_id = this.getWriteMethodId();
		var pm = contr.getPublicMethodById(meth_id);
		if (pm.paramExists(contr.PARAM_RET_ID)){
			pm.setParamValue(contr.PARAM_RET_ID,1);
		}
	}
	this.writeData();
	this.readData(false);
}
DOCOrderDivisDialog_View.prototype.refreshProdTotals = function(){	
	var gr = this.m_productDetails.getGridControl();
	var rows = gr.getBody().getNode().getElementsByTagName("tr");
	var cells;
	var tot_sum = 0;
	var tot_sum_pack = 0;
	var tot_vol = 0;
	var tot_wt = 0;
	for (var ri=0;ri<rows.length;ri++){
		if (!cells){
			cells = {};
			for (var ci=0;ci<rows[ri].cells.length;ci++){
				var id = DOMHandler.getAttr(rows[ri].cells[ci],"field_id");				
				cells[id]=ci;
			}
		}
		tot_sum+=toFloat(rows[ri].cells[cells.total].textContent);
		tot_sum_pack+=toFloat(rows[ri].cells[cells.total_pack].textContent);
		tot_vol+=toFloat(rows[ri].cells[cells.volume].textContent);
		tot_wt+=toFloat(rows[ri].cells[cells.weight].textContent);
	}
	this.m_totVol.setValue(tot_vol.toFixed(3));
	this.m_totWt.setValue(tot_wt.toFixed(3));
	
	this.m_totSumPack.setValue(tot_sum_pack.toFixed(2));
	this.m_totSum.setValue(tot_sum.toFixed(2));
	
	if (this.m_delivTotal && this.m_delivCost.m_editAllowedFieldCtrl.getValue()=="false"){
		//новая сумма тр
		//var sm = Math.round(this.m_delivPrice*tot_vol*100)/100;
		var sm = Math.round(this.m_delivTotal/this.m_delivVhCount*100)/100;
		this.m_delivCost.setValue(sm.toFixed(2));
	}
	
	if (this.m_delivAddToCostCtrl.getValue()=="false"){
		tot_sum+=toFloat(this.m_delivCost.getValue());
	}
	tot_sum+=tot_sum_pack;
	this.m_totTotal.setValue(tot_sum.toFixed(2));	
	
	this.calcVehicleCount();
}

DOCOrderDivisDialog_View.prototype.calcVehicleCount = function(){
	var ind = this.m_delivCostOptCtrl.m_node.selectedIndex;
	var sel_n = this.m_delivCostOptCtrl.m_node.options[ind];
	var v_max_vol = parseFloat(DOMHandler.getAttr(sel_n,"volume_m"));
	var v_max_wt = parseFloat(DOMHandler.getAttr(sel_n,"weight_t"));
	var vol = parseFloat(this.m_totVol.getValue());
	var wt = parseFloat(this.m_totWt.getValue());
	var vol_cnt = Math.ceil(vol/v_max_vol);
	var wt_cnt = Math.ceil(wt/v_max_wt);
	var cnt = (vol_cnt>wt_cnt)? vol_cnt:wt_cnt;
	cnt = toInt(cnt);
	
	this.m_delivVehicleCntCtrl.setValue(cnt);
	if (cnt>1){
		DOMHandler.addClass(this.m_delivVehicleCntCtrl.m_node,"veh_cnt_warn");
	}
	else{
		DOMHandler.removeClass(this.m_delivVehicleCntCtrl.m_node,"veh_cnt_warn");
	}
}
DOCOrderDivisDialog_View.prototype.onGetData = function(resp){
	DOCOrderDivisDialog_View.superclass.onGetData.call(this,resp,this.m_isCopy);
	//проверка статуса
	var m = resp.getModelById("DOCOrderDivisDialog_Model",true);
	if (m.getNextRow()){
		this.m_delivTotal = toFloat(m.getFieldValue("deliv_total"));
		this.m_delivVhCount = toFloat(m.getFieldValue("deliv_vehicle_count"));
		this.m_delivPrice = toFloat(m.getFieldValue("deliv_price"));
		
		if (this.m_delivTotal==0){
			this.m_delivCost.setVisible(false);
			this.m_delivAddToCostCtrl.setVisible(false);
		}
		this.m_delivCost.setMaxValue(this.m_delivTotal);
		
		//
		var state = m.getFieldValue("state");
		var allowed_states=[
			"waiting_for_us",
			"waiting_for_payment"
			];
		if (allowed_states.indexOf(state)<0){
			var self = this;
			window.showTempError("Документ в неверном статусе!", function(){
					//self.onCancel();
					self.setEnabled(false);
					if (self.m_ctrlCancel){
						self.m_ctrlCancel.setEnabled(true);
					}
				}, ERR_MSG_WAIT_MS);
		}
		
		//доступность и надобность категории
		var ts = (m.getFieldValue("deliv_type")=="by_supplier");
		this.m_delivCostOptCtrl.setRequired(ts);
		this.m_delivCostOptCtrl.setEnabled(ts);
	}
	
}

DOCOrderDivisDialog_View.prototype.writeData = function(){	
	var contr = this.getWriteController();
	if (!contr)return;
	contr.getPublicMethodById("divide").setParamValue("view_id",this.m_viewId);
	
	DOCOrderDivisDialog_View.superclass.writeData.call(this);
}

