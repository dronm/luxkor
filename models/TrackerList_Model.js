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

function TrackerList_Model(options){
	var id = 'TrackerList_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	filed_options.alias = 'Идентификатор';
	filed_options.autoInc = false;	
	
	options.fields.id = new FieldString("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.tracker_server_id = new FieldInt("tracker_server_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Сервер';
	filed_options.autoInc = false;	
	
	options.fields.tracker_server_descr = new FieldString("tracker_server_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Номер SIM';
	filed_options.autoInc = false;	
	
	options.fields.sim_number = new FieldString("sim_number",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Идентификатор SIM';
	filed_options.autoInc = false;	
	
	options.fields.sim_id = new FieldString("sim_id",filed_options);
	
		TrackerList_Model.superclass.constructor.call(this,id,options);
}
extend(TrackerList_Model,Model);

