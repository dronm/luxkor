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

function RepPriceListTuning_Model(options){
	var id = 'RepPriceListTuning_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Код клиента';
	filed_options.autoInc = false;	
	
	options.fields.client_id = new FieldInt("client_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Наименование клиента';
	filed_options.autoInc = false;	
	
	options.fields.client_descr = new FieldString("client_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Код города';
	filed_options.autoInc = false;	
	
	options.fields.production_city_id = new FieldInt("production_city_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Наименование города';
	filed_options.autoInc = false;	
	
	options.fields.production_city_descr = new FieldString("production_city_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Для третьих лиц';
	filed_options.autoInc = false;	
	
	options.fields.to_third_party_only = new FieldBool("to_third_party_only",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Наименование прайса';
	filed_options.autoInc = false;	
	
	options.fields.price_list_descr = new FieldString("price_list_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Наименование продукции';
	filed_options.autoInc = false;	
	
	options.fields.product_descr = new FieldString("product_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Цена';
	filed_options.autoInc = false;	
	
	options.fields.product_descr = new FieldFloat("product_descr",filed_options);
	
		RepPriceListTuning_Model.superclass.constructor.call(this,id,options);
}
extend(RepPriceListTuning_Model,Model);

