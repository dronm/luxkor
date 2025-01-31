<?php
require_once('db_con.php');
require_once(ABSOLUTE_PATH.USER_CONTROLLERS_PATH.'Bank_Controller.php');

	Bank_Controller::refresh($dbLink);
?>
