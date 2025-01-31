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
function VehicleDialog_View(id,options){
	options = options || {};
	VehicleDialog_View.superclass.constructor.call(this,
		id,options);	
	
	var model = "VehicleDialog_Model";
	
	var self = this;
	
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	
	var cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"6"});
	
	var ctrl = new EditNum(id+"_id",
		{"attrs":{"disabled":"disabled"},
		"labelCaption":"Код:"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null});	
	cont.addElement(ctrl);
	
	this.m_plateCtrl = new EditString(id+"_plate",
		{"attrs":{"maxlength":20,"size":8,"required":"required"},
		"labelCaption":"Рег.номер:","name":"plate"}
	);
	this.bindControl(this.m_plateCtrl,
		{"modelId":model,
		"valueFieldId":"plate",
		"keyFieldIds":null},
		{"valueFieldId":"plate","keyFieldIds":null});	
	cont.addElement(this.m_plateCtrl);
	
	//
	ctrl = new EditString(id+"_model",
		{"attrs":{"maxlength":50},
		"labelCaption":"Модель:",
		"name":"model"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"model",
		"keyFieldIds":null},
		{"valueFieldId":"model","keyFieldIds":null});	
	cont.addElement(ctrl);
	
	//
	ctrl = new EditNum(id+"_vol",
		{"attrs":{"maxlength":5},
		"labelCaption":"Объем:",
		"name":"vol"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"vol",
		"keyFieldIds":null},
		{"valueFieldId":"vol","keyFieldIds":null});	
	cont.addElement(ctrl);
	
	//
	ctrl = new EditFloat(id+"_load_weight_t",
		{"precision":"2","attrs":{"maxlength":8,"size":4},
		"labelCaption":"Грузоподъемность:",
		"name":"load_weight_t"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"load_weight_t",
		"keyFieldIds":null},
		{"valueFieldId":"load_weight_t","keyFieldIds":null});	
	cont.addElement(ctrl);
	
	//
	ctrl = new ProductionCityEditObject("production_city_id","production_city",false);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"production_city_descr",
		"keyFieldIds":["production_city_id"]},
		{"modelId":model,
		"valueFieldId":null,"keyFieldIds":["production_city_id"]}
	);	
	cont.addElement(ctrl);

	this.addControl(cont);
	
	//
	var cont=new ControlContainer(uuid(),"div",{className:get_bs_col()+"6"});
	
	//основной	
	ctrl = new EditCheckBox(id+"_employed",
		{"labelCaption":"Постоянное ТС:",
		"name":"employed",
		"labelAlign":"left"
		}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"employed",
		"keyFieldIds":null},
		{"valueFieldId":"employed","keyFieldIds":null}
	);	
	cont.addElement(ctrl);
	
	this.m_carrierCtrl = new CarrierEditObject("carrier_id","carrier",false);
	this.bindControl(this.m_carrierCtrl,
		{"modelId":model,
		"valueFieldId":"carrier_descr",
		"keyFieldIds":["carrier_id"]},
		{"modelId":model,
		"valueFieldId":null,"keyFieldIds":["carrier_id"]}
	);	
	cont.addElement(this.m_carrierCtrl);
	
	
	//Driver
	/*
	this.m_driverCtrl = new DriverEditObject("driver_id","driver",false,{
		"options":{
			"extraFields":["match_1c"],
			"onSelected":function(){
				self.onDriverSelected();
			},
			"afterInsert":function(m){
				self.onDriverInserted(m);
			},			
			"winObj":options.winObj,
			"noInsert":false
		}
		});
	this.bindControl(this.m_driverCtrl,
		{"modelId":model,
		"valueFieldId":"driver_descr",
		"keyFieldIds":["driver_id"]},
		{"modelId":model,
		"valueFieldId":null,"keyFieldIds":["driver_id"]}
	);
	(this.m_driverCtrl.getButtonInsert()).addBind("name",this.m_driverCtrl);		
	cont.addElement(this.m_driverCtrl);
	*/
	//Теперь данные по водителю - текстовые поля
	ctrl = new EditString(id+"_driver_descr",
		{"attrs":{"maxlength":150},
		"labelCaption":"ФИО водителя:",
		"name":"driver_descr"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"driver_descr",
		"keyFieldIds":null},
		{"valueFieldId":"driver_descr","keyFieldIds":null});	
	cont.addElement(ctrl);
	
	ctrl = new EditString(id+"_driver_drive_perm",
		{"attrs":{"maxlength":20},
		"labelCaption":"Вод.удост.водителя:",
		"name":"driver_drive_perm"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"driver_drive_perm",
		"keyFieldIds":null},
		{"valueFieldId":"driver_drive_perm","keyFieldIds":null});	
	cont.addElement(ctrl);
	ctrl = new EditCellPhone(id+"_driver_cel_phone",
		{
		"labelCaption":"Сот.тел.водителя:",
		"name":"driver_cel_phone"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"driver_cel_phone",
		"keyFieldIds":null},
		{"valueFieldId":"driver_cel_phone","keyFieldIds":null});	
	cont.addElement(ctrl);
	
	
	this.m_getAttrsBtn = new ButtonCtrl(id+":btn_get_attrs",{
		"caption":"Заполнить из 1с",
		"enabled":false,
		"onClick":function(){
			self.getDriverAttrs();
		}
	});		
	cont.addElement(this.m_getAttrsBtn);

	this.m_match1CCtrl = new Control(id+":match_1c","span",{});		
	cont.addElement(this.m_match1CCtrl);
		
	//
	ctrl = new DelivCostOptEdit({
			"fieldId":"deliv_cost_opt_id",
			"controlId":"deliv_cost_opt",
			"inLine":false}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"deliv_cost_opt_descr",
		"keyFieldIds":["deliv_cost_opt_id"]},
		{"modelId":model,
		"valueFieldId":null,"keyFieldIds":["deliv_cost_opt_id"]}
	);	
	cont.addElement(ctrl);	
	
	//прицеп
	this.m_trailerPlateCtrl = new EditString(id+"_trailer_plate",
		{"attrs":{"maxlength":20,"size":8},
		"labelCaption":"Рег.номер прицепа:","name":"trailer_plate"}
	);
	this.bindControl(this.m_trailerPlateCtrl,
		{"modelId":model,
		"valueFieldId":"trailer_plate",
		"keyFieldIds":null},
		{"valueFieldId":"trailer_plate","keyFieldIds":null}
	);	
	cont.addElement(this.m_trailerPlateCtrl);
	
	//
	this.m_trailerModelCtrl = new EditString(id+"_trailer_model",
		{"attrs":{"maxlength":50,"size":20},
		"labelCaption":"Модель прицепа:","name":"trailer_model"}
	);
	this.bindControl(this.m_trailerModelCtrl,
		{"modelId":model,
		"valueFieldId":"trailer_model",
		"keyFieldIds":null},
		{"valueFieldId":"trailer_model","keyFieldIds":null}
	);	
	cont.addElement(this.m_trailerModelCtrl);
	
	cont_m.addElement(cont);
	this.addControl(cont_m);
	
	var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
	var cont=new ControlContainer("tracker_cont","div",{className:get_bs_col()+"6"});
	var ctrl = new TrackerEdit({
			fieldId:"tracker_id",
			"controlId":id+"_tracker",
			"inline":false
		}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"tracker_id",
		"keyFieldIds":["tracker_id"]},
	{"valueFieldId":null,"keyFieldIds":["tracker_id"]});	
	cont.addElement(ctrl);

	ctrl = new EditDateTime(id+"_last_tracker_data",
		{"enabled":false,
		"editContClassName":"input-group "+get_bs_col()+"4",
		"labelCaption":"Последние данные:"}
	);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"last_tracker_data",
		"keyFieldIds":null},
	{"valueFieldId":null,"keyFieldIds":null});	
	cont.addElement(ctrl);
	
	cont_m.addElement(cont);
	this.addElement(cont_m);
}
extend(VehicleDialog_View,ViewDialog);

VehicleDialog_View.prototype.getDriverAttrs = function(){
	var dr_id = this.m_driverCtrl.getFieldValue();
	if (!dr_id || dr_id=="undefined" || dr_id=="null")return;
	
	this.m_getAttrsBtn.setEnabled(false);
	
	var self = this;
	var contr = new Driver_Controller(new ServConnector(HOST_NAME));
	contr.run("get_veh_attrs",{
		"params":{"driver_id":dr_id},
		"err":function(resp,errCode,errStr){
			self.getErrorControl().setValue(errStr);
			
			self.m_getAttrsBtn.setEnabled(true);				
		},
		"func":function(resp){
			var m = resp.getModelById("get_veh_attrs",true);
			if (m.getNextRow()){
				self.m_getAttrsBtn.setEnabled(true);
				self.m_carrierCtrl.setValue(m.getFieldValue('carrier_descr'));
				self.m_carrierCtrl.setFieldValue("id",m.getFieldValue('carrier_id'));
				self.m_trailerModelCtrl.setValue(m.getFieldValue('trailer_model'));
				self.m_trailerPlateCtrl.setValue(m.getFieldValue('trailer_plate'));
				self.m_plateCtrl.setValue(m.getFieldValue('plate'));
			}
		}
	});
}

VehicleDialog_View.prototype.setMatch1C = function(v){
	this.m_getAttrsBtn.setEnabled(v);
	this.m_match1CCtrl.setValue((v)? " Водитель связан с 1с":" Нет связи водиетля с 1с");
	if (!v){
		this.m_match1CCtrl.setAttr("class","text-danger");
	}
	else{
		this.m_match1CCtrl.setAttr("class","text-success");
	}
}

VehicleDialog_View.prototype.onGetData = function(resp){
	VehicleDialog_View.superclass.onGetData.call(this,resp);
	
	var match1c = false;
	var m = resp.getModelById("VehicleDialog_Model",true);
	if (m.getNextRow()){
		match1c = (m.getFieldValue("match_1c")=="true");
	}
	this.setMatch1C(match1c);
}

VehicleDialog_View.prototype.onDriverSelected = function(){
	this.setMatch1C((this.m_driverCtrl.getAttr("match_1c")=="true"));
}
VehicleDialog_View.prototype.onDriverInserted = function(){
	
	var dr_id = this.m_driverCtrl.getFieldValue("driver_id");
	if (!dr_id)return;
	
	DOMHandler.removeClass(this.m_driverCtrl.getNode(),"error");					

	var self = this;
	var contr = new Driver_Controller(new ServConnector(HOST_NAME));
	contr.getPublicMethodById("get_object");
	contr.run("get_object",{
		"params":{"id":dr_id},
		"func":function(resp){
			var m = resp.getModelById("DriverList_Model",true);
			if (m.getNextRow()){
				self.m_driverCtrl.setAttr("match_1c",m.getFieldValue("match_1c"));
				self.onDriverSelected();
				if (m.getFieldValue("match_1c")=="true"){					
					self.getDriverAttrs();
				}
			}
		}
	});
	
}

