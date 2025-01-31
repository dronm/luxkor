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
function BtnPrintTTN(options){
	options = options||{};
	options.caption = "ТТН";
	options.title = "распечатать ТТН";
	options.methodId = "print_ttn";
	options.checkMethodId = "ext_ship_exists";
	BtnPrintTTN.superclass.constructor.call(this,
		"btn_print_ttn",options);
}
extend(BtnPrintTTN,BtnPrintDoc);