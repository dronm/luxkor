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

function Kladr_Controller(servConnector){
	options = {};
	Kladr_Controller.superclass.constructor.call(this,"Kladr_Controller",servConnector,options);	
	
	//methods
	this.add_get_region_list();
	this.add_get_raion_list();
	this.add_get_naspunkt_list();
	this.add_get_gorod_list();
	this.add_get_ulitsa_list();
	this.add_get_from_naspunkt();
	this.add_get_prior_region_list();
	
}
extend(Kladr_Controller,ControllerDb);

			Kladr_Controller.prototype.add_get_region_list = function(){
	var pm = this.addMethodById('get_region_list');
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

			Kladr_Controller.prototype.add_get_raion_list = function(){
	var pm = this.addMethodById('get_raion_list');
	
				
		pm.addParam(new FieldString("region_code"));
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

			Kladr_Controller.prototype.add_get_naspunkt_list = function(){
	var pm = this.addMethodById('get_naspunkt_list');
	
				
		pm.addParam(new FieldString("region_code"));
	
				
		pm.addParam(new FieldString("raion_code"));
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

			Kladr_Controller.prototype.add_get_gorod_list = function(){
	var pm = this.addMethodById('get_gorod_list');
	
				
		pm.addParam(new FieldString("region_code"));
	
				
		pm.addParam(new FieldString("raion_code"));
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

			Kladr_Controller.prototype.add_get_ulitsa_list = function(){
	var pm = this.addMethodById('get_ulitsa_list');
	
				
		pm.addParam(new FieldString("region_code"));
	
				
		pm.addParam(new FieldString("raion_code"));
	
				
		pm.addParam(new FieldString("naspunkt_code"));
	
				
		pm.addParam(new FieldString("gorod_code"));
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

			Kladr_Controller.prototype.add_get_from_naspunkt = function(){
	var pm = this.addMethodById('get_from_naspunkt');
	
				
		pm.addParam(new FieldString("region_code"));
	
				
		pm.addParam(new FieldString("pattern"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
			
}

			Kladr_Controller.prototype.add_get_prior_region_list = function(){
	var pm = this.addMethodById('get_prior_region_list');
	
}

		