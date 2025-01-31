<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'Driver'"/>
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

require_once(FRAME_WORK_PATH.'basic_classes/ModelVars.php');
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
	private function check_driver($pm){
		$res = array();
		$ext_ref = ExtProg::getPersonRefOnName($pm->getParamValue('name'),$res);
		if ($ext_ref){
			$pm->setParamValue('ext_id',$ext_ref);
			if (count($res) &amp;&amp; $res['drive_perm'] &amp;&amp; strlen($res['drive_perm'])){
				$pm->setParamValue('drive_perm',$res['drive_perm']);
			}
		}		
	}
	public function insert($pm){
		$this->check_driver($pm);
		parent::insert($pm);
	}
	public function update($pm){
		$this->check_driver($pm);
		parent::update($pm);
	}
	
	public function get_veh_attrs($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		$ar = $this->getDbLink()->query_first(sprintf("SELECT ext_id FROM drivers WHERE id=%d",$p->getDbVal('driver_id')));
		if (!$ar || !is_array($ar) || !count($ar) || !$ar['ext_id']){
			throw new Exception("Водителя не связан с 1с!");
		}
	
		$res = array();
		ExtProg::getDriverAttrs($ar['ext_id'],$res);	
		
		if ($res['carrier_descr']){
			$p->add('carrier_descr',DT_STRING,$res['carrier_descr']);
			$ar = $this->getDbLink()->query_first(sprintf("SELECT id FROM carriers WHERE name=%s",$p->getDbVal('carrier_descr')));
			if (!$ar || !is_array($ar) || !count($ar)){
				$this->getDbLinkMaster()->query(sprintf("INSERT INTO carriers (name) VALUES(%s)",$p->getDbVal('carrier_descr')));
			}else{
				$res['carrier_id'] = $ar['id'];
			}
		}
		
		$this->addModel(new ModelVars(
			array('id'=>'get_veh_attrs',
				'values'=>array(
					new Field('plate',DT_STRING,array('value'=>$res['plate'])),
					new Field('trailer_plate',DT_STRING,array('value'=>$res['trailer_plate'])),
					new Field('trailer_model',DT_STRING,array('value'=>$res['trailer_model'])),
					new Field('carrier_id',DT_STRING,array('value'=>$res['carrier_id'])),
					new Field('carrier_descr',DT_STRING,array('value'=>$res['carrier_descr']))
				)
			))
		);
	}	
</xsl:template>

</xsl:stylesheet>
