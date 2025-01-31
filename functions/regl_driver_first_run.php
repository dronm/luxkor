<?php
require_once('db_con.php');

$id = $dbLink->query(
"INSERT INTO sms_for_sending
(tel,body,sms_type)
	(SELECT
		t.cel_phone,
		t.message,
		'driver_first_deliv'::sms_types
	FROM sms_driver_first_deliv t
	WHERE t.deliv_date=now()::date+'1 day'::interval
	)");
?>