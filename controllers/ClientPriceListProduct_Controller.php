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
require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');

class ClientPriceListProduct_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtInt('price_list_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtInt('product_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtFloat('price'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('discount_volume'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('discount_total'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('pack_price'
				,array());
		$pm->addParam($param);
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('ClientPriceListProduct_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtInt('old_price_list_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('old_product_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		$param = new FieldExtInt('price_list_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('product_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('price'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('discount_volume'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('discount_total'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('pack_price'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('price_list_id',array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('product_id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('ClientPriceListProduct_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('price_list_id'
		));		
		
		$pm->addParam(new FieldExtInt('product_id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('ClientPriceListProduct_Model');

			
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
		
			
		$pm = new PublicMethod('get_obj');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('price_list_id',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('product_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('set_values');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('price_list_ids',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('product_ids',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('vals',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	private function insert_update($pm,$insert){
		$link = $this->getDbLinkMaster();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		$pref = (!$insert)? 'old_':'';
		
		$link->query(sprintf(
		"SELECT client_price_list_products_update(
			%d,%d,%f,%f,%f,%f)",
			$params->getParamById($pref.'price_list_id'),
			$params->getParamById($pref.'product_id'),
			$params->getParamById('price'),
			$params->getParamById('discount_volume'),
			$params->getParamById('discount_total'),
			$params->getParamById('pack_price')
		));
	}
	public function insert($pm){
		$this->insert_update($pm,TRUE);
	}
	public function update($pm){
		$this->insert_update($pm,FALSE);
	}	
	public function get_list($pm){
		$link = $this->getDbLink();
		$model = new ModelSQL($link,Array("id"=>"ClientPriceListProductList_Model"));
		$model->addField(new FieldSQLInt($link,NULL,NULL,'price_list_id'));
		$where = $this->conditionFromParams($pm,$model);
		if ($where){
			$price_list_id = $where->getFieldValueForDb('price_list_id','=');
		}
		else{
			$price_list_id = 0;
		}
		$this->addNewModel(sprintf(
			"SELECT * FROM client_price_list_products_list(%d,0)",
			$price_list_id
			)
		);
		
	}		
	public function get_obj($pm){
		$link = $this->getDbLink();
		$params = new ParamsSQL($pm,$link);
		$params->addAll();
		
		$this->addNewModel(sprintf(
			"SELECT * FROM client_price_list_products_list(%d,%d)",
			$params->getParamById('price_list_id'),
			$params->getParamById('product_id')
			)
		);
	}
	public function set_values($pm){
		$price_list_ids = explode(',',$pm->getParamValue("price_list_ids"));
		$product_ids = explode(',',$pm->getParamValue("product_ids"));
		$vals = explode(',',$pm->getParamValue("vals"));
		if ((count($price_list_ids)!=count($product_ids))
		||(count($price_list_ids)!=count($vals))){
			throw new Exception('Не верные параметры!');
		}
		$link = $this->getDbLink();
		$params = array();
		for ($i=0;$i<count($price_list_ids);$i++){
			array_push($params,new ParamsSQL(null,$link));
			$params[$i]->add('val',DT_FLOAT,$vals[$i]);
			$params[$i]->add('price_list_id',DT_INT,$price_list_ids[$i]);
			$params[$i]->add('product_id',DT_INT,$product_ids[$i]);
		}
		$link = $this->getDbLinkMaster();
		$link->query('BEGIN');
		try{
			for ($i=0;$i<count($params);$i++){
				$link->query(vsprintf(
					"UPDATE client_price_list_products
					SET price=%f
					WHERE price_list_id=%d AND product_id=%d",
					$params[$i]->getArray()));
			}
			$link->query('COMMIT');
		}
		catch(Exception $e){
			$link->query('ROLLBACK');
			throw $e;
		}
	}

}
?>