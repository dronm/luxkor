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
function BtnSetClosed(options){	
	var id = uuid();
	options.caption = "В архив";
	options.attrs={"title":"перевести заявку в статус 'закрыта' или 'выполнена'"};
	options.onClick = function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
			contr.run("set_closed",{
				"async":true,
				"xml":true,
				"params":{"doc_id":keys["id"]},
				"func":function(resp){					
					window.showTempNote("Заявка переведена в статус 'закрыта' или 'выполнена'.", function(){
							options.grid.onRefresh();
						}, ERR_MSG_WAIT_MS);								
				},
				"cont":this,
				"errControl":options.grid.getErrorControl()
			});
		}
	};		
	BtnSetClosed.superclass.constructor.call(this,
		id,options);
}
extend(BtnSetClosed,Button);
