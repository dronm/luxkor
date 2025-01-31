/* Copyright (c) 2012 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
* @requires controls/ControlCintainer.js 
*/

/* constructor */
function ClientUserGridRowCommands(id,options){
	options = options || {};
	options.onClickDelete=null;
	options.onClickEdit=null;
	ClientUserGridRowCommands.superclass.constructor.call(this,
		id,options);

	this.setElementById("reset_pwd",new Button(null,
	{"caption":"Новый пароль",
	"onClick":function(){
		WindowQuestion.show({"text":"Пользователю будет назначен новый пароль, продолжить?",
			callBack:function(res){
				if (res==WindowQuestion.RES_YES){
					var contr = new ClientUser_Controller(new ServConnector(HOST_NAME));
					contr.run("reset_pwd",{
						"params":{"user_id":options.keys["id"]},
						"func":function(){
							window.showTempNote("Пользователю отправлен новый пароль.", null, ERR_MSG_WAIT_MS);
						}
					});
				}
			}
		})
		},
	"attrs":{"title":"отправить на почту новый пароль"}
	})
	);
}
extend(ClientUserGridRowCommands,GridRowCommands);
