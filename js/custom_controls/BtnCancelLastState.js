/* Copyright (c) 2014	Andrey Mikhalevich, Katren ltd.*//*		Description*///ф/** Requirements*//* constructor */function BtnCancelLastState(options){		var id = uuid();	options.caption = "Отменить 1 действие";	options.attrs={"title":"отменить последнее действие"};	options.onClick = function(){		var keys = options.grid.getSelectedNodeKeys();		if (keys){			var self = this;			WindowQuestion.show({"text":"Отменить последнее действие?",				"callBack":function(){					var contr = new DOCOrder_Controller(new ServConnector(HOST_NAME));					contr.run("cancel_last_state",{						"async":true,						"params":{"doc_id":keys["id"]},						"func":function(){												options.grid.getErrorControl().setValue("Последнее действие отменено!");							options.grid.onRefresh();						},						"cont":self,						"errControl":options.grid.getErrorControl()					});									}				});		}				};	BtnCancelLastState.superclass.constructor.call(this,		id,options);}extend(BtnCancelLastState,Button);