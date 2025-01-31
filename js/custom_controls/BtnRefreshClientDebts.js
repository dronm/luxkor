/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
*/

/* constructor */
function BtnRefreshClientDebts(options){	
	var id = uuid();
	options.caption = "Обновить из 1с";
	options.attrs={"title":"Обновить долги из базы 1с"};
	options.onClick = function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			var contr = new Client_Controller(new ServConnector(HOST_NAME));
			contr.run("refresh_debts",{
				"async":true,
				"xml":true,
				"func":function(resp){					
					window.showTempNote("Данные по долгам обновлены.", function(){
							options.grid.onRefresh();
						}, ERR_MSG_WAIT_MS);											
				},
				"cont":this,
				"errControl":options.grid.getErrorControl()
			});
		}
	};		
	BtnRefreshClientDebts.superclass.constructor.call(this,
		id,options);
}
extend(BtnRefreshClientDebts,Button);
