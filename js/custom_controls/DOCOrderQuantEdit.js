/* Copyright (c) 2015 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
  * @requires controls/EditFloat.js
*/

/* constructor */
function DOCOrderQuantEdit(id,options){
	options = options || {};
	this.m_isInteger = false;//options.isInt || 
	this.m_precision=4;
	DOCOrderQuantEdit.superclass.constructor.call(this,id,options);
}
extend(DOCOrderQuantEdit,EditFloat);

DOCOrderQuantEdit.prototype.validate = function(val){	
	//console.log("DOCOrderQuantEdit.prototype.validate m_isInteger="+this.m_isInteger+" type="+typeof this.m_isInteger+" fals type="+typeof false);
	if (this.m_isInteger&&Math.round(val)!=val){
		this.setNotValid("Только целое значение!");
	}			
	
	return DOCOrderQuantEdit.superclass.validate.call(this,val);
}
