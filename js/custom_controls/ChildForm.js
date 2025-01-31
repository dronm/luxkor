
/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
	
	DO NOT MODIFY THIS SCRIPT IN js FILE!!!
	IT IS GENERATED FROM TEMPLATE!!! ChildForm_js.xsl
*/
//ф
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function ChildForm(options){
	options = options||{};
	options.title=options.title||{};

	
	var content=
		'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'+
		'<html>'+
		'<head>'+
		'<meta http-equiv="content-type" content="text/html; charset=UTF-8">';
	
		

content+='<link rel="stylesheet" href="'+HOST_NAME+'css/bootstrap.min.css?'+SERV_VARS.VERSION+'" type="text/css"/>';



content+='<link rel="stylesheet" href="'+HOST_NAME+'css/bootstrap-theme.min.css?'+SERV_VARS.VERSION+'" type="text/css"/>';



content+='<link rel="stylesheet" href="'+HOST_NAME+'css/bootstrap-datepicker.standalone.min.css?'+SERV_VARS.VERSION+'" type="text/css"/>';



content+='<link rel="stylesheet" href="'+HOST_NAME+'css/style.css?'+SERV_VARS.VERSION+'" type="text/css"/>';



content+='<link rel="stylesheet" href="'+HOST_NAME+'css/dhtmlwindow.css?'+SERV_VARS.VERSION+'" type="text/css"/>';

		
	
		content+=
		'<title>'+options.title+'</title>'+
		'</head>'+			
		'<body>'+		
		'<div id="content"></div>'+
		'<div id="footer"></div>'+
		'<div id="waiting">'+
			'<div>Загрузка библиотек...</div>'+
			'<img src="img/common/wait.gif" alt="загрузка"/>'+
		'</div>';
	
		

content+='<script src="'+HOST_NAME+'js/jquery-1.11.3.min.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/bootstrap.min.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/bootstrap-datepicker.min.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/bootstrap-datepicker.ru.min.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/jquery.stickytableheaders.min.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/JSLib/Keyboard.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/JSLib/Textbox.Common.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/JSLib/String.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/JSLib/Textbox.Restriction.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/JSLib/Textbox.MaskEdit.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/JSLib/Textbox.Trim.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/JSLib/Textbox.Tip.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/common/functions.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/common/DateHandler.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/common/DOMHandler.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/common/EventHandler.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ControllerDb.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/Field.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldSys.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldString.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldInt.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldBool.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldFloat.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldDate.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldDateTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldDate.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldEnum.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldText.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldPassword.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldGeomPoint.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/FieldGeomPolygon.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/DataSource.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/Model.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ModelSingleRow.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ModelServResponse.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/PublicMethod.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ServConnector.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ServResponse.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/Validator.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorInt.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorString.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorFloat.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorDate.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorBool.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorDateTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ValidatorCellPhone.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ListFilter.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/core/ListGroupper.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/WindowForm.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/DynamicDrive/windowfiles/dhtmlwindowBS.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/WindowFormDD.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/WindowQuestion.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/WindowMessage.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/WindowPrint.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Control.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ControlContainer.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/MaskEdit.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Kalendar.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Calculator.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Label.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/LabelField.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Button.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonCtrl.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonCmd.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonToggle.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonCalc.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonClear.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonExpToExcel.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonExpToPDF.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonKalendar.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonOpen.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonSelect.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonSelectObject.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonClearObject.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonOpenObject.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ButtonPrint.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Edit.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditString.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/actb.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditObject.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditDate.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditCellPhone.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditDateTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditNum.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditFloat.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditMoney.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditText.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditSelect.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditSelectOption.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditRadio.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditRadioGroup.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditCheckBox.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditHTML.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditPassword.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditSelectObject.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditPeriod.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditPeriodDate.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditPeriodMonth.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditPeriodQuater.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditReportVariant.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/EditDow.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewDialog.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewList.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewDocument.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewDocumentDetail.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewInlineGridEdit.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewInlineGridEditDOCT.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewDialogGridEditDOCT.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewReport.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewMenu.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Grid.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridRowCommands.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridRowCommandsDOC.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridRowCommandsConst.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridCommands.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridPagination.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDb.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDbDOC.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDbDOCT.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDbConst.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ViewInlineGridEditConst.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDbMasterDetail.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridHead.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridFoot.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridBody.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridRow.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridFootRow.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridRowDOC.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridRowDOCT.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridCell.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridFootCell.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridCellStepInc.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridHeadCell.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDbHeadCell.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDbHeadCellBool.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridDbHeadSysCell.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridFilter.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GridFilterDocument.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/GroupFields.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/PopUpMenu.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/PeriodFilter.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/RepBaseFields.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/RepCondFields.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/RepAggFields.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/RepGroupFields.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/RepGroupFields_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/RepFieldsCommands.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/TabMenuItem.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/MenuItem.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/WaitControl.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ErrorControl.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/ToolTip.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/CurrentDateTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/Kladr_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/FileLoader.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controlsBS/WindowFormModalBS.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/OpenLayers/OpenLayers.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/TrackConstants.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/ObjMapLayer.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/GeoZones.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/MarkerLayer.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/DrawingControl.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/ZoneDrawingControl.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/MarkerSetControl.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/VehicleLayer.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/Markers.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/TrackLayer.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/Map_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/map/MapZones_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Constant_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Enum_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/User_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Client_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientUser_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientContract_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Firm_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Product_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientPriceList_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ProductionCity_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientPriceListProduct_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/DOCOrder_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/DOCOrderDOCTProduct_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/DOCOrderDOCTCustSurvey_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Warehouse_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/MeasureUnit_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ProductMeasureUnit_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/DeliveryPeriod_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ProductCustomSizePrice_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ProductWarehouse_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/CustomerSurveyQuestion_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/CustomerSurvey_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ProductionState_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Report_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ReportVariant_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Delivery_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Driver_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Vehicle_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Carrier_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientDestination_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Kladr_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/SMSTemplate_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/EmailTemplate_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/DelivCost_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/DelivCostOpt_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Payment_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Holiday_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientDebtPeriod_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientPriceListClient_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/DeliveryHour_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ClientActivity_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/SertType_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/SertTypeAttr_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/TrackerServer_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Tracker_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/UserWarehouse_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/SMSForSending_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/MailForSending_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/Holiday_Controller.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/PPViewReport.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ConstantInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ConstantList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ReportVariantList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ReportVariantInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/UserDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/UserAccount_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/UserList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientRegister_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/Delivery_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/PaymentList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/RepSales_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientSelectList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientUserList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientUserInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientContractList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientContractInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/UserWarehouseList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/UserWarehouseInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/FirmList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/FirmInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DeliveryPeriodList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DeliveryPeriodInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientPriceListList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientPriceListDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientPriceListClientList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductionCityDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductionCityList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientPriceListProductList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientPriceListProductInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderBaseList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderNewList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderCurrentList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderClosedList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDivisDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderCustomSurveyDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderShipmentDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTProductList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTDivisProductList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTDivisProductInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTProductDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTCustSurveyList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTCustSurveyInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTShipmentList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderDOCTShipmentInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DOCOrderCancel_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/Catalogs_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/WarehouseList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/WarehouseDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/MeasureUnitList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/MeasureUnitDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductMeasureUnitList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductMeasureUnitInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductCustomSizePriceList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductCustomSizePriceInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductWarehouseList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductWarehouseInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/CustomerSurveyQuestionList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/CustomerSurveyQuestionInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductionStateList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductionStateInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/RepProductionLoad_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/RepPriceListTuning_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/PayOrderList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/RepClientBalance_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/PaySchedule_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/PayDefDebt_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivAssignedOrderList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivAssignedOrderForClient_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivUnassignedOrderList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DeliveryMap_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DriverList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DriverInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/CarrierList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/CarrierInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/VehicleList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/VehicleDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivExtraVehSelectList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientDestinationDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/SMSTemplateList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/SMSTemplateListInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/EmailTemplateList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/EmailTemplateListInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivCostList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivCostInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivCostOptList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DelivCostOptInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientDebtPeriodList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientDebtPeriodInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DeliveryHour_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/DeliveryHourInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientActivity_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ClientActivityInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/SertType_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/SertTypeDialog_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/SertTypeAttr_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/SertTypeAttrInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/TrackerServerList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/TrackerServerInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/TrackerList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/TrackerInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/SMSForSendingList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/MailForSendingList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductGroupList_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/ProductGroupInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/Holiday_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/views/HolidayInline_View.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/UnregClientCheck.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/ClientAttrs.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/ClientUserGridRowCommands.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/EditObjects.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/ChildForm.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/DOCOrderGridDb.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnCancelLastState.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPassToProduction.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnUpdatePaid.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnSetPaid.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnSetNotPaid.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPaidToAcc.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrint.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintCheck.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintDoc.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintOrder.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintPassport.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintInvoice.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintTorg12.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintTTN.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintShipDocs.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintUPD.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPrintAll.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnSetReady.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnSetClosed.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnSetShipped.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnSetClosed.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnCustomSurvey.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnOrderDivis.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnOrderSetFilter.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnOrderUnsetFilter.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnCancelOrder.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnCatalogs.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/BtnPriceTune.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/EditPeriodDateTime.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/CustomGridFilter.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/DelivAssignedOrderGridDb.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/DelivAssignedOrderGridCommands.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/DelivUnassignedOrderGridDb.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/ClientDestinationEdit.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/EditMoneyEditable.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/ClientPriceListClientGridCom.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/DOCOrderQuantEdit.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/DOCOrderChildren.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/custom_controls/DOCOrderCancelCause.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/DragnDrop/DragObject.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/DragnDrop/DropTarget.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/DragnDrop/dragMaster.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/extra/DragnDrop/helpers.js?'+SERV_VARS.VERSION+'"></script>';



content+='<script src="'+HOST_NAME+'js/controllers/ProductGroup_Controller.js?'+SERV_VARS.VERSION+'"></script>';


	
		content+='<script>'+
			'var dv = document.getElementById("waiting");'+
			'if (dv!==null){'+
				'dv.parentNode.removeChild(dv);}'+		
		'</script>'+
		
		'</body></html>';
	
	options.location=options.location||"0";
	options.menuBar=options.menuBar||"0";
	options.scrollBars=options.scrollBars||"1";
	options.center=(options.center==undefined)? true:options.center;
	options.status=options.status||"0";
	options.titleBar=options.titleBar||"0";
	options.content=content;	
	ChildForm.superclass.constructor.call(this,options);
}
extend(ChildForm,WindowForm);	

ChildForm.prototype.getContentParent = function(){
	return $("content",this.m_WindowForm.document);
}

