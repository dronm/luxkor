/* Copyright (c) 2015 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/View.js
*/

/* constructor */
function TrackerInline_View(id,options){
	options = options || {};
	TrackerInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model_id = "TrackerList_Model";
		
	this.addDataControl(
		new EditString(id+"_id",{"name":"id",
		"attrs":{"size":"10","maxlength":"15"}}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	
	this.addDataControl(
		new TrackServerEdit({
			"fieldId":"tracker_server_id",
			"inLine":false,
			"controlId":id+"_tracker_server"
		}),
		{"modelId":model_id,
		"valueFieldId":"tracker_server_descr",
		"keyFieldIds":null},
		{"valueFieldId":"tracker_server_id","keyFieldIds":null}
	);
	
	this.addDataControl(
		new EditCellPhone(id+"_sim_number",
		{"attrs":{}
		}),
		{"modelId":model_id,
		"valueFieldId":"sim_number",
		"keyFieldIds":null},
		{"valueFieldId":"sim_number","keyFieldIds":null}
	);
	this.addDataControl(
		new EditString(id+"_sim_id",
		{"attrs":{
				"maxlength":"36",
				"size":20
				}
		}),
		{"modelId":model_id,
		"valueFieldId":"sim_id",
		"keyFieldIds":null},
		{"valueFieldId":"sim_id","keyFieldIds":null}
	);
	
}
extend(TrackerInline_View,ViewInlineGridEdit);