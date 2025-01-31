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
function RepVehicleStop_View(id,options){
	options = options || {};
	//options.title = "Объем заявок в производстве";
	options.controller = Report_Controller;
	options.methodId = "vehicle_stops";
	options.viewId = "ViewHTMLXSLT";
	options.connect = options.connect;
	options.reportControl = new Control(id+"_rep","div",{className:"panel panel-body"});
	/*
	options.commandPanel = new RepCommands(id+"_cmd",
		{"repView":this});
	*/
	RepVehicleStop_View.superclass.constructor.call(this,
		id,options);
	
	var period = new EditPeriodDateTime(id+"_period");	
	
	period.getControlFrom().m_editContClassName = "input-group "+get_bs_col()+"2";
	period.getControlTo().m_editContClassName = "input-group "+get_bs_col()+"2";
	
	var d1 = new Date();
	d1.setHours(0,0,0,0);
	var d2 = new Date();
	d2.setHours(23,59,59,0);
	
	period.getControlFrom().setValue(DateHandler.dateToStr(d1,"dd/mm/y hh:mmin:ss"));
	period.getControlTo().setValue(DateHandler.dateToStr(d2,"dd/mm/y hh:mmin:ss"));
	
	this.addFilterContainer([
		{"control":period.getControlFrom(),
		"filter":{"sign":"ge","valueFieldId":"date_time"}
		},
		{"control":period.getControlTo(),
		"filter":{"sign":"le","valueFieldId":"date_time"}
		},
		/*
		{"control":new VehicleEditObject({
			"fieldId":"vh_id",
			"controlId":id+"_vehicle",
			"inLine":false,
			"options":{"editContClassName":"input-group "+get_bs_col()+"2"}			
			}),
		"filter":{"sign":"e","keyFieldIds":["vh_id"]}
		},
		*/
		{"control":new EditList(id+"_vehicle_list",{
			"labelCaption":"Список ТС:",
			"editContClassName":"input-group "+get_bs_col()+"3",
			"editViewControl":new VehicleEditObject(
				{"fieldId":"vh_id_list",
				"controlId":"vehicle_list",
				"inLine":true,
				"id":id+"_edit",
				"attrs":{"required":"required"}}
			)
			}),
		"filter":{"sign":"incl","valueFieldId":["vh_id_list"]}
		},
		
		{"control":new EditTime(id+"_duration",{
			"editContClassName":"input-group "+get_bs_col()+"2",
			"labelCaption":"Длительность стоянок:",
			"editMask":"$d$d:$d$d",
			"attrs":{"maxlength":"5"},
			"value":"00:10"
			}),
		"filter":{"sign":"e","valueFieldId":"duration"}
		}		
	]);
	
	this.addCmdMakeReport();
	//this.addCmdExcel();		
}
extend(RepVehicleStop_View,PPViewReport);

RepVehicleStop_View.prototype.addExtraParams = function(struc){
	RepVehicleStop_View.superclass.addExtraParams.call(this,struc);	
	struc.templ="RepVehicleStop";
}
