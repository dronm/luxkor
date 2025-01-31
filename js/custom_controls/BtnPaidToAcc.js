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
function BtnPaidToAcc(options){	
	id = uuid();
	
	//options.glyph = "glyphicon-usd";
	options.caption = "ПКО (нал)";
	options.attrs = options.attrs||{};
	options.attrs.title = "Создать ПКО по оплаченным заявкам (наличный расчет)";
	
	var self = this;
	options.onClick = function(){
		self.setEnabled(false);
		
		var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
		contr.run("paid_to_acc",{
			"async":true,
			"xml":true,
			"func":function(resp){					
				var m = resp.getModelById("paid_to_acc",true);
				if (m.getNextRow()){
					window.showTempNote(m.getFieldValue("mes"), function(){
							self.setEnabled(true);
						}, ERR_MSG_WAIT_MS);						
				}
			},
			"cont":this,
			"err":function(resp,errCode,errStr){				
				self.setEnabled(true);	
				window.showTempError(errStr, null, ERR_MSG_WAIT_MS);						
			}
		});
	};		
	BtnPaidToAcc.superclass.constructor.call(this,
		id,options);
}
extend(BtnPaidToAcc,Button);
