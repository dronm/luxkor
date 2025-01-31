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
//require_once('models/TemplateParamList_Model.php');

class TemplateParam_Controller extends ControllerSQL{

	const ERR_NOT_LOGGED = 'Идетификатор пользователя не найден.@1000';

	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			
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
		
		$this->setListModelId('TemplateParamList_Model');
		
			
		$pm = new PublicMethod('set_value');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('template',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('param',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtText('val',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	
	/*
	public function get_list($pm){
		if (!$_SESSION['user_id']){
			throw new Exception(self::ERR_NOT_LOGGED);
		}
		
		$m = new TemplateParamList_Model($this->getDbLink());
		$m->setSelectQueryText(
			sprintf("SELECT * FROM teplate_params_get_list(''::text,''::text, %d)",
			$_SESSION['user_id']
			)		
		);
		$this->modelGetList($m,$pm);		
	}
	*/
	
	public function set_value($pm){
		if (!$_SESSION['user_id']){
			throw new Exception(self::ERR_NOT_LOGGED);
		}
		
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		//throw new Exception(		
		$this->getDbLink()->query(				
		sprintf("SELECT template_params_set_value(%s,%s,%d,%s)",
			$p->getDbVal('template'),
			$p->getDbVal('param'),
			$_SESSION['user_id'],
			$p->getDbVal('val')
		));
	}


		
}
?>