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
function DOCOrderRepesentative_View(id,options){
	options = options || {};
	//options.title = "Заявки";
	
	DOCOrderRepesentative_View.superclass.constructor.call(this,
		id,options);
	
	var self = this;
	
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
	
	var grid = new DOCOrderProductionList_View(id+"_DOCOrderProductionList_View",
		{
			"client":true,
			"products":true,
			"warehouse":true,				
			"ext_ship_num":true,
			"delivery_fact_date":true,
			"number":true,
			"client_number":false,
			
			"paid":true,
			
			"printed":true,
			
			"customer_survey_date":false,
			
			"filter":true,
			
			"submit_user":true,
			
			"className":(CONSTANT_VALS.ordersCallapsed)? "collapse":"",
			"noAutoRefresh":CONSTANT_VALS.ordersCallapsed,
			"refreshInterval":(CONSTANT_VALS.ordersCallapsed)? 0:CONSTANT_VALS.db_controls_refresh_sec*1000,				

		}
	);	
	var cont = new ControlContainer(id+"_cont_current_orders","div",{"className":"panel panel-default"});
	
	cont.addElement(grid);
	this.addElement(cont);
	

}
extend(DOCOrderRepesentative_View,ViewList);

