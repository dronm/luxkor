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
function Kladr_Form(opts){
	this.m_winObj = opts.winObj;
	this.m_id = opts.id;
	this.m_onClose = opts.onClose;
}
Kladr_Form.prototype.open = function(){
	var self = this;
	this.m_extForm = new WIN_CLASS({"caption":"Адрес клиента"});
	this.m_extForm.open();
	var cont = new ControlContainer(this.m_id+"_addr_panel","div",{"className":"panel"});
	var ctrl = new Kladr_View(this.m_id+"_Kladr_View",
		{"winObj":this.m_extForm,
		"onClose":function(){
			self.m_extForm.close();
			delete self.m_extForm;
			self.m_onClose();
		},
		"winObj":this.m_extForm
		});
	cont.addElement(ctrl);	
	cont.toDOM(this.m_extForm.getContentParent());
	this.m_extForm.setFocus();		
}
