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
function DelivUnassignedOrderList_View(id,options){
	options = options || {};
	options.title = "Нераспределенные доставки";
	DelivUnassignedOrderList_View.superclass.constructor.call(this,
		id,options);
	
	//доп фильтр
	var self = this;
	/*
	this.m_filterAllOrders = new EditCheckBox(id+"_filter_all_orders",{
		"labelCaption":"Все заявки",
		"name":"filter_all_orders",
		"tableLayout":false,
		"events":{
			"change":function(){
				self.m_grid.onRefresh();
			}
		}
	});
	this.addElement(this.m_filterAllOrders);
	*/
	//fast filter
	
	this.m_fastFilter = new GridFastFilter(id+"_fast_filter",{
		"tagName":"div",
		"noSetControl":true,
		"noUnsetControl":true,
		"noToggleControl":true,
		"className":"row"
		});
	
	this.m_allOrdersCtrl = new EditRadioGroup(id+"_filter_all_orders",
		{"className":get_bs_col()+"3",
		"elements":[
			new EditRadio("all_orders:current",{
				"descr":"Текущие",
				"value":"0",
				"name":"all_orders",
				"contClassName":get_bs_col()+"6",
				"editContClassName":"input-group "+get_bs_col()+"1",
				"labelClassName":get_bs_col()+"8",					
				"events":{
					"click":function(){
						self.m_fastFilter.refresh();						
					}
				},
				"attrs":{"checked":"checked","initValue":"checked"}}),
			new EditRadio("current_all:all",{
				"descr":"Все",
				"value":"1",
				"name":"all_orders",
				"contClassName":get_bs_col()+"6",
				"editContClassName":"input-group "+get_bs_col()+"1",
				"labelClassName":get_bs_col()+"8",
				"events":{
					"click":function(){
						self.m_fastFilter.refresh();
					}
				},					
				"attrs":{"initValue":"false"}

				})
			]
		});		
	this.m_fastFilter.addFilterControl(this.m_allOrdersCtrl,{});
		
	//НОМЕР
	this.m_fastFilter.addFilterControl(
		new EditString(id+"_fast_filter_number",
			{"labelCaption":"№:",
			"contClassName":get_bs_col()+"2",
			"winObj":this.m_winObj,
			"tableLayout":false
		})		
	,{"sign":"lk","valueFieldId":"number","r_wcards":true}
	);
	
	//client
	this.m_fastFilter.addFilterControl(
		new EditString(id+"_fast_filter_client_descr",
			{"labelCaption":"Клиент:",
			"contClassName":get_bs_col()+"3"
		})		
	,{"sign":"lk","valueFieldId":"client_descr","r_wcards":"1","l_wcards":"1","icase":"1"}
	);
	
	//date
	this.m_fastFilter.addFilterControl(new EditDate(id+"_fast_filter_delivery_plan_date",
		{"labelCaption":"Дата вып.:",
		"noClear":false,
		"editContClassName":"input-group "+get_bs_col()+"8",
		"contClassName":get_bs_col()+"3",
		"labelClassName":get_bs_col()+"4",
		"enabled":false,
		"onSelected":function(){
			self.m_fastFilter.refresh();
		}		
		})
		,{"sign":"e","valueFieldId":"delivery_plan_date"}
	);
	this.addElement(this.m_fastFilter);
	
	var controller = new Delivery_Controller(new ServConnector(HOST_NAME));
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_id",{
		"readBind":{"valueFieldId":"id"},"keyCol":true,
		"visible":false
		}));
	row.addElement(new GridDbHeadCell(id+"_col_number",{"value":"№",
		"colAttrs":{"align":"center"},
		"readBind":{"valueFieldId":"number"}
		}));		
	row.addElement(new GridDbHeadCell(id+"_col_delivery_plan_date_descr",{"value":"Дата",
		"readBind":{"valueFieldId":"delivery_plan_date_descr"},
		"colAttrs":{"align":"center"}
		}
		));
		
	row.addElement(new GridDbHeadCell(id+"_col_client_descr",{"value":"Клиент",
		"readBind":{"valueFieldId":"client_descr"}
		}
		));
	row.addElement(new GridDbHeadCell(id+"_col_warehouse_descr",{"value":"Место загрузки",
		"readBind":{"valueFieldId":"warehouse_descr",
		"sortable":true}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_client_dest_descr",{"value":"Адрес доставки",
		"readBind":{"valueFieldId":"client_dest_descr"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_product_str",{"value":"Продукция",
		"readBind":{"valueFieldId":"product_str"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_total_volume",{"value":"V,m3",
		"readBind":{"valueFieldId":"total_volume"},
		"colAttrs":{"align":"right"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_total_weight",{"value":"m,т.",
		"readBind":{"valueFieldId":"total_weight"},
		"colAttrs":{"align":"right"}
		}));
		
	head.addElement(row);
	
	this.m_grid = new DelivUnassignedOrderGridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"unassigned_orders_list",
		"readModelId":"UnassignedOrderList_Model",
		"editViewClass":null,
		"editInline":null,
		"pagination":null,
		"commandPanel":new GridCommands(id+"_cmd",{"controller":controller,
			"noInsert":true,"noEdit":true,"noDelete":true,
			"noPrint":true,"noCopy":true}),
		"rowCommandPanelClass":null,
		"filter":options.filter,
		"refreshInterval":CONSTANT_VALS.db_controls_refresh_sec*1000,
		"onSelect":options.onSelect,
		"winObj":options.winObj,
		"filterAllOrders":this.m_filterAllOrders
		}
	);	
	this.m_grid.toDOM = function(parent){
		GridDb.superclass.toDOM.call(this,parent);
		var self = this;
		this.m_dropTarget = new DropTarget(this.m_node);
		this.m_dropTarget.accept = function(dragObject) {
			this.onLeave();		
			dragObject.hide();
			//пересчет % загрузки
			var vh_vm = toFloat(DOMHandler.getAttr(dragObject.element,"vol"));
			var vh_wt = toFloat(DOMHandler.getAttr(dragObject.element,"wt"));
			var td = DOMHandler.getParentByTagName(dragObject.element,"td");
			var cur_per_vm = toFloat(DOMHandler.getAttr(td,"totvol"));
			var cur_per_wt = toFloat(DOMHandler.getAttr(td,"totwt"));
			cur_per_vm = cur_per_vm - vh_vm;
			cur_per_wt = cur_per_wt - vh_wt;
			var per_perc_v = Math.round(cur_per_vm/vh_vm*100);
			var per_perc_w = Math.round(cur_per_wt/vh_wt*100);
			var per_perc = (per_perc_v>per_perc_w)? per_perc_v:per_perc_w;
			
			DOMHandler.setAttr(td,"totvol",cur_per_vm);
			DOMHandler.setAttr(td,"totwt",cur_per_wt);
			DOMHandler.setAttr(td,"load_percent_css",Math.round(per_perc/10)*10);
			
			var contr=new Delivery_Controller(new ServConnector(HOST_NAME));
			var meth_id="remove_order";
			var meth = contr.getPublicMethodById(meth_id);
			meth.setParamValue("order_id",dragObject.getFieldValue("id"));
			contr.run(meth_id,{
				"async":true,
				"func":function(resp){
					self.onRefresh();
				}
			});		
			
		}
	}
	
	this.m_grid.m_filterComplete = function(struc){
		//console.log("allOrdersCtrl="+self.m_allOrdersCtrl.getValue());
		if (self.m_allOrdersCtrl.getValue()=="1"){
			struc.fields = null;
			struc.signs = null;
			struc.vals = null;
			struc.icase = null;
			struc.field_sep = "@";
		}
		self.m_fastFilter.getParams(struc);
		
	}

	this.m_fastFilter.setOnRefresh(this.m_grid.onRefresh);
	this.m_fastFilter.setClickContext(this.m_grid);		
		
	this.addElement(this.m_grid);
}
extend(DelivUnassignedOrderList_View,ViewList);
