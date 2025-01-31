/**	
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_js.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 * @author Andrey Mikhalevich <katrenplus@mail.ru>, 2017
 * @class
 * @classdesc Model class. Created from template build/templates/models/Model_js.xsl. !!!DO NOT MODEFY!!!
 
 * @extends Model
 
 * @requires core/extend.js
 * @requires core/Model.js
 
 * @param {string} id 
 * @param {Object} options
 */

function RepSale_Model(options){
	var id = 'RepSale_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Код заказа';
	filed_options.autoInc = false;	
	
	options.fields.doc_id = new FieldInt("doc_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Дата подачи';
	filed_options.autoInc = false;	
	
	options.fields.doc_date_time = new FieldDateTime("doc_date_time",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Дата отгрузки';
	filed_options.autoInc = false;	
	
	options.fields.doc_delivery_fact_date = new FieldDateTime("doc_delivery_fact_date",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_order_delivered = new FieldBool("doc_order_delivered",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_client_id = new FieldInt("doc_client_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Заказчик';
	filed_options.autoInc = false;	
	
	options.fields.client_descr = new FieldString("client_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_login_allowed = new FieldBool("client_login_allowed",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_activity_descr = new FieldString("client_activity_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_pay_type = new FieldString("client_pay_type",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_pay_debt_days = new FieldString("client_pay_debt_days",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_pay_ban_on_debt_days = new FieldString("client_pay_ban_on_debt_days",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_pay_debt_sum = new FieldString("client_pay_debt_sum",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_debt_period_days_descr = new FieldString("client_debt_period_days_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_debt_days = new FieldString("client_debt_days",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_debt_total = new FieldString("client_debt_total",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_contracts_exist = new FieldBool("client_contracts_exist",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_contract_end = new FieldString("client_contract_end",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Номер заказа';
	filed_options.autoInc = false;	
	
	options.fields.doc_number = new FieldString("doc_number",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Фирма';
	filed_options.autoInc = false;	
	
	options.fields.firm_descr = new FieldString("firm_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Город отгрузки';
	filed_options.autoInc = false;	
	
	options.fields.production_city_descr = new FieldString("production_city_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_delivery_plan_date = new FieldString("doc_delivery_plan_date",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_in_time = new FieldBool("doc_in_time",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_user_id = new FieldString("doc_user_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Пользователь';
	filed_options.autoInc = false;	
	
	options.fields.doc_user_descr = new FieldString("doc_user_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_overlimit = new FieldBool("doc_overlimit",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_delivery_type_descr = new FieldString("doc_delivery_type_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_deliv_to_third_party = new FieldBool("doc_deliv_to_third_party",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_deliv_destination_descr = new FieldString("doc_deliv_destination_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_deliv_period = new FieldString("doc_deliv_period",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_warehouse_id = new FieldString("doc_warehouse_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_warehouse_descr = new FieldString("doc_warehouse_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_driver_id = new FieldString("doc_driver_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_driver_descr = new FieldString("doc_driver_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_vehicle_id = new FieldString("doc_vehicle_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_vehicle_descr = new FieldString("doc_vehicle_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_ext_order_num = new FieldString("doc_ext_order_num",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_ext_ship_num = new FieldString("doc_ext_ship_num",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_state = new FieldString("doc_state",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_state_id = new FieldString("doc_state_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_state_date_time = new FieldString("doc_state_date_time",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_state_user = new FieldString("doc_state_user",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_sales_manager_comment = new FieldString("doc_sales_manager_comment",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_client_comment = new FieldString("doc_client_comment",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doc_customer_survey_question = new FieldString("doc_customer_survey_question",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Стоимость доставки';
	filed_options.autoInc = false;	
	
	options.fields.doc_deliv_total = new FieldString("doc_deliv_total",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_product_descr = new FieldString("doct_product_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_product_mes = new FieldString("doct_product_mes",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_product_mes_length = new FieldString("doct_product_mes_length",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_product_mes_width = new FieldString("doct_product_mes_width",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_product_mes_height = new FieldString("doct_product_mes_height",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_base_measure_id = new FieldString("doct_base_measure_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_base_measure_descr = new FieldString("doct_base_measure_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.doct_pack_exists = new FieldBool("doct_pack_exists",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Киллометраж доставки город';
	filed_options.autoInc = false;	
	
	options.fields.doc_city_route_distance = new FieldString("doc_city_route_distance",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Киллометраж доставки межгород';
	filed_options.autoInc = false;	
	
	options.fields.doc_country_route_distance = new FieldString("doc_country_route_distance",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Количество согласований';
	filed_options.autoInc = false;	
	
	options.fields.doc_coord_count = new FieldInt("doc_coord_count",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Время согласования ОП';
	filed_options.autoInc = false;	
	
	options.fields.doc_coord_time_sale_dep = new FieldString("doc_coord_time_sale_dep",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Время согласования ОП';
	filed_options.autoInc = false;	
	
	options.fields.doc_coord_time_client = new FieldString("doc_coord_time_client",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Кол-во в базовых единицах';
	filed_options.autoInc = false;	
	
	options.fields.doct_quant = new FieldString("doct_quant",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Масса';
	filed_options.autoInc = false;	
	
	options.fields.doct_weight = new FieldString("doct_weight",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Объем';
	filed_options.autoInc = false;	
	
	options.fields.doct_volume = new FieldString("doct_volume",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Стоимость продукции';
	filed_options.autoInc = false;	
	
	options.fields.doct_total = new FieldString("doct_total",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Просроченная дебиторская задолженность (дни)';
	filed_options.autoInc = false;	
	
	options.fields.client_debt_days = new FieldString("client_debt_days",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Просроченная дебиторская задолженность (стоимость)';
	filed_options.autoInc = false;	
	
	options.fields.client_debt_total = new FieldString("client_debt_total",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Баллы опроса';
	filed_options.autoInc = false;	
	
	options.fields.doc_customer_survey_points = new FieldString("doc_customer_survey_points",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.sys_level_val = new FieldString("sys_level_val",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.sys_level_count = new FieldString("sys_level_count",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.sys_level_col_count = new FieldString("sys_level_col_count",filed_options);
	
		RepSale_Model.superclass.constructor.call(this,id,options);
}
extend(RepSale_Model,Model);

