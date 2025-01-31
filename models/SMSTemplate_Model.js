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

function SMSTemplate_Model(options){
	var id = 'SMSTemplate_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
			
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = true;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Тип SMS';
	filed_options.autoInc = false;	
	
	options.fields.sms_type = new FieldEnum("sms_type",filed_options);
	filed_options.enumValues = 'client_on_deliv,client_remind,client_deliv_remind,client_change_time,client_on_produced,client_on_leave_prod,driver_first_deliv,driver_new_deliv';
	options.fields.sms_type.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Шаблон';
	filed_options.autoInc = false;	
	
	options.fields.template = new FieldText("template",filed_options);
	options.fields.template.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Комментарий';
	filed_options.autoInc = false;	
	
	options.fields.comment_text = new FieldText("comment_text",filed_options);
	options.fields.comment_text.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Поля';
	filed_options.autoInc = false;	
	
	options.fields.fields = new FieldText("fields",filed_options);
	options.fields.fields.setRequired(true);
	
			
		SMSTemplate_Model.superclass.constructor.call(this,id,options);
}
extend(SMSTemplate_Model,Model);

