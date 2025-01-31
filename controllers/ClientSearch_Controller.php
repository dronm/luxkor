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



require_once('common/ClientSearch.php');

class ClientSearch_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL,$dbLink=NULL){
		parent::__construct($dbLinkMaster,$dbLink);
			
		$pm = new PublicMethod('search');
		
				
	$opts=array();
	
		$opts['length']=250;
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('query',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('checkIfExists',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('client_id',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	public function applySocrBase($str,$socrBase){
		return (isset($socrBase[$str])? $socrBase[$str] : NULL);
	}

	public function strSocr($str,$socrBase){
		$res = '';
                $p = mb_strpos($str,' ',NULL,'UTF-8');
                if($p!==FALSE){
                        $str_to_socr = mb_substr($str,0,$p,'UTF-8');
                        if (mb_substr(mb_strtoupper($str_to_socr,'UTF-8'),0,7,'UTF-8')=='АВТОНОМ'){
                        	//2 words
                        	$p = mb_strpos($str,' ',$p+1,'UTF-8');
                        	if($p!==FALSE){
                        		$str_to_socr = mb_substr($str,0,$p,'UTF-8');
                        	}
                        }
                        $str_socr = $this->applySocrBase(mb_strtoupper($str_to_socr,'UTF-8'),$socrBase);
                        $res = (!is_null($str_socr)? mb_substr($str,$p+1,NULL,'UTF-8').' '.$str_socr : $str);
                }
                else{
                        $res = $str;
                }

		return $res;
	}

	public function search($pm){
		$params = new ParamsSQL($pm,$this->getDbLink());
		$params->addAll();
		
		if($params->getVal("checkIfExists")==1){
			$client_id = $params->getVal("client_id");
			$ar = $this->getDbLink()->query_first(sprintf("SELECT id,name FROM clients WHERE inn=%s",$params->getDbVal("query")));	
			if (is_array($ar) && count($ar) && ($client_id=='null' || $client_id!=$ar['id']) ){			
				throw new Exception('Уже есть клиент с таким ИНН: '.$ar['name']);
			}
		}
		
		$ar = $this->getDbLink()->query_first(sprintf("SELECT data FROM client_search_data WHERE inn=%s",$params->getDbVal("query")));
		if (is_array($ar) && count($ar)){
			$resp = $ar['data'];
		}
		else{
			$resp = ClientSearch::search($params->getVal("query"));
			if($resp==''){
				throw new Exception('Клиент не найден!');
			}
			//
			$this->getDbLinkMaster()->query(sprintf(
			"INSERT INTO client_search_data (inn,user_id,data) VALUES (%s,%d,'%s')",
			$params->getDbVal("query"),
			$_SESSION['user_id'],
			$resp
			));
		}
		$this->getDbLinkMaster()->query(sprintf(
		"INSERT INTO client_search_hits (user_id) VALUES (%d)",
		$_SESSION['user_id']
		));
		
		$json = json_decode($resp);
		$model = new Model(array('id'=>'SearchResult_Model'));		
		/*
		$row = array(
			new Field('name',DT_STRING,array('value'=>$json->suggestions[0]->value)),
			new Field('dirname',DT_STRING,array('value'=>$json->suggestions[0]->data->management->name)),
			new Field('dirpost',DT_STRING,array('value'=>$json->suggestions[0]->data->management->post)),
			new Field('inn',DT_STRING,array('value'=>$json->suggestions[0]->data->inn)),
			new Field('kpp',DT_STRING,array('value'=>$json->suggestions[0]->data->kpp)),
			new Field('ogrn',DT_STRING,array('value'=>$json->suggestions[0]->data->ogrn)),
			new Field('okpo',DT_STRING,array('value'=>$json->suggestions[0]->data->okpo)),
			new Field('okved',DT_STRING,array('value'=>$json->suggestions[0]->data->okved)),
			new Field('status',DT_STRING,array('value'=>$json->suggestions[0]->data->state->registration_date)),
			new Field('address',DT_STRING,array('value'=>$json->suggestions[0]->data->address->value))
		);
		*/
		$row = array(
			new Field('param',DT_STRING,array('value'=>'Наименование')),
			new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->value))
		);
		$model->insert($row);					
		
		$row = array(
			new Field('param',DT_STRING,array('value'=>'НаименованиеКраткое')),
			new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->name->short))
		);
		$model->insert($row);					
		
		//
		if ($json->suggestions[0]->data){
			if ($json->suggestions[0]->data->management){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'ФИО руководителя')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->management->name))
				);
				$model->insert($row);					
				//
				$row = array(
					new Field('param',DT_STRING,array('value'=>'Должность руководителя')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->management->post))
				);
				$model->insert($row);					
			}			
			//
			if ($json->suggestions[0]->data->inn){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'ИНН')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->inn))
				);
				$model->insert($row);					
			}
			//
			if ($json->suggestions[0]->data->kpp){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'КПП')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->kpp))
				);
				$model->insert($row);					
			}
			//
			if ($json->suggestions[0]->data->ogrn){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'ОГРН')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->ogrn))
				);
				$model->insert($row);					
			}
			//
			if ($json->suggestions[0]->data->okpo){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'ОКПО')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->okpo))
				);
				$model->insert($row);					
			}
			//
			if ($json->suggestions[0]->data->okved){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'ОКВЭД')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->okved))
				);
				$model->insert($row);					
			}
			//
			/*
			if ($json->suggestions[0]->data->state && $json->suggestions[0]->data->state->registration_date){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'Дата регистрации')),
					new Field('val',DT_STRING,array('value'=>date('Y-m-d',$json->suggestions[0]->data->state->registration_date)))
				);
				$model->insert($row);					
			}
			*/
			//
			if (isset($json->suggestions[0]->data->address)
			&& isset($json->suggestions[0]->data->address->data)
			&& isset($json->suggestions[0]->data->address->data->source)
			&& file_exists($socr_ar_file = 'functions/socrbase.srz')
			){
				$socrBase = unserialize(file_get_contents($socr_ar_file));
				$addr = 'РОССИЯ,'.
				(is_null($json->suggestions[0]->data->address->data->postal_code)? '':$json->suggestions[0]->data->address->data->postal_code).','.
				(is_null($json->suggestions[0]->data->address->data->region)? '':$this->strSocr($json->suggestions[0]->data->address->data->region_type_full.' '.$json->suggestions[0]->data->address->data->region,$socrBase)).','.
				(is_null($json->suggestions[0]->data->address->data->area)? '':$this->strSocr($json->suggestions[0]->data->address->data->area_type_full.' '.$json->suggestions[0]->data->address->data->area,$socrBase)).','.
				(is_null($json->suggestions[0]->data->address->data->city)? '':$this->strSocr($json->suggestions[0]->data->address->data->city_type_full.' '.$json->suggestions[0]->data->address->data->city,$socrBase)).','.
				(is_null($json->suggestions[0]->data->address->data->settlement)? '':$this->strSocr($json->suggestions[0]->data->address->data->settlement_type_full.' '.$json->suggestions[0]->data->address->data->settlement,$socrBase)).','.

				(is_null($json->suggestions[0]->data->address->data->street)? '':$this->strSocr($json->suggestions[0]->data->address->data->street_type_full.' '.$json->suggestions[0]->data->address->data->street,$socrBase)).','.

				(is_null($json->suggestions[0]->data->address->data->house)? '':($json->suggestions[0]->data->address->data->house_type_full.' '.$json->suggestions[0]->data->address->data->house)).','.

				(is_null($json->suggestions[0]->data->address->data->block)? '':($json->suggestions[0]->data->address->data->block_type_full.' '.$json->suggestions[0]->data->address->data->block)).','.

				(is_null($json->suggestions[0]->data->address->data->flat)? '':($json->suggestions[0]->data->address->data->flat_type_full.' '.$json->suggestions[0]->data->address->data->flat))

								        ;
				$row = array(
					new Field('param',DT_STRING,array('value'=>'Адрес')),
					new Field('val',DT_STRING,array('value'=>$addr))
				);
				$model->insert($row);					
			
			}
			else if (
			isset($json->suggestions[0]->data->address)
			&& isset($json->suggestions[0]->data->address->value)){
				$row = array(
					new Field('param',DT_STRING,array('value'=>'Адрес')),
					new Field('val',DT_STRING,array('value'=>$json->suggestions[0]->data->address->value))
				);
				$model->insert($row);					
			}
		}				
		$this->addModel($model);
	}


}
?>