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

function ClientContract_Model(options){
	var id = 'ClientContract_Model';
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
	
	options.fields.client_id = new FieldInt("client_id",filed_options);
	options.fields.client_id.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	
	filed_options.autoInc = false;	
	
	options.fields.firm_id = new FieldInt("firm_id",filed_options);
	options.fields.firm_id.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Состояние';
	filed_options.autoInc = false;	
	
	options.fields.state = new FieldEnum("state",filed_options);
	filed_options.enumValues = 'signed,not_signed';
	options.fields.state.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Дата с';
	filed_options.autoInc = false;	
	
	options.fields.date_from = new FieldDate("date_from",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Дата по';
	filed_options.autoInc = false;	
	
	options.fields.date_to = new FieldDate("date_to",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'номер';
	filed_options.autoInc = false;	
	
	options.fields.number = new FieldString("number",filed_options);
	
			
		ClientContract_Model.superclass.constructor.call(this,id,options);
}
extend(ClientContract_Model,Model);

