/* Copyright (c) 2015 
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
function TrackerList_View(id,options){
	options = options || {};
	options.title = "Трекеры";
	TrackerList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Tracker_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{"value":"Идентификатор",
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_tracker_server_descr",{"value":"Сервер",
		"readBind":{"valueFieldId":"tracker_server_descr"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_sim_number",{"value":"Номер SIM карты",
		"readBind":{"valueFieldId":"sim_number"}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_sim_id",{"value":"Идентификатор SIM карты",
		"readBind":{"valueFieldId":"sim_id"}
		}));

	row.addElement(new GridDbHeadCell(id+"_col_last_tracker_data",{"value":"Данные",
		"readBind":{"valueFieldId":"last_tracker_data"}
		}));
		
	head.addElement(row);
	
	this.addElement(new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"TrackerList_Model",
		"editViewClass":TrackerInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));
}
extend(TrackerList_View,ViewList);