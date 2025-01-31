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


class DOCOrderDOCTProdBatch_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL,$dbLink=NULL){
		parent::__construct($dbLinkMaster,$dbLink);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('view_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('line_number'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('login_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array(
				'alias'=>'Ссылка 1с'
			));
		$pm->addParam($param);
		$param = new FieldExtText('batch_descr'
				,array(
				'alias'=>'Description 1с'
			));
		$pm->addParam($param);
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('DOCOrderDOCTProdBatch_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtString('old_view_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('old_line_number',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('old_login_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		$param = new FieldExtString('view_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('line_number'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('login_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('ext_id'
				,array(
			
				'alias'=>'Ссылка 1с'
			));
			$pm->addParam($param);
		$param = new FieldExtText('batch_descr'
				,array(
			
				'alias'=>'Description 1с'
			));
			$pm->addParam($param);
		
			$param = new FieldExtString('view_id',array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('line_number',array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('login_id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('DOCOrderDOCTProdBatch_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtString('view_id'
		));		
		
		$pm->addParam(new FieldExtInt('line_number'
		));		
		
		$pm->addParam(new FieldExtInt('login_id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('DOCOrderDOCTProdBatch_Model');

			
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

			$f_params = array();
			
				$f_params['required']=TRUE;
			$param = new FieldExtString('view_id'
			,$f_params);
		$pm->addParam($param);		
		
		$this->addPublicMethod($pm);
		
		$this->setListModelId('DOCOrderDOCTProdBatchList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtString('view_id'
		));
		
		$pm->addParam(new FieldExtInt('line_number'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('DOCOrderDOCTProdBatchList_Model');		

		
	}	
	
	public function get_list($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
	
		$this->addNewModel(sprintf(
		"SELECT
			t.*
		FROM doc_orders_t_tmp_prod_batches_list AS t
		WHERE view_id=%s",
		$params->getDbVal('view_id')
		),
		'DOCOrderDOCTProdBatchList_Model');
	}	

}
?>
