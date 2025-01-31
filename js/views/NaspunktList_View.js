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
function NaspunktList_View(id,options){
	options = options || {};
	options.title = "Организации";
	NaspunktList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Naspunkt_Controller(options.connect);
	
	//filter
	var filter = new GridFilter(uuid(),{"tagName":"div"});
	filter.addFilterControl(new ProductionCityEditObject("city_id","city",false),
		{"sign":"e","valueFieldId":"city_id"});
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_city_descr",{"value":"Город",
		"readBind":{"valueFieldId":"city_descr"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));

	row.addElement(new GridDbHeadCell(id+"_col_distance",{"value":"Расстояние",
		"readBind":{"valueFieldId":"distance"},
		"colAttrs":{"aligne":"right"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"NaspunktList_Model",
		"editViewClass":NaspunktInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));
}
extend(NaspunktList_View,ViewList);
