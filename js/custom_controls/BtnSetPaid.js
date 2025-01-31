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
function BtnSetPaid(options){	

	//options.glyph = "glyphicon-usd";
	options.methodId = "set_paid";
	options.caption = "Оплата (нал)";
	options.attrs = options.attrs||{};
	options.attrs.title="Установить признак оплаты (наличный расчет)";
	options.resultText = "Установлен признак оплаты по наличному расчету.";
	
	BtnSetPaid.superclass.constructor.call(this,
		"btn_set_paid",options);
}
extend(BtnSetPaid,BtnUpdatePaid);
