/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires common/functions.js
*/

/* constructor */
function DelivAssignedOrderGridDb(id,options){
	options = options || {};
	DelivAssignedOrderGridDb.superclass.constructor.call(this,
		id,options);		
}
extend(DelivAssignedOrderGridDb,GridDbDOC);

DelivAssignedOrderGridDb.prototype.onGetData = function(resp){
	this.m_orderAct = {};
	var id = this.getId();
	var model = resp.getModelById(this.getReadModelId());
	model.setActive(true);
	var head_cells={};
	//added head
	var model_head = resp.getModelById("periods");
	model_head.setActive(true);	
	head = this.getHead();
	head.removeDOM();
	head.clear();	
	var row = new GridRow(id+"_head_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_vh_id",{
		"readBind":{"valueFieldId":"vh_id"},"keyCol":true,"visible":false
		}));	
	row.addElement(new GridDbHeadCell(id+"_col_vh_descr",{
		"value":"ТС",
		"readBind":{"valueFieldId":"vh_descr"},"descrCol":true
		}));	
	row.addElement(new GridDbHeadCell(id+"_col_vh_state_descr",{
		"value":"Статус",
		"readBind":{"valueFieldId":"vh_state_descr"}
		}));	
	var period_list = [];
	while (model_head.getNextRow()){
		var per_id = model_head.getFieldValue("id");
		var per_name = model_head.getFieldValue("name");
		period_list.push({"id":per_id,"h_to":model_head.getFieldValue("h_to")});
		row.addElement(new GridDbHeadCell(id+"_col_period_"+per_id,{"value":per_name
			}));
	}
	head.addElement(row);
	head.toDOM(this.m_node);
	//added head	
	head.getFields(head_cells);
	
	var dt = this.getFilter().m_filter.getParamValue("from","descr").substring(0,10);
	DOMHandler.addAttr(this.m_node,"date",dt);
	var body = this.getBody();
	body.removeDOM();
	body.clear();
	
	//текущий ряд
	var row;
	
	//текущие значения
	var cur_vh_city_id,cur_vh_id,cur_per_id;
	
	//Индекс ряда
	var r_ind = 0;
	
	var r_id_pref = this.getId()+"_row_";
	
	//Контейнер текущего периода для добавления заявок
	var cur_period_cell,cur_per_vm,cur_per_wt;
	
	var vh_wt,vh_vol;
	
	while (model.getNextRow()){
		var vh_city_id = model.getFieldValue("vh_city_id");
		var vh_id = model.getFieldValue("vh_id");
		var vh_wt = model.getFieldValue("vh_wt");
		var vh_vm = model.getFieldValue("vh_vm");
		var per_id = model.getFieldValue("per_id");
		//Информацио о заявке
		var order_inf = {
			"id":model.getFieldValue("o_id"),
			"number":model.getFieldValue("o_number"),
			"warehouse_descr":model.getFieldValue("o_warehouse_descr"),
			"client_descr":model.getFieldValue("o_client_descr"),
			"client_dest_descr":model.getFieldValue("o_client_dest_descr"),
			"product_str":model.getFieldValue("o_product_str"),
			"vm":toFloat(model.getFieldValue("o_vm")),
			"wt":toFloat(model.getFieldValue("o_wt")),
			"state":model.getFieldValue("o_state")
		}
		
		/*Если изменился город
		- просто отдельная строка с новым городом
		и с colspan по всем колонкам
		*/
		if (cur_vh_city_id!=vh_city_id){
			row = new GridRow(r_id_pref+r_ind,
				{"className":"deliv_store_city unselectable"}
			);
			//Первая невидимая колонка
			row.addElement(new GridCell(r_id_pref+r_ind+"_0",{"visible":false}));
			
			row.addElement(new GridCell(r_id_pref+r_ind+"_1",
				{"value":model.getFieldValue("vh_city_descr"),
				"attrs":{"colspan":period_list.length+2}}
				));			
			body.addElement(row);
			cur_vh_city_id = vh_city_id;
			r_ind++;
		}
		/*Если изменилось авто
		выводим новую строку
		*/
		if (cur_vh_id!=vh_id){
			var row_class = (r_ind%2==0)? "even":"odd";
			row = new GridRow(r_id_pref+r_ind,
				{"className":row_class,"attrs":{
						"maxVol":vh_vm,
						"maxWt":vh_wt}
				});
			row.addElement(new GridCell(r_id_pref+r_ind+"_0",
				{"value":vh_id,"visible":false}
				));	
			row.addElement(new GridCell(r_id_pref+r_ind+"_1",
			{"value":model.getFieldValue("vh_descr")}
			));					
			row.addElement(new GridCell(r_id_pref+r_ind+"_2",
			{"value":model.getFieldValue("vh_state_descr")}
			));
			row.setAttr("key_values",array2json({"id":vh_id}));
			body.setElementById("row_"+r_ind,row);
			cur_vh_id = vh_id;		
			cur_per_vm = 0;
			cur_per_wt = 0;
		}				
		
		//сменился период
		if (cur_per_id!=per_id){
			cur_period_cell = new GridDropCell(uuid(),
			{"className":"deliv_period",
			"grid":this,
			"grid_unass":this.m_unassGrid,
			"attrs":{"totVol":"0",
				"totWt":"0",
				"maxVol":vh_vm,"maxWt":vh_wt,
				"period_id":per_id,
				"h_to":model.getFieldValue("per_h_to")
				}				
			});			
			row.addElement(cur_period_cell);							
			
			cur_per_vm = 0;
			cur_per_wt = 0;			
			cur_per_id = per_id;
		}
				
		if (order_inf.id){
			//Есть данные по накладной
			var perc_v = Math.round(order_inf.vm/vh_vm*100);
			var perc_w = Math.round(order_inf.wt/vh_wt*100);
			var order_percent = (perc_v>perc_w)? perc_v:perc_w;									
			
			var self = this;
			var cont = new Control(uuid(),"div",{
				"className":"deliv_order "+order_inf.state,
				"value":order_inf.number+" ("+order_percent+"%)",
				"events":{"click":function(e){					
					e = EventHandler.fixMouseEvent(e);					
					var order_inf = DOMHandler.getAttr(e.target,"order_inf");
					if (order_inf){
						var vals = json2obj(order_inf);
						self.openOrder(vals.id);
					}
				}},
				"attrs":{
					"order_inf":array2json(order_inf),
					"style":"width:"+order_percent+"%",
					"vol":order_inf.vm,
					"wt":order_inf.wt,
					"old_per_cell_id":cur_period_cell.getId()
				}
			});
			cur_per_vm+=order_inf.vm;
			cur_per_wt+=order_inf.wt;
			var per_perc_v = Math.round(cur_per_vm/vh_vm*100);
			var per_perc_w = Math.round(cur_per_wt/vh_wt*100);
			var per_perc = (per_perc_v>per_perc_w)? per_perc_v:per_perc_w;
			cur_period_cell.setAttr("load_percent_css",Math.round(per_perc/10)*10);
			cur_period_cell.setAttr("totVol",cur_per_vm);
			cur_period_cell.setAttr("totWt",cur_per_wt);
			cur_period_cell.addElement(cont);
			//tool tip
			this.m_orderAct[order_inf.number]={};			
			this.m_orderAct[order_inf.number].drag = new DragObject(cont.m_node);
			this.m_orderAct[order_inf.number].drag.m_cont = cont;
			this.m_orderAct[order_inf.number].drag.tip=new OrderDescr(cont.m_node);
			this.m_orderAct[order_inf.number].drag.getFieldValue=function(field){
				var o_inf = json2obj(this.m_cont.getAttr("order_inf"));
				return o_inf[field];
			}			
			this.m_orderAct[order_inf.number].drag.onDragStart = function(offset){				
				DragObject.prototype.onDragStart.call(this,offset);				
				DOMHandler.addClass(this.element,"dragging");
				this.m_wait = this.tip.getWait();
				this.tip.setWait(0);
				this.tip.remove();				
			}
			this.m_orderAct[order_inf.number].drag.onDragFail = function(dropObject){
				DragObject.prototype.onDragFail.call(this);				
				DOMHandler.removeClass(this.element,"dragging");
				if (dropObject){
					DOMHandler.removeClass(dropObject.element,"uponMe");				
				}
				this.tip.setWait(this.m_wait);
			}			
			this.m_orderAct[order_inf.number].drag.onDragSuccess = function(){
				DragObject.prototype.onDragSuccess.call(this);				
				DOMHandler.removeClass(this.element,"dragging");				
			}						
		}
		r_ind++;
	}
	
	body.toDOM(this.m_node);
	if (this.m_navigate){
		this.setSelection();
	}		
}
DelivAssignedOrderGridDb.prototype.filterToDOM = function(parent){
}

DelivAssignedOrderGridDb.prototype.openOrder = function(docId){
	if (this.m_map){
		DOMHandler.addClass(this.m_map.getNode(),"hidden");
	}
	
	this.setGlobalWait(true);
	
	var con = new ServConnector(HOST_NAME);
	var contr = new DOCOrder_Controller(con);
	
	var self = this;
	if (!this.m_orderView)this.m_orderView = {};
	if (!this.m_orderWin)this.m_orderWin = {};
	
	if (this.m_orderView[docId]){
		this.getErrorControl().setValue("Заявка уже редактируется!");
		return;
	}
	
	this.m_orderView[docId] = new DOCOrderDialog_View(
		this.getId()+"EditView:"+docId,
		{"onClose":function(res){
			
			self.m_orderView[docId].removeDOM();
			delete self.m_orderView[docId];
			
			//external window
			self.m_orderWin[docId].m_closeMode = res;
			self.m_orderWin[docId].close();
			delete self.m_orderWin[docId];
			
			if (self.m_map){
				exists = false;
				for(var w in self.m_orderWin){
					if (self.m_orderWin[w]){
						exists = true;
						break;
					}
				}
				if (!exists) DOMHandler.removeClass(self.m_map.getNode(),"hidden");
			}
		},
		"readController":contr,
		"readModelId":"DOCOrderDialog_Model",
		"connect":con,
		"errorControl":this.getErrorControl(),
		"winObj":this.m_winObj
		}
	);

	var pm = contr.getPublicMethodById("get_object");
	this.m_orderView[docId].setReadIdValue("id",docId);		
	
	//external window
	this.m_orderWin[docId] = new WIN_CLASS({
		"view":this.m_orderView[docId],
		"title":this.m_orderView[docId].getFormCaption()+":Редактирование",
		"width":this.m_orderView[docId].getFormWidth(),
		"height":this.m_orderView[docId].getFormHeight()		
	});
	this.m_orderWin[docId].open();
	
	this.m_orderView[docId].readData(true);	
	this.m_orderView[docId].m_beforeOpen(contr,false,false);	
	this.m_orderView[docId].toDOM(this.m_orderWin[docId].getContentParent());
	
	this.setGlobalWait(false);	
	
}

DelivAssignedOrderGridDb.prototype.selectRow = function(newRow,oldRow){
	DelivAssignedOrderGridDb.superclass.selectRow.call(this,newRow,oldRow);
	
	if (this.m_selectedRowKeys && this.m_map){
		var id = json2obj(this.m_selectedRowKeys).id;		
		this.m_map.setCurVehicleId(id);
	}
}


function GridDropCell(id,options){
	this.m_grid = options.grid;
	this.m_grid_unass = options.grid_unass;
	GridDropCell.superclass.constructor.call(this,
		id,options);
}
extend(GridDropCell,GridCell);

GridDropCell.prototype.toDOM = function(parent){
	GridDropCell.superclass.toDOM.call(this,parent);
	var self = this;
	this.m_dropTarget = new DropTarget(this.m_node);
	this.m_dropTarget.accept = function(dragObject) {
		var order_inf = {
			"id":dragObject.getFieldValue("id"),
			"number":dragObject.getFieldValue("number"),
			"warehouse_descr":dragObject.getFieldValue("warehouse_descr"),
			"client_descr":dragObject.getFieldValue("client_descr"),
			"client_dest_descr":dragObject.getFieldValue("client_dest_descr"),
			"product_str":dragObject.getFieldValue("product_str"),
			"vm":toFloat(dragObject.getFieldValue("vm")),
			"wt":toFloat(dragObject.getFieldValue("wt")),
			"delivery_plan_date_descr":dragObject.getFieldValue("delivery_plan_date_descr")
		}
		
		var veh_node = DOMHandler.getParentByTagName(self.m_node,"tr");
		var tb_node = DOMHandler.getParentByTagName(veh_node,"table");
		var veh_keys = json2obj(DOMHandler.getAttr(veh_node,"key_values"));		
		var maxvol = toFloat(DOMHandler.getAttr(veh_node,"maxvol"));
		var maxwt = toFloat(DOMHandler.getAttr(veh_node,"maxwt"));
		var period_id = toInt(DOMHandler.getAttr(self.m_node,"period_id"));
		var period_h_to = toInt(DOMHandler.getAttr(self.m_node,"h_to"));
		var totvol = toFloat(DOMHandler.getAttr(self.m_node,"totvol")) + order_inf.total_volume;
		var totwt = toFloat(DOMHandler.getAttr(self.m_node,"totwt")) + order_inf.total_weight;

		//проверки
		var dt_str = DOMHandler.getAttr(tb_node,"date");
		var now = new Date();
		var now_h = now.getHours();
		now.setHours(0,0,0,0);
		var dt = DateHandler.strToDate(dt_str);
		
		var plan_d = dragObject.getFieldValue("delivery_plan_date_descr");
		if (plan_d){
			if (DateHandler.strToDate(plan_d).getTime()!=dt.getTime()){
				window.showTempError("Планируемая дата отличается!", null, ERR_MSG_WAIT_MS);											
			}
		}
		
		var er_text;
		
		if (dt<now){
			er_text = "Нельзя разместить заявку на прошедшую дату!";
		}
		/*else if (dt.getTime()==now.getTime()&&now_h>period_h_to){
			er_text = "Нельзя разместить заявку на прошедшее время!";
		}*/
		else if (maxvol<order_inf.vm){
			er_text = "Заявка не проходит по объему!";			
		}
		else if (maxwt<order_inf.wt){
			er_text = "Заявка не проходит по весу!";						
		}		

		if (er_text){
			window.showTempError(er_text, null, ERR_MSG_WAIT_MS);											
			return false;
		}
		
		var contr=new Delivery_Controller(new ServConnector(HOST_NAME));
		var meth_id="assign_order_to_vehicle";
		var meth = contr.getPublicMethodById(meth_id);
		meth.setParamValue("order_id",order_inf.id);
		meth.setParamValue("vehicle_id",veh_keys.id);
		meth.setParamValue("hour_id",period_id);
		meth.setParamValue("date",dt_str);
		selfself = this;
		contr.run(meth_id,{
			"async":false,
			"func":function(resp){
				//Узел с Заявкой
				selfself.onLeave();		
				dragObject.hide();
				
				self.m_grid.onRefresh();
				self.m_grid_unass.onRefresh();
				self.m_assignRes=true;
			},
			"err":function(resp,errCode,errStr){
				window.showTempError(errStr, null, ERR_MSG_WAIT_MS);											
				self.m_assignRes=false;
			}
		});	
		return this.m_assignRes;
	};
	this.m_dropTarget.canAccept = function(){
		return true;
	}
}

function OrderDescr(node){
	options = {};
	options.node = node;
	options.wait = 100;
	options.onHover = function(event){
		event = EventHandler.fixMouseEvent(event);
		if (event.target){
			var order_inf = json2obj(DOMHandler.getAttr(event.target,"order_inf"));
			var tip = this;
			var content =
				"<table>"+
				"<tr><td>Номер:</td><td>"+order_inf.number+"</td></tr>"+
				"<tr><td>Клиент:</td><td>"+order_inf.client_descr+"</td></tr>"+
				"<tr><td>Склад:</td><td>"+order_inf.warehouse_descr+"</td></tr>"+
				"<tr><td>Адрес:</td><td>"+order_inf.client_dest_descr+"</td></tr>"+
				"<tr><td>Продукция:</td><td>"+order_inf.product_str+"</td></tr>"+
				"<tr><td>Объем,м3:</td><td>"+order_inf.vm+"</td></tr>"+
				"<tr><td>Масса,т:</td><td>"+order_inf.wt+"</td></tr>"+
				"</table>";									
			tip.popup(content,{"width":500});
		}
	}
	OrderDescr.superclass.constructor.call(this,
	options);		
}
extend(OrderDescr,ToolTip);
