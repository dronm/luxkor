<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'Warehouse'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
			
<xsl:template match="/">
	<xsl:apply-templates select="metadata/controllers/controller[@id=$CONTROLLER_ID]"/>
</xsl:template>

<xsl:template match="controller"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>
require_once('common/OSRMV5.php');

require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
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
	private function check_wh($pm){
		$name = $pm->getParamValue('name');
		if ($name){
			$ext_ref = ExtProg::getWarehouseRefOnName($name);
			if (!$ext_ref){
				throw new Exception('Соответствие в 1с не найдено!');
			}
			$pm->setParamValue('ext_id',$ext_ref);
		}
	}
	public function set_near_road($pm){
		$zone = $pm->getParamValue('zone');
		if ($zone &amp;&amp; $zone!='null'){		
			$pares = explode(',',$zone);
			if (count($pares)){
				$zone.=','.$pares[0];				
				//throw new Exception($zone);
				$ar=$this->getDbLink()->query_first(sprintf(
				"SELECT
					replace(replace(st_astext(ST_Centroid(ST_GeomFromText('POLYGON((%s))'))),'POINT(',''),')','')
					AS zone_center
				",
				$zone));
				$p = explode(' ',$ar['zone_center']);
				$osrm = new OSRMV5(OSRM_PROTOCOLE,OSRM_HOST,OSRM_PORT,'v1');
				$road_lat=NULL;$road_lon=NULL;
				$osrm->getNearestRoadCoord(
					$p[1],$p[0],
					$road_lat,$road_lon
					);
				$pm->setParamValue('near_road_lon',$road_lon);
				$pm->setParamValue('near_road_lat',$road_lat);
			}
		}
	}

	public function insert($pm){
		$this->check_wh($pm);
		$this->set_near_road($pm);
		parent::insert($pm);
	}
	public function update($pm){
		$this->check_wh($pm);
		$this->set_near_road($pm);
		parent::update($pm);
	}	
	
	public function get_list($pm){
		if ($_SESSION['role_id']!='admin'){
			$model = new WarehouseList_Model($this->getDbLink());
		
			$order = $this->orderFromParams($pm,$model);
			$where = $this->conditionFromParams($pm,$model);
			if (!$where){
				$where = new ModelWhereSQL();
			}
			$from = null; $count = null;
			$limit = $this->limitFromParams($pm,$from,$count);
			$calc_total = ($count>0);
			if ($from){
				$model->setListFrom($from);
			}
			if ($count){
				$model->setRowsPerPage($count);
			}		
		
			//Фильтр по deleted		
			$field = clone $model->getFieldById('deleted');
			$field->setValue('FALSE');
			$where->addField($field,'=',NULL,NULL);
		
			$model->select(FALSE,$where,$order,
				$limit,NULL,NULL,NULL,
				$calc_total,TRUE);
			//
			$this->addModel($model);
		
		}
		else{
			parent::get_list($pm);
		}
	}
	
	public function get_list_for_order($pm){
		$link = $this->getDbLink();		
		$params = new ParamsSQL($pm,$link);
		$params->setValidated("product_id",DT_INT);
		$product_id = $params->getParamById('product_id');
		
		$model = new WarehouseList_Model($this->getDbLink());
		$model->query(sprintf(
		"SELECT * FROM warehouse_list_for_order(%d,%d)",
			$_SESSION['LOGIN_ID'],
			$product_id
		),TRUE);
		$this->addModel($model);
	}
</xsl:template>

</xsl:stylesheet>
