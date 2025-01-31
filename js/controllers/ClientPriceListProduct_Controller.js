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

function ClientPriceListProduct_Controller(servConnector){
	options = {};
	ClientPriceListProduct_Controller.superclass.constructor.call(this,"ClientPriceListProduct_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.add_get_obj();
	this.add_set_values();
	
}
extend(ClientPriceListProduct_Controller,ControllerDb);

			ClientPriceListProduct_Controller.prototype.addInsert = function(){
	ClientPriceListProduct_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("price_list_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("discount_volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("discount_total",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("pack_price",options);
	
	pm.addParam(param);
	
	
}

			ClientPriceListProduct_Controller.prototype.addUpdate = function(){
	ClientPriceListProduct_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("price_list_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_price_list_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_product_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("discount_volume",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("discount_total",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("pack_price",options);
	
	pm.addParam(param);
	
	
}

			ClientPriceListProduct_Controller.prototype.addDelete = function(){
	ClientPriceListProduct_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("price_list_id",options));
	pm.addParam(new FieldInt("product_id",options));
}

			ClientPriceListProduct_Controller.prototype.addGetList = function(){
	ClientPriceListProduct_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
}

			ClientPriceListProduct_Controller.prototype.add_get_obj = function(){
	var pm = this.addMethodById('get_obj');
	
				
		pm.addParam(new FieldInt("price_list_id"));
	
				
		pm.addParam(new FieldInt("product_id"));
	
			
}

			ClientPriceListProduct_Controller.prototype.add_set_values = function(){
	var pm = this.addMethodById('set_values');
	
				
		pm.addParam(new FieldString("price_list_ids"));
	
				
		pm.addParam(new FieldString("product_ids"));
	
				
		pm.addParam(new FieldString("vals"));
	
			
}

		