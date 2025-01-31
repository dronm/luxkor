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

function CarrierOrderList_Model(options){
	var id = 'CarrierOrderList_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = true;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Перевозчик код';
	filed_options.autoInc = false;	
	
	options.fields.carrier_id = new FieldInt("carrier_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Перевозчик';
	filed_options.autoInc = false;	
	
	options.fields.carrier_descr = new FieldString("carrier_descr",filed_options);
	
				
	
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
	filed_options.alias = 'ТС код';
	filed_options.autoInc = false;	
	
	options.fields.vehicle_id = new FieldInt("vehicle_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'ТС';
	filed_options.autoInc = false;	
	
	options.fields.vehicle_descr = new FieldString("vehicle_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Порядок';
	filed_options.autoInc = false;	
	
	options.fields.ord = new FieldInt("ord",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'На сегодня';
	filed_options.autoInc = false;	
	
	options.fields.today_ord = new FieldInt("today_ord",filed_options);
	
		CarrierOrderList_Model.superclass.constructor.call(this,id,options);
}
extend(CarrierOrderList_Model,Model);

