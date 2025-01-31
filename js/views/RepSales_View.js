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
function RepSales_View(id,options){
	options = options || {};
	options.title = "Формирование отчета";
	options.controller = Report_Controller;
	options.methodId = "sales";
	options.reportType = "sales";
	options.viewId = "ViewHTMLXSLT";
	options.connect = options.connect;
	
	RepSales_View.superclass.constructor.call(this,
		id,options);
	
//Fields
	var fields = [
			//*** Клиенты ***
			{"id":"client_descr",
			"name":"Клиент",
			"agg":false,
			"filtered":false,
			//"filterControl":new ClientEditObject("doc_client_id","client",true)			
			"filterControl":new EditList(id+"_client_id",{
				"editContClassName":"input-group",
				"editViewControl":new ClientEditObject(
					"doc_client_id",
					id+"_filter_client",
					true,
					{"editContClassName":"input-group "+get_bs_col()+"3","noOpen":true}
				),
				"filterSign":"incl"
				}
			)			
			},
			
			{"id":"client_login_allowed",
			"name":"Работа через личный кабинет",
			"agg":false,
			"filtered":false,
			"filterControl":new EditCheckBox(uuid(),{})
			},
			{"id":"client_activity_descr",
			"name":"Вид деятельности",
			"agg":false,
			"filtered":false,
			//"filterControl":new ClientActivityEdit({fieldId:"client_activity_descr",controlId:"client_activity_descr",inLine:true})				
			"filterControl":new EditList(id+"_client_id",{
				"editContClassName":"input-group",
				"editViewControl":new ClientActivityEdit({
					"fieldId":"client_activity_descr",
					"controlId":id+"_filter_client_activity_descr",
					"inLine":true,
					"editContClassName":"input-group "+get_bs_col()+"3"
				}),
				"filterSign":"incl"
				}
			)						
			},
			{"id":"client_pay_type",
			"name":"Условия оплаты",
			"agg":false,
			"filtered":false,
			//"filterControl":new PayTypeEditObject("client_pay_type","client_pay_type",true)				
			"filterControl":new EditList(id+"_client_pay_type",{
				"editContClassName":"input-group",
				"editViewControl":new PayTypeEditObject(
					"client_pay_type",
					id+"_filter_client_pay_type",
					true,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)						
			},
			/*
			{"id":"client_pay_debt_days",
			"name":"Срок отсрочки платежа",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditNum(uuid(),{})
			"filterControl":new EditList(id+"_client_pay_debt_days",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"})
				}
			)									
			},
			*/
			{"id":"client_pay_debt_days",
			"name":"Максимальный допустипый срок просрочки",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditNum(uuid(),{})
			"filterControl":new EditList(id+"_client_pay_debt_days",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"												
				}
			)
			},
			
			{"id":"client_pay_debt_sum",
			"name":"Максимальная сумма просрочки",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditFloat(uuid(),{})
			"filterControl":new EditList(id+"_client_pay_debt_sum",{
				"editContClassName":"input-group",
				"editViewControl":new EditFloat(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
			
			{"id":"client_debt_period_days_descr",
			"name":"Срок дебиторской задолженности",
			"agg":false,
			"filtered":false,
			//"filterControl":new ClientDebtPeriodEdit({fieldId:"client_debt_period_days_descr",controlId:"client_debt_period_days_descr",inLine:true})
			"filterControl":new EditList(id+"_client_debt_period_days_descr",{
				"editContClassName":"input-group",
				"editViewControl":new ClientDebtPeriodEdit({
					"fieldId":"client_debt_period_days_descr",
					"controlId":id+"_filter_client_debt_period_days_descr",
					"inLine":true,
					"editContClassName":"input-group "+get_bs_col()+"3"					
				}),
				"filterSign":"incl"
				}
			)
			},
			
			{"id":"client_contracts_exist",
			"name":"Наличие договоров",
			"agg":false,
			"filtered":false,
			"filterControl":new EditCheckBox(uuid(),{})
			},
			{"id":"client_contract_end",
			"name":"Ближайший срок окончания договоров",
			"agg":false,
			"filtered":false,
			"filterControl":new EditDate(uuid(),{})
			/*
			"filterControl":new EditList(id+"_client_contract_end",{
				"editContClassName":"input-group",
				"editViewControl":new EditDate(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			*/
			},
			
			//*** Заявки ***
			{"id":"doc_number",
			"name":"№ заявки",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditNum("number",{})
			"filterControl":new EditList(id+"_doc_number",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
			
			{"id":"doc_date_time_descr",
			"name":"Дата подачи",
			"agg":false,
			"filtered":null,
			"filterControl":null
			},
						
			{"id":"doc_delivery_fact_date_descr",
			"name":"Дата фактической отгрузки",
			"agg":false,
			"filtered":null,
			"filterControl":null
			},			
			
			{"id":"firm_descr",
			"name":"Организация",
			"agg":false,
			"filtered":false,
			//"filterControl":new FirmEditObject("firm_descr","firm",true)
			"filterControl":new EditList(id+"_firm_descr",{
				"editContClassName":"input-group",
				"editViewControl":new FirmEditObject(
					"firm_descr",
					id+"_filter_firm_descr",
					true,null,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},
		
			{"id":"production_city_descr",
			"name":"Город отгрузки",
			"agg":false,
			"filtered":false,
			//"filterControl":new ProductionCityEditObject("production_city_descr","production_city",true)
			"filterControl":new EditList(id+"_production_city_descr",{
				"editContClassName":"input-group",
				"editViewControl":new ProductionCityEditObject(
					"production_city_descr",
					id+"_filter_production_city_descr",
					true,null,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
				
			)
			},							
			{"id":"doc_delivery_plan_date",
			"name":"Планируемая дата выполнения",
			"agg":false,
			"filtered":false,
			"filterControl":new EditDate(uuid(),{})
			/*
			"filterControl":new EditList(id+"_doc_delivery_plan_date",{
				"editContClassName":"input-group",
				"editViewControl":new EditDate(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			*/																											
			},
							
			{"id":"doc_in_time",
			"name":"Своевременное выполнение",
			"agg":false,
			"filtered":false,
			"filterControl":new EditCheckBox(uuid(),{})
			},
							
			{"id":"doc_user_descr",
			"name":"Ответственный",
			"agg":false,
			"filtered":false,
			//"filterControl":new UserEditObject("doc_user_id","user",true)
			"filterControl":new EditList(id+"_doc_user_descr",{
				"editContClassName":"input-group",
				"editViewControl":new UserEditObject(
					"doc_user_descr",
					id+"_filter_doc_user_descr",
					true,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},
			
			/*
			Убрал молча мутное поле				
			{"id":"doc_overlimit",
			"name":"Согласование сверхлимитной заявки",
			"agg":false,
			"filtered":false,
			"filterControl":new EditCheckBox(uuid(),{})
			},
			*/				
			{"id":"doc_delivery_type_descr",
			"name":"Тип доставки",
			"agg":false,
			"filtered":false,
			"filterControl":new DelivTypeEditObject({
				fieldId:"doc_delivery_type_descr",
				controlId:"delivery_type",
				inLine:true})
			},
			
			{"id":"doc_deliv_to_third_party",
			"name":"Доставка третьим лицам",
			"agg":false,
			"filtered":false,
			"filterControl":new EditCheckBox(uuid(),{})
			},				
			
			{"id":"doc_deliv_pay_bank",
			"name":"Доставка по безнал.расч.",
			"agg":false,
			"filtered":false,
			"filterControl":new EditCheckBox(uuid(),{})
			},				
			
			{"id":"doc_deliv_destination_descr",
			"name":"Адрес доставки",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditString(uuid())
			"filterControl":new EditList(id+"_doc_deliv_destination_descr",{
				"editContClassName":"input-group",
				"editViewControl":new EditString(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}				
			)
			},				
			{"id":"doc_deliv_period",
			"name":"Назначенное время доставки",
			"agg":false,
			"filtered":null,
			//"filterControl":new DeliveryPeriodEditObject("doc_deliv_period","doc_deliv_period",true)
			"filterControl":new EditList(id+"_doc_user_descr",{
				"editContClassName":"input-group",
				"editViewControl":new DeliveryPeriodEditObject(
					"doc_deliv_period",
					id+"_filter_doc_deliv_period",
					true,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},
			
			{"id":"doc_warehouse_descr",
			"name":"Склад отгрузки",
			"agg":false,
			"filtered":false,
			//"filterControl":new WarehouseEditObject("doc_warehouse_descr","warehouse",true)
			"filterControl":new EditList(id+"_doc_user_descr",{
				"editContClassName":"input-group",
				"editViewControl":new WarehouseEditObject(
					"doc_warehouse_descr",
					id+"_filter_doc_warehouse_descr",
					true,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},
							
			{"id":"doc_driver_descr",
			"name":"Водитель",
			"agg":false,
			"filtered":false,
			//"filterControl":new DriverEditObject("doc_driver_id","doc_driver",true)
			"filterControl":new EditList(id+"_doc_vehicle_descr",{
				"editContClassName":"input-group",
				"editViewControl":new DriverEditObject(
					"doc_driver_id",
					id+"_filter_doc_driver_id",
					true,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},	
						
			{"id":"doc_vehicle_descr",
			"name":"ТС",
			"agg":false,
			"filtered":false,
			//"filterControl":new VehicleEditObject({fieldId:"doc_vehicle_descr",controlId:"vehicle",inLine:true})
			"filterControl":new EditList(id+"_doc_vehicle_descr",{
				"editContClassName":"input-group",
				"editViewControl":new VehicleEditObject({
					"fieldId":"doc_vehicle_descr",
					"controlId":id+"_filter_doc_vehicle_descr",
					"inLine":true,
					"editContClassName":"input-group "+get_bs_col()+"3"
					}
				),
				"filterSign":"incl"
				}
			)
			},				
			
			{"id":"doc_ext_order_num",
			"name":"Номер счета",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditString(uuid())
			"filterControl":new EditList(id+"_doc_ext_order_num",{
				"editContClassName":"input-group",
				"editViewControl":new EditString(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
							
			{"id":"doc_ext_ship_num",
			"name":"Номер реализации",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditString(uuid())
			"filterControl":new EditList(id+"_doc_ext_ship_num",{
				"editContClassName":"input-group",
				"editViewControl":new EditString(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
				
			//added 26/07/23
			{"id":"doc_last_state",
			"name":"Последний статус заявки",
			"agg":false,
			"filtered":false,
			//"filterControl":new OrderStateEditObject('doc_state_id','doc_state_id',true)
			"filterControl":new EditList(id+"_doc_last_state",{
					"editContClassName":"input-group",
					"editViewControl":new OrderStateEditObject(
						"doc_last_state_id", //doc_state_id
						id+"_filter_doc_last_state_id",
						true,null,
						{"editContClassName":"input-group "+get_bs_col()+"3"}
					),
					"filterSign":"incl"
					}
			)},
			
			
			{"id":"doc_state_date_time",
			"name":"Дата статуса заявки",
			"agg":false,
			"filtered":false,
			"filterControl":new EditDate(uuid())
			/*
			"filterControl":new EditList(id+"_doc_state_date_time",{
				"editContClassName":"input-group",
				"editViewControl":new EditDate(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			*/
			},				
			
			{"id":"doc_state",
			"name":"Статус заявки",
			"agg":false,
			"filtered":false,
			//"filterControl":new OrderStateEditObject('doc_state_id','doc_state_id',true)
			"filterControl":new EditList(id+"_doc_state",{
				"editContClassName":"input-group",
				"editViewControl":new OrderStateEditObject(
					"doc_state_id", //doc_state_id
					id+"_filter_doc_state_id",
					true,null,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},
							
			{"id":"doc_state_user",
			"name":"Пользователь статуса заявки",
			"agg":false,
			"filtered":false,
			//"filterControl":new UserEditObject('doc_state_user','doc_state_user',true)
			"filterControl":new EditList(id+"_doc_state_user",{
				"editContClassName":"input-group",
				"editViewControl":new UserEditObject(
					"doc_state_user",
					id+"_filter_doc_state_user",
					true,null,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},				
			
			{"id":"doc_sales_manager_comment",
			"name":"Комментарий внутренний",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditString(uuid())
			"filterControl":new EditList(id+"_doc_sales_manager_comment",{
				"editContClassName":"input-group",
				"editViewControl":new EditText(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
							
			{"id":"doc_client_comment",
			"name":"Комментарий общий",
			"filtered":null,
			"agg":false,
			//"filterControl":new EditString(uuid())
			"filterControl":new EditList(id+"_doc_client_comment",{
				"editContClassName":"input-group",
				"editViewControl":new EditText(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},				
			
			//продукция
			{"id":"doct_product_descr",
			"name":"Продукция",
			"agg":false,
			"filtered":false,
			//"filterControl":new ProductEditObject("doct_product_descr","product",true)
			"filterControl":new EditList(id+"_doct_product_descr",{
				"editContClassName":"input-group",
				"editViewControl":new ProductEditObject(
					"doct_product_descr",
					id+"_filter_doct_product_descr",
					true,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},
			
			{"id":"doct_product_mes",
			"name":"Размеры продукции (одно поле)",
			"agg":false,
			"filtered":false,
			"filterControl":false
			},
									
			{"id":"doct_product_mes_length",
			"name":"Длина продукции",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditNum(uuid())
			"filterControl":new EditList(id+"_doct_product_mes_length",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
			
			{"id":"doct_product_mes_width",
			"name":"Ширина продукции ",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditNum(uuid())
			"filterControl":new EditList(id+"_doct_product_mes_width",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
			
			{"id":"doct_product_mes_height",
			"name":"Высота продукции ",
			"agg":false,
			"filtered":false,
			//"filterControl":new EditNum(uuid())
			"filterControl":new EditList(id+"_doct_product_mes_height",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			},
							
			{"id":"doct_base_measure_descr",
			"name":"Базовая единица",
			"agg":false,
			"filtered":null,
			//"filterControl":new MeasureUnitEditObject("doct_base_measure_descr","base_measure_unit",true
			"filterControl":new EditList(id+"_doc_user_descr",{
				"editContClassName":"input-group",
				"editViewControl":new MeasureUnitEditObject(
					"doct_base_measure_descr",
					id+"_filter_doct_base_measure_descr",
					true,null,
					{"editContClassName":"input-group "+get_bs_col()+"3"}
				),
				"filterSign":"incl"
				}
			)
			},				

			{"id":"doct_pack_exists",
			"name":"Наличие упаковки",
			"agg":false,
			"filtered":null,
			"filterControl":new EditCheckBox(uuid())
			},
			
			{"id":"doct_extra_price_category",
			"name":"Категория наценки",
			"agg":false,
			"filtered":false,
			"filterControl":new EditNum(uuid(),{})
			},				
			
			//facts
			{"id":"doc_city_route_distance",
			"name":"Километраж доставки город",
			"filtered":false,
			//"filterControl":new EditNum(uuid(),{}),
			"filterControl":new EditList(id+"_doc_city_route_distance",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),
			"agg":true
			},
							
			{"id":"doc_country_route_distance",
			"name":"Километраж доставки межгород",
			"filtered":false,
			//"filterControl":new EditNum(uuid(),{}),
			"filterControl":new EditList(id+"_doc_country_route_distance",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),			
			"agg":true
			},
							
			{"id":"doc_coord_count",
			"name":"Количество согласований",
			//"filterControl":new EditNum(uuid(),{}),
			"filterControl":new EditList(id+"_doc_coord_count",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),						
			"agg":true
			},	
						
			{"id":"doc_coord_time_sale_dep",
			"name":"Время согласования ОП",
			//"filterControl":new EditNum(uuid(),{}),
			"filterControl":new EditList(id+"_doc_coord_time_sale_dep",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),									
			"agg":true
			},
							
			{"id":"doc_coord_time_client",
			"name":"Время согласования клиентом",
			//"filterControl":new EditNum(uuid(),{}),
			"filterControl":new EditList(id+"_doc_coord_time_client",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),			
			"agg":true
			},
							
			{"id":"doct_quant",
			"name":"Кол-во в базовых единицах",
			"filtered":null,
			//"filterControl":new EditFloat(uuid(),{}),
			"filterControl":new EditList(id+"_doct_quant",{
				"editContClassName":"input-group",
				"editViewControl":new EditFloat(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),						
			"agg":true
			},				
			
			{"id":"doct_weight",
			"name":"Масса",
			"filtered":null,
			//"filterControl":new EditFloat(uuid(),{}),
			"filterControl":new EditList(id+"_doct_weight",{
				"editContClassName":"input-group",
				"editViewControl":new EditFloat(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),									
			"agg":true
			},				
			
			{"id":"doct_volume",
			"name":"Объем",
			"filtered":null,
			//"filterControl":new EditFloat(uuid(),{}),
			"filterControl":new EditList(id+"_doct_volume",{
				"editContClassName":"input-group",
				"editViewControl":new EditFloat(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),												
			"agg":true
			},							
			
			{"id":"doct_total",
			"name":"Стоимость продукции",
			"filtered":null,
			//"filterControl":new EditMoney(uuid(),{}),
			"filterControl":new EditList(id+"_doct_total",{
				"editContClassName":"input-group",
				"editViewControl":new EditMoney(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),												
			"agg":true
			},
			
			{"id":"doc_deliv_total",
			"name":"Стоимость доставки",
			"filtered":null,
			//"filterControl":new EditMoney(uuid(),{}),
			"filterControl":new EditList(id+"_doc_deliv_total",{
				"editContClassName":"input-group",
				"editViewControl":new EditMoney(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),															
			"agg":true
			},
			
			{"id":"doc_deliv_expenses",
			"name":"Затраты на доставку",
			"filtered":null,
			//"filterControl":new EditMoney(uuid(),{}),
			"filterControl":new EditList(id+"_doc_deliv_expenses",{
				"editContClassName":"input-group",
				"editViewControl":new EditMoney(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),																		
			"agg":true
			},
			
			{"id":"client_debt_days",
			"name":"Просроченная дебиторская задолженность (дни)",
			"filtered":null,
			//"filterControl":new EditNum(uuid(),{}),
			"filterControl":new EditList(id+"_client_debt_days",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),																					
			"agg":true
			},			
			
			{"id":"client_debt_total",
			"name":"Просроченная дебиторская задолженность (стоимость)",
			"filtered":null,
			//"filterControl":new EditFloat(uuid(),{}),
			"filterControl":new EditList(id+"_client_debt_total",{
				"editContClassName":"input-group",
				"editViewControl":new EditFloat(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			),																								
			"agg":true
			},
			
			{"id":"doc_customer_survey_points",
			"name":"Баллы опроса",
			"agg":true,
			"filtered":false,
			//"filterControl":new EditNum(uuid(),{})
			"filterControl":new EditList(id+"_doc_customer_survey_points",{
				"editContClassName":"input-group",
				"editViewControl":new EditNum(uuid(),{"editContClassName":"input-group "+get_bs_col()+"3"}),
				"filterSign":"incl"
				}
			)
			}			
						
	];	
	
	this.m_condFieldContainer = new RepCondFields(id+"_fields",{
		"fields":fields});
	
	this.m_groupFieldContainer = new RepGroupFields(id+"_groups",{
			"fields":fields});
	
	this.m_aggFieldContainer = new RepAggFields(id+"_agg_fields",{
		"fields":fields});
	
	var self = this;
	//вид даты
	this.m_ctrlDataType = new EditSelect(id+"_date_type",{
		labelCaption:"Вид даты:",
		contClassName:"form-group",
		editContClassName:"input-group "+get_bs_col()+"4",
		events:{
			change:function(){
				var f = self.m_ctrlDataType.getValue();				
				self.m_filter.setParamValue(self.m_ctrlPeriodFrom.getId(),"valueFieldId",f);
				self.m_filter.setParamValue(self.m_ctrlPeriodTo.getId(),"valueFieldId",f);
			}
		}
	});
	this.m_ctrlDataType.addElement(new EditSelectOption(id+"_date_type_date",{optionSelected:true,optionId:"doc_date_time",optionDescr:"Дата размещения"}));
	this.m_ctrlDataType.addElement(new EditSelectOption(id+"_date_type_deliv_date",{optionSelected:false,optionId:"doc_delivery_fact_date",optionDescr:"Дата отгрузки"}));
	
	//дата
	var period = new EditPeriodDateTime(id+"_period");
	var d_mask = "dd/mm/y hh:mmin:ss";
	this.m_ctrlPeriodFrom = period.getControlFrom();
	this.m_ctrlPeriodTo = period.getControlTo();
	
	this.m_ctrlPeriodFrom.setValue(DateHandler.dateToStr(DateHandler.getStartOfDate(new Date()),d_mask));
	this.m_ctrlPeriodTo.setValue(DateHandler.dateToStr(DateHandler.getEndOfDate(new Date()),d_mask));	

	this.m_ctrlShippedOnly = new EditCheckBox(id + "_shipped_only",{
		"labelClassName":"control-label " + get_bs_col()+"4" + " readOnly",
		"labelCaption":"Только отгруженные заявки:",
		"attrs":{"title":"Включать в отчет либо только отгруженные, либо все заявки"},
		"checked": true
		/*,
		"events":{
			"change":function(){
				self.switchShippedOnly();
			}
		}*/
	});	
	
	//все фильтры
	this.addFilterContainer([
		//!!!*** поле зависит ОТ ТИПА ДАТЫ ***!!!!
		{"control":this.m_ctrlPeriodFrom,
		"filter":{"sign":"ge","valueFieldId":"doc_date_time"}
		},
		{"control":this.m_ctrlPeriodTo,
		"filter":{"sign":"le","valueFieldId":"doc_date_time"}
		},
		{"control":this.m_ctrlShippedOnly,
		"filter":{"sign":"e","valueFieldId":"doc_order_delivered"}
		}		
		
	]);

	this.m_filterContainer.addElement(this.m_ctrlDataType);
	
	this.m_filterContainer.addElement(this.m_ctrlShippedOnly);
				
	this.addCmdFilter();
	this.addCmdMakeReport();
	this.addCmdPrint();
	this.addCmdExcel();
	
	this.addStoringControl(this.m_condFieldContainer);
	this.addStoringControl(this.m_groupFieldContainer);
	this.addStoringControl(this.m_aggFieldContainer);
}
extend(RepSales_View,PPViewReport);
/*
RepSales_View.prototype.switchShippedOnly = function(){
	var en = this.m_ctrlShippedOnly.getValue();
	this.m_ctrlDataType.setEnabled(en);
}
*/
RepSales_View.prototype.addExtraParams = function(struc){
	RepSales_View.superclass.addExtraParams.call(this,struc);	
	struc.templ="RepSales";
	//вид даты
}

