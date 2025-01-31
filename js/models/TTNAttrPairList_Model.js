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

function TTNAttrPairList_Model(options){
	var id = 'TTNAttrPairList_Model';
	options = options || {};
	
	options.fields = {};
	
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = true;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Фирма код';
	filed_options.autoInc = false;	
	
	options.fields.firm_id = new FieldInt("firm_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Фирма';
	filed_options.autoInc = false;	
	
	options.fields.firm_descr = new FieldString("firm_descr",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Склад код';
	filed_options.autoInc = false;	
	
	options.fields.warehouse_id = new FieldInt("warehouse_id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Склад код';
	filed_options.autoInc = false;	
	
	options.fields.warehouse_descr = new FieldString("warehouse_descr",filed_options);
	
		TTNAttrPairList_Model.superclass.constructor.call(this,id,options);
}
extend(TTNAttrPairList_Model,Model);

