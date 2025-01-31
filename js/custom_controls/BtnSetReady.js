/* Copyright (c) 2014
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
*/

/* constructor */
function BtnSetReady(options){	
	var id = uuid();
	options.caption = "Готова";
	options.attrs={"title":"перевести заявку в статус 'выполнена'"};
	options.onClick = function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
			contr.run("set_ready",{
				"async":true,
				"xml":true,
				"params":{"doc_id":keys["id"]},
				"func":function(resp){					
					window.showTempNote("Заявка переведена в статус 'выполнена'.", function(){
							options.grid.onRefresh();
						}, ERR_MSG_WAIT_MS);								
				},
				"cont":this,
				"errControl":options.grid.getErrorControl()
			});
		}
	};		
	BtnSetReady.superclass.constructor.call(this,
		id,options);
}
extend(BtnSetReady,Button);

