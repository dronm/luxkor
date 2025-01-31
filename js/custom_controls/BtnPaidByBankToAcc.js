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
function BtnPaidByBankToAcc(options){	
	id = uuid();
	
	//options.glyph = "glyphicon-piggy-bank";
	options.caption = "ПКО (карта)";
	options.attrs = options.attrs||{};
	options.attrs.title = "Создать ПКО по оплаченным заявкам (карта)";
	
	var self = this;
	options.onClick = function(){
		self.setEnabled(false);
		
		var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
		contr.run("paid_by_bank_to_acc",{
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
	BtnPaidByBankToAcc.superclass.constructor.call(this,
		id,options);
}
extend(BtnPaidByBankToAcc,Button);
