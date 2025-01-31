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

function SertType_Controller(servConnector){
	options = {};
	options["listModelId"] = "SertType_Model";
	options["objModelId"] = "SertType_Model";
	SertType_Controller.superclass.constructor.call(this,"SertType_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_set_xslt_pattern();
	this.add_get_xslt_pattern();
	this.add_check_pattern();
	
}
extend(SertType_Controller,ControllerDb);

			SertType_Controller.prototype.addInsert = function(){
	SertType_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("xslt_pattern",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			SertType_Controller.prototype.addUpdate = function(){
	SertType_Controller.superclass.addUpdate.call(this);
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
	
	var param = new FieldString("xslt_pattern",options);
	
	pm.addParam(param);
	
	
}

			SertType_Controller.prototype.addDelete = function(){
	SertType_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			SertType_Controller.prototype.addGetList = function(){
	SertType_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldString("xslt_pattern",options));
}

			SertType_Controller.prototype.addGetObject = function(){
	SertType_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			SertType_Controller.prototype.add_set_xslt_pattern = function(){
	var pm = this.addMethodById('set_xslt_pattern');
	
				
		pm.addParam(new FieldString("xslt_pattern"));
	
			
}

			SertType_Controller.prototype.add_get_xslt_pattern = function(){
	var pm = this.addMethodById('get_xslt_pattern');
	
				
		pm.addParam(new FieldInt("id"));
	
			
}

			SertType_Controller.prototype.add_check_pattern = function(){
	var pm = this.addMethodById('check_pattern');
	
				
		pm.addParam(new FieldInt("sert_type_id"));
	
			
}

		