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
function BtnUpdatePaid(id,options){	
	var self = this;
	options.onClick = function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			self.setEnabled(false);
			var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
			contr.run(options.methodId,{
				"async":true,
				"xml":true,
				"params":{"doc_id":keys["id"]},
				"func":function(resp){					
					window.showTempNote(options.resultText, function(){
							self.setEnabled(true);	
							options.grid.onRefresh();
						}, ERR_MSG_WAIT_MS);											
				},
				"cont":this,
				"err":function(resp,errCode,errStr){				
					window.showTempError(errStr, function(){
							self.setEnabled(true);
						}, ERR_MSG_WAIT_MS);											
				}
			});
		}
	};		
	BtnUpdatePaid.superclass.constructor.call(this,
		id,options);
}
extend(BtnUpdatePaid,Button);
