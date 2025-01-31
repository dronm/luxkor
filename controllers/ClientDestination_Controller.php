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



require_once('common/OSRMV5.php');
require_once('common/geo/yandex.php');
require_once('common/geo/YndxReverseCode.php');
require_once(FRAME_WORK_PATH.'basic_classes/ParamsSQL.php');
require_once(ABSOLUTE_PATH.'controllers/Kladr_Controller.php');
require_once(ABSOLUTE_PATH.'models/ClientDestination_Model.php');

require_once(ABSOLUTE_PATH.'functions/DadataSuggest.php');
use Dadata\DadataSuggest as DadataSuggest;
require_once(FRAME_WORK_PATH.'basic_classes/Model.php');

class ClientDestination_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			

		/* insert */
		$pm = new PublicMethod('insert');
		$param = new FieldExtInt('client_id'
				,array('required'=>TRUE));
		$pm->addParam($param);
		$param = new FieldExtText('value'
				,array());
		$pm->addParam($param);
		$param = new FieldExtGeomPoint('zone_center'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lon'
				,array());
		$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lat'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('region'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('region_code'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('raion'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('raion_code'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('gorod'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('gorod_code'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('naspunkt'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('naspunkt_code'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('ulitza'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('ulitza_code'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('dom'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('korpus'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('kvartira'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('addr_index'
				,array());
		$pm->addParam($param);
		$param = new FieldExtText('value'
				,array());
		$pm->addParam($param);
		
		$pm->addParam(new FieldExtInt('ret_id'));
		
			$f_params = array();
			$param = new FieldExtInt('error_on_no_road'
			,$f_params);
		$pm->addParam($param);		
		
		
		$this->addPublicMethod($pm);
		$this->setInsertModelId('ClientDestination_Model');

			
		/* update */		
		$pm = new PublicMethod('update');
		
		$pm->addParam(new FieldExtInt('old_id',array('required'=>TRUE)));
		
		$pm->addParam(new FieldExtInt('obj_mode'));
		$param = new FieldExtInt('id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtInt('client_id'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('value'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtGeomPoint('zone_center'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lon'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtFloat('near_road_lat'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('region'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('region_code'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('raion'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('raion_code'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('gorod'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('gorod_code'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('naspunkt'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('naspunkt_code'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('ulitza'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('ulitza_code'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('dom'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('korpus'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('kvartira'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('addr_index'
				,array(
			));
			$pm->addParam($param);
		$param = new FieldExtText('value'
				,array(
			));
			$pm->addParam($param);
		
			$param = new FieldExtInt('id',array(
			));
			$pm->addParam($param);
		
		
			$this->addPublicMethod($pm);
			$this->setUpdateModelId('ClientDestination_Model');

			
		/* delete */
		$pm = new PublicMethod('delete');
		
		$pm->addParam(new FieldExtInt('id'
		));		
		
		$pm->addParam(new FieldExtInt('count'));
		$pm->addParam(new FieldExtInt('from'));				
		$this->addPublicMethod($pm);					
		$this->setDeleteModelId('ClientDestination_Model');

			
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
		
		$this->setListModelId('ClientDestinationList_Model');
		
			
		/* get_object */
		$pm = new PublicMethod('get_object');
		$pm->addParam(new FieldExtInt('browse_mode'));
		
		$pm->addParam(new FieldExtInt('id'
		));
		
		$this->addPublicMethod($pm);
		$this->setObjectModelId('ClientDestinationDialog_Model');		

			
		$pm = new PublicMethod('get_address_gps');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('value',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('region',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('region_code',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('raion',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('raion_code',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('gorod',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('gorod_code',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('naspunkt',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('naspunkt_code',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('ulitza',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('ulitza_code',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('dom',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtText('korpus',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('complete_address');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('client_id',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtText('address',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('region',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	private function set_addr_from_gps($lat,$lon,&$pm){
		$rev_coder = new YndxReverseCode();
		$rev_coder->getAddressForCoords($lat,$lon);			
		if ($rev_coder->state){
			$pm->setParamValue('region',$rev_coder->state);
		}
		if ($rev_coder->city){
			$pm->setParamValue('gorod',$rev_coder->city);
		}
		if ($rev_coder->street){
			$pm->setParamValue('ulitza',$rev_coder->street);
		}
		if ($rev_coder->house){
			$pm->setParamValue('dom',$rev_coder->house);
		}
	
	}
	
	public function set_near_road($pm){
		$zone_center = $pm->getParamValue('zone_center');
		if ($zone_center){			
			$points = explode(' ',$zone_center);
			if (count($points)>=2){
				$osrm = new OSRMV5(OSRM_PROTOCOLE,OSRM_HOST,OSRM_PORT,'v1');
				$road_lat=NULL;$road_lon=NULL;
				
				//$pm->setParamValue('near_road_lon','65.697777');
				//$pm->setParamValue('near_road_lat','56.942547');
				
				
				$osrm->getNearestRoadCoord(
					$points[1],$points[0],
					$road_lat,$road_lon
					);
				$pm->setParamValue('near_road_lon',$road_lon);
				$pm->setParamValue('near_road_lat',$road_lat);
				
			}
		}
	}

	public function insert($pm){
		$zone_center = $pm->getParamValue('zone_center');
		$value = $pm->getParamValue('value');
		
		$value = $pm->getParamValue('value');
		if ($pm->getParamValue('region') && !$value){
			$region = $pm->getParamValue('region');
			$raion = $pm->getParamValue('raion');
			$gorod = $pm->getParamValue('gorod');
			$naspunkt = $pm->getParamValue('naspunkt');
			$ulitza = $pm->getParamValue('ulitza');
			$dom = $pm->getParamValue('dom');
			$korpus = $pm->getParamValue('korpus');
			$kvartira = $pm->getParamValue('kvartira');						
			
			$value = $region;
			$value.= ($raion)? (','.$raion):'';
			$value.= ($gorod)? (','.$gorod):'';
			$value.= ($naspunkt)? (','.$naspunkt):'';
			$value.= ($ulitza)? (','.$ulitza):'';
			$value.= ($dom)? (',дом '.$dom):'';
			$value.= ($korpus)? (',корп. '.$korpus):'';
			$value.= ($kvartira)? (',кв. '.$kvartira):'';
			
			$pm->setParamValue("value",$value);
		}
		
		
		$addr_exists = strlen($value);
		
		if (!$zone_center){
			//нет маркера зоны
			if (!strlen($value)){
				throw new Exception("Не задан адрес!");
			}
			//Обратное геокодирование
			$res = array();
			$addr = array('region'=>$value,
					'raion'=>'',
					'city'=>'',
					'naspunkt'=>'',
					'street'=>'',
					'building'=>'',
					'korpus'=>''
			);
			
			get_inf_on_address($addr,$res);
			
			if ($res['lon_pos'] && $res['lat_pos']){
				$pm->setParamValue('zone_center',
					$res['lon_pos'].' '.$res['lat_pos']
					);
			}
		}
		else if(!$addr_exists){
			//есть маркер но нет адреса
			$points = explode(' ',$zone_center);
			if (count($points)>=2){
				$this->set_addr_from_gps($points[1],$points[0],$pm);
			
			}			
		}
		else if(!$zone_center && !$addr_exists){
			throw new Exception("Не задан ни адрес, ни координаты объекта!");
		}
		$this->set_near_road($pm);
		if ($pm->getParamValue("error_on_no_road")=="1" && (!$pm->getParamValue('near_road_lon')||!$pm->getParamValue('near_road_lat'))){
			throw new Exception("Не найдена ближайшая дорога!");
		}
		$pm->setParamValue("ret_id","1");
		parent::insert($pm);
	}
	
	public function update($pm){
		/* если адрес изменился а маркера нет*/
		$zone_center = $pm->getParamValue('zone_center');
		
		$value = $pm->getParamValue('value');
		
		/*
		if ($pm->getParamValue('region') && !$value){
			$region = $pm->getParamValue('region');
			$raion = $pm->getParamValue('raion');
			$gorod = $pm->getParamValue('gorod');
			$naspunkt = $pm->getParamValue('naspunkt');
			$ulitza = $pm->getParamValue('ulitza');
			$dom = $pm->getParamValue('dom');
			$korpus = $pm->getParamValue('korpus');
			$kvartira = $pm->getParamValue('kvartira');						
			
			$value = $region;
			$value.= ($raion)? (','.$raion):'';
			$value.= ($gorod)? (','.$gorod):'';
			$value.= ($naspunkt)? (','.$naspunkt):'';
			$value.= ($ulitza)? (','.$ulitza):'';
			$value.= ($dom)? (',дом '.$dom):'';
			$value.= ($korpus)? (',корп. '.$korpus):'';
			$value.= ($kvartira)? (',кв. '.$kvartira):'';
			
			$pm->setParamValue("value",$value);
		}
		
		$region = $pm->getParamValue('region');
		$raion = $pm->getParamValue('raion');
		$gorod = $pm->getParamValue('gorod');
		$naspunkt = $pm->getParamValue('naspunkt');
		$ulitza = $pm->getParamValue('ulitza');
		$dom = $pm->getParamValue('dom');
		$korpus = $pm->getParamValue('korpus');
		*/
		
		$addr_exists = strlen($value);
		
		if (!$zone_center){
			//нет маркера зоны
			
			if ($addr_exists){
				/** ИЗМЕНИЛСЯ АДРЕС
				 * Обратное геокодирование
				 */
				
				/*
				$old_id = intval($pm->getParamValue('old_id'));
				$db_addr_res = $this->getDbLink()->query_first(sprintf(
				"SELECT
					region,
					raion,
					gorod,
					naspunkt,
					ulitza,
					dom,
					korpus
				FROM client_destinations
				WHERE id=%d",
				$old_id
				));
				if (!is_array($db_addr_res) || !count($db_addr_res)){
					throw new Exception("Неверный id!");
				}
				
				
				$region = (isset($region))? $region:$db_addr_res['region'];
				$raion = (isset($raion))? $raion:$db_addr_res['raion'];
				$gorod = (isset($gorod))? $gorod:$db_addr_res['gorod'];
				$naspunkt = (isset($naspunkt))? $naspunkt:$db_addr_res['naspunkt'];
				$ulitza = (isset($ulitza))? $ulitza:$db_addr_res['ulitza'];
				$dom = (isset($dom))? $dom:$db_addr_res['dom'];
				$korpus = (isset($korpus))? $korpus:$db_addr_res['korpus'];
				*/
				
				$res = array();
				$addr = array('region'=>$value,
						'raion'=>'',
						'city'=>'',
						'naspunkt'=>'',
						'street'=>'',
						'building'=>'',
						'korpus'=>''
				);
				
				get_inf_on_address($addr,$res);
				
				if ($res['lon_pos'] && $res['lat_pos']){
					$pm->setParamValue('zone_center',
						$res['lon_pos'].' '.$res['lat_pos']
						);
				}
			}
		}
		else if(!$addr_exists){
			/** есть маркет но нет адреса
			 * проверим адрес. Маркер сдвинули руками - определим адрес
			 */
			$points = explode(' ',$zone_center);
			if (count($points) >= 2){
				$this->set_addr_from_gps($points[1],$points[0],$pm);
			}				

			
			/*
			$ar = $this->getDbLink()->query_first(sprintf(
			"SELECT
				region||raion||gorod||naspunkt||ulitza||dom||korpus AS addr
			FROM client_destinations
			WHERE id=%d",
			intval($pm->getParamValue('old_id'))
			));
			if (!is_array($ar) || !count($ar)){
				throw new Exception("Неверный id!");
			}
			
			if (!strlen($ar['addr'])){
				//все таки нет адреса - определим по GPS
				$points = explode(' ',$zone_center);
				if (count($points)>=2){
					$this->set_addr_from_gps($points[1],$points[0],$pm);
				}				
			}
			*/
		}
		$this->set_near_road($pm);
		parent::update($pm);
	}	
	public function get_address_gps($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
		
		$res = array();
		if ($value=$p->getParamById('value')){
			$addr = array('region'=>$value,
				'raion'=>'',
				'city'=>'',
				'naspunkt'=>'',
				'street'=>'',
				'building'=>'',
				'korpus'=>''
			);		
		}
		else{
			$q = "";
			if ($code=$p->getParamById('region_code')){
				$q.=($q=="")? "":", ";
				$q.=sprintf("(SELECT k.name FROM kladr k WHERE k.code=%s) AS region",$code);
			}
			if ($p->getParamById('raion_code') && ($code=$p->getParamById('raion_code')) ){
				$q.=($q=="")? "":", ";
				$q.=sprintf("(SELECT k.name FROM kladr k WHERE k.code=%s) AS raion",$code);
			}
			if ($code=$p->getParamById('naspunkt_code')){
				$q.=($q=="")? "":", ";
				$q.=sprintf("(SELECT k.name FROM kladr k WHERE k.code=%s) AS naspunkt",$code);
			}
			if ($code=$p->getParamById('gorod_code')){
				$q.=($q=="")? "":", ";
				$q.=sprintf("(SELECT k.name FROM kladr k WHERE k.code=%s) AS gorod",$code);
			}		
			if ($code=$p->getParamById('ulitza_code')){
				$q.=($q=="")? "":", ";
				$q.=sprintf("(SELECT k.name FROM street k WHERE k.code=%s) AS ulitza",$code);
			}
	
			$kl_ar = array();
			if (strlen($q)){
				$kladr = new Kladr_Controller();
				$kl_ar = $kladr->query_first("SELECT ".$q);
			}
					
			$addr = array('region'=>(array_key_exists('region',$kl_ar))? $kl_ar['region']:$pm->getParamValue('region'),
					'raion'=>(array_key_exists('raion',$kl_ar))? $kl_ar['raion']:$pm->getParamValue('raion'),
					'city'=>(array_key_exists('gorod',$kl_ar))? $kl_ar['gorod']:$pm->getParamValue('gorod'),
					'naspunkt'=>(array_key_exists('naspunkt',$kl_ar))? $kl_ar['naspunkt']:$pm->getParamValue('naspunkt'),
					'street'=>(array_key_exists('ulitza',$kl_ar))? $kl_ar['ulitza']:$pm->getParamValue('ulitza'),
					'building'=>$pm->getParamValue('dom'),
					'korpus'=>$pm->getParamValue('korpus')
			);
		
		}
		get_inf_on_address($addr,$res);
	
		if (!$value && $pm->getParamValue('ulitza') && $pm->getParamValue('dom') && $res['precision']!="exact" && $res['precision']!="near" & $res['precision']!="street"){
			throw new Exception("Адрес не найден!");
		}
		
		$this->addNewModel(sprintf("SELECT %f lon,%f lat",$res['lon_pos'],$res['lat_pos']), 'gps');
	}
	
	/*
	возвращает не более 10 адресов:
		3 старых, были в документах. отсортированы впереди
		остальные новые
	*/
	public function complete_address($pm){
		if ($_SESSION['role_id']=='client'){
			//Установим клиента
			$pm->setParamValue('client_id',$_SESSION['global_client_id']);
		}	
	
		$TOTAL_CNT = 10;
		$OLD_CNT = 3;
		
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		$model = new Model(array('id'=>'DelivAddress_Model'));		
	
		$qid = $this->getDbLink()->query(sprintf(
		"SELECT
			cd.id,
			cd.value AS address,
			true AS is_old
		FROM client_destinations As cd
		WHERE cd.client_id=%d AND to_tsvector(cd.value) @@ plainto_tsquery(%s)
		ORDER BY cd.value
		LIMIT %d",
		$p->getDbVal('client_id'),
		$p->getDbVal('address'),
		$OLD_CNT
		));
		
		$included_ids = '';
		while($ar = $this->getDbLink()->fetch_array($qid)){
			$row = array(
				new Field('address',DT_STRING,array('value'=>$ar['address'])),
				new Field('is_old',DT_STRING,array('value'=>$ar['is_old'])),
				new Field('id',DT_INT,array('value'=>$ar['id']))
			);
			$model->insert($row);					
			
			$included_ids.= ($included_ids=='')? '':',';
			$included_ids.= $ar['id'];
		}
		
		$srch1 = $this->getDbLink()->num_rows();
		$srch2 = 0;
		if (($OLD_CNT - $srch1) > 0){
			$cond = '';
			
			$address_w = explode(' ',$p->getVal('address'));
			foreach($address_w as $w){
				if (strlen($w) > 3){
					$cond.= ($cond=='')? '':' AND ';	
					$cond.= "lower(cd.value) LIKE lower('%".$w."%')";
				}
			}
			
			if ($cond!=""){
				$qid = $this->getDbLink()->query(
				"SELECT
					cd.id,
					cd.value AS address,
					true AS is_old
				FROM client_destinations As cd
				WHERE cd.client_id=".$p->getDbVal('client_id')." AND ".$cond.
					(($included_ids=="")? "": "AND cd.id IN (".$included_ids.") ").
				"ORDER BY cd.value
				LIMIT ".($OLD_CNT - $srch1)
				);
				$srch2 = $this->getDbLink()->num_rows(); 
			}
		}
		
		$ext_cnt = $TOTAL_CNT - $srch1 - $srch2;
		
		//throw new Exception("ExtCnt=".$ext_cnt);
		
		while($ar = $this->getDbLink()->fetch_array($qid)){
			$row = array(
				new Field('address',DT_STRING,array('value'=>$ar['address'])),
				new Field('is_old',DT_STRING,array('value'=>$ar['is_old'])),
				new Field('id',DT_INT,array('value'=>$ar['id']))
			);
			$model->insert($row);					
		}
		
		//Ext
		
		$dadata = new DadataSuggest(DADATA_KEY);
		$addr_for_query = trim($p->getVal('address'));
				
		$region = $p->getDbVal('region');
		if($region==0){
			if(!isset($_SESSION['prior_regions'])){
				$kladr_link = new DB_Sql();
				$kladr_link->appname		= APP_NAME;
				$kladr_link->technicalemail	= TECH_EMAIL;
				$kladr_link->reporterror	= DEBUG;
				$kladr_link->database		= 'kladr';
				$kladr_link->connect(DB_SERVER,DB_USER,DB_PASSWORD);
		
				$_SESSION['prior_regions'] = array();
				$q_id = $kladr_link->query("SELECT code,name FROM plpl_prior_regions ORDER BY sort");
				while($ar = $kladr_link->fetch_array($q_id)){
					array_push($_SESSION['prior_regions'],array('kladr_id'=>$ar['code']));
				}
			}
			$ext_reg = &$_SESSION['prior_regions'];
		}
		else{
			$ext_reg = array(array('kladr_id'=>$region));
		}
		/*
		$selected_region = $p->getDbVal('region');
		if(!isset($_SESSION['prior_regions'])){
			$kladr_link = new DB_Sql();
			$kladr_link->appname		= APP_NAME;
			$kladr_link->technicalemail	= TECH_EMAIL;
			$kladr_link->reporterror	= DEBUG;
			$kladr_link->database		= 'kladr';
			$kladr_link->connect(DB_SERVER,DB_USER,DB_PASSWORD);
		
			$_SESSION['prior_regions'] = array();
			$q_id = $kladr_link->query("SELECT code,name FROM plpl_prior_regions ORDER BY sort");
			while($ar = $kladr_link->fetch_array($q_id)){
				$_SESSION['prior_regions'] = array('code'=>$ar['code'],'name'=>$ar['name']);
			}
		}
		
		$ext_reg = array();
		if($selected_region==$_SESSION['prior_regions'][0]['kladr_id']){
			$ext_reg = &$_SESSION['prior_regions'];
		}
		else{
			foreach($_SESSION['prior_regions'] as $reg){
				if($reg['kladr_id']==$selected_region){
					array_push($ext_reg,array('kladr_id'=>$reg['kladr_id']));
					break;
				}
			}
		
			foreach($_SESSION['prior_regions'] as $reg){
				if($reg['kladr_id']!=$selected_region){
					array_push($ext_reg,array('kladr_id'=>$reg['kladr_id']));
				}
			}
		}
		*/
		
		$ext_addresses = $dadata->address(
				$addr_for_query,
				$ext_cnt,
				NULL,
				$ext_reg
		);
		
		for($i=0;$i<count($ext_addresses->suggestions);$i++){						
			$row = array(
				new Field('address',DT_STRING,array('value'=>$ext_addresses->suggestions[$i]->value)),
				new Field('is_old',DT_STRING,array('value'=>'f')),
				new Field('id',DT_INT,array('value'=>'0'))
			);
			$model->insert($row);								
		}
		
		
		$this->addModel($model);
	}
	

}
?>