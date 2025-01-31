/* Copyright (c) 2016 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
	
	*** ДЛЯ Представителя ***
*/
/** Requirements
 * @requires 
 * @requires core/extend.js  
*/

/* constructor
@param string id
@param object options{

}
*/
function DOCOrderProductionList_View(id,options){
	options = options || {};	
	
	options.name = "DOCOrderProductionList_View";
	options.readMethodId = "get_current_for_representative_list";
	options.readModelId = "DOCOrderCurrentForProductionList_Model";
	
	options.title = "Заявки в производстве";
	
	options.fast_filter = true;
	options.client = true;
	options.products = true;
	options.warehouse = true;
	options.ext_ship_num = true;
	options.delivery_fact_date = true;
	options.number = true;
	options.client_number = true;
	
	options.paid = true;
	
	options.printed = true;
	
	options.customer_survey_date = false;
	
	options.filter = true;
	options.state = true;
	options.submit_user = true;
	
	options.className = "";
	options.noAutoRefresh = CONSTANT_VALS.ordersCallapsed;
	options.refreshInterval = (CONSTANT_VALS.ordersCallapsed)? 0:CONSTANT_VALS.db_controls_refresh_sec*1000;
	
	options.pagination = new GridPagination(id+"_cont_all_orders_grid_pag",{
			"countPerPage":CONSTANT_VALS.grid_rows_per_page_count,
			"showPageCount":10
	});
	
	var cmd_opts = {"cmdColumnManager":true};
	cmd_opts.publicMethodId = options.readMethodId;
	options.commands = new GridCommands(id+"_grid_cmd",cmd_opts);	
	
	DOCOrderProductionList_View.superclass.constructor.call(this,id,options);
	
	var popup_menu = new PopUpMenu();
	
	//Печать
	btn = new BtnPrint({"grid":this.m_grid});
	options.commands.addElement(btn);
	popup_menu.addButton(btn);		

	//Печать всех
	btn = new BtnPrintAll({"grid":this.m_grid});
	options.commands.addElement(btn);
	popup_menu.addButton(btn);		
	
	//check
	btn = new BtnPrintCheck({"grid":this.m_grid});
	options.commands.addElement(btn);
	popup_menu.addButton(btn);
	
	popup_menu.addSeparator();

	//Готова
	btn = new BtnSetReady({"grid":this.m_grid});
	options.commands.addElement(btn);
	popup_menu.addButton(btn);		

	//отгрузка
	btn = new BtnSetShipped({"grid":this.m_grid});
	options.commands.addElement(btn);
	popup_menu.addButton(btn);		
	
	popup_menu.addSeparator();
	
	//Отменить посл. статус
	btn = new BtnCancelLastState({"grid":this.m_grid});
	options.commands.addElement(btn);
	popup_menu.addButton(btn);		
	
	popup_menu.addSeparator();
	options.commands.commandsToPopUp(popup_menu);
	
	this.m_grid.setPopUpMenu(popup_menu);
		
}
extend(DOCOrderProductionList_View,DOCOrderBaseList_View);

/* Constants */


/* private members */

/* protected*/


/* public methods */

