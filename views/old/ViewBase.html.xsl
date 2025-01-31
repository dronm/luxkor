<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="index.html.xsl"/>
			
<xsl:template match="/">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<xsl:apply-templates select="/document/model[@id='ModelVars']"/>
		<xsl:apply-templates select="/document/model[@id='ModelStyleSheet']/row"/>
		<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
		<title>Полимерпласт</title>
		<script>
			var HOST_NAME = '<xsl:value-of select="/document/model[@id='ModelVars']/row/basePath"/>';
			var MainView;//current opened view
			var onViewClose;//			
			var WIN_CLASS;
			var BS_COL;
			var CONSTANTS;			
			var CONSTANT_VALS;
			var SERV_VARS = {
				"VERSION":'<xsl:value-of select="/document/model[@id='ModelVars']/row/scriptId"/>',
				"ROLE_ID":'<xsl:value-of select="/document/model[@id='ModelVars']/row/role_id"/>',
				"ROLE_DESCR":'<xsl:value-of select="/document/model[@id='ModelVars']/row/role_descr"/>',
				"USER_ID":'<xsl:value-of select="/document/model[@id='ModelVars']/row/user_id"/>',
				"USER_NAME":'<xsl:value-of select="/document/model[@id='ModelVars']/row/user_name"/>',
				"WAREHOUSE_DESCR":'<xsl:value-of select="/document/model[@id='ModelVars']/row/warehouse_descr"/>',
				"TEl_EXT":'<xsl:value-of select="/document/model[@id='ModelVars']/row/tel_ext"/>',
				"CLIENT_PAYMENT_TYPE":'<xsl:value-of select="/document/model[@id='ModelVars']/row/client_payment_type"/>',
				"CLIENT_SHIP_NOT_ALLOWED":'<xsl:value-of select="/document/model[@id='ModelVars']/row/client_ship_not_allowed"/>',
				"ORDER_DESTINATION_TO_TTN":'<xsl:value-of select="/document/model[@id='ModelVars']/row/order_destination_to_ttn"/>'
				};
			var NEW_CLIENT_CHECK;
			var CONST_CONTROLS ={};
			var TEMPLATE_PARAMS={};
			<xsl:for-each select="/document/model[@id='TemplateParamList_Model']/row">
			TEMPLATE_PARAMS.<xsl:value-of select="template"/> = TEMPLATE_PARAMS.<xsl:value-of select="template"/> || {};
			TEMPLATE_PARAMS.<xsl:value-of select="template"/>.<xsl:value-of select="param"/> = eval("(" +'<xsl:value-of select="val"/>' + ")");
			</xsl:for-each>
			
			function copy_app(){
				var win = window.open('<xsl:value-of select="/document/model[@id='ModelVars']/row/basePath"/>',"_blank");
				win.focus();
			}
			/*
			function getLocation() {
			    if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(pos){
					console.log("lat="+pos.coords.latitude+" lon="+pos.coords.longitude);
				});
			    }
			}
			*/			
			function pageLoad(){
				
				window.onerror = function(msg,url,line,col,error) {
					   var extra = !col ? "" : "\ncolumn: " + col;
					   extra += !error ? "" : "\nerror: " + error;
					   console.log("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
					   console.trace();
					   //+extra
					   WindowMessage.show({
						"type":WindowMessage.TP_ER,
						"text":msg
						});
					   return false;
				};
				
				BS_COL = ("col-"+$('#users-device-size').find('div:visible').first().attr('id')+"-");
				
				//getLocation();
				
				WIN_CLASS = WindowFormDD;//ChildForm;
				CONSTANTS = new Constant_Controller(new ServConnector(HOST_NAME));
				CONSTANT_VALS = {
					"new_client_check_sec":null,
					"db_controls_refresh_sec":null,
					"grid_rows_per_page_count":null,
					"map_default_lat":null,
					"map_default_lon":null
					};
				CONSTANTS.readValues(CONSTANT_VALS);
				//console.log("lat="+CONSTANT_VALS.map_default_lat)
				//console.log("grid_rows_per_page_count="+CONSTANT_VALS.grid_rows_per_page_count)
				
				//defaults
				CONSTANT_VALS.newOrdersCallapsed = true;
				CONSTANT_VALS.ordersCallapsed = false;
				
				var self = this;
				onViewClose = function(res){					
					if (MainView!=undefined){
						MainView.removeDOM();
						delete MainView;
					}
				};
				
			<xsl:apply-templates select="/document/model[@id='MainMenu_Model']"/>
			
			<xsl:if test="/document/model[@id='MainMenu_Model']/item[@default='TRUE']">
			onItemClick(<xsl:value-of select="/document/model[@id='MainMenu_Model']/item[@default='TRUE']/@viewId"/>);
			</xsl:if>
			
			if (SERV_VARS.ROLE_ID=="sales_manager"){
				NEW_CLIENT_CHECK = new UnregClientCheck(CONSTANT_VALS.new_client_check_sec);
				
			}
					
			}
		</script>
	</head>
	<body onload="pageLoad();" class="layout_2_1 blue3">
		<!-- class="page-header" -->
		<a href="#" onclick="copy_app();"><img id="logo_main" src="{$BASE_PATH}img/logo.png"/></a>		
		
		<ul id="mainMenu" class="nav nav-tabs">		
		</ul>
		<div id="content" class="panel-group">
		</div>
		<div id="footer">
		</div>
		<!-- bootstrap resolution-->
		<div id="users-device-size">
		  <div id="xs" class="visible-xs"></div>
		  <div id="sm" class="visible-sm"></div>
		  <div id="md" class="visible-md"></div>
		  <div id="lg" class="visible-lg"></div>
		</div>
		<!--waiting  -->
		<div id="waiting">
			<div>Ждите</div>
			<img src="{$BASE_PATH}img/loading.gif"/>
		</div>
		
		<!--ALL js modules -->
		<xsl:apply-templates select="/document/model[@id='ModelJavaScript']/row"/>
		<script>
			var dv = document.getElementById("waiting");
			if (dv!==null){
				//dv.parentNode.removeChild(dv);
				DOMHandler.addClass(dv,"invisible");
			}
			<xsl:if test="not(/document/model[@id='ModelServResponse']/row/result='0')">
				alert('ОШИБКА:<xsl:value-of select="/document/model[@id='ModelServResponse']/row/descr"/>');
			</xsl:if>	
			
		</script>
	
	</body>
</html>		
</xsl:template>

<xsl:template match="model[@id='MainMenu_Model']">	
	var onItemClick = function(viewClassId){		
		onViewClose();
		MainView = new viewClassId("MainView",
		{"onClose":onViewClose,
		"connect":new ServConnector(HOST_NAME)
		});	
		MainView.toDOM(nd("content"));
	};
<xsl:apply-templates select="item"/>
var item = new TabMenuItem('it_exit',{
	caption:"Выход",
	onClick:function(){
		window.location="<xsl:value-of select="$BASE_PATH"/>index.php?c=User_Controller&amp;f=logout&amp;v=Login";
	}
});
item.toDOM(nd("mainMenu"));

</xsl:template>

<xsl:template match="model[@id='MainMenu_Model']/item">
var opts={"caption":"<xsl:value-of select="@descr"/>",
	"viewClassId":<xsl:value-of select="@viewId"/>,
	<!--
	<xsl:if test="@default='TRUE'">
	"defItem":true,
	</xsl:if>
	-->
	"onClick":onItemClick,
	"onClickContext":this};
var item = new TabMenuItem('it'+<xsl:value-of select="position()"/>,opts);
item.toDOM(nd("mainMenu"));
</xsl:template>


</xsl:stylesheet>
