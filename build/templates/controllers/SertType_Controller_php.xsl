<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'SertType'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
			
<xsl:template match="/">
	<xsl:apply-templates select="metadata/controllers/controller[@id=$CONTROLLER_ID]"/>
</xsl:template>

<xsl:template match="controller"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>
require_once('common/downloader.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelVars.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once('common/downloader.php');
require_once(USER_CONTROLLERS_PATH.'DOCOrder_Controller.php');

class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}	
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	public function get_xslt_pattern($pm){
		$link = $this->getDbLink();
		$p = new ParamsSQL($pm,$link);
		$p->setValidated("id",DT_INT);	

		$ar = $link->query_first(sprintf(
			"SELECT xslt_pattern
			FROM sert_types
			WHERE id=%d",
			$p->getParamById('id')
		));
		
		if (!is_array($ar)||!count($ar)){
			throw new Exception("sert not found!");
		}
		ob_clean();
		downloadFile('views/'.$ar['xslt_pattern']);		
	}
	
	public function set_xslt_pattern($pm){
		if (!isset($_FILES['xslt_pattern'])
		||!is_uploaded_file($_FILES['xslt_pattern']['tmp_name'])){
			throw new Exception("No file!");
		}
		if ($_FILES['xslt_pattern']['size']/1024>100){
			throw new Exception("File is too big!");
		}
		$name = $_FILES["xslt_pattern"]["name"];
		$tmp_name = $_FILES["xslt_pattern"]["tmp_name"];
		move_uploaded_file($tmp_name, "views/$name");
		
		$this->addModel(new ModelVars(array(
			'id'=>'xslt_pattern',
			'values'=>array(
				new Field('xslt_pattern',DT_STRING,array('value'=>$name))
			)
		))
		);
	}
	
	/*
	возвращает сгенерированный файл
	по шаблоны с первой попавшей продукцией
	*/
	public function check_pattern($pm){
		$link = $this->getDbLink();
		$p = new ParamsSQL($pm,$link);
		$p->setValidated("sert_type_id",DT_INT);		
		
		$ar = $link->query_first(sprintf(
			"SELECT
				t.doc_id
			FROM doc_orders_t_products AS t
			LEFT JOIN products p ON p.id=t.product_id
			WHERE p.sert_type_id=%d
			LIMIT 1",
		$p->getParamById('sert_type_id')
		));
		if (!is_array($ar)||!count($ar)){
			throw new Exception("Не найдено ни одного документа по продукции с данным шаблоном!");
		}
		
		$doc_contr = new DOCOrder_Controller($this->getDbLink(),$this->getDbLinkMaster());
		$tmp_file = $doc_contr->makePassport($link,$ar['doc_id'],FALSE);
		ob_clean();
		downloadFile($tmp_file);
		unlink($tmp_file);
	}
</xsl:template>

</xsl:stylesheet>