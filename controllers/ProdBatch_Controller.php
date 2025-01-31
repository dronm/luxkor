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



require_once(dirname(__FILE__).'/../functions/ExtProg.php');

class ProdBatch_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL,$dbLink=NULL){
		parent::__construct($dbLinkMaster,$dbLink);
			
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
			$param = new FieldExtInt('doc_order_id'
			,$f_params);
		$pm->addParam($param);		
		
		$this->addPublicMethod($pm);
		
			
		$pm = new PublicMethod('complete_from_1c');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('doc_order_id',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('pattern',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	public function prod_list_for_doc($docId){
		$q_id = $this->getDbLink()->query(sprintf(
		"SELECT
			p.name,
			p.name_for_1c
		FROM doc_orders_t_products doc_p
		LEFT JOIN products as p on p.id = doc_p.product_id
		WHERE doc_p.doc_id = %d",
		$docId
		));
	
		$prod_list = [];
		while ($ar = $this->getDbLink()->fetch_array($q_id)){
			array_push($prod_list, array(
				'name'=>$ar['name'],
				'name_for_1c'=>$ar['name_for_1c']
			));
		}
		return $prod_list;
	}

	private function get_list_from_1c($prodList, $pattern){
		$xml = NULL;
		ExtProg::getProdBatchList($prodList, $pattern, $xml);
		
		$model = new Model(array("id"=>"ProdBatch1CList_Model"));
		foreach($xml->prod_batch_list->prod_batch as $b){
				$ds = (string) $b->batch_date;
				$d = substr($ds, 0, 10);
				$fields = array();
				array_push($fields, new Field('ext_id',DT_STRING,array('value'=>(string) $b->ext_id)));
				
				array_push($fields, new Field('batch_descr', DT_STRING, array('value' =>
						(string) $b->batch_num. ' от '.$d.', ('.(string) $b->prod_name.', '.(int) $b->quant.'м3)'
						
				)));
				$model->insert($fields);
		}		
		$this->addModel($model);
	}

	public function get_list($pm){
		$this->get_list_from_1c([], "");
	}

	public function complete_from_1c($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();

		$prod_list = $this->prod_list_for_doc(
			$params->getParamById('doc_order_id')
		);
		$this->get_list_from_1c($prod_list, $pm->getParamValue('pattern'));
	}

}
?>