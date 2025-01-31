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

function DOCOrderDOCTProduct_Controller(servConnector){
	options = {};
	options["listModelId"] = "DOCOrderDOCTProductList_Model";
	options["objModelId"] = "DOCOrderDOCTProductDialog_Model";
	DOCOrderDOCTProduct_Controller.superclass.constructor.call(this,"DOCOrderDOCTProduct_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_get_object_for_divis();
	
}
extend(DOCOrderDOCTProduct_Controller,ControllerDb);

			DOCOrderDOCTProduct_Controller.prototype.addInsert = function(){
	DOCOrderDOCTProduct_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("view_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("line_number",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("login_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Продукция";
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("measure_unit_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Количество";
	var param = new FieldFloat("quant",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("quant_confirmed",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Количество";
	var param = new FieldFloat("quant_base_measure_unit",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("quant_confirmed_base_measure_unit",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("weight",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Цена";
	var param = new FieldFloat("price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("price_edit",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Сумма";
	var param = new FieldFloat("total",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Сумма";
	var param = new FieldFloat("total_pack",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_in_price",options);
	
	pm.addParam(param);
	
		var options = {};
						
		pm.addParam(new FieldInt("warehouse_id",options));
	
		var options = {};
						
		pm.addParam(new FieldInt("client_id",options));
	
		var options = {};
						
		pm.addParam(new FieldBool("deliv_to_third_party",options));
	
	
}

			DOCOrderDOCTProduct_Controller.prototype.addUpdate = function(){
	DOCOrderDOCTProduct_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldString("view_id",options);
	
	pm.addParam(param);
	
	param = new FieldString("old_view_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("line_number",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_line_number",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("login_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Продукция";
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_length",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_width",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("mes_height",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("measure_unit_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Количество";
	var param = new FieldFloat("quant",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("quant_confirmed",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Количество";
	var param = new FieldFloat("quant_base_measure_unit",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("quant_confirmed_base_measure_unit",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("weight",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Цена";
	var param = new FieldFloat("price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("price_edit",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Сумма";
	var param = new FieldFloat("total",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Сумма";
	var param = new FieldFloat("total_pack",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_exists",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("pack_in_price",options);
	
	pm.addParam(param);
	
		var options = {};
						
		pm.addParam(new FieldInt("warehouse_id",options));
	
		var options = {};
						
		pm.addParam(new FieldInt("client_id",options));
	
		var options = {};
						
		pm.addParam(new FieldBool("deliv_to_third_party",options));
	
	
}

			DOCOrderDOCTProduct_Controller.prototype.addDelete = function(){
	DOCOrderDOCTProduct_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
}

			DOCOrderDOCTProduct_Controller.prototype.addGetList = function(){
	DOCOrderDOCTProduct_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
		var options = {};
		
			options["required"]=true;
						
		pm.addParam(new FieldString("view_id",options));
	
}

			DOCOrderDOCTProduct_Controller.prototype.addGetObject = function(){
	DOCOrderDOCTProduct_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
}

			DOCOrderDOCTProduct_Controller.prototype.add_get_object_for_divis = function(){
	var pm = this.addMethodById('get_object_for_divis');
	
				
		pm.addParam(new FieldInt("line_number"));
	
				
		pm.addParam(new FieldString("view_id"));
	
			
}

		