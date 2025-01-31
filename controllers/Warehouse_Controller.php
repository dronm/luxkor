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


require_once('common/OSRMV5.php');

require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once('functions/ExtProg.php');
class Warehouse_Controller extends ControllerSQL{
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
		$param = new FieldExtGeomPolygon('zone'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('production_city_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtInt('default_firm_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lon'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lat'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('address'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('tel'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('email'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('deleted'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('Warehouse_Model');

			
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
		$param = new FieldExtGeomPolygon('zone'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('production_city_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('default_firm_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lon'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lat'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('address'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('tel'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('email'
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
			$this->setUpdateModelId('Warehouse_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('Warehouse_Model');

			
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
		
		$this->setListModelId('WarehouseList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('WarehouseDialog_Model');		

			
		$pm = new PublicMethod('get_list_for_order');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('product_id',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	private function check_wh($pm){
		$name = $pm->getParamValue('name');
		if ($name){
			$ext_ref = ExtProg::getWarehouseRefOnName($name);
			if (!$ext_ref){
				throw new Exception('Соответствие в 1с не найдено!');
			}
			$pm->setParamValue('ext_id',$ext_ref);
		}
	}
	public function set_near_road($pm){
		$zone = $pm->getParamValue('zone');
		if ($zone && $zone!='null'){		
			$pares = explode(',',$zone);
			if (count($pares)){
				$zone.=','.$pares[0];				
				//throw new Exception($zone);
				$ar=$this->getDbLink()->query_first(sprintf(
				"SELECT
					replace(replace(st_astext(ST_Centroid(ST_GeomFromText('POLYGON((%s))'))),'POINT(',''),')','')
					AS zone_center
				",
				$zone));
				$p = explode(' ',$ar['zone_center']);
				$osrm = new OSRMV5(OSRM_PROTOCOLE,OSRM_HOST,OSRM_PORT,'v1');
				$road_lat=NULL;$road_lon=NULL;
				$osrm->getNearestRoadCoord(
					$p[1],$p[0],
					$road_lat,$road_lon
					);
				$pm->setParamValue('near_road_lon',$road_lon);
				$pm->setParamValue('near_road_lat',$road_lat);
			}
		}
	}

	public function insert($pm){
		$this->check_wh($pm);
		$this->set_near_road($pm);
		parent::insert($pm);
	}
	public function update($pm){
		$this->check_wh($pm);
		$this->set_near_road($pm);
		parent::update($pm);
	}	
	
	public function get_list($pm){
		if ($_SESSION['role_id']!='admin'){
			$model = new WarehouseList_Model($this->getDbLink());
		
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
	
	public function get_list_for_order($pm){
		$link = $this->getDbLink();		
		$params = new ParamsSQL($pm,$link);
		$params->setValidated("product_id",DT_INT);
		$product_id = $params->getParamById('product_id');
		
		$model = new WarehouseList_Model($this->getDbLink());
		$model->query(sprintf(
		"SELECT * FROM warehouse_list_for_order(%d,%d)",
			$_SESSION['LOGIN_ID'],
			$product_id
		),TRUE);
		$this->addModel($model);
	}

}
?>