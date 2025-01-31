<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Model_php.xsl"/>

<!-- -->
<xsl:variable name="MODEL_ID" select="'User'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
<xsl:template match="/">
	<xsl:apply-templates select="metadata/models/model[@id=$MODEL_ID]"/>
</xsl:template>
			
<xsl:template match="model"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>

class <xsl:value-of select="@id"/>_Model extends <xsl:value-of select="@parent"/>{
	<xsl:call-template name="add_constructor"/>
	
	public function insert($needId=FALSE){
		try{
			parent::insert($needId);
		}
		catch(Exception $e){
			if (strpos($e->getMessage(),'23505')&gt;0){
				throw new Exception('Логин занят!');
			}			
		}
	}
	public function update(){
		try{
			parent::update();
		}
		catch(Exception $e){
			if (strpos($e->getMessage(),'23505')&gt;0){
				throw new Exception('Логин занят!');
			}			
		}		
	}	
}
<![CDATA[?>]]>
</xsl:template>
			
</xsl:stylesheet>