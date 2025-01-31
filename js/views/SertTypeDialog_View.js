/* Copyright (c) 2015 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/View.js
*/

/* constructor */
function SertTypeDialog_View(id,options){
	options = options || {};
	options.tagName="div";
	SertTypeDialog_View.superclass.constructor.call(this,
		id,options);	
	
		var model = "SertType_Model";
	
	this.addDataControl(
		new EditNum(id+"_id",
		{"visible":false,
		"tableLayout":false,}
		),
		{"modelId":model,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	this.addDataControl(
		new EditString(id+"_name",
		{"attrs":{"maxlength":25,
				"size":50,
				"required":"required"},
		"labelCaption":"Описание:",
		"tableLayout":false,
		"name":"name"}
		),
		{"modelId":model,
		"valueFieldId":"name",
		"keyFieldIds":null},
		{"valueFieldId":"name","keyFieldIds":null}
	);
	
	//Атрибуты
	var sub_cont=new ControlContainer(uuid(),"div",{"className":"panel_all"});
	sub_cont.addElement(new Control(null,"span",{"value":"Атрибуты"}));
	this.m_attrList = new SertTypeAttr_View("SertTypeAttr",options);
	sub_cont.addElement(this.m_attrList);
	this.addElement(sub_cont);	
	
	//xslt pattern
	this.m_ctrlXSLTPattern = new EditString(id+"_xslt_pattern",
		{"labelCaption":"Шаблон паспорта качества:","name":"xslt_pattern",
		"buttonClear":false,
		"attrs":{"size":"20"},
		"tableLayout":false,
		"enabled":false}
	);
	this.bindControl(this.m_ctrlXSLTPattern,{"modelId":model,
		"valueFieldId":"xslt_pattern","keyFieldIds":null},
	{"valueFieldId":"xslt_pattern","keyFieldIds":null});		
	this.addElement(this.m_ctrlXSLTPattern);			
	
	var meth_set = "set_xslt_pattern";
	var meth_get = "get_xslt_pattern";
	var contr = new SertType_Controller(new ServConnector(HOST_NAME));
	//set
	var pm_set = contr.getPublicMethodById(meth_set);
	pm_set.setParamValue("c","SertType_Controller");
	pm_set.setParamValue("f",meth_set);
	//get
	this.m_pm_get = contr.getPublicMethodById(meth_get);
	this.m_pm_get.setParamValue("c","SertType_Controller");
	this.m_pm_get.setParamValue("f",meth_get);
	var self = this;
	ctrl = new FileLoader(id+"_fileLoader",{
			"controller":contr,
			"getMethodId":meth_get,
			"methodId":meth_set,
			"files":{
				"file1":{"caption":"Загрузка шаблона:","name":"xslt_pattern"}
			},
			"onFileUploadEnd":function(resp){
				var m = resp.getModelById("xslt_pattern",true);
				if (m.getNextRow()){
					self.m_ctrlXSLTPattern.setValue(
						m.getFieldValue("xslt_pattern")
					);
				}
			}
	});
	this.addElement(ctrl);
	
	//проверить шаблон
	this.addElement(new Button(id+"_btn_check_pattern",{
		caption:"Проверить шалон",
		attrs:{"title":"срегенировать файл по шаблону для проверки"},
		onClick:function(){
			var id = self.getDataControlValue(self.getId()+"_id");
			if (id){
				var contr = new SertType_Controller(new ServConnector(HOST_NAME));
				var q_params = contr.getQueryString(contr.getPublicMethodById("check_pattern"))+
						"&sert_type_id="+id;
				top.location.href = HOST_NAME+"index.php?"+q_params;
			}
		}
	}));
}
extend(SertTypeDialog_View,ViewDialog);

SertTypeDialog_View.prototype.onGetData = function(resp){
	SertTypeDialog_View.superclass.onGetData.call(this,resp);	
	
	var m = resp.getModelById("SertType_Model",true);
	if (m.getNextRow()){
		var id = m.getFieldValue("id");
		this.m_pm_get.setParamValue("id",id);
		
		this.m_attrList.setSertTypeId(id);
		this.m_attrList.m_grid.setEnabled(true);
		this.m_attrList.m_grid.onRefresh();	
		
	}
}