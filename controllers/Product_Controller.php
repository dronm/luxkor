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
require_once('common/downloader.php');

require_once('models/ProductFilterList_Model.php');

class Product_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtString('name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_length_exists'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('mes_length_name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_length_fix'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_length_fix_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_length_min_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_length_max_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_length_def_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_length_seq'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('mes_length_vals'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_width_exists'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('mes_width_name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_width_fix'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_width_fix_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_width_min_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_width_max_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_width_def_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_width_seq'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('mes_width_vals'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_height_exists'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('mes_height_name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_height_fix'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_height_fix_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_height_min_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_height_max_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_height_def_val'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('mes_height_seq'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('mes_height_vals'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('base_measure_unit_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtInt('order_measure_unit_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('base_measure_unit_vol_m'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('base_measure_unit_weight_t'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('pack_name'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('pack_default'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('pack_not_free'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('pack_full_package_only'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('extra_pay_for_abnormal_size'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('extra_pay_for_abn_size_always'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('extra_pay_calc_formula'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('warehouses_str'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('lot_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('lot_volume'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('sert_type_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtString('name_for_1c'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('product_group_id'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('fin_group'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('analit_group'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('deleted'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('Product_Model');

			
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
		$param = new FieldExtBool('mes_length_exists'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('mes_length_name'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_length_fix'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_length_fix_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_length_min_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_length_max_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_length_def_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_length_seq'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('mes_length_vals'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_width_exists'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('mes_width_name'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_width_fix'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_width_fix_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_width_min_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_width_max_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_width_def_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_width_seq'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('mes_width_vals'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_height_exists'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('mes_height_name'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_height_fix'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_height_fix_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_height_min_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_height_max_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_height_def_val'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('mes_height_seq'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('mes_height_vals'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('base_measure_unit_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('order_measure_unit_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('base_measure_unit_vol_m'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('base_measure_unit_weight_t'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('pack_name'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pack_default'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pack_not_free'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pack_full_package_only'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('extra_pay_for_abnormal_size'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('extra_pay_for_abn_size_always'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('extra_pay_calc_formula'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('warehouses_str'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('lot_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('lot_volume'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('sert_type_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtString('name_for_1c'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('product_group_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('fin_group'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('analit_group'
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
			$this->setUpdateModelId('Product_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('Product_Model');

			
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
		
		$this->setListModelId('ProductList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('ProductDialog_Model');		

			
		$pm = new PublicMethod('get_list_for_order');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('warehouse_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_filter_list');
		
		$this->addPublicMethod($pm);

		
	}
	
	private function str_to_SQLarray($str){
		$res = '';
		if ($str){
			$ar = explode(';',$str);
			foreach($ar as $v){
				$v = floatval(str_replace(',','.',$v));
				$res.=($res=='')? '':',';
				$res.=$v;//.'::numeric';
			}
		}
		return '{'.$res.'}';
	}
	public function correct_arrays($pm){
		//length
		$pm->setParamValue('mes_length_vals',
			$this->str_to_SQLarray($pm->getParamValue('mes_length_vals'))
		);
		
		//width
		$pm->setParamValue('mes_width_vals',
			$this->str_to_SQLarray($pm->getParamValue('mes_width_vals'))
		);
		
		//height
		$pm->setParamValue('mes_height_vals',
			$this->str_to_SQLarray($pm->getParamValue('mes_height_vals'))
		);		
	}

	public function update($pm){
		$this->correct_arrays($pm);
		parent::update($pm);
	}
	public function insert($pm){
		$this->correct_arrays($pm);
		parent::insert($pm);
	}	
	public function get_list_for_order($pm){
		$link = $this->getDbLink();		
		$params = new ParamsSQL($pm,$link);
		$params->setValidated("warehouse_id",DT_INT);
		$warehouse_id = $params->getParamById('warehouse_id');
		
		$model = new ProductList_Model($this->getDbLink());
		$q=sprintf(
			"SELECT id,name
			FROM products
			WHERE (%d=0) OR (%d>0 AND id=ANY(
				SELECT product_id
				FROM product_warehouses AS pw
				WHERE pw.warehouse_id=%d)
				)
			AND NOT coalesce(products.deleted,FALSE)
		ORDER BY name		
		",
		$warehouse_id,$warehouse_id,$warehouse_id);
		$model->query($q,TRUE);
		$this->addModel($model);
	}
	
	public function get_filter_list($pm){
		$link = $this->getDbLink();		
		$model = new ProductFilterList_Model($this->getDbLink());
		$model->query("SELECT * FROM products_filter_list",TRUE);
		$this->addModel($model);
	}
	

}
?>