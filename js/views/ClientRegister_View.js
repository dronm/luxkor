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

function ClientRegisterViewDialog(id,options){
	options =options||{};
	options.tagName = "div";
	ClientRegisterViewDialog.superclass.constructor.call(this,
		id,options);
	var self = this;
	this.m_ctrlOk = new Button(id+"btnOk",		
		{"caption":"Зарегистрировать",
			"onClick":function(){
				self.writeData();
				if (self.m_lastWriteResult){
					//Переход
					top.location.href = HOST_NAME+'index.php';
				}			
			},
		"attrs":{"hint":"Зарегистрировать"},
		"className":"viewBtn"});		
}
extend(ClientRegisterViewDialog,ViewDialog);

/* constructor */
function ClientRegister_View(id,options){
	options = options || {};
	options.writeController = new Client_Controller(options.connect);
	options.insertMethodId = "register";
	
	ClientRegister_View.superclass.constructor.call(this,
		id,options);

	var attrs = {};
	ClientAttrs(attrs);
		
	//Наименование
	var cont=new ControlContainer("p_org","div",{"className":"panel"});
	cont.addElement(new Control("p_org_l","span",{"value":"Организация","className":"panel_l"}));
	this.bindControl(attrs.name,{},{"valueFieldId":"name","keyFieldIds":null});	
	cont.addElement(attrs.name);
	this.addControl(cont);
	
	//Реквизиты
	var cont=new ControlContainer("p_attrs","div",{"className":"panel"});
	cont.addElement(new Control("p_attrs_l","span",{"value":"Реквизиты","className":"panel_l"}));
	
	var sub_cont=new ControlContainer("attrl_sub_l","div",{"className":"panel_left"});
	this.bindControl(attrs.inn,{},{"valueFieldId":"inn","keyFieldIds":null});
	sub_cont.addElement(attrs.inn);
	
	this.bindControl(attrs.kpp,{},{"valueFieldId":"kpp","keyFieldIds":null});	
	sub_cont.addElement(attrs.kpp);
	
	this.m_addrRegCtrl = attrs.addr_reg;
	this.bindControl(this.m_addrRegCtrl,{},{"valueFieldId":"addr_reg","keyFieldIds":null});
	sub_cont.addElement(this.m_addrRegCtrl);
	
	this.bindControl(attrs.addr_mail_same_as_reg,{},{"valueFieldId":"addr_mail_same_as_reg","keyFieldIds":null});	
	sub_cont.addElement(attrs.addr_mail_same_as_reg);
	
	this.m_addrMailCtrl = attrs.addr_mail;
	this.bindControl(attrs.addr_mail,{},{"valueFieldId":"addr_mail","keyFieldIds":null});
	sub_cont.addElement(attrs.addr_mail);
	
	this.bindControl(attrs.telephones,{},{"valueFieldId":"telephones","keyFieldIds":null});
	sub_cont.addElement(attrs.telephones);
	
	cont.addElement(sub_cont);
	
	var sub_cont=new ControlContainer("attrl_sub_r","div",{"className":"panel_right"});
	this.bindControl(attrs.acc,{},{"valueFieldId":"acc","keyFieldIds":null});
	sub_cont.addElement(attrs.acc);
	
	this.bindControl(attrs.bank_name,{},{"valueFieldId":"bank_name","keyFieldIds":null});
	sub_cont.addElement(attrs.bank_name);
	
	this.bindControl(attrs.bank_code,{},{"valueFieldId":"bank_code","keyFieldIds":null});	
	sub_cont.addElement(attrs.bank_code);
	
	this.bindControl(attrs.bank_acc,{},{"valueFieldId":"bank_acc","keyFieldIds":null});
	sub_cont.addElement(attrs.bank_acc);
	
	this.bindControl(attrs.okpo,{},{"valueFieldId":"okpo","keyFieldIds":null});
	sub_cont.addElement(attrs.okpo);
	
	this.bindControl(attrs.ogrn,{},{"valueFieldId":"ogrn","keyFieldIds":null});
	sub_cont.addElement(attrs.ogrn);
	
	cont.addElement(sub_cont);
	
	this.addControl(cont);
	
	//Ответственный
	var cont=new ControlContainer("p_log","div",{"className":"panel"});	
	cont.addElement(new Control("p_log_l","span",{"value":"Ответственный","className":"panel_l"}));
	var sub_cont=new ControlContainer("logl_l","div",{"className":"panel_left"});	
	var ctrl=new EditString("Client_user_name_full",
		{"labelCaption":"ФИО:","name":"user_name_full",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":150,"size":70,"required":"required"}}
	);
	this.bindControl(ctrl,{},{"valueFieldId":"user_name_full","keyFieldIds":null});
	sub_cont.addElement(ctrl);
	
	var ctrl=new EditString("Client_user_email",
		{"labelCaption":"email:","name":"user_email",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":50,"size":25,"required":"required"}}
	);
	this.bindControl(ctrl,{},{"valueFieldId":"user_email","keyFieldIds":null});
	sub_cont.addElement(ctrl);
	
	var ctrl=new EditCellPhone("Client_user_phone",
		{"labelCaption":"Телефон:","name":"user_phone",
		"attrs":{"size":25},
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"required":"required"}}
	);
	this.bindControl(ctrl,{},{"valueFieldId":"user_phone","keyFieldIds":null});
	sub_cont.addElement(ctrl);
	
	cont.addElement(sub_cont);
	
	var sub_cont=new ControlContainer("logl_r","div",{"className":"panel_right"});	
	
	var ctrl=new EditString("Client_user_name",
		{"labelCaption":"Логин:","name":"user_name",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":50,"size":25,"required":"required"}}
	);
	this.bindControl(ctrl,{},{"valueFieldId":"user_name","keyFieldIds":null});
	sub_cont.addElement(ctrl);
	
	var ctrl=new EditPassword("Client_user_pwd",
		{"labelCaption":"Пароль:","name":"user_pwd",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":50,"size":25,"required":"required"}}
	);
	this.bindControl(ctrl,{},{"valueFieldId":"user_pwd","keyFieldIds":null});
	sub_cont.addElement(ctrl);
	
	cont.addElement(sub_cont);
	
	this.addControl(cont);
}
extend(ClientRegister_View,ClientRegisterViewDialog);

ClientRegister_View.prototype.toDOM = function(parent){
	ClientRegister_View.superclass.toDOM.call(this,parent);
	
	var self = this;
	var ctrl_same_addr = this.getViewControl("Client_addr_mail_same_as_reg");		
	EventHandler.addEvent(ctrl_same_addr.m_node,"click",function(){
		if (ctrl_same_addr.m_node.checked){
			self.m_addrMailCtrl.setValue("");
		}
		self.m_addrMailCtrl.setEnabled(!ctrl_same_addr.m_node.checked);
	},true);
	
	//inn	
	var ctrl_inn=this.getViewControl("Client_inn");
	EventHandler.addEvent(ctrl_inn.m_node,"blur",function(){
		var inn=ctrl_inn.getValue();
		if (inn){
			ctrl_inn.setComment("");
			var contr = new Client_Controller(new ServConnector(HOST_NAME));
			contr.run("check_on_inn",{				
				async:true,
				params:{"inn":inn},
				cont:self,
				err:function(resp,errCode,errStr){
					ctrl_inn.setComment(errStr);
				}
			});
		}
	}
	);
	//user_name
	var ctrl_user_name=this.getViewControl("Client_user_name");
	EventHandler.addEvent(ctrl_user_name.m_node,"blur",function(){
		var user_name=ctrl_user_name.getValue();
		if (user_name){
			ctrl_user_name.setComment("");
			var contr = new Client_Controller(new ServConnector(HOST_NAME));
			contr.run("check_on_user_name",{				
				async:true,
				params:{"user_name":user_name},
				/*
				func:function(resp){
					if (resp.getRespResult()==1){
						//self.m_errorControl.setValue(resp.getRespDescr());
						ctrl_user_name.setComment(resp.getRespDescr());
					}
				},
				*/
				cont:self,
				err:function(resp,errCode,errStr){
					ctrl_user_name.setComment(errStr);
				}				
			});
		}
	});	
}
ClientRegister_View.prototype.onClickCancel = function(){
	this.getOnClose().call(this,0);
}
