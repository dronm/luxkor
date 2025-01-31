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

function TemplateParam_Controller(servConnector){
	options = {};
	options["listModelId"] = "TemplateParamList_Model";
	TemplateParam_Controller.superclass.constructor.call(this,"TemplateParam_Controller",servConnector,options);	
	
	//methods
	this.addGetList();
	this.add_set_value();
	
}
extend(TemplateParam_Controller,ControllerDb);

			TemplateParam_Controller.prototype.addGetList = function(){
	TemplateParam_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("template",options));
	pm.addParam(new FieldString("param",options));
	pm.addParam(new FieldText("val",options));
}

			TemplateParam_Controller.prototype.add_set_value = function(){
	var pm = this.addMethodById('set_value');
	
				
		pm.addParam(new FieldString("template"));
	
				
		pm.addParam(new FieldString("param"));
	
				
		pm.addParam(new FieldText("val"));
	
			
}

		