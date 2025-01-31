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


require_once('common/downloader.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelVars.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once('common/downloader.php');
require_once(USER_CONTROLLERS_PATH.'DOCOrder_Controller.php');

class SertType_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('xslt_pattern'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('SertType_Model');

			
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
		$param = new FieldExtString('xslt_pattern'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('SertType_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('SertType_Model');

			
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
		
		$this->setListModelId('SertType_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('SertType_Model');		

			
		$pm = new PublicMethod('set_xslt_pattern');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('xslt_pattern',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_xslt_pattern');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('check_pattern');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('sert_type_id',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	public function get_xslt_pattern($pm){
		$link = $this->getDbLink();
		$p = new ParamsSQL($pm,$link);
		$p->setValidated("id",DT_INT);	

		$ar = $link->query_first(sprintf(
			"SELECT xslt_pattern
			FROM sert_types
			WHERE id=%d",
			$p->getParamById('id')
		));
		
		if (!is_array($ar)||!count($ar)){
			throw new Exception("sert not found!");
		}
		ob_clean();
		downloadFile('views/'.$ar['xslt_pattern']);		
	}
	
	public function set_xslt_pattern($pm){
		if (!isset($_FILES['xslt_pattern'])
		||!is_uploaded_file($_FILES['xslt_pattern']['tmp_name'])){
			throw new Exception("No file!");
		}
		if ($_FILES['xslt_pattern']['size']/1024>100){
			throw new Exception("File is too big!");
		}
		$name = $_FILES["xslt_pattern"]["name"];
		$tmp_name = $_FILES["xslt_pattern"]["tmp_name"];
		move_uploaded_file($tmp_name, "views/$name");
		
		$this->addModel(new ModelVars(array(
			'id'=>'xslt_pattern',
			'values'=>array(
				new Field('xslt_pattern',DT_STRING,array('value'=>$name))
			)
		))
		);
	}
	
	/*
	возвращает сгенерированный файл
	по шаблоны с первой попавшей продукцией
	*/
	public function check_pattern($pm){
		$link = $this->getDbLink();
		$p = new ParamsSQL($pm,$link);
		$p->setValidated("sert_type_id",DT_INT);		
		
		$ar = $link->query_first(sprintf(
			"SELECT
				t.doc_id
			FROM doc_orders_t_products AS t
			LEFT JOIN products p ON p.id=t.product_id
			WHERE p.sert_type_id=%d
			LIMIT 1",
		$p->getParamById('sert_type_id')
		));
		if (!is_array($ar)||!count($ar)){
			throw new Exception("Не найдено ни одного документа по продукции с данным шаблоном!");
		}
		
		$doc_contr = new DOCOrder_Controller($this->getDbLink(),$this->getDbLinkMaster());
		$tmp_file = $doc_contr->makePassport($link,$ar['doc_id'],FALSE);
		ob_clean();
		downloadFile($tmp_file);
		unlink($tmp_file);
	}

}
?>