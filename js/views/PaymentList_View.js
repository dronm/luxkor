/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function PaymentList_View(id,options){
	options = options || {};
	//options.title = "Платежи";
	PaymentList_View.superclass.constructor.call(this,
		id,options);

	if (SERV_VARS.CLIENT_PAYMENT_TYPE=="with_delay"){
		//Отсрочка платежа
		//График платежей
		this.addElement(new PaySchedule_View("PaySchedule_View"));	
		//Просроченная задолженность
		this.addElement(new PayDefDebt_View("PayDefDebt_View"));	
	
	}
	else{
		//НАЛ+Предоплата
		//Оплата счетов
		this.addElement(new PayOrderList_View("PayOrderList_View"));	
	}
	
	//Акт сверки
	this.addElement(new RepClientBalance_View("RepClientBalance_View"));
}
extend(PaymentList_View,ViewList);
