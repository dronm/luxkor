/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ô
/** Requirements
 * @requires controls/ViewList.js
*/

/* constructor */
function DOCOrderCurrentForClientList_View(id,options){
	options = options||{};
	options.state = true;
	
	DOCOrderCurrentForClientList_View.superclass.constructor.call(this,
		id,options);
}
extend(DOCOrderCurrentForClientList_View,DOCOrderCurrentList_View);