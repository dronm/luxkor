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

function ClientDestination_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientDestinationList_Model";
	options["objModelId"] = "ClientDestinationDialog_Model";
	ClientDestination_Controller.superclass.constructor.call(this,"ClientDestination_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_get_address_gps();
	this.add_complete_address();
	
}
extend(ClientDestination_Controller,ControllerDb);

			ClientDestination_Controller.prototype.addInsert = function(){
	ClientDestination_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("value",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldGeomPoint("zone_center",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lon",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lat",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("region",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("region_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("raion",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("raion_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("gorod",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("gorod_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("naspunkt",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("naspunkt_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("ulitza",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("ulitza_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("dom",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("korpus",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("kvartira",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("addr_index",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("value",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			ClientDestination_Controller.prototype.addUpdate = function(){
	ClientDestination_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("value",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldGeomPoint("zone_center",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lon",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("near_road_lat",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("region",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("region_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("raion",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("raion_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("gorod",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("gorod_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("naspunkt",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("naspunkt_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("ulitza",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("ulitza_code",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("dom",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("korpus",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("kvartira",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("addr_index",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("value",options);
	
	pm.addParam(param);
	
	
}

			ClientDestination_Controller.prototype.addDelete = function(){
	ClientDestination_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ClientDestination_Controller.prototype.addGetList = function(){
	ClientDestination_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("client_id",options));
	pm.addParam(new FieldText("address",options));
	pm.addParam(new FieldText("value",options));
}

			ClientDestination_Controller.prototype.addGetObject = function(){
	ClientDestination_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			ClientDestination_Controller.prototype.add_get_address_gps = function(){
	var pm = this.addMethodById('get_address_gps');
	
				
		pm.addParam(new FieldText("value"));
	
				
		pm.addParam(new FieldText("region"));
	
				
		pm.addParam(new FieldText("region_code"));
	
				
		pm.addParam(new FieldText("raion"));
	
				
		pm.addParam(new FieldText("raion_code"));
	
				
		pm.addParam(new FieldText("gorod"));
	
				
		pm.addParam(new FieldText("gorod_code"));
	
				
		pm.addParam(new FieldText("naspunkt"));
	
				
		pm.addParam(new FieldText("naspunkt_code"));
	
				
		pm.addParam(new FieldText("ulitza"));
	
				
		pm.addParam(new FieldText("ulitza_code"));
	
				
		pm.addParam(new FieldText("dom"));
	
				
		pm.addParam(new FieldText("korpus"));
	
			
}

			ClientDestination_Controller.prototype.add_complete_address = function(){
	var pm = this.addMethodById('complete_address');
	
				
		pm.addParam(new FieldInt("client_id"));
	
				
		pm.addParam(new FieldText("address"));
	
			
}

		