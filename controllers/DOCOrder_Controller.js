/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires common/functions.js
 * @requires core/ControllerDb.js
*/
//ф
/* constructor */

function DOCOrder_Controller(servConnector){
	options = {};
	options["objModelId"] = "DOCOrderDialog_Model";
	DOCOrder_Controller.superclass.constructor.call(this,"DOCOrder_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.add_divide();
	this.addDelete();
	this.add_get_new_list();
	this.add_get_current_list();
	this.add_get_current_for_representative_list();
	this.add_get_current_for_client_list();
	this.add_get_current_for_production_list();
	this.add_get_closed_list();
	this.addGetObject();
	this.add_get_cust_survey();
	this.add_get_divis();
	this.add_before_open();
	this.add_get_actions();
	this.add_get_print();
	this.add_download_print();
	this.add_get_print_check();
	this.add_set_ready();
	this.add_get_shipment();
	this.add_get_products_descr();
	this.add_cancel();
	this.add_cancel_last_state();
	this.add_get_history();
	this.add_pass_to_production();
	this.add_get_print_all();
	this.add_get_print_cnt();
	this.add_set_printed();
	this.add_set_shipped();
	this.add_get_ship_docs();
	this.add_print_ship_docs();
	this.add_set_paid();
	this.add_set_not_paid();
	this.add_paid_to_acc();
	this.add_set_paid_by_bank();
	this.add_paid_by_bank_to_acc();
	this.add_set_closed();
	this.add_print_order();
	this.add_ext_ship_exists();
	this.add_ext_invoice_exists();
	this.add_ext_order_exists();
	this.add_print_torg12();
	this.add_print_invoice();
	this.add_print_upd();
	this.add_print_ttn();
	this.add_print_passport();
	this.add_pay_orders_list();
	this.add_fill_cust_surv();
	this.add_set_cancel_cause();
	this.add_calc_totals();
	this.add_calc_quant();
	this.add_recalc_product_prices();
	this.add_calc_deliv_cost();
	this.add_get_pop_warehouse();
	this.add_get_children();
	this.add_get_cancel_cause();
	this.add_get_append_list();
	this.add_append();
	
}
extend(DOCOrder_Controller,ControllerDb);

			DOCOrder_Controller.prototype.addInsert = function(){
	DOCOrder_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="Дата пдч.";
	var param = new FieldDateTime("date_time",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Номер";
	var param = new FieldString("number",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Проведен";
	var param = new FieldBool("processed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("client_number",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDate("delivery_plan_date",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDateTime("delivery_fact_date",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDate("product_plan_date",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("sales_manager_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("client_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("marketing_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_destination_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("deliv_type",options);
	options["values"] = 'by_supplier,by_client';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_to_third_party",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_send_sms",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_add_cost_to_product",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_period_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("deliv_responsable",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("deliv_responsable_tel",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("tel",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_vehicle_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_cost_opt_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_vehicle_count",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("deliv_total",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_total_edit",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_pack",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_quant",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_weight",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("printed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_order_num",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_order_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_ship_num",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_ship_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_invoice_num",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_invoice_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDateTime("ext_invoice_date_time",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDateTime("cust_surv_date_time",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("cust_surv_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("product_str",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("product_ids",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("submit_user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("paid",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("paid_by_bank",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("acc_pko",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("city_route_distance",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("country_route_distance",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("destination_to_ttn",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("deliv_expenses",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_pay_bank",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
		var options = {};
		
			options["required"]=true;
						
		pm.addParam(new FieldString("view_id",options));
	
	
}

			DOCOrder_Controller.prototype.addUpdate = function(){
	DOCOrder_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Дата пдч.";
	var param = new FieldDateTime("date_time",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Номер";
	var param = new FieldString("number",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Проведен";
	var param = new FieldBool("processed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("client_number",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDate("delivery_plan_date",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDateTime("delivery_fact_date",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDate("product_plan_date",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("firm_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("sales_manager_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("client_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("marketing_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("warehouse_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_destination_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("deliv_type",options);
	options["values"] = 'by_supplier,by_client';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_to_third_party",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_send_sms",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_add_cost_to_product",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_period_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("deliv_responsable",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("deliv_responsable_tel",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("tel",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_vehicle_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_cost_opt_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("deliv_vehicle_count",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("deliv_total",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_total_edit",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_pack",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_quant",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("total_weight",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("printed",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_order_num",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_order_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_ship_num",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_ship_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_invoice_num",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_invoice_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDateTime("ext_invoice_date_time",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldDateTime("cust_surv_date_time",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("cust_surv_comment",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("product_str",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("product_ids",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("submit_user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("paid",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("paid_by_bank",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("acc_pko",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("city_route_distance",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("country_route_distance",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("destination_to_ttn",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("deliv_expenses",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deliv_pay_bank",options);
	
	pm.addParam(param);
	
		var options = {};
		
			options["required"]=true;
						
		pm.addParam(new FieldString("view_id",options));
	
	
}

			DOCOrder_Controller.prototype.add_divide = function(){
	var pm = this.addMethodById('divide');
	
				
		pm.addParam(new FieldString("view_id"));
	
				
		pm.addParam(new FieldInt("main_doc_id"));
	
				
		pm.addParam(new FieldDate("delivery_plan_date"));
	
				
		pm.addParam(new FieldText("sales_manager_comment"));
	
				
		pm.addParam(new FieldInt("deliv_period_id"));
	
				
		pm.addParam(new FieldInt("deliv_vehicle_count"));
	
				
		pm.addParam(new FieldInt("deliv_cost_opt_id"));
	
				
		pm.addParam(new FieldFloat("deliv_total"));
	
				
		pm.addParam(new FieldBool("deliv_total_edit"));
	
			
}

			DOCOrder_Controller.prototype.addDelete = function(){
	DOCOrder_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			DOCOrder_Controller.prototype.add_get_new_list = function(){
	var pm = this.addMethodById('get_new_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			DOCOrder_Controller.prototype.add_get_current_list = function(){
	var pm = this.addMethodById('get_current_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			DOCOrder_Controller.prototype.add_get_current_for_representative_list = function(){
	var pm = this.addMethodById('get_current_for_representative_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			DOCOrder_Controller.prototype.add_get_current_for_client_list = function(){
	var pm = this.addMethodById('get_current_for_client_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			DOCOrder_Controller.prototype.add_get_current_for_production_list = function(){
	var pm = this.addMethodById('get_current_for_production_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			DOCOrder_Controller.prototype.add_get_closed_list = function(){
	var pm = this.addMethodById('get_closed_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			DOCOrder_Controller.prototype.addGetObject = function(){
	DOCOrder_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			DOCOrder_Controller.prototype.add_get_cust_survey = function(){
	var pm = this.addMethodById('get_cust_survey');
	
				
		pm.addParam(new FieldInt("id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_divis = function(){
	var pm = this.addMethodById('get_divis');
	
				
		pm.addParam(new FieldInt("id"));
	
				
		pm.addParam(new FieldString("view_id"));
	
			
}

			DOCOrder_Controller.prototype.add_before_open = function(){
	var pm = this.addMethodById('before_open');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
				
		pm.addParam(new FieldString("view_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_actions = function(){
	var pm = this.addMethodById('get_actions');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_print = function(){
	var pm = this.addMethodById('get_print');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
				
		pm.addParam(new FieldString("templ"));
	
			
}

			DOCOrder_Controller.prototype.add_download_print = function(){
	var pm = this.addMethodById('download_print');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_print_check = function(){
	var pm = this.addMethodById('get_print_check');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
				
		pm.addParam(new FieldString("templ"));
	
			
}

			DOCOrder_Controller.prototype.add_set_ready = function(){
	var pm = this.addMethodById('set_ready');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_shipment = function(){
	var pm = this.addMethodById('get_shipment');
	
				
		pm.addParam(new FieldInt("id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_products_descr = function(){
	var pm = this.addMethodById('get_products_descr');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_cancel = function(){
	var pm = this.addMethodById('cancel');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_cancel_last_state = function(){
	var pm = this.addMethodById('cancel_last_state');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_history = function(){
	var pm = this.addMethodById('get_history');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_pass_to_production = function(){
	var pm = this.addMethodById('pass_to_production');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_print_all = function(){
	var pm = this.addMethodById('get_print_all');
	
				
		pm.addParam(new FieldString("templ"));
	
			
}

			DOCOrder_Controller.prototype.add_get_print_cnt = function(){
	var pm = this.addMethodById('get_print_cnt');
	
}

			DOCOrder_Controller.prototype.add_set_printed = function(){
	var pm = this.addMethodById('set_printed');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_set_shipped = function(){
	var pm = this.addMethodById('set_shipped');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
				
		pm.addParam(new FieldString("view_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_ship_docs = function(){
	var pm = this.addMethodById('get_ship_docs');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_print_ship_docs = function(){
	var pm = this.addMethodById('print_ship_docs');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_set_paid = function(){
	var pm = this.addMethodById('set_paid');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_set_not_paid = function(){
	var pm = this.addMethodById('set_not_paid');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_paid_to_acc = function(){
	var pm = this.addMethodById('paid_to_acc');
	
}

			DOCOrder_Controller.prototype.add_set_paid_by_bank = function(){
	var pm = this.addMethodById('set_paid_by_bank');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_paid_by_bank_to_acc = function(){
	var pm = this.addMethodById('paid_by_bank_to_acc');
	
}

			DOCOrder_Controller.prototype.add_set_closed = function(){
	var pm = this.addMethodById('set_closed');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_print_order = function(){
	var pm = this.addMethodById('print_order');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_ext_ship_exists = function(){
	var pm = this.addMethodById('ext_ship_exists');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_ext_invoice_exists = function(){
	var pm = this.addMethodById('ext_invoice_exists');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_ext_order_exists = function(){
	var pm = this.addMethodById('ext_order_exists');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_print_torg12 = function(){
	var pm = this.addMethodById('print_torg12');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_print_invoice = function(){
	var pm = this.addMethodById('print_invoice');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_print_upd = function(){
	var pm = this.addMethodById('print_upd');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_print_ttn = function(){
	var pm = this.addMethodById('print_ttn');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_print_passport = function(){
	var pm = this.addMethodById('print_passport');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_pay_orders_list = function(){
	var pm = this.addMethodById('pay_orders_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			DOCOrder_Controller.prototype.add_fill_cust_surv = function(){
	var pm = this.addMethodById('fill_cust_surv');
	
				
		pm.addParam(new FieldString("view_id"));
	
			
}

			DOCOrder_Controller.prototype.add_set_cancel_cause = function(){
	var pm = this.addMethodById('set_cancel_cause');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
				
		pm.addParam(new FieldText("cause"));
	
			
}

			DOCOrder_Controller.prototype.add_calc_totals = function(){
	var pm = this.addMethodById('calc_totals');
	
				
		pm.addParam(new FieldInt("warehouse_id"));
	
				
		pm.addParam(new FieldInt("client_id"));
	
				
		pm.addParam(new FieldInt("product_id"));
	
				
		pm.addParam(new FieldInt("mes_length"));
	
				
		pm.addParam(new FieldInt("mes_width"));
	
				
		pm.addParam(new FieldInt("mes_height"));
	
				
		pm.addParam(new FieldFloat("quant"));
	
				
		pm.addParam(new FieldInt("measure_unit_id"));
	
				
		pm.addParam(new FieldBool("pack"));
	
				
		pm.addParam(new FieldBool("pack_in_price"));
	
				
		pm.addParam(new FieldBool("deliv_to_third_party"));
	
				
		pm.addParam(new FieldBool("price_edit"));
	
				
		pm.addParam(new FieldFloat("price"));
	
			
}

			DOCOrder_Controller.prototype.add_calc_quant = function(){
	var pm = this.addMethodById('calc_quant');
	
				
		pm.addParam(new FieldInt("product_id"));
	
				
		pm.addParam(new FieldInt("measure_unit_id"));
	
				
		pm.addParam(new FieldInt("mes_length"));
	
				
		pm.addParam(new FieldInt("mes_width"));
	
				
		pm.addParam(new FieldInt("mes_height"));
	
				
		pm.addParam(new FieldFloat("quant"));
	
				
		pm.addParam(new FieldInt("measure_unit_id_from"));
	
			
}

			DOCOrder_Controller.prototype.add_recalc_product_prices = function(){
	var pm = this.addMethodById('recalc_product_prices');
	
				
		pm.addParam(new FieldString("view_id"));
	
				
		pm.addParam(new FieldInt("warehouse_id"));
	
				
		pm.addParam(new FieldInt("client_id"));
	
				
		pm.addParam(new FieldFloat("deliv_cost"));
	
				
		pm.addParam(new FieldBool("deliv_to_third_party"));
	
				
		pm.addParam(new FieldBool("deliv_add_cost_to_product"));
	
			
}

			DOCOrder_Controller.prototype.add_calc_deliv_cost = function(){
	var pm = this.addMethodById('calc_deliv_cost');
	
				
		pm.addParam(new FieldInt("cost_opt_id"));
	
				
		pm.addParam(new FieldInt("client_destination_id"));
	
				
		pm.addParam(new FieldInt("warehouse_id"));
	
				
		pm.addParam(new FieldInt("include_route"));
	
			
}

			DOCOrder_Controller.prototype.add_get_pop_warehouse = function(){
	var pm = this.addMethodById('get_pop_warehouse');
	
				
		pm.addParam(new FieldInt("firm_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_children = function(){
	var pm = this.addMethodById('get_children');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_cancel_cause = function(){
	var pm = this.addMethodById('get_cancel_cause');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_get_append_list = function(){
	var pm = this.addMethodById('get_append_list');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			DOCOrder_Controller.prototype.add_append = function(){
	var pm = this.addMethodById('append');
	
				
		pm.addParam(new FieldInt("target_doc_id"));
	
				
		pm.addParam(new FieldString("source_doc_id_list"));
	
			
}

		