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

function ClientPriceListClient_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientPriceListClientList_Model";
	ClientPriceListClient_Controller.superclass.constructor.call(this,"ClientPriceListClient_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addDelete();
	this.addGetList();
	
}
extend(ClientPriceListClient_Controller,ControllerDb);

			ClientPriceListClient_Controller.prototype.addInsert = function(){
	ClientPriceListClient_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("price_list_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			ClientPriceListClient_Controller.prototype.addDelete = function(){
	ClientPriceListClient_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ClientPriceListClient_Controller.prototype.addGetList = function(){
	ClientPriceListClient_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("price_list_id",options));
	pm.addParam(new FieldInt("client_id",options));
}

		