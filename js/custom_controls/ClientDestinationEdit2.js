function ClientDestinationEdit2(id,opts){
	var contr = new ClientDestination_Controller(new ServConnector(HOST_NAME));
	
	this.m_pm = contr.getPublicMethodById("complete_address");
	this.m_paramId = "client_id";
	this.m_pm.setParamValue(this.m_paramId,options.clientId);	
	
	this.m_mainView = opts.mainView;
	
	options =
		{"attrs":(opts.options.attrs!=undefined)? opts.options.attrs:{"required":"required"},
		"visible":(opts.options.visible!=undefined)? opts.options.visible:true,
		"noSelect":true,
		"noOpen":true,
		"tableLayout":false,
		"methodId":"complete_address",
		"modelId":"DelivAddress_Model",
		"lookupValueFieldId":"address",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":[opts.fieldId],
		"resultFieldId":"address",
		"controller":contr,
		"minLengthForQuery":"1",
		"patternParamId":"address",
		"ic":null,
		"mid":null,
		"onSelected":opts.options.onSelected,
		"extraFields":null,
		"resultFieldIdsToAttr":["is_old"],
		"queryDelay":500,
		"fullTextSearch":true,
		"className":"form-control addressEdit",
		"acUpdateInputOnCursor":true,
		"objectView":null,
		"noOpen":true,
		"contClassName":"aaa",
		"winObj":opts.winObj
	};
	if (opts.inLine==undefined||(opts.inLine!=undefined&&!inLine)){
		options["labelCaption"] = "Адрес доставки:";
	}
	
	var self = this;	
	
	this.m_btnEdit = new ButtonCtrl(id+"_edit_btn",{
	"glyph":"glyphicon-pencil",
	"attrs":{"title":"изменить адрес"},
	"enabled":false,
	"onClick":function(){	
		var id = self.getFieldValue();
		self.openForm( (id && id!="0")? {"id":id}:null );
	}
	});
	this.m_btnDelete = new ButtonCtrl(id+"_del_btn",{
	"glyph":"glyphicon-trash",
	"attrs":{"title":"удалить адрес"},
	"enabled":false,
	"onClick":function(){
		var id = self.getAttr("fkey_deliv_destination_id");
		if (id && id!="undefined"){
			WindowQuestion.show({
			"winObj":self.m_winObj,
			"text":"Удалить адрес клиента?",
			"callBack":function(r){
				if (r==WindowQuestion.RES_YES){
					var contr = new ClientDestination_Controller(new ServConnector(HOST_NAME));
					contr.getPublicMethodById("delete").setParamValue("id",id);
					contr.run("delete",{
						"func":function(){
							self.setAttr("fkey_deliv_destination_id","");
							self.setValue("");
							self.setFocus();
						}
					});					
				}
			}
			})
		}
	}
	});

	ClientDestinationEdit2.superclass.constructor.call(this,id,options);	
		
	this.m_buttons.addElement(this.m_btnEdit);
	this.m_buttons.addElement(this.m_btnDelete);		
}
extend(ClientDestinationEdit2,EditObject);

ClientDestinationEdit2.prototype.setClientId = function(clientId){
	this.m_pm.setParamValue(this.m_paramId,clientId);
	this.setEnabled(true);
}

ClientDestinationEdit2.prototype.openForm = function(keys){
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
		"addressValue":this.m_node.value,
		"delivDestinationId":(keys)? keys.id:"0",
		"onClose":function(res){
			var n_val = self.m_extView.m_ctrlValue.getValue();
			self.setValue(n_val);
			//console.log("onClose lastInsertedId="+self.m_extView.m_lastInsertedId)
			if (self.m_extView.m_lastInsertedId){
				self.setAttr("fkey_deliv_destination_id",self.m_extView.m_lastInsertedId);
				DOMHandler.removeClass(self.m_node,"error");				
			}
			if (self.m_extView.m_lastInsertedId || res ){
				//Всегда пересчет!!!
				self.m_mainView.calcDelivCost();
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
		
	var vwrite_m = "insert";
	if (keys && keys.id){
		this.m_extView.setReadIdValue("id",keys.id);		
		vwrite_m = "update";
		this.m_extView.readData(true);					
	}
	//console.log("Write mwthod="+vwrite_m)
	this.m_extView.setWriteMethodId(vwrite_m);
	
}
ClientDestinationEdit2.prototype.setEnabled = function(val){
	ClientDestinationEdit2.superclass.setEnabled.call(this,val);
	this.m_btnEdit.setEnabled(val);
	this.m_btnDelete.setEnabled(val);
	if(this.m_regSelectNode && val){
		this.m_regSelectNode.removeAttribute("disabled");
	}
	else if(this.m_regSelectNode){
		this.m_regSelectNode.setAttribute("disabled","disabled");
	}
}

ClientDestinationEdit2.prototype.addRegion = function(code,descr){	
	var opt = document.createElement("OPTION");
	opt.setAttribute("value",code);
	opt.appendChild(document.createTextNode(descr));
	this.m_regSelectNode.appendChild(opt);	
}

ClientDestinationEdit2.prototype.toDOMCont = function(){	
	for (var i=0;i<window.prior_regions.length;i++){
		this.addRegion(window.prior_regions[i].code,window.prior_regions[i]["name"]);
	}
	
	//all regions
	this.addRegion("0","* Все регионы");
	
	var sel_cont = document.createElement("DIV");
	sel_cont.className = "input-group-btn";
	sel_cont.appendChild(this.m_regSelectNode);
	this.m_node.parentNode.insertBefore(sel_cont,this.m_node);
	
	this.m_pm.setParamValue("region",this.m_regSelectNode.value);	
	
	var self = this;
	EventHandler.addEvent(this.m_regSelectNode, "change", function(e){
		self.m_pm.setParamValue("region",self.m_regSelectNode.value);	
		self.m_regSelectNode.focus();
	});
}

ClientDestinationEdit2.prototype.toDOM = function(parent){	
	ClientDestinationEdit2.superclass.toDOM.call(this,parent);
	
	var opt;
	this.m_regSelectNode = document.createElement("SELECT");
	this.m_regSelectNode.setAttribute("style","width:100px;");
	this.m_regSelectNode.setAttribute("disabled","disabled");
	this.m_regSelectNode.className = "form-control";
	
	if(!window.prior_regions){
		var self = this;
		(new Kladr_Controller(new ServConnector(HOST_NAME))).run("get_prior_region_list",{
			"async":true,
			"func":function(resp){
				window.prior_regions = [];
				var m = resp.getModelById("Kladr_Model");
				m.setActive(true);
				while(m.getNextRow()){
					window.prior_regions.push({
						"code":m.getFieldById("code").getValue(),
						"name":m.getFieldById("name").getValue()
					});
				}
				self.toDOMCont();
			}
		});							
	}
	else{
		this.toDOMCont();
	}
	/*
	for (var i=0;i<window.prior_regions.length;i++){
		opt = document.createElement("OPTION");
		opt.setAttribute("value",window.prior_regions[i].code);
		opt.appendChild(document.createTextNode(window.prior_regions[i]["name"]));
		this.m_regSelectNode.appendChild(opt);	
	}
	
	var sel_cont = document.createElement("DIV");
	sel_cont.className = "input-group-btn";
	sel_cont.appendChild(this.m_regSelectNode);
	this.m_node.parentNode.insertBefore(sel_cont,this.m_node);
	
	var self = this;
	EventHandler.addEvent(this.m_regSelectNode, "change", function(e){
		self.m_pm.setParamValue("region",self.m_regSelectNode.value);	
		self.m_regSelectNode.focus();
	});
	*/
}
