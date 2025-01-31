/* Copyright (c) 2016 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires 
 * @requires core/extend.js  
*/

/* constructor
@param string id
@param object options{

}
*/
function DOCOrderAppend_View(id,options){
	options = options || {};	
	
	DOCOrderAppend_View.superclass.constructor.call(this,id.options);
	
	this.m_onClose = options.onClose;
	
	var controller = new DOCOrder_Controller(new ServConnector(HOST_NAME));
	var pm = controller.getPublicMethodById("get_append_list");
	pm.setParamValue("doc_id",options.doc_id);
	
	
	var head = new GridHead();
	var row = new GridRow(id+"_row1");	
	row.addElement(new GridDbHeadCell(id+"_col_doc_id",{
		"readBind":{"valueFieldId":"doc_id"},"keyCol":true,
		"visible":false
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_selected",{"value":"Выб",
		"readBind":{"valueFieldId":"selected"},
		"colAttrs":{"align":"center"},
		"colControlContainer":{"objectClass":EditCheckBox,"objectOptions":{"attrs":{"selectForJoin":"1"}}}
		}));
		
	row.addElement(new GridDbHeadCell(id+"_col_doc_number",{"value":"№",
		"readBind":{"valueFieldId":"doc_number"},"descrCol":true,
		"colAttrs":{"align":"center"}
		}));

	row.addElement(new GridDbHeadCell(id+"_col_firm_descr",{"value":"Фирма",
		"readBind":{"valueFieldId":"firm_descr"}
		}));
	row.addElement(new GridDbHeadCell(id+"_col_doc_total",{"value":"Сумма",
		"readBind":{"valueFieldId":"doc_total"},
		"colAttrs":{"align":"right"}
		}));
		
	head.addElement(row);
	
	this.m_grid = new GridDb(id+"_grid",
		{"head":head,
		"body":new GridBody(),
		"controller":controller,
		"readMethodId":"get_append_list",
		"readModelId":"DOCOrderAppendList_Model",
		"editViewClass":null,
		"editInline":true,
		"pagination":null,
		"commandPanel":null,
		"rowCommandPanelClass":null,
		"filter":null,
		"refreshInterval":0,
		"onSelect":options.onSelect,
		"winObj":options.winObj
		}
	);
	this.addElement(this.m_grid);
	
	var self = this;
	this.addElement(new ButtonCmd(id+"btnOk",		
		{"caption":"Выбрать",
		"onClick":function(){
			var n = self.m_grid.getBody().getNode();
			var list = DOMHandler.getElementsByAttr("1", n, "selectForJoin",false,"input");
			var id_list="";
			for (var i=0;i<list.length;i++){				
				if (list[i].checked){
					var row = DOMHandler.getParentByTagName(list[i],"tr");
					var keys = json2obj(row.getAttribute("key_values"));
					id_list+= (id_list=="")? "":",";
					id_list+= keys.doc_id;
				}
			}
			self.m_onClose(true,id_list);
		},
		"attrs":{
			"title":"выбрать для объединения"}
		})
	);

	this.addElement(new ButtonCmd(id+"btnCancel",		
		{"caption":"Отмена",
		"onClick":function(){
			self.m_selectRes = false;
			self.m_onClose(false);
		},
		"attrs":{
			"title":"отказаться от объединения"}
		})
	);
	
}
extend(DOCOrderAppend_View,ViewList);

/* Constants */


/* private members */

/* protected*/


/* public methods */

