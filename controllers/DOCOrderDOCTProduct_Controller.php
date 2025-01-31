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

class DOCOrderDOCTProduct_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

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
		$param = new FieldExtInt('product_id'
				,array('required'=>TRUE,
				'alias'=>'Продукция'
			));
		$pm->addParam($param);
		$param = new FieldExtInt('mes_length'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_width'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('mes_height'
				,array());
		$pm->addParam($param);
		$param = new FieldExtInt('measure_unit_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtFloat('quant'
				,array(
				'alias'=>'Количество'
			));
		$pm->addParam($param);
		$param = new FieldExtFloat('quant_confirmed'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('quant_base_measure_unit'
				,array(
				'alias'=>'Количество'
			));
		$pm->addParam($param);
		$param = new FieldExtFloat('quant_confirmed_base_measure_unit'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('volume'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('weight'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('price'
				,array(
				'alias'=>'Цена'
			));
		$pm->addParam($param);
		$param = new FieldExtBool('price_edit'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('price_round'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('total'
				,array(
				'alias'=>'Сумма'
			));
		$pm->addParam($param);
		$param = new FieldExtFloat('total_pack'
				,array(
				'alias'=>'Сумма'
			));
		$pm->addParam($param);
		$param = new FieldExtBool('pack_exists'
				,array());
		$pm->addParam($param);
		$param = new FieldExtBool('pack_in_price'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('total_deliv'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('total_no_deliv'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('price_no_deliv'
				,array());
		$pm->addParam($param);
		
			$f_params = array();
			$param = new FieldExtInt('warehouse_id'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtInt('client_id'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtBool('deliv_to_third_party'
			,$f_params);
		$pm->addParam($param);		
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('DOCOrderDOCTProduct_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtString('old_view_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('old_line_number',array('required'=>TRUE)));
		
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
		$param = new FieldExtInt('product_id'
				,array(
			
				'alias'=>'Продукция'
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_length'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_width'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('mes_height'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('measure_unit_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('quant'
				,array(
			
				'alias'=>'Количество'
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('quant_confirmed'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('quant_base_measure_unit'
				,array(
			
				'alias'=>'Количество'
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('quant_confirmed_base_measure_unit'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('volume'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('weight'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('price'
				,array(
			
				'alias'=>'Цена'
			));
			$pm->addParam($param);
		$param = new FieldExtBool('price_edit'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('price_round'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('total'
				,array(
			
				'alias'=>'Сумма'
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('total_pack'
				,array(
			
				'alias'=>'Сумма'
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pack_exists'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtBool('pack_in_price'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('total_deliv'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('total_no_deliv'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('price_no_deliv'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtString('view_id',array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('line_number',array(
			));
			$pm->addParam($param);
		
			$f_params = array();
			$param = new FieldExtInt('warehouse_id'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtInt('client_id'
			,$f_params);
		$pm->addParam($param);		
		
			$f_params = array();
			$param = new FieldExtBool('deliv_to_third_party'
			,$f_params);
		$pm->addParam($param);		
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('DOCOrderDOCTProduct_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtString('view_id'
		));		
		
		$pm->addParam(new FieldExtInt('line_number'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('DOCOrderDOCTProduct_Model');

			
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
		
		$this->setListModelId('DOCOrderDOCTProductList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtString('view_id'
		));
		
		$pm->addParam(new FieldExtInt('line_number'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('DOCOrderDOCTProductDialog_Model');		

			
		$pm = new PublicMethod('get_object_for_divis');
		
				
	$opts=array();
			
		$pm->addParam(new FieldExtInt('line_number',$opts));
	
				
	$opts=array();
	
		$opts['length']=32;		
		$pm->addParam(new FieldExtString('view_id',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	public function update($pm){
	
		if ($_SESSION['role_id']=='client'){
			$pm->setParamValue('client_id',$_SESSION['global_client_id']);
			$total_param = 0;
		}
		else{
			$total_param = (!is_null($pm->getParamValue('total')))? floatval($pm->getParamValue('total')):0;
		}
		
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
		
		$product_id = (!is_null($pm->getParamValue('product_id')))?
			$params->getDbVal('product_id'):'NULL';
		$mes_length = (!is_null($pm->getParamValue('mes_length')))?
			$params->getDbVal('mes_length'):'NULL';
		$mes_width = (!is_null($pm->getParamValue('mes_width')))?
			$params->getDbVal('mes_width'):'NULL';
		$mes_height = (!is_null($pm->getParamValue('mes_height')))?
			$params->getDbVal('mes_height'):'NULL';
		$quant = (!is_null($pm->getParamValue('quant')))?
			$params->getDbVal('quant'):'NULL';
		$measure_unit_id = (!is_null($pm->getParamValue('measure_unit_id')))?
			$params->getDbVal('measure_unit_id'):'NULL';
	
		$ar = $this->getDbLink()->query_first(
			sprintf(
				"SELECT
					coalesce(%s,p.product_id) AS product_id,
					coalesce(%s,p.mes_length) AS mes_length,
					coalesce(%s,p.mes_width) AS mes_width,
					coalesce(%s,p.mes_height) AS mes_height,
					coalesce(%s,p.quant) AS quant,
					coalesce(%s,p.measure_unit_id) AS measure_unit_id
				FROM doc_orders_t_tmp_products p
				WHERE p.view_id=%s AND p.line_number=%d",
				$product_id,
				$mes_length,
				$mes_width,
				$mes_height,
				$quant,
				$measure_unit_id,					
				$params->getDbVal('old_view_id'),
				$params->getDbVal('old_line_number')					
			)
		);
		
		/**
		  * Если передали м2 (ID=6), то надо пересчитать количество из базовой,
		  * возможно изменится количество!!!
		  */		
		if($ar['measure_unit_id']==6){
			$quant = $this->recalc_m2(
				$ar['product_id'],
				$ar['mes_length'],
				$ar['mes_width'],
				$ar['mes_height'],
				$ar['quant']				
			);
			 $pm->setParamValue('quant',$quant);
		}
				
		/** все кроме производства и разделения
		  * там по-другому
		  */
		if ($_SESSION['role_id']!='production'
		&&isset($_REQUEST['warehouse_id'])
		&&isset($_REQUEST['client_id'])
		&&isset($_REQUEST['deliv_to_third_party'])
		){
			$pack_exists = (!is_null($pm->getParamValue('pack_exists')))?
				$params->getDbVal('pack_exists'):'NULL';
			$pack_in_price = (!is_null($pm->getParamValue('pack_in_price')))?
				$params->getDbVal('pack_in_price'):'NULL';
			$price_edit = (!is_null($pm->getParamValue('price_edit')))?
				$params->getDbVal('price_edit'):'NULL';
			$price_round = (!is_null($pm->getParamValue('price_round')))?
				$params->getDbVal('price_round'):'NULL';
			$price = (!is_null($pm->getParamValue('price')))?
				$params->getDbVal('price'):'NULL';
		
			$ar = $this->getDbLink()->query_first(
			sprintf(
			"WITH prod AS (
				SELECT
					coalesce(%s,p.product_id) AS product_id,
					coalesce(%s,p.mes_length) AS mes_length,
					coalesce(%s,p.mes_width) AS mes_width,
					coalesce(%s,p.mes_height) AS mes_height,
					coalesce(%s,p.quant) AS quant,
					coalesce(%s,p.measure_unit_id) AS measure_unit_id,
					coalesce(%s,p.pack_exists) AS pack_exists,
					coalesce(%s,p.pack_in_price) AS pack_in_price,
					coalesce(%s,p.price_edit) AS price_edit,
					coalesce(%s,p.price_round) AS price_round,
					coalesce(%s,p.price) AS price,
					coalesce(%s,p.total) AS total
				FROM doc_orders_t_tmp_products p
				WHERE p.view_id=%s AND p.line_number=%d
			)
			SELECT * FROM doc_order_totals(
				%d,%d,
				(SELECT t.product_id FROM prod t),
				(SELECT t.mes_length FROM prod t),
				(SELECT t.mes_width FROM prod t),
				(SELECT t.mes_height FROM prod t),
				(SELECT t.quant FROM prod t),
				(SELECT t.measure_unit_id FROM prod t),
				(SELECT t.pack_exists FROM prod t),
				(SELECT t.pack_in_price FROM prod t),
				%s,
				(SELECT t.price_edit FROM prod t),
				(SELECT t.price_round FROM prod t),
				(SELECT t.price FROM prod t),
				(SELECT t.total FROM prod t)
				)
			AS (
				base_quant numeric,
				volume_m numeric,
				weight_t numeric,
				price numeric,
				total numeric,
				total_pack numeric)",
			$product_id,
			$mes_length,
			$mes_width,
			$mes_height,
			$quant,
			$measure_unit_id,
			$pack_exists,
			$pack_in_price,
			$price_edit,
			$price_round,
			$price,
			(!is_null($pm->getParamValue('total')))? floatval($pm->getParamValue('total')):'NULL',
			$params->getDbVal('old_view_id'),
			$params->getDbVal('old_line_number'),
			$params->getDbVal('warehouse_id'),
			$params->getDbVal('client_id'),
			$params->getDbVal('deliv_to_third_party')			
			));
		
			if (is_array($ar)&&count($ar)){			
				$pm->setParamValue('quant_base_measure_unit',$ar['base_quant']);
				$pm->setParamValue('volume',$ar['volume_m']);
				$pm->setParamValue('weight',$ar['weight_t']);
				$pm->setParamValue('price',$ar['price']);
				$pm->setParamValue('total',$ar['total']);
				$pm->setParamValue('total_pack',$ar['total_pack']);
			}
			
			//Обнулим сумму по доставке по строке т.к. после этого будет пересчет
			$pm->setParamValue('total_deliv',0);
								
		}
		else if (isset($_REQUEST['quant_base_measure_unit'])){
			/** изменилось базовое кол-во
			  * !!!ЦЕНА НЕ ДОЛЖНА МЕНЯТЬСЯ!!!
			  */
			$ar = $this->getDbLink()->query_first(sprintf(
				"SELECT
					tp.price,
					p.base_measure_unit_vol_m AS vm,
					p.base_measure_unit_weight_t AS wt,
					(tp.pack_exists AND tp.pack_in_price=FALSE) AS need_pack_price
				FROM doc_orders_t_tmp_products tp
				LEFT JOIN products p ON p.id=tp.product_id
				WHERE tp.view_id=%s AND tp.line_number=%d",
				$params->getParamById('old_view_id'),
				$params->getParamById('old_line_number')
			));
			if (is_array($ar)&&count($ar)){
				$quant_bmu = $params->getParamById('quant_base_measure_unit');
				$pm->setParamValue('total',
					round($ar['price']*$quant_bmu,2)
				);
				$pm->setParamValue('volume',
					round($ar['vm']*$quant_bmu,3)
				);
				$pm->setParamValue('weight',
					round($ar['wt']*$quant_bmu,2)
				);
				if ($ar['need_pack_price']=='t'){
					$ar = $this->getDbLink()->query_first(sprintf(
					"WITH
					tmp_t AS (
						SELECT
							t.product_id,
							t.mes_length,
							t.mes_width,
							t.mes_height,
							t.quant
						FROM doc_orders_t_tmp_products AS t
						WHERE t.view_id=%s
							AND t.line_number=%d
					)				
					SELECT
						CASE WHEN tp.quant_base_measure_unit>0 THEN
							ROUND(tp.total_pack/tp.quant_base_measure_unit,2)
						ELSE 0
						END AS pack_price						
					FROM doc_orders_t_products AS tp
					WHERE
						tp.doc_id=%d
						AND tp.product_id=(SELECT t.product_id FROM tmp_t t)
						AND tp.mes_length=(SELECT t.mes_length FROM tmp_t t)
						AND tp.mes_width=(SELECT t.mes_width FROM tmp_t t)
						AND tp.mes_height=(SELECT t.mes_height FROM tmp_t t)",
					$params->getParamById('old_view_id'),
					$params->getParamById('old_line_number'),
					$_SESSION['doc_order_id']
					));
					
					$pm->setParamValue('total_pack',
						round(
							$ar['pack_price']*
							$quant_bmu*
							$params->getParamById('quant')
						,2)
					);
				}
			}
		}
		//***************
		parent::update($pm);
	}
	
	private function recalc_m2($productId,$l,$w,$h,$quant){
		$ar = $this->getDbLink()->query_first(
			sprintf(
				"SELECT doc_order_recalc_quant_in_m2(%d,%d,%d,%d,%f) AS quant",
				$productId,
				$l,
				$w,
				$h,
				$quant					
			)
		 );
		 return $ar['quant'];	
	}
	
	public function insert($pm){
		if ($_SESSION['role_id']=='client'){
			$pm->setParamValue('client_id',$_SESSION['global_client_id']);
			$total_param = 0;
		}
		else{
			$total_param =floatval($pm->getParamValue('total'));
		}
	
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();


		/**
		  * Если передали м2 (ID=6), то надо пересчитать количество из базовой,
		  * возможно изменится количество!!!
		  */
		$mu_id = $params->getParamById('measure_unit_id');
		if($mu_id==6){
			$new_q = $this->recalc_m2(
				$params->getParamById('product_id'),
				$params->getParamById('mes_length'),
				$params->getParamById('mes_width'),
				$params->getParamById('mes_height'),
				$params->getParamById('quant')				
			);
			 $pm->setParamValue('quant',$new_q);
		}
		
		$ar = $this->getDbLink()->query_first(
		sprintf("SELECT * FROM doc_order_totals(%d,%d,%d,%d,%d,%d,%f,%d,%s,%s,%s,%s,%f,%f)
		AS (
			base_quant numeric,
			volume_m numeric,
			weight_t numeric,
			price numeric,
			total numeric,
			total_pack numeric)",
		$params->getParamById('warehouse_id'),
		$params->getParamById('client_id'),
		$params->getParamById('product_id'),
		$params->getParamById('mes_length'),
		$params->getParamById('mes_width'),
		$params->getParamById('mes_height'),
		$params->getParamById('quant'),
		$params->getParamById('measure_unit_id'),
		$params->getParamById('pack_exists'),
		$params->getParamById('pack_in_price'),
		$params->getParamById('deliv_to_third_party'),
		$params->getParamById('price_edit'),
		$params->getParamById('price_round'),
		$params->getParamById('price'),
		$total_param
		));
	
		if (is_array($ar)&&count($ar)){
			$pm->setParamValue('quant_base_measure_unit',$ar['base_quant']);
			$pm->setParamValue('volume',$ar['volume_m']);
			$pm->setParamValue('weight',$ar['weight_t']);
			$pm->setParamValue('price',$ar['price']);
			$pm->setParamValue('total',$ar['total']);
			$pm->setParamValue('total_pack',$ar['total_pack']);
		}						
		//**************
		parent::insert($pm);
	}

	public function get_list($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
	
		$this->addNewModel(sprintf(
		"SELECT
			t.*,
			(SELECT ph.oper
			FROM doc_orders_products_history AS ph
			WHERE ph.doc_orders_states_id=
				(SELECT st.id
				FROM doc_orders_states st
				WHERE st.doc_orders_id=%d
				ORDER BY st.date_time DESC
				LIMIT 1)
				AND ph.product_id=t.product_id
			LIMIT 1
			) AS oper
			--string_to_array(ph.fields,',','') AS fileds,
			--string_to_array(ph.old_vals,',','') AS old_vals			
			
		FROM doc_orders_t_tmp_products_list AS t
		WHERE view_id=%s",
		$params->getDbVal('doc_order_id'),
		$params->getDbVal('view_id')
		),
		'DOCOrderDOCTProductList_Model');
	}	

	public function get_object_for_divis($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
	
		$this->addNewModel(sprintf(
		"SELECT
			t.*,
			--!!!для деления!!!
			d_orig.quant AS doc_quant_orig,
			d_orig.quant_base_measure_unit AS quant_orig
		FROM doc_orders_t_tmp_products_dialog AS t
		LEFT JOIN doc_orders_t_products d_orig
			ON d_orig.doc_id=%d
			AND d_orig.product_id=t.product_id
			AND d_orig.mes_length=t.mes_length
			AND d_orig.mes_width=t.mes_width
			AND d_orig.mes_height=t.mes_height
		WHERE t.view_id=%s AND t.line_number=%d",
		$params->getDbVal('doc_order_id'),
		$params->getDbVal('view_id'),
		$params->getDbVal('line_number')		
		),
		'DOCOrderDOCTProductDialog_Model');
	}	
	

}
?>