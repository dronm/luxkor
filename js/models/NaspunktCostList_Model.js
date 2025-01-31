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

function NaspunktCostList_Model(options){
	var id = 'NaspunktCostList_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.city_id = new FieldInt("city_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Город';
	filed_options.autoInc = false;	
	
	options.fields.city_descr = new FieldString("city_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Наименование';
	filed_options.autoInc = false;	
	
	options.fields.name = new FieldString("name",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.deliv_cost_opt_id = new FieldInt("deliv_cost_opt_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Категория';
	filed_options.autoInc = false;	
	
	options.fields.deliv_cost_opt_descr = new FieldString("deliv_cost_opt_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Расстояние (км.)';
	filed_options.autoInc = false;	
	
	options.fields.distance = new FieldInt("distance",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Стоимость';
	filed_options.autoInc = false;	
	
	options.fields.cost = new FieldFloat("cost",filed_options);
	
		NaspunktCostList_Model.superclass.constructor.call(this,id,options);
}
extend(NaspunktCostList_Model,Model);

