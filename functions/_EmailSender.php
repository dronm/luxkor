<?php
require("common/mimemessage/email_message.php");
require("common/mimemessage/smtp_message.php");
require("common/mimemessage/smtp.php");
require("common/mimemessage/sasl.php");
require("common/mimemessage/login_sasl_client.php");

class EmailSender {
	public static function addEMail(
				$dbLink,
				$from,$fromName,
				$to,$toName,
				$reply,$replyName,
				$sender,
				$subject,
				$body,
				$smsType=NULL){
		if (strlen($to)){
			$ar = $dbLink->query_first(sprintf(
			"INSERT INTO mail_for_sending 
					(from_addr,from_name,
					to_addr,to_name,
					reply_addr,reply_name,
					sender_addr,subject,body,email_type)
					VALUES ('%s','%s',
						'%s','%s',
						'%s','%s',
						'%s','%s','%s',%s)
					RETURNING id",
					$from,$fromName,
					$to,$toName,
					$reply,$replyName,
					$sender,
					$subject,
					$body,
					is_null($smsType)? 'NULL':"'".$smsType."'"
			));
			
			return $ar['id'];
		}
	}
	
	public static function addAttachment($dbLink,
				$mailId,$fileName){
		if ($mailId){
			$dbLink->query(sprintf(
			"INSERT INTO
				mail_for_sending_attachments
				(mail_for_sending_id,file_name)
			VALUES (%d,'%s')",
			$mailId,$fileName)
			);	
		}
	}
	public static function sendAllMail($dbLink,
				$smtpHost,$smtpPort,$smtpUser,$smtpPwd,$delFiles){
		// Perform Query
		$result = $dbLink->query(
			"SELECT
				m.id AS email_id,
				m.from_addr,
				m.from_name,
				m.to_addr,
				m.to_name,
				m.reply_addr,
				m.reply_name,
				m.body,
				m.sender_addr,
				m.subject,
				mat.file_name
				
			FROM mail_for_sending AS m
			LEFT JOIN mail_for_sending_attachments AS mat
				ON mat.mail_for_sending_id=m.id
			WHERE m.sent=FALSE");
		$email_id = 0;
		while ($row=$dbLink->fetch_array($result)){
			if ($row['email_id']!=$email_id){
				if ($email_id!=0&&$mail){
					self::send_mail($dbLink,$email_id,$mail,$mail_files,$delFiles);
				}
				if (strlen($row['body'])){
					$mail=new smtp_message_class;
					//$mail->smtp_debug 		= 1;
					$mail->default_charset	='UTF-8';				
					$mail->smtp_host		= $smtpHost;
					$mail->smtp_port		= $smtpPort;
					$mail->smtp_ssl			= 1;
					$mail->smtp_authentication_mechanism="LOGIN";
					$mail->smtp_user		= $smtpUser;
					$mail->smtp_password	= $smtpPwd;
					$mail->smtp_direct_delivery = 0;
					//header
					$mail->SetEncodedEmailHeader("To",$row['to_addr'],$row['to_name']);
					$mail->SetEncodedEmailHeader("From",$row['from_addr'],$row['from_name']);
					$mail->SetEncodedEmailHeader("Reply-To",$row['reply_addr'],$row['reply_name']);
					$mail->SetHeader("Sender",$row['sender_addr']);
					$mail->SetEncodedHeader("Subject",$row['subject']);
				
					$mail->AddQuotedPrintableTextPart($mail->WrapText($row['body']));
				}
				
				$mail_files = array();				
			}
			if (strlen($row['file_name'])&&strlen($row['body'])){
				if (file_exists(ABSOLUTE_PATH.$row['file_name'])){
					$attachment=array(
						"FileName"=>ABSOLUTE_PATH.$row['file_name'],
						"Content-Type"=>"automatic/name",
						"Disposition"=>"attachment"
					);
	
					$mail->AddFilePart($attachment);
					array_push($mail_files,ABSOLUTE_PATH.$row['file_name']);
				}
			}
			$email_id = $row['email_id'];
		}
		if ($email_id!=0){
			try{
				self::send_mail($dbLink,$email_id,$mail,$mail_files,$delFiles);
			}
			catch (Exception $e){
			}
		}
		
	}
	public static function send_mail($dbLink,
		$emailId,$emailMessage,$mailFiles,$delFiles){			
		//sending
		if ($emailMessage){
			$error=$emailMessage->Send();
			if(strcmp($error,"")){
				throw new Exception("Error: $error\n");
			}
			else{
				try{
					$dbLink->query("BEGIN");
					$dbLink->query(
					"UPDATE mail_for_sending
					SET
						sent=TRUE,
						sent_date_time=now()::timestamp
					WHERE id=".$emailId);
					
					if (count($mailFiles)&&$delFiles){
						foreach ($mailFiles as $file_name){
							if (file_exists($file_name)){
								unlink($file_name);
							}
						}
					}
					$dbLink->query("COMMIT");
				}
				catch(Exception $e){
					$dbLink->query("ROLLBACK");
					throw $e;
				}
			}		
		}
	}
}
?>