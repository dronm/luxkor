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
function PaySchedule_View(id,options){
	options = options || {};
	options.title = "График платежей";
	options.controller = Payment_Controller;
	options.methodId = "get_schedule";
	options.viewId = "ClientPaySchedule";
	options.connect = options.connect;
	options.reportControl = new Control("PaySchedule","div");
	
	PaySchedule_View.superclass.constructor.call(this,
		id,options);	
		
	this.m_waitControl = new WaitControl(id+"_wait");
	this.m_filter=null;	
	this.makeReport(true);
}
extend(PaySchedule_View,ViewReport);

PaySchedule_View.prototype.toDOM = function(parent){
	this.m_cont = new ControlContainer(this.getId()+"_panel","div",{"className":"panel"});
	this.m_cont.toDOM(parent);
	PaySchedule_View.superclass.toDOM.call(this,this.m_cont.m_node);
}
PaySchedule_View.prototype.removeDOM = function(){
	PaySchedule_View.superclass.removeDOM.call(this);
	this.m_cont.removeDOM();
}