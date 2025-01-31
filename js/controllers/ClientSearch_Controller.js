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

function ClientSearch_Controller(servConnector){
	options = {};
	ClientSearch_Controller.superclass.constructor.call(this,"ClientSearch_Controller",servConnector,options);	
	
	//methods
	this.add_search();
	
}
extend(ClientSearch_Controller,ControllerDb);

			ClientSearch_Controller.prototype.add_search = function(){
	var pm = this.addMethodById('search');
	
				
		pm.addParam(new FieldString("query"));
	
				
		pm.addParam(new FieldInt("checkIfExists"));
	
				
		pm.addParam(new FieldInt("client_id"));
	
			
}

		