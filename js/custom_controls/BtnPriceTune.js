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
function BtnPriceTune(options){	
	options = options||{};
	var self = this;
	var id = uuid();//"btn_price_tune";
	options.caption = "Пересчет прайсов";
	options.attrs={"title":"открыть пересчет прайсов"};
	options.onClick=function(){
		self.m_extForm = new WIN_CLASS({
			"title":"Пересчет прайсов",
			"height":"600",
			"width":"1000",
			"top":"0",
			"centerLeft":true
		});
		self.m_extForm.open();
		self.m_extCtrl=new RepPriceListTuning_View("RepPriceListTuning_View",
			{"winObj":self.m_extForm,
			"clientId":self.m_clientId,
			"clientDescr":self.m_clientDescr,
			"onClose":function(m){
				self.m_extForm.m_closeMode=m;
				self.m_extForm.close();
				delete self.m_extForm;			
			}						
			});		
		self.m_extCtrl.toDOM(self.m_extForm.getContentParent());
		self.m_extForm.setFocus();
	};
	BtnPriceTune.superclass.constructor.call(this,
		id,options);
}
extend(BtnPriceTune,Button);
