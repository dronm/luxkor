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
function Delivery_View(id,options){
	options = options || {};
	//options.title = "Доставки";
	Delivery_View.superclass.constructor.call(this,
		id,options);
	
	var cont = new ControlContainer("deliv_filter","div",{"className":"panelf"});	
	//Period filter
	this.m_filter = new PeriodFilter("delivery_filter",{
		"period":"day",
		"valueFieldId":"delivery_plan_date"});
	cont.addElement(this.m_filter);
	this.addElement(cont);
	
	var self = this;
	
	if (SERV_VARS.ROLE_ID!="client"){
		//Распределение
		var cont = new ControlContainer("deliv_ass","div",{"className":"panel panel-default"});	
		this.m_assOrderList = new DelivAssignedOrderList_View("DelivAssignedOrderList",
				{"filter":this.m_filter});
		cont.addElement(this.m_assOrderList);
		this.addElement(cont);
		
		//Нераспределенные
		var cont = new ControlContainer("deliv_unass","div",{"className":"panel panel-default"});	
		
		this.m_unassOrderList = new DelivUnassignedOrderList_View("DelivUnassignedOrderList",
			{"filter":this.m_filter,
			"filterAllOrders":this.m_filterAllOrders
			});	
		cont.addElement(this.m_unassOrderList);
				
		this.addElement(cont);
		
		var filter_refr_func = function(){
			self.m_assOrderList.m_grid.onRefresh();
			self.m_unassOrderList.m_grid.onRefresh();
		};
		this.m_filter.setOnRefresh(function(){
			self.m_assOrderList.m_grid.onRefresh();
			self.m_unassOrderList.m_grid.onRefresh();
		});
		
		this.m_assOrderList.m_grid.m_unassGrid = this.m_unassOrderList.m_grid;		
		this.addMap();
		this.m_assOrderList.m_grid.m_map = this.m_map;
		this.m_unassOrderList.m_grid.m_map = this.m_map;
		
		//custom refresh		
		this.m_filter.setClickContext(this);
		this.m_filter.setOnRefresh(filter_refr_func);
		
	}
	else{
		//заявки в доставке для клиента
		var cont = new ControlContainer("deliv_ass","div",{"className":"panel panel-default"});	
		this.m_assOrderList = new DelivAssignedOrderForClient_View("DelivAssignedOrderList",
				{"filter":this.m_filter});
		cont.addElement(this.m_assOrderList);
		this.addElement(cont);				
	}	
}
extend(Delivery_View,ViewList);

Delivery_View.prototype.addMap = function(){
	//Карта
	this.m_mapCont = new ControlContainer("deliv_map","div",{"className":"panel panel-default"});	
	this.m_map = new DeliveryMap_View("map_cont",
		{"filter":this.m_filter});
	this.m_mapCont.addElement(this.m_map);
	this.addElement(this.m_mapCont);		
}

Delivery_View.prototype.toDOM = function(parent){
	Delivery_View.superclass.toDOM.call(this,parent);
	
	if (SERV_VARS.ROLE_ID=="client"){
		this.m_assOrderList.m_grid.m_deliveryView = this;
		this.m_assOrderList.m_grid.onRefresh();
	}
}
