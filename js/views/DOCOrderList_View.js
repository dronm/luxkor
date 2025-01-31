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
function DOCOrderList_View(id,options){
	options = options || {};
	//options.title = "Заявки";
	
	DOCOrderList_View.superclass.constructor.call(this,
		id,options);
	
	var self = this;
	this.m_evToggleNewOrders = function(){
		self.toggleGridView(self.m_ctrlViewNewOrders,false);
	};
	this.m_evToggleOrders = function(){
		self.toggleGridView(self.m_ctrlViewOrders,true);
	};
	
	var cont = new ControlContainer("Orders_cmd","div",{"className":"panel_cmd"});
	
	//date&&time
	cont.addElement(new CurrentDateTime("current_date",{
		"sync":true,
		"className":"text-right text-info"}));
	
	this.addElement(cont);
	
	//Завод
	if (SERV_VARS.ROLE_ID=="production"){
		this.addElement(new ControlContainer(id+"_warehouse","span",{"value":SERV_VARS.WAREHOUSE_DESCR,
		className:"text-right text-info"}));
	}
	
	//new DOCOrders
	if (SERV_VARS.ROLE_ID=="sales_manager"
	||SERV_VARS.ROLE_ID=="boss"
	||SERV_VARS.ROLE_ID=="admin"
	||SERV_VARS.ROLE_ID=="representative"
	){
		var cont = new ControlContainer(id+"_cont_new_orders","div",{
			"className":"panel panel-default"
			});
		
		//сами заявки
		this.m_ctrlViewNewOrders = new DOCOrderNewList_View(id+"_DOCOrderNewList_View",
			{"client":(SERV_VARS.ROLE_ID!="client"),
			"className":(CONSTANT_VALS.newOrdersCallapsed)? "collapse":"",
			"number":true,
			"noAutoRefresh":false,
			"refreshInterval":CONSTANT_VALS.db_controls_refresh_sec*1000,
				//(CONSTANT_VALS.newOrdersCallapsed)? 0:CONSTANT_VALS.db_controls_refresh_sec*1000,
			"warehouse":true,
			"total":true
			}
		);		
		cont.addElement(this.m_ctrlViewNewOrders);
		
		this.addElement(cont);
	}
	
	//current DOCOrders
	if (SERV_VARS.ROLE_ID=="client"
	||SERV_VARS.ROLE_ID=="sales_manager"
	||SERV_VARS.ROLE_ID=="boss"
	||SERV_VARS.ROLE_ID=="admin"
	||SERV_VARS.ROLE_ID=="production"
	||SERV_VARS.ROLE_ID=="marketing"
	||SERV_VARS.ROLE_ID=="representative"
	){
		this.m_ctrlViewOrders = new DOCOrderCurrentList_View(id+"_DOCOrderCurrentList_View",
			{
				"client":(SERV_VARS.ROLE_ID!="client"),
				"products":true,
				"warehouse":true,				
				"ext_ship_num":true,
				"delivery_fact_date":true,
				"number":(SERV_VARS.ROLE_ID!="client"),
				"client_number":(SERV_VARS.ROLE_ID=="client"),
				
				"paid":true,
				
				"printed":(SERV_VARS.ROLE_ID!="client"),
				
				"customer_survey_date":
				(SERV_VARS.ROLE_ID=="boss"
				||SERV_VARS.ROLE_ID=="admin"),
				
				"filter":true,
				
				"submit_user":(
					SERV_VARS.ROLE_ID=="sales_manager"
					||SERV_VARS.ROLE_ID=="boss"
					||SERV_VARS.ROLE_ID=="admin"
					||SERV_VARS.ROLE_ID=="production"
					||SERV_VARS.ROLE_ID=="representative"
				),
				
				"className":(CONSTANT_VALS.ordersCallapsed)? "collapse":"",
				"noAutoRefresh":CONSTANT_VALS.ordersCallapsed,
				"refreshInterval":(CONSTANT_VALS.ordersCallapsed)? 0:CONSTANT_VALS.db_controls_refresh_sec*1000,				

			}
		);	
		var cont = new ControlContainer(id+"_cont_current_orders","div",{"className":"panel panel-default"});
		
		if (this.m_ctrlViewNewOrders){
			this.m_ctrlViewNewOrders.m_grid.m_currentGrid = this.m_ctrlViewOrders.m_grid;
		}
		
		cont.addElement(this.m_ctrlViewOrders);
		this.addElement(cont);
	}
	
	/*
	//closed DOCOrders
	if (SERV_VARS.ROLE_ID=="client"
	||SERV_VARS.ROLE_ID=="sales_manager"
	||SERV_VARS.ROLE_ID=="marketing"
	||SERV_VARS.ROLE_ID=="boss"
	||SERV_VARS.ROLE_ID=="admin"
	){
		this.addElement(new ButtonToggle(uuid(),{
			"caption":"Архив заявок",
			"dataTarget":id+"_cont_closed_orders",
			"attrs":{								
				"title":"показать/скрыть архивные заявки"
				}		
		}));
		
		var cont = new ControlContainer(id+"_cont_closed_orders","div",{"className":"panel panel-default collapse"});
		var view = new DOCOrderClosedList_View(id+"_DOCOrderClosedList_View",
			{"client":(SERV_VARS.ROLE_ID!="client"),
			"warehouse":true,
			"ext_ship_num":true,
			"delivery_fact_date":true,
			
			"client_number":(SERV_VARS.ROLE_ID=="client"),
			
			"printed":(SERV_VARS.ROLE_ID!="client"),
			
			"customer_survey_date":
			(SERV_VARS.ROLE_ID=="boss"
			||SERV_VARS.ROLE_ID=="admin"),			
			
			"pagination":new GridPagination(id+"_cont_closed_orders_grid_pag",{
				"countPerPage":CONSTANT_VALS.grid_rows_per_page_count}
				),
			"filter":true,
			
			"submit_user":(
				SERV_VARS.ROLE_ID=="sales_manager"
				||SERV_VARS.ROLE_ID=="boss"
				||SERV_VARS.ROLE_ID=="admin"
				||SERV_VARS.ROLE_ID=="production"
			)
			
			}			
		);
		cont.addElement(view);
		this.addElement(cont);
	}
	*/
}
extend(DOCOrderList_View,ViewList);

DOCOrderList_View.prototype.toDOM = function(parent){
	DOCOrderList_View.superclass.toDOM.call(this,parent);
	
	if (SERV_VARS.ROLE_ID!="client" && SERV_VARS.ROLE_ID!="production"){
		EventHandler.addEvent(nd("MainView_DOCOrderNewList_View_title"), "click",this.m_evToggleNewOrders);
	
		EventHandler.addEvent(nd("MainView_DOCOrderCurrentList_View_title"), "click",this.m_evToggleOrders);
	}
}

DOCOrderList_View.prototype.removeDOM = function(){
	if (SERV_VARS.ROLE_ID!="client" && SERV_VARS.ROLE_ID!="production"){
		EventHandler.removeEvent(nd("MainView_DOCOrderNewList_View_title"), "click",this.m_evToggleNewOrders);
		EventHandler.removeEvent(nd("MainView_DOCOrderCurrentList_View_title"), "click",this.m_evToggleOrders);
	}
	
	DOCOrderList_View.superclass.removeDOM.call(this);		
}

DOCOrderList_View.prototype.toggleGridView = function(gridView,toggleAutoRefresh){
	var callapsed = DOMHandler.hasClass(gridView.m_node,"collapse");
	if (callapsed){
		DOMHandler.removeClass(gridView.m_node,"collapse");
		if (toggleAutoRefresh){
			gridView.m_grid.setRefreshInterval(CONSTANT_VALS.db_controls_refresh_sec*1000);
			gridView.m_grid.onRefresh();
		}
	}
	else{
		if (toggleAutoRefresh){
			gridView.m_grid.setRefreshInterval(0);
		}
		DOMHandler.addClass(gridView.m_node,"collapse");
	}
	if (gridView.getId()=="MainView_DOCOrderCurrentList_View"){
		CONSTANT_VALS.ordersCallapsed = !callapsed;
	}
	else{
		CONSTANT_VALS.newOrdersCallapsed = !callapsed;
	}
}

