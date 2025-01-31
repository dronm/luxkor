
/* Copyright (c) 2024 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function DOCOrderDOCTProdBatchList_View(id,options){
	options = options || {};
	DOCOrderDOCTProdBatchList_View.superclass.constructor.call(this,
		id,options);
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	
	row.addElement(new GridDbHeadCell(id+"_col_view_id",{
		"readBind":{"valueFieldId":"view_id"},"keyCol":true,
		"visible":false
		}));				
	
	row.addElement(new GridDbHeadCell(id+"_col_line_number",{"value":"№",
		"readBind":{"valueFieldId":"line_number"},"keyCol":true,
		"colAttrs":{"align":"center"}
		}));		
	
	row.addElement(new GridDbHeadCell(id+"_col_ext_id",{
		"readBind":{"valueFieldId":"ext_id"},"keyCol":false,
		"visible":false
		}));				

	row.addElement(new GridDbHeadCell(id+"_col_batch_descr",{"value":"Партия",
		"readBind":{"valueFieldId":"batch_descr"},
		"descrCol":true
		}));		
	
	head.addElement(row);
	
	this.m_getOrderId = options.getOrderId;

	let self = this;
	this.setGridControl(new GridDbDOCT(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":new DOCOrderDOCTProdBatch_Controller(new ServConnector(HOST_NAME)),
		"readModelId":"DOCOrderDOCTProdBatchList_Model",
		"editViewClass":DOCOrderDOCTProdBatchInline_View,
		"editViewParams":{"getOrderId": function(){
				return self.m_getOrderId();
			}},
		"editInline":true,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{
			"noInsert":false,"noCopy":true,"noDelete":false,
			"noPrint":true,"noRefresh":true}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	));	
}
extend(DOCOrderDOCTProdBatchList_View,ViewDocumentDetail);

DOCOrderDOCTProdBatchList_View.prototype.setOrderId = function(orderId){
	this.m_orderId = orderId;
}
