/*
*/
function actbAJXAddress(options){
	console.log("function actbAJXAddress(options)")
	actbAJXAddress.superclass.constructor.call(this,options);
	
}
extend(actbAJXAddress,actbAJX);

actbAJXAddress.prototype.setObjectId = function(inputNode){
	console.log("actbAJXAddress.prototype.setObjectId")
	DOMHandler.removeClass(inputNode,"error");
}
