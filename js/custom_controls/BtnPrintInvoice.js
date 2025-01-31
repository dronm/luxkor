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
function BtnPrintInvoice(options){	
	options = options||{};
	options.caption = "Счет-фактура";
	options.title = "распечатать счет-фактуру";
	options.methodId = "print_invoice";
	options.checkMethodId = "ext_invoice_exists";
	BtnPrintInvoice.superclass.constructor.call(this,
		"btn_print_invoice",options);
}
extend(BtnPrintInvoice,BtnPrintDoc);