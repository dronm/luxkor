<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Controller_php.xsl"/>

<!-- -->
<xsl:variable name="CONTROLLER_ID" select="'ClientUser'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
			
<xsl:template match="/">
	<xsl:apply-templates select="metadata/controllers/controller[@id=$CONTROLLER_ID]"/>
</xsl:template>

<xsl:template match="controller"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>
require_once('functions/PPEmailSender.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once('common/PwdGen.php');

class <xsl:value-of select="@id"/>_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);<xsl:apply-templates/>
	}	
	<xsl:call-template name="extra_methods"/>
}
<![CDATA[?>]]>
</xsl:template>

<xsl:template name="extra_methods">
	public function reset_pwd($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->setValidated("user_id",DT_INT);
	
		$pwd = gen_pwd(6);
		$link = $this->getDbLinkMaster();
		$link->query("BEGIN");
		try{
			$link->query(sprintf(
			"UPDATE users SET pwd=md5('%s')
			WHERE id=%d",
			$pwd,
			$params->getParamById('user_id')
			));
			
			//отправить по мылу
			PPEmailSender::addEMail(
				$link,
				sprintf("email_reset_pwd(%d,'%s')",
				$params->getParamById('user_id'),
				$pwd),
				NULL,
				'reset_pwd'
			);
			
			$link->query("COMMIT");
		}
		catch(Exception $e){
			$link->query("ROLLBACK");
			throw $e;
		}
	}
	public function insert($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->setValidated("client_id",DT_INT);
	
		$pm->setParamValue('role_id','client');
		$pm->setParamValue('pwd',DEF_USER_PWD);
		$pm->setParamValue('ret_id','1');
		$ar = parent::insert($pm);
		
		//отправить по мылу
		PPEmailSender::addEMail(
			$this->getDbLink(),
			sprintf("email_new_account(%d,%d,'%s')",
			$ar['id'],
			$params->getDbVal('client_id'),
			DEF_USER_PWD),
			NULL,
			'new_account'
		);
		
	}	
	public function get_list($pm){
		$val = $pm->getParamValue('cond_fields');
		$cond_f = (isset($val))? explode(',',$val):array();
		if (!array_key_exists('client_id',array_flip($cond_f))){
			throw new Exception("Не задан клиент!");
		}
		parent::get_list($pm);
	}		
</xsl:template>

</xsl:stylesheet>
