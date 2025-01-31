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

function Delivery_Controller(servConnector){
	options = {};
	Delivery_Controller.superclass.constructor.call(this,"Delivery_Controller",servConnector,options);	
	
	//methods
	this.add_unassigned_orders_list();
	this.add_assigned_orders_list();
	this.add_assigned_orders_for_client();
	this.add_add_extra_vehicle();
	this.add_extra_veh_select_list();
	this.add_delete_extra_vehicle();
	this.add_current_position_all();
	this.add_current_position_client();
	this.add_get_order_descr();
	this.add_assign_order_to_vehicle();
	this.add_remove_order();
	
}
extend(Delivery_Controller,ControllerDb);

			Delivery_Controller.prototype.add_unassigned_orders_list = function(){
	var pm = this.addMethodById('unassigned_orders_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("all_orders"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			Delivery_Controller.prototype.add_assigned_orders_list = function(){
	var pm = this.addMethodById('assigned_orders_list');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			Delivery_Controller.prototype.add_assigned_orders_for_client = function(){
	var pm = this.addMethodById('assigned_orders_for_client');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			Delivery_Controller.prototype.add_add_extra_vehicle = function(){
	var pm = this.addMethodById('add_extra_vehicle');
	
				
		pm.addParam(new FieldDate("date"));
	
				
		pm.addParam(new FieldInt("vehicle_id"));
	
			
}

			Delivery_Controller.prototype.add_extra_veh_select_list = function(){
	var pm = this.addMethodById('extra_veh_select_list');
	
				
		pm.addParam(new FieldDate("date"));
	
				
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

			Delivery_Controller.prototype.add_delete_extra_vehicle = function(){
	var pm = this.addMethodById('delete_extra_vehicle');
	
				
		pm.addParam(new FieldDate("date"));
	
				
		pm.addParam(new FieldInt("vehicle_id"));
	
			
}

			Delivery_Controller.prototype.add_current_position_all = function(){
	var pm = this.addMethodById('current_position_all');
	
}

			Delivery_Controller.prototype.add_current_position_client = function(){
	var pm = this.addMethodById('current_position_client');
	
				
		pm.addParam(new FieldDate("date"));
	
			
}

			Delivery_Controller.prototype.add_get_order_descr = function(){
	var pm = this.addMethodById('get_order_descr');
	
				
		pm.addParam(new FieldInt("doc_id"));
	
			
}

			Delivery_Controller.prototype.add_assign_order_to_vehicle = function(){
	var pm = this.addMethodById('assign_order_to_vehicle');
	
				
		pm.addParam(new FieldInt("order_id"));
	
				
		pm.addParam(new FieldInt("vehicle_id"));
	
				
		pm.addParam(new FieldInt("hour_id"));
	
				
		pm.addParam(new FieldDate("date"));
	
			
}

			Delivery_Controller.prototype.add_remove_order = function(){
	var pm = this.addMethodById('remove_order');
	
				
		pm.addParam(new FieldInt("order_id"));
	
			
}

		