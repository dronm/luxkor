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
function DOCOrderCancelCause(id,options){	
	DOCOrderCancelCause.superclass.constructor.call(this,
		id,"div",options);	
}
extend(DOCOrderCancelCause,ControlContainer);

DOCOrderCancelCause.prototype.setDocId = function(docId){
	this.m_docId = docId;	
}

DOCOrderCancelCause.prototype.toDOM = function(parent){
	DOCOrderCancelCause.superclass.toDOM.call(this,parent);
	
	var self = this;
	var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
	contr.run("get_cancel_cause",{
		params:{
			doc_id:this.m_docId
		},
		func:function(resp){			
			var m = resp.getModelById("get_cancel_cause",true);
			self.m_cont = null;
			if (m.getNextRow()){
				self.m_cont = new ControlContainer(self.m_id+"_cont","div",{"className":"doc_order_cancel_cause"});	
				self.m_cont.addElement(new Control(self.m_id+"_t1","span",{
						value:"Причина отмены: "+m.getFieldValue("cause")
					})
				);
				self.m_cont.toDOM(self.m_node);
			}
		}
	});
}
