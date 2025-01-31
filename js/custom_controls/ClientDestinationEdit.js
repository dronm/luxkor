function ClientDestinationEdit(id,opts){
	var contr = new ClientDestination_Controller(new ServConnector(HOST_NAME));
	//if (SERV_VARS.ROLE_ID!="client"){
		this.m_pm = contr.getPublicMethodById(contr.METH_GET_LIST);
		this.m_pm.setParamValue(contr.PARAM_COND_FIELDS,"client_id");
		this.m_pm.setParamValue(contr.PARAM_COND_SGNS,"e");	
		this.m_paramId = contr.PARAM_COND_VALS;
	//}
	options =
		{"attrs":{"required":"required"},
		"tableLayout":false,
		"methodId":contr.METH_GET_LIST,
		"modelId":"ClientDestinationList_Model",
		"lookupValueFieldId":"address",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"controller":contr,
		"objectView":null,
		"noSelect":false,
		"noOpen":true,
		"winObj":opts.winObj,
		"listView":null,
		"noAutoRefresh":true,
		"enabled":false
	};
	if (opts.inLine==undefined||(opts.inLine!=undefined&&!inLine)){
		options["labelCaption"] = "Адрес доставки:";
	}
	
	var self = this;	
	
	this.m_btnAdd = new ButtonCtrl(id+"_add_btn",{
	"glyph":"glyphicon-plus",
	"attrs":{"title":"добавить новый адрес"},
	"enabled":false,
	"onClick":function(){
		self.openForm();
	}
	});	
	this.m_btnEdit = new ButtonCtrl(id+"_edit_btn",{
	"glyph":"glyphicon-pencil",
	"attrs":{"title":"изменить адрес"},
	"enabled":false,
	"onClick":function(){	
		var id = self.getFieldValue();
		if (id&&id!='undefined'){
			self.openForm({"id":id});
		}		
	}
	});
	this.m_btnDelete = new ButtonCtrl(id+"_del_btn",{
	"glyph":"glyphicon-remove",
	"attrs":{"title":"удалить адрес"},
	"enabled":false,
	"onClick":function(){
		var id=self.getFieldValue();
		if (id&&id!="undefined"){
			WindowQuestion.show({
			"winObj":self.m_winObj,
			"text":"Удалить адрес клиента?",
			"callBack":function(r){
				if (r==WindowQuestion.RES_YES){
					var contr = new ClientDestination_Controller(new ServConnector(HOST_NAME));
					contr.run("delete",{
						"async":true,				
						"params":{"id":id},
						"func":function(){
							self.onRefresh();
						}
					});					
				}
			}
			})
		}
	}
	});
	
	ClientDestinationEdit.superclass.constructor.call(this,
		id,options);	
		
	this.m_buttons.addElement(this.m_btnAdd);
	this.m_buttons.addElement(this.m_btnEdit);
	this.m_buttons.addElement(this.m_btnDelete);		
}
extend(ClientDestinationEdit,EditSelectObject);

ClientDestinationEdit.prototype.setClientId = function(clientId){
	//if (SERV_VARS.ROLE_ID!="client"){
		this.m_pm.setParamValue(this.m_paramId,clientId);
	//}
	this.setEnabled(true);
}
/*
ClientDestinationEdit.prototype.toDOM = function(parent){
	ClientDestinationEdit.superclass.toDOM.call(this,parent);		
	this.m_btnAdd.toDOM(parent);
	this.m_btnEdit.toDOM(parent);
	this.m_btnDelete.toDOM(parent);
	
}
*/
ClientDestinationEdit.prototype.openForm = function(keys){
	var self = this;
	//
	//WindowFormModalBS
	this.m_extForm = new WIN_CLASS(this.getId()+"_dest_edit",{"caption":"Адрес клиента",
		"top":0,"left":0,
		"width":getViewportWidth()-10,"height":getViewportHeight(),
		"noMinimize":true,"resizable":false});
	
	this.m_extView = new ClientDestinationDialog_View(this.m_id+"_ClientDestinationDialog",
		{"winObj":this.m_extForm,
		"readController":new ClientDestination_Controller(new ServConnector(HOST_NAME)),
		"clientId":this.m_pm.getParamValue(this.m_paramId),
		"onClose":function(res){
			//console.log("ClientDestinationEdit.prototype.openForm view destroy")
			self.onRefresh();			
		
			if (self.m_extView.m_lastInsertedId){
				//есть последний вставленный ид - спозиционируемся на него
				self.setByFieldId(self.m_extView.m_lastInsertedId);			
			}
			
			self.m_extView.removeDOM();
			delete self.m_extView;

			self.m_extForm.m_closeMode = res;		
			self.m_extForm.close();
			delete self.m_extForm;
			
			self.setFocus();		
		}
		});
	this.m_extView.setWinObj(this.m_extForm);
	this.m_extForm.m_view = this.m_extView;
	this.m_extForm.open();	
	
	this.m_extView.toDOM(this.m_extForm.getContentParent());
	this.m_extForm.setFocus();		
		
	if (keys){
		for (var key_id in keys){
			this.m_extView.setReadIdValue(key_id,keys[key_id]);		
		}
		this.m_extView.readData(true);			
	}
	
}
ClientDestinationEdit.prototype.setEnabled = function(val){
	ClientDestinationEdit.superclass.setEnabled.call(this,val);
	this.m_btnAdd.setEnabled(val);
	this.m_btnEdit.setEnabled(val);
	this.m_btnDelete.setEnabled(val);
}
