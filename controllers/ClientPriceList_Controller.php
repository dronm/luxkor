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


require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
class ClientPriceList_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('production_city_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtBool('to_third_party_only'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('part_ship_do_not_change_price'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('min_order_quant'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('default_price_list'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('ClientPriceList_Model');

			
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
		$param = new FieldExtInt('production_city_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('to_third_party_only'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('part_ship_do_not_change_price'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('min_order_quant'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('default_price_list'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('ClientPriceList_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('ClientPriceList_Model');

			
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
		
		$this->setListModelId('ClientPriceListList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('ClientPriceListDialog_Model');		

			
		$pm = new PublicMethod('tune');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_fields',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_vals',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_sgns',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_ic',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('templ',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('print_price');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('price_id',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('templ',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	public function tune($pm){
		$link = $this->getDbLink();
		$model = new RepPriceListTuning_Model($link);
		
		$where = $this->conditionFromParams($pm,$model);
		if (isset($where)){
			$production_city_id = $where->getFieldValueForDb('production_city_id','=',0,'NULL');
			$to_third_party_only = $where->getFieldValueForDb('to_third_party_only','=',0,'NULL');
		}
		else{
			$production_city_id = 'NULL';
			$to_third_party_only = 'NULL';		
		}
		$model->query(sprintf(
			"SELECT *
			FROM price_list_tune(%s,%s)",
			$production_city_id,$to_third_party_only
			)
			);
		$this->addModel($model);
	}
	public function print_price($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
		
		//header
		$this->addNewModel(sprintf(
		"SELECT
			*,
			date8_descr(now()::date) AS date
		FROM client_price_lists_dialog
		WHERE id=%d",
		$params->getParamById('price_id')),
		'header');
		
		//products
		$this->addNewModel(sprintf(
		"SELECT * FROM client_price_list_products_list(%d,0)",
		$params->getParamById('price_id')),
		'products');
		
	}

}
?>