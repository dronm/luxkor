/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewDialog.js
*/

/* constructor */
function DeliveryMap_View(id,options){
	options = options || {};
	
	options.noOk = true;
	options.noCancel = true;
	
	DeliveryMap_View.superclass.constructor.call(this,
		id,options);
	
	this.m_controller = new Delivery_Controller(new ServConnector(HOST_NAME));
		
	//map
	/*
	this.map_control = new Control("map","div");	
	this.addElement(this.map_control);	
	
	this.refreshData();
	*/
	this.addMapControl();	
	this.m_winObj = options.winObj;
	
}
extend(DeliveryMap_View,Map_View);//ViewList

DeliveryMap_View.prototype.m_curVehicleId;
DeliveryMap_View.prototype.m_filter;

DeliveryMap_View.prototype.setCurVehicleId = function(curVehicleId){
	this.m_curVehicleId = curVehicleId;
	this.m_vehicles.setCurrentObj(this.m_curVehicleId,
		TRACK_CONSTANTS.FOUND_ZOOM
	);
}

DeliveryMap_View.prototype.refreshData = function(){
	var self = this;
	var meth;
	var params = {};
	if (SERV_VARS.ROLE_ID=="client"){
		meth = "current_position_client";
		params.date= DateHandler.dateToStr(new Date(),"dd/mm/yy");
	}
	else{
		meth = "current_position_all";		
	}
	this.m_controller.run(meth,
		{"params":params,
		"func":function(resp){
			self.onGetPosData(resp);
		}
		}
	);
}
DeliveryMap_View.prototype.toDOM = function(parent){
	DeliveryMap_View.superclass.toDOM.call(this,parent);
	/*
	this.m_map = new OpenLayers.Map(this.map_control.m_node,{"controls":[]});
	this.m_layer = new OpenLayers.Layer.OSM();		
	
	this.m_map.addLayer(this.m_layer);		
	
	var zoom_bar = new OpenLayers.Control.PanZoomBar();
	this.m_map.addControl(zoom_bar);	
	this.m_map.addControl(new OpenLayers.Control.LayerSwitcher());
	this.m_map.addControl(new OpenLayers.Control.ScaleLine());
	this.m_map.addControl(new OpenLayers.Control.Navigation());
	*/
	this.m_vehicles = new VehicleLayer(this.m_map);	
	this.m_vehicles.moveMapToCoords(
		NMEAStrToDegree(CONSTANT_VALS.map_default_lon),
		NMEAStrToDegree(CONSTANT_VALS.map_default_lat),
		TRACK_CONSTANTS.INI_ZOOM
	);
	this.refreshData();
}

DeliveryMap_View.prototype.removeDOM = function(parent){
	if (this.m_interval){
		clearInterval(this.m_interval);
		this.m_interval = null;
	}
	this.map_control.removeDOM();
	DeliveryMap_View.superclass.removeDOM.call(this,parent);
}

DeliveryMap_View.prototype.onGetPosData = function(resp){
	var model = resp.getModelById("current_position_all",true);
	var id,marker;
	while (model.getNextRow()){
		marker = new MapCarMarker(model.getRow());
		marker.image = TRACK_CONSTANTS.IMG_PATH+TRACK_CONSTANTS.POINTER_IMGS[this.CURRENT_THEME];
		//TRACK_CONSTANTS.VEH_IMG;
		marker.imageScale = 0.8;
		marker.imageRotate = true;
		/*
		if (this.m_curVehicleId==){
			id = marker.id;
		}
		*/
		this.m_vehicles.removeVehicle(marker.id);
		if (marker.period){
			this.m_vehicles.addVehicle(marker,
				null,false,false);
		}			
	}
	
	if (this.m_curVehicleId){
		this.m_vehicles.setCurrentObj(this.m_curVehicleId);//,TRACK_CONSTANTS.FOUND_ZOOM);
	}
	
	if (!this.m_interval){
		var self = this;
		this.m_interval = setInterval(
			function(){
				self.refreshData();
			},5*1000
		);
		//CONSTANT_VALS.db_controls_refresh_sec
	}	
}