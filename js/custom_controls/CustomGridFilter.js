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
function CustomGridFilter(id,options){	
	options=options||{};
	options.tagName="div";
	options.noUnsetControl=false;
	CustomGridFilter.superclass.constructor.call(this,
		id,options);
	var self = this;
	this.addCommandControl(new Button("filter_close",{
		"className":"viewBtn",
		"caption":"Закрыть",
		"title":"закрыть",
		"onClick":function(){
			if (self.m_win){
				self.removeDOM();
				self.m_win.close();
				delete self.m_win;
			}
		}
	}));
		
}
extend(CustomGridFilter,GridFilter);

CustomGridFilter.prototype.WIN_WIDTH=500;
CustomGridFilter.prototype.WIN_HEIGHT=500;

CustomGridFilter.prototype.toDOM = function(parent){
}
CustomGridFilter.prototype.removeDOM = function(){
}
CustomGridFilter.prototype.open = function(){
	this.m_win = new WindowFormDD({"top":"0","centerLeft":true});
	this.m_win.setCaption("Фильтр");
	this.m_win.setWidth(this.WIN_WIDTH);
	this.m_win.setHeight(this.WIN_HEIGHT);		
	this.m_win.open();
	var cont = new ControlContainer("order_filter","div",{"className":"panel"})	
	CustomGridFilter.superclass.toDOM.call(this,cont.m_node);
	cont.toDOM(this.m_win.getContentParent());
	this.m_win.setFocus();		
}
CustomGridFilter.prototype.unset = function(){
	this.m_unsetControl.m_onClick();
}