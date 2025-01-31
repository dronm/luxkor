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

function ReportVariant_Controller(servConnector){
	options = {};
	options["objModelId"] = "ReportVariant_Model";
	ReportVariant_Controller.superclass.constructor.call(this,"ReportVariant_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	
}
extend(ReportVariant_Controller,ControllerDb);

			ReportVariant_Controller.prototype.addInsert = function(){
	ReportVariant_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("report_type",options);
	options["values"] = 'sales';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("data",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			ReportVariant_Controller.prototype.addUpdate = function(){
	ReportVariant_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("user_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	param = new FieldEnum("report_type",options);
	options["values"] = 'sales';
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("data",options);
	
	pm.addParam(param);
	
	
}

			ReportVariant_Controller.prototype.addDelete = function(){
	ReportVariant_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ReportVariant_Controller.prototype.addGetList = function(){
	ReportVariant_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
		var options = {};
		
			options["required"]=true;
						
		pm.addParam(new FieldString("report_type",options));
	
}

			ReportVariant_Controller.prototype.addGetObject = function(){
	ReportVariant_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

		