<?php
require_once(FRAME_WORK_PATH.'basic_classes/Model.php');

class MainMenu_Model_client extends Model{
	public function dataToXML(){
		return '<model id="MainMenu_Model">
		
		<item viewId="DOCOrderList_View" descr="Заявки" default="TRUE"/>
		
		<item viewId="PaymentList_View" descr="Платежи" default=""/>
		
		<item viewId="Delivery_View" descr="Доставки" default=""/>
		
		<item viewId="RepNaspunktCost_View" descr="Стоимость доставки по нас. пунктам" default=""/>
		
		<item viewId="UserAccount_View" descr="Учетная запись" default=""/>
		
		</model>';
	}
}
?>
