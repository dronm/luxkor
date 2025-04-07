<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'Product'"/>
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
require_once('common/downloader.php');

require_once('models/ProductFilterList_Model.php');
require_once('models/ProductDialog_Model.php');

require_once(dirname(__FILE__).'/../functions/ExtProg.php');

class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	private function str_to_SQLarray($str){
		$res = '';
		if ($str){
			$ar = explode(';',$str);
			foreach($ar as $v){
				$v = floatval(str_replace(',','.',$v));
				$res.=($res=='')? '':',';
				$res.=$v;//.'::numeric';
			}
		}
		return '{'.$res.'}';
	}
	public function correct_arrays($pm){
		//length
		$pm->setParamValue('mes_length_vals',
			$this->str_to_SQLarray($pm->getParamValue('mes_length_vals'))
		);
		
		//width
		$pm->setParamValue('mes_width_vals',
			$this->str_to_SQLarray($pm->getParamValue('mes_width_vals'))
		);
		
		//height
		$pm->setParamValue('mes_height_vals',
			$this->str_to_SQLarray($pm->getParamValue('mes_height_vals'))
		);		
	}

	public function update($pm){
		$this->correct_arrays($pm);
		parent::update($pm);
	}
	public function insert($pm){
		$this->correct_arrays($pm);
		parent::insert($pm);
	}	
	public function get_list_for_order($pm){
		$link = $this->getDbLink();		
		$params = new ParamsSQL($pm,$link);
		$params->setValidated("warehouse_id",DT_INT);
		$warehouse_id = $params->getParamById('warehouse_id');
		
		$model = new ProductList_Model($this->getDbLink());
		$q=sprintf(
			"SELECT id,name
			FROM products
			WHERE (%d=0) OR (%d>0 AND id=ANY(
				SELECT product_id
				FROM product_warehouses AS pw
				WHERE pw.warehouse_id=%d)
				)
			AND NOT coalesce(products.deleted,FALSE)
		ORDER BY name		
		",
		$warehouse_id,$warehouse_id,$warehouse_id);
		$model->query($q,TRUE);
		$this->addModel($model);
	}
	
	public function get_filter_list($pm){
		$link = $this->getDbLink();		
		$model = new ProductFilterList_Model($this->getDbLink());
		$model->query("SELECT * FROM products_filter_list",TRUE);
		$this->addModel($model);
	}
	
	public function complete($pm){
		$xml = NULL;
		ExtProg::completeProduct($pm->getParamValue('name'), $xml);

		$model = new Model(array("id"=>"ProductComplete_Model"));

		foreach($xml->product as $prod){
			$row = [
				'ref' => new Field('ref', DT_STRING, [ "value" => (string)$prod->ref]),
				'name' => new Field('name', DT_STRING, [ "value" => (string)$prod->name]),
				'name_full' => new Field('name_full', DT_STRING, [ "value" => (string)$prod->name_full]),
			];
			$model->insert(false,$row);
		}
		$this->addModel($model);

	}

	public function insertFrom1c($params){
		$l = $this->getDbLinkMaster();

		$ar = $this->query_first(sprintf(
		"INSERT INTO products (name, name_for_print, ref_1c, measure_unit_id)
		VALUES (
			%s, %s, %s, %d
		) ON CONFLICT ref_1c DO UPDATE
		SET
			name = excluded.name, 
			excluded.name_for_print, 
			measure_unit_id = excluded.measure_unit_id
		RETURNING id",
			$params["name"], $params["name_for_print"], $params["ref_1c"], $params["measure_unit_id"],
		));

		if(!is_array($ar) || !count($ar) || !isset($ar["id"])){
			throw new Exception("INSERT failed");
		}

		$model = new ProductDialog_Model($l);
		$model->query(
			sprintf("SELECT * FROM products_dialog WHERE id = %d", $ar["id"]),
		TRUE);
		$this->addModel($model);
	}

	public function upsert($pm){
		$l = $this->getDbLinkMaster();
		$ar = $this->query_first(sprintf(
		"INSERT INTO products (name, name_for_print, ref_1c, measure_unit_id)
		VALUES (
			%s, %s, %s, %d
		) ON CONFLICT ref_1c DO UPDATE
		SET
			name = excluded.name, 
			excluded.name_for_print, 
			measure_unit_id = excluded.measure_unit_id
		RETURNING id",
			$name, $name_for_print, $ref_1c, $measure_unit_id,
		));

		if(!is_array($ar) || !count($ar) || !isset($ar["id"])){
			throw new Exception("INSERT failed");
		}

		$model = new ProductDialog_Model($l);
		$model->query(
			sprintf("SELECT * FROM products_dialog WHERE id = %d", $ar["id"]),
		TRUE);
		$this->addModel($model);
	}

	public function create_in_1c($pm){
		$xml = NULL;
		$params1c = [
			"name" => $pm->getParamValue('name'),
			"name_full" => $pm->getParamValue('name_for_print')
		];
		ExtProg::createProductForLuxkor($params1c, $xml);

		$params1c = [
			"ref_1c" => (string) $xml->product->ref_1c,
			"name" => (string) $xml->product->name,
			"name_full" => (string) $xml->product->name_full
		];

		$this->insertFrom1c($params1c);
	}

</xsl:template>

</xsl:stylesheet>
