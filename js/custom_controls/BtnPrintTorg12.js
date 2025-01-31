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
function BtnPrintTorg12(options){	
	options = options||{};
	options.caption = "Торг-12";
	options.title = "распечатать Торг-12";
	options.methodId = "print_torg12";
	options.checkMethodId = "ext_ship_exists";
	BtnPrintTorg12.superclass.constructor.call(this,
		"btn_print_torg12",options);
}
extend(BtnPrintTorg12,BtnPrintDoc);