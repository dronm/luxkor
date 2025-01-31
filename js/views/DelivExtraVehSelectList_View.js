/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function DelivExtraVehSelectList_View(id,options){
	options = options || {};
	options.title = "Дополнительные автомобили";
	
	options.controller = new Delivery_Controller(new ServConnector(HOST_NAME));
	options.method = "extra_veh_select_list";
	options.model = "extra_veh_select_list";
	
	DelivExtraVehSelectList_View.superclass.constructor.call(this,
		id,options);
}
extend(DelivExtraVehSelectList_View,VehicleList_View);

DelivExtraVehSelectList_View.prototype.setDate = function(date){
	var contr = this.getElementById(this.getId()+"_grid").getController();
	var pm = contr.getPublicMethodById("extra_veh_select_list");
	pm.setParamValue("date",date);	
}