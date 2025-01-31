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
function UserAccount_View(id,options){
	options = options || {};
	options.readMethodId = "get_account";
	options.writeMethodId = "update";
	
	var PWD_MIN_LEN = 6;
	
	//options.customWriteMethod = true;
	var contr = new User_Controller(new ServConnector(HOST_NAME));
	options.readController = contr;
	options.writeController = contr;
	
	UserAccount_View.superclass.constructor.call(this,
		id,options);
	var self = this;
	this.m_keyEvent = null;
	this.m_ctrlCancel = null;
	this.m_ctrlOk = null;
	/*new Button(id+"btnOk",		
		{"caption":"Изменить",
		"onClick":function(){
			self.onClickOk();
		},
		"className":"btn btn-default",
		"attrs":{
			"title":"записать изменения и отправить эл.письмо пользователю"}		
		});
	*/
	var model = "User_Model";
	
	var ctrl_cont_class= "input-group "+get_bs_col()+"2";
	var label_class = "control-label "+get_bs_col()+"3";
	
	var cont = new ControlContainer(id+"_panel","div",{});
	
	var ctrl = new Edit(id+"_id",{"name":"id","visible":false});
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	var ctrl = new EditString(id+"_name",
		{"labelCaption":"Логин:","name":"name",
		"editContClassName":ctrl_cont_class,
		"labelClassName":label_class,
		"attrs":{"maxlength":50,"size":20,"required":"required"}
		});
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	var ctrl = new EditString(id+"_name_full",
		{"labelCaption":"ФИО:",
		"name":"name_full",		
		"editContClassName":ctrl_cont_class,
		"labelClassName":label_class,
		"attrs":{"maxlength":100,"size":50,"required":"required"}
		});
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"name_full",
		"keyFieldIds":null},
		{"valueFieldId":"name_full","keyFieldIds":null}
	);
	cont.addElement(ctrl);
		
	var ctrl = new EditString(id+"_email",
		{"labelCaption":"Эл.почта:","name":"email",
		"editContClassName":ctrl_cont_class,
		"labelClassName":label_class,		
		"attrs":{"maxlength":50,"size":20}
		});
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"email",
		"keyFieldIds":null},
		{"valueFieldId":"email","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	var ctrl = new EditCellPhone(id+"_cel_phone",
		{"labelCaption":"Номер телефона:",
		"editContClassName":ctrl_cont_class,
		"labelClassName":label_class,		
		"name":"cel_phone"}
		);
	this.bindControl(ctrl,
		{"modelId":model,
		"valueFieldId":"cel_phone",
		"keyFieldIds":null},
		{"valueFieldId":"cel_phone","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	this.m_pwdCtrl = new EditPassword("UserDialog_Model_pwd",
		{"labelCaption":"Новый пароль:","name":"pwd",
		"editContClassName":ctrl_cont_class,
		"labelClassName":label_class,		
		"attrs":{"maxlength":50,"size":20,"required":"required"},
		"minLength":PWD_MIN_LEN
		});
	this.bindControl(this.m_pwdCtrl,
		{"modelId":model},
		{"valueFieldId":"pwd","keyFieldIds":null}
	);
	cont.addElement(this.m_pwdCtrl);
	
	this.m_pwdConfCtrl = new EditPassword("pwd_conf",
		{"labelCaption":"Подтверждение:","name":"pwd_conf",
		"editContClassName":ctrl_cont_class,
		"labelClassName":label_class,		
		"attrs":{"maxlength":50,"size":20,"required":"required"},
		"minLength":PWD_MIN_LEN
		});
	cont.addElement(this.m_pwdConfCtrl);
	this.m_pwdConfInfCtrl = new Control("pwd_conf_inf","div",{"className":"error"});
	cont.addElement(this.m_pwdConfInfCtrl);	
	
	cont.addElement(new Button(id+"btnOk",		
		{"caption":"Изменить",
		"onClick":function(){
			var pwd = self.m_pwdCtrl.getValue();
			var conf = self.m_pwdConfCtrl.getValue();
			if (pwd!=conf){
				self.m_pwdConfInfCtrl.setValue("Пароли отличаются");
			}
			else{
				self.onClickOk();
			}
		},
		"className":"btn btn-default",
		"attrs":{
			"title":"записать изменения и отправить эл.письмо пользователю"}		
		})
	);
		
	this.addControl(cont);
	
	//все пользователи-сотрудники
	if (SERV_VARS.ROLE_ID=="admin"){
		var cont_m=new ControlContainer(uuid(),"div",{className:"row"});
		var p_id = uuid();
		cont_m.addElement(new ButtonToggle(uuid(),{
			"caption":"список пользователей",
			"dataTarget":p_id,
			"attrs":{								
				"title":"показать/скрыть пользователей"
				}
			}));	
		
		var cont = new ControlContainer(p_id,"div",{"className":"collapse"});
		cont.addElement(new UserList_View("UserList_View"));
		cont_m.addElement(cont);
		this.addElement(cont_m);

	}
}
extend(UserAccount_View,ViewDialog);

UserAccount_View.prototype.toDOM = function(parent){
	var self = this;
	
	this.m_outCont = new ControlContainer(uuid(),"div",{className:"panel panel-primary"});
	this.m_outContBody = new ControlContainer(uuid(),"div",{className:"panel-body"});	
	this.m_inCont = new ControlContainer(uuid(),"div",{className:"panel panel-default"});
	
	UserAccount_View.superclass.toDOM.call(this,this.m_inCont.m_node);
	
	this.m_inCont.toDOM(this.m_outContBody.m_node);
	this.m_outContBody.toDOM(this.m_outCont.m_node);
	this.m_outCont.toDOM(parent);
	
	var check_pwd = function(){
		var mes = "";
		var pwd = self.m_pwdCtrl.getValue();
		var conf = self.m_pwdConfCtrl.getValue();
		if (pwd.length && conf.length && pwd!=conf){
			mes = "Пароли отличаются";
		}
		self.m_pwdConfInfCtrl.setValue(mes);
	}
	this.m_pwdCtrl.m_node.onkeyup = check_pwd;
	this.m_pwdConfCtrl.m_node.onkeyup = check_pwd;
	
	this.readData(true);
}
UserAccount_View.prototype.onClickOk = function(){
	this.writeData();
	this.readData(true);
}
UserAccount_View.prototype.removeDOM = function(){
	UserAccount_View.superclass.removeDOM.call(this);
	
	this.m_inCont.removeDOM();	
	this.m_outContBody.removeDOM();	
	this.m_outCont.removeDOM();		
}
