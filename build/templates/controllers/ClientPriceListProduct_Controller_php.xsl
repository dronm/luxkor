<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'ClientPriceListProduct'"/>
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
require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');

class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}	
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	private function insert_update($pm,$insert){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$pref = (!$insert)? 'old_':'';
		
		$link->query(sprintf(
		"SELECT client_price_list_products_update(
			%d,%d,%f,%f,%f,%f)",
			$params->getParamById($pref.'price_list_id'),
			$params->getParamById($pref.'product_id'),
			$params->getParamById('price'),
			$params->getParamById('discount_volume'),
			$params->getParamById('discount_total'),
			$params->getParamById('pack_price')
		));
	}
	public function insert($pm){
		$this->insert_update($pm,TRUE);
	}
	public function update($pm){
		$this->insert_update($pm,FALSE);
	}	
	public function get_list($pm){
		$link = $this->getDbLink();
		$model = new ModelSQL($link,Array("id"=>"ClientPriceListProductList_Model"));
		$model->addField(new FieldSQLInt($link,NULL,NULL,'price_list_id'));
		$where = $this->conditionFromParams($pm,$model);
		if ($where){
			$price_list_id = $where->getFieldValueForDb('price_list_id','=');
		}
		else{
			$price_list_id = 0;
		}
		$this->addNewModel(sprintf(
			"SELECT * FROM client_price_list_products_list(%d,0)",
			$price_list_id
			)
		);
		
	}		
	public function get_obj($pm){
		$link = $this->getDbLink();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		
		$this->addNewModel(sprintf(
			"SELECT * FROM client_price_list_products_list(%d,%d)",
			$params->getParamById('price_list_id'),
			$params->getParamById('product_id')
			)
		);
	}
	public function set_values($pm){
		$price_list_ids = explode(',',$pm->getParamValue("price_list_ids"));
		$product_ids = explode(',',$pm->getParamValue("product_ids"));
		$vals = explode(',',$pm->getParamValue("vals"));
		if ((count($price_list_ids)!=count($product_ids))
		||(count($price_list_ids)!=count($vals))){
			throw new Exception('Не верные параметры!');
		}
		$link = $this->getDbLink();
		$params = array();
		for ($i=0;$i&lt;count($price_list_ids);$i++){
			array_push($params,new ParamsSQL(null,$link));
			$params[$i]->add('val',DT_FLOAT,$vals[$i]);
			$params[$i]->add('price_list_id',DT_INT,$price_list_ids[$i]);
			$params[$i]->add('product_id',DT_INT,$product_ids[$i]);
		}
		$link = $this->getDbLinkMaster();
		$link->query('BEGIN');
		try{
			for ($i=0;$i&lt;count($params);$i++){
				$link->query(vsprintf(
					"UPDATE client_price_list_products
					SET price=%f
					WHERE price_list_id=%d AND product_id=%d",
					$params[$i]->getArray()));
			}
			$link->query('COMMIT');
		}
		catch(Exception $e){
			$link->query('ROLLBACK');
			throw $e;
		}
	}
</xsl:template>

</xsl:stylesheet>