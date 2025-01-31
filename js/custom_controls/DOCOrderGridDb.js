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
function DOCOrderGridDb(id,options){
	options = options || {};	
	DOCOrderGridDb.superclass.constructor.call(this,
		id,options);
		
	this.m_prodDescr = {};
}
extend(DOCOrderGridDb,GridDbDOC);

DOCOrderGridDb.prototype.DETAIL_WAIT = 500;

DOCOrderGridDb.prototype.onGetData = function(resp){

	DOCOrderGridDb.superclass.onGetData.call(this,resp);
	
	this.m_toolTips={};
	this.m_colorToolTips={};
	var self = this;
	
	//number
	var cells=DOMHandler.getElementsByAttr("number",this.m_node,"field_id",false);
	for (var i=0;i<cells.length;i++){
		if (cells[i].nodeName.toLowerCase()=="td"){
			this.m_colorToolTips[i]=new ToolTip({
				"node":cells[i],
				"wait":1,
				"onHover":function(event){
					this.popup(
						'<div><span class="color-sample behind_plan">&nbsp;&nbsp;&nbsp;</span> - опаздание</div>'+
						'<div><span class="color-sample waiting_for_us">&nbsp;&nbsp;&nbsp;</span> - согласование Полимерпласт</div>'+
						'<div><span class="color-sample waiting_for_client">&nbsp;&nbsp;&nbsp;</span> - на согласовании у клиента</div>'+
						'<div><span class="color-sample waiting_for_payment">&nbsp;&nbsp;&nbsp;</span> - ожидает оплаты материалов</div>'+
						'<div><span class="color-sample producing">&nbsp;&nbsp;&nbsp;</span> - в производстве</div>'+
						'<div><span class="color-sample produced">&nbsp;&nbsp;&nbsp;</span> - готова</div>'+
						'<div><span class="color-sample shipped">&nbsp;&nbsp;&nbsp;</span> - отгружена</div>'+
						'<div><span class="color-sample loading">&nbsp;&nbsp;&nbsp;</span> - на погрузке</div>'+
						'<div><span class="color-sample on_way">&nbsp;&nbsp;&nbsp;</span> - доставка клиенту</div>'+
						'<div><span class="color-sample unloading">&nbsp;&nbsp;&nbsp;</span> - разгрузка у клиента</div>',
						{"title":"Расшифровка статусов","className":"OrderInfPopOver"}
						);
				}
			});
		}
	}
	
	//продукция
	var cells=DOMHandler.getElementsByAttr("products_descr",this.m_node,"field_id",false);
	for (var i=0;i<cells.length;i++){
		if (cells[i].nodeName.toLowerCase()=="td"){
			this.m_toolTips[i]=new ToolTip({
				"node":cells[i],
				"wait":this.DETAIL_WAIT,
				"onHover":function(event){					
					event = EventHandler.fixMouseEvent(event);
					if (event.target.parentNode){
						var keys=json2obj(event.target.parentNode.getAttribute("key_values"));
						if (keys){							
							var tip = this;
							//cash
							if (self.m_prodDescr[keys["id"]]){
								tip.popup(self.m_prodDescr[keys["id"]],{
									"title":"Данные по заявке",
									"className":"OrderInfPopOver"
								});
								return;
							}
							var contr=new DOCOrder_Controller(new ServConnector(HOST_NAME));
							var meth_id="get_products_descr";
							var meth = contr.getPublicMethodById(meth_id);
							meth.setParamValue("doc_id",keys["id"]);
							contr.run(meth_id,{
								"async":true,
								"func":function(resp){									
									var driver_descr;
									var vehicle_descr;
								
									var content = "<table class='table table-striped'>";
									var model = resp.getModelById("DOCOrder_Model");
									model.setActive(true);
									while (model.getNextRow()){
										content+="<tr class='row'>"+
											"<td>"+model.getFieldValue("product_descr")+"</td>"+
											"<td>"+model.getFieldValue("base_quant")+"</td>"+
											"<td>"+model.getFieldValue("base_measure_unit_descr")+"</td>"+
											"<td>"+model.getFieldValue("quant")+"</td>"+
											"<td>"+model.getFieldValue("measure_unit_descr")+"</td>";
											content+="<td>";
											if (model.getFieldValue("pack_exists")=="true"){												
												if (model.getFieldValue("pack_in_price")=="true"){
													content+="Упаковка в цене";
												}												
											}
											content+="</td>";
										driver_descr = model.getFieldValue("driver_descr");
										vehicle_descr = model.getFieldValue("vehicle_descr");
										content+="</tr>";
										i++;
									}									
									content+="</table>";
									if (driver_descr){
										content+="<div>Отгрузка: ";
										content+="<span>"+driver_descr+"</span>";
										content+=" <span>, "+vehicle_descr+"</span>";
										content+="</div>";
									}
									
									self.m_prodDescr[keys["id"]]=content;
									tip.popup(content,{
										"title":"Данные по заявке",
										"className":"OrderInfPopOver"
										});
								},
								"xml":true,
								"errControl":self.getErrorControl()
							})							
						}
					}
				}
			});
		}
	}	
}
DOCOrderGridDb.prototype.initEditViewObj = function(contr){
	DOCOrderGridDb.superclass.initEditViewObj.call(this,contr);
	
	this.m_editViewObj.m_currentGrid = this.m_currentGrid;
	
	var tt_n = nd("tt");
	if (tt_n){
		DOMHandler.removeNode(tt_n);
	}
	/*
	var compl_n = nd("tat_table");
	if (compl_n){
		DOMHandler.removeNode(compl_n);
	}
	*/
}

DOCOrderGridDb.prototype.onRefresh = function(){
	DOCOrderGridDb.superclass.onRefresh.call(this);
	this.m_prodDescr = {};
}
