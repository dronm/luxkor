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

function Constant_Controller(servConnector){
	options = {};
	options["listModelId"] = "ConstantList_Model";
	options["objModelId"] = "ConstantList_Model";
	Constant_Controller.superclass.constructor.call(this,"Constant_Controller",servConnector,options);	
	
	//methods
	this.add_set_value();
	this.addGetList();
	this.addGetObject();
	this.add_get_values();
	
}
extend(Constant_Controller,ControllerDb);

			Constant_Controller.prototype.add_set_value = function(){
	var pm = this.addMethodById('set_value');
	
				
		pm.addParam(new FieldString("id"));
	
				
		pm.addParam(new FieldString("val"));
	
			
}

			Constant_Controller.prototype.addGetList = function(){
	Constant_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldString("id",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldText("descr",options));
	pm.addParam(new FieldText("val_descr",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("name");
	
}

			Constant_Controller.prototype.addGetObject = function(){
	Constant_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldString("id",options));
}

			Constant_Controller.prototype.add_get_values = function(){
	var pm = this.addMethodById('get_values');
	
				
		pm.addParam(new FieldString("id_list"));
	
			
}

		
Constant_Controller.prototype.value_cache;
Constant_Controller.prototype.readValues = function(struc){
	this.value_cache=this.value_cache || {};
	var pm = this.getPublicMethodById("get_values");
	var id_list = "";
	for (var id in struc){
		if (this.value_cache[id]){
			struc[id]=this.value_cache[id];
		}
		else{
			id_list+=(id_list=="")? "":",";
			id_list+=id;
		}
	}
	if (id_list.length){
		pm.setParamValue("id_list",id_list);
		//alert(this.getQueryString(pm));
		this.runPublicMethod("get_values",{},false,
		function(resp){
			var model = resp.getModelById("ConstantValueList_Model");
			model.setActive(true);
			while (model.getNextRow()){
				struc[model.getFieldById("id").getValue()] = model.getFieldById("val").getValue();
			}
		},this,null);
	}
}	
