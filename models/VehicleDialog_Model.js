/**	
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_js.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 * @author Andrey Mikhalevich <katrenplus@mail.ru>, 2017
 * @class
 * @classdesc Model class. Created from template build/templates/models/Model_js.xsl. !!!DO NOT MODEFY!!!
 
 * @extends Model
 
 * @requires core/extend.js
 * @requires core/Model.js
 
 * @param {string} id 
 * @param {Object} options
 */

function VehicleDialog_Model(options){
	var id = 'VehicleDialog_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	filed_options.alias = 'Код';
	filed_options.autoInc = false;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Гос.номер';
	filed_options.autoInc = false;	
	
	options.fields.plate = new FieldString("plate",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Модель';
	filed_options.autoInc = false;	
	
	options.fields.model = new FieldString("model",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Город код';
	filed_options.autoInc = false;	
	
	options.fields.production_city_id = new FieldInt("production_city_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Город';
	filed_options.autoInc = false;	
	
	options.fields.production_city_descr = new FieldString("production_city_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Водитель код';
	filed_options.autoInc = false;	
	
	options.fields.driver_id = new FieldInt("driver_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Водитель';
	filed_options.autoInc = false;	
	
	options.fields.driver_descr = new FieldString("driver_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Постоянный';
	filed_options.autoInc = false;	
	
	options.fields.employed = new FieldBool("employed",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Объем';
	filed_options.autoInc = false;	
	
	options.fields.vol = new FieldInt("vol",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Грузоподъемность';
	filed_options.autoInc = false;	
	
	options.fields.load_weight_t = new FieldFloat("load_weight_t",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'объем/грузоподъемность';
	filed_options.autoInc = false;	
	
	options.fields.vl_wt = new FieldString("vl_wt",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Перевозчник';
	filed_options.autoInc = false;	
	
	options.fields.carrier_id = new FieldInt("carrier_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Перевозчник';
	filed_options.autoInc = false;	
	
	options.fields.carrier_descr = new FieldString("carrier_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Модель прицепа';
	filed_options.autoInc = false;	
	
	options.fields.trailer_model = new FieldString("trailer_model",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Номер прицепа';
	filed_options.autoInc = false;	
	
	options.fields.trailer_plate = new FieldString("trailer_plate",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Трекер';
	filed_options.autoInc = false;	
	
	options.fields.tracker_id = new FieldString("tracker_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Данные с трекера';
	filed_options.autoInc = false;	
	
	options.fields.last_tracker_data = new FieldString("last_tracker_data",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.match_1c = new FieldBool("match_1c",filed_options);
	
		VehicleDialog_Model.superclass.constructor.call(this,id,options);
}
extend(VehicleDialog_Model,Model);

