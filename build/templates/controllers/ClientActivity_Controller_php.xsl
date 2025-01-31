<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'ClientActivity'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
			
<xsl:template match="/">
	<xsl:apply-templates select="metadata/controllers/controller[@id=$CONTROLLER_ID]"/>
</xsl:template>

<xsl:template match="controller"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>

require_once('functions/ExtProg.php');

class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}	
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	/**
	 * Соответствие было в старой 1с!!!
	 * сейчас все ищется по строке!!!
	 */
	private function check_client_activity($pm){
		$ext_ref = ExtProg::getClientActivityRefOnName($pm->getParamValue('name'));
		if (!$ext_ref){
			throw new Exception('Соответствие в 1с не найдено!');
		}
		$pm->setParamValue('ext_id',$ext_ref);
	}
	public function insert($pm){
		//$this->check_client_activity($pm);
		parent::insert($pm);
	}
	public function update($pm){
		//$this->check_client_activity($pm);
		parent::update($pm);
	}	
</xsl:template>

</xsl:stylesheet>
