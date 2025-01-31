<?php
//require_once(dirname(__FILE__)."/../Config.php");
//require_once(FRAME_WORK_PATH.'db/db_pgsql.php');
require_once(dirname(__FILE__)."/../Config.php");
require_once(dirname(__FILE__)."/EmailSender.php");

class PPEmailSender extends EmailSender{

	public static function addEMail(
			$link,
			$funcText,
			$attArray=NULL,
			$mailType=NULL
		){
		$ar = $link->query_first(sprintf(
		"SELECT * FROM %s AS (
			body text,
			email text,
			mes_subject text,
			firm text,
			client text)",
		$funcText
		));
		
		$mail_id = NULL;
		if (is_array($ar) && count($ar) && $ar['email']){
			$mail_id = self::regEMail(
				$link,
				EMAIL_FROM_ADDR,EMAIL_FROM_NAME,
				$ar['email'],$ar['client'],
				EMAIL_FROM_ADDR,EMAIL_FROM_NAME,
				EMAIL_FROM_ADDR,
				$ar['mes_subject'],
				$ar['body']	,
				$mailType			
			);
			if (is_array($attArray)){
				foreach ($attArray as $f){
					PPEmailSender::addAttachment($link,$mail_id,$f);
				}
			}
		}
		return $mail_id;
	}
	public static function sendAllMail(&$dbLink,$smtpHost=NULL,$smtpPort=NULL,$smtpUser=NULL,$smtpPwd=NULL,$delFiles=TRUE){
		$smtpHost = is_null($smtpHost)? SMTP_HOST:$smtpHost;
		$smtpPort = is_null($smtpPort)? SMTP_PORT:$smtpPort;
		$smtpUser = is_null($smtpUser)? SMTP_USER:$smtpUser;
		$smtpPwd = is_null($smtpPwd)? SMTP_PWD:$smtpPwd;
		
		parent::sendAllMail($dbLink,$smtpHost,$smtpPort,$smtpUser,$smtpPwd,$delFiles);
	}
	
}
?>
