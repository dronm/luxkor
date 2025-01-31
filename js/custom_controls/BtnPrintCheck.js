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
function BtnPrintCheck(options){	
	var id = uuid();
	options.caption = "Чек";
	options.attrs={"title":"распечатать заявку"};
	options.onClick = function(){
		var keys = options.grid.getSelectedNodeKeys();
		if (keys){
			var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));
			contr.run("get_print_check",{
				"async":true,
				"xml":false,
				"params":{"doc_id":keys["id"],
					"v":"DOCOrderCheck"},
				"func":function(resp){					
					WindowPrint.show({"content":resp,"print":true});
				},
				"cont":this,
				"errControl":options.grid.getErrorControl()
			});
		}
	};	
	BtnPrintCheck.superclass.constructor.call(this,
		id,options);
}
extend(BtnPrintCheck,Button);
