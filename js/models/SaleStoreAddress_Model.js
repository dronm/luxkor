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

function SaleStoreAddress_Model(options){
	var id = 'SaleStoreAddress_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = true;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Код';
	filed_options.autoInc = false;	
	
	options.fields.code = new FieldString("code",filed_options);
	options.fields.code.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Наименование адреса';
	filed_options.autoInc = false;	
	
	options.fields.name = new FieldText("name",filed_options);
	options.fields.name.setRequired(true);
	
			
		SaleStoreAddress_Model.superclass.constructor.call(this,id,options);
}
extend(SaleStoreAddress_Model,Model);

