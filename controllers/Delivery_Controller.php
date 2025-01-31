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
require_once(FRAME_WORK_PATH.'basic_classes/CondParamsSQL.php');

class Delivery_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			
		$pm = new PublicMethod('unassigned_orders_list');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_fields',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_vals',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_sgns',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_ic',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('all_orders',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('assigned_orders_list');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('cond_fields',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('cond_vals',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('cond_sgns',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_ic',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('assigned_orders_for_client');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('cond_fields',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('cond_vals',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtString('cond_sgns',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_ic',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('add_extra_vehicle');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtDate('date',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('vehicle_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('extra_veh_select_list');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtDate('date',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_fields',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_vals',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_sgns',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('cond_ic',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('from',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtInt('count',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('ord_fields',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('ord_directs',$opts));
	
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('delete_extra_vehicle');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtDate('date',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('vehicle_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('current_position_all');
		
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('current_position_client');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtDate('date',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_order_descr');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('doc_id',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('assign_order_to_vehicle');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('order_id',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('vehicle_id',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('hour_id',$opts));
	
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtDate('date',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('remove_order');
		
				
	$opts=array();
	
		$opts['required']=TRUE;				
		$pm->addParam(new FieldExtInt('order_id',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	

	public function unassigned_orders_list($pm){
		if ($_SESSION['role_id']=='client'){
			throw new Exception("Forbidden!");
		}
		
		$m = new UnassignedOrderList_Model($this->getDbLink());
		
		$where = $this->conditionFromParams($pm,$m);
				
		$m->select(FALSE,
			$where,
			NULL,
			NULL,
			NULL,
			NULL,
			NULL,
			NULL,
			TRUE);
		$this->addModel($m);
		
	}
	
	public function assigned_orders_list($pm){
		if ($_SESSION['role_id']=='client'){
			$client_id = $_SESSION['client_id'];
		}
		else{
			$client_id = 0;
		}
	
		//periods
		$this->addNewModel(
			"SELECT
				id,
				h_from,h_to,
				h_from::text||'-'||h_to::text AS name
			FROM delivery_hours
			ORDER BY h_from",
		'periods');
		
		//orders
		$cond = new CondParamsSQL($pm,$this->getDbLink());
		$this->addNewModel(sprintf(
		"SELECT * FROM deliv_assigned_orders_list(%s,%d)",
		$cond->getValForDb('delivery_plan_date','le',DT_DATE),$client_id),
		'assigned_orders_list'
		);
	}	
	private function veh_employed($vehId){
		$ar = $this->getDbLink()->query_first(sprintf(
		"SELECT employed FROM vehicles
		WHERE id=%d",$vehId));
		if (!is_array($ar)||!count($ar)){
			throw new Exception("ТС не найдено!");
		}
		return ($ar['employed']=='t');
	}
	public function add_extra_vehicle($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
		$vehicle_id = $p->getParamById('vehicle_id');
		
		if ($this->veh_employed($vehicle_id)){
			$this->getDbLinkMaster()->query(sprintf(
			"DELETE FROM delivery_deleted_vehicles
			WHERE vehicle_id=%d AND date=%s",
				$vehicle_id,
				$p->getParamById('date')
				)
			);		
		}
		else{
			$this->getDbLinkMaster()->query(sprintf(
			"INSERT INTO delivery_extra_vehicles
			(vehicle_id,date) VALUES(%d,%s)",
				$vehicle_id,
				$p->getParamById('date')
				)
			);
		}
	}	
	public function delete_extra_vehicle($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
		
		$vehicle_id = $p->getParamById('vehicle_id');
		
		if ($this->veh_employed($vehicle_id)){
			$ar = $this->getDbLink()->query_first(sprintf(
			"SELECT 1 FROM delivery_deleted_vehicles
			WHERE vehicle_id=%d AND date=%s",
				$vehicle_id,
				$p->getParamById('date')
				));
			if (!is_array($ar)||!count($ar)){
				$this->getDbLinkMaster()->query(sprintf(
				"INSERT INTO delivery_deleted_vehicles
				(vehicle_id,date) VALUES(%d,%s)",
					$vehicle_id,
					$p->getParamById('date')
					)
				);					
			}
		}
		else{
			$this->getDbLinkMaster()->query(sprintf(
			"DELETE FROM delivery_extra_vehicles
			WHERE vehicle_id=%d AND date=%s",
				$vehicle_id,
				$p->getParamById('date')
				)
			);	
		}
	}	
	public function current_position_client($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		$this->addNewModel(sprintf(
		"SELECT
			id,
			plate,
			model,
			vol,
			load_weight_t,
			tr_data[1] AS period,
			tr_data[2] AS period_str,
			tr_data[3] AS lon_str,
			tr_data[4] AS lat_str,
			tr_data[5] AS speed,
			tr_data[6] ns,
			tr_data[7] ew,
			tr_data[8] recieved_dt,
			tr_data[9] AS recieved_dt_str,
			tr_data[10] odometer,
			tr_data[11] AS engine_on_str,
			tr_data[12] voltage,
			tr_data[13] AS heading_str,
			tr_data[14] heading,
			tr_data[15] lon,
			tr_data[16] lat
		FROM deliv_current_pos_client(%d,now()::date)",
			$_SESSION['client_id']			
		),'current_position_all');			
		//$p->getParamById('date')
	}			
	public function current_position_all($pm){
		$this->addNewModel(
		"SELECT
			id,
			plate,
			model,
			vol,
			load_weight_t,
			tr_data[1] AS period,
			tr_data[2] AS period_str,
			tr_data[3] AS lon_str,
			tr_data[4] AS lat_str,
			tr_data[5] AS speed,
			tr_data[6] ns,
			tr_data[7] ew,
			tr_data[8] recieved_dt,
			tr_data[9] AS recieved_dt_str,
			tr_data[10] odometer,
			tr_data[11] AS engine_on_str,
			tr_data[12] voltage,
			tr_data[13] AS heading_str,
			tr_data[14] heading,
			tr_data[15] lon,
			tr_data[16] lat
		FROM deliv_current_pos_all",
		'current_position_all');			
	}			
	
	public function extra_veh_select_list($pm){
		/* все НЕ постоянные и не добавленные на сегодня + 
		 * все постоянные удаленные на сегодня
		 * может быть фильтр по водителю!!!
		 */
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
		
		$db_date = $p->getParamById('date');
		
		$model = new VehicleList_Model($this->getDbLink());
		$where = $this->conditionFromParams($pm,$model);
		$where_q = ($where)? ($where->getSQL().' AND '):'WHERE ';		
		$q = sprintf(
			"(SELECT *
			FROM vehicles_list AS v
			%s
				(v.employed IS NULL OR v.employed=FALSE)
				AND
				v.id NOT IN (
				SELECT ext.vehicle_id FROM delivery_extra_vehicles AS ext
				WHERE ext.date=%s
				)			
			)
			UNION ALL

			(SELECT *
			FROM vehicles_list AS v
			%s
				v.employed
				AND
				v.id IN (
				SELECT ext.vehicle_id FROM delivery_deleted_vehicles AS ext
				WHERE ext.date=%s
				)
			)",
			$where_q,
			$db_date,
			$where_q,
			$db_date
		);
		//throw new Exception($q);
		$this->addNewModel($q,'extra_veh_select_list');		
	}
	
	public function get_order_descr($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		$this->addNewModel(sprintf(
		"SELECT
			o.id,
			o.number,
			cl.name AS client_descr,
			pct.name||', '||w.name AS warehouse_descr,
			d.address AS client_dest_descr,
			o.product_str,
			o.total_volume,
			o.total_weight
		FROM doc_orders AS o
		LEFT JOIN clients AS cl ON cl.id=o.client_id
		LEFT JOIN warehouses AS w ON w.id=o.warehouse_id
		LEFT JOIN production_cities AS pct ON pct.id=w.production_city_id
		LEFT JOIN client_destinations_list AS d ON d.id=o.deliv_destination_id
		WHERE o.id=%d",
		$p->getParamById('doc_id')
		),'get_order_descr');
	}
	public function assign_order_to_vehicle($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		/**
		 * SMS принимающему об изменении времени
		 * создадим список с существующими интервалами
		 * doc_ordr_id
		 * period_id
		 * если что то поменяется - отправить SMS
		 */
		$link = $this->getDbLink();
		$q_id = $link->query(sprintf(
		"SELECT
			t.doc_order_id,
			t.delivery_hour_id
		FROM deliveries t
		WHERE t.deliv_date=%s",
		$p->getParamById('date')
		));
		
		//SQL для проверки
		$q_ch = '';
		$i = 0;
		$docs = array();
		while ($ar=$link->fetch_array($q_id)){
			$i++;
			$q_ch.= ($q_ch=='')? '':',';
			$q_ch.= sprintf("(SELECT TRUE
			FROM deliveries tmp
			WHERE tmp.doc_order_id=%d
				AND tmp.delivery_hour_id=%d
				AND tmp.deliv_date=%s) AS doc_%d",
			$ar['doc_order_id'],
			$ar['delivery_hour_id'],
			$p->getParamById('date'),
			$ar['doc_order_id']
			);
			$docs[$ar['doc_order_id']] = $ar['delivery_hour_id'];
		}
		
		
		$this->getDbLinkMaster()->query(sprintf(
		"SELECT deliv_assign_order_to_vehicle(%d,%d,%d,%s::date)",
		$p->getParamById('order_id'),
		$p->getParamById('vehicle_id'),
		$p->getParamById('hour_id'),
		$p->getParamById('date')
		));
		
		//проверка изменений
		$docs_s = '';
		if (strlen($q_ch)){
			$ar = $link->query_first("SELECT ".$q_ch);
			foreach($docs as $doc_id=>$h_id){
				if ($ar['doc_'.$doc_id]!='t'){
					//время поменялось
					$docs_s.=($docs_s=='')? '':',';
					$docs_s.=$doc_id;
				}
			}
		}
		if (strlen($docs_s)){
			$q_id = $link->query(
			"INSERT INTO sms_for_sending
			(tel,body,sms_type)
				(SELECT
					t.cel_phone,
					t.message,
					'client_change_time'::sms_types
				FROM sms_client_change_time t
				WHERE t.doc_order_id IN (".$docs_s.")
				)"
			);
		}
	}
	public function remove_order($pm){
		$p = new ParamsSQL($pm,$this->getDbLink());
		$p->addAll();
	
		$link = $this->getDbLinkMaster();
		$link->query('BEGIN');
		try{		
			$link->query(sprintf(
			"DELETE FROM deliveries
			WHERE doc_order_id=%d",
			$p->getParamById('order_id')
			));
			
			$link->query(sprintf(
			"UPDATE doc_orders
			SET vehicle_id=NULL
			WHERE id=%d",
			$p->getParamById('order_id')
			));
			$link->query('COMMIT');
		}
		catch(Exception $e){
			$link->query('ROLLBACK');
			throw $e;
		}			
	}
	public function assigned_orders_for_client($pm){
		$client_id = $_SESSION['client_id'];
		if (!$client_id){
			throw new Exception("Forbidden!");
		}
	
		//orders
		$cond = new CondParamsSQL($pm,$this->getDbLink());
		$this->addNewModel(sprintf(
		"SELECT * FROM deliv_assigned_orders_for_client t
		WHERE t.deliv_date BETWEEN %s AND %s
		AND t.client_id=%d",
		$cond->getValForDb('delivery_plan_date','ge',DT_DATE),
		$cond->getValForDb('delivery_plan_date','le',DT_DATE),
		$client_id),
		'assigned_orders_for_client'
		);
	}	
	

}
?>