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

function EmailTemplate_Model(options){
	var id = 'EmailTemplate_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
			
				
	
	var filed_options = {};
	filed_options.primaryKey = true;	
	
	filed_options.autoInc = true;	
	
	options.fields.id = new FieldInt("id",filed_options);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Тип email';
	filed_options.autoInc = false;	
	
	options.fields.email_type = new FieldEnum("email_type",filed_options);
	filed_options.enumValues = 'new_account,reset_pwd,order,order_changed,order_wait_for_client,order_cancel,order_remind,shipment,balance_to_client,order_on_produced';
	options.fields.email_type.setRequired(true);
	
				
	
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
	filed_options.alias = 'Тема';
	filed_options.autoInc = false;	
	
	options.fields.mes_subject = new FieldText("mes_subject",filed_options);
	options.fields.mes_subject.setRequired(true);
	
				
	
	var filed_options = {};
	filed_options.primaryKey = false;	
	filed_options.alias = 'Поля';
	filed_options.autoInc = false;	
	
	options.fields.fields = new FieldText("fields",filed_options);
	options.fields.fields.setRequired(true);
	
			
		EmailTemplate_Model.superclass.constructor.call(this,id,options);
}
extend(EmailTemplate_Model,Model);

