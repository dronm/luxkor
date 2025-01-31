<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'Payment'"/>
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

class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}	
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	public function get_schedule($pm){
		$client_id = $_SESSION['global_client_id'];
		if (!$client_id){
			throw new Exception("Не задан ид клиента!");
		}
		$this->addNewModel(sprintf(
		"SELECT
			(SELECT MIN(p.pay_date)
			FROM pay_schedule_list p
			WHERE p.pay_date>=now()::date
				AND p.client_id=%d
			)-now()::date AS pay_interval",
		$client_id
		),'pay_interval');
		$this->addNewModel(sprintf(
		"SELECT *
		FROM pay_schedule_list AS p
		WHERE p.pay_date>=now()::date
			AND p.client_id=%d",
		$client_id
		));
	}
	public function get_def_debt_details($pm){
		if (!$_SESSION['global_client_id']){
			throw new Exception("Не задан ид клиента!");
		}
		
		$debt_tot = $this->getDbLink()->query_first(sprintf(
		"SELECT SUM(def_debt) AS def_debt
		FROM client_debts
		WHERE client_id=%d",$_SESSION['global_client_id'])
		);
		$def_debt = (is_array($debt_tot)&amp;&amp;count($debt_tot))?
			$debt_tot['def_debt']:0;
		
		$this->addNewModel(sprintf(
		"SELECT * FROM client_debts_list
		WHERE client_id=%d",
		$_SESSION['global_client_id']));
		
		$this->addNewModel(sprintf(
		"SELECT
			'%s' AS banned,
			%f AS def_debt,
			(%f>0) AS def_debt_exists",
		$_SESSION['client_ship_not_allowed'],
		$def_debt,$def_debt),
		"ban_inf"
		);
	}
	
</xsl:template>

</xsl:stylesheet>