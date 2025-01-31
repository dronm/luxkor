/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements 
 * @requires common/DOMHandler.js
*/
/* constructor */
function ClientAttrs(attrs,formContext){
	attrs["name"] = new EditString("Client_name",
		{"labelCaption":"Наименование:","name":"name",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":150,"size":70,"required":"required"}}
	);
	attrs["inn"] = new EditNum("Client_inn",
		{"labelCaption":"ИНН:",
		"name":"inn",
		"buttonSelect":new ButtonOrgSearch("Client_inn_btn_sel",
			{"viewContext":formContext,
			"checkIfExists":"1"
		}),
		"buttonClear":false,
		"tableLayout":false,
		"minLength":10,
		"attrs":{"maxlength":12,"size":20,"required":"required"}}
	);
	attrs["kpp"] = new EditNum("Client_kpp",
		{"labelCaption":"КПП:","name":"kpp","buttonSelect":false,
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":10,"size":20}}
	);	
	attrs["addr_reg"] = new EditString("Client_addr_reg",
		{"labelCaption":"Адрес юридический:","name":"addr_reg",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"size":70,"required":"required"}}),
		
	attrs["addr_mail_same_as_reg"] = new EditCheckBox("Client_addr_mail_same_as_reg",
		{"labelCaption":"Фактический адрес совпадает с юридическим",
		"name":"addr_mail_same_as_reg",
		"labelAlign":"left",
		"tableLayout":false,
		"attrs":{"checked":"checked"}});
		
	attrs["addr_mail"] = new EditString("Client_addr_mail",
		{"labelCaption":"Адрес фактический:","name":"addr_mail",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"size":70,"disabled":"disabled"}});
		
	attrs["telephones"] = new EditString("Client_telephones",
		{"labelCaption":"Телефоны:","name":"telephones",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"size":20,"required":"required"}});

	attrs["email"] = new EditString("Client_email",
		{"labelCaption":"Эл.почта:","name":"email",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"size":50,"required":"required"}});
		
	attrs["acc"] = new EditNum("Client_acc",
		{"labelCaption":"Расчетный счет:","name":"acc",
		"buttonClear":false,
		"tableLayout":false,
		"fixedLength":true,
		"attrs":{"maxlength":20,"size":20,"required":"required"}});
		
	attrs["bank_name"] = new EditString("Client_bank_name",
		{"labelCaption":"Банк:","name":"bank_name",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"size":70,"required":"required"}}
	);
	attrs["bank_code"] = new EditObject("Client_bank_code",
		{"labelCaption":"БИК:","name":"bank_code",
		"buttonClear":false,
		"tableLayout":false,
		"fixedLength":true,
		"attrs":{"maxlength":9,"size":20,"required":"required","placeholder":"Введите БИК для поиска"},
		"methodId":"complete",
		"modelId":"BankList_Model",
		"lookupValueFieldId":"bik",
		"lookupKeyFieldIds":["bik"],
		"keyFieldIds":["bank_code"],
		"controller":new Bank_Controller(new ServConnector(HOST_NAME)),
		"minLengthForQuery":2,	
		"noSelect":true,
		"extraFields":["korshet","name"],
		"buttonSelect":new ButtonCtrl("Client_bank_code_btn_sel",
			{
			"glyph":"glyphicon-search",
			"title":"Найти по БИК",
			"onClick":function(){
					var node = nd("Client_bank_code");
					if (!node.value || !node.value.length){
						throw new Error("Не задан параметр поиска!");
					}
					
					var contr = new Bank_Controller(new ServConnector(HOST_NAME));
					var self = this;
					contr.run("get_object",{
						"params":{
							"bik":node.value
						},
						"func":function(resp){
							var m = resp.getModelById("BankList_Model",true);
							if(m.getNextRow()){
								nd("Client_bank_name").value = m.getFieldValue("name");
								nd("Client_bank_acc").value = m.getFieldValue("korshet");
								node.setAttribute("fkey_bank_code",node.value);
								DOMHandler.removeClass(node,"error");
								attrs["bank_code"].setValid();
								attrs["bank_code"].setComment("");
							}
							else{
								nd("Client_bank_name").value = "";
								nd("Client_bank_acc").value = "";
								node.setAttribute("fkey_bank_code","");
								if(!DOMHandler.hasClass(node,"error")){
									DOMHandler.addClass(node,"error");
								}
								if(!DOMHandler.hasClass(node,"incorrect_val")){
									DOMHandler.addClass(node,"incorrect_val");
								}
								
								attrs["bank_code"].setComment("Банк не найден!");
							}
						}
					});
				}
			}
		),		
		"onSelected":function(node){				
				nd("Client_bank_acc").value = DOMHandler.getAttr(node,"korshet");
				nd("Client_bank_name").value = DOMHandler.getAttr(node,"name");
			}
		}
	);
	
	attrs["bank_acc"] = new EditNum("Client_bank_acc",
		{"labelCaption":"Корр. счет:","name":"bank_acc",
		"buttonClear":false,
		"tableLayout":false,
		"fixedLength":true,
		"attrs":{"maxlength":20,"size":20,"required":"required"}});
		
	attrs["okpo"] = new EditNum("Client_okpo",
		{"labelCaption":"ОКПО:","name":"okpo","buttonSelect":false,
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":20,"size":20}});
		
	attrs["ogrn"] = new EditNum("Client_ogrn",
		{"labelCaption":"ОГРН:","name":"ogrn","buttonSelect":false,
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"maxlength":15,"size":20}});

	attrs["comment_text"] = new EditString("Client_comment_text",
		{"labelCaption":"Комментарий:","name":"comment_text",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"size":70}});
}
