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

class Vehicle_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('model'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('plate'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('vol'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('employed'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('load_weight_t'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('production_city_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtInt('carrier_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('driver_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('deliv_cost_opt_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('trailer_model'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('trailer_plate'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('tracker_id'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
			$f_params = array();
			$param = new FieldExtString('driver_descr'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtString('driver_drive_perm'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtString('driver_cel_phone'
			,$f_params);
		$pm->addParam($param);		
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('Vehicle_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtInt('old_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		$param = new FieldExtInt('id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('model'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('plate'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('vol'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('employed'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('load_weight_t'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('production_city_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('carrier_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('driver_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('deliv_cost_opt_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('trailer_model'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('trailer_plate'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('tracker_id'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
			$f_params = array();
			$param = new FieldExtString('driver_descr'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtString('driver_drive_perm'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtString('driver_cel_phone'
			,$f_params);
		$pm->addParam($param);		
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('Vehicle_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('Vehicle_Model');

			
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
		
		$this->setListModelId('VehicleList_Model');
		
			
		$pm = new PublicMethod('get_select_list');
		
		$this->addPublicMethod($pm);

			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('VehicleDialog_Model');		

			
		/* complete  */
		$pm = new PublicMethod('complete');
		$pm->addParam(new FieldExtString('pattern'));
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('ic'));
		$pm->addParam(new FieldExtInt('mid'));
		$pm->addParam(new FieldExtString('complete_descr'));		
		$this->addPublicMethod($pm);					
		$this->setCompleteModelId('VehicleSelectList_Model');

		
	}	
	
	public function get_select_list($pm){
		$this->setListModelId('VehicleSelectList_Model');
		parent::get_list($pm);
	}
	
	private function get_driver_attrs($pm,$p,&$fields){
		if ($pm->getParamValue('driver_cel_phone')){
			$fields = 'cel_phone='.$p->getDbVal('driver_cel_phone');
		}
		if ($pm->getParamValue('driver_drive_perm')){
			$fields.= ($fields=='')? '':', ';
			$fields.= 'drive_perm='.$p->getDbVal('driver_drive_perm');
		}	
	}
	
	private function update_driver(&$pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		if ($pm->getParamValue('driver_descr')){
			//изменили ФИО водителя
			
			$param_fields = array(
				'name'=>'driver_descr'
				,'drive_perm'=>'driver_drive_perm'
				,'cel_phone'=>'driver_cel_phone'
				,'model'=>'model'
				,'plate'=>'plate'
				,'trailer_plate'=>'trailer_plate'
			);
			
			//1c
			$res = array();
			$params = array();
			foreach($param_fields as $par_1c=>$par_pm){
				if($pm_v = $pm->getParamValue($par_pm)){
					$params[$par_1c] = $pm_v;
				}
			}
			
			if ($pm->getParamValue('carrier_id')){
				$qr = $this->getDbLink()->query_first(sprintf(
				"SELECT
					cl.ext_id
				FROM carriers AS cr
				LEFT JOIN clients cl ON cl.id=cr.client_id
				WHERE cr.id=%d",
				$p->getDbVal('carrier_id')
				));				
				$params['carrier_ref'] = $qr['ext_id'];					
			}
			
			$ext_ref = ExtProg::getPersonRefCreate($params,$res);
			if (!$ext_ref){
				throw new Exception('Ошибка при получении данных из 1с!');
			}
			foreach($param_fields as $par_1c=>$par_pm){
				if(
				$res[$par_1c] && strlen($res[$par_1c])
				&& !$pm->getParamValue($par_pm)
				){
					$pm->setParamValue($par_pm,$res[$par_1c]);
				}
			}
			
			/*
			if(
			$res['carrier_ref'] && strlen($res['carrier_ref'])
			&& !$pm->getParamValue('carrier_ref')
			){
				$pm->setParamValue('carrier_id',$qr['carrier_id']);								
			}
			*/
			
			$ar = $this->getDbLinkMaster()->query_first(sprintf(
			"SELECT * FROM drivers WHERE name=%s LIMIT 1",
			$p->getDbVal('driver_descr')
			));
			if (count($ar) && isset($ar['id'])){
				//есть такой водитель - изменяем
				$fields = '';
				$this->get_driver_attrs($pm,$p,$fields);
				
				if (strlen($fields)){
					if ($ext_ref){
						$fields.= sprintf(",ext_id='%s'",$ext_ref);
					}
					$this->getDbLinkMaster()->query(sprintf(
					"UPDATE drivers SET %s WHERE id=%d",
					$fields,
					$ar['id']
					));				
				}
			}
			else{
				//нет такого - заводим								
				$ar = $this->getDbLinkMaster()->query_first(sprintf(
				"INSERT INTO drivers (name,cel_phone,drive_perm,ext_id)
				VALUES (%s,%s,%s,'%s')
				RETURNING id",
				$p->getDbVal('driver_descr'),
				($pm->getParamValue('driver_cel_phone'))? $p->getDbVal('driver_cel_phone'):'NULL',
				($pm->getParamValue('driver_drive_perm'))? $p->getDbVal('driver_drive_perm'):'NULL',
				$ext_ref? $ext_ref:'NULL'
				));
				
				
			}
			$pm->setParamValue('driver_id',$ar['id']);
		}
		else if ($pm->getParamValue('old_id')){
			//возможно изменили данные старого водителя
			$fields = '';
			$this->get_driver_attrs($pm,$p,$fields);
			if (strlen($fields)){
				$this->getDbLinkMaster()->query(sprintf(
				"UPDATE drivers SET %s WHERE id=(SELECT v.driver_id FROM vehicles v WHERE v.id=%d)",
				$fields,
				$p->getDbVal('old_id')
				));				
			}
		}		
	}
	
	public function update($pm){
		try{
			$this->getDbLinkMaster()->query("BEGIN");
			$this->update_driver($pm);
			parent::update($pm);
			$this->getDbLinkMaster()->query("COMMIT");
		}
		catch(Exception $e){
			$this->getDbLinkMaster()->query("ROLLBACK");
			throw $e;
		}
	}
	
	public function insert($pm){
		try{
			$this->getDbLinkMaster()->query("BEGIN");
			$this->update_driver($pm);
			parent::insert($pm);
			$this->getDbLinkMaster()->query("COMMIT");
		}
		catch(Exception $e){
			$this->getDbLinkMaster()->query("ROLLBACK");
			throw $e;
		}			
	}
	
	

}
?>