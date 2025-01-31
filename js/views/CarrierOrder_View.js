/** Copyright (c) 2017 
	Andrey Mikhalevich, Katren ltd.
*/
function CarrierOrder_View(id,options){
	options = options || {};
	
	CarrierOrder_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new CarrierOrder_Controller(options.connect);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_carrier",{
		"readBind":{"valueFieldId":"carrier_id"},"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_carrier_descr",{"value":"Перевозчик",
		"readBind":{"valueFieldId":"carrier_descr"},"descrCol":true
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_driver",{
		"readBind":{"valueFieldId":"driver_id"},"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_driver_descr",{"value":"Водитель",
		"readBind":{"valueFieldId":"driver_descr"},"descrCol":true
		}));

	row.addElement(new GridDbHeadCell(id+"_col_vehicle",{
		"readBind":{"valueFieldId":"vehicle_id"},"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_vehicle_descr",{"value":"ТС",
		"readBind":{"valueFieldId":"vehicle_descr"},"descrCol":true
		}));

	row.addElement(new GridDbHeadCell(id+"_col_ord",{"value":"Порядок",
		"readBind":{"valueFieldId":"ord"}
		}));
		
	head.addElement(row);
	
	var gr = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"CarrierOrderList_Model",
		"editViewClass":CarrierOrderInline_View,
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noPrint":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj,
		}
	);
	gr.onGetDataSetRowClass = function(m,cl){
			if (m.getFieldValue("today_ord")=="true"){
				return "todayOrd";
			}
	}
	this.addElement(gr);
}
extend(CarrierOrder_View,ViewList);
