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


require_once(dirname(__FILE__).'/../functions/ExtProg.php');
require_once(dirname(__FILE__).'/../functions/EmailSender.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once('User_Controller.php');
require_once(dirname(__FILE__).'/../models/ClientDebtList_Model.php');

class Client_Controller extends ControllerSQL{

	const ER_CLIENT_REGISTERED = 'Организация уже зарегистрирована!';
	const ER_LOGIN_IN_USE = 'Логин занят!';
	
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('name'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtText('name_full'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('inn'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtString('kpp'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('addr_reg'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtText('addr_mail'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('addr_mail_same_as_reg'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('telephones'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('ogrn'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('okpo'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('acc'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('bank_name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('bank_code'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('bank_acc'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('registered'
				,array());
		$pm->addParam($param);
		
				$param = new FieldExtEnum('pay_type',',','cash,in_advance,with_delay'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('pay_delay_days'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('pay_fix_to_dow'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('pay_dow_days'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('pay_ban_on_debt_days'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('pay_debt_days'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('pay_ban_on_debt_sum'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('pay_debt_sum'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('login_allowed'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('sms_on_order_change'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('email_sert'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('show_delivery_tab'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('client_activity_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('def_firm_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('def_warehouse_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('deleted'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('Client_Model');

			
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
			));
			$pm->addParam($param);
		$param = new FieldExtText('name_full'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('inn'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('kpp'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('addr_reg'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('addr_mail'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('addr_mail_same_as_reg'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('telephones'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('ogrn'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('okpo'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('acc'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('bank_name'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('bank_code'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('bank_acc'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('registered'
				,array(
			));
			$pm->addParam($param);
		
				$param = new FieldExtEnum('pay_type',',','cash,in_advance,with_delay'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('pay_delay_days'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pay_fix_to_dow'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('pay_dow_days'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pay_ban_on_debt_days'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('pay_debt_days'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pay_ban_on_debt_sum'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('pay_debt_sum'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('login_allowed'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('sms_on_order_change'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('email_sert'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('show_delivery_tab'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('client_activity_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('def_firm_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('def_warehouse_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('deleted'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('Client_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('Client_Model');

			
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
		
		$this->setListModelId('ClientList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('ClientDialog_Model');		

			
		/* complete  */
		$pm = new PublicMethod('complete');
		$pm->addParam(new FieldExtString('pattern'));
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('ic'));
		$pm->addParam(new FieldExtInt('mid'));
		$pm->addParam(new FieldExtString('name'));		
		$this->addPublicMethod($pm);					
		$this->setCompleteModelId('ClientComplete_Model');

			
		$pm = new PublicMethod('get_unreg_list');
		
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_unreg_client_list');
		
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_user_list');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('client_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_contract_list');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('client_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('complete_from_1c');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('pattern',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('attrs_from_1c');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('name',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('register');
		
				
	$opts=array();
	
		$opts['alias']='Наименование';
		$opts['length']=150;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('name',$opts));
	
				
	$opts=array();
	
		$opts['alias']='ИНН';
		$opts['length']=12;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('inn',$opts));
	
				
	$opts=array();
	
		$opts['alias']='КПП';
		$opts['length']=10;				
		$pm->addParam(new FieldExtString('kpp',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Адрес юридический';
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtText('addr_reg',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Адрес почтовый';				
		$pm->addParam(new FieldExtText('addr_mail',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Почтовый адрес совпадает с юридическим';				
		$pm->addParam(new FieldExtBool('addr_mail_same_as_reg',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Телефоны';				
		$pm->addParam(new FieldExtText('telephones',$opts));
	
				
	$opts=array();
	
		$opts['alias']='ОГРН';
		$opts['length']=15;				
		$pm->addParam(new FieldExtString('ogrn',$opts));
	
				
	$opts=array();
	
		$opts['alias']='ОКПО';
		$opts['length']=20;				
		$pm->addParam(new FieldExtString('okpo',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Расчетный счет';
		$opts['length']=20;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('acc',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Банк';
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtText('bank_name',$opts));
	
				
	$opts=array();
	
		$opts['alias']='БИК';
		$opts['length']=9;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('bank_code',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Корр. счет';
		$opts['length']=20;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('bank_acc',$opts));
	
				
	$opts=array();
	
		$opts['alias']='ФИО ответственного';
		$opts['length']=150;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('user_name_full',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Логин ответственного';
		$opts['length']=50;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('user_name',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Пароль ответственного';
		$opts['length']=50;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('user_pwd',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Адрес электронной почты ответственного';
		$opts['length']=50;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('user_email',$opts));
	
				
	$opts=array();
	
		$opts['alias']='Номер телефона ответственного';
		$opts['length']=15;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('user_phone',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('check_on_user_name');
		
				
	$opts=array();
	
		$opts['length']=50;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('user_name',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('check_on_inn');
		
				
	$opts=array();
	
		$opts['length']=12;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('inn',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_pop_firm');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('client_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_debts_on_firm');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('firm_id',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('client_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_debt_list');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_fields',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_vals',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_sgns',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_ic',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('from',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('count',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('ord_fields',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('ord_directs',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('refresh_debts');
		
		$this->addPublicMethod($pm);

		
	}	
	
	public function check_on_user_name($pm){
		$link = $this->getDbLink();
		
		$params = new ParamsSQL($pm,$link);
		$params->setValidated("user_name",DT_STRING);
		
		$ar=$link->query_first(
		sprintf("SELECT 1 AS res FROM users WHERE name=%s",
		$params->getParamById('user_name'))
		);
		if (is_array($ar)&&count($ar)){
			throw new Exception(Client_Controller::ER_LOGIN_IN_USE);
		}
	}
	private function get_1c_ref_on_inn($inn){
		return ExtProg::getClientRefOnINN($inn);
	}
	
	public function check_on_inn($pm){
		//Проверяем по pg
		$link = $this->getDbLink();
		$params = new ParamsSQL($pm,$link);
		$params->setValidated("inn",DT_STRING);
		$ar = $link->query_first(sprintf(
		"SELECT id FROM clients WHERE inn=%s",
		$params->getParamById('inn')
		));
		if (is_array($ar)&&count($ar)){
			throw new Exception(Client_Controller::ER_CLIENT_REGISTERED);
		}
		
		//Проверяем по базе 1с
		if (strlen($this->get_1c_ref_on_inn($pm->getParamValue('inn')))){
			throw new Exception(Client_Controller::ER_CLIENT_REGISTERED);
		}
	}
	public function register($pm){		
		//checkings
		
		$ext_id = $this->get_1c_ref_on_inn($pm->getParamValue('inn'));
		if (strlen($ext_id)){
			throw new Exception(Client_Controller::ER_CLIENT_REGISTERED);
		}
		$ext_id="'".$ext_id."'";
		
		
		$this->check_on_user_name($pm);
		
		$link_master = $this->getDbLinkMaster();
		$link = $this->getDbLink();
		
		$params = new ParamsSQL($pm,$link);
		$params->addAll();

		//проверка по имени и ИНН в нашей базе
		$ar = $link->query_first(
		sprintf("SELECT
				(name=%s) AS same_name,
				(inn=%s) AS same_inn
			FROM clients
			WHERE name=%s OR inn=%s",
		$params->getParamById('name'),
		$params->getParamById('inn'),
		$params->getParamById('name'),
		$params->getParamById('inn')
		));
		if (is_array($ar)&&count($ar)){
			throw new Exception('Клиент с таким '.( ($ar['same_name']=='t')? 'наименованием':'ИНН') .'уже есть в базе!');
		}
		
		$struc_1c = array(
			'name'=>$params->getParamById('name')
			,'name_full'=>$params->getParamById('name_full')
			,'inn'=>$params->getParamById('inn')
			,'kpp'=>$params->getParamById('kpp')
			,'okpo'=>$params->getParamById('okpo')
			,'ogrn'=>$params->getParamById('ogrn')
			,'addr_reg'=>$params->getParamById('addr_reg')
			,'addr_mail'=> $params->getParamById(($params->getParamById('addr_mail_same_as_reg')=='true')? 'addr_mail':'addr_reg')
			,'acc'=>$params->getParamById('acc')
			,'bank_name'=>$params->getParamById('bank_name')
			,'bank_code'=>$params->getParamById('bank_code')
			,'bank_acc'=>$params->getParamById('bank_acc')
		);
		$ext_id = ExtProg::addClient($struc_1c);
		
		try{
			$link_master->query("BEGIN");
							
			$ar=$link_master->query_first(sprintf("INSERT INTO clients
			(name,inn,kpp,addr_reg,addr_mail,addr_mail_same_as_reg,telephones,
			ogrn,okpo,acc,bank_name,bank_code,bank_acc,ext_id,registered)
			VALUES (%s,%s,%s,%s,%s,%s,%s,
			%s,%s,%s,%s,%s,%s,%s,TRUE)
			RETURNING id",
			$params->getParamById('name'),
			$params->getParamById('inn'),
			$params->getParamById('kpp'),
			$params->getParamById('addr_reg'),
			$params->getParamById('addr_mail'),
			$params->getParamById('addr_mail_same_as_reg'),
			$params->getParamById('telephones'),
			$params->getParamById('ogrn'),
			$params->getParamById('okpo'),
			$params->getParamById('acc'),
			$params->getParamById('bank_name'),
			$params->getParamById('bank_code'),
			$params->getParamById('bank_acc'),
			$ext_id
			));
			
			$link_master->query(sprintf("INSERT INTO users
			(name,name_full,role_id,email,pwd,cel_phone,client_id)
			VALUES (%s,%s,'client'::role_types,%s,md5(%s),%s,%d)",
			$params->getParamById('user_name'),
			$params->getParamById('user_name_full'),
			$params->getParamById('user_email'),
			$params->getParamById('user_pwd'),
			$params->getParamById('user_phone'),
			$ar['id']
			));
			
			//email notify
			$ar = $link->query(sprintf(
			"SELECT
				t.mes_subject,
				replace(
					replace(
						replace(t.template,'[user]',%s),
						'[pwd]',%s
					),'[client]',%s
				) AS body
			FROM email_templates AS t
			WHERE t.email_type='new_account'",
			$params->getParamById('user_name_full'),
			$params->getParamById('user_pwd'),
			$params->getParamById('name')
			));
			
			EmailSender::addEMail(
					$link_master,
					EMAIL_FROM_ADDR,EMAIL_FROM_NAME,
					$pm->getParamValue('user_email'),$pm->getParamValue('user_name_full'),
					EMAIL_FROM_ADDR,EMAIL_FROM_NAME,
					EMAIL_FROM_ADDR,
					$ar['subject'],
					$ar['body']
					);		
					
			$link_master->query("COMMIT");
		}
		catch(Exception $e){
			$link_master->query("ROLLBACK");
			throw $e;
		}
		
		//new user first login
		$u = new User_Controller($link_master);
		$u->login_user(
			$params->getParamById('user_name'),
			$params->getParamById('user_pwd')
		);
	}
	public function get_unreg_list($pm){
		$link = $this->getDbLink();
		//result model
		$model = new ModelSQL($link,array("id"=>"get_unreg_list"));
		$model->addField(new FieldSQLInt($link,null,null,"id"));
		$model->addField(new FieldSQLInt($link,null,null,"name"));
		$model->query('SELECT id,name FROM clients WHERE registered=false'
		,TRUE);
		$this->addModel($model);				
	}
	public function get_unreg_client_list($pm){
		$this->addNewModel(
		'SELECT id,name
		FROM clients WHERE registered=false',
		'get_unreg_client_list',
		TRUE
		);
	}
	public function get_user_list($pm){
		$link = $this->getDbLink();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();

		$this->addNewModel(sprintf(
		'SELECT id,name,name_full,email,cel_phone
		FROM users WHERE client_id=%d',
			$params->getParamById('client_id')),
		'get_user_list',
		TRUE
		);	
	}
	public function get_contract_list($pm){
		$link = $this->getDbLink();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();

		$this->addNewModel(sprintf(
		'SELECT
			c.id,
			f.name AS firm_descr,
			get_contract_states_descr(c.state) AS sate_descr,
			c.date_to AS date_to
		FROM contracts AS c
		LEFT JOIN firms AS f ON f.id=c.firm_id
		WHERE client_id=%d',
			$params->getParamById('client_id')),
		'get_contract_list',
		TRUE
		);	
	}
	public function complete_from_1c($pm){
		$model = new Model(array("id"=>"complete_from_1c"));
		$model->addField(new Field("id",DT_STRING));
		$model->addField(new Field("descr",DT_STRING));
	
		$res=Array();
		ExtProg::completeClient(
			$pm->getParamValue('pattern'),$res);
		foreach($res as $key=>$val){
			$model->insert();
			$model->getFieldById('id')->setValue($val['ref']);
			$model->getFieldById('descr')->setValue($val['name']);
		}
		$this->addModel($model);
	}
	public function attrs_from_1c($pm){
		$model = new Model(array("id"=>"attrs_from_1c"));
		$model->addField(new Field("found",DT_BOOL));
		$model->addField(new Field("name_full",DT_STRING));
		$model->addField(new Field("inn",DT_STRING));
		$model->addField(new Field("kpp",DT_STRING));
		$model->addField(new Field("addr_reg",DT_STRING));
		$model->addField(new Field("addr_mail",DT_STRING));
		$model->addField(new Field("telephones",DT_STRING));
		$model->addField(new Field("ogrn",DT_STRING));
		$model->addField(new Field("okpo",DT_STRING));
		$model->addField(new Field("acc",DT_STRING));
		$model->addField(new Field("bank_name",DT_STRING));
		$model->addField(new Field("bank_code",DT_STRING));
		$model->addField(new Field("bank_acc",DT_STRING));		
		$model->insert();
		
		$res=Array();
		ExtProg::getClientAttrsOnName(
			$pm->getParamValue('name'),$res);
		foreach($res as $key=>$val){			
			$model->getFieldById($key)->setValue($val);
		}			
		$this->addModel($model);			
	}
	
	private function sync_with_1c($pm,$id=0){
		$struc_1c = array();
		
		if($id){
			$link = $this->getDbLink();
			$ar = $link->query_first(sprintf(
			"SELECT * FROM clients WHERE id=%d",
			$id));
			
			foreach ($ar as $field_id=>$db_val){
				$new_val = $pm->getParamValue($field_id);
				$val = (strlen($new_val))? $new_val:$db_val;
				$struc_1c[$field_id] = $val;
			}
	
			//Договор
			$ar = $link->query_first(sprintf(
			"SELECT
				c.number AS contract_number,
				replace(c.date_from::text,'-','') AS contract_date_from,
				replace(c.date_to::text,'-','') AS contract_date_to,
				f.ext_id AS contract_firm_ext_id
			FROM client_contracts c
			LEFT JOIN firms f ON f.id=c.firm_id
			WHERE c.client_id=%d AND c.date_to=(
				SELECT MAX(t.date_to) FROM client_contracts t
				WHERE t.client_id=%d
				)",
			$id,$id));
			
			if (is_array($ar) && count($ar)){
				foreach ($ar as $field_id=>$db_val){
					$struc_1c[$field_id] = $db_val;
				}
			}
		}
		else{
			$params = $pm->getParamIterator();
			while($params->valid()) {
				$param_id = $params->key();
				$param_val = $params->current();
				if($param_val){
					$struc_1c[$param_id] = $param_val->getValue();
				}
				$params->next();
			}
			
		}		
		
		$ext_id = ExtProg::addClient($struc_1c);				
		
		$pm->setParamValue('ext_id',$ext_id);
		$pm->setParamValue('registered','true');			
	}
	
	public function insert($pm){
		$this->sync_with_1c($pm);
		
		parent::insert($pm);
	}
	
	
	public function update($pm){
		
		$params = new ParamsSQL($pm,$link);
		$params->setValidated("old_id",DT_INT);
		$old_id = $params->getParamById('old_id');
		if (is_null($old_id)||$old_id=='null'){
			throw new Exception("Пустой идентификатор клиента!");
		}
		
		$this->sync_with_1c($pm,$old_id);
		
		/*
		$ar = $link->query_first(sprintf(
		"SELECT * FROM clients WHERE id=%d",
		$old_id));
		
		if (!strlen($ar['ext_id'])){
			$struc_1c = array();
			foreach ($ar as $field_id=>$db_val){
				$new_val = $pm->getParamValue($field_id);
				$val = (strlen($new_val))? $new_val:$db_val;
				$struc_1c[$field_id] = $val;
			}
		
			//Договор
			$ar = $link->query_first(sprintf(
			"SELECT
				c.number AS contract_number,
				replace(c.date_from::text,'-','') AS contract_date_from,
				replace(c.date_to::text,'-','') AS contract_date_to,
				f.ext_id AS contract_firm_ext_id
			FROM client_contracts c
			LEFT JOIN firms f ON f.id=c.firm_id
			WHERE c.client_id=%d AND c.date_to=(
				SELECT MAX(t.date_to) FROM client_contracts t
				WHERE t.client_id=%d
				)",
			$old_id,$old_id));
			if (is_array($ar)){
				foreach ($ar as $field_id=>$db_val){
					$struc_1c[$field_id] = $db_val;
				}
			}
			$ext_id = ExtProg::addClient($struc_1c);				
			
			$pm->setParamValue('ext_id',$ext_id);
			$pm->setParamValue('registered','true');
		}		
		*/
		parent::update($pm);
	}
	public function get_pop_firm($pm){
		$client_id = $_SESSION['client_id'];
		if (!$client_id){
			$params = new ParamsSQL($pm,$this->getDbLink());
			$params->addAll();
			$client_id = $params->getParamById('client_id');
		}
		
		$this->addNewModel(sprintf(
			"SELECT
				o.firm_id,
				f.name AS firm_descr,
				COUNT(*) AS cnt,
				(SELECT sum(t.def_debt) FROM client_debts AS t WHERE t.client_id=o.client_id AND t.firm_id=o.firm_id) AS def_debt,
				(SELECT t.debt_total FROM client_debts AS t WHERE t.client_id=o.client_id AND t.firm_id=o.firm_id LIMIT 1) AS debt_total
			FROM doc_orders AS o
			LEFT JOIN firms AS f ON f.id=o.firm_id
			WHERE o.client_id=%d AND NOT coalesce(f.deleted,FALSE)
			GROUP BY o.firm_id,f.name,o.client_id
			ORDER BY cnt DESC LIMIT 1",
			$client_id
		),'get_pop_firm');
	}
	
	public function get_debts_on_firm($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
	
		if ($_SESSION['role_id']=='client'){
			$client_id = $_SESSION['client_id'];
		}
		else{
			$client_id = $params->getParamById('client_id');	
		}
		
		$firm_id = $params->getParamById('firm_id');
		
		$this->addNewModel(sprintf(
			"SELECT
				t.debt_total AS debt_total,
				sum(t.def_debt) AS def_debt
			FROM client_debts AS t
			WHERE t.firm_id = %d AND t.client_id = %d
			GROUP BY t.debt_total",
			$firm_id,$client_id
		),'get_debts_on_firm');	
	}
	
	public function refresh_debts($pm){
		$link = $this->getDbLink();
		
		$res = array();
		ExtProg::getDebtList($res);
		
		$par = new ParamsSQL($pm,$link);
		
		$firm_ids = array();
		$q = '';
		foreach($res as $rec){			
			$par->add('clientRef',DT_STRING,$rec['clientRef']);
			//$par->add('debt',DT_STRING,$rec['debt']);//DT_FLOAT
			$debt_total = floatval($rec['debt']);
			
			//client
			$client_ar = $link->query_first(sprintf(
				"SELECT t.id
				FROM clients t WHERE t.ext_id=%s",
				$par->getDbVal('clientRef'))
			);
			if (is_array($client_ar)&&count($client_ar)){
				//есть такой клиент
				
				//фирма
				if (!array_key_exists($rec['firmRef'],$firm_ids)){
					$par->add('firmRef',DT_STRING,$rec['firmRef']);
					
					$ar = $link->query_first(sprintf(
						"SELECT t.id FROM firms t
						WHERE t.ext_id=%s",
						$par->getDbVal('firmRef'))
					);
					if (!count($ar) || !isset($ar['id'])){
						//нет такой фирмы
						continue;
					}
					$firm_ids[$rec['firmRef']] = $ar['id'];
				}
				
				$debt_res = $link->query(sprintf(
				"SELECT * FROM pay_def_debt(%d,%d,%f)",
				$firm_ids[$rec['firmRef']],
				$client_ar['id'],
				$debt_total
				));
				
				$debt_cnt = 0;
				while($debt_ar=$link->fetch_array($debt_res)){
					$debt_cnt++;
					$days = round((time() - strtotime($debt_ar['pay_date'])) / 86400);
					
					$q.=($q=='')? '':',';
					$q.= sprintf("(%d,%d,
					(SELECT t.days_from FROM client_debt_periods t WHERE %d>=t.days_from AND %d<=t.days_to LIMIT 1),
					%f,%d,%f)",
					$firm_ids[$rec['firmRef']],
					$client_ar['id'],
					$days,$days,
					$debt_ar['total'],
					$days,
					$debt_total
					);
				}
				
				if (!$debt_cnt){
					//нет просрочки, отметим просто долг
					$q.=($q=='')? '':',';
					$q.= sprintf("(%d,%d,NULL,0,0,%f)",
					$firm_ids[$rec['firmRef']],
					$client_ar['id'],
					$debt_total
					);					
				}
			}
		}
		
		$linkM = $this->getDbLinkMaster();			
		$linkM->query("DELETE FROM client_debts");
		//throw new Exception($q);
		if (strlen($q)){			
			$linkM->query("INSERT INTO client_debts
			(firm_id,client_id,client_debt_period_days_from,def_debt,days,debt_total)
			VALUES ".$q);
		}
	}
	
	public function get_debt_list($pm){
		$link = $this->getDbLink();
		$model = new ClientDebtList_Model($link);

		$modelWhere = NULL;
		$modelOrder = NULL;
		$modelLimit = NULL;
		$calcTotalCount = NULL;

		$model->select(FALSE,
			$modelWhere,
			$modelOrder,
			$modelLimit,
			NULL,
			NULL,
			NULL,
			$calcTotalCount,
			TRUE
		);
		$this->addModel($model);
		
	}
	
	public function get_list($pm){
		if ($_SESSION['role_id']!='admin'){
			$model = new ClientList_Model($this->getDbLink());
		
			$order = $this->orderFromParams($pm,$model);
			$where = $this->conditionFromParams($pm,$model);
			if (!$where){
				$where = new ModelWhereSQL();
			}
			$from = null; $count = null;
			$limit = $this->limitFromParams($pm,$from,$count);
			$calc_total = ($count>0);
			if ($from){
				$model->setListFrom($from);
			}
			if ($count){
				$model->setRowsPerPage($count);
			}		
		
			//Фильтр по deleted		
			$field = clone $model->getFieldById('deleted');
			$field->setValue('FALSE');
			$where->addField($field,'=',NULL,NULL);
		
			$model->select(FALSE,$where,$order,
				$limit,NULL,NULL,NULL,
				$calc_total,TRUE);
			//
			$this->addModel($model);
		
		}
		else{
			parent::get_list($pm);
		}
	}
	

}
?>