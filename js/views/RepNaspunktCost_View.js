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
function RepNaspunktCost_View(id,options){
	options = options || {};
	
	options.controller = Report_Controller;
	options.methodId = "naspunkt_cost";
	options.viewId = "ViewHTMLXSLT";
	options.connect = options.connect;
	options.reportControl = new Control(id+"_rep","div",{className:"panel panel-body"});
	/*
	options.commandPanel = new RepCommands(id+"_cmd",
		{"repView":this});
	*/
	RepNaspunktCost_View.superclass.constructor.call(this,
		id,options);
	
	this.m_cityCtrl = new ProductionCityEditObject(
			"city_id",id+"_city",false,null,{
				"editContClassName":"input-group "+get_bs_col()+"2"
	});
	
	this.addFilterContainer([
		{"control":this.m_cityCtrl,
		"filter":{"sign":"e","keyFieldIds":["city_id"]}
		}		
	]);
	
	this.addCmdMakeReport();
	//this.addCmdExcel();		
}
extend(RepNaspunktCost_View,PPViewReport);

RepNaspunktCost_View.prototype.addExtraParams = function(struc){
	RepNaspunktCost_View.superclass.addExtraParams.call(this,struc);	
	struc.templ="RepNaspunktCost";
}

RepNaspunktCost_View.prototype.makeReport = function(async){	
	if (this.m_cityCtrl.getValue()=="undefined"){
		this.onError(null,"","Не выбран город!");
		return;
	}

	RepNaspunktCost_View.superclass.makeReport.call(this,async);
}
