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
function RepProductionLoad_View(id,options){
	options = options || {};
	//options.title = "Объем заявок в производстве";
	options.controller = Report_Controller;
	options.methodId = "production_load";
	options.viewId = "ViewHTMLXSLT";
	options.connect = options.connect;
	options.reportControl = new Control(id+"_rep","div",{className:"panel panel-body"});
	/*
	options.commandPanel = new RepCommands(id+"_cmd",
		{"repView":this});
	*/
	RepProductionLoad_View.superclass.constructor.call(this,
		id,options);
	
	var period = new EditPeriodDate(id+"_period");	
	period.getControlFrom().m_editContClassName = "input-group "+get_bs_col()+"2";
	period.getControlTo().m_editContClassName = "input-group "+get_bs_col()+"2";
	this.addFilterContainer([
		{"control":period.getControlFrom(),
		"filter":{"sign":"ge","valueFieldId":"delivery_plan_date"}
		},
		{"control":period.getControlTo(),
		"filter":{"sign":"le","valueFieldId":"delivery_plan_date"}
		},
		{"control":new EditList(id+"_warehouse_id",{
			"labelCaption":"Список складов:",
			"editContClassName":"input-group "+get_bs_col()+"3",
			"editViewControl":new WarehouseEditObject(
				"warehouse_id",
				"warehouse",
				true,null,
				{"attrs":{"required":"required"}}
			)
			}),
		"filter":{"sign":"incl","valueFieldId":["warehouse_id"]}
		}
		
		/*
		{"control":new WarehouseEditObject(
			"warehouse_id",id+"_warehouse",false,null,{
				"editContClassName":"input-group "+get_bs_col()+"2"
			}),
		"filter":{"sign":"e","keyFieldIds":["warehouse_id"]}
		}
		*/		
	]);
	
	this.addCmdMakeReport();
	//this.addCmdExcel();		
	this.addCmdPrint();
}
extend(RepProductionLoad_View,PPViewReport);

RepProductionLoad_View.prototype.addExtraParams = function(struc){
	RepProductionLoad_View.superclass.addExtraParams.call(this,struc);	
	struc.templ="RepProductionLoad";
}
