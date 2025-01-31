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
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtDateTimeTZ.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldExtJSONB.php');

/**
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/controllers/Controller_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 */


require_once('functions/PPEmailSender.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once('common/PwdGen.php');

class ClientUser_Controller extends ControllerSQL{
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
		
		$this->setListModelId('ClientUserList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('ClientUserList_Model');		

			
		$pm = new PublicMethod('reset_pwd');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExt('user_id',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	public function reset_pwd($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->setValidated("user_id",DT_INT);
	
		$pwd = gen_pwd(6);
		$link = $this->getDbLinkMaster();
		$link->query("BEGIN");
		try{
			$link->query(sprintf(
			"UPDATE users SET pwd=md5('%s')
			WHERE id=%d",
			$pwd,
			$params->getParamById('user_id')
			));
			
			//отправить по мылу
			PPEmailSender::addEMail(
				$link,
				sprintf("email_reset_pwd(%d,'%s')",
				$params->getParamById('user_id'),
				$pwd),
				NULL,
				'reset_pwd'
			);
			
			$link->query("COMMIT");
		}
		catch(Exception $e){
			$link->query("ROLLBACK");
			throw $e;
		}
	}
	public function insert($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->setValidated("client_id",DT_INT);
	
		$pm->setParamValue('role_id','client');
		$pm->setParamValue('pwd',DEF_USER_PWD);
		$pm->setParamValue('ret_id','1');
		$ar = parent::insert($pm);
		
		//отправить по мылу
		PPEmailSender::addEMail(
			$this->getDbLink(),
			sprintf("email_new_account(%d,%d,'%s')",
			$ar['id'],
			$params->getDbVal('client_id'),
			DEF_USER_PWD),
			NULL,
			'new_account'
		);
		
	}	
	public function get_list($pm){
		$val = $pm->getParamValue('cond_fields');
		$cond_f = (isset($val))? explode(',',$val):array();
		if (!array_key_exists('client_id',array_flip($cond_f))){
			throw new Exception("Не задан клиент!");
		}
		parent::get_list($pm);
	}		

}
?>