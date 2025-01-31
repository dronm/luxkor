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
function ClientSelectList_View(id,options){
	options = options || {};
	ClientSelectList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Client_Controller(options.connect);
	
	var cont=new ControlContainer("p_cl","div",{"className":"panel"});
	
	//filter
	var filter = null;
	/*
	new GridFilter(uuid(),{"tagName":"div"});
	filter.addFilterControl(new EditObject("ClientListFilter_name",
		{"labelCaption":"Наименование:",
		"methodId":"complete",
		"tableLayout":false,
		"modelId":"ClientComplete_Model",
		"objectView":ClientDialog_View,
		"lookupValueFieldId":"name",
		"lookupKeyFieldIds":["id"],
		"keyFieldIds":["id"],
		"controller":controller,
		"minLengthForQuery":1,
		"objectView":ClientDialog_View,
		"noSelect":true,
		"winObj":this.m_winObj
		})
	,{"sign":"lk","valueFieldId":"name",
	"icase":true,"l_wcards":true,"r_wcards":true});
	*/
	//fast filter
	this.m_fastFilter = new GridFastFilter(id+"_fast_filter",{
		"tagName":"div",
		"noSetControl":true,
		"noUnsetControl":true,
		"noToggleControl":true,
		"className":"row"
		});
	//client
	this.m_fastFilter.addFilterControl(
		new EditString(id+"_fast_filter_descr",
			{"labelCaption":"Наименование:",
			"contClassName":get_bs_col()+"4"
		})		
	,{"sign":"lk","valueFieldId":"name","r_wcards":"1","l_wcards":"1","icase":"1"}
	);
		
	var head = new GridHead();
	var row = new GridRow(id+"_row1");
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true,
		"sortable":true,"sort":"asc"
		}));
	row.addElement(new GridDbHeadCell(id+"_col_client_activity_descr",{"value":"Вид деят.",
		"readBind":{"valueFieldId":"client_activity_descr"},
		"sortable":true
		}));
	row.addElement(new GridDbHeadCell(id+"_col_inn",{"value":"ИНН",
		"readBind":{"valueFieldId":"inn"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_contract_descr",{"value":"Договор",
		"readBind":{"valueFieldId":"contract_descr"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_contract_period",{"value":"Срок дог.",
		"readBind":{"valueFieldId":"contract_period"},
		"sortable":true
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_terms",{"value":"Условия",
		"readBind":{"valueFieldId":"terms"},
		"sortable":true
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_debt",{"value":"Деб.задолж.",
		"readBind":{"valueFieldId":"debt"},
		"colAttrs":{"align":"right"},"sortable":true
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_login_allowed",{"value":"Личн.каб.",
		"readBind":{"valueFieldId":"login_allowed"},
		"assocImageArray":{"true":"img/bool/true.png",
			"false":"img/bool/false.png"},
		"colAttrs":{"align":"center"},			
		"sortable":true
		}));		
		
	head.addElement(row);
	
	this.m_grid = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readModelId":"ClientList_Model",
		"editViewClass":null,
		"editInline":null,
		"pagination":new GridPagination("page_ClientList",
			{"countPerPage":CONSTANT_VALS.grid_rows_per_page_count}),
		
		"commandPanel":
			new GridCommands(id+"_grid_cmd",{
				"noInsert":true,"noEdit":true,
				"noCopy":true,"noPrint":true,"noDelete":true
			}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"rowSelect":true,
		"extraFields":options.extraFields
		}
	);
	
	var self = this;
	this.m_grid.m_filterComplete = function(struc){
		self.m_fastFilter.getParams(struc);
	}
	this.m_fastFilter.setOnRefresh(this.m_grid.onRefresh);
	this.m_fastFilter.setClickContext(this.m_grid);		

	cont.addElement(this.m_fastFilter);
	cont.addElement(this.m_grid);
	
	this.addElement(cont);
}
extend(ClientSelectList_View,ViewList);

ClientSelectList_View.prototype.getFormWidth = function(){
	return "1250";
}
ClientSelectList_View.prototype.getFormHeight = function(){
	return "600";
}

ClientSelectList_View.prototype.toDOM = function(parent){
	ClientSelectList_View.superclass.toDOM.call(this,parent);
	
	this.m_fastFilter.setFocus();	
}
