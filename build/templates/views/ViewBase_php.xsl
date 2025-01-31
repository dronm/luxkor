<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
<xsl:template match="/"><![CDATA[<?php]]>
require_once(FRAME_WORK_PATH.'basic_classes/ViewHTMLXSLT.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelStyleSheet.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelJavaScript.php');

require_once(USER_MODELS_PATH.'TemplateParamList_Model.php');

<xsl:apply-templates select="metadata/enums/enum[@id='role_types']"/>
class ViewBase extends ViewHTMLXSLT {	
	public function __construct($name){
		parent::__construct($name);
				
		if (!DEBUG){
			//$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'styles.css'));
			<xsl:apply-templates select="metadata/cssScripts"/>
		}
		else{		
			<xsl:apply-templates select="metadata/cssScripts"/>
		}
		
		if (!DEBUG){
			$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'lib.js?'. date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'lib.js')) ));
			$script_id = VERSION;
		}
		else{		
			<xsl:apply-templates select="metadata/jsScripts"/>			
			if (isset($_SESSION['scriptId'])){
				$script_id = $_SESSION['scriptId'];
			}
			else{
				$script_id = VERSION;
			}			
		}
		<!-- custom vars-->
		$this->getVarModel()->addField(new Field('role_id',DT_STRING));
		$this->getVarModel()->addField(new Field('role_descr',DT_STRING));
		$this->getVarModel()->addField(new Field('user_name',DT_STRING));
		$this->getVarModel()->addField(new Field('warehouse_descr',DT_STRING));
		$this->getVarModel()->addField(new Field('tel_ext',DT_STRING));
		$this->getVarModel()->addField(new Field('client_payment_type',DT_STRING));
		$this->getVarModel()->addField(new Field('client_ship_not_allowed',DT_BOOL));
		$this->getVarModel()->addField(new Field('order_destination_to_ttn',DT_BOOL));
		$this->getVarModel()->addField(new Field('debug',DT_INT));
		
		<!-- custom vars-->
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
		
		<!--
		<xsl:for-each select="/metadata/globalFilters/field">
		if (isset($_SESSION['global_<xsl:value-of select="@id"/>'])){
			$val = $_SESSION['global_<xsl:value-of select="@id"/>'];
			$this->setVarValue('<xsl:value-of select="@id"/>',$val);
		}
		</xsl:for-each>		
		-->
	}
	public function write(ArrayObject &amp;$models,$errorCode=NULL){
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
<![CDATA[?>]]>
</xsl:template>
			
<xsl:template match="enum/value">require_once('models/MainMenu_Model_<xsl:value-of select="@id"/>.php');</xsl:template>

<xsl:template match="jsScripts/jsScript">$this->addJsModel(new ModelJavaScript(USER_JS_PATH.'<xsl:value-of select="@file"/>?'.date("Y-m-dTH:i:s", filemtime(USER_JS_PATH.'<xsl:value-of select="@file"/>')) ));</xsl:template>

<xsl:template match="cssScripts/cssScript">$this->addCssModel(new ModelStyleSheet(USER_CSS_PATH.'<xsl:value-of select="@file"/>?'.date("Y-m-dTH:i:s", filemtime(USER_CSS_PATH.'<xsl:value-of select="@file"/>')) ));</xsl:template>

</xsl:stylesheet>
