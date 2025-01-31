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
function BtnPrintDoc(id,options){	
	options.attrs={"title":options.title};
	
	var self = this;
	options.onClick = function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			self.setEnabled(false);
			
			let contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));

			// let pm = contr.getPublicMethodById(options.methodId);
			// pm.getParamById("doc_id").setValue(keys["id"]);
			// contr.download(options.methodId, "ViewXML", 0, function(errN, errT){
			// 	self.setEnabled(true);
			// 	if(errN != 0){
			// 		throw new Error(errT);
			// 	}
			// });

			contr.run(options.checkMethodId,{
				"params":{"doc_id":keys["id"]},
				"func":function(){
					let q_params = contr.getQueryString(
						contr.getPublicMethodById(options.methodId)
					) + "&doc_id="+keys["id"];
					window.open(HOST_NAME+"index.php?"+q_params,"_blank","location=0,menubar=0,status=0,titlebar=0"); 
					self.setEnabled(true);
				},
				"err":function(resp,errCode,str){
					window.showTempError(str, function(){
							self.setEnabled(true);
						}, ERR_MSG_WAIT_MS);						
				}
			});
		}
	};	
	BtnPrintDoc.superclass.constructor.call(this,
		id,options);
}
extend(BtnPrintDoc,Button);
