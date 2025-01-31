<?php
require_once(FRAME_WORK_PATH.'basic_classes/Model.php');

class MainMenu_Model_representative extends Model{
	public function dataToXML(){
		return '<model id="MainMenu_Model">
		
		<item viewId="DOCOrderList_View" descr="Заявки" default="TRUE"/>
		
		<item viewId="DOCOrderProductionList_View" descr="Заявки в производстве" default=""/>
		
		<item viewId="ClientList_View" descr="Клиенты" default=""/>
		
		<item viewId="VehicleList_View" descr="Автомобили" default=""/>
		
		<item viewId="Delivery_View" descr="Доставки" default=""/>
		
		<item viewId="CarrierList_View" descr="Перевозчики" default=""/>
		
		<item viewId="RepClientDebts_View" descr="Долги клиентов" default=""/>
		
		<item viewId="UserAccount_View" descr="Учетная запись" default=""/>
		
		</model>';
	}
}
?>
