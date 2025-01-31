/* Copyright (c) 2015
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
*/

/* constructor */
function BtnOrderDivis(options){	
	var self = this;
	var id = uuid();
	options.caption = "Разделить";
	options.attrs={"title":"разделить заявку"};
	options.onClick=function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			self.m_extCtrl=new DOCOrderDivisDialog_View("DOCOrderDivisDialog_View",
				{"winObj":self.m_extForm,
				"readController":new DOCOrder_Controller(new ServConnector(HOST_NAME)),
				"onClose":function(){
					//очистка кэша
					if (options.grid.m_prodDescr
					&&options.grid.m_prodDescr[keys["id"]]){
						options.grid.m_prodDescr[keys["id"]]=undefined;
					}
					self.m_extForm.close();
					delete self.m_extForm;
				}
				});
			
			self.m_extForm = new WIN_CLASS(
				{"title":"Деление заявки",
				"width":"900",
				"height":"500",				
				"onBeforeClose":function(){
					var r= true;
					if (self.m_extForm.m_closeMode==0
					&&self.m_extCtrl.onCancel){
						self.m_extCtrl.setOnClose(null);
						r = self.m_extCtrl.onCancel.call(self.m_extCtrl);
					}
					options.grid.onRefresh();
					return r;				
				}
				
				});
			self.m_extForm.open();				
			for (var key_id in keys){
				self.m_extCtrl.setReadIdValue(key_id,keys[key_id]);		
			}							
			self.m_extCtrl.readData(true,true);
			//self.m_extCtrl.m_beforeOpen(new DOCOrder_Controller(new ServConnector(HOST_NAME)),false);			
			self.m_extCtrl.toDOM(self.m_extForm.getContentParent());
			self.m_extForm.setFocus();
		}
	};
	BtnOrderDivis.superclass.constructor.call(this,
		id,options);
}
extend(BtnOrderDivis,Button);
