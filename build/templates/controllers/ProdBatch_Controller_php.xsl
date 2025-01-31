<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'ProdBatch'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
			
<xsl:template match="/">
	<xsl:apply-templates select="metadata/controllers/controller[@id=$CONTROLLER_ID]"/>
</xsl:template>

<xsl:template match="controller"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>

require_once(dirname(__FILE__).'/../functions/ExtProg.php');

class <xsl:value-of select="@id"/>_Controller extends <xsl:value-of select="@parentId"/>{
	public function __construct($dbLinkMaster=NULL,$dbLink=NULL){
		parent::__construct($dbLinkMaster,$dbLink);<xsl:apply-templates/>
	}	
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	public function prod_list_for_doc($docId){
		$q_id = $this->getDbLink()->query(sprintf(
		"SELECT
			p.name,
			p.name_for_1c
		FROM doc_orders_t_products doc_p
		LEFT JOIN products as p on p.id = doc_p.product_id
		WHERE doc_p.doc_id = %d",
		$docId
		));
	
		$prod_list = [];
		while ($ar = $this->getDbLink()->fetch_array($q_id)){
			array_push($prod_list, array(
				'name'=>$ar['name'],
				'name_for_1c'=>$ar['name_for_1c']
			));
		}
		return $prod_list;
	}

	private function get_list_from_1c($prodList, $pattern){
		$xml = NULL;
		ExtProg::getProdBatchList($prodList, $pattern, $xml);
		
		$model = new Model(array("id"=>"ProdBatch1CList_Model"));
		foreach($xml->prod_batch_list->prod_batch as $b){
				$ds = (string) $b->batch_date;
				$d = substr($ds, 0, 10);
				$fields = array();
				array_push($fields, new Field('ext_id',DT_STRING,array('value'=>(string) $b->ext_id)));
				<!-- array_push($fields, new Field('batch_date',DT_DATE,array('value'=>(string) $b->batch_date))); -->
				<!-- array_push($fields, new Field('batch_num',DT_STRING,array('value'=>(string) $b->batch_num))); -->
				<!-- array_push($fields, new Field('prod_name',DT_STRING,array('value'=>(string) $b->prod_name))); -->
				<!-- array_push($fields, new Field('quant',DT_INT,array('value'=>(int) $b->quant))); -->
				array_push($fields, new Field('batch_descr', DT_STRING, array('value' =>
						(string) $b->batch_num. ' от '.$d.', ('.(string) $b->prod_name.', '.(int) $b->quant.'м3)'
						
				)));
				$model->insert($fields);
		}		
		$this->addModel($model);
	}

	public function get_list($pm){
		$this->get_list_from_1c([], "");
	}

	public function complete_from_1c($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();

		$prod_list = $this->prod_list_for_doc(
			$params->getParamById('doc_order_id')
		);
		$this->get_list_from_1c($prod_list, $pm->getParamValue('pattern'));
	}
</xsl:template>

</xsl:stylesheet>
