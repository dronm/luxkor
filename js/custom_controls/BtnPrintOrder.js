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
function BtnPrintOrder(options){	
	options = options||{};
	options.caption = "Счет";
	options.title = "распечатать счет";
	options.methodId = "print_order";
	options.checkMethodId = "ext_order_exists";
	BtnPrintOrder.superclass.constructor.call(this,
		"btn_print_order",options);
}
extend(BtnPrintOrder,BtnPrintDoc);