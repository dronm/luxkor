<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'CustomerSurvey'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
			
<xsl:template match="/">
	<xsl:apply-templates select="metadata/controllers/controller[@id=$CONTROLLER_ID]"/>
</xsl:template>

<xsl:template match="controller"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}	
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	public function insert($pm){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$link->query(sprintf(
			"SELECT product_measure_units_update(%d,%d,%d,%s)",
			$params->getParamById("doc_order_id"),
			$params->getParamById("suctomer_survey_question_id"),
			$params->getParamById("points"),
			$params->getParamById("question_comment")
		));
	}
	public function update($pm){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$link->query(sprintf(
			"SELECT customer_surveys_update(%d,%d,%d,%s)",
			$params->getParamById("old_doc_order_id"),
			$params->getParamById("old_suctomer_survey_question_id"),
			$params->getParamById("points"),
			$params->getParamById("question_comment")
		));
	}	
	public function get_list($pm){
		$link = $this->getDbLink();
		$model = new CustomerSurveyList_Model($link);
		$where = $this->conditionFromParams($pm,$model);
		if (!$where){
			throw new Exception("Не задан документ!");
		}
		$q = sprintf(
		"SELECT * FROM customer_surveys_list(%d)",
		$where->getFieldValueForDb('doc_order_id','=')
		);
		$model->query($q);
		$this->addModel($model);
	}
	public function get_object($pm){
		$link = $this->getDbLink();
		$model = new CustomerSurveyList_Model($link);
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		
		$model->query(sprintf(
		"SELECT * FROM customer_surveys_list(%d,%d)",
		$params->getParamById('doc_order_id')
		));
		$this->addModel($model);
	}
	
</xsl:template>

</xsl:stylesheet>