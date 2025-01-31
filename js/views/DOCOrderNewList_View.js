/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function DOCOrderNewList_View(id,options){
	options = options || {};
	options.title = "Новые заявки";
	options.readModelId = "DOCOrderNewList_Model";
	options.readMethodId = "get_new_list";
	
	options.state = true;
	
	options.name = "DOCOrderNewList_View";
	options.commands = new GridCommands(id+"_grid_cmd",{
		"noPrint":true,"noInsert":true,"cmdColumnManager":true
		});	
	DOCOrderNewList_View.superclass.constructor.call(this,
		id,options);
		
	if (SERV_VARS.ROLE_ID=="sales_manager"
	|| SERV_VARS.ROLE_ID=="admin"
	|| SERV_VARS.ROLE_ID=="representative"
	){
		var btn;
		
		var popup_menu = new PopUpMenu();
		
		//doc append
		btn = new BtnAppendOrder({"grid":this.m_grid});
		options.commands.addElement(btn);
		popup_menu.addButton(btn);
		
		//doc cancel state
		btn = new BtnCancelLastState({"grid":this.m_grid});
		//this.m_customCommands.addElement(btn);
		options.commands.addElement(btn);
		popup_menu.addButton(btn);
		
		//to production
		btn = new BtnPassToProduction({"grid":this.m_grid});
		options.commands.addElement(btn);
		popup_menu.addButton(btn);
		
		//Закрыть
		btn = new BtnSetClosed({"grid":this.m_grid});
		//this.m_customCommands.addElement(btn);
		options.commands.addElement(btn);
		popup_menu.addButton(btn);		
		
		popup_menu.addSeparator();
		options.commands.commandsToPopUp(popup_menu);
		
		this.m_grid.setPopUpMenu(popup_menu);
	}
	
	this.m_gridOnGetData = this.m_grid.onGetData;
	
	var self = this;
	this.m_grid.onGetData = function(resp){
		self.m_gridOnGetData.call(self.m_grid,resp);
		
		var m = resp.getModelById("DOCOrderNewList_Model",true);
		
		var node;
		if (!self.m_cntCtrl){
			self.m_cntCtrl = new Control("MainView_DOCOrderNewList_View_cnt","mark",{"className":"badge"});
			self.m_cntCtrl.toDOM(nd("MainView_DOCOrderNewList_View_title"));						
			self.m_prevCnt = m.getRowCount();
		}
		var cnt = m.getRowCount();
		self.m_cntCtrl.setValue(cnt);
		
		if (cnt!=self.m_prevCnt){
		
			self.m_prevCnt = cnt;
			DOMHandler.addClass(self.m_cntCtrl.getNode(),"flashit")
			
			setTimeout(function(){
				DOMHandler.removeClass(self.m_cntCtrl.getNode(),"flashit");
			}, 5000);			
		}		
	}
	
}
extend(DOCOrderNewList_View,DOCOrderBaseList_View);

DOCOrderNewList_View.prototype.m_cntCtrl;
DOCOrderNewList_View.prototype.m_prevCnt;
