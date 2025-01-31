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
class ProductMeasureUnit_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtInt('product_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtInt('measure_unit_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtText('calc_formula'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('in_use'
				,array());
		$pm->addParam($param);
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('ProductMeasureUnit_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtInt('old_product_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('old_measure_unit_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		$param = new FieldExtInt('product_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('measure_unit_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('calc_formula'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('in_use'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('product_id',array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('measure_unit_id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('ProductMeasureUnit_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('product_id'
		));		
		
		$pm->addParam(new FieldExtInt('measure_unit_id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('ProductMeasureUnit_Model');

			
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
		
		$this->setListModelId('ProductMeasureUnitList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('product_id'
		));
		
		$pm->addParam(new FieldExtInt('measure_unit_id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('ProductMeasureUnitList_Model');		

		
	}	
	
	public function insert($pm){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$link->query(sprintf(
			"SELECT product_measure_units_update(%d,%d,%s,%s)",
			$params->getParamById("product_id"),
			$params->getParamById("measure_unit_id"),
			$params->getParamById("in_use"),
			$params->getParamById("calc_formula")
		));
	}
	public function update($pm){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$link->query(sprintf(
			"SELECT product_measure_units_update(%d,%d,%s,%s)",
			$params->getParamById("old_product_id"),
			$params->getParamById("old_measure_unit_id"),
			$params->getParamById("in_use"),
			$params->getParamById("calc_formula")
		));
	}	
	public function get_list($pm){
		$link = $this->getDbLink();
		$model = new ProductMeasureUnit_Model($link);
		$where = $this->conditionFromParams($pm,$model);
		if (!$where){
			throw new Exception("Не задана продукция!");
		}
		$q = sprintf(
		"SELECT * FROM product_measure_units_list(%d,0)",
		$where->getFieldValueForDb('product_id','=')
		);
		if ($where->getFieldValueForDb('in_use','=')=='true'){
			$q.=' WHERE in_use=true';
		}
		$model->query($q);
		$this->addModel($model);
	}
	public function get_object($pm){
		$link = $this->getDbLink();
		$model = new ProductMeasureUnit_Model($link);
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		
		$model->query(sprintf(
		"SELECT * FROM product_measure_units_list(%d,%d)",
		$params->getParamById('product_id'),
		$params->getParamById('measure_unit_id')
		));
		$this->addModel($model);
	}
	

}
?>