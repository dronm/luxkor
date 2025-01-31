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

function DelivCost_Model(options){
	var id = 'DelivCost_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = true;	
	
	options.fields.id = new FieldInt("id",filed_options);
	options.fields.id.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.production_city_id = new FieldInt("production_city_id",filed_options);
	options.fields.production_city_id.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.deliv_cost_opt_id = new FieldInt("deliv_cost_opt_id",filed_options);
	options.fields.deliv_cost_opt_id.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = false;	
	
	options.fields.deliv_cost_type = new FieldEnum("deliv_cost_type",filed_options);
	filed_options.enumValues = 'city,country';
	options.fields.deliv_cost_type.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.cost = new FieldFloat("cost",filed_options);
	
			
		DelivCost_Model.superclass.constructor.call(this,id,options);
}
extend(DelivCost_Model,Model);

