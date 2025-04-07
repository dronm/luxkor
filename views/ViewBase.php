<?php
require_once(FRAME_WORK_PATH.'basic_classes/ViewHTMLXSLT.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelStyleSheet.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelJavaScript.php');

require_once(USER_MODELS_PATH.'TemplateParamList_Model.php');


			require_once('models/MainMenu_Model_admin.php');
			require_once('models/MainMenu_Model_client.php');
			require_once('models/MainMenu_Model_sales_manager.php');
			require_once('models/MainMenu_Model_production.php');
			require_once('models/MainMenu_Model_marketing.php');
			require_once('models/MainMenu_Model_boss.php');
			require_once('models/MainMenu_Model_representative.php');
		
class ViewBase extends ViewHTMLXSLT {	
	public function __construct($name){
		parent::__construct($name);
				
		if (!DEBUG){
			//$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'styles.css'));
			
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap.min.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'bootstrap.min.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-theme.min.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'bootstrap-theme.min.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'style.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'style.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'dhtmlwindow.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'dhtmlwindow.css')) ));
		
	
		}
		else{		
			
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap.min.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'bootstrap.min.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-theme.min.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'bootstrap-theme.min.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'bootstrap-datepicker.standalone.min.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'style.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'style.css')) ));
		$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'dhtmlwindow.css?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'dhtmlwindow.css')) ));
		
	
		}
		
		if (!DEBUG){
			$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'lib.js?'. date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'lib.js')) ));
			$script_id = VERSION;
		}
		else{		
			
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'jquery-1.11.3.min.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'jquery-1.11.3.min.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'bootstrap.min.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'bootstrap.min.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'bootstrap-datepicker.min.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'bootstrap-datepicker.min.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'bootstrap-datepicker.ru.min.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'bootstrap-datepicker.ru.min.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'jquery.stickytableheaders.min.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'jquery.stickytableheaders.min.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'md5-min.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'md5-min.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/JSLib/Keyboard.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/JSLib/Keyboard.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/JSLib/Textbox.Common.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/JSLib/Textbox.Common.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/JSLib/String.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/JSLib/String.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/JSLib/Textbox.Restriction.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/JSLib/Textbox.Restriction.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/JSLib/Textbox.MaskEdit.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/JSLib/Textbox.MaskEdit.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/JSLib/Textbox.Trim.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/JSLib/Textbox.Trim.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/JSLib/Textbox.Tip.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/JSLib/Textbox.Tip.js')) ));
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'common/functions.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'common/functions.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'common/DateHandler.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'common/DateHandler.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'common/DOMHandler.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'common/DOMHandler.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'common/EventHandler.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'common/EventHandler.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/AppWin.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/AppWin.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ControllerDb.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ControllerDb.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Field.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/Field.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldSys.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldSys.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldString.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldString.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldInt.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldInt.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldBool.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldBool.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldFloat.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldFloat.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldDate.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldDate.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldDateTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldDateTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldDate.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldDate.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldEnum.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldEnum.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldText.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldText.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldPassword.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldPassword.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldGeomPoint.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldGeomPoint.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldGeomPolygon.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldGeomPolygon.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldJSON.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldJSON.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FieldJSONB.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FieldJSONB.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DataSource.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/DataSource.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ModelSingleRow.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ModelSingleRow.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ModelServResponse.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ModelServResponse.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/PublicMethod.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/PublicMethod.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ServConnector.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ServConnector.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ServResponse.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ServResponse.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/Validator.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/Validator.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorInt.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorInt.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorString.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorString.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorFloat.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorFloat.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorDate.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorDate.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorBool.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorBool.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorDateTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorDateTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorCellPhone.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorCellPhone.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ValidatorJSON.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ValidatorJSON.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ListFilter.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ListFilter.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ListGroupper.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ListGroupper.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/ConstantManager.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/ConstantManager.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/CommonHelper.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/CommonHelper.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DateHelper.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/DateHelper.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DOMHelper.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/DOMHelper.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/FatalException.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/FatalException.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/DbException.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/DbException.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'core/VersException.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'core/VersException.js')) ));
		
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WindowForm.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WindowForm.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/DynamicDrive/windowfiles/dhtmlwindowBS.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/DynamicDrive/windowfiles/dhtmlwindowBS.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WindowFormDD.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WindowFormDD.js')) ));
		
		
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WindowQuestion.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WindowQuestion.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WindowMessage.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WindowMessage.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WindowTempMessage.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WindowTempMessage.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WindowPrint.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WindowPrint.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Control.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Control.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ControlContainer.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ControlContainer.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/MaskEdit.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/MaskEdit.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Kalendar.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Kalendar.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Calculator.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Calculator.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Label.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Label.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/LabelField.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/LabelField.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Button.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Button.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonCtrl.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonCtrl.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonSmall.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonSmall.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonCmd.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonCmd.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonToggle.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonToggle.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonCalc.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonCalc.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonClear.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonClear.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonExpToExcel.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonExpToExcel.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonExpToPDF.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonExpToPDF.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonKalendar.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonKalendar.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonOpen.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonOpen.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonSelect.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonSelect.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonSelectObject.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonSelectObject.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonClearObject.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonClearObject.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonOpenObject.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonOpenObject.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonPrint.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonPrint.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonInsertObject.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonInsertObject.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Edit.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Edit.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditString.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditString.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/actb.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/actb.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditObject.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditObject.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditDate.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditDate.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditCellPhone.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditCellPhone.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditDateTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditDateTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditNum.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditNum.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditFloat.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditFloat.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditMoney.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditMoney.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditText.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditText.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditSelect.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditSelect.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditSelectOption.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditSelectOption.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditRadio.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditRadio.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditRadioGroup.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditRadioGroup.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditCheckBox.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditCheckBox.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditHTML.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditHTML.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditPassword.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditPassword.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditSelectObject.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditSelectObject.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditPeriod.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditPeriod.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditPeriodDate.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditPeriodDate.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditPeriodMonth.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditPeriodMonth.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditPeriodQuater.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditPeriodQuater.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditReportVariant.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditReportVariant.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditDow.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditDow.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewDialog.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewDialog.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewList.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewList.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewDocument.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewDocument.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewDocumentDetail.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewDocumentDetail.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewInlineGridEdit.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewInlineGridEdit.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewInlineGridEditDOCT.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewInlineGridEditDOCT.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewDialogGridEditDOCT.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewDialogGridEditDOCT.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewReport.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewReport.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewMenu.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewMenu.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Grid.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Grid.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridRowCommands.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridRowCommands.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridRowCommandsDOC.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridRowCommandsDOC.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridRowCommandsConst.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridRowCommandsConst.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridCommands.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridCommands.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridPagination.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridPagination.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDb.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDb.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDbDOC.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDbDOC.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDbDOCT.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDbDOCT.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDbConst.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDbConst.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewInlineGridEditConst.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewInlineGridEditConst.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDbMasterDetail.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDbMasterDetail.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridHead.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridHead.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridFoot.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridFoot.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridBody.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridBody.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridRow.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridRow.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridFootRow.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridFootRow.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridRowDOC.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridRowDOC.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridRowDOCT.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridRowDOCT.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridCell.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridCell.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridFootCell.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridFootCell.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridCellStepInc.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridCellStepInc.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridHeadCell.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridHeadCell.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDbHeadCell.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDbHeadCell.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDbHeadCellBool.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDbHeadCellBool.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridDbHeadSysCell.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridDbHeadSysCell.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridFilter.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridFilter.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridFastFilter.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridFastFilter.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridFilterDocument.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridFilterDocument.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GroupFields.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GroupFields.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/PopUpMenu.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/PopUpMenu.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewGridColumnManager.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewGridColumnManager.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewGridColParam.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewGridColParam.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewGridColOrder.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewGridColOrder.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewGridColVisibility.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewGridColVisibility.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/PeriodFilter.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/PeriodFilter.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/RepBaseFields.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/RepBaseFields.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/RepCondFields.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/RepCondFields.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/RepAggFields.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/RepAggFields.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/RepGroupFields.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/RepGroupFields.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/RepGroupFields_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/RepGroupFields_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/RepFieldsCommands.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/RepFieldsCommands.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/TabMenuItem.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/TabMenuItem.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/MenuItem.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/MenuItem.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditListCommands.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditListCommands.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/GridClient.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/GridClient.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/EditList.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/EditList.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ViewInlineGridClientEdit.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ViewInlineGridClientEdit.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WaitControl.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WaitControl.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ErrorControl.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ErrorControl.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ToolTip.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ToolTip.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/CurrentDateTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/CurrentDateTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/Kladr2_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/Kladr2_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/FileLoader.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/FileLoader.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/WindowFormModalBS.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/WindowFormModalBS.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controlsBS/ButtonOrgSearch.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controlsBS/ButtonOrgSearch.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/OpenLayers/OpenLayers.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/OpenLayers/OpenLayers.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/TrackConstants.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/TrackConstants.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/ObjMapLayer.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/ObjMapLayer.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/GeoZones.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/GeoZones.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/MarkerLayer.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/MarkerLayer.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/DrawingControl.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/DrawingControl.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/ZoneDrawingControl.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/ZoneDrawingControl.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/MarkerSetControl.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/MarkerSetControl.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/VehicleLayer.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/VehicleLayer.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/Markers.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/Markers.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/TrackLayer.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/TrackLayer.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/Map_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/Map_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'map/MapZones_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'map/MapZones_View.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Constant_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Constant_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Enum_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Enum_Controller.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/User_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/User_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Client_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Client_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientUser_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientUser_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientContract_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientContract_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Firm_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Firm_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/SaleStoreAddress_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/SaleStoreAddress_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientPriceList_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientPriceList_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProductionCity_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProductionCity_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientPriceListProduct_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientPriceListProduct_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrderDOCTProduct_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrderDOCTProduct_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrderDOCTCustSurvey_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrderDOCTCustSurvey_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Warehouse_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Warehouse_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/MeasureUnit_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/MeasureUnit_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProductMeasureUnit_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProductMeasureUnit_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DeliveryPeriod_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DeliveryPeriod_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProductCustomSizePrice_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProductCustomSizePrice_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProductWarehouse_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProductWarehouse_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/CustomerSurveyQuestion_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/CustomerSurveyQuestion_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/CustomerSurvey_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/CustomerSurvey_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProductionState_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProductionState_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Report_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Report_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ReportVariant_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ReportVariant_Controller.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Delivery_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Delivery_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Driver_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Driver_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Vehicle_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Vehicle_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Carrier_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Carrier_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientDestination_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientDestination_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Kladr_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Kladr_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/SMSTemplate_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/SMSTemplate_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/EmailTemplate_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/EmailTemplate_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DelivCost_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DelivCost_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DelivCostOpt_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DelivCostOpt_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Payment_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Payment_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Holiday_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Holiday_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientDebtPeriod_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientDebtPeriod_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientPriceListClient_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientPriceListClient_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DeliveryHour_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DeliveryHour_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientActivity_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientActivity_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/SertType_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/SertType_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/SertTypeAttr_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/SertTypeAttr_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/TrackerServer_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/TrackerServer_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Tracker_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Tracker_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/UserWarehouse_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/UserWarehouse_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/SMSForSending_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/SMSForSending_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/MailForSending_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/MailForSending_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Holiday_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Holiday_Controller.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/PPViewReport.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/PPViewReport.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ConstantInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ConstantInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ConstantList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ConstantList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ReportVariantList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ReportVariantList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ReportVariantInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ReportVariantInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UserDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/UserDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UserAccount_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/UserAccount_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UserList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/UserList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientRegister_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientRegister_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Delivery_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/Delivery_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/PaymentList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/PaymentList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/RepSales_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/RepSales_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientSelectList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientSelectList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientUserList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientUserList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientUserInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientUserInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientFirmBankAccountList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientFirmBankAccountList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientFirmBankAccountInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientFirmBankAccountInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientContractList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientContractList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientContractInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientContractInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UserWarehouseList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/UserWarehouseList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientExtContractList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientExtContractList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/FirmExtBankAccountList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/FirmExtBankAccountList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/UserWarehouseInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/UserWarehouseInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/FirmList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/FirmList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/FirmInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/FirmInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SaleStoreAddressInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SaleStoreAddressInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DeliveryPeriodList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DeliveryPeriodList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DeliveryPeriodInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DeliveryPeriodInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientPriceListList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientPriceListList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientPriceListDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientPriceListDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientPriceListClientList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientPriceListClientList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductionCityDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductionCityDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductionCityList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductionCityList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientPriceListProductList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientPriceListProductList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientPriceListProductInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientPriceListProductInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderBaseList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderBaseList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderNewList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderNewList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderCurrentList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderCurrentList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderProductionList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderProductionList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderClosedList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderClosedList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDivisDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDivisDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderCustomSurveyDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderCustomSurveyDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderShipmentDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderShipmentDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTProductList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTProductList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTDivisProductList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTDivisProductList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTDivisProductInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTDivisProductInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTProductDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTProductDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTCustSurveyList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTCustSurveyList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTCustSurveyInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTCustSurveyInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTShipmentList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTShipmentList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTShipmentInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTShipmentInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderCancel_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderCancel_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Catalogs_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/Catalogs_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/WarehouseList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/WarehouseList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SaleStoreAddressList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SaleStoreAddressList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/WarehouseDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/WarehouseDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/MeasureUnitList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/MeasureUnitList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/MeasureUnitDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/MeasureUnitDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductMeasureUnitList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductMeasureUnitList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductMeasureUnitInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductMeasureUnitInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductCustomSizePriceList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductCustomSizePriceList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductCustomSizePriceInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductCustomSizePriceInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductWarehouseList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductWarehouseList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Product1cNameList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/Product1cNameList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Product1cNameInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/Product1cNameInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductWarehouseInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductWarehouseInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/CustomerSurveyQuestionList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/CustomerSurveyQuestionList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/CustomerSurveyQuestionInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/CustomerSurveyQuestionInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductionStateList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductionStateList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductionStateInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductionStateInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/RepProductionLoad_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/RepProductionLoad_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/RepClientDebts_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/RepClientDebts_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/RepPriceListTuning_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/RepPriceListTuning_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/PayOrderList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/PayOrderList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/RepClientBalance_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/RepClientBalance_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/PaySchedule_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/PaySchedule_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/PayDefDebt_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/PayDefDebt_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivAssignedOrderList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivAssignedOrderList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivAssignedOrderForClient_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivAssignedOrderForClient_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivUnassignedOrderList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivUnassignedOrderList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DeliveryMap_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DeliveryMap_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DriverList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DriverList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DriverInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DriverInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/CarrierList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/CarrierList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/CarrierInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/CarrierInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/TTNAttrPair_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/TTNAttrPair_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/TTNAttrPairInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/TTNAttrPairInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/CarrierOrder_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/CarrierOrder_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/CarrierOrderInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/CarrierOrderInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/VehicleList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/VehicleList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/VehicleDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/VehicleDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivExtraVehSelectList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivExtraVehSelectList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientDestinationDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientDestinationDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SMSTemplateList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SMSTemplateList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SMSTemplateListInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SMSTemplateListInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/EmailTemplateList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/EmailTemplateList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/EmailTemplateListInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/EmailTemplateListInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivCostList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivCostList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivCostInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivCostInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivCostOptList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivCostOptList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DelivCostOptInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DelivCostOptInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientDebtPeriodList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientDebtPeriodList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientDebtPeriodInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientDebtPeriodInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DeliveryHour_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DeliveryHour_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DeliveryHourInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DeliveryHourInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientActivity_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientActivity_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientActivityInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientActivityInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SertType_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SertType_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SertTypeDialog_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SertTypeDialog_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SertTypeAttr_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SertTypeAttr_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SertTypeAttrInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SertTypeAttrInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/TrackerServerList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/TrackerServerList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/TrackerServerInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/TrackerServerInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/TrackerList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/TrackerList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/TrackerInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/TrackerInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/SMSForSendingList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/SMSForSendingList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/MailForSendingList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/MailForSendingList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductGroupList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductGroupList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProductGroupInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProductGroupInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/Holiday_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/Holiday_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/HolidayInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/HolidayInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ClientDebt_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ClientDebt_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/NaspunktList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/NaspunktList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/NaspunktInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/NaspunktInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/RepNaspunktCost_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/RepNaspunktCost_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/AccPKOList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/AccPKOList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/RepVehicleStop_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/RepVehicleStop_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderAppend_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderAppend_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/ProdBatch1CList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/ProdBatch1CList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTProdBatchList_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTProdBatchList_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'views/DOCOrderDOCTProdBatchInline_View.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'views/DOCOrderDOCTProdBatchInline_View.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/UnregClientCheck.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/UnregClientCheck.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/ClientAttrs.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/ClientAttrs.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/ClientUserGridRowCommands.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/ClientUserGridRowCommands.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/EditObjects.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/EditObjects.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/ChildForm.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/ChildForm.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/DOCOrderGridDb.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/DOCOrderGridDb.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnCancelLastState.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnCancelLastState.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPassToProduction.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPassToProduction.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnUpdatePaid.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnUpdatePaid.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnSetPaid.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnSetPaid.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnSetPaidByBank.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnSetPaidByBank.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnSetNotPaid.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnSetNotPaid.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPaidToAcc.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPaidToAcc.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPaidByBankToAcc.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPaidByBankToAcc.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrint.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrint.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintCheck.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintCheck.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintDoc.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintDoc.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintOrder.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintOrder.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintPassport.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintPassport.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintInvoice.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintInvoice.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintTorg12.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintTorg12.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintTTN.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintTTN.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintShipDocs.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintShipDocs.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintUPD.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintUPD.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPrintAll.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPrintAll.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnSetReady.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnSetReady.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnSetClosed.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnSetClosed.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnSetShipped.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnSetShipped.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnSetClosed.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnSetClosed.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnCustomSurvey.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnCustomSurvey.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnOrderDivis.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnOrderDivis.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnOrderSetFilter.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnOrderSetFilter.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnOrderUnsetFilter.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnOrderUnsetFilter.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnCancelOrder.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnCancelOrder.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnAppendOrder.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnAppendOrder.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnCatalogs.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnCatalogs.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnPriceTune.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnPriceTune.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/EditPeriodDateTime.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/EditPeriodDateTime.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/CustomGridFilter.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/CustomGridFilter.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/DelivAssignedOrderGridDb.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/DelivAssignedOrderGridDb.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/DelivAssignedOrderGridCommands.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/DelivAssignedOrderGridCommands.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/DelivUnassignedOrderGridDb.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/DelivUnassignedOrderGridDb.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/ClientDestinationEdit2.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/ClientDestinationEdit2.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/EditMoneyEditable.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/EditMoneyEditable.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/ClientPriceListClientGridCom.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/ClientPriceListClientGridCom.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/DOCOrderQuantEdit.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/DOCOrderQuantEdit.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/DOCOrderChildren.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/DOCOrderChildren.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/DOCOrderCancelCause.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/DOCOrderCancelCause.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/BtnRefreshClientDebts.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/BtnRefreshClientDebts.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/EditFile.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/EditFile.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/rs/EditFile.rs_ru.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/rs/EditFile.rs_ru.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'custom_controls/ProdBatchEdit.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'custom_controls/ProdBatchEdit.js')) ));
		
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/DragnDrop/DragObject.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/DragnDrop/DragObject.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/DragnDrop/DropTarget.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/DragnDrop/DropTarget.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/DragnDrop/dragMaster.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/DragnDrop/dragMaster.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'extra/DragnDrop/helpers.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'extra/DragnDrop/helpers.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProductGroup_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProductGroup_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProjectManager_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProjectManager_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Naspunkt_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Naspunkt_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/AccPKO_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/AccPKO_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/TemplateParam_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/TemplateParam_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/TTNAttrPair_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/TTNAttrPair_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/CarrierOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/CarrierOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ConstantList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ConstantList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Firm_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Firm_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/FirmList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/FirmList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientActivity_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientActivity_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientActivityList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientActivityList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Client_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Client_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientComplete_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientComplete_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientContract_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientContract_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientContractList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientContractList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDestination_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDestination_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDestinationList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDestinationList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDestinationDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDestinationDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductionCity_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductionCity_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductionCityList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductionCityList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductionCityDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductionCityDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Warehouse_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Warehouse_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/WarehouseList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/WarehouseList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/WarehouseDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/WarehouseDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/User_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/User_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UserList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/UserList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UserDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/UserDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientUserList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientUserList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/MeasureUnit_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/MeasureUnit_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/MeasureUnitList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/MeasureUnitList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/MeasureUnitDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/MeasureUnitDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DeliveryPeriod_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DeliveryPeriod_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Driver_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Driver_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DriverList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DriverList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Carrier_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Carrier_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/CarrierList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/CarrierList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TrackerServer_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/TrackerServer_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Tracker_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Tracker_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TrackerList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/TrackerList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Vehicle_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Vehicle_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/VehicleList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/VehicleList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/VehicleDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/VehicleDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/VehicleSelectList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/VehicleSelectList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SatisfSurveyItem_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SatisfSurveyItem_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SertType_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SertType_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SertTypeAttr_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SertTypeAttr_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SertTypeAttrList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SertTypeAttrList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductGroup_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductGroup_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductGroupList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductGroupList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Product_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Product_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductFilterList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductFilterList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductCustomSizePrice_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductCustomSizePrice_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductMeasureUnit_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductMeasureUnit_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductMeasureUnitList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductMeasureUnitList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductWarehouse_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductWarehouse_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductWarehouseList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductWarehouseList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrder_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrder_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderLink_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderLink_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderState_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderState_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderHeadHistory_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderHeadHistory_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderProductHistory_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderProductHistory_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderProdPassport_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderProdPassport_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderNewList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderNewList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderCurrentList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderCurrentList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderCurrentForClientList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderCurrentForClientList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderCurrentForProductionList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderCurrentForProductionList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderClosedList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderClosedList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDivisDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDivisDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderCustSurveyDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderCustSurveyDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderShipmentDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderShipmentDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPriceList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPriceList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPriceListList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPriceListList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPriceListDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPriceListDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPriceListProduct_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPriceListProduct_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPriceListClient_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPriceListClient_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPriceListClientList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPriceListClientList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPriceListClientSelect_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPriceListClientSelect_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProduct_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProduct_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProductList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProductList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProductDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProductDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTFProduct_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTFProduct_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTCustSurvey_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTCustSurvey_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTCustSurveyList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTCustSurveyList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTFCustSurvey_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTFCustSurvey_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/OrderChange_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/OrderChange_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/CustomerSurveyQuestion_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/CustomerSurveyQuestion_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductionState_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductionState_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DeliveryHour_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DeliveryHour_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DeliveryVehicle_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DeliveryVehicle_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Delivery_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Delivery_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DeliveryExtraVehicle_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DeliveryExtraVehicle_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DeliveryDeletedVehicle_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DeliveryDeletedVehicle_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/VehicleState_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/VehicleState_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/MailForSending_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/MailForSending_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/MailForSendingList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/MailForSendingList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/MailForSendingAttachment_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/MailForSendingAttachment_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSForSending_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SMSForSending_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSForSendingList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SMSForSendingList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/RepProductionLoad_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/RepProductionLoad_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/RepSale_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/RepSale_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/RepPriceListTuning_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/RepPriceListTuning_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/PayOrderList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/PayOrderList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDebtPeriod_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDebtPeriod_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDebtPeriodList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDebtPeriodList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ReportVariant_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ReportVariant_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ReportVariantList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ReportVariantList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderCancelCause_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderCancelCause_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSTemplate_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SMSTemplate_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SMSTemplateList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SMSTemplateList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/EmailTemplate_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/EmailTemplate_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/EmailTemplateList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/EmailTemplateList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DelivDistanceCache_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DelivDistanceCache_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DelivCostOpt_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DelivCostOpt_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DelivCostOptList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DelivCostOptList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DelivCost_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DelivCost_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DelivCostList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DelivCostList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPaySchedule_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPaySchedule_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientPayScheduleList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientPayScheduleList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDebt_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDebt_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDebtList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDebtList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/RepClientDebtList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/RepClientDebtList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UserWarehouse_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/UserWarehouse_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UserWarehouseList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/UserWarehouseList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Holiday_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Holiday_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/HolidayList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/HolidayList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TelPrefix_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/TelPrefix_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Naspunkt_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Naspunkt_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/NaspunktList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/NaspunktList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/NaspunktCostList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/NaspunktCostList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderPrintSeq_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderPrintSeq_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/AccPKO_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/AccPKO_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/AccPKOList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/AccPKOList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/VehicleStopList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/VehicleStopList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TemplateParam_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/TemplateParam_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TemplateParamList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/TemplateParamList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/UnassignedOrderList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/UnassignedOrderList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TTNAttrPair_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/TTNAttrPair_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/TTNAttrPairList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/TTNAttrPairList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/CarrierOrder_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/CarrierOrder_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/CarrierOrderList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/CarrierOrderList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientSearch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientSearch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Bank_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Bank_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/BankList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/BankList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientFirmBankAccount_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientFirmBankAccount_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientFirmBankAccountList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientFirmBankAccountList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ClientFirmBankAccount_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ClientFirmBankAccount_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Product1cName_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Product1cName_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Product1cNameList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Product1cNameList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product1cName_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product1cName_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DocOrderAttachment_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DocOrderAttachment_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/SaleStoreAddress_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/SaleStoreAddress_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProdBatchList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProdBatchList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTFProdBatch_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTFProdBatch_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrderDOCTProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrderDOCTProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrderDOCTProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrderDOCTProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProdBatchList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProdBatchList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTFProdBatch_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTFProdBatch_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProdBatch_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrderDOCTProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrderDOCTProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProduct_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProduct_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTFProduct_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTFProduct_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTProduct_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTProduct_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrderDOCTProduct_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrderDOCTProduct_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/ProdBatch_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/ProdBatch_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrderDOCTFProdBatch_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrderDOCTFProdBatch_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Client_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Client_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Client_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Client_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ClientDialog_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ClientDialog_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Firm_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Firm_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Firm_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Firm_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/FirmList_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/FirmList_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrder_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrder_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Product_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Product_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Product_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Product_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/ProductComplete_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/ProductComplete_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/Product_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/Product_Model.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/Product_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/Product_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'controllers/DOCOrder_Controller.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'controllers/DOCOrder_Controller.js')) ));
		$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'models/DOCOrder_Model.js?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'models/DOCOrder_Model.js')) ));
				
			if (isset($_SESSION['scriptId'])){
				$script_id = $_SESSION['scriptId'];
			}
			else{
				$script_id = VERSION;
			}			
		}
		
		$this->getVarModel()->addField(new Field('role_id',DT_STRING));
		$this->getVarModel()->addField(new Field('role_descr',DT_STRING));
		$this->getVarModel()->addField(new Field('user_name',DT_STRING));
		$this->getVarModel()->addField(new Field('warehouse_descr',DT_STRING));
		$this->getVarModel()->addField(new Field('tel_ext',DT_STRING));
		$this->getVarModel()->addField(new Field('client_payment_type',DT_STRING));
		$this->getVarModel()->addField(new Field('client_ship_not_allowed',DT_BOOL));
		$this->getVarModel()->addField(new Field('order_destination_to_ttn',DT_BOOL));
		$this->getVarModel()->addField(new Field('debug',DT_INT));
		
		
		$this->getVarModel()->insert();
		$this->setVarValue('scriptId',$script_id);
		$this->setVarValue('basePath','http://'.$_SERVER['HTTP_HOST'].'/'.APP_NAME.'/');//BASE_PATH
		
		if (isset($_SESSION['role_id'])){
			$this->setVarValue('role_id',$_SESSION['role_id']);
			$this->setVarValue('role_descr',$_SESSION['role_descr']);
			$this->setVarValue('user_name',$_SESSION['user_name']);
			$this->setVarValue('warehouse_descr',$_SESSION['warehouse_descr']);
			$this->setVarValue('tel_ext',$_SESSION['tel_ext']);
			$this->setVarValue('order_destination_to_ttn',$_SESSION['order_destination_to_ttn']);
			$this->setVarValue('debug', DEBUG? "1":"0");
		}
		if (isset($_SESSION['client_payment_type'])){
			$this->setVarValue('client_payment_type',$_SESSION['client_payment_type']);
			$this->setVarValue('client_ship_not_allowed',$_SESSION['client_ship_not_allowed']);
		}
		
		//Global Filters
		
		
	}
	public function write(ArrayObject &$models,$errorCode=NULL){
		if (isset($_SESSION['role_id'])){
			$menu_class = 'MainMenu_Model_'.$_SESSION['role_id'];
			$models['mainMenu'] = new $menu_class();
		}
		
		if (isset($_SESSION['user_id'])){
			$dbLink = new DB_Sql();
			$dbLink->persistent=true;
			$dbLink->appname = APP_NAME;
			$dbLink->technicalemail = TECH_EMAIL;
			$dbLink->reporterror = DEBUG;
			$dbLink->database= DB_NAME;			
			$dbLink->connect(DB_SERVER,DB_USER,DB_PASSWORD,(defined('DB_PORT'))? DB_PORT:NULL);

			$models['TemplateParamList_Model'] = new TemplateParamList_Model($dbLink);
			$models['TemplateParamList_Model']->setSelectQueryText(
				sprintf("SELECT * FROM teplate_params_get_list(''::text,''::text, %d)",
				$_SESSION['user_id']
				)		
			);
			$models['TemplateParamList_Model']->select(FALSE,
					NULL,
					NULL,
					NULL,
					NULL,
					NULL,
					NULL,
					NULL,
					TRUE
			);
		}
		
		parent::write($models);
	}	
}	
?>