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
function ClientDialog_View(id,options){
	options = options || {};
	options.tagName="div";
	options.className="panel";
	options.readMethodId = options.readMethodId || this.DEF_READ_METH_ID;
	options.writeController = options.writeController || options.readController;
	options.formCaption="Клиент";
	
	var self = this;
	
	ClientDialog_View.superclass.constructor.call(this,
		id,options);
	
	var model_id = "ClientDialog_Model";
	options.enabled=false;
	
	
	
	this.m_evAddrMailSameAsRegClick = function(){
		var en = !(self.m_addrMailSameAsReg.getValue()=="true");
		self.m_addrMail.setEnabled(en);
	};
	this.m_evPayTypeClick = function(){
		var en = (self.m_payTypeCtrl.getValue()=="with_delay");
		self.m_payDelayDaysCtrl.setEnabled(en);
		self.m_payFixToDowCtrl.setEnabled(en);
		self.m_payDowCtrl.setEnabled(en);
		self.m_payBanOnDebtDaysCtrl.setEnabled(en);
		self.m_payDebtDaysCtrl.setEnabled(en);
		self.m_payBanOnDebtSumCtrl.setEnabled(en);
		self.m_payDebtSumCtrl.setEnabled(en);
	}
	
	this.addDataControl(
		new Edit("ClientDialog_id",{"visible":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	
	var attrs = {};
	ClientAttrs(attrs,this);
	
	//Наименование
	this.bindControl(attrs.name,
		{"modelId":model_id,
		"valueFieldId":"name",
		"keyFieldIds":null},
	{"valueFieldId":"name","keyFieldIds":null});	
	this.addControl(attrs.name);
	
	this.m_ctrlBind1cCont = new ControlContainer(uuid(),"div",{"className":"row","visible":false});
	this.m_ctrlBind1cCont.addElement(new Control(uuid(),"div",{"className":"bind_to_1c","value":"Связан с 1с"}));
	this.m_ctrlBind1cCont.addElement(new ButtonCtrl(uuid(),{
		"caption":"Очистить",
		"onClick":function(){
			self.unbindClient();
		}
	}));
	this.addControl(this.m_ctrlBind1cCont);
	
	this.addDataControl(
		new EditCheckBox(id+"_deleted",
		{"labelCaption":"Удален:",
		"name":"deleted",
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"deleted",
		"keyFieldIds":null},
		{"valueFieldId":"deleted","keyFieldIds":null,
		"modelId":model_id}
	);

	this.addDataControl(
		new EditCheckBox("Client_is_supplier",
		{"labelCaption":"Поставщик:",
		"name":"is_supplier",
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"is_supplier",
		"keyFieldIds":null},
		{"valueFieldId":"is_supplier","keyFieldIds":null,
		"modelId":model_id}
	);

	this.addDataControl(
		new EditCheckBox("Client_is_carrier",
		{"labelCaption":"Перевозчик:",
		"name":"is_carrier",
		"tableLayout":false
		}
		),
		{"modelId":model_id,
		"valueFieldId":"is_carrier",
		"keyFieldIds":null},
		{"valueFieldId":"is_carrier","keyFieldIds":null,
		"modelId":model_id}
	);
	
	//Ответственные
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Ответственные лица",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть ответственных лиц"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});
	this.m_userList = new ClientUserList_View(uuid(),{});
	cont.addElement(this.m_userList);
	cont_m.addElement(cont);
	this.addElement(cont_m);
	
	//Реквизиты
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Реквизиты",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть реквизиты"
			}
		}));		
	var cont=new ControlContainer(p_id,"div",{className:("collapse"+(this.getIsNew()? " in":""))});
	var sub_cont=new ControlContainer("attrl_sub_l","div",{"className":get_bs_col()+"6"});
		
	sub_cont.addElement(new ButtonCtrl("fillFrom1c",
		{"caption":"Заполнить из 1с",
		"onClick":function(){
			self.setTempDisabled();
			var contr = new Client_Controller(new ServConnector(HOST_NAME));
			contr.run("attrs_from_1c",{
				"async":false,
				"params":{"name":self.getDataControlValue("Client_name")},
				"func":function(resp){
					self.setTempEnabled();
					self.fillFrom1c(resp);
				},
				"err":function(resp,errCode,errStr){
					self.setTempEnabled();
					WindowMessage.show({"text":errStr,"type":WindowMessage.TP_ER});
				}
			});
		},
		"attrs":{"title":"заполнить все реквизиты клиента из базы 1с"}
	}));

	attrs["name_full"] = new EditString("Client_name_full",
		{"labelCaption":"Полное наименование:","name":"name_full",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"required":"required"}}
	);
	this.bindControl(attrs.name_full,
		{"modelId":model_id,
		"valueFieldId":"name_full",
		"keyFieldIds":null},
		{"valueFieldId":"name_full","keyFieldIds":null});
	sub_cont.addElement(attrs.name_full);
	
	this.m_ctrlInn = attrs.inn;
	this.bindControl(attrs.inn,
		{"modelId":model_id,
		"valueFieldId":"inn",
		"keyFieldIds":null},
		{"valueFieldId":"inn","keyFieldIds":null});
	sub_cont.addElement(attrs.inn);
	
	this.bindControl(attrs.kpp,
	{"modelId":model_id,
		"valueFieldId":"kpp",
		"keyFieldIds":null},	
	{"valueFieldId":"kpp","keyFieldIds":null});	
	sub_cont.addElement(attrs.kpp);
	
	this.m_addrReg = attrs.addr_reg;
	this.bindControl(attrs.addr_reg,{"modelId":model_id,
		"valueFieldId":"addr_reg",
		"keyFieldIds":null},
		{"valueFieldId":"addr_reg","keyFieldIds":null});
	sub_cont.addElement(attrs.addr_reg);
	
	this.m_addrMailSameAsReg = attrs.addr_mail_same_as_reg;
	this.bindControl(attrs.addr_mail_same_as_reg,
	{"modelId":model_id,
		"valueFieldId":"addr_mail_same_as_reg",
		"keyFieldIds":null},
	{"valueFieldId":"addr_mail_same_as_reg","keyFieldIds":null});	
	sub_cont.addElement(attrs.addr_mail_same_as_reg);
	
	this.m_addrMail = attrs.addr_mail;
	this.bindControl(attrs.addr_mail,
	{"modelId":model_id,
		"valueFieldId":"addr_mail",
		"keyFieldIds":null},
	{"valueFieldId":"addr_mail","keyFieldIds":null});
	sub_cont.addElement(attrs.addr_mail);
	
	this.bindControl(attrs.telephones,
	{"modelId":model_id,
		"valueFieldId":"telephones",
		"keyFieldIds":null},
	{"valueFieldId":"telephones","keyFieldIds":null});
	sub_cont.addElement(attrs.telephones);

	this.bindControl(attrs.email,
	{"modelId":model_id,
		"valueFieldId":"email",
		"keyFieldIds":null},
	{"valueFieldId":"email","keyFieldIds":null});
	sub_cont.addElement(attrs.email);
	
	//вид деятельности
	var ctrl = new ClientActivityEdit({
		"fieldId":"client_activity_id",
		"controlId":"Client_client_activity",
		"inLine":false
	});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"client_activity_descr",
		"keyFieldIds":["client_activity_id"]},
		{"valueFieldId":null,"keyFieldIds":["client_activity_id"]});
	sub_cont.addElement(ctrl);
	
	cont.addElement(sub_cont);
	
	//Правая панель
	var sub_cont=new ControlContainer("attrl_sub_r","div",{"className":get_bs_col()+"6"});
	
	this.bindControl(attrs.acc,
	{"modelId":model_id,
		"valueFieldId":"acc",
		"keyFieldIds":null},
	{"valueFieldId":"acc","keyFieldIds":null});
	sub_cont.addElement(attrs.acc);
	
	this.bindControl(attrs.bank_name,
	{"modelId":model_id,
		"valueFieldId":"bank_name",
		"keyFieldIds":null},
	{"valueFieldId":"bank_name","keyFieldIds":null});
	sub_cont.addElement(attrs.bank_name);
	
	this.bindControl(attrs.bank_code,
	{"modelId":model_id,
		"valueFieldId":"bank_code",
		"keyFieldIds":null},
	{"valueFieldId":"bank_code","keyFieldIds":null});	
	sub_cont.addElement(attrs.bank_code);
	
	this.bindControl(attrs.bank_acc,
	{"modelId":model_id,
		"valueFieldId":"bank_acc",
		"keyFieldIds":null},
	{"valueFieldId":"bank_acc","keyFieldIds":null});
	sub_cont.addElement(attrs.bank_acc);
	
	this.bindControl(attrs.okpo,
	{"modelId":model_id,
		"valueFieldId":"okpo",
		"keyFieldIds":null},
	{"valueFieldId":"okpo","keyFieldIds":null});
	sub_cont.addElement(attrs.okpo);
	
	this.bindControl(attrs.ogrn,
	{"modelId":model_id,
		"valueFieldId":"ogrn",
		"keyFieldIds":null},
	{"valueFieldId":"ogrn","keyFieldIds":null});
	sub_cont.addElement(attrs.ogrn);
	
	cont.addElement(sub_cont);
	
	cont_m.addElement(cont);
	this.addControl(cont_m);

	//НАШИ расчетные счета
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Расчетные счета наших организаций",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть расчетные счета"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});
	this.m_firmAccList = new ClientFirmBankAccountList_View(uuid(),{});
	cont.addElement(this.m_firmAccList);
	cont_m.addElement(cont);
	this.addElement(cont_m);

	//Значения по умолчанию
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Значения по умолчанию",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть значения по умолчанию"
			}
		}));	
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});
	var ctrl = new FirmEditObject("def_firm_id","def_firm",false,null,{"attrs":{}});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"def_firm_descr",
		"keyFieldIds":["def_firm_id"]},
		{"valueFieldId":null,"keyFieldIds":["def_firm_id"]});
	cont.addElement(ctrl);
	
	var ctrl = new WarehouseEditObject("def_warehouse_id","def_warehouse",false,null,{"attrs":{}});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"def_warehouse_descr",
		"keyFieldIds":["def_warehouse_id"]},
		{"valueFieldId":null,"keyFieldIds":["def_warehouse_id"]});
	cont.addElement(ctrl);

	var ctrl = new EditCheckBox("deliv_add_cost_to_product",{
		"labelCaption":"Включать стоимость доставки пропорционально в стоимость продукции:",
		"name":"deliv_add_cost_to_product",
		"tableLayout":false
	});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"deliv_add_cost_to_product",
		"keyFieldIds":null},
		{"valueFieldId":"deliv_add_cost_to_product","keyFieldIds":null});
	cont.addElement(ctrl);
	
	cont_m.addElement(cont);
	this.addElement(cont_m);
	
	//******* Условия Работы ************
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var p_id = uuid();
	cont_m.addElement(new ButtonToggle(uuid(),{
		"caption":"Условия работы",
		"dataTarget":p_id,
		"attrs":{								
			"title":"показать/скрыть условия работы"
			}
		}));		
	var cont=new ControlContainer(p_id,"div",{className:"collapse"});
	
	//договоры
	var sub_cont=new ControlContainer(uuid(),"div",{});
	this.m_contractList = new ClientContractList_View("ClientContractList",options);
	sub_cont.addElement(this.m_contractList);
	cont.addElement(sub_cont);
	
	//Суб панель левая
	var sub_cont=new ControlContainer("p_cl_cond_sub_l","div",{"className":get_bs_col()+"6"});
	
	//условия оплаты
	this.m_payTypeCtrl = new PayTypeEditObject("pay_type","pay_type",false,"in_advance");
	this.bindControl(this.m_payTypeCtrl,
	{"modelId":model_id,
		"valueFieldId":"pay_type",
		"keyFieldIds":["pay_type"]},
	{"valueFieldId":"pay_type","keyFieldIds":["pay_type"]});
	sub_cont.addElement(this.m_payTypeCtrl);
	
	//Отсрочка
	this.m_payDelayDaysCtrl = new EditNum("Client_pay_delay_days",
		{"name":"pay_delay_days",
		"labelCaption":"Отсрочка платежа (дней)",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":3}}
	);
	this.bindControl(this.m_payDelayDaysCtrl,
	{"modelId":model_id,
		"valueFieldId":"pay_delay_days",
		"keyFieldIds":null},
	{"valueFieldId":"pay_delay_days","keyFieldIds":null});
	sub_cont.addElement(this.m_payDelayDaysCtrl);
	
	//Привязывать к дню недели
	var sub_sub_cont=new ControlContainer(uuid(),"div",{className:"form-group"});	
	var sub_sub_sub_cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"4"});	
	this.m_payFixToDowCtrl = new EditCheckBox("Client_pay_fix_to_dow",
		{"labelCaption":"Привязывать к дню недели:",
		"name":"pay_fix_to_dow",
		"labelAlign":"left",
		"events":{
			"change":function(){
				self.setPayFixToDow(self.m_payFixToDowCtrl.getValue());
			}
		}
		}
	);
	this.bindControl(this.m_payFixToDowCtrl,
	{"modelId":model_id,
		"valueFieldId":"pay_fix_to_dow",
		"keyFieldIds":null},
	{"valueFieldId":"pay_fix_to_dow","keyFieldIds":null});
	sub_sub_sub_cont.addElement(this.m_payFixToDowCtrl);	
	sub_sub_cont.addElement(sub_sub_sub_cont);
		
	var sub_sub_sub_cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"8"});	
	this.m_payDowCtrl = new EditDow("Client_pay_dow_days",{
		"enabled":false,
		"days":[
			{"descr":"ПН","value":1},
			{"descr":"ВТ","value":2},
			{"descr":"СР","value":3},
			{"descr":"ЧТ","value":4},
			{"descr":"ПТ","value":5},
			],
		"multySelect":true,
		"winObj":options.winObj});
	this.bindControl(this.m_payDowCtrl,
	{"modelId":model_id,
		"valueFieldId":"pay_dow_days",
		"keyFieldIds":null},
	{"valueFieldId":"pay_dow_days","keyFieldIds":null});
		
	sub_sub_sub_cont.addElement(this.m_payDowCtrl);	
	sub_sub_cont.addElement(sub_sub_sub_cont);
	sub_cont.addElement(sub_sub_cont);
	
	//Запрет отгрузки по дням
	var sub_sub_cont=new ControlContainer(uuid(),"div",{className:"form-group"});	
	var sub_sub_sub_cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"10"});	
	this.m_payBanOnDebtDaysCtrl = new EditCheckBox("Client_pay_ban_on_debt_days",
		{"labelCaption":"Запрет автоматической отгрузки при просрочке платежа на ",
		"name":"pay_ban_on_debt_days",
		"attrs":{}}
	);
	this.bindControl(this.m_payBanOnDebtDaysCtrl,
	{"modelId":model_id,
		"valueFieldId":"pay_ban_on_debt_days",
		"keyFieldIds":null},
	{"valueFieldId":"pay_ban_on_debt_days","keyFieldIds":null});
	sub_sub_sub_cont.addElement(this.m_payBanOnDebtDaysCtrl);
	sub_sub_cont.addElement(sub_sub_sub_cont);
	
	//day count
	var sub_sub_sub_cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"2"});	
	this.m_payDebtDaysCtrl = new EditNum("Client_pay_debt_days",
		{"name":"pay_debt_days","buttonClear":false,
		"attrs":{"maxlength":3}}
	);
	this.bindControl(this.m_payDebtDaysCtrl,
	{"modelId":model_id,
		"valueFieldId":"pay_debt_days",
		"keyFieldIds":null},
	{"valueFieldId":"pay_debt_days","keyFieldIds":null});
	sub_sub_sub_cont.addElement(this.m_payDebtDaysCtrl);	
	sub_sub_sub_cont.addElement(new Control(uuid(),"span",{
		"value":"дн.",
		className:"form-control-static"}));		
	sub_sub_cont.addElement(sub_sub_sub_cont);
	sub_cont.addElement(sub_sub_cont);
	
	//Запрет отгрузки по сумме
	var sub_sub_cont=new ControlContainer(uuid(),"div",{className:"form-group"});	
	var sub_sub_sub_cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"10"});	
	this.m_payBanOnDebtSumCtrl = new EditCheckBox("Client_pay_ban_on_debt_sum",
		{"labelCaption":"Запрет автоматической отгрузки при просрочке более ",
		"name":"pay_ban_on_debt_sum",
		"tableLayout":false,
		"labelAlign":"left",
		"attrs":{}}
	);
	this.bindControl(this.m_payBanOnDebtSumCtrl,
	{"modelId":model_id,
		"valueFieldId":"pay_ban_on_debt_sum",
		"keyFieldIds":null},
	{"valueFieldId":"pay_ban_on_debt_sum","keyFieldIds":null});
	sub_sub_sub_cont.addElement(this.m_payBanOnDebtSumCtrl);
	sub_sub_cont.addElement(sub_sub_sub_cont);
	
	//SUM
	var sub_sub_sub_cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"2"});	
	this.m_payDebtSumCtrl = new EditMoney("Client_pay_debt_days",
		{"name":"pay_debt_sum","buttonClear":false});
	this.bindControl(this.m_payDebtSumCtrl,
		{"modelId":model_id,
		"valueFieldId":"pay_debt_sum","keyFieldIds":null},
		{"valueFieldId":"pay_debt_sum","keyFieldIds":null});
	sub_sub_sub_cont.addElement(this.m_payDebtSumCtrl);		
	sub_sub_sub_cont.addElement(new Control("ban_sm2_t","span",{
		"value":"руб.",
		"className":"form-control-static"
		}));		
	sub_sub_cont.addElement(sub_sub_sub_cont);
	sub_cont.addElement(sub_sub_cont);
	
	cont.addElement(sub_cont);
	
	//Правая панель
	var sub_cont=new ControlContainer("attrl_sub_r","div",{"className":get_bs_col()+"6"});
	//кнопка настройка прайсов
	this.m_btnPriceTune = new BtnPriceTune({});
	sub_cont.addElement(this.m_btnPriceTune);
	
	this.m_priceListList = new ClientPriceListClientList_View("ClientPriceListClientList",options);
	sub_cont.addElement(this.m_priceListList);
	
	//остальные галочки
	var ctrl = new EditCheckBox("Client_login_allowed",
		{"labelCaption":"Работа через личный кабинет",
		"tableLayout":false,
		"labelAlign":"left",
		"name":"login_allowed"}
	);
	this.bindControl(ctrl,
	{"modelId":model_id,"valueFieldId":"login_allowed",
		"keyFieldIds":null},
	{"valueFieldId":"login_allowed","keyFieldIds":null}
	);
	sub_cont.addElement(ctrl);	
	var ctrl = new EditCheckBox("Client_sms_on_order_change",
		{"labelCaption":"Отправлять SMS ответственному от клиента об изм.заявки",
		"tableLayout":false,
		"labelAlign":"left",		
		"name":"sms_on_order_change"}
	);
	this.bindControl(ctrl,
	{"modelId":model_id,"valueFieldId":"login_allowed",
		"keyFieldIds":null},
	{"valueFieldId":"sms_on_order_change","keyFieldIds":null}
	);
	sub_cont.addElement(ctrl);	
	var ctrl = new EditCheckBox("Client_email_sert",
		{"labelCaption":"Отправлять паспорт качества при каждой поставке",
		"tableLayout":false,
		"labelAlign":"left",		
		"name":"email_sert"}
	);
	this.bindControl(ctrl,
	{"modelId":model_id,"valueFieldId":"login_allowed",
		"keyFieldIds":null},
	{"valueFieldId":"email_sert","keyFieldIds":null}
	);
	sub_cont.addElement(ctrl);	

	var ctrl = new EditCheckBox("Client_show_delivery_tab",
		{"labelCaption":"Показывать отслеживание заявок",
		"tableLayout":false,
		"labelAlign":"left",		
		"name":"show_delivery_tab"}
	);
	this.bindControl(ctrl,
	{"modelId":model_id,"valueFieldId":"login_allowed",
		"keyFieldIds":null},
	{"valueFieldId":"show_delivery_tab","keyFieldIds":null}
	);
	sub_cont.addElement(ctrl);	
	
	cont.addElement(sub_cont);	
	
	cont_m.addElement(cont);
	
	this.addControl(cont_m);
	
	//added comment
	this.bindControl(attrs.comment_text,
		{"modelId":model_id,
		"valueFieldId":"comment_text",
		"keyFieldIds":null},
	{"valueFieldId":"comment_text","keyFieldIds":null});	
	this.addControl(attrs.comment_text);

	this.m_ctrlSave = new ButtonCmd(id+"btnSave",
		{"caption":"Записать",
		"onClick":function(){
			self.onClickSave();
		},
		"attrs":{"title":"Записать"}
		});
	
}
extend(ClientDialog_View,ViewDialog);

ClientDialog_View.prototype.onGetData = function(resp){
	ClientDialog_View.superclass.onGetData.call(this,resp);	
	var id=this.getDataControl("ClientDialog_id").control.getAttr("old_id");
	if (id){
		//users
		this.m_userList.setClientId(id);
		this.m_userList.m_grid.setEnabled(true);
		this.m_userList.m_grid.onRefresh();
		//contracts
		this.m_contractList.setClientId(id);
		this.m_contractList.m_grid.setEnabled(true);
		this.m_contractList.m_grid.onRefresh();	
		//prices
		this.m_priceListList.setClientId(id);
		this.m_priceListList.m_grid.setEnabled(true);
		this.m_priceListList.m_grid.onRefresh();	
		//accounts
		this.m_firmAccList.setClientId(id);
		this.m_firmAccList.m_grid.setEnabled(true);
		this.m_firmAccList.m_grid.onRefresh();
		
		var m = resp.getModelById("ClientDialog_Model",true);
		if (m.getNextRow()){
			this.m_registered = (m.getFieldValue("registered")=="true");
			if (!this.m_registered){
				this.m_ctrlOk.setCaption("Зарегистрировать");
			}
			
			this.m_ctrlBind1cCont.setVisible(m.getFieldValue("ext_id"));
		}
		
		this.m_ctrlInn.getButtons().getElement("Client_inn_btn_sel").m_clientId = id;
	}
	//events
	this.m_evAddrMailSameAsRegClick();
	this.m_evPayTypeClick();
}	
ClientDialog_View.prototype.fillFrom1c = function(resp){
	var model=resp.getModelById("attrs_from_1c");
	model.setActive(true);
	if (model.getNextRow()){
		for (var f_id in model.m_fields){			
			if (f_id=="found"){
				if (model.getFieldValue(f_id)=="0"){
					WindowMessage.show({"text":"Контрагента с данным наименованием в 1с не найден!","type":WindowMessage.TP_WARN});
					break;
				}
			}
			else if (f_id=="is_supplier"||f_id=="is_carrier"){
				this.setDataControlValue("Client_"+f_id,
					(model.getFieldValue(f_id)=="1")? "true":"false"
				);			
			}
			else{
				this.setDataControlValue("Client_"+f_id,
					model.getFieldValue(f_id)
				);
			}
		}
	}
}
ClientDialog_View.prototype.setMethodParams = function(pm,checkRes){
	ClientDialog_View.superclass.setMethodParams.call(this,pm,checkRes);
	/*Если клиент не зарегистрирован всегда UPDATE
	*/
	if (!this.m_registered){
		checkRes.modif = true;
	}
}
ClientDialog_View.prototype.toDOM = function(parent){
	ClientDialog_View.superclass.toDOM.call(this,parent);
	EventHandler.addEvent(this.m_addrMailSameAsReg.getNode(),"change",this.m_evAddrMailSameAsRegClick);
	EventHandler.addEvent(this.m_payTypeCtrl.getNode(),"change",this.m_evPayTypeClick);
}
ClientDialog_View.prototype.removeDOM = function(){
	ClientDialog_View.superclass.removeDOM.call(this);
	EventHandler.removeEvent(this.m_addrMailSameAsReg.getNode(),"change",this.m_evAddrMailSameAsRegClick);
	EventHandler.removeEvent(this.m_payTypeCtrl.getNode(),"change",this.m_evPayTypeClick);
}
ClientDialog_View.prototype.setPayFixToDow = function(v){
	this.m_payDowCtrl.setEnabled((v=="true")? true:false);
}
ClientDialog_View.prototype.unbindClient = function(){
	var id=this.getDataControl("ClientDialog_id").control.getAttr("old_id");
	var self = this;
	var contr = new Client_Controller(new ServConnector(HOST_NAME));
	contr.run("update",{
		"params":{"old_id":id,"ext_id":""},
		"func":function(){
			WindowMessage.show({
				"text":"Связь с 1с разорвана.",
				"type":WindowMessage.TP_NOTE
			});					
			self.m_ctrlBind1cCont.setVisible(false);
		}
	});
}


