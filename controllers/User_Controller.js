/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires common/functions.js
 * @requires core/ControllerDb.js
*/
//ф
/* constructor */

function User_Controller(servConnector){
	options = {};
	options["listModelId"] = "UserList_Model";
	options["objModelId"] = "UserDialog_Model";
	User_Controller.superclass.constructor.call(this,"User_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.addComplete();
	this.add_login();
	this.add_logout();
	this.add_login_html();
	this.add_logged();
	this.add_get_account();
	this.add_complete_from_1c();
	
}
extend(User_Controller,ControllerDb);

			User_Controller.prototype.addInsert = function(){
	User_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	options["alias"]="логин";
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="ФИО";
	var param = new FieldString("name_full",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Приказ";
	var param = new FieldString("sign_order",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="роль";
	param = new FieldEnum("role_id",options);
	options["values"] = 'admin,client,sales_manager,production,marketing,boss,representative';
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="эл.почта";
	var param = new FieldString("email",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="пароль";
	var param = new FieldPassword("pwd",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("cel_phone",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("tel_ext",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_login",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			User_Controller.prototype.addUpdate = function(){
	User_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	options["alias"]="логин";
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="ФИО";
	var param = new FieldString("name_full",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="Приказ";
	var param = new FieldString("sign_order",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="роль";
	param = new FieldEnum("role_id",options);
	options["values"] = 'admin,client,sales_manager,production,marketing,boss,representative';
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="эл.почта";
	var param = new FieldString("email",options);
	
	pm.addParam(param);
	
	options = {};
	options["alias"]="пароль";
	var param = new FieldPassword("pwd",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("cel_phone",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldInt("client_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("tel_ext",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_login",options);
	
	pm.addParam(param);
	
	
}

			User_Controller.prototype.addDelete = function(){
	User_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			User_Controller.prototype.addGetList = function(){
	User_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name_full",options));
	pm.addParam(new FieldString("email",options));
	pm.addParam(new FieldString("role_descr",options));
}

			User_Controller.prototype.addGetObject = function(){
	User_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			User_Controller.prototype.addComplete = function(){
	User_Controller.superclass.addComplete.call(this);
	
	var options = {};
	
	var pm = this.getComplete();
	pm.addParam(new Field("name",options));
	pm.getParamById(this.PARAM_ORD_FIELDS).setValue("name");
}

			User_Controller.prototype.add_login = function(){
	var pm = this.addMethodById('login');
	
				
		pm.addParam(new FieldString("name"));
	
				
		pm.addParam(new FieldPassword("pwd"));
	
			
}

			User_Controller.prototype.add_logout = function(){
	var pm = this.addMethodById('logout');
	
}

			User_Controller.prototype.add_login_html = function(){
	var pm = this.addMethodById('login_html');
	
				
		pm.addParam(new FieldString("name"));
	
				
		pm.addParam(new FieldPassword("pwd"));
	
			
}

			User_Controller.prototype.add_logged = function(){
	var pm = this.addMethodById('logged');
	
}

			User_Controller.prototype.add_get_account = function(){
	var pm = this.addMethodById('get_account');
	
}

			User_Controller.prototype.add_complete_from_1c = function(){
	var pm = this.addMethodById('complete_from_1c');
	
				
		pm.addParam(new FieldString("pattern"));
	
			
}

		