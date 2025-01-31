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
function VehicleList_View(id,options){
	options = options || {};
	//options.title = "Автомобили";
	VehicleList_View.superclass.constructor.call(this,
		id,options);
	
	this.m_fastFilter = new GridFastFilter(id+"_fast_filter",{
		"tagName":"div",
		"noSetControl":true,
		"noUnsetControl":true,
		"noToggleControl":true,
		"className":"row"
		});
	//driver
	this.m_fastFilter.addFilterControl(
		new EditString(id+"_fast_filter_descr",
			{"labelCaption":"Водитель:",
			"contClassName":get_bs_col()+"4"
		})		
	,{"sign":"lk","valueFieldId":"driver_descr","r_wcards":"1","l_wcards":"1","icase":"1"}
	);
		
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_driver_descr",{"value":"Водитель",
		"readBind":{"valueFieldId":"driver_descr"},
		"sortable":true,"sort":"asc"
		}));		
		
	row.addElement(new GridDbHeadCell(id+"_col_plate",{"value":"Гос.номер",
		"readBind":{"valueFieldId":"plate"},"descrCol":true,
		"sortable":true}));
	row.addElement(new GridDbHeadCell(id+"_col_vl_wt",{"value":"V/M",
		"readBind":{"valueFieldId":"vl_wt"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_production_city_descr",{"value":"Город",
		"readBind":{"valueFieldId":"production_city_descr",
		"sortable":true}
		}));
	row.addElement(new GridDbHeadCellBool(id+"_col_employed",{"value":"Пост.",
		"readBind":{"valueFieldId":"employed",
		"sortable":true}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_carrier_descr",{"value":"Перевозчик",
		"readBind":{"valueFieldId":"carrier_descr",
		"sortable":true}
		}));

	row.addElement(new GridDbHeadCellBool(id+"_col_driver_match_1c",{"value":"1с",
		"readBind":{"valueFieldId":"driver_match_1c",
		"sortable":true}
		}));
		
	head.addElement(row);
	
	
	this.m_grid = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":options.controller ||
			new Vehicle_Controller(new ServConnector(HOST_NAME)),
		"readModelId":options.model||"VehicleList_Model",
		"readMethodId":options.method||"get_list",
		"editViewClass":VehicleDialog_View,
		"editInline":false,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	);
	
	this.addElement(this.m_fastFilter);
	this.addElement(this.m_grid);

	var self = this;
	this.m_grid.m_filterComplete = function(struc){
		self.m_fastFilter.getParams(struc);
	}
	this.m_fastFilter.setOnRefresh(this.m_grid.onRefresh);
	this.m_fastFilter.setClickContext(this.m_grid);		
	
}
extend(VehicleList_View,ViewList);

VehicleList_View.prototype.getFormWidth = function(){
	return "1000";
}

VehicleList_View.prototype.toDOM = function(parent){
	VehicleList_View.superclass.toDOM.call(this,parent);
	
	this.m_fastFilter.setFocus();	
}
