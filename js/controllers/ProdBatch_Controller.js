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

function ProdBatch_Controller(servConnector){
	options = {};
	ProdBatch_Controller.superclass.constructor.call(this,"ProdBatch_Controller",servConnector,options);	
	
	//methods
	this.addGetList();
	this.add_complete_from_1c();
	
}
extend(ProdBatch_Controller,ControllerDb);

			ProdBatch_Controller.prototype.addGetList = function(){
	ProdBatch_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
		var options = {};
						
		pm.addParam(new FieldInt("doc_order_id",options));
	
}

			ProdBatch_Controller.prototype.add_complete_from_1c = function(){
	var pm = this.addMethodById('complete_from_1c');
	
				
		pm.addParam(new FieldInt("doc_order_id"));
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

		