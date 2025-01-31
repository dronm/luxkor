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
function BtnPrintPassport(options){	
	options = options||{};
	options.caption = "Паспорта";
	options.title = "распечатать паспорт качества";
	options.methodId = "print_passport";
	options.checkMethodId = "ext_ship_exists";
	BtnPrintPassport.superclass.constructor.call(this,
		"btn_print_passport",options);
}
extend(BtnPrintPassport,BtnPrintDoc);