<?php
require_once('db_con.php');
require_once('ExtProg.php');
require_once('PPEmailSender.php');
require_once('common/MyDate.php');


//Акты сверок всем клиентам которые с постоплатой
$id = $dbLink->query(
"SELECT * FROM regl_client_list_for_balance");
$from = date('Y-m-d',MyDate::DateAdd('m',-3,mktime()));
$to = date('Y-m-d',MyDate::DateAdd('d',-1,mktime()));
while ($ar=$dbLink->fetch_array($id)){
	try{
		$tmp_file = ExtProg::print_balance(
			$from,$to,
			$ar['client_ext_id'],
			$ar['firm_ext_id']
		);
		PPEmailSender::addEMail(
			$dbLink,
			sprintf('email_text_balance_to_client(%d,%d)',
				$ar['firm_id'],$ar['client_id']),
			array($tmp_file),
			'balance_to_client'
		);
	}
	catch (Exception $e){
	}
}

?>
