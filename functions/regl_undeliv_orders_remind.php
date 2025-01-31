<?php
require_once('db_con.php');

$id = $dbLink->query(
"INSERT INTO sms_for_sending
(tel,body,sms_type)
	(SELECT
		t.cel_phone,
		t.message,
		'client_deliv_remind'::sms_types
	FROM sms_undeliv_orders_remind t
	)");

?>