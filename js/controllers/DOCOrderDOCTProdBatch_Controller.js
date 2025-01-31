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

function DOCOrderDOCTProdBatch_Controller(servConnector){
	options = {};
	options["listModelId"] = "DOCOrderDOCTProdBatchList_Model";
	options["objModelId"] = "DOCOrderDOCTProdBatchList_Model";
	DOCOrderDOCTProdBatch_Controller.superclass.constructor.call(this,"DOCOrderDOCTProdBatch_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(DOCOrderDOCTProdBatch_Controller,ControllerDb);

			DOCOrderDOCTProdBatch_Controller.prototype.addInsert = function(){
	DOCOrderDOCTProdBatch_Controller.superclass.addInsert.call(this);
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
	options["alias"]="Ссылка 1с";
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Description 1с";
	var param = new FieldText("batch_descr",options);
	
	pm.addParam(param);
	
	
}

			DOCOrderDOCTProdBatch_Controller.prototype.addUpdate = function(){
	DOCOrderDOCTProdBatch_Controller.superclass.addUpdate.call(this);
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
	
	param = new FieldInt("old_login_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="Ссылка 1с";
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Description 1с";
	var param = new FieldText("batch_descr",options);
	
	pm.addParam(param);
	
	
}

			DOCOrderDOCTProdBatch_Controller.prototype.addDelete = function(){
	DOCOrderDOCTProdBatch_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
	pm.addParam(new FieldInt("login_id",options));
}

			DOCOrderDOCTProdBatch_Controller.prototype.addGetList = function(){
	DOCOrderDOCTProdBatch_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
	pm.addParam(new FieldString("ext_id",options));
	pm.addParam(new FieldText("batch_descr",options));
		var options = {};
		
			options["required"]=true;
						
		pm.addParam(new FieldString("view_id",options));
	
}

			DOCOrderDOCTProdBatch_Controller.prototype.addGetObject = function(){
	DOCOrderDOCTProdBatch_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldString("view_id",options));
	pm.addParam(new FieldInt("line_number",options));
}

		