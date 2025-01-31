/* Copyright (c) 2014
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
*/

/* constructor */
function BtnAppendOrder(options){	
	var id = uuid();
	options.caption = "Присоединить";
	options.attrs={"title":"присоединить к данной заявке другие"};
	
	this.m_grid = options.grid;
	
	var self = this;
	options.onClick = function(){
		var keys = self.m_grid.getSelectedNodeKeys();
		if (keys && keys.id){
			self.selectAppend(keys.id);
		}
	};
	
	BtnAppendOrder.superclass.constructor.call(this,id,options);
}
extend(BtnAppendOrder,Button);

BtnAppendOrder.prototype.selectAppend = function(docId){
	this.m_docId = docId;

//console.log("docId="+docId);
	var self = this;
	
	this.m_extCtrl=new DOCOrderAppend_View("DOCOrderAppend_View",
		{"winObj":this.m_extForm,
		"onClose":function(res,idList){
			self.m_extForm.close();
			delete self.m_extForm;
			if (res && idList.length){
				self.append(self.m_docId,idList);
			}
		},
		"doc_id":docId
		});
	
	this.m_extForm = new WindowFormModalBS(
		{"title":"Объединение заявок",
		"width":this.m_extCtrl.getFormWidth(),
		"height":this.m_extCtrl.getFormHeight(),
		"onBeforeClose":function(){
			var r= true;
			if (self.m_extForm.m_closeMode==0
			&& self.m_extCtrl.onCancel){
				self.m_extCtrl.setOnClose(null);
				r = self.m_extCtrl.onCancel.call(self.m_extCtrl);
			}
			return r;				
		}
		});
	this.m_extForm.open();				
	this.m_extCtrl.toDOM(this.m_extForm.getContentParent());
	this.m_extForm.setFocus();
	
}

BtnAppendOrder.prototype.append = function(targetDocId,sourceDocList){
	//alert("APPEND! to "+targetDocId+" list="+sourceDocList);
	var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
	var self = this;
	contr.run("append",{
		"params":{
			"target_doc_id":targetDocId,
			"source_doc_id_list":sourceDocList
		},
		"err":function(resp,errCode,errStr){
			self.m_grid.getErrorControl().setValue(errStr);
		},
		"func":function(resp){
			window.showTempNote("Присоединение выполнено.", function(){
					self.m_grid.onRefresh();
				}, ERR_MSG_WAIT_MS);								
		}
	});
	
}
