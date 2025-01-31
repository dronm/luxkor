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

function ClientDebtList_Model(options){
	var id = 'ClientDebtList_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = false;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.firm_id = new FieldInt("firm_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Организация';
	filed_options.autoInc = false;	
	
	options.fields.firm_descr = new FieldString("firm_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_id = new FieldInt("client_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Контрагент';
	filed_options.autoInc = false;	
	
	options.fields.client_descr = new FieldString("client_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.client_debt_period_days_from = new FieldInt("client_debt_period_days_from",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Период задолженности';
	filed_options.autoInc = false;	
	
	options.fields.client_debt_period_days_descr = new FieldString("client_debt_period_days_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Просроченная задолженность';
	filed_options.autoInc = false;	
	
	options.fields.def_debt = new FieldFloat("def_debt",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Долг всего';
	filed_options.autoInc = false;	
	
	options.fields.debt_total = new FieldFloat("debt_total",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Дней просроченного долга';
	filed_options.autoInc = false;	
	
	options.fields.days = new FieldInt("days",filed_options);
	
		ClientDebtList_Model.superclass.constructor.call(this,id,options);
}
extend(ClientDebtList_Model,Model);

