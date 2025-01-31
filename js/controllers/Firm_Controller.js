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

function Firm_Controller(servConnector){
	options = {};
	options["listModelId"] = "FirmList_Model";
	options["objModelId"] = "FirmList_Model";
	Firm_Controller.superclass.constructor.call(this,"Firm_Controller",servConnector,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
	this.add_get_firm_ext_bank_account_list();
	
}
extend(Firm_Controller,ControllerDb);

			Firm_Controller.prototype.addInsert = function(){
	Firm_Controller.superclass.addInsert.call(this);
	var param;
	var options;
	var pm = this.getInsert();
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("sert_header",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("nds",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("nds_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("cash",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deleted",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("order_no_carrier_print",options);
	
	pm.addParam(param);
	
	pm.addParam(new FieldInt("ret_id",{}));
	
	
}

			Firm_Controller.prototype.addUpdate = function(){
	Firm_Controller.superclass.addUpdate.call(this);
	var param;
	var options;	
	var pm = this.getUpdate();
	options = {};
	
	var param = new FieldInt("id",options);
	
	pm.addParam(param);
	
	param = new FieldInt("old_id",{});
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("name",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldString("ext_id",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldText("sert_header",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("nds",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldFloat("nds_val",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("cash",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("deleted",options);
	
	pm.addParam(param);
	
	options = {};
	
	var param = new FieldBool("order_no_carrier_print",options);
	
	pm.addParam(param);
	
	
}

			Firm_Controller.prototype.addDelete = function(){
	Firm_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addParam(new FieldInt("id",options));
}

			Firm_Controller.prototype.addGetList = function(){
	Firm_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addParam(new FieldInt("id",options));
	pm.addParam(new FieldString("name",options));
	pm.addParam(new FieldString("match_1c",options));
	pm.addParam(new FieldBool("nds",options));
	pm.addParam(new FieldFloat("nds_val",options));
	pm.addParam(new FieldBool("cash",options));
	pm.addParam(new FieldBool("deleted",options));
	pm.addParam(new FieldBool("order_no_carrier_print",options));
}

			Firm_Controller.prototype.addGetObject = function(){
	Firm_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addParam(new FieldInt("id",options));
}

			Firm_Controller.prototype.add_get_firm_ext_bank_account_list = function(){
	var pm = this.addMethodById('get_firm_ext_bank_account_list');
	
				
		pm.addParam(new FieldInt("firm_id"));
	
				
		pm.addParam(new FieldString("cond_fields"));
	
				
		pm.addParam(new FieldString("cond_vals"));
	
				
		pm.addParam(new FieldString("cond_sgns"));
	
				
		pm.addParam(new FieldString("cond_ic"));
	
				
		pm.addParam(new FieldInt("from"));
	
				
		pm.addParam(new FieldInt("count"));
	
				
		pm.addParam(new FieldString("ord_fields"));
	
				
		pm.addParam(new FieldString("ord_directs"));
	
				
		pm.addParam(new FieldString("field_sep"));
	
			
}

		