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


require_once('functions/ExtProg.php');

class Payment_Controller extends ControllerSQL{
	public function __construct($dbLinkMaster=NULL){
		parent::__construct($dbLinkMaster);
			
		$pm = new PublicMethod('get_schedule');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

			
		$pm = new PublicMethod('get_def_debt_details');
		
				
	$opts=array();
					
		$pm->addParam(new FieldExtString('field_sep',$opts));
	
			
		$this->addPublicMethod($pm);

		
	}	
	
	public function get_schedule($pm){
		$client_id = $_SESSION['global_client_id'];
		if (!$client_id){
			throw new Exception("Не задан ид клиента!");
		}
		$this->addNewModel(sprintf(
		"SELECT
			(SELECT MIN(p.pay_date)
			FROM pay_schedule_list p
			WHERE p.pay_date>=now()::date
				AND p.client_id=%d
			)-now()::date AS pay_interval",
		$client_id
		),'pay_interval');
		$this->addNewModel(sprintf(
		"SELECT *
		FROM pay_schedule_list AS p
		WHERE p.pay_date>=now()::date
			AND p.client_id=%d",
		$client_id
		));
	}
	public function get_def_debt_details($pm){
		if (!$_SESSION['global_client_id']){
			throw new Exception("Не задан ид клиента!");
		}
		
		$debt_tot = $this->getDbLink()->query_first(sprintf(
		"SELECT SUM(def_debt) AS def_debt
		FROM client_debts
		WHERE client_id=%d",$_SESSION['global_client_id'])
		);
		$def_debt = (is_array($debt_tot)&&count($debt_tot))?
			$debt_tot['def_debt']:0;
		
		$this->addNewModel(sprintf(
		"SELECT * FROM client_debts_list
		WHERE client_id=%d",
		$_SESSION['global_client_id']));
		
		$this->addNewModel(sprintf(
		"SELECT
			'%s' AS banned,
			%f AS def_debt,
			(%f>0) AS def_debt_exists",
		$_SESSION['client_ship_not_allowed'],
		$def_debt,$def_debt),
		"ban_inf"
		);
	}
	

}
?>