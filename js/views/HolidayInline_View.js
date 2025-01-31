/* Copyright (c) 2016 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires controls/View.js
*/

/* constructor */
function HolidayInline_View(id,options){
	options = options || {};
	ProductGroupInline_View.superclass.constructor.call(this,
		id,options);	
	this.addDataControl(
		new EditDate(id+"_id",{"name":"date"}),
		{"modelId":"HolidayList_Model",
		"valueFieldId":"date",
		"keyFieldIds":null},
		{"valueFieldId":"date_str","keyFieldIds":["date"]}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{
				"maxlength":100,
				"size":50
				}
		}),
		{"modelId":"HolidayList_Model",
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
}
extend(HolidayInline_View,ViewInlineGridEdit);
