/** Copyright (c) 2012 
 *	Andrey Mikhalevich, Katren ltd.
 */

/**	
 *	Description
 */

/** Requirements
 * @requires common/functions.js
 */

function DelivUnassignedOrderGridRow(id,options){
	options = options || {};	
console.log("DelivUnassignedOrderGridRow")	
	var self = this;
	options.events = {
		"dblclick":function(e){
			e = EventHandler.fixMouseEvent(e);
			var tr = DOMHandler.getParentByTagName(e.target,"TR");
			if(tr){
				var key_values = json2obj(tr.getAttribute("key_values"));
				self.m_grid.openOrder(key_values.id);
			}				
		}
	}
	
	DelivUnassignedOrderGridRow.superclass.constructor.call(this,id,options);

}
extend(DelivUnassignedOrderGridRow,GridRow);

DelivUnassignedOrderGridRow.prototype.toDOM = function(parent){
	DelivUnassignedOrderGridRow.superclass.toDOM.call(this,parent);
	//draggable
	var self = this;
	this.m_dragObject = new DragObject(this.m_node);
	this.m_dragObject.getFieldValue = function(fieldId){
		var res = DOMHandler.getElementsByAttr(fieldId,self.getNode(),"field_id",true,"td");
		return (res.length&&res[0].childNodes.length)? res[0].childNodes[0].nodeValue:null;
	}
	this.m_dragObject.onDragStart = function(offset){				
		DragObject.prototype.onDragStart.call(this,offset);				
		DOMHandler.addClass(this.element,"dragging_order");
	}
	this.m_dragObject.onDragFail = function(dropObject){
		DragObject.prototype.onDragFail.call(this);				
		DOMHandler.removeClass(this.element,"dragging_order");
		if (dropObject){
			DOMHandler.removeClass(dropObject.element,"uponMe");
		}
	}	
}

/* constructor */
function DelivUnassignedOrderGridDb(id,options){
	options = options || {};
	
	//this.m_filterAllOrders = options.filterAllOrders;
	
	DelivUnassignedOrderGridDb.superclass.constructor.call(this,id,options);		
}
extend(DelivUnassignedOrderGridDb,GridDbDOC);

DelivUnassignedOrderGridDb.prototype.filterToDOM = function(parent){
}
DelivUnassignedOrderGridDb.prototype.getGridRowClass = function(row,model){
	return DelivUnassignedOrderGridRow;
}

/*
DelivUnassignedOrderGridDb.prototype.onRefresh = function(){
	var pm = this.getController().getPublicMethodById(this.getReadMethodId());
	pm.setParamValue("all_orders",(this.m_filterAllOrders.getValue()=="true")? "1":"0");
	
	DelivUnassignedOrderGridDb.superclass.onRefresh.call(this);
}
*/

DelivUnassignedOrderGridDb.prototype.openOrder = function(docId){
	if (this.m_map){
		DOMHandler.addClass(this.m_map.getNode(),"hidden");
	}
	
	this.setGlobalWait(true);
	
	var con = new ServConnector(HOST_NAME);
	var contr = new DOCOrder_Controller(con);
	
	var self = this;
	if (!this.m_orderView)this.m_orderView = {};
	if (!this.m_orderWin)this.m_orderWin = {};
	
	if (this.m_orderView[docId]){
		this.getErrorControl().setValue("Заявка уже редактируется!");
		return;
	}
	
	this.m_orderView[docId] = new DOCOrderDialog_View(
		this.getId()+"EditView:"+docId,
		{"onClose":function(res){
			
			self.m_orderView[docId].removeDOM();
			delete self.m_orderView[docId];
			
			//external window
			self.m_orderWin[docId].m_closeMode = res;
			self.m_orderWin[docId].close();
			delete self.m_orderWin[docId];
			
			if (self.m_map){
				exists = false;
				for(var w in self.m_orderWin){
					if (self.m_orderWin[w]){
						exists = true;
						break;
					}
				}
				if (!exists) DOMHandler.removeClass(self.m_map.getNode(),"hidden");
			}
		},
		"readController":contr,
		"readModelId":"DOCOrderDialog_Model",
		"connect":con,
		"errorControl":this.getErrorControl(),
		"winObj":this.m_winObj
		}
	);

	var pm = contr.getPublicMethodById("get_object");
	this.m_orderView[docId].setReadIdValue("id",docId);		
	
	//external window
	this.m_orderWin[docId] = new WIN_CLASS({
		"view":this.m_orderView[docId],
		"title":this.m_orderView[docId].getFormCaption()+":Редактирование",
		"width":this.m_orderView[docId].getFormWidth(),
		"height":this.m_orderView[docId].getFormHeight()		
	});
	this.m_orderWin[docId].open();
	
	this.m_orderView[docId].readData(true);	
	this.m_orderView[docId].m_beforeOpen(contr,false,false);	
	this.m_orderView[docId].toDOM(this.m_orderWin[docId].getContentParent());
	
	this.setGlobalWait(false);	
	
}


