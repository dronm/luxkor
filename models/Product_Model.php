<?php
/**
 *
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/models/Model_php.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 *
 */

require_once(FRAME_WORK_PATH.'basic_classes/ModelSQL.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLInt.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLString.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLText.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLFloat.php');
require_once(FRAME_WORK_PATH.'basic_classes/FieldSQLBool.php');
require_once(FRAME_WORK_PATH.'basic_classes/ModelOrderSQL.php');
 
class Product_Model extends ModelSQL{
	
	public function __construct($dbLink){
		parent::__construct($dbLink);
		
		
		$this->setDbName('public');
		
		$this->setTableName("products");
			
		//*** Field id ***
		$f_opts = array();
		$f_opts['primaryKey'] = TRUE;
		$f_opts['autoInc']=TRUE;
		$f_opts['id']="id";
						
		$f_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"id",$f_opts);
		$this->addField($f_id);
		//********************
		
		//*** Field name ***
		$f_opts = array();
		$f_opts['length']=100;
		$f_opts['id']="name";
						
		$f_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name",$f_opts);
		$this->addField($f_name);
		//********************
		
		//*** Field mes_length_exists ***
		$f_opts = array();
		$f_opts['id']="mes_length_exists";
						
		$f_mes_length_exists=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_exists",$f_opts);
		$this->addField($f_mes_length_exists);
		//********************
		
		//*** Field mes_length_name ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="mes_length_name";
						
		$f_mes_length_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_name",$f_opts);
		$this->addField($f_mes_length_name);
		//********************
		
		//*** Field mes_length_fix ***
		$f_opts = array();
		$f_opts['id']="mes_length_fix";
						
		$f_mes_length_fix=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_fix",$f_opts);
		$this->addField($f_mes_length_fix);
		//********************
		
		//*** Field mes_length_fix_val ***
		$f_opts = array();
		$f_opts['id']="mes_length_fix_val";
						
		$f_mes_length_fix_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_fix_val",$f_opts);
		$this->addField($f_mes_length_fix_val);
		//********************
		
		//*** Field mes_length_min_val ***
		$f_opts = array();
		$f_opts['id']="mes_length_min_val";
						
		$f_mes_length_min_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_min_val",$f_opts);
		$this->addField($f_mes_length_min_val);
		//********************
		
		//*** Field mes_length_max_val ***
		$f_opts = array();
		$f_opts['id']="mes_length_max_val";
						
		$f_mes_length_max_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_max_val",$f_opts);
		$this->addField($f_mes_length_max_val);
		//********************
		
		//*** Field mes_length_def_val ***
		$f_opts = array();
		$f_opts['id']="mes_length_def_val";
						
		$f_mes_length_def_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_def_val",$f_opts);
		$this->addField($f_mes_length_def_val);
		//********************
		
		//*** Field mes_length_seq ***
		$f_opts = array();
		$f_opts['id']="mes_length_seq";
						
		$f_mes_length_seq=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_seq",$f_opts);
		$this->addField($f_mes_length_seq);
		//********************
		
		//*** Field mes_length_vals ***
		$f_opts = array();
		$f_opts['id']="mes_length_vals";
						
		$f_mes_length_vals=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_length_vals",$f_opts);
		$this->addField($f_mes_length_vals);
		//********************
		
		//*** Field mes_width_exists ***
		$f_opts = array();
		$f_opts['id']="mes_width_exists";
						
		$f_mes_width_exists=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_exists",$f_opts);
		$this->addField($f_mes_width_exists);
		//********************
		
		//*** Field mes_width_name ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="mes_width_name";
						
		$f_mes_width_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_name",$f_opts);
		$this->addField($f_mes_width_name);
		//********************
		
		//*** Field mes_width_fix ***
		$f_opts = array();
		$f_opts['id']="mes_width_fix";
						
		$f_mes_width_fix=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_fix",$f_opts);
		$this->addField($f_mes_width_fix);
		//********************
		
		//*** Field mes_width_fix_val ***
		$f_opts = array();
		$f_opts['id']="mes_width_fix_val";
						
		$f_mes_width_fix_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_fix_val",$f_opts);
		$this->addField($f_mes_width_fix_val);
		//********************
		
		//*** Field mes_width_min_val ***
		$f_opts = array();
		$f_opts['id']="mes_width_min_val";
						
		$f_mes_width_min_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_min_val",$f_opts);
		$this->addField($f_mes_width_min_val);
		//********************
		
		//*** Field mes_width_max_val ***
		$f_opts = array();
		$f_opts['id']="mes_width_max_val";
						
		$f_mes_width_max_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_max_val",$f_opts);
		$this->addField($f_mes_width_max_val);
		//********************
		
		//*** Field mes_width_def_val ***
		$f_opts = array();
		$f_opts['id']="mes_width_def_val";
						
		$f_mes_width_def_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_def_val",$f_opts);
		$this->addField($f_mes_width_def_val);
		//********************
		
		//*** Field mes_width_seq ***
		$f_opts = array();
		$f_opts['id']="mes_width_seq";
						
		$f_mes_width_seq=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_seq",$f_opts);
		$this->addField($f_mes_width_seq);
		//********************
		
		//*** Field mes_width_vals ***
		$f_opts = array();
		$f_opts['id']="mes_width_vals";
						
		$f_mes_width_vals=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_width_vals",$f_opts);
		$this->addField($f_mes_width_vals);
		//********************
		
		//*** Field mes_height_exists ***
		$f_opts = array();
		$f_opts['id']="mes_height_exists";
						
		$f_mes_height_exists=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_exists",$f_opts);
		$this->addField($f_mes_height_exists);
		//********************
		
		//*** Field mes_height_name ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="mes_height_name";
						
		$f_mes_height_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_name",$f_opts);
		$this->addField($f_mes_height_name);
		//********************
		
		//*** Field mes_height_fix ***
		$f_opts = array();
		$f_opts['id']="mes_height_fix";
						
		$f_mes_height_fix=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_fix",$f_opts);
		$this->addField($f_mes_height_fix);
		//********************
		
		//*** Field mes_height_fix_val ***
		$f_opts = array();
		$f_opts['id']="mes_height_fix_val";
						
		$f_mes_height_fix_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_fix_val",$f_opts);
		$this->addField($f_mes_height_fix_val);
		//********************
		
		//*** Field mes_height_min_val ***
		$f_opts = array();
		$f_opts['id']="mes_height_min_val";
						
		$f_mes_height_min_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_min_val",$f_opts);
		$this->addField($f_mes_height_min_val);
		//********************
		
		//*** Field mes_height_max_val ***
		$f_opts = array();
		$f_opts['id']="mes_height_max_val";
						
		$f_mes_height_max_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_max_val",$f_opts);
		$this->addField($f_mes_height_max_val);
		//********************
		
		//*** Field mes_height_def_val ***
		$f_opts = array();
		$f_opts['id']="mes_height_def_val";
						
		$f_mes_height_def_val=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_def_val",$f_opts);
		$this->addField($f_mes_height_def_val);
		//********************
		
		//*** Field mes_height_seq ***
		$f_opts = array();
		$f_opts['id']="mes_height_seq";
						
		$f_mes_height_seq=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_seq",$f_opts);
		$this->addField($f_mes_height_seq);
		//********************
		
		//*** Field mes_height_vals ***
		$f_opts = array();
		$f_opts['id']="mes_height_vals";
						
		$f_mes_height_vals=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"mes_height_vals",$f_opts);
		$this->addField($f_mes_height_vals);
		//********************
		
		//*** Field base_measure_unit_id ***
		$f_opts = array();
		$f_opts['id']="base_measure_unit_id";
						
		$f_base_measure_unit_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"base_measure_unit_id",$f_opts);
		$this->addField($f_base_measure_unit_id);
		//********************
		
		//*** Field order_measure_unit_id ***
		$f_opts = array();
		$f_opts['id']="order_measure_unit_id";
						
		$f_order_measure_unit_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"order_measure_unit_id",$f_opts);
		$this->addField($f_order_measure_unit_id);
		//********************
		
		//*** Field base_measure_unit_vol_m ***
		$f_opts = array();
		$f_opts['length']=10;
		$f_opts['id']="base_measure_unit_vol_m";
						
		$f_base_measure_unit_vol_m=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"base_measure_unit_vol_m",$f_opts);
		$this->addField($f_base_measure_unit_vol_m);
		//********************
		
		//*** Field base_measure_unit_weight_t ***
		$f_opts = array();
		$f_opts['length']=10;
		$f_opts['id']="base_measure_unit_weight_t";
						
		$f_base_measure_unit_weight_t=new FieldSQLFloat($this->getDbLink(),$this->getDbName(),$this->getTableName(),"base_measure_unit_weight_t",$f_opts);
		$this->addField($f_base_measure_unit_weight_t);
		//********************
		
		//*** Field pack_name ***
		$f_opts = array();
		$f_opts['length']=50;
		$f_opts['id']="pack_name";
						
		$f_pack_name=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pack_name",$f_opts);
		$this->addField($f_pack_name);
		//********************
		
		//*** Field pack_default ***
		$f_opts = array();
		$f_opts['id']="pack_default";
						
		$f_pack_default=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pack_default",$f_opts);
		$this->addField($f_pack_default);
		//********************
		
		//*** Field pack_not_free ***
		$f_opts = array();
		$f_opts['id']="pack_not_free";
						
		$f_pack_not_free=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pack_not_free",$f_opts);
		$this->addField($f_pack_not_free);
		//********************
		
		//*** Field pack_full_package_only ***
		$f_opts = array();
		$f_opts['id']="pack_full_package_only";
						
		$f_pack_full_package_only=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"pack_full_package_only",$f_opts);
		$this->addField($f_pack_full_package_only);
		//********************
		
		//*** Field extra_pay_for_abnormal_size ***
		$f_opts = array();
		$f_opts['id']="extra_pay_for_abnormal_size";
						
		$f_extra_pay_for_abnormal_size=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"extra_pay_for_abnormal_size",$f_opts);
		$this->addField($f_extra_pay_for_abnormal_size);
		//********************
		
		//*** Field extra_pay_for_abn_size_always ***
		$f_opts = array();
		$f_opts['defaultValue']='false';
		$f_opts['id']="extra_pay_for_abn_size_always";
						
		$f_extra_pay_for_abn_size_always=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"extra_pay_for_abn_size_always",$f_opts);
		$this->addField($f_extra_pay_for_abn_size_always);
		//********************
		
		//*** Field extra_pay_calc_formula ***
		$f_opts = array();
		$f_opts['id']="extra_pay_calc_formula";
						
		$f_extra_pay_calc_formula=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"extra_pay_calc_formula",$f_opts);
		$this->addField($f_extra_pay_calc_formula);
		//********************
		
		//*** Field warehouses_str ***
		$f_opts = array();
		$f_opts['id']="warehouses_str";
						
		$f_warehouses_str=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"warehouses_str",$f_opts);
		$this->addField($f_warehouses_str);
		//********************
		
		//*** Field lot_id ***
		$f_opts = array();
		$f_opts['length']=10;
		$f_opts['id']="lot_id";
						
		$f_lot_id=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"lot_id",$f_opts);
		$this->addField($f_lot_id);
		//********************
		
		//*** Field lot_volume ***
		$f_opts = array();
		$f_opts['length']=30;
		$f_opts['id']="lot_volume";
						
		$f_lot_volume=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"lot_volume",$f_opts);
		$this->addField($f_lot_volume);
		//********************
		
		//*** Field sert_type_id ***
		$f_opts = array();
		$f_opts['id']="sert_type_id";
						
		$f_sert_type_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"sert_type_id",$f_opts);
		$this->addField($f_sert_type_id);
		//********************
		
		//*** Field name_for_1c ***
		$f_opts = array();
		$f_opts['length']=100;
		$f_opts['id']="name_for_1c";
						
		$f_name_for_1c=new FieldSQLString($this->getDbLink(),$this->getDbName(),$this->getTableName(),"name_for_1c",$f_opts);
		$this->addField($f_name_for_1c);
		//********************
		
		//*** Field product_group_id ***
		$f_opts = array();
		$f_opts['id']="product_group_id";
						
		$f_product_group_id=new FieldSQLInt($this->getDbLink(),$this->getDbName(),$this->getTableName(),"product_group_id",$f_opts);
		$this->addField($f_product_group_id);
		//********************
		
		//*** Field fin_group ***
		$f_opts = array();
		$f_opts['id']="fin_group";
						
		$f_fin_group=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"fin_group",$f_opts);
		$this->addField($f_fin_group);
		//********************
		
		//*** Field analit_group ***
		$f_opts = array();
		$f_opts['id']="analit_group";
						
		$f_analit_group=new FieldSQLText($this->getDbLink(),$this->getDbName(),$this->getTableName(),"analit_group",$f_opts);
		$this->addField($f_analit_group);
		//********************
		
		//*** Field deleted ***
		$f_opts = array();
		$f_opts['defaultValue']='FALSE';
		$f_opts['id']="deleted";
						
		$f_deleted=new FieldSQLBool($this->getDbLink(),$this->getDbName(),$this->getTableName(),"deleted",$f_opts);
		$this->addField($f_deleted);
		//********************
	
		$order = new ModelOrderSQL();		
		$this->setDefaultModelOrder($order);		
		$direct = 'ASC';
		$order->addField($f_name,$direct);

	}

}
?>
