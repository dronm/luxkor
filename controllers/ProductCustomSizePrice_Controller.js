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

function ProductCustomSizePrice_Controller(servConnector){
	options = {};
	options["listModelId"] = "ProductCustomSizePrice_Model";
	options["objModelId"] = "ProductCustomSizePrice_Model";
	ProductCustomSizePrice_Controller.superclass.constructor.call(this,"ProductCustomSizePrice_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ProductCustomSizePrice_Controller,ControllerDb);

			ProductCustomSizePrice_Controller.prototype.addInsert = function(){
	ProductCustomSizePrice_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("category",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("quant",options);
	
	pm.addParam(param);
	
	
}

			ProductCustomSizePrice_Controller.prototype.addUpdate = function(){
	ProductCustomSizePrice_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_product_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("category",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_category",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("price",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("quant",options);
	
	pm.addParam(param);
	
	
}

			ProductCustomSizePrice_Controller.prototype.addDelete = function(){
	ProductCustomSizePrice_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("category",options));
}

			ProductCustomSizePrice_Controller.prototype.addGetList = function(){
	ProductCustomSizePrice_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("category",options));
	pm.addParam(new FieldFloat("price",options));
	pm.addParam(new FieldFloat("quant",options));
}

			ProductCustomSizePrice_Controller.prototype.addGetObject = function(){
	ProductCustomSizePrice_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("category",options));
}

		