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

function ProductMeasureUnit_Controller(servConnector){
	options = {};
	options["listModelId"] = "ProductMeasureUnitList_Model";
	options["objModelId"] = "ProductMeasureUnitList_Model";
	ProductMeasureUnit_Controller.superclass.constructor.call(this,"ProductMeasureUnit_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ProductMeasureUnit_Controller,ControllerDb);

			ProductMeasureUnit_Controller.prototype.addInsert = function(){
	ProductMeasureUnit_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("measure_unit_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("calc_formula",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("in_use",options);
	
	pm.addParam(param);
	
	
}

			ProductMeasureUnit_Controller.prototype.addUpdate = function(){
	ProductMeasureUnit_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("product_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_product_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("measure_unit_id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_measure_unit_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("calc_formula",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("in_use",options);
	
	pm.addParam(param);
	
	
}

			ProductMeasureUnit_Controller.prototype.addDelete = function(){
	ProductMeasureUnit_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("measure_unit_id",options));
}

			ProductMeasureUnit_Controller.prototype.addGetList = function(){
	ProductMeasureUnit_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldString("product_descr",options));
	pm.addParam(new FieldInt("measure_unit_id",options));
	pm.addParam(new FieldString("measure_unit_descr",options));
	pm.addParam(new FieldText("calc_formula",options));
}

			ProductMeasureUnit_Controller.prototype.addGetObject = function(){
	ProductMeasureUnit_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("product_id",options));
	pm.addParam(new FieldInt("measure_unit_id",options));
}

		