/* Copyright (c) 2012 
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
function NaspunktInline_View(id,options){
	options = options || {};
	NaspunktInline_View.superclass.constructor.call(this,
		id,options);	
	this.addDataControl(
		new Edit(id+"_id",{"name":"id","visible":false}),
		{"modelId":"NaspunktList_Model",
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null},
		{"autoFillOnInsert":true}
	);
	this.addDataControl(
		new ProductionCityEditObject("city_id",id+"_city",true),
		{"modelId":"NaspunktList_Model",
		"valueFieldId":"city_descr",
		"keyFieldIds":["city_id"]},
		{"valueFieldId":null,"keyFieldIds":["city_id"]}
	);
	
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{
			"maxlength":100,
			"required":"required"
			}
		}),
		{"modelId":"NaspunktList_Model",
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);

	this.addDataControl(
		new EditNum(id+"_distance",
		{"attrs":{
			"maxlength":5,
			"required":"required",			
			}
		}),
		{"modelId":"NaspunktList_Model",
		"valueFieldId":"distance",
		"keyFieldIds":null},
		{"valueFieldId":"distance","keyFieldIds":null}
	);
	
}
extend(NaspunktInline_View,ViewInlineGridEdit);
