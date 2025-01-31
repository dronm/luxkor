<?php
require_once('db_con.php');

//SMS сообщения принирмающему
$dbLink->query(
"INSERT INTO sms_for_sending
(tel,body,sms_type)
	(SELECT
		t.cel_phone,
		t.message,
		'client_remind'::sms_types
	FROM sms_client_remind t
	WHERE t.deliv_date=now()::date+'1 day'::interval
	)");
	
//EMAIL сообщения снабженцу	
?>