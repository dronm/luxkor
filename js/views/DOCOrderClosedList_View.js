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
function DOCOrderClosedList_View(id,options){
	options = options || {};
	options.title = "Архив заявок";
	
	//options.className = "panel-body collapse";
	options.refreshInterval = 0;
	options.number = true;
	options.products = true;
	options.readModelId = "DOCOrderClosedList_Model";
	options.readMethodId = "get_closed_list";
	options.commands = new GridCommands(id+"_grid_cmd",{
		"noInsert":true,
		"noDelete":true,
		"noCopy":false
	});
		
	DOCOrderClosedList_View.superclass.constructor.call(this,
		id,options);
		
	var btn;
	
	var popup_menu = new PopUpMenu();	
	
	//опрос
	if (SERV_VARS.ROLE_ID=="marketing"||SERV_VARS.ROLE_ID=="admin"){
		btn = new BtnCustomSurvey({"grid":this.m_grid});
		//this.m_customCommands.addElement(btn);
		options.commands.addElement(btn);
		popup_menu.addButton(btn);
	}
	
	//Счет
	btn = new BtnPrintOrder({"grid":this.m_grid});
	//this.m_customCommands.addElement(btn);
	options.commands.addElement(btn);
	popup_menu.addButton(btn);
	
	//Паспорт
	/*
	btn = new BtnPrintPassport({"grid":this.m_grid});
	this.m_customCommands.addElement(btn);
	popup_menu.addButton(btn);
	*/

	//Торг12
	btn = new BtnPrintTorg12({"grid":this.m_grid});
	//this.m_customCommands.addElement(btn);
	options.commands.addElement(btn);
	popup_menu.addButton(btn);

	//Счф
	btn = new BtnPrintInvoice({"grid":this.m_grid});
	//this.m_customCommands.addElement(btn);
	options.commands.addElement(btn);
	popup_menu.addButton(btn);

	//УПД
	btn = new BtnPrintUPD({"grid":this.m_grid});
	//this.m_customCommands.addElement(btn);
	options.commands.addElement(btn);
	popup_menu.addButton(btn);

	//ТТН
	btn = new BtnPrintTTN({"grid":this.m_grid});
	//this.m_customCommands.addElement(btn);
	options.commands.addElement(btn);
	popup_menu.addButton(btn);

	//ТТН+УПД
	btn = new BtnPrintShipDocs({"grid":this.m_grid});
	//this.m_customCommands.addElement(btn);
	options.commands.addElement(btn);
	popup_menu.addButton(btn);
	
	popup_menu.addSeparator();
	options.commands.commandsToPopUp(popup_menu);
	
	this.m_grid.setPopUpMenu(popup_menu);
}
extend(DOCOrderClosedList_View,DOCOrderBaseList_View);
