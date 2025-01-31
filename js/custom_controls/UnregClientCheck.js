/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements 
 * @requires common/DOMHandler.js
*/
/* constructor */
function NewClientInf_View(id,options){
	options = options||{};
	options.value = options.clientName;
	options.className="new_client_ref";
	this.m_clientId = options.clientId;
	this.m_clientName = options.clientName;
	NewClientInf_View.superclass.constructor.call(this,
		id,"a",options);	
}
extend(NewClientInf_View,ControlContainer);
NewClientInf_View.prototype.toDOM = function(parent){
	NewClientInf_View.superclass.toDOM.call(this,parent);
	var self = this;
	EventHandler.addEvent(this.m_node,"click",function(){
		//новое окно с клиентом
		self.m_winObj = new WindowFormDD(
			{"title":self.m_clientName,
			"width":self.WIN_WIDTH,
			"height":self.WIN_HEIGHT,
			});
		var controller = new Client_Controller(new ServConnector(HOST_NAME));
		var view = new ClientDialog_View("ClientDialog_View",
			{"onClose":function(res){
					self.m_winObj.close();
				},
			"readController":controller,
			"readModelId":"get_object",
			"connect":controller.getServConnector(),
			"winObj":self.m_winObj
			}			
		);
		view.setReadIdValue("id",self.m_clientId);		
		view.readData();	
		self.m_winObj.open();
		view.toDOM(self.m_winObj.getContentParent());
		self.m_winObj.setFocus();		
	},true);
}
NewClientInf_View.prototype.WIN_WIDTH=600;
NewClientInf_View.prototype.WIN_HEIGHT=1200;

function UnregClientCheck(checkIntervalSec){
	this.check();
	var self = this;
	this.m_intervalObj = setInterval(function(){
		self.check();
	},((checkIntervalSec<this.CHECK_MIN_SEC)? this.CHECK_MIN_SEC:checkIntervalSec)*1000);	
}
UnregClientCheck.prototype.WIN_WIDTH=300;
UnregClientCheck.prototype.WIN_HEIGHT=100;
UnregClientCheck.prototype.CHECK_MIN_SEC=30;
UnregClientCheck.prototype.get_win_pos_top=function(){
	return getViewportHeight()-this.WIN_HEIGHT-50;
}
UnregClientCheck.prototype.get_win_pos_left=function(){
	return "0";
}

UnregClientCheck.prototype.check=function(){
	var con = new ServConnector(HOST_NAME);
	var contr = new Client_Controller(con);
	var self = this;
	contr.run("get_unreg_list",{
		"async":true,
		"func":function(resp){
			self.onGetData(resp)
		},
		"err":this.onError
	});
}
UnregClientCheck.prototype.onGetData=function(resp){
	var m = resp.getModelById("get_unreg_list");
	m.setActive(true);
	if (m.getRowCount()==0){
		//no rows
		if (this.m_content)this.m_content.removeDOM();
		if (this.m_win)this.m_win.close();
	}
	else{
		if (!this.m_win){
			var self = this;
			this.m_win = new WindowFormDD(
				{"top":this.get_win_pos_top(),
				"left":this.get_win_pos_left(),
				"onBeforeClose":function(){
					self.m_closed=true;
					return true;
				}			
				});
			this.m_win.setCaption("Новый клиент");
			this.m_win.setWidth(this.WIN_WIDTH);
			this.m_win.setHeight(this.WIN_HEIGHT);		
			//content
			this.m_content = new ControlContainer("ureg_client_check","div");
			this.m_closed = true;
		}
		else{
			this.m_content.removeDOM();
			this.m_content.clear();
			//this.m_win.close();				
		}
		while (m.getNextRow()){
			var id = m.getFieldValue("id");
			this.m_content.addElement(new NewClientInf_View("new_client_"+id,
				{"clientId":id,"clientName":m.getFieldValue("name")})
			);
		}
		//this.m_win.open();
		if (this.m_closed){
			this.m_win.open();
			this.m_closed = false;
		}		
		
		this.m_content.toDOM(this.m_win.getContentParent());			
		this.m_win.setFocus();		
	}
}
UnregClientCheck.prototype.onError=function(resp,erCode,erStr){
}