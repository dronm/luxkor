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
function RepPriceListTuning_View(id,options){
	options = options || {};
	options.controller = ClientPriceList_Controller;
	options.methodId = "tune";
	options.viewId = "ViewHTMLXSLT";
	options.connect = options.connect;
	options.reportControl = new Control(id+"_rep","div");
	
	RepPriceListTuning_View.superclass.constructor.call(this,
		id,options);
	
	//Для третьих лиц
	var ctrl = new EditSelect(id+"_to_third_party_only",
		{labelCaption:"Для третьих лиц:"});	
	ctrl.addElement(new EditSelectOption(id+"_to_third_party_only_null",{
		optionDescr:"для всех",optionId:"null",optionSelected:true}));
	ctrl.addElement(new EditSelectOption(id+"_to_third_party_only_true",{
		optionDescr:"только для третьих лиц",optionId:"true",optionSelected:false}));		
	ctrl.addElement(new EditSelectOption(id+"_to_third_party_only_false",{
		optionDescr:"только не для третьих лиц",optionId:"false",optionSelected:false}));				
	
	this.addFilterContainer([	
		//город
		{"control":new ProductionCityEditObject(
			"production_city_id",id+"_production_city",false),
		"filter":{"sign":"e","keyFieldIds":["production_city_id"]}
		},	
		{"control":ctrl,
		"filter":{"sign":"e","valueFieldId":"to_third_party_only"}
		}		
	]);
	
	this.addCmdMakeReport();
	this.addCmdExcel();	
	
	var self = this;
	this.m_commandPanel.addElement(new ButtonCmd(id+"_btn_close",
		{"caption":"Закрыть",
		"onClick":function(){		
			self.getOnClose().call(this,1);
		}
		})
	);	
	
}
extend(RepPriceListTuning_View,ViewReport);

RepPriceListTuning_View.prototype.addExtraParams = function(struc){
	struc.templ="RepPriceListTuning";
}

RepPriceListTuning_View.prototype.makeReport = function(){
	RepPriceListTuning_View.superclass.makeReport.call(this,false);
	if (this.m_repResultOk){
		(new EditMoney("change_price_value",{
			"winObj":this.m_winObj,
			"attrs":{"value":"0"},
			"title":"изменить цену на данное значение"
		})).toDOM();		
		
		(new ButtonCtrl("change_price_inc",{
			"winObj":this.m_winObj,
			"glyph":"glyphicon-plus",
			"title":"увеличить",
			"onClick":function(){
				self.changePrices(1);
			}
		})).toDOM();	
		(new ButtonCtrl("change_price_dec",{
			"winObj":this.m_winObj,
			"glyph":"glyphicon-minus",
			"title":"уменьшить",
			"onClick":function(){
				self.changePrices(-1);
			}
		})).toDOM();	

		var self = this;
		
		//заголовок Наименование прайса
		(new EditCheckBox("chb_h_price_name",{
			"winObj":this.m_winObj,
			"title":"отметить все прайсы",
			"events":{
				"onChange":function(elem){
					var chb=DOMHandler.getElementsByAttr("chb_price_name",
						self.m_reportControl.m_node,"class",false);
					for (var i=0;i<chb.length;i++){
						chb[i].checked=elem.checked;
						var chb2=DOMHandler.getElementsByAttr(
							"chb_price_val_price_"+chb[i].getAttribute("priceId"),
							self.m_reportControl.m_node,"class",false);
						for (var i=0;i<chb2.length;i++){
							chb2[i].checked=elem.checked;
						}
						
					}
				}	
			}
		})).toDOM();
		// Прайсы по строкам
		var controls=DOMHandler.getElementsByAttr("chb_price_name",this.m_reportControl.m_node,"class",false);	
		for (var i=0;i<controls.length;i++){
			(new EditCheckBox(controls[i].id,{
				"attrs":{"class":"chb_price_name",
					"priceId":controls[i].getAttribute("priceId")},
				"winObj":this.m_winObj,
				"title":"отметить все цены по прайсу",
				"events":{
					"onChange":function(elem){
						var chb=DOMHandler.getElementsByAttr(
							"chb_price_val_price_"+elem.getAttribute("priceId"),
							self.m_reportControl.m_node,"class",false);
						for (var i=0;i<chb.length;i++){
							chb[i].checked=elem.checked;
						}
					}	
				}
			})).toDOM();			
		}

		//заголовок Продукция
		var controls=DOMHandler.getElementsByAttr("chb_product_descr",this.m_reportControl.m_node,"class",false);	
		for (var i=0;i<controls.length;i++){
			(new EditCheckBox(controls[i].id,{
				"attrs":{"class":"chb_product_descr",
					"productId":controls[i].getAttribute("productId")},
				"winObj":this.m_winObj,
				"title":"отметить всю продукцию",
				"events":{
					"onChange":function(elem){
						var chb=DOMHandler.getElementsByAttr(
							"chb_price_val_prod_"+elem.getAttribute("productId"),
							self.m_reportControl.m_node,"class",false);
						for (var i=0;i<chb.length;i++){
							chb[i].checked=elem.checked;
						}
					}	
				}
			})).toDOM();			
		}
		//Значения цен
		var controls=DOMHandler.getElementsByAttr("chb_price_val",this.m_reportControl.m_node,"class",false);	
		for (var i=0;i<controls.length;i++){
			(new EditCheckBox(controls[i].id,{
				"className":"chb_price_val chb_price_val_prod_"+controls[i].getAttribute("productId")+
					" "+"chb_price_val_price_"+controls[i].getAttribute("priceId"),
				"winObj":this.m_winObj,
				"title":"отметить для изменения"
			})).toDOM();			
		}
		
		//Обновление
		(new ButtonCmd("change_price_update",{
			"winObj":this.m_winObj,
			"caption":"Записать",
			"title":"сохранить измененные цены",
			"onClick":function(){
				var vals="";
				var price_ids="";
				var product_ids="";
				var c=DOMHandler.getElementsByAttr("price_changed",self.m_reportControl.m_node,"class",false);
				for (var i=0;i<c.length;i++){
					v = c[i].getElementsByTagName("span");
					if (v&&v.length){
						var val_n = v[0].childNodes[0];
						vals+=(vals=="")? "":",";
						vals+=val_n.nodeValue;
						price_ids+=(price_ids=="")? "":",";
						price_ids+=v[0].getAttribute("priceId");
						product_ids+=(product_ids=="")? "":",";
						product_ids+=v[0].getAttribute("productId");					
					}
				}
				if (vals.length){
					var contr = new ClientPriceListProduct_Controller(new ServConnector(HOST_NAME));
					contr.run("set_values",{
						"async":true,
						"func":function(){
							var c=DOMHandler.getElementsByAttr("price_changed",self.m_reportControl.m_node,"class",false);
							for (var i=0;i<c.length;i++){
								DOMHandler.removeClass(c[i],"price_changed");
							}
						},
						"cont":this,
						"params":{"product_ids":product_ids,
								"price_list_ids":price_ids,
								"vals":vals}
					});
				}
			}
		})).toDOM();	
	}
}
RepPriceListTuning_View.prototype.changePrices = function(sign){
	var price_change = nd("change_price_value").value;
	price_change.replace(".00","");
	price_change=parseFloat(price_change);
	if (price_change){
		var chb=DOMHandler.getElementsByAttr(
			"chb_price_val",
			this.m_reportControl.m_node,"class",false);
		for (var i=0;i<chb.length;i++){
			if (chb[i].checked){
				var v = chb[i].parentNode.getElementsByTagName("span");
				if (v&&v.length){
					var val_n = v[0].childNodes[0];
					var val = val_n.nodeValue.replace(".00","");
					val_n.nodeValue=(parseFloat(val)+price_change*sign).toFixed(2);
					if (v[0].getAttribute("oldVal")!=val_n.nodeValue){
						DOMHandler.addClass(chb[i].parentNode,"price_changed");
					}
					else{
						DOMHandler.removeClass(chb[i].parentNode,"price_changed");
					}
				}
			}
		}			
	}
}
RepPriceListTuning_View.prototype.toDOM = function(parent){
	this.m_cont = new ControlContainer(this.getId()+"_panel","div",{"className":"panel"});
	this.m_cont.toDOM(parent);
	RepPriceListTuning_View.superclass.toDOM.call(this,this.m_cont.m_node);
}
RepPriceListTuning_View.prototype.removeDOM = function(){
	RepPriceListTuning_View.superclass.removeDOM.call(this);
	this.m_cont.removeDOM();
}