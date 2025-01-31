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


require_once('functions/ExtProg.php');

require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
class Firm_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('sert_header'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('nds'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('nds_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('cash'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('deleted'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('order_no_carrier_print'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('Firm_Model');

			
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
		$param = new FieldExtString('ext_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('sert_header'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('nds'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('nds_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('cash'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('deleted'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('order_no_carrier_print'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('Firm_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('Firm_Model');

			
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
		
		$this->setListModelId('FirmList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('FirmList_Model');		

			
		$pm = new PublicMethod('get_firm_ext_bank_account_list');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('firm_id',$opts));
	
				
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

		
	}	
	
	private function check_firm($pm){
		$ext_ref = ExtProg::getFirmRefOnName($pm->getParamValue('name'));
		if (!$ext_ref){
			throw new Exception('Соответствие в 1с не найдено!');
		}
		$pm->setParamValue('ext_id',$ext_ref);
	}
	public function insert($pm){
		$this->check_firm($pm);
		parent::insert($pm);
	}
	public function update($pm){
		if (!$pm->getParamValue('deleted')){
			$this->check_firm($pm);
		}
		parent::update($pm);
	}	
	
	public function get_firm_ext_bank_account_list($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();

		$firm_id = $params->getParamById('firm_id');
		if(!isset($firm_id)||$firm_id=="null"){
			throw new Exception('Не задана фирма!');
		}
		
		$ar = $this->getDbLink()->query_first(sprintf(
		"SELECT ext_id AS firm_ext_id FROM firms WHERE firms.id=%d",
		$firm_id
		));
	
		if(!is_array($ar) || !count($ar) || !isset($ar['firm_ext_id']) ){
			throw new Exception('Неверные парамтеры!');
		}
	
		$xml = NULL;
		ExtProg::getFirmBankAccountList($ar['firm_ext_id'],$xml);
		
		$model = new Model(array("id"=>"FirmExtBankAccountList_Model"));
                foreach($xml->bank_accounts->bank_account as $acc){
                        $fields = array();
                        array_push($fields,new Field('ext_id',DT_STRING,array('value'=>(string) $acc->ref)));
                        array_push($fields,new Field('name',DT_STRING,array('value'=>(string) $acc->name)));
                        $model->insert($fields);
		}		
		$this->addModel($model);
	}
	

}
?>