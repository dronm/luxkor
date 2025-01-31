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
function ClientList_View(id,options){
	options = options || {};
	options.title = "Клиенты";
	
	ClientList_View.superclass.constructor.call(this,
		id,options);
	
	var controller = new Client_Controller(options.connect);
	//Зарегистрированные
	var cont=new ControlContainer("p_reg_cl","div",{"className":"panel panel-default"});
	//filter
	var filter = new GridFilter(uuid(),{"tagName":"div"});
	filter.addFilterControl(
		new EditList(id+"_client_id",{
		"labelCaption":"Список клиентов:",
		"editContClassName":"input-group "+get_bs_col()+"3",
		"editViewControl":new ClientEditObject(
			"client_id",
			id+"_filter_client",
			true,null,
			{"editContClassName":"input-group "+get_bs_col()+"3"}
		)
		}),
	{"sign":"incl","keyFieldIds":["id"]});
	
	/*new GridFilter(uuid(),{"tagName":"div"});
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
	if (SERV_VARS.ROLE_ID=="admin"){
		row.addElement(new GridDbHeadCellBool(id+"_col_deleted",{"value":"Удален",
			"readBind":{"valueFieldId":"deleted"}
			}));
	}
			
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
		"editViewClass":ClientDialog_View,
		"editInline":false,
		"editWinClass":WIN_CLASS,
		"pagination":new GridPagination(id+"_page",
			{"countPerPage":CONSTANT_VALS.grid_rows_per_page_count}),
		"commandPanel":new GridCommands(id+"_grid_cmd",{
			"tableId":id+"_grid","cmdColumnManager":true
		}),
		"rowCommandPanelClass":null,
		"filter":filter,
		"refreshInterval":CONSTANT_VALS.db_controls_refresh_sec*1000,
		"onSelect":options.onSelect,
		"rowSelect":true,
		"winObj":options.winObj,
		"fixedHeader":true,
		"attrs":{"name":"ClientList"}
		}
	);	
	
	cont.addElement(this.m_fastFilter);
	cont.addElement(this.m_grid);
	this.addElement(cont);
	
	var self = this;
	this.m_grid.m_filterComplete = function(struc){
		self.m_fastFilter.getParams(struc);
	}
	this.m_fastFilter.setOnRefresh(this.m_grid.onRefresh);
	this.m_fastFilter.setClickContext(this.m_grid);		
	
	//НЕЗарегистрированные
	var cont=new ControlContainer("unreg_cl_list_cont","div",{"className":"panel panel-default"});
	cont.addElement(new Control("unreg_cl_list","div",{"className":"panel-heading","value":"Незарегистрированные клиенты"}));
	
	var head = new GridHead();
	var row = new GridRow(id+"_unregCl_row1");	
	row.addElement(new GridDbHeadCell(id+"_unregCl_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));	
	row.addElement(new GridDbHeadCell(id+"_unregCl_col_name",{"value":"Наименование",
		"readBind":{"valueFieldId":"name"},"descrCol":true
		}));
	head.addElement(row);
	cont.addElement(new GridDb(id+"_unregCl_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":new Client_Controller(new ServConnector(HOST_NAME)),
		"readModelId":"get_unreg_client_list",
		"readMethodId":"get_unreg_client_list",
		"editViewClass":ClientDialog_View,
		"editInline":false,
		"editWinClass":WIN_CLASS,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_unregCl_cmd",{
			"noInsert":true,"noDelete":true,"tableId":id+"_unregCl_grid"
		}),
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":CONSTANT_VALS.db_controls_refresh_sec*1000,
		"onSelect":options.onSelect,
		"rowSelect":true,
		"winObj":options.winObj		
		}
	));
	this.addElement(cont);
}
extend(ClientList_View,ViewList);

ClientList_View.prototype.getFormWidth = function(){
	return "1000";
}
ClientList_View.prototype.getFormHeight = function(){
	return "600";
}

ClientList_View.prototype.toDOM = function(parent){
	ClientList_View.superclass.toDOM.call(this,parent);
	
	this.m_fastFilter.setFocus();	
}

