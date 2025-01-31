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

function Enum_Controller(servConnector){
	options = {};
	Enum_Controller.superclass.constructor.call(this,"Enum_Controller",servConnector,options);	
	
	//methods
	this.add_get_enum_list();
	
}
extend(Enum_Controller,ControllerDb);

			Enum_Controller.prototype.add_get_enum_list = function(){
	var pm = this.addMethodById('get_enum_list');
	
				
		pm.addParam(new FieldString("id"));
	
			
}

		