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
function DocOrderChildren(id,options){	
	DocOrderChildren.superclass.constructor.call(this,
		id,"div",options);	
}
extend(DocOrderChildren,ControlContainer);

DocOrderChildren.prototype.setDocId = function(docId){
	this.m_docId = docId;	
}

DocOrderChildren.prototype.toDOM = function(parent){
	DocOrderChildren.superclass.toDOM.call(this,parent);
	
	var self = this;
	var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
	contr.run("get_children",{
		params:{
			doc_id:this.m_docId
		},
		func:function(resp){			
			var m = resp.getModelById("get_children",true);
			self.m_cont = null;
			while (m.getNextRow()){
				if (!self.m_cont){
					self.m_cont = new ControlContainer(self.m_id+"_cont","div");	
					self.m_cont.addElement(new Control(self.m_id+"_t1","span",{value:"Неполная отгрузка."}));
					self.m_cont.addElement(new Control(self.m_id+"_t2","span",{value:"Связный документ:"}));
					self.m_children = new ControlContainer(self.m_id+"_list","ul");						
				}
				
				self.m_children.addElement(new Control(uuid(),"li",{
					value:"№"+m.getFieldValue("number"),
					className:"doc_order_rest",
					events:{
						onClick:function(){
							//открыть заявку
							alert("Open Order! "+m.getFieldValue("id"));
						}
					}
				}));
			}
			if (self.m_cont){
				self.m_cont.addElement(self.m_children);
				self.m_cont.toDOM(self.m_node);
			}
		}
	});
}
