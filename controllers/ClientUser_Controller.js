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

function ClientUser_Controller(servConnector){
	options = {};
	options["listModelId"] = "ClientUserList_Model";
	options["objModelId"] = "ClientUserList_Model";
	ClientUser_Controller.superclass.constructor.call(this,"ClientUser_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_reset_pwd();
	
}
extend(ClientUser_Controller,ControllerDb);

			ClientUser_Controller.prototype.addInsert = function(){
	ClientUser_Controller.superclass.addInsert.call(this);
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

			ClientUser_Controller.prototype.addUpdate = function(){
	ClientUser_Controller.superclass.addUpdate.call(this);
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

			ClientUser_Controller.prototype.addDelete = function(){
	ClientUser_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			ClientUser_Controller.prototype.addGetList = function(){
	ClientUser_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldInt("client_id",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldString("name_full",options));
	pm.addParam(new FieldString("email",options));
	pm.addParam(new FieldString("cel_phone",options));
}

			ClientUser_Controller.prototype.addGetObject = function(){
	ClientUser_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			ClientUser_Controller.prototype.add_reset_pwd = function(){
	var pm = this.addMethodById('reset_pwd');
	
				
		pm.addParam(new Field("user_id"));
	
			
}

		