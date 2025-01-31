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

function Product_Controller(servConnector){
	options = {};
	options["listModelId"] = "ProductList_Model";
	options["objModelId"] = "ProductDialog_Model";
	Product_Controller.superclass.constructor.call(this,"Product_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_get_list_for_order();
	this.add_get_filter_list();
	
}
extend(Product_Controller,ControllerDb);

			Product_Controller.prototype.addInsert = function(){
	Product_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_length_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("mes_length_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_length_fix",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_fix_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_min_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_max_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_def_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_length_seq",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("mes_length_vals",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_width_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("mes_width_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_width_fix",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_fix_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_min_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_max_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_def_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_width_seq",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("mes_width_vals",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_height_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("mes_height_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_height_fix",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_fix_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_min_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_max_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_def_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_height_seq",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("mes_height_vals",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("base_measure_unit_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("order_measure_unit_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("base_measure_unit_vol_m",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("base_measure_unit_weight_t",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("pack_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_default",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_not_free",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_full_package_only",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("extra_pay_for_abnormal_size",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("extra_pay_for_abn_size_always",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("extra_pay_calc_formula",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("warehouses_str",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("lot_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("lot_volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("sert_type_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name_for_1c",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("product_group_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			Product_Controller.prototype.addUpdate = function(){
	Product_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_length_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("mes_length_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_length_fix",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_fix_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_min_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_max_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length_def_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_length_seq",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("mes_length_vals",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_width_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("mes_width_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_width_fix",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_fix_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_min_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_max_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width_def_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_width_seq",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("mes_width_vals",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_height_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("mes_height_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_height_fix",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_fix_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_min_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_max_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height_def_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("mes_height_seq",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("mes_height_vals",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("base_measure_unit_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("order_measure_unit_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("base_measure_unit_vol_m",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("base_measure_unit_weight_t",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("pack_name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_default",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_not_free",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_full_package_only",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("extra_pay_for_abnormal_size",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("extra_pay_for_abn_size_always",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("extra_pay_calc_formula",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("warehouses_str",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("lot_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("lot_volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("sert_type_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name_for_1c",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("product_group_id",options);
	
	pm.addParam(param);
	
	
}

			Product_Controller.prototype.addDelete = function(){
	Product_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Product_Controller.prototype.addGetList = function(){
	Product_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
}

			Product_Controller.prototype.addGetObject = function(){
	Product_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			Product_Controller.prototype.add_get_list_for_order = function(){
	var pm = this.addMethodById('get_list_for_order');
	
				
		pm.addParam(new FieldInt("warehouse_id"));
	
			
}

			Product_Controller.prototype.add_get_filter_list = function(){
	var pm = this.addMethodById('get_filter_list');
	
}

		