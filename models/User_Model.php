<?php
require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLEnum.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLPassword.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');


class User_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("users");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		
		$f_opts['alias']='логин';
		$f_opts['length']=50;
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
		
		//*** Field name_full ***
		$f_opts = array();
		
		$f_opts['alias']='ФИО';
		$f_opts['length']=150;
		$f_opts['id']="name_full";
						
		$f_name_full=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name_full",$f_opts);
		$this->addField($f_name_full);
		//********************
		
		//*** Field sign_order ***
		$f_opts = array();
		
		$f_opts['alias']='Приказ';
		$f_opts['length']=100;
		$f_opts['id']="sign_order";
						
		$f_sign_order=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sign_order",$f_opts);
		$this->addField($f_sign_order);
		//********************
		
		//*** Field role_id ***
		$f_opts = array();
		
		$f_opts['alias']='роль';
		$f_opts['id']="role_id";
						
		$f_role_id=new FieldSQLEnum($this->getDbLink(),$this->getDbName(),$this->getTableName(),"role_id",$f_opts);
		$this->addField($f_role_id);
		//********************
		
		//*** Field email ***
		$f_opts = array();
		
		$f_opts['alias']='эл.почта';
		$f_opts['length']=50;
		$f_opts['id']="email";
						
		$f_email=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"email",$f_opts);
		$this->addField($f_email);
		//********************
		
		//*** Field pwd ***
		$f_opts = array();
		
		$f_opts['alias']='пароль';
		$f_opts['length']=32;
		$f_opts['id']="pwd";
						
		$f_pwd=new FieldSQLPassword($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pwd",$f_opts);
		$this->addField($f_pwd);
		//********************
		
		//*** Field cel_phone ***
		$f_opts = array();
		$f_opts['length']=15;
		$f_opts['id']="cel_phone";
						
		$f_cel_phone=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"cel_phone",$f_opts);
		$this->addField($f_cel_phone);
		//********************
		
		//*** Field client_id ***
		$f_opts = array();
		$f_opts['id']="client_id";
						
		$f_client_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"client_id",$f_opts);
		$this->addField($f_client_id);
		//********************
		
		//*** Field tel_ext ***
		$f_opts = array();
		$f_opts['length']=5;
		$f_opts['id']="tel_ext";
						
		$f_tel_ext=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"tel_ext",$f_opts);
		$this->addField($f_tel_ext);
		//********************
		
		//*** Field ext_id ***
		$f_opts = array();
		$f_opts['length']=36;
		$f_opts['id']="ext_id";
						
		$f_ext_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_id",$f_opts);
		$this->addField($f_ext_id);
		//********************
		
		//*** Field ext_login ***
		$f_opts = array();
		$f_opts['length']=100;
		$f_opts['id']="ext_login";
						
		$f_ext_login=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"ext_login",$f_opts);
		$this->addField($f_ext_login);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_name,$direct);

	}

	
	public function insert($needId=FALSE){
		try{
			parent::insert($needId);
		}
		catch(Exception $e){
			if (strpos($e->getMessage(),'23505')>0){
				throw new Exception('Логин занят!');
			}			
		}
	}
	public function update(){
		try{
			parent::update();
		}
		catch(Exception $e){
			if (strpos($e->getMessage(),'23505')>0){
				throw new Exception('Логин занят!');
			}			
		}		
	}	
}
?>