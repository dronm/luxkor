<?php
require_once(FRAME_WORK_PATH.'basic_classes/ControllerSQL.php');

require_once(FRAME_WORK_PATH.'basic_classes/FieldExtInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtText.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtDateTime.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtDate.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtPassword.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtBool.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtGeomPoint.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtGeomPolygon.php');

/**
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/controllers/Controller_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 */


require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/GlobalFilter.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelWhereSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once(dirname(__FILE__).'/../functions/ExtProg.php');

class User_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('name'
				,array('required'=>TRUE,
				'alias'=>'логин'
			));
		$pm->addParam($param);
		$param = new FieldExtString('name_full'
				,array('required'=>TRUE,
				'alias'=>'ФИО'
			));
		$pm->addParam($param);
		$param = new FieldExtString('sign_order'
				,array(
				'alias'=>'Приказ'
			));
		$pm->addParam($param);
		
				$param = new FieldExtEnum('role_id',',','admin,client,sales_manager,production,marketing,boss,representative'
				,array(
				'alias'=>'роль'
			));
		$pm->addParam($param);
		$param = new FieldExtString('email'
				,array('required'=>FALSE,
				'alias'=>'эл.почта'
			));
		$pm->addParam($param);
		$param = new FieldExtPassword('pwd'
				,array(
				'alias'=>'пароль'
			));
		$pm->addParam($param);
		$param = new FieldExtString('cel_phone'
				,array('required'=>FALSE));
		$pm->addParam($param);
		$param = new FieldExtInt('client_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('tel_ext'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('ext_login'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('User_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtInt('old_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		$param = new FieldExtInt('id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('name'
				,array(
			
				'alias'=>'логин'
			));
			$pm->addParam($param);
		$param = new FieldExtString('name_full'
				,array(
			
				'alias'=>'ФИО'
			));
			$pm->addParam($param);
		$param = new FieldExtString('sign_order'
				,array(
			
				'alias'=>'Приказ'
			));
			$pm->addParam($param);
		
				$param = new FieldExtEnum('role_id',',','admin,client,sales_manager,production,marketing,boss,representative'
				,array(
			
				'alias'=>'роль'
			));
			$pm->addParam($param);
		$param = new FieldExtString('email'
				,array(
			
				'alias'=>'эл.почта'
			));
			$pm->addParam($param);
		$param = new FieldExtPassword('pwd'
				,array(
			
				'alias'=>'пароль'
			));
			$pm->addParam($param);
		$param = new FieldExtString('cel_phone'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('client_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('tel_ext'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('ext_login'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('User_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('User_Model');

			
		/* get_list */
		$pm = new PublicMethod('get_list');
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));
		$pm->addParam(new FieldExtString('cond_fields'));
		$pm->addParam(new FieldExtString('cond_sgns'));
		$pm->addParam(new FieldExtString('cond_vals'));
		$pm->addParam(new FieldExtString('cond_ic'));
		$pm->addParam(new FieldExtString('ord_fields'));
		$pm->addParam(new FieldExtString('ord_directs'));
		$pm->addParam(new FieldExtString('field_sep'));

		$this->addPublicMethod($pm);
		
		$this->setListModelId('UserList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('UserDialog_Model');		

			
		/* complete  */
		$pm = new PublicMethod('complete');
		$pm->addParam(new FieldExtString('pattern'));
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('ic'));
		$pm->addParam(new FieldExtInt('mid'));
		$pm->addParam(new FieldExtString('name'));		
		$this->addPublicMethod($pm);					
		$this->setCompleteModelId('UserList_Model');

			
		$pm = new PublicMethod('login');
		
				
	$opts=array();
	
		$opts['alias']='Имя пользователя';
		$opts['length']=50;				
		$pm->addParam(new FieldExtString('name',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Пароль';
		$opts['length']=20;				
		$pm->addParam(new FieldExtPassword('pwd',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('logout');
		
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('login_html');
		
				
	$opts=array();
	
		$opts['alias']='Имя пользователя';
		$opts['length']=50;				
		$pm->addParam(new FieldExtString('name',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Пароль';
		$opts['length']=20;				
		$pm->addParam(new FieldExtPassword('pwd',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('logged');
		
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_account');
		
		$this->addPublicMethod($pm);
			
			
		$pm = new PublicMethod('complete_from_1c');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('pattern',$opts));
	
			
		$this->addPublicMethod($pm);
			
		
	}
	
	private function check_user($pm){
		if ($pm->getParamValue('name')){
			//если есть имя
			$ext_ref = ExtProg::getUserRefOnName($pm->getParamValue('ext_login'));
			if ($ext_ref){
				$pm->setParamValue('ext_id',$ext_ref);
			}				
		}
	}
	
	public function insert($pm){
		/*
		Сотрудников с правами
			- Производство
			- маркетолог
			- босс
			- админ
			заводит только АДМИН!
		*/
		if ($_SESSION['role_id']!='admin'
		&&
		array_key_exists($pm->getParamValue('role_id'),
			array('production'=>1,'marketing'=>2,
				'boss'=>3,'admin'=>4))
		){
			$l = $this->getDbLink();
			$p = new ParamsSQL($pm,$l);
			$p->setValidated('role_id');
			
			$ar = $l->query_first(sprintf(
			"SELECT get_role_types_descr(%s) AS role_descr",
			$p->getParamById('role_id')));
			if (count($ar)==1){
				throw new Exception(sprintf("Пользователя с набором прав '%s' может заводить только администратор!",
					$ar['role_descr']));
			}
		}
		$pm->setParamValue('pwd',DEF_USER_PWD);
		
		$this->check_user($pm);
		parent::insert($pm);
	}
	
	
	
	private function setLogged($logged){
		if ($logged){			
			$_SESSION['LOGGED'] = true;			
		}
		else{
			session_destroy();
			$_SESSION = array();
		}		
	}
	private function getLogged(){
		return (isset($_SESSION["LOGGED"]) AND $_SESSION["LOGGED"]);
	}
	public function logout(){
		$this->setLogged(FALSE);
	}
	public function logout_html(){
		$this->logout();
		header("Location: index.php");
	}
	public function do_login($pm){
		$name = NULL;
		$pwd = NULL;
		$link = $this->getDbLink();
		FieldSQLString::formatForDb($link,
			$pm->getParamValue('name'),$name);
		FieldSQLString::formatForDb($link,
			$pm->getParamValue('pwd'),$pwd);
	
		$this->login_user($name,$pwd);
	}
	public function login_user($name,$pwd){
		$link = $this->getDbLink();
		
		
		$ar = $link->query_first(sprintf(
			"SELECT
				u.name AS name,
				u.role_id,
				u.id,
				u.client_id,
				u.tel_ext,
				u.ext_id AS user_ext_id,
				get_role_types_descr(u.role_id) AS role_descr,
				
				cl.login_allowed AS login_allowed,
				cl.pay_type AS payment_type,
				cl.pay_delay_days,
				cl.pay_ban_on_debt_days,
				cl.pay_debt_days,
				cl.pay_ban_on_debt_sum,
				cl.pay_debt_sum,
				cl.ext_id,
				
				(SELECT string_agg(uw.warehouse_id::text,',')
				FROM user_warehouses uw
				WHERE uw.user_id=u.id
				) AS warehouse_id_list,
				
				(SELECT string_agg(w.name,', ')
				FROM user_warehouses uw
				LEFT JOIN warehouses w ON w.id= uw.warehouse_id
				WHERE uw.user_id=u.id
				) AS warehouse_descr_list
				
			FROM users AS u
			LEFT JOIN clients AS cl ON cl.id=u.client_id
			WHERE u.name=%s AND u.pwd=md5(%s)",
			$name,$pwd));
		if (is_array($ar)&&count($ar)){
			if ($ar['login_allowed']=='false'){
				throw new Exception('Доступ в личный кабинет закрыт!');
			}
			$this->setLogged(TRUE);
			$this->getDbLinkMaster()->query(
				sprintf("UPDATE logins SET 
					user_id = '%s'
				WHERE session_id='%s' AND user_id IS NULL",
				$ar['id'], session_id())
			);				
			
			$_SESSION['user_id']			= $ar['id'];
			$_SESSION['user_name']			= $ar['name'];
			$_SESSION['user_ext_id']		= $ar['user_ext_id'];			
			$_SESSION['role_id']			= $ar['role_id'];
			$_SESSION['role_descr'] 		= $ar['role_descr'];
			$_SESSION['warehouse_id_list']	= $ar['warehouse_id_list'];
			$_SESSION['warehouse_descr']	= $ar['warehouse_descr_list'];
			$_SESSION['client_id']			= $ar['client_id'];
			$_SESSION['tel_ext']			= $ar['tel_ext'];
			$_SESSION['client_payment_type']= $ar['payment_type'];
			
			$client_ship_not_allowed = FALSE;
			
			if ($ar['payment_type']=='with_delay'
				&&
				($ar['pay_ban_on_debt_days']
				||$ar['pay_ban_on_debt_sum'])
				){
				/* Расчет просроченной задолженности */
				$debt_res = $link->query(sprintf(
					"SELECT
						t.firm_id,
						t.days AS days,
						SUM(t.def_debt) AS debt
					FROM client_debts t
					WHERE t.client_id=%d
					GROUP BY t.firm_id,t.days",
					$ar['client_id']
				));
				while($debt_ar=$link->fetch_array($debt_res)){
					$client_ship_not_allowed = 
					(
						($ar['pay_ban_on_debt_days']
						&&
						intval($debt_ar['days'])>intval($ar['pay_debt_days'])
						)
						||
						($ar['pay_ban_on_debt_sum']
						&&
						floatval($debt_ar['debt'])>floatval($ar['pay_debt_sum'])
						)
					);
					if ($client_ship_not_allowed){
						break;
					}
				}
			}			
			$_SESSION['client_ship_not_allowed']= $client_ship_not_allowed;
			
			//global filters
			if ($ar['role_id']=='client'){
				$_SESSION['global_client_id'] = $ar['client_id'];
				
				$model = new ClientDestination_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('ClientDestination_Model',$filter);
				
				$model = new ClientDestinationList_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('ClientDestinationList_Model',$filter);
				
				$model = new ClientDestinationDialog_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('ClientDestinationDialog_Model',$filter);
				
				$model = new DOCOrder_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('DOCOrder_Model',$filter);
				
				$model = new DOCOrderNewList_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('DOCOrderNewList_Model',$filter);
				
				$model = new DOCOrderCurrentList_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('DOCOrderCurrentList_Model',$filter);
				
				$model = new DOCOrderCurrentForClientList_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('DOCOrderCurrentForClientList_Model',$filter);
				
				$model = new DOCOrderCurrentForProductionList_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('DOCOrderCurrentForProductionList_Model',$filter);
				
				$model = new DOCOrderClosedList_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('DOCOrderClosedList_Model',$filter);
				
				$model = new ClientPriceListClient_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('ClientPriceListClient_Model',$filter);
				
				$model = new ClientPriceListClientList_Model($link);
				$filter = new ModelWhereSQL();
				$field = clone $model->getFieldById('client_id');
				$field->setValue($ar['client_id']);
				$filter->addField($field,'=');
				GlobalFilter::set('ClientPriceListClientList_Model',$filter);
				
			}			
			
			$log_ar = $this->getDbLinkMaster()->query_first(
				sprintf("SELECT id,pub_key FROM logins
				WHERE session_id='%s' AND user_id ='%s' AND date_time_out IS NULL",
				session_id(),$ar['id'])
			);
			if (!$log_ar['id']){
				//no user login
				
				$this->pub_key = uniqid();
				
				$log_ar = $this->getDbLinkMaster()->query_first(
					sprintf("UPDATE logins SET 
						user_id = '%s',
						pub_key = '%s'
					WHERE session_id='%s' AND user_id IS NULL
					RETURNING id",
					$ar['id'],$this->pub_key,session_id())
				);				
				if (!$log_ar['id']){
					//нет вообще юзера
					$log_ar = $this->getDbLinkMaster()->query_first(
						sprintf("INSERT INTO logins
						(date_time_in,ip,session_id,pub_key,user_id)
						VALUES('%s','%s','%s','%s','%s')
						RETURNING id",
						date('Y-m-d H:i:s'),$_SERVER["REMOTE_ADDR"],
						session_id(),$this->pub_key,$ar['id'])
					);								
				}
				//$_SESSION['LOGIN_ID'] = $log_ar['id'];				
			}
			else{
				//user logged
				$this->pub_key = trim($log_ar['pub_key']);
			}
			$_SESSION['LOGIN_ID'] = $log_ar['id'];			
		}
		else{
			throw new Exception('Не верное имя пользователя или пароль.');
		}
	}
	public function logged(){
		if (!$this->getLogged()){
			throw new Exception('not logged');
		}
	}
	public function login($pm){
		$this->do_login($pm);
	}
	public function login_html($pm){
		//returns index if logged
		if (isset($_REQUEST['submit_register'])){
			header("Location: index.php?c=Client_Controller&v=ClientRegister");
		}
		else{
			$this->do_login($pm);
			header("Location: index.php");
		}
	}
	public function set_new_pwd($pm){
		$link = $this->getDbLink();
		$pwd = NULL;
		FieldSQLString::formatForDb($link,
			$pm->getParamValue('pwd'),
			$pwd);
	
		$this->getDbLinkMaster()->query(sprintf(
			"UPDATE users SET pwd=md5(%s)
			WHERE id=%d",
			$pwd,$_SESSION['user_id'])
		);
	}
	public function get_account($pm){
		$this->addNewModel(sprintf(
		"SELECT id,name,name_full,email,cel_phone
			FROM user_dialog_view
			WHERE id=%d",$_SESSION['user_id'])
		);
	}
	public function update($pm){
		if ($_SESSION['role_id']=='client'){
			$pm->setParamValue('old_id',$_SESSION['user_id']);
		}
		
		$this->check_user($pm);
		
		$pwd = $pm->getParamValue('pwd');
		if (!isset($pwd) || $pwd==''){
			$ar = $this->getDbLink()->query_first(sprintf("SELECT pwd FROM users WHERE id=%d",$_SESSION['user_id']));
			$pm->setParamValue('pwd',$ar['pwd']);
		}
		//throw new Exception('PWD='.$pm->getParamValue('pwd'));
		parent::update($pm);
	}
	
	public function complete_from_1c($pm){
		$model = new Model(array("id"=>"complete_from_1c"));
		$model->addField(new Field("id",DT_STRING));
		$model->addField(new Field("descr",DT_STRING));
	
		$res=Array();
		ExtProg::completeUser(
			$pm->getParamValue('pattern'),$res);
		foreach($res as $key=>$val){
			$model->insert();
			$model->getFieldById('id')->setValue($val['ref']);
			$model->getFieldById('descr')->setValue($val['name']);
		}
		$this->addModel($model);
	}
	

}
?>