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

function ClientFirmBankAccount_Model(options){
	var id = 'ClientFirmBankAccount_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = true;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Клиент код';
	filed_options.autoInc = false;	
	
	options.fields.client_id = new FieldInt("client_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Фирма код';
	filed_options.autoInc = false;	
	
	options.fields.firm_id = new FieldInt("firm_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Ссылка 1с на р/счет контрагента';
	filed_options.autoInc = false;	
	
	options.fields.ext_bank_account_id = new FieldString("ext_bank_account_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Расчетный счет';
	filed_options.autoInc = false;	
	
	options.fields.ext_bank_account_descr = new FieldText("ext_bank_account_descr",filed_options);
	
			
		ClientFirmBankAccount_Model.superclass.constructor.call(this,id,options);
}
extend(ClientFirmBankAccount_Model,Model);

