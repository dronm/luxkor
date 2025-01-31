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
class CustomerSurvey_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('CustomerSurvey_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('CustomerSurvey_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('CustomerSurvey_Model');

			
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
		
		$this->setListModelId('CustomerSurveyList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('CustomerSurveyList_Model');		

		
	}	
	
	public function insert($pm){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$link->query(sprintf(
			"SELECT product_measure_units_update(%d,%d,%d,%s)",
			$params->getParamById("doc_order_id"),
			$params->getParamById("suctomer_survey_question_id"),
			$params->getParamById("points"),
			$params->getParamById("question_comment")
		));
	}
	public function update($pm){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$link->query(sprintf(
			"SELECT customer_surveys_update(%d,%d,%d,%s)",
			$params->getParamById("old_doc_order_id"),
			$params->getParamById("old_suctomer_survey_question_id"),
			$params->getParamById("points"),
			$params->getParamById("question_comment")
		));
	}	
	public function get_list($pm){
		$link = $this->getDbLink();
		$model = new CustomerSurveyList_Model($link);
		$where = $this->conditionFromParams($pm,$model);
		if (!$where){
			throw new Exception("Не задан документ!");
		}
		$q = sprintf(
		"SELECT * FROM customer_surveys_list(%d)",
		$where->getFieldValueForDb('doc_order_id','=')
		);
		$model->query($q);
		$this->addModel($model);
	}
	public function get_object($pm){
		$link = $this->getDbLink();
		$model = new CustomerSurveyList_Model($link);
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		
		$model->query(sprintf(
		"SELECT * FROM customer_surveys_list(%d,%d)",
		$params->getParamById('doc_order_id')
		));
		$this->addModel($model);
	}
	

}
?>