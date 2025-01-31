/* Copyright (c) 2015
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
*/

/* constructor */
function BtnSetNotPaid(options){	

	options.methodId = "set_not_paid";
	options.caption = "Отменить оплату";
	options.attrs = options.attrs||{};
	options.attrs.title="Отменить оплату";
	options.resultText = "Отменена оплата по любому виды расчетов";
	BtnSetNotPaid.superclass.constructor.call(this,
		"btn_set_not_paid",options);
}
extend(BtnSetNotPaid,BtnUpdatePaid);
