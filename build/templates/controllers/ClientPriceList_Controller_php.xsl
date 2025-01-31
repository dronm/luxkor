<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'ClientPriceList'"/>
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
	public function tune($pm){
		$link = $this->getDbLink();
		$model = new RepPriceListTuning_Model($link);
		
		$where = $this->conditionFromParams($pm,$model);
		if (isset($where)){
			$production_city_id = $where->getFieldValueForDb('production_city_id','=',0,'NULL');
			$to_third_party_only = $where->getFieldValueForDb('to_third_party_only','=',0,'NULL');
		}
		else{
			$production_city_id = 'NULL';
			$to_third_party_only = 'NULL';		
		}
		$model->query(sprintf(
			"SELECT *
			FROM price_list_tune(%s,%s)",
			$production_city_id,$to_third_party_only
			)
			);
		$this->addModel($model);
	}
	public function print_price($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
		
		//header
		$this->addNewModel(sprintf(
		"SELECT
			*,
			date8_descr(now()::date) AS date
		FROM client_price_lists_dialog
		WHERE id=%d",
		$params->getParamById('price_id')),
		'header');
		
		//products
		$this->addNewModel(sprintf(
		"SELECT * FROM client_price_list_products_list(%d,0)",
		$params->getParamById('price_id')),
		'products');
		
	}
</xsl:template>

</xsl:stylesheet>