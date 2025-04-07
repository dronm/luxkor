<?php
class ExtProg{

	private static function parseHeaders($headers){
	    $head = array();
	    foreach( $headers as $k=>$v )
	    {
		$t = explode( ':', $v, 2 );
		if( isset( $t[1] ) )
		    $head[ trim($t[0]) ] = trim( $t[1] );
		else{
		    $head[] = $v;
		    if( preg_match( "#HTTP/[0-9\.]+\s+([0-9]+)#",$v, $out ) )
		        $head['reponse_code'] = intval($out[1]);
		        $head['reponse_descr'] = $v;
		}
	    }
	    return $head;
	}
	
	/* $fileOpts = array('name',disposition,contentType,toFile boolean)*/
	private static function send_query($cmd,$params,&$xml,$fileOpts=NULL){
		$CON_TIMEOUT = 120;//seconds
		/*
		$par_str = '';
		foreach($params as $name=>$val){
			$par_str.= '&'.$name.'='.$val;
		}
		file_put_contents('output/q_'.uniqid().'.xml',$cmd.$par_str);
		if ($cmd=="print_order"){
			file_put_contents('output/print_fileOpts',var_export($fileOpts));
		}
		*/
		/*
		$par_str = '';
		foreach($params as $name=>$val){
			$par_str.= '&'.$name.'='.$val;
		}
		throw new Exception('http://'.HOST_1C.':'.PORT_1C.'/API1c.php?cmd='.$cmd.$par_str);
		*/
		/*
		set_time_limit($CON_TIMEOUT);
		$res = @fopen('http://'.HOST_1C.':'.PORT_1C.'/API1c.php?cmd='.$cmd.$par_str,'r');
		if (!$res) {
			throw new Exception('Ошибка соединения с сервером 1с');
		}
		stream_set_timeout($res,$CON_TIMEOUT);		
		$contents = '';
		while (!feof($res)) {
		  $contents .= fread($res, 8192);
		}
		fclose($res);
		*/
		
		$params['cmd'] = $cmd;
		
		/*$par_str = '';
		foreach($params as $name=>$val){
			$par_str.= '&'.$name.'='.$val;
		}
		throw new Exception($par_str);
		*/
		$options = array(
			'http' => array(
				'method'  => 'POST',
				'header'  => array(
					'Content-type: application/x-www-form-urlencoded; charset="utf-8"'
					),
				'content' => http_build_query($params),
				'timeout' => $CON_TIMEOUT
			)
		);
		$context = stream_context_create($options);
		$contents = file_get_contents('http://'.HOST_1C.':'.PORT_1C.'/API1c.php', FALSE, $context);
		
		$header_res = self::parseHeaders($http_response_header);
		if ($header_res['reponse_code'] && $header_res['reponse_code']!=200){
			throw new Exception($header_res['reponse_descr']);
		}
		
		//ответ всегда в ANSI
		//file_put_contents('output/cont_'.uniqid().'.xml',$contents);		
		if (!is_null($fileOpts) && is_array($fileOpts)){
			if (!array_key_exists('name',$fileOpts)){
				$fileOpts['name'] = uniqid().'.pdf';
			}
		
			if (array_key_exists('toFile',$fileOpts) && $fileOpts['toFile']==TRUE){
				file_put_contents(OUTPUT_PATH.$fileOpts['name'],$contents);
				return OUTPUT_PATH.$fileOpts['name'];
			}else{
				//inline file view
				if(strlen($contents) < 500){
					$contents = @iconv('Windows-1251','UTF-8',$contents);
					try{
						$xml = new SimpleXMLElement($contents);
					}catch(Exception $e){
					}
					if ($xml['status']=='false'){
						$err = (string) $xml->error;
						throw new Exception($err);
					}							
				}
				if (!array_key_exists('contentType',$fileOpts)){
					$p = strpos($fileOpts['name'],'.');
					if ($p !== FALSE){
						$ext = substr($fileOpts['name'],$p+1);
						if (in_array($ext,array('zip','pdf','xls'))){
							$fileOpts['contentType'] = 'application/'.$ext;
						}
					}
					if (!array_key_exists('contentType',$fileOpts)){
						$fileOpts['contentType'] = 'application/octet-stream';
					}
				}
				if (!array_key_exists('disposition',$fileOpts)){
					$fileOpts['disposition'] = 'attachment';
				}
				ob_clean();//attachment
				header("Content-type: ".$fileOpts['contentType']);
				header("Content-Disposition: ".$fileOpts['disposition']."; filename=\"".$fileOpts['name']."\"");		
				// header("Content-length: ".strlen($contents)); //otherwise on error partial file with wrong lengh is delivered
				header("Cache-control: private");
				echo $contents;
			}			
		}
		else if (!strlen($contents)){
			throw new Exception('Нет доступа к серверу 1с!');
		}
		else{
			//file_put_contents('output/cont_'.uniqid().'.xml',$contents);		
			//throw new Exception("ОШИБКА!!!=".$contents);//$contents
			$contents = @iconv('Windows-1251','UTF-8',$contents);
			try{
				$xml = new SimpleXMLElement($contents);
			}catch(Exception $e){
				throw new Exception('Ошибка парсинга ответа 1с:'.$e->getMessage().' Строка: '.$contents);
			}
			
			if ($xml['status']=='false'){
				$err = (string) $xml->error;
				if(substr($err, 0, 5) != "Failed"){
					$contents = @iconv('Windows-1251','UTF-8',$contents);
				}
				throw new Exception($err);
			}							
		}		
	}


	public static function getClientRefOnINN($inn){
		$xml=null;
		ExtProg::send_query('get_client_on_inn',array('inn'=>$inn),$xml);
		return (string) $xml->ref[0];
	}
	public static function getFirmRefOnName($name){
		$xml=null;
		ExtProg::send_query('get_firm_on_name',array('name'=>$name),$xml);
		return (string) $xml->ref[0];
	}
	
	private static function set_person_attrs($xml,&$res=NULL){
		if (is_array($res)){
			$res['drive_perm'] = isset($xml->drive_perm)? (string) $xml->drive_perm[0]:null;
			$res['plate'] = isset($xml->plate)? (string) $xml->plate[0]:null;
			$res['trailer_plate'] = isset($xml->trailer_plate)? (string) $xml->trailer_plate[0]:null;
			$res['model'] = isset($xml->model)? (string) $xml->model[0]:null;
			$res['carrier_ref'] = isset($xml->carrier_ref)? (string) $xml->carrier_ref[0]:null;
			$res['carrier_descr'] = '';
		}	
	}	
	
	public static function getPersonRefOnName($name,&$res=NULL){
		$xml=null;
		ExtProg::send_query('get_person_on_name',array('name'=>$name),$xml);
		
		ExtProg::set_person_attrs($xml,$res);
		
		return (string) $xml->ref[0];
	}	
	public static function getPersonRefCreate($params,&$res=NULL){

		$xml=null;
		ExtProg::send_query('get_person_create',array('params'=>serialize($params)),$xml);		
		ExtProg::set_person_attrs($xml,$res);
		
		return (string) $xml->ref[0];
	}	
	
	public static function getDriverAttrs($ref,&$res){
		$xml=null;
		ExtProg::send_query('get_driver_attrs',array('driver_ref'=>$ref),$xml);		
		ExtProg::set_person_attrs($xml,$res);
	}
	
	public static function getUserRefOnName($name){
		$xml=null;
		ExtProg::send_query('get_user_on_name',array('name'=>$name),$xml);
		return (string) $xml->ref[0];
	}	
	public static function getProductGroupRefOnName($name){
		$xml=null;
		ExtProg::send_query('get_product_group_on_name',array('name'=>$name),$xml);
		return (string) $xml->ref[0];
	}	
	
	public static function getClientActivityRefOnName($name){
		$xml=null;
		ExtProg::send_query('get_client_activity_on_name',array('name'=>$name),$xml);
		return (string) $xml->ref[0];
	}	
	
	public static function getWarehouseRefOnName($name){
		$xml=null;
		ExtProg::send_query('get_warehouse_on_name',array('name'=>$name),$xml);
		return (string) $xml->ref[0];
	}	
	public static function getMeasureRefOnName($name,&$res){
		$xml=null;
		ExtProg::send_query('get_measure_on_name',array('name'=>$name),$xml);
		$res['ext_ref'] = (string) $xml->ref[0];
		$res['name_full'] = (string) $xml->name_full[0];
	}	
	
	public static function addClient($struc){
		$xml=null;
		ExtProg::send_query('add_client',$struc,$xml);
		return (string) $xml->ref[0];
	}	
	public static function completeClient($pattern,&$struc){
		$xml=null;
		ExtProg::send_query('complete_client',array('templ'=>$pattern),$xml);
		foreach($xml->ref as $ref){
			$struc[(string) $ref[0]]=$ref['name'];
		}
	}

	public static function completeProduct($pattern,&$struct){
		ExtProg::send_query('complete_product',array('templ'=>$pattern, 'count'=>10),$struct);
	}

	public static function createProductForLuxkor($params, &$struct){
		ExtProg::send_query('create_product_for_luxkor', $params, $struct);
	}

	public static function getClientContractList($firmExtId,$clientExtId,&$xml){
		ExtProg::send_query(
			'get_client_contract_list',
			array(
				'firm_ext_id'=>$firmExtId,
				'client_ext_id'=>$clientExtId
			),
			$xml
		);
	}
	public static function getFirmBankAccountList($firmExtId,&$xml){
		ExtProg::send_query(
			'get_firm_bank_account_list',
			array(
				'firm_ext_id'=>$firmExtId
			),
			$xml
		);
	}
	
	public static function completeUser($pattern,&$struc){
		$xml=null;
		ExtProg::send_query('complete_user',array('templ'=>$pattern),$xml);
		foreach($xml->ref as $ref){
			$struc[(string) $ref[0]]=$ref['name'];
		}
	}
	
	public static function getClientAttrsOnName($name,&$struc){
		$xml=null;
		ExtProg::send_query('get_client_attrs_on_name',array('name'=>$name),$xml);
		$i=0;
		
		$struc['found'] = 0;
		if ($xml->attrs){
			foreach ($xml->attrs->children() as $attr=>$data) {
				if ($i==0){
					$struc['found'] = 1;
				}
				$struc[$attr]=$data;
				$i++;
			}
		}
	}
	public static function getDebtList(&$res){
		$xml=null;
		ExtProg::send_query('get_debt_list',array(),$xml);
		foreach ($xml->rec as $rec){
			array_push($res,array(
				'firmRef'=>(string) $rec->firmRef,
				'clientRef'=>(string)$rec->clientRef,
				'debt'=>(float) $rec->debt
			));
		}
	}
	
	public static function firm_data($firmRef){
		$xml=null;
		ExtProg::send_query('firm_data',array('firm_ref'=>$firmRef),$xml);
		return (string) $xml->org_data;
	}	
	
	public static function sale($head,$items,&$res){
		$xml=null;
		ExtProg::send_query('sale',
			array('head'=>serialize($head),
			'items'=>serialize($items)
			),
			$xml);
		$res['naklRef'] = $xml->naklRef;
		$res['naklNum'] = $xml->naklNum;
		$res['invRef'] = $xml->invRef;
		$res['invNum'] = $xml->invNum;
	}
	
	public static function order($head,$items,&$res){
		$xml=null;
		ExtProg::send_query('order',
			array('head'=>serialize($head),
			'items'=>serialize($items)
			),
			$xml
		);
		$res['orderRef'] = $xml->orderRef;
		$res['orderNum'] = $xml->orderNum;
	}
	public static function print_order($ref,$userExtRef,$stamp=0,$fileOpts=NULL){
		$xml=null;
		return (ExtProg::send_query('print_order',
			array('doc_ref'=>$ref,
				'stamp'=>$stamp,
				'user_ref'=>$userExtRef),
			$xml,$fileOpts)
		);
	}	
	public static function print_torg12($ref,$userExtRef='',$stamp=0,$fileOpts=NULL){
		$xml=null;
		return (ExtProg::send_query('print_torg12',
			array('doc_ref'=>$ref,
				'stamp'=>$stamp,
				'user_ref'=>$userExtRef),
			$xml,$fileOpts)
		);
	}	
	public static function print_invoice($ref,$userExtRef='',$fileOpts=NULL){
		$xml=null;
		return (ExtProg::send_query('print_invoice',
			array('doc_ref'=>$ref,
				'user_ref'=>$userExtRef
			),$xml,$fileOpts)
		);
	}	
	public static function print_upd($ref,$userExtRef='',$stamp=0,$fileOpts=NULL){
		$xml=null;
		return ExtProg::send_query('print_upd',
			array('doc_ref'=>$ref,
				'user_ref'=>$userExtRef,
				'stamp'=>$stamp),
			$xml,$fileOpts);
	}		
	public static function del_docs($ext_order_id,$ext_ship_id){
		$xml=null;
		return (ExtProg::send_query('del_docs',
			array('ext_order_id'=>$ext_order_id,
				'ext_ship_id'=>ext_ship_id
				),
			$xml
		));
	}		
	
	public static function print_shipment($ref,$head,$userExtRef='',$stamp=0,$fileOpts=NULL){
		$xml=null;
		return (ExtProg::send_query('print_shipment',
			array('doc_ref'=>$ref,
				'head'=>serialize($head),
				'user_ref'=>$userExtRef,
				'stamp'=>$stamp),
			$xml,$fileOpts));
	}			
	public static function print_ttn($ref,$head,$userExtRef='',$stamp=0,$fileOpts=NULL){
		$xml=null;
		return (ExtProg::send_query('print_ttn',
			array('doc_ref'=>$ref,
				'head'=>serialize($head),
				'user_ref'=>$userExtRef,
				'stamp'=>$stamp),
			$xml,$fileOpts));
	}			
	public static function print_balance($from,$to,$clientRef,$firmRef,$userExtRef='',$fileType=NULL,$fileOpts=NULL){
		$xml=null;
		return (ExtProg::send_query('print_balance',
			array(
				'to'=>$to,
				'from'=>$from,
				'firm_ref'=>$firmRef,
				'client_ref'=>$clientRef,
				'user_ref'=>$userExtRef,
				'file_type'=>$fileType
			),$xml,$fileOpts)
		);
	}	
	public static function paid_to_acc($firm_totals,$pkoType){
		$xml=null;
		ExtProg::send_query('paid_to_acc',
			array('head'=>serialize($firm_totals),'pkoType'=>$pkoType),
			$xml);
	}			
	
	
	public static function set_deliv_expenses(&$head){
		$xml=null;
		ExtProg::send_query('set_deliv_expenses',array('head'=>serialize($head)),$xml);
	
	}
	public static function getProdBatchList($productList, $pattern, &$xml){
		ExtProg::send_query(
			'get_prod_batch_list',
			array(
				'product_list'=> serialize($productList),
				'pattern' => $pattern
			),
			$xml
		);
	}
}
?>
