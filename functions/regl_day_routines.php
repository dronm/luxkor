<?php
require_once('db_con.php');
require_once('EmailSender.php');
require_once('PPEmailSender.php');

/***************** Закрытие несгласованных заявок *******************************/
$ar = $dbLink->query_first(
"SELECT
	MAX(t.id) AS max_id
FROM doc_orders_states t");


$dbLink->query("SELECT doc_orders_to_archive()");

$id = $dbLink->query(
"SELECT
	t.doc_orders_id AS doc_id
FROM doc_orders_states t
WHERE t.state='canceled_by_sales_manager'
	AND t.id>".$ar['max_id']);

//отправим собщения
while ($ar = $dbLink->fetch_array($id)){
	PPEmailSender::addEMail(
		$dbLink,
		sprintf("email_text_order_cancel(%d)",$ar['doc_id']),
		NULL,
		'order_cancel'
		);
}


/****************** Напоминане снабженцу **********************/
$id = $dbLink->query("SELECT * FROM email_text_order_remind WHERE deliv_date = now()::date+'1 day'::interval");

//отправим собщения
while ($ar = $dbLink->fetch_array($id)){

	$mail_id = EmailSender::addEMail(
		$link,
		EMAIL_FROM_ADDR,EMAIL_FROM_NAME,
		$ar['email'],$ar['client'],
		EMAIL_FROM_ADDR,EMAIL_FROM_NAME,
		EMAIL_FROM_ADDR,
		$ar['mes_subject'],
		$ar['body'],
		'order_remind'			
	);

}

/******************** Закрытие не закрытых заявок за 24 часа**************************/
$dbLink->query("INSERT INTO doc_orders_states
	(doc_orders_id,date_time,state)
	(
		SELECT
			s.id,s.date_time+'1 second'::interval,'closed'
		FROM	
		(
		SELECT DISTINCT ON (doc_orders_id)
		       doc_orders_id AS id, state,date_time
		FROM   doc_orders_states
		ORDER  BY doc_orders_id,date_time DESC
		) AS s
		WHERE (s.state = 'shipped' OR s.state = 'on_way')
			AND (s.date_time+'24 hours'::interval) < now()
	)"
);
?>
