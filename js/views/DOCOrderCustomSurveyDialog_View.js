/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewDialog.js
*/

/* constructor */
function DOCOrderCustSurveyDialog_View(id,options){
	options = options || {};
	options.tagName="div";
	options.readMethodId = "get_cust_survey";
	
	DOCOrderCustSurveyDialog_View.superclass.constructor.call(this,
		id,options);
		
	var self = this;	
	this.m_beforeOpen = function(contr,isInsert){
		//if (self.m_beforeOpenCalled)return;
		var doc_id = 0;
		
		self.m_questions.getGridControl().setViewId(self.m_viewId);
		
		if (!isInsert){
			doc_id = self.getDataControl(self.getId()+"_id").control.getValue();
		}
		contr.run("before_open",{async:false,params:{
			"doc_id":doc_id,
			"view_id":self.m_viewId
			}});
		self.m_beforeOpenCalled = true;
	}
	
	var model_id = "DOCOrderCustSurveyDialog_Model";
	
	this.m_viewId = hex_md5(uuid());
	
	var cont = new ControlContainer("survey_header","div",{"className":"panel"})
	
	var ctrl = new Edit(id+"_id",{"visible":false,"name":"id","tableLayout":false});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"id",
		"keyFieldIds":null},
		{"valueFieldId":"id","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	//Номер
	var ctrl = new EditNum(id+"_number",{
		"enabled":false,
		"name":"number",
		"labelCaption":"№ заявки:",
		"tableLayout":false});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"number",
		"keyFieldIds":null},
		{}
	);
	cont.addElement(ctrl);
	
	//Дата опроса
	var ctrl = new EditDateTime(id+"_cust_surv_date_time",{
			"value":DateHandler.dateToStr(null,"dd/mm/y hh:mmin"),
			"editMask":"$d$d/$d$d/$d$d $d$d:$d$d",
			"ButtonKalendar":"dd/mm/y hh:mmin",
			"labelCaption":"Дата опроса:",
			"name":"cust_surv_date_time",
			"tableLayout":false
			});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"cust_surv_date_time_descr",
		"keyFieldIds":null},
		{"valueFieldId":"cust_surv_date_time","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	//Заказчик
	var ctrl = new Edit(id+"_client_descr",{
			"enabled":false,
			"name":"client_descr",
			"labelCaption":"Заказчик:",
			"tableLayout":false});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"client_descr",
		"keyFieldIds":null},
		{}
	);
	cont.addElement(ctrl);
	
	//Ответственный
	var ctrl = new Edit(id+"_client_user_descr",{
			"enabled":false,
			"name":"client_user_descr",
			"labelCaption":"Ответственный:",
			"tableLayout":false});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"client_user_descr",
		"keyFieldIds":null},
		{}
	);
	cont.addElement(ctrl);
	
	//Телефон ответственного
	var ctrl = new Edit(id+"_client_user_cel_phone",{
			"enabled":false,
			"name":"client_user_cel_phone",
			"labelCaption":"Телефон:",
			"tableLayout":false});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"client_user_cel_phone",
		"keyFieldIds":null},
		{}
	);
	cont.addElement(ctrl);
	
	//Ответственный за прием товара
	var ctrl = new Edit(id+"_deliv_responsable",{
			"enabled":false,
			"name":"deliv_responsable",
			"labelCaption":"Ответственный за прием товара:",
			"tableLayout":false});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"deliv_responsable",
		"keyFieldIds":null},
		{}
	);
	cont.addElement(ctrl);
	
	//Телефон ответственного за прием товара
	var ctrl = new Edit(id+"_deliv_responsable_tel",{
		"enabled":false,
		"name":"deliv_responsable_tel",
		"labelCaption":"Телефон:",
		"tableLayout":false});	
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"deliv_responsable_tel",
		"keyFieldIds":null},
		{}
	);
	cont.addElement(ctrl);
	
	//header
	this.addControl(cont);
	
	var cont = new ControlContainer("survey_table_panel","div",{"className":"panel"});
	
	//Кнопка заполнить
	cont.addElement(new Button(id+"_fill_surveys",{
		"caption":"Заполнить",
		"attrs":{"title":"заполнить вопросами по умолчанию"},
		"onClick":function(){
			var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
			var m = contr.getPublicMethodById("fill_cust_surv");
			m.setParamValue("view_id",self.m_viewId);			
			contr.run("fill_cust_surv",{
				"func":function(){
					self.m_questions.getGridControl().onRefresh();
				}
			});
		}
		}));
	
	//Вопросы
	this.m_questions = new DOCOrderDOCTCustSurveyList_View("DOCOrderDOCTCustSurveyList_View",
		{"connect":new ServConnector(HOST_NAME),
		"errorControl":this.getErrorControl()
		});	
	this.addDetailControl(this.m_questions,cont);
	
	//table
	this.addControl(cont);
	
	var cont = new ControlContainer("survey_footer_panel","div",{
		"className":"panel",
		"attrs":{"style":"padding-bottom:100px;"}
	});
	
	//комментарий
	var ctrl = new EditText(id+"_cust_surv_comment",{
			"name":"cust_surv_comment",
			"tableLayout":false,
			"labelCaption":"Комментарий:",
			"editContClassName":"input-group "+get_bs_col()+"8",
			"labelClassName":"control-label "+get_bs_col()+"2",
			"rows":"5"});
	this.bindControl(ctrl,
		{"modelId":model_id,
		"valueFieldId":"cust_surv_comment",
		"keyFieldIds":null},
		{"valueFieldId":"cust_surv_comment","keyFieldIds":null}
	);
	cont.addElement(ctrl);
	
	//footer
	this.addControl(cont);	
}
extend(DOCOrderCustSurveyDialog_View,ViewDialog);

DOCOrderCustSurveyDialog_View.prototype.m_detailContainer;

DOCOrderCustSurveyDialog_View.prototype.addDetailControl = function(detailControl,panel){
	if (this.m_details==undefined){
		var detail_row = new ControlContainer(this.getId()+"_det_row","tr");
		var td = new ControlContainer(this.getId()+"_det_row","td",{"attrs":{"colspan":"2"}});
		detail_row.addElement(td);
		this.m_details = new ControlContainer(this.getId()+"_details","div",{"attrs":{"class":"tabber"}});
		td.addElement(this.m_details);
		panel.addElement(td);
	}
	this.m_details.addElement(detailControl);
}
DOCOrderCustSurveyDialog_View.prototype.getDetailControl = function(controlId){
	return this.m_details.getElementById(controlId);
}
DOCOrderCustSurveyDialog_View.prototype.readData = function(async,isCopy){
	DOCOrderCustSurveyDialog_View.superclass.readData.call(this,false,isCopy);
}
DOCOrderCustSurveyDialog_View.prototype.onClickSave = function(){
	var cmd_insert = this.getIsNew();
	if (cmd_insert){
		//need return new serial id if any
		var contr = this.getWriteController();
		var meth_id = this.getWriteMethodId();
		var pm = contr.getPublicMethodById(meth_id);
		if (pm.paramExists(contr.PARAM_RET_ID)){
			pm.setParamValue(contr.PARAM_RET_ID,1);
		}
	}
	this.writeData();
	this.readData(false);
}
DOCOrderCustSurveyDialog_View.prototype.setMethodParams = function(pm,checkRes){
	DOCOrderCustSurveyDialog_View.superclass.setMethodParams.call(this,pm,checkRes);
	checkRes.modif = true;
}

DOCOrderCustSurveyDialog_View.prototype.getFormWidth = function(){
	return "1200";
}
DOCOrderCustSurveyDialog_View.prototype.getFormHeight = function(){
	return "1000";
}

DOCOrderCustSurveyDialog_View.prototype.writeData = function(){	
	var contr = this.getWriteController();
	if (!contr)return;
	contr.getPublicMethodById(this.getWriteMethodId()).setParamValue("view_id",this.m_viewId);
	
	DOCOrderCustSurveyDialog_View.superclass.writeData.call(this);
}

