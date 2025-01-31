<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'ProductMeasureUnit'"/>
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
			"SELECT product_measure_units_update(%d,%d,%s,%s)",
			$params->getParamById("product_id"),
			$params->getParamById("measure_unit_id"),
			$params->getParamById("in_use"),
			$params->getParamById("calc_formula")
		));
	}
	public function update($pm){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$link->query(sprintf(
			"SELECT product_measure_units_update(%d,%d,%s,%s)",
			$params->getParamById("old_product_id"),
			$params->getParamById("old_measure_unit_id"),
			$params->getParamById("in_use"),
			$params->getParamById("calc_formula")
		));
	}	
	public function get_list($pm){
		$link = $this->getDbLink();
		$model = new ProductMeasureUnit_Model($link);
		$where = $this->conditionFromParams($pm,$model);
		if (!$where){
			throw new Exception("Не задана продукция!");
		}
		$q = sprintf(
		"SELECT * FROM product_measure_units_list(%d,0)",
		$where->getFieldValueForDb('product_id','=')
		);
		if ($where->getFieldValueForDb('in_use','=')=='true'){
			$q.=' WHERE in_use=true';
		}
		$model->query($q);
		$this->addModel($model);
	}
	public function get_object($pm){
		$link = $this->getDbLink();
		$model = new ProductMeasureUnit_Model($link);
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		
		$model->query(sprintf(
		"SELECT * FROM product_measure_units_list(%d,%d)",
		$params->getParamById('product_id'),
		$params->getParamById('measure_unit_id')
		));
		$this->addModel($model);
	}
	
</xsl:template>

</xsl:stylesheet>