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
function BtnPrintUPD(options){	
	options = options||{};
	options.caption = "УПД";
	options.title = "распечатать УПД";
	options.methodId = "print_upd";
	options.checkMethodId = "ext_ship_exists";
	BtnPrintUPD.superclass.constructor.call(this,
		"btn_print_upd",options);
}
extend(BtnPrintUPD,BtnPrintDoc);