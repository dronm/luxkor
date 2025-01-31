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

function ClientPriceList_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientPriceListList_Model";
	options["objModelId"] = "ClientPriceListDialog_Model";
	ClientPriceList_Controller.superclass.constructor.call(this,"ClientPriceList_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_tune();
	this.add_print_price();
	
}
extend(ClientPriceList_Controller,ControllerDb);

			ClientPriceList_Controller.prototype.addInsert = function(){
	ClientPriceList_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("to_third_party_only",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("part_ship_do_not_change_price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("min_order_quant",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("default_price_list",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			ClientPriceList_Controller.prototype.addUpdate = function(){
	ClientPriceList_Controller.superclass.addUpdate.call(this);
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
	
	var param = new FieldInt("production_city_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("to_third_party_only",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("part_ship_do_not_change_price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("min_order_quant",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("default_price_list",options);
	
	pm.addParam(param);
	
	
}

			ClientPriceList_Controller.prototype.addDelete = function(){
	ClientPriceList_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ClientPriceList_Controller.prototype.addGetList = function(){
	ClientPriceList_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
}

			ClientPriceList_Controller.prototype.addGetObject = function(){
	ClientPriceList_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			ClientPriceList_Controller.prototype.add_tune = function(){
	var pm = this.addMethodById('tune');
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldString("templ"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			ClientPriceList_Controller.prototype.add_print_price = function(){
	var pm = this.addMethodById('print_price');
	
				
		pm.addParam(new FieldInt("price_id"));
	
				
		pm.addParam(new FieldString("templ"));
	
			
}

		