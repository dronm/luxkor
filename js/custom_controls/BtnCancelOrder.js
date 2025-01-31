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
function BtnCancelOrder(options){	
	var id = "btn_order_cancel";
	options.caption = "Отменить";
	options.attrs={"title":"отменить заявку"};
	var self = this;
	options.onClick = function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			self.setEnabled(false);
			WindowQuestion.show({
			"text":"Отменить заявку?",
			"callBack":function(res){
				self.doCancel(res);
			}
			});			
		}
	};
	this.m_grid = options.grid;
	BtnCancelOrder.superclass.constructor.call(this,
		id,options);
}
extend(BtnCancelOrder,Button);

BtnCancelOrder.prototype.doCancel = function(res){
	if (res==WindowQuestion.RES_YES){
		//запросим причину отмены
		this.m_extForm = new WindowFormModalDD({"caption":"Отмена заявки"});
		this.m_extCtrl = new DOCOrderCancel_View("DOCOrderCancel",
			{"doc_id":keys["id"],"winObj":this.m_extForm,
			"onClose":function(res){
				if (res==1){
					//OK
					this.m_grid.onRefresh();
				}
				this.m_extForm.close();
				delete this.m_extForm;					
			},
			"winObj":this.m_extForm
			});
		this.m_extForm.open();
		this.m_extCtrl.toDOM(this.m_extForm.getContentParent());
		this.m_extForm.setFocus();
	}
	this.setEnabled(true);
}

