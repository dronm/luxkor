<?php
require_once("db_con.php");
require_once("PPEmailSender.php");

PPEmailSender::sendAllMail($dbLink);
?>
