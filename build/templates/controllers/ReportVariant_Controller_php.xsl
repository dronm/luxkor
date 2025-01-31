<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'ReportVariant'"/>
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
		$pm->setParamValue("user_id",$_SESSION['user_id']);
		parent::insert($pm);
	}
	public function get_list($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
		$this->AddNewModel(sprintf(
			"SELECT
				id,
				name,
				%s AS report_type
			FROM report_variants
			WHERE user_id=%d AND report_type=%s",
			$params->getParamById('report_type'),
			$_SESSION['user_id'],
			$params->getParamById('report_type')
			)
		);
	}	
</xsl:template>

</xsl:stylesheet>