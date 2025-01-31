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
function RepClientDebts_View(id,options){
	options = options || {};
	options.controller = Report_Controller;
	options.methodId = "client_debts";
	options.viewId = "ViewHTMLXSLT";
	options.connect = options.connect;
	options.reportControl = new Control(id+"_rep","div",{className:"panel panel-body"});
	/*
	options.commandPanel = new RepCommands(id+"_cmd",
		{"repView":this});
	*/
	RepClientDebts_View.superclass.constructor.call(this,
		id,options);
	
	this.addFilterContainer([
		{"control":new EditList(id+"_firm_id_list",{
			"labelCaption":"Список фирм:",
			"editContClassName":"input-group "+get_bs_col()+"3",
			"editViewControl":new FirmEditObject(
				"firm_id",
				"firm",
				true,null,
				{"attrs":{"required":"required"}}
			)
			}),
		"filter":{"sign":"any","valueFieldId":["firm_id"]}
		},
		
		{"control":new EditList(id+"_client_id_list",{
			"labelCaption":"Список клиентов:",
			"editContClassName":"input-group "+get_bs_col()+"3",
			"editViewControl":new ClientEditObject(
				"client_id",
				"client",
				true,
				{"attrs":{"required":"required"}}
			)
			}),
		"filter":{"sign":"any","valueFieldId":["client_id"]}
		}
		
		
	]);
	
	this.addCmdMakeReport();
	this.addCmdExcel();
	this.addCmdPrint();
}
extend(RepClientDebts_View,PPViewReport);

RepClientDebts_View.prototype.addExtraParams = function(struc){
	RepClientDebts_View.superclass.addExtraParams.call(this,struc);	
	struc.templ="RepClientDebts";
}
