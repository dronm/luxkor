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
function TrackerServerInline_View(id,options){
	options = options || {};
	TrackerServerInline_View.superclass.constructor.call(this,
		id,options);	
		
	var model_id = "TrackerServer_Model";
		
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new EditString(id+"_ip",
		{"attrs":{
				"maxlength":"15",
				"size":12,
				"required":"required"
				}
		}),
		{"modelId":model_id,
		"valueFieldId":"ip",
		"keyFieldIds":null},
		{"valueFieldId":"ip","keyFieldIds":null}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{
				"maxlength":"50",
				"size":20,
				"required":"required"
				}
		}),
		{"modelId":model_id,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
	
}
extend(TrackerServerInline_View,ViewInlineGridEdit);