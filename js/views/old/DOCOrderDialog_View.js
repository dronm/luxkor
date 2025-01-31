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
function DOCOrderDialog_View(id,options){
	options = options || {};
	options.tagName="div";
	
	var self = this;	
	this.m_beforeOpen = function(contr,isInsert,isCopy){
		//if (self.m_beforeOpenCalled)return;
		var doc_id = 0;		
		
		self.m_productDetails.getGridControl().setViewId(self.m_viewId);
		
		//self.getDataControl(self.getId()+"_view_id").control.setValue(view_id);
		//console.log("viewId="+self.m_viewId);
		
		//&&!isCopy
		if (!isInsert){
			doc_id = self.getDataControl(self.getId()+"_id").control.getValue();
		}
		
		contr.run("before_open",{async:false,
			params:{
				"doc_id":doc_id,
				"view_id":self.m_viewId
			}
		});
		self.m_beforeOpenCalled = true;
	}
	
	if (SERV_VARS.ROLE_ID=="sales_manager" || SERV_VARS.ROLE_ID=="representative" || SERV_VARS.ROLE_ID=="admin"){
		
		this.m_downloadPrintCtrl = new ButtonCmd(id+"btnCancel",
				{"caption":"Счет",
				//"enabled":false,
				"onClick":function(){
					self.onDownloadOrder();
				},
				"attrs":{
					"title":"сохранить печатную форму счета в файл"}
			}
		);
		options.cmdControls = [this.m_downloadPrintCtrl];
		
	}
	else if (SERV_VARS.ROLE_ID=="production" || SERV_VARS.ROLE_ID=="representative"){
		this.m_ctrlSetShipped = new BtnSetShipped({
			"className":"btn btn-primary btn-cmd",
			"enabled":false});
		options.cmdControls = [this.m_ctrlSetShipped];	
	}
		
	DOCOrderDialog_View.superclass.constructor.call(this,id,options);
	
	var model_id = "DOCOrderDialog_Model";
	
	//events
	this.m_evClientUserSelected = function(){
		self.onClientUserSelected();
	};
	this.m_evWarehouseSelected = function(){
		self.onWarehouseSelected();
	};
	this.m_evFirmSelected = function(){
		self.onFirmSelected();
	};	
	
	this.m_viewId = hex_md5(uuid());
	
	this.addDataControl(
		new Edit(id+"_id",{"visible":false,"name":"id","tableLayout":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);

	var cont_r;
	var bs_col = get_bs_col();
	
	//статус+причина отмены+подчин
	cont_r = new ControlContainer(uuid(),"div",{"className":"row"});
	
	//статус
	var ctrl_cont = new ControlContainer(uuid(),"div",{"className":bs_col+12});
	var ctrl = new Control(uuid(),"span",{"value":"Статус:","className":bs_col+2});
	ctrl_cont.addElement(ctrl);	
	var ctrl = new Control(id+"_state","span",
		{"value":"Формирование новой заявки",
		"className":"old_state_descr","enabled":"false"
		}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"state_descr","keyFieldIds":null},
		{"valueFieldId":null,"keyFieldIds":null});	
	ctrl_cont.addElement(ctrl);		
	cont_r.addElement(ctrl_cont);	

	//причина отмены
	var ctrl_cont = new ControlContainer(uuid(),"div",{"className":bs_col+4});
	this.m_cancelCauseCtrl = new DOCOrderCancelCause("DocOrderCancelCause");
	ctrl_cont.addElement(this.m_cancelCauseCtrl);	
	cont_r.addElement(ctrl_cont);	
	
	//подч
	var ctrl_cont = new ControlContainer(uuid(),"div",{"className":bs_col+4});
	this.m_childCtrl = new DocOrderChildren("DocOrderChildrenList");
	ctrl_cont.addElement(this.m_childCtrl);
	
	this.addElement(cont_r);	

	//Фирма + клиент
	cont_r = new ControlContainer(uuid(),"div",{"className":"row"});
	
	//****** Панель ФИРМА ***************
	var cont = new ControlContainer(id+"_firm_panel","div",{
		"className":(bs_col + ((SERV_VARS.ROLE_ID=="client")? "12":"6"))
		});
	
	if (SERV_VARS.ROLE_ID!="client"){
		var ctrl = new EditNum(id+"_number",
			{"labelCaption":"Номер:",
			"name":"number",
			"tableLayout":false,
			"buttonClear":false,
			"attrs":{"maxlength":5,"size":5,
			"disabled":"disabled","required":"required"}}
		);
		this.bindControl(ctrl,
			{"modelId":model_id,"valueFieldId":"number","keyFieldIds":null},
			{"valueFieldId":null,"keyFieldIds":null});	
		cont.addElement(ctrl);
	}		
	else{
		//Номер клиента
		var ctrl = new EditString(id+"_client_number",
			{"labelCaption":"№ внутренний:",
			"name":"client_number",
			"tableLayout":false,
			"buttonClear":false,
			"attrs":{"maxlength":12,"size":5}}
		);
		this.bindControl(ctrl,
			{"modelId":model_id,"valueFieldId":"client_number","keyFieldIds":null},
			{"valueFieldId":"client_number","keyFieldIds":null});	
		cont.addElement(ctrl);		
	}
	
	//Планируемая дата выполнения
	var ctrl = new EditDate(id+"_delivery_plan_date",
		{"labelCaption":"Планируемая дата выполнения:","name":"delivery_plan_date",
		"editContClassName":"input-group "+get_bs_col()+"6",
		"buttonClear":false,"tableLayout":false,
		"attrs":{"required":"required"}}
	);
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"delivery_plan_date_descr","keyFieldIds":null},
		{"valueFieldId":"delivery_plan_date","keyFieldIds":null});	
	cont.addElement(ctrl);

	var firm_wh_vis = (SERV_VARS.ROLE_ID!="client");
	//Организация
	this.m_FirmCtrl = new FirmEditObject("firm_id",id+"_firm",false,
		null,{visible:firm_wh_vis,required:firm_wh_vis,
		events:{
			"change":function(){
				self.updateDebts();				
			}
		}
		});
	this.bindControl(this.m_FirmCtrl,
		{"modelId":model_id,"valueFieldId":"firm_descr","keyFieldIds":["firm_id"]},
		{"valueFieldId":null,"keyFieldIds":["firm_id"]});	
	cont.addElement(this.m_FirmCtrl);
		
	//Склад из списка складов продукции
	this.m_wareHCtrl = new OrderWarehouseEditObject("warehouse_id",id+"_warehouse",false,
		null,{visible:firm_wh_vis});
	this.bindControl(this.m_wareHCtrl,
		{"modelId":model_id,"valueFieldId":"warehouse_descr","keyFieldIds":["warehouse_id"]},
		{"valueFieldId":null,"keyFieldIds":["warehouse_id"]});	
	cont.addElement(this.m_wareHCtrl);
	
	cont_r.addElement(cont);
	
	
	//****** Панель Заказчик ***************			
	if (SERV_VARS.ROLE_ID!="client"){
		var cont = new ControlContainer(id+"_client_panel","div",{"className":bs_col+"6"});		
		//Заказчик
		this.m_clientCtrl = new ClientEditObject("client_id",id+"_client",false,{
			"noOpen":true,
			"required":true,
			"onSelected":function(){
				self.onClientSelected(true);
			},
			"extraFields":["def_firm_id","def_warehouse_id","def_debt","debt_total","deliv_add_cost_to_product"],
			"winObj":options.winObj
			});
		this.bindControl(this.m_clientCtrl,
			{"modelId":model_id,"valueFieldId":"client_descr","keyFieldIds":["client_id"]},
			{"valueFieldId":null,"keyFieldIds":["client_id"]});	
		cont.addElement(this.m_clientCtrl);

		//Договор
		this.m_clientContractCtrl = new ClientExtContractEdit({
			"fieldId":"client_contract_ext_id",
			"controlId":(id+"client_contract_ext_id"),
			"contr":(new Client_Controller(new ServConnector(HOST_NAME))),
			"noOpen":true,
			"winObj":options.winObj,
			"mainView":this
			});
		this.bindControl(this.m_clientContractCtrl,
			{"modelId":model_id,"valueFieldId":"client_contract_name","keyFieldIds":["client_contract_ext_id"]},
			{"valueFieldId":null,"keyFieldIds":["client_contract_ext_id"]});	
		cont.addElement(this.m_clientContractCtrl);

		//Грузополучатель
		this.m_gruzpolCtrl = new ClientEditObject("gruzopoluchatel_id",id+"_gruzopoluchatel",false,{
			"required":false,
			"labelCaption":"Грузополучатель:",
			"noOpen":true,
			"onSelected":function(){
				self.onClientSelected(true);
			},
			"winObj":options.winObj
			});
		this.bindControl(this.m_gruzpolCtrl,
			{"modelId":model_id,"valueFieldId":"gruzopoluchatel_descr","keyFieldIds":["gruzopoluchatel_id"]},
			{"valueFieldId":null,"keyFieldIds":["gruzopoluchatel_id"]});	
		cont.addElement(this.m_gruzpolCtrl);
			
		//ответственный
		this.m_clientUserCtrl = new ClientUserEditObject("client_user_id",id+"_client_user",false);
		this.bindControl(this.m_clientUserCtrl,
			{"modelId":model_id,"valueFieldId":"client_user_descr","keyFieldIds":["client_user_id"]},
			{"valueFieldId":null,"keyFieldIds":["client_user_id"]});	
		cont.addElement(this.m_clientUserCtrl);	
	
		//Телефон ответственного	
		this.m_ClientUserTelCtrl = new EditString(id+"_client_user_tel",
			{"labelCaption":"Телефон:",
			"name":"client_user_tel",
			"buttonClear":false,
			"tableLayout":false,
			"attrs":{"disabled":"disabled","value":"<не задан сотрудник>"}}
		);		
		this.bindControl(this.m_ClientUserTelCtrl,
			{"modelId":model_id,"valueFieldId":"client_user_cel_phone","keyFieldIds":null},
			{"valueFieldId":null,"keyFieldIds":null});	
		cont.addElement(this.m_ClientUserTelCtrl);	
		
		//Долги
		this.m_debtInfCtrl = new Control(id+"_debt_inf","div",
			{"name":"debt_inf"}
		);		
		cont.addElement(this.m_debtInfCtrl);

		//Прсроч.долги
		this.m_defDebtInfCtrl = new Control(id+"_def_debt_inf","div",
			{"name":"debt_inf"}
		);		
		cont.addElement(this.m_defDebtInfCtrl);
		
		cont_r.addElement(cont);
	}
	
	this.addElement(cont_r);
	
	// *********** ПРОДУКЦИЯ *********
	this.m_details = new ControlContainer(uuid(),"div",{"className":"row"});
	
	this.m_productDetails = new DOCOrderDOCTProductList_View("DOCOrderDOCTProductList",
		{"connect":new ServConnector(HOST_NAME),
		"errorControl":this.getErrorControl(),
		"warehouseCtrl":this.m_wareHCtrl,
		"afterRefresh":function(){
			self.refreshProdTotals();
		
			if (self.m_productDetails.getModified()){
				self.calcVehicleCount();
			}
		}
		});
	this.m_details.addElement(this.m_productDetails);	
	this.addElement(this.m_details);
	
	//Итоговая строка
	var cont = new ControlContainer(uuid(),"div",{"className":"row DOCOrderTot"});
	
	var sub_cont = new ControlContainer(uuid(),"div",{className:bs_col+"6"});
	//Объем
	sub_cont.addElement(new Control(uuid(),"span",{"value":"Транспортировочный объем: "}));
	this.m_totVol = new Control(uuid(),"span");
	sub_cont.addElement(this.m_totVol);
	sub_cont.addElement(new Control(uuid(),"span",{"value":" м3"}));
	//масса
	sub_cont.addElement(new Control("prod_tot_w","span",{"value":", масса груза: "}));
	this.m_totWt = new Control("prod_tot_wt","span");
	sub_cont.addElement(this.m_totWt);
	sub_cont.addElement(new Control("prod_tot_wt2","span",{"value":" т."}));
	cont.addElement(sub_cont);
	
	//Сумма+++
	var sub_cont = new ControlContainer(uuid(),"div",{"className":bs_col+"6 text-right"});
	
	//Сумма
	var sub_s_cont = new ControlContainer(uuid(),"div");
	sub_s_cont.addElement(new Control("prod_tot_r1","span",{"value":"Итого: "}));
	this.m_totSum = new Control("prod_tot_r2","span");
	sub_s_cont.addElement(this.m_totSum);
	sub_s_cont.addElement(new Control("prod_tot_r3","span",{"value":" руб."}));
	sub_cont.addElement(sub_s_cont);
	
	//Упаковка
	var sub_s_cont = new ControlContainer(uuid(),"div");
	sub_s_cont.addElement(new Control("prod_totp_r1","span",{"value":"Итого упаковка: "}));
	this.m_totSumPack = new Control("prod_totp_r2","span");
	sub_s_cont.addElement(this.m_totSumPack);
	sub_s_cont.addElement(new Control("prod_totp_r3","span",{"value":" руб."}));
	sub_cont.addElement(sub_s_cont);	
	
	//Сумма+ТР+Упаковка
	var sub_s_cont = new ControlContainer(uuid(),"div");
	sub_s_cont.addElement(new Control("prod_tot_r4","span",{"value":"Итого с доставкой и упак.: "}));
	this.m_totTotal = new Control("prod_tot_r5","span");
	sub_s_cont.addElement(this.m_totTotal);
	sub_s_cont.addElement(new Control("prod_tot_r6","span",{"value":" руб."}));
	sub_cont.addElement(sub_s_cont);
	
	cont.addElement(sub_cont);
	
	this.addControl(cont);
	
	//Адрес доставки
	
	var cont = new ControlContainer(uuid(),"div",{"className":"row"});
		
	this.m_clientDestCtrl = new ClientDestinationEdit2(id+"_deliv_destination",{
		"fieldId":"deliv_destination_id",
		"winObj":options.winObj,
		"mainView":this,
		"options":{
			"onSelected":function(){
				if (!parseInt(self.m_clientDestCtrl.getAttr("fkey_deliv_destination_id"))){
					self.m_clientDestCtrl.setEnabled(false);
					var contr = new ClientDestination_Controller(new ServConnector(HOST_NAME));
					contr.run("insert",{
						"params":{
							"error_on_no_road":"1",
							"client_id":self.m_clientCtrl.getAttr("fkey_client_id"),
							"value":self.m_clientDestCtrl.getValue()
						},
						"func":function(resp){
							if (resp.modelExists("InsertedId_Model")){
								var m = resp.getModelById("InsertedId_Model",true);
								if (m.getNextRow()){
									self.m_clientDestCtrl.setAttr("fkey_deliv_destination_id",m.getFieldValue("id"));
									DOMHandler.removeClass(self.m_clientDestCtrl.m_node,"error");
									self.calcDelivCost();
								}
							}
							self.m_clientDestCtrl.setEnabled(true);
						},
						"err":function(resp,errCode,errStr){
							self.m_clientDestCtrl.setEnabled(true);

							WindowMessage.show({"text":errStr});	
						}
					});				
				}
				else{
					self.calcDelivCost();
				}
			}
		}		
	});
	/*
	this.m_clientDestCtrl = new ClientDestinationEdit(id+"_deliv_destination",{
		"fieldId":"deliv_destination_id",
		"winObj":options.winObj});
	}
	*/
	this.bindControl(this.m_clientDestCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_destination_descr","keyFieldIds":["deliv_destination_id"]},
		{"valueFieldId":null,"keyFieldIds":["deliv_destination_id"]});	
	cont.addElement(this.m_clientDestCtrl);		
	
	//Адрес в ТТН
	var ctrl = new EditCheckBox(id+"_destination_to_ttn",
		{"labelCaption":"Переносить адрес доставки в ТТН","name":"destination_to_ttn",
		"buttonClear":false,"labelAlign":"left",
		"tableLayout":false,
		"attrs":{}}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"destination_to_ttn","keyFieldIds":null},
		{"valueFieldId":"destination_to_ttn","keyFieldIds":null});	
	cont.addElement(ctrl);	
	
	
	this.addControl(cont);
	
	
	//****** Панель Доставка ***************
	var cont = new ControlContainer(id+"_deliv_panel","div",{"className":"row"});
	
	var sub_cont = new ControlContainer(uuid(),"div",{"className":bs_col+"6"});
	
	//Вид доставки
	this.m_delivTypeCtrl = new DelivTypeEditObject({
		"fieldId":"deliv_type",
		"controlId":id+"_deliv_type",
		"inLine":false,
		"defaultId":"by_client",
		"options":{"events":{"change":function(){
			self.changeDelivType();
			self.refreshProdTotals();
		}}},
	});
	this.bindControl(this.m_delivTypeCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_type_descr","keyFieldIds":["deliv_type"]},
		{"valueFieldId":null,"keyFieldIds":["deliv_type"]});	
	sub_cont.addElement(this.m_delivTypeCtrl);	
	
	//Доставка третьему лицу
	this.m_toThirdPartyCtrl = new EditCheckBox(id+"_deliv_to_third_party",
		{"labelCaption":"Доставка третьему лицу","name":"deliv_to_third_party",
		"buttonClear":false,"labelAlign":"left",
		"tableLayout":false,
		"events":{"change":function(){
			self.setToThirdParty(
				self.m_toThirdPartyCtrl.getValue()
			);
			self.recalcPricesRefreshTotals();
		}},
		"attrs":{}}
	);		
	this.bindControl(this.m_toThirdPartyCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_to_third_party","keyFieldIds":null},
		{"valueFieldId":"deliv_to_third_party","keyFieldIds":null});	
	sub_cont.addElement(this.m_toThirdPartyCtrl);	
		
	//Период доставки
	this.m_DelivPeriodCtrl = new DeliveryPeriodEditObject("deliv_period",id+"_deliv_period",false,3);
	this.bindControl(this.m_DelivPeriodCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_period_descr","keyFieldIds":["deliv_period_id"]},
		{"valueFieldId":null,"keyFieldIds":["deliv_period_id"]});	
	sub_cont.addElement(this.m_DelivPeriodCtrl);	
	
	//Ответственный
	var ctrl = new EditString(id+"_deliv_responsable",
		{"labelCaption":"Ответственный за прием товара:","name":"deliv_responsable",
		"buttonClear":false,"tableLayout":false,
		"attrs":{"maxlength:":"50","size":"25"}}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"deliv_responsable","keyFieldIds":null},
		{"valueFieldId":"deliv_responsable","keyFieldIds":null});	
	sub_cont.addElement(ctrl);	
	
	//Ответственный телефон
	var ctrl = new EditCellPhone(id+"_deliv_responsable_tel",
		{"labelCaption":"Телефон:","name":"_deliv_responsable_tel",
		"tableLayout":false,"attrs":{}}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"deliv_responsable_tel","keyFieldIds":null},
		{"valueFieldId":"deliv_responsable_tel","keyFieldIds":null});	
	sub_cont.addElement(ctrl);	

	//Городской телефон
	var ctrl = new EditString(id+"_tel",
		{"labelCaption":"Телефон:","name":"_tel",		
		"tableLayout":false,"attrs":{"maxlength":"15"}}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"tel","keyFieldIds":null},
		{"valueFieldId":"tel","keyFieldIds":null});	
	sub_cont.addElement(ctrl);	
	
	cont.addElement(sub_cont);	
	
	var sub_cont = new ControlContainer(uuid(),"div",{"className":bs_col+"6"});
	
	//Уведомлять
	var ctrl = new EditCheckBox(id+"_deliv_send_sms",
		{"labelCaption":"Уведомлять перед отгрузкой","name":"deliv_send_sms",
		"tableLayout":false,"buttonClear":false,"labelAlign":"left",
		"attrs":{}}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"deliv_send_sms","keyFieldIds":null},
		{"valueFieldId":"deliv_send_sms","keyFieldIds":null});	
	sub_cont.addElement(ctrl);	

	//АВТОТРАНСПОРТ
	this.m_delivCostOptCtrl = new DelivCostOptEdit({
		"fieldId":"deliv_cost_opt_id",
		"controlId":id+"_deliv_cost_opt",
		"inLine":false
		,"options":{"events":{
			"change":function(){
				self.calcVehicleCount();
			}
		}}
	});		
	this.bindControl(this.m_delivCostOptCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_cost_opt_descr","keyFieldIds":["deliv_cost_opt_id"]},
		{"valueFieldId":null,"keyFieldIds":["deliv_cost_opt_id"]});	
	sub_cont.addElement(this.m_delivCostOptCtrl);	
	
	//расстояние
	this.m_cityRouteDistanceCtrl = new Control(id+"_city_route_distance",
			"div",{"name":"city_route_distance",
			"visible":false}
		);	
	this.bindControl(this.m_cityRouteDistanceCtrl,
		{"modelId":model_id,"valueFieldId":"city_route_distance","keyFieldIds":null},
		{"valueFieldId":"city_route_distance","keyFieldIds":null});	
	sub_cont.addElement(this.m_cityRouteDistanceCtrl);	
	this.m_countryRouteDistanceCtrl = new Control(id+"_country_route_distance",
			"div",{"name":"country_route_distance",
			"visible":false}
		);	
	this.bindControl(this.m_countryRouteDistanceCtrl,
		{"modelId":model_id,"valueFieldId":"country_route_distance","keyFieldIds":null},
		{"valueFieldId":"country_route_distance","keyFieldIds":null});	
	sub_cont.addElement(this.m_countryRouteDistanceCtrl);	
	
	this.m_delivVehicleCntCtrl = new EditNum(id+"_deliv_vehicle_count",
			{"labelCaption":"Кол-во автомоб.:",
			"name":"deliv_vehicle_count",
			"tableLayout":false,
			"buttonClear":false,
			"attrs":{
				"maxlength":5,"size":5,
				"required":"required"
				},
			"events":{
				"keyup":function(){
					self.checkForVehicleCapacity();
					self.calcDelivCost();
				}
			}
	});	
	this.bindControl(this.m_delivVehicleCntCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_vehicle_count","keyFieldIds":null},
		{"valueFieldId":"deliv_vehicle_count","keyFieldIds":null});	
	sub_cont.addElement(this.m_delivVehicleCntCtrl);	
	
	//Автомобиль
	this.m_vehicleCtrl = new VehicleEditObject({
		"fieldId":"vehicle_id",
		"controlId":"vehicle",
		"inLine":false,
		"options":{
			"attrs":{"fkey_vehicle_id":"vehicle_id"},
			"alwaysUpdate":true
		}
	});
	this.bindControl(this.m_vehicleCtrl,
		{"modelId":model_id,
		"valueFieldId":"vehicle_descr",
		"keyFieldIds":["vehicle_id"]},
		{"modelId":model_id,
		"valueFieldId":null,"keyFieldIds":["vehicle_id"]}
	);
	sub_cont.addElement(this.m_vehicleCtrl);	
	
	
	//Стоимость доставки
	this.m_delivCostComment = new Control(id+"_deliv_comment","div",{});
	sub_cont.addElement(this.m_delivCostComment);		
	
	var opts={"labelCaption":"Стоимость доставки (руб.):",
		"name":"deliv_total",
		"tableLayout":false};	
	var ctrl_class;
	if (SERV_VARS.ROLE_ID=="client"){
		ctrl_class = EditFloat;
		opts.enabled=false;
	}
	else{
		ctrl_class = EditMoneyEditable;
		opts.onToggle = function(v){
			if(!v){
				self.calcDelivCost();
			}
		};
		var ctrl_edit = new Control(id+"_deliv_total_edit","div",{
			"name":"deliv_total_edit",
			"tableLayout":false,
			"visible":false,
			"value":"false"});
		this.bindControl(ctrl_edit,
			{"modelId":model_id,"valueFieldId":"deliv_total_edit","keyFieldIds":null},
			{"valueFieldId":"deliv_total_edit","keyFieldIds":null});	
		sub_cont.addElement(ctrl_edit);		
		opts.editAllowedFieldCtrl = ctrl_edit;
	}
	opts.events={
		"keyup":function(){
			/*Пересчет только если от этого зависит трансп затраты*/
			self.calcDelivCost();
			//self.recalcPricesRefreshTotals();
		}
	};	
	this.m_delivCost = new ctrl_class(id+"_deliv_total",
		opts);		
	this.bindControl(this.m_delivCost,
		{"modelId":model_id,"valueFieldId":"deliv_total","keyFieldIds":null},
		{"valueFieldId":"deliv_total","keyFieldIds":null});	
	sub_cont.addElement(this.m_delivCost);	
	
	if (SERV_VARS.ROLE_ID!="client"){
		//себестоимость
		var ctrl_edit = new Control(id+"_deliv_expenses_edit","div",{
			"name":"deliv_expenses_edit",
			"tableLayout":false,
			"visible":false,
			"value":"false"});
		this.bindControl(ctrl_edit,
			{"modelId":model_id,"valueFieldId":"deliv_expenses_edit","keyFieldIds":null},
			{"valueFieldId":"deliv_expenses_edit","keyFieldIds":null});	
		sub_cont.addElement(ctrl_edit);				
		this.m_delivExpCtrl = new EditMoneyEditable(id+"_deliv_expenses",
			{"labelCaption":"Затраты на доставку (руб.):","name":"deliv_expenses",		
			"tableLayout":false,
			"editAllowedFieldCtrl":ctrl_edit
		});		
		this.bindControl(this.m_delivExpCtrl,
			{"modelId":model_id,"valueFieldId":"deliv_expenses","keyFieldIds":null},
			{"valueFieldId":"deliv_expenses","keyFieldIds":null});	
		sub_cont.addElement(this.m_delivExpCtrl);				
		
		//Оплата по безналу
		this.m_delivPayBank = new EditCheckBox(id+"_deliv_pay_bank",
			{"labelCaption":"Оплата за доставку по безналичному расчету","name":"deliv_pay_bank",
			"buttonClear":false,"labelAlign":"left",
			"tableLayout":false,		
			"attrs":{}
			}
		);		
		this.bindControl(this.m_delivPayBank,
			{"modelId":model_id,"valueFieldId":"deliv_pay_bank","keyFieldIds":null},
			{"valueFieldId":"deliv_pay_bank","keyFieldIds":null});	
		sub_cont.addElement(this.m_delivPayBank);		
		
	}
	
	//Включать стоимость доставки
	this.m_delivAddToCostCtrl = new EditCheckBox(id+"_deliv_add_cost_to_product",
		{"labelCaption":"Включать стоимость доставки пропорционально в стоимость продукции","name":"deliv_add_cost_to_product",
		"buttonClear":false,"labelAlign":"left",
		"tableLayout":false,		
		"attrs":{},
		"events":{
			"change":function(){
				self.recalcProductPrices();
			}
		}
		}
	);		
	this.bindControl(this.m_delivAddToCostCtrl,
		{"modelId":model_id,"valueFieldId":"deliv_add_cost_to_product","keyFieldIds":null},
		{"valueFieldId":"deliv_add_cost_to_product","keyFieldIds":null});	
	sub_cont.addElement(this.m_delivAddToCostCtrl);	
	
	cont.addElement(sub_cont);
	
	this.addElement(cont);
	
	
	//****** Панель Комментариев ***************
	var com_p_id = uuid();
	var cont = new ControlContainer(com_p_id,"div",{"className":"collapse in"});
	//Комментарий наш
	if (SERV_VARS.ROLE_ID!="client"){
		this.addElement(new ButtonToggle(uuid(),{
			"caption":"комментарии",
			"dataTarget":com_p_id,
			"expanded":true,
			"attrs":{								
				"title":"показать/скрыть комментарий"				
				}
			}));
		
		var ctrl = new EditString(id+"_sales_manager_comment",
			{"labelCaption":"Комментарий внутр.:","name":"sales_manager_comment",
			"buttonClear":false,"tableLayout":false,
			"attrs":{"size":"80"}}
		);		
		this.bindControl(ctrl,
			{"modelId":model_id,"valueFieldId":"sales_manager_comment","keyFieldIds":null},
			{"valueFieldId":"sales_manager_comment","keyFieldIds":null});	
		cont.addElement(ctrl);		
	}
	
	//Комментарий
	var ctrl = new EditString(id+"_client_comment",
		{"labelCaption":"Комментарий:","name":"client_comment",
		"buttonClear":false,"tableLayout":false,
		"attrs":{"size":"80"}}
	);		
	this.bindControl(ctrl,
		{"modelId":model_id,"valueFieldId":"client_comment","keyFieldIds":null},
		{"valueFieldId":"client_comment","keyFieldIds":null});	
	cont.addElement(ctrl);	
	
	this.addControl(cont);
	
	this.m_readOnly = false;
}
extend(DOCOrderDialog_View,ViewDialog);

DOCOrderDialog_View.prototype.m_detailContainer;

//bool определяет статус только чтения, зависит от статуса
DOCOrderDialog_View.prototype.m_readOnly;

/*
DOCOrderDialog_View.prototype.addDetailControl = function(detailControl,panel){
	if (this.m_details==undefined){
		var detail_row = new ControlContainer(this.getId()+"_det_row","tr");
		var td = new ControlContainer(this.getId()+"_det_row","td",{"attrs":{"colspan":"2"}});
		detail_row.addElement(td);
		this.m_details = new ControlContainer(this.getId()+"_details","div",{"attrs":{"class":"tabber"}});
		td.addElement(this.m_details);
		panel.addElement(this.m_details);
	}
	this.m_details.addElement(detailControl);
}
*/
DOCOrderDialog_View.prototype.getDetailControl = function(controlId){
	return this.m_details.getElementById(controlId);
}
DOCOrderDialog_View.prototype.readData = function(async,isCopy){
	DOCOrderDialog_View.superclass.readData.call(this,false,isCopy);
}
/*
DOCOrderDialog_View.prototype.onClickSave = function(){
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
*/

DOCOrderDialog_View.prototype.setDebts = function(debtTotal,defDebt){	
	if (this.m_defDebtInfCtrl && !isNaN(debtTotal) && debtTotal!=0){		
		this.m_debtInfCtrl.setValue(( (debtTotal>0)? "Долг контрагента ":"Наш долг ") + numberFormat( (debtTotal<0)? -debtTotal:debtTotal ,2,",", "'")+" руб.");
		DOMHandler.setAttr(this.m_debtInfCtrl.getNode(),"class", (debtTotal>0)? "text-danger":"text-info");
		
		if (!isNaN(defDebt) && defDebt){
			this.m_defDebtInfCtrl.setValue("Просроченный долг "+numberFormat( defDebt,2,",", "'")+" руб.");
			DOMHandler.setAttr(this.m_defDebtInfCtrl.getNode(),"class","text-danger");
		}
		else{
			DOMHandler.setAttr(this.m_defDebtInfCtrl.getNode(),"class","hidden");
		}
	}
	else if (this.m_defDebtInfCtrl){
		DOMHandler.setAttr(this.m_defDebtInfCtrl.getNode(),"class","hidden");
		DOMHandler.setAttr(this.m_debtInfCtrl.getNode(),"class","hidden");
	}
}

DOCOrderDialog_View.prototype.setClientId = function(clientId,setPopFirm){	
	//client user
	this.setClientUserTel("");	
	if (this.m_clientUserCtrl){
		this.m_clientUserCtrl.setClientId(clientId);
		this.m_clientUserCtrl.onRefresh();
	}
	
	//Адреса клиента
	this.m_clientDestCtrl.setClientId(clientId);
	//НОВЫ КОНТРОЛ
	//this.m_clientDestCtrl.onRefresh();
	
	//Табличная часть
	this.m_productDetails.setClientId(clientId);
	
	//значения по умолчанию
	if (this.m_clientCtrl){
		this.setDebts(0, 0);
		
		var def_firm = this.m_clientCtrl.getAttr("def_firm_id");
		var def_warehouse = this.m_clientCtrl.getAttr("def_warehouse_id");
		if (def_firm && def_firm!="null"){
			this.m_FirmCtrl.setFieldId("firm_id",def_firm);
			
			var debt_total = parseFloat(this.m_clientCtrl.getAttr("debt_total"));
			if (!isNaN(debt_total) && debt_total){
				this.setDebts(debt_total, parseFloat(this.m_clientCtrl.getAttr("def_debt")) );
			}
		}
		else if (!setPopFirm || this.m_FirmCtrl.getFieldValue()){
			//нет значений по умолчанию
			this.updateDebts();
		}
		if (def_warehouse && def_warehouse!="null"){
			this.m_wareHCtrl.setFieldId("warehouse_id",def_warehouse);
			this.onWarehouseSelected();
		}
		
		var add_cost_old_val = this.m_delivAddToCostCtrl.getValue();
		var add_cost_val = this.m_clientCtrl.getAttr("deliv_add_cost_to_product");		
		if(add_cost_old_val!=add_cost_val){
			this.m_delivAddToCostCtrl.setValue(add_cost_val);
			this.recalcProductPrices();
		}
	}
		
	//организация
	if (setPopFirm && !this.m_FirmCtrl.getFieldValue()){	
		//console.log("setPopFirm="+setPopFirm);
		var self = this;
		var contr = new Client_Controller(new ServConnector(HOST_NAME));
		contr.run("get_pop_firm",{
			"params":{"client_id":clientId},
			"errControl":this.getErrorControl(),
			"func":function(resp){
				var m = resp.getModelById("get_pop_firm");
				m.setActive(true);
				if (m.getNextRow()){
					self.m_FirmCtrl.setValue(m.getFieldValue('firm_descr'));
					self.m_FirmCtrl.setFieldValue("id",m.getFieldValue('firm_id'));
					self.setDebts(parseFloat(m.getFieldValue('debt_total')), parseFloat(m.getFieldValue('def_debt')));
					self.onFirmSelected();
				}
			}
		});
	}
}
DOCOrderDialog_View.prototype.onClientSelected = function(setPopFirm){	
	var id = 0;
	if (this.m_clientCtrl){
		id = this.m_clientCtrl.getAttr("fkey_client_id");
		//Доступность тч
		//this.m_productDetails.setEnabled(true);
	}
	this.setClientId(id,setPopFirm);
}
DOCOrderDialog_View.prototype.setClientUserTel = function(tel){
	if (this.m_ClientUserTelCtrl){
		this.m_ClientUserTelCtrl.setValue(tel);
	}
}
DOCOrderDialog_View.prototype.onClientUserSelected = function(){
	var ctrl = this.getDataControl(this.getId()+"_client_user").control;	
	this.setClientUserTel(ctrl.getFieldAttr("cel_phone"));
}
DOCOrderDialog_View.prototype.setToThirdParty = function(v){
	this.m_productDetails.setToThirdParty(v);
}
/*
DOCOrderDialog_View.prototype.setDelivAddToCost = function(v){
	this.m_productDetails.setDelivAddToCost(v);
}
DOCOrderDialog_View.prototype.setDelivTotal = function(v){
	this.m_productDetails.setDelivTotal(v);
}
*/
DOCOrderDialog_View.prototype.setWarehouseId = function(id){
	this.m_productDetails.setWarehouseId(id);
}
DOCOrderDialog_View.prototype.onWarehouseSelected = function(){
	this.setWarehouseId(this.m_wareHCtrl.getFieldValue());
	this.calcDelivCost();
}
DOCOrderDialog_View.prototype.onFirmSelected = function(){

	var wh = this.m_wareHCtrl.getFieldValue();
	if (!wh){
		var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
		var self = this;
		contr.run("get_pop_warehouse",{
			"params":{"firm_id":this.m_FirmCtrl.getFieldValue()},
			"errControl":this.getErrorControl(),
			"func":function(resp){
				var m = resp.getModelById("get_pop_warehouse");
				m.setActive(true);
				if (m.getNextRow()){
					self.m_wareHCtrl.setValue(m.getFieldValue('warehouse_descr'));
					self.m_wareHCtrl.setFieldValue("id",m.getFieldValue('warehouse_id'));
					self.onWarehouseSelected();
				}
			}
		});
	}
}

DOCOrderDialog_View.prototype.onGetData = function(resp){

	DOCOrderDialog_View.superclass.onGetData.call(this,resp,this.m_isCopy);
	
	if (this.m_saved){
		//Если после сохранения- НИЧЕГО НЕ ДЕЛАЕМ!!!
		return;
	}
	
	var id = this.getId();
	
	if (SERV_VARS.ROLE_ID!="client"){
		this.onClientSelected(false);
		var data_ctrl = this.getDataControl(id+"_client_user");
		if (data_ctrl){
			var ctrl = data_ctrl.control;
			ctrl.setFieldValue("client_user_id",ctrl.getAttr("fkey_client_user_id"));
			this.onClientUserSelected();
		}
	}
	else{
		this.setClientId(0,false);
	}
	//расстояние
	this.updateDistanceInf();
	
	//История изменений
	
	this.changeDelivType();
	
	//голова
	this.m_clientContractCtrl.setEnabled(true);
	this.m_gruzpolCtrl.setEnabled(true);
	
	if (this.m_isCopy){
		//копирование
		var vh_n = this.m_vehicleCtrl.getNode();
		if(vh_n){
			vh_n.value = "";
			vh_n.setAttribute("fkey_vehicle_id","");
			vh_n.setAttribute("last_fkey_vehicle_id","");				
		}
		if (this.m_delivTypeCtrl.getValue()=="by_client"){
			this.m_delivVehicleCntCtrl.setValue(0);
		}
	}
	else{
		var m = resp.getModelById("head_history");
		m.setActive(true);
		while (m.getNextRow()){
			var f_id = m.getFieldValue("field");
			var p = f_id.indexOf("_id");
			if (p>=0){
				f_id = f_id.substring(0,p)
			}
			if (!this.m_bindings[id+"_"+f_id]){
				continue;
			}
			var ctrl = this.getDataControl(id+"_"+f_id);
			if (ctrl && ctrl.control && ctrl.control.m_node){
				DOMHandler.addClass(ctrl.control.m_node,"field_changed");
				ctrl.control.setAttr("old_field_val",m.getFieldValue("old_val"));
			}
			
		}
		/*Проверим статус и закроем доступность на редактирование*/
		var m = resp.getModelById("DOCOrderDialog_Model",true);
		if (m.getNextRow()){
			this.m_curState = m.getFieldValue("state");
			var read_only_states=[
				"producing",
				"produced",
				"shipped",
				"loading",
				"on_way",
				"unloading",
				"closed",
				"canceled",
				"canceled_by_sales_manager",
				"canceled_by_client"
				];
			if (SERV_VARS.ROLE_ID=="client"){
				read_only_states.push("waiting_for_us");
			}
			else{
				read_only_states.push("waiting_for_client");
			}
			
			this.m_readOnly = ($.inArray(this.m_curState,read_only_states)>=0);
			//console.log("this.m_readOnly="+this.m_readOnly)
			if (this.m_readOnly){
				this.setEnabled(false);
				this.m_ctrlCancel.setEnabled(true);
				this.m_ctrlOk.setEnabled(true);								
				this.getViewControl(this.getId()+"_delivery_plan_date").setEnabled(true);
				if (SERV_VARS.ROLE_ID!="client"){
					this.getViewControl(this.getId()+"_sales_manager_comment").setEnabled(true);
				}
				this.getViewControl(this.getId()+"_deliv_responsable_tel").setEnabled(true);
				this.getViewControl(this.getId()+"_tel").setEnabled(true);
				
				//not completely closed
				if (this.m_curState=="producing"
					||this.m_curState=="produced"
					||this.m_curState=="loading"
					||this.m_curState=="waiting_for_us"
					||this.m_curState=="waiting_for_client"
				){
					if (this.m_delivTypeCtrl.getValue()=="by_supplier"){
						this.m_vehicleCtrl.setEnabled(true);
					}
					
					this.m_clientContractCtrl.setEnabled(true);
					this.m_gruzpolCtrl.setEnabled(true);
				}
				/*
				if (this.m_delivTypeCtrl.getValue()=="by_supplier"){
					this.m_clientDestCtrl.setEnabled(true);
				}
				*/
				this.m_clientDestCtrl.setEnabled(false);
				this.m_delivAddToCostCtrl.setEnabled(false);
				if (this.m_delivCost.setEditEnabled){
					this.m_delivCost.setEditEnabled(false);
				}
				//if (this.m_delivExpCtrl.setEditEnabled){
				//	this.m_delivExpCtrl.setEditEnabled(false);
				//}				
				this.m_delivCostOptCtrl.setEnabled(false);
			}
			else{
				
				var new_cap;
				if (SERV_VARS.ROLE_ID=="client"){
					if (this.m_curState=="waiting_for_client"){
						new_cap = "Согласовать";
					}
					else{
						new_cap = "Изменить";
					}
				}
				else{
					if (this.m_curState=="waiting_for_us"
					||this.m_curState=="new"){
						new_cap = "Согласовать";
					}
					else{
						new_cap = "Изменить";
					}				
				}
				
				if (new_cap){
					this.m_ctrlOk.setCaption(new_cap);
				}
				
			}
			if (this.m_curState=="shipped"
			&&m.getFieldValue("has_children")=="true"){
				this.m_childCtrl.setDocId(m.getFieldValue("id"));
			}
			else if (this.m_curState=="canceled"
			||this.m_curState=="canceled_by_sales_manager"
			||this.m_curState=="canceled_by_client"){
				this.m_cancelCauseCtrl.setDocId(m.getFieldValue("id"));
			}

			if (m.getFieldValue("deliv_total_edit")!="true"){
				this.m_delivCost.setEnabled(false);
			}
			if (m.getFieldValue("deliv_expenses_edit")!="true"){
				this.m_delivExpCtrl.setEnabled(false);
			}
			
			this.m_savedVehCount = toInt(m.getFieldValue("deliv_vehicle_count"));
			
			if (this.m_clientCtrl){
				this.setDebts(parseFloat(m.getFieldValue("debt_total")), parseFloat(m.getFieldValue("def_debt")));
			}
		}
		
		if (this.m_downloadPrintCtrl){
			this.m_downloadPrintCtrl.setEnabled(true);
		}
		if (this.m_ctrlSetShipped){
			this.m_ctrlSetShipped.setEnabled(true);
			this.m_ctrlSetShipped.m_keys = {"id":m.getFieldValue("id")};
			this.m_ctrlSetShipped.m_grid = this.m_currentGrid;
		}
	}
}

DOCOrderDialog_View.prototype.toDOM = function(parent){
	DOCOrderDialog_View.superclass.toDOM.call(this,parent);
	
	if (this.m_clientUserCtrl){
		EventHandler.addEvent(
			this.m_clientUserCtrl.getNode(),
			"change",this.m_evClientUserSelected);
	}
	EventHandler.addEvent(
		this.m_wareHCtrl.getNode(),
		"change",this.m_evWarehouseSelected);		
	EventHandler.addEvent(
		this.m_FirmCtrl.getNode(),
		"change",this.m_evFirmSelected);		
		
	if (this.getIsNew()&&SERV_VARS.ROLE_ID=="client"){
		this.setClientId(0,true);
	}
	else if (this.getIsNew()){
		this.m_clientCtrl.getNode().focus();
	}
	
	this.setWarehouseId(this.m_wareHCtrl.getFieldValue());
	this.setToThirdParty(this.m_toThirdPartyCtrl.getValue());
	
	if (this.getEnabled())this.changeDelivType();
	/*
	this.setDelivAddToCost(this.m_delivAddToCostCtrl.getValue());
	this.setDelivTotal(this.m_delivCost.getValue());
	*/	
}
DOCOrderDialog_View.prototype.removeDOM = function(){
	DOCOrderDialog_View.superclass.removeDOM.call(this);
	var self = this;
	if (this.m_clientUserCtrl){
		EventHandler.removeEvent(
			this.m_clientUserCtrl.getNode(),
			"change",this.m_evClientUserSelected);
	}
	EventHandler.removeEvent(
		this.m_wareHCtrl.getNode(),
		"change",this.m_evWarehouseSelected);		
	EventHandler.removeEvent(
		this.m_FirmCtrl.getNode(),
		"change",this.m_evFirmSelected);		
		
}
DOCOrderDialog_View.prototype.afterCopyData = function(){
	if (SERV_VARS.ROLE_ID!="client"){
		this.getDataControl(this.getId()+"_number").control.setValue("");
	}
}
DOCOrderDialog_View.prototype.calcDelivCost = function(){
//console.log("DOCOrderDialog_View.prototype.calcDelivCost")
	this.m_delivCostComment.setValue("-");
	
	var do_calc_cost1 = (!this.m_readOnly
		&& (SERV_VARS.ROLE_ID=="client"
			|| (SERV_VARS.ROLE_ID!="client" && this.getViewControlValue(this.getId()+"_deliv_total_edit")!="true")
	   	)
	);			
	var do_calc_cost2 = (!this.m_readOnly
		&& (SERV_VARS.ROLE_ID=="client"
			|| (SERV_VARS.ROLE_ID!="client" && this.getViewControlValue(this.getId()+"_deliv_expenses_edit")!="true")
	   	)
	);			
	
	if (do_calc_cost1){
		this.m_delivCost.setValue("");		
	}
	if (do_calc_cost2){
		this.m_delivExpCtrl.setValue("");
	}

	var wh_id = this.m_wareHCtrl.getFieldValue();
	var dest_id = this.m_clientDestCtrl.getFieldValue();
	var cost_opt_id = this.m_delivCostOptCtrl.getFieldValue();
	if (wh_id && dest_id && cost_opt_id){
	
		//Эти 2 контрола могут быть недоступными от статуса
		//надо их такими и оставить
		var former_state = this.m_wareHCtrl.getEnabled();
		if (former_state){
			this.m_wareHCtrl.setEnabled(false);		
			this.m_delivCostOptCtrl.setEnabled(false);
		}
		
		this.m_clientDestCtrl.setEnabled(false);
		
		this.getErrorControl().setValue("");
		
		var self = this;
		var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
		contr.run("calc_deliv_cost",{
			"params":{"warehouse_id":wh_id,
				"cost_opt_id":cost_opt_id,
				"client_destination_id":dest_id,
				"include_route":"0"},
			"err":function(resp,errCode,errStr){
				self.getErrorControl().setValue(errStr);
				
				//self.recalcPricesRefreshTotals();
				self.refreshProdTotals();
				
				if (former_state){
					self.m_wareHCtrl.setEnabled(true);
					self.m_delivCostOptCtrl.setEnabled(true);				
				}
				self.m_clientDestCtrl.setEnabled(true);				
			},
			"func":function(resp){
			
				//old values
				/*
				self.m_old_wh_id = wh_id;
				self.m_old_cost_opt_id = cost_opt_id;
				self.m_old_dest_id = dest_id;
				*/
				var m = resp.getModelById("calc_deliv_cost");
				m.setActive(true);
				if (m.getNextRow()){

					self.m_cityRouteDistanceCtrl.setValue(
						parseFloat(m.getFieldValue("city_route_distance"))
					);
					self.m_countryRouteDistanceCtrl.setValue(
						parseFloat(m.getFieldValue("country_route_distance"))
					);					
					self.updateDistanceInf();
					
					//Расчеты
					if (do_calc_cost1 || do_calc_cost2){
						var v_cnt = self.m_delivVehicleCntCtrl.getValue();					
						if (do_calc_cost1){
							self.m_delivCost.setValue(parseFloat(m.getFieldValue("total_cost")).toFixed(2)*v_cnt);
						}
						if (do_calc_cost2){
							var cost2 = 0;
							var cost2_com = "";
							if (do_calc_cost1){
								cost2 = parseFloat(m.getFieldValue("total_cost2")).toFixed(2);
							}
							else{
								//стоимость доставки отредактирована вручную
								var to_float = function(n){
									var r = parseFloat(n);
									return isNaN(r)? 0:r;
								}
								var country_cost2 = to_float(m.getFieldValue("country_cost2"));
								var country_cost1 = to_float(m.getFieldValue("country_cost"));
								var city_cost2 = to_float(m.getFieldValue("city_cost2"));
								var city_cost1 = to_float(m.getFieldValue("city_cost"));
								
								var dif = to_float(self.m_delivCost.getValue()) - city_cost1;
								var distance_country = dif / (country_cost1? country_cost1:0);
								cost2 = city_cost2 + (distance_country * country_cost2);
																
								if (cost2>0 && cost2 < city_cost2  ){
									self.m_delivExpCtrl.setComment();
									cost2_com = "Меньше ставки по городу";
								}
								else{
									if(cost2<=0){
										cost2 = city_cost2;
										cost2_com = "Ставка по городу";
									}
								}
								
							}
							cost2 = cost2*v_cnt;
							cost2 = isNaN(cost2)? 0:cost2;
							self.m_delivExpCtrl.setValue(parseFloat(cost2).toFixed(2));
							if(cost2_com.length){
								DOMHandler.addClass(self.m_delivExpCtrl.m_node,self.m_delivExpCtrl.INCORRECT_VAL_CLASS);
							}
							else{
								DOMHandler.removeClass(self.m_delivExpCtrl.m_node,self.m_delivExpCtrl.INCORRECT_VAL_CLASS);
							}
							self.m_delivExpCtrl.setComment(cost2_com);
							
						}
						
						if (do_calc_cost1){
							//self.recalcPricesRefreshTotals();
							self.refreshProdTotals();
						}
					}	
					else{
						//self.recalcPricesRefreshTotals();
						self.refreshProdTotals();
					}
					
					if (former_state){
						self.m_wareHCtrl.setEnabled(true);
						self.m_delivCostOptCtrl.setEnabled(true);
					}
					
					self.m_clientDestCtrl.setEnabled(true);
				}
			}
		});
	}
	else{
		//this.recalcPricesRefreshTotals();
		this.refreshProdTotals();
	}
}

DOCOrderDialog_View.prototype.recalcPricesRefreshTotals = function(){
	if (this.m_delivAddToCostCtrl.getValue()=="true"){
		this.recalcProductPrices();
	}
	else{
		this.refreshProdTotals();
	}
}

DOCOrderDialog_View.prototype.recalcProductPrices = function(){
//console.log("DOCOrderDialog_View.prototype.recalcProductPrices")
	if (this.m_readOnly){
		return;
	}

	var wh_id = this.m_wareHCtrl.getFieldValue();
	var cl_id;
	if (this.m_clientCtrl){
		cl_id = this.m_clientCtrl.getFieldValue();
	}
	if (wh_id && (!this.m_clientCtrl || (this.m_clientCtrl&&cl_id) )
	){
		this.m_wareHCtrl.setEnabled(false);
		if (this.m_clientCtrl){
			this.m_clientCtrl.setEnabled(false);
		}
		this.getErrorControl().setValue("");
		
		var self = this;
		var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
		contr.run("recalc_product_prices",{
			"params":{
				"view_id":this.m_viewId,
				"warehouse_id":wh_id,
				"client_id":cl_id,
				"deliv_cost":this.m_delivCost.getValue(),
				"deliv_to_third_party":this.m_toThirdPartyCtrl.getValue(),
				"deliv_add_cost_to_product":this.m_delivAddToCostCtrl.getValue()
			},
			"err":function(resp,errCode,errStr){
				self.getErrorControl().setValue(errStr);
				self.m_wareHCtrl.setEnabled(true);
				if (self.m_clientCtrl){
					self.m_clientCtrl.setEnabled(true);
				}
			},
			"func":function(resp){
				/*
				if (self.m_productDetails.onRefresh){
					self.m_productDetails.onRefresh();
				}				
				
				self.m_wareHCtrl.setEnabled(true);
				if (self.m_clientCtrl){
					self.m_clientCtrl.setEnabled(true);				
				}
				
				if(callBack)callBack.call(self);
				*/
				
				self.m_productDetails.onRefresh(function(){
					self.refreshProdTotals();
				});
				
				self.m_wareHCtrl.setEnabled(true);
				if (self.m_clientCtrl){
					self.m_clientCtrl.setEnabled(true);				
				}
				self.refreshProdTotals();
				
			}
		});
	}
	else{
		this.refreshProdTotals();
	}
}
DOCOrderDialog_View.prototype.getModified = function(){
	var f_m = DOCOrderDialog_View.superclass.getModified.call(this);
	var t_m = this.m_productDetails.getGridControl().m_modified;
	return (f_m||t_m);	
}
DOCOrderDialog_View.prototype.setMethodParams = function(pm,checkRes){	
	DOCOrderDialog_View.superclass.setMethodParams.call(this,pm,checkRes);
	
	/*Если клиент и ждет клиента
	Если мы и ждет нас
	то ВСЕГДА update!!!
	*/
	if (this.m_productDetails.getGridControl().m_modified
		||(SERV_VARS.ROLE_ID=="client" && this.m_curState=="waiting_for_client")
		||(SERV_VARS.ROLE_ID!="client" && this.m_curState=="waiting_for_us")		
	){
		checkRes.modif = true;
	}
}


DOCOrderDialog_View.prototype.writeData = function(){	
	var contr = this.getWriteController();
	if (!contr)return;
	contr.getPublicMethodById(this.getWriteMethodId()).setParamValue("view_id",this.m_viewId);

	contr.getPublicMethodById(this.getWriteMethodId()).setParamValue("client_contract_name",this.m_clientContractCtrl.getValue());
	
	DOCOrderDialog_View.superclass.writeData.call(this);
/*
	if (this.m_productDetails.getLineCount()==0){
		this.getErrorControl().setValue("Список продукции пустой!");
	}
	else{
		DOCOrderDialog_View.superclass.writeData.call(this);
	}
*/	
}


DOCOrderDialog_View.prototype.onWriteOk = function(resp){	
	DOCOrderDialog_View.superclass.onWriteOk.call(this,resp);
	
	this.m_productDetails.getGridControl().m_modified = false;
	
	if (this.m_currentGrid && this.m_currentGrid.m_rendered){
		this.m_currentGrid.onRefresh();
	}
}

DOCOrderDialog_View.prototype.refreshProdTotals = function(){	
//console.log("DOCOrderDialog_View.prototype.refreshProdTotals")
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
	if (this.m_delivAddToCostCtrl.getValue()=="false"){
		tot_sum+=toFloat(this.m_delivCost.getValue());
	}
	tot_sum+=tot_sum_pack;
	this.m_totTotal.setValue(tot_sum.toFixed(2));	
	/*
	if (!this.m_savedVehCount){
		this.calcVehicleCount();
	}
	else{
		this.checkForVehicleCapacity();
	}
	*/	
}
DOCOrderDialog_View.prototype.getFormCaption = function(){
	return "Заявка";
}
DOCOrderDialog_View.prototype.calcVehicleCount = function(){

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
	this.m_savedVehCount = 0;
	
	if (!this.m_oldVehicleCount || this.m_oldVehicleCount !=cnt){
		this.m_oldVehicleCount = cnt;
		this.checkForVehicleCapacity();		
	}
	this.calcDelivCost();
}

DOCOrderDialog_View.prototype.updateDistanceInf = function(){
	var d1_m = parseFloat(this.m_cityRouteDistanceCtrl.getValue());
	var d1 = Math.round(d1_m/1000);	
	var d2_m = parseFloat(this.m_countryRouteDistanceCtrl.getValue());	
	var d2 = Math.round(d2_m/1000);
	var com="";
	if (d1>0){
		com="город ("+d1+"км.)";
	}
	if (d2>0){
		com+=(com=="")? "":", ";
		com+="пригород ("+d2+"км.)";
	}	
	this.m_delivCostComment.setValue(com);
}
DOCOrderDialog_View.prototype.changeDelivType = function(){
//console.log("DOCOrderDialog_View.prototype.changeDelivType")
	var vis=(this.m_delivTypeCtrl.getValue()=="by_supplier");
	this.m_toThirdPartyCtrl.setEnabled(vis);	
	this.m_delivCostOptCtrl.setEnabled(vis);
	if (SERV_VARS.ROLE_ID!="client"){
		this.m_delivPayBank.setEnabled(vis);
	}	
	this.m_delivAddToCostCtrl.setEnabled(vis);
	this.m_DelivPeriodCtrl.setEnabled(vis);
	this.m_clientDestCtrl.setEnabled(vis);
	this.m_vehicleCtrl.setEnabled(vis);
	if (vis){
		DOMHandler.addAttr(this.m_delivCostOptCtrl.getNode(),"required","required");
		DOMHandler.addAttr(this.m_clientDestCtrl.getNode(),"required","required");
	}
	else{
		DOMHandler.removeAttr(this.m_delivCostOptCtrl.getNode(),"required");
		DOMHandler.removeAttr(this.m_clientDestCtrl.getNode(),"required");				
		this.m_clientDestCtrl.resetValue();
		this.m_delivCostOptCtrl.resetValue();
		this.m_delivExpCtrl.resetValue();
		this.m_delivCost.resetValue();
		this.m_vehicleCtrl.resetValue();
	}
	
}
DOCOrderDialog_View.prototype.getFormWidth = function(){
	return "1000";
}
DOCOrderDialog_View.prototype.getFormHeight = function(){
	return ( (SERV_VARS.ROLE_ID=="client")? "700":"1010");
}

DOCOrderDialog_View.prototype.doDownloadOrder = function(){
	var id = this.getDataControl(this.getId()+"_id").control.getValue();
	if (id){
		var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
		var meth = contr.getPublicMethodById("download_print");
		meth.setParamValue("doc_id",id);
		
		top.location.href = HOST_NAME+"index.php?"+
			contr.getQueryString(contr.getPublicMethodById("download_print"));	

		/*
		var form = $('<form></form>').attr('action', "index.php").attr('method', 'post');
		for (var id in meth.m_params){
			form.append($("<input></input>").attr('type', 'hidden').attr('name', id).attr('value', meth.m_params[id].getValue()));
		}
		form.appendTo('body').submit().remove();
		*/
	}
}

DOCOrderDialog_View.prototype.onDownloadOrder = function(){
	//сначала запись!!
	var is_new = this.getIsNew();
	
	var self = this;		
	
	if (this.getModified() && !is_new){
		
		WindowQuestion.show({
			"text":"Для сохранения печатной формы, документ необходимо записать, продолжить?",
			"callBack":function(res){
				if (res==WindowQuestion.RES_YES){
					//self.onWriteOk();
					self.writeData(false);
					if (self.m_lastWriteResult){
						//
						var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
						self.m_beforeOpen(contr,false,false);
						self.doDownloadOrder();
					}
				}
			}
			});
		
	}
	else{
		if (is_new){	
		
			this.m_saved = true;		
			
			this.onClickSave();
			if (!this.getIsNew()){				
				setTimeout(function(){
					self.doDownloadOrder();
				}, 3000);
				
			}			
		}
		else{
			this.doDownloadOrder();
		}
	}		
}

DOCOrderDialog_View.prototype.updateDebts = function(){
	//console.log("firm changed");
	if (!this.m_clientCtrl){
		return;
	}
	
	var cl_id = this.m_clientCtrl.getFieldValue();	
	if (!cl_id){
		return;
	}
	var f_id = this.m_FirmCtrl.getFieldValue();
	
	var self = this;
	var contr = new Client_Controller(new ServConnector(HOST_NAME));
	contr.run("get_debts_on_firm",{
		"params":{
			"client_id":cl_id,
			"firm_id":f_id
		},
		"err":function(resp,errCode,errStr){
			self.getErrorControl().setValue(errStr);
		},
		"func":function(resp){
			var m = resp.getModelById("get_debts_on_firm",true);
			var debt_total = 0;
			var def_debt = 0;
			if (m.getNextRow()){
				debt_total = parseFloat(m.getFieldValue("debt_total"));
				def_debt = parseFloat(m.getFieldValue("def_debt"));
			}
			self.setDebts(debt_total, def_debt);
		}
	});
	
}

DOCOrderDialog_View.prototype.checkForVehicleCapacity = function(){
	var vh_cnt = parseInt(this.m_delivVehicleCntCtrl.getValue());

	var ind = this.m_delivCostOptCtrl.m_node.selectedIndex;
	var sel_n = this.m_delivCostOptCtrl.m_node.options[ind];
	var v_max_vol = parseFloat(DOMHandler.getAttr(sel_n,"volume_m"))*vh_cnt;
	var v_max_wt = parseFloat(DOMHandler.getAttr(sel_n,"weight_t"))*vh_cnt;
	var vol = parseFloat(this.m_totVol.getValue());
	var wt = parseFloat(this.m_totWt.getValue());	

	if (vol>v_max_vol){
		DOMHandler.addClass(this.m_delivVehicleCntCtrl.m_node,this.m_delivVehicleCntCtrl.INCORRECT_VAL_CLASS);
		this.m_delivVehicleCntCtrl.setComment("Объем продукции больше вместимости ТС!");
	}
	else if(wt>v_max_wt){
		DOMHandler.addClass(this.m_delivVehicleCntCtrl.m_node,this.m_delivVehicleCntCtrl.INCORRECT_VAL_CLASS);
		this.m_delivVehicleCntCtrl.setComment("Масса продукции больше грузоподъемности ТС!");
	}
	else{
		this.m_delivVehicleCntCtrl.setValid();
		this.m_delivVehicleCntCtrl.setComment("");
	}
}

DOCOrderDialog_View.prototype.onCancel = function(){
//|| !nd("DOCOrderDOCTProductList_gridEditView")
	if(!nd("undefined_ClientDestinationDialog") ){
		DOCOrderDialog_View.superclass.onCancel.call(this);
	}
}

