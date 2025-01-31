<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'TemplateParam'"/>
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
//require_once('models/TemplateParamList_Model.php');

class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{

	const ERR_NOT_LOGGED = 'Идетификатор пользователя не найден.@1000';

	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}	
	
	<xsl:call-template name="extra_methods"/>
		
}
<![CDATA[?>]]>
</xsl:template>


<xsl:template name="extra_methods">
	/*
	public function get_list($pm){
		if (!$_SESSION['user_id']){
			throw new Exception(self::ERR_NOT_LOGGED);
		}
		
		$m = new TemplateParamList_Model($this->getDbLink());
		$m->setSelectQueryText(
			sprintf("SELECT * FROM teplate_params_get_list(''::text,''::text, %d)",
			$_SESSION['user_id']
			)		
		);
		$this->modelGetList($m,$pm);		
	}
	*/
	
	public function set_value($pm){
		if (!$_SESSION['user_id']){
			throw new Exception(self::ERR_NOT_LOGGED);
		}
		
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		//throw new Exception(		
		$this->getDbLink()->query(				
		sprintf("SELECT template_params_set_value(%s,%s,%d,%s)",
			$p->getDbVal('template'),
			$p->getDbVal('param'),
			$_SESSION['user_id'],
			$p->getDbVal('val')
		));
	}

</xsl:template>

</xsl:stylesheet>
