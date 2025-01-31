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

function Payment_Controller(servConnector){
	options = {};
	Payment_Controller.superclass.constructor.call(this,"Payment_Controller",servConnector,options);	
	
	//methods
	this.add_get_schedule();
	this.add_get_def_debt_details();
	
}
extend(Payment_Controller,ControllerDb);

			Payment_Controller.prototype.add_get_schedule = function(){
	var pm = this.addMethodById('get_schedule');
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

			Payment_Controller.prototype.add_get_def_debt_details = function(){
	var pm = this.addMethodById('get_def_debt_details');
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

		