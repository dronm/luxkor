<?php
require_once('db_con.php');
require_once(dirname(__FILE__).'/../'.USER_CONTROLLERS_PATH.'Client_Controller.php');

$contr = new Client_Controller($dbLink,$dbLink);
$contr->refresh_debts(NULL);
?>
