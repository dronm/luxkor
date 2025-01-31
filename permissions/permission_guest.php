<?php
/**
	DO NOT MODIFY THIS FILE!	
	Its content is generated automaticaly from template placed at build/permissions/permission_php.tmpl.	
 */
function method_allowed($contrId,$methId){
$permissions = array();

			$permissions['Client_Controller_register']=TRUE;
		
			$permissions['Client_Controller_check_on_user_name']=TRUE;
		
			$permissions['Client_Controller_check_on_inn']=TRUE;
		
			$permissions['User_Controller_login']=TRUE;
		
			$permissions['User_Controller_login_html']=TRUE;
		
			$permissions['User_Controller_logged']=TRUE;
		
			$permissions['User_Controller_logout']=TRUE;
		
return array_key_exists($contrId.'_'.$methId,$permissions);
}
?>