/* Copyright (c) 2015 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
* @requires controls/ControlContainer.js 
*/

/* constructor */
function ClientPriceListClientGridCom(id,options){
	options = options || {};
	options.noInsert = false;
	options.noPrint = true;
	options.noExport = true;
	options.noEdit = true;
	options.noCopy = true;
	options.noRefresh = true;
	ClientPriceListClientGridCom.superclass.constructor.call(this,
		id,options);
		
}
extend(ClientPriceListClientGridCom,GridCommands);

ClientPriceListClientGridCom.prototype.addInsert = function(){
	var self = this;
	this.setElementById(this.getId()+"_insert",new ButtonSelectObject(uuid(),
	{"glyph":"glyphicon-plus",
	"listView":ClientPriceListList_View,
	"methodId":"get_list",
	"modelId":"ClientPriceListList_Model",
	"onSelected":function(keys,descrs){
		var contr = new ClientPriceListClient_Controller(new ServConnector(HOST_NAME));
		contr.run("insert",{
			"func":function(){
				self.m_clickContext.onRefresh();
			},
			"params":{"client_id":self.client_id,
				"price_list_id":keys["id"]}
		});
	},
	"attrs":{"title":"добавить прайс"}
	})
	);
	
}