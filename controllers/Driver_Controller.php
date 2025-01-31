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

require_once(FRAME_WORK_PATH.'basic_classes/ModelVars.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');

class Driver_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('drive_perm'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('cel_phone'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('Driver_Model');

			
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
		$param = new FieldExtString('drive_perm'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('cel_phone'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('Driver_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('Driver_Model');

			
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
		
		$this->setListModelId('DriverList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('DriverList_Model');		

			
		/* complete  */
		$pm = new PublicMethod('complete');
		$pm->addParam(new FieldExtString('pattern'));
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('ic'));
		$pm->addParam(new FieldExtInt('mid'));
		$pm->addParam(new FieldExtString('name'));		
		$this->addPublicMethod($pm);					
		$this->setCompleteModelId('DriverList_Model');

			
		$pm = new PublicMethod('get_veh_attrs');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('driver_id',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	private function check_driver($pm){
		$res = array();
		$ext_ref = ExtProg::getPersonRefOnName($pm->getParamValue('name'),$res);
		if ($ext_ref){
			$pm->setParamValue('ext_id',$ext_ref);
			if (count($res) && $res['drive_perm'] && strlen($res['drive_perm'])){
				$pm->setParamValue('drive_perm',$res['drive_perm']);
			}
		}		
	}
	public function insert($pm){
		$this->check_driver($pm);
		parent::insert($pm);
	}
	public function update($pm){
		$this->check_driver($pm);
		parent::update($pm);
	}
	
	public function get_veh_attrs($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		$ar = $this->getDbLink()->query_first(sprintf("SELECT ext_id FROM drivers WHERE id=%d",$p->getDbVal('driver_id')));
		if (!$ar || !is_array($ar) || !count($ar) || !$ar['ext_id']){
			throw new Exception("Водителя не связан с 1с!");
		}
	
		$res = array();
		ExtProg::getDriverAttrs($ar['ext_id'],$res);	
		
		if ($res['carrier_descr']){
			$p->add('carrier_descr',DT_STRING,$res['carrier_descr']);
			$ar = $this->getDbLink()->query_first(sprintf("SELECT id FROM carriers WHERE name=%s",$p->getDbVal('carrier_descr')));
			if (!$ar || !is_array($ar) || !count($ar)){
				$this->getDbLinkMaster()->query(sprintf("INSERT INTO carriers (name) VALUES(%s)",$p->getDbVal('carrier_descr')));
			}else{
				$res['carrier_id'] = $ar['id'];
			}
		}
		
		$this->addModel(new ModelVars(
			array('id'=>'get_veh_attrs',
				'values'=>array(
					new Field('plate',DT_STRING,array('value'=>$res['plate'])),
					new Field('trailer_plate',DT_STRING,array('value'=>$res['trailer_plate'])),
					new Field('trailer_model',DT_STRING,array('value'=>$res['trailer_model'])),
					new Field('carrier_id',DT_STRING,array('value'=>$res['carrier_id'])),
					new Field('carrier_descr',DT_STRING,array('value'=>$res['carrier_descr']))
				)
			))
		);
	}	

}
?>