<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="ViewBase.html.xsl"/>

<!--
<div><input id="submit_register" class="formbutton" type="submit" value="Регистрация" name="submit_register"/></div>
-->
    
<xsl:template match="/">
<xsl:variable name="VIEW_ID" select='generate-id()'/>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<xsl:apply-templates select="/document/model[@id='ModelVars']"/>
		<xsl:apply-templates select="/document/model[@id='ModelStyleSheet']/row"/>
		<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
		
		<script>
			var HOST_NAME = '<xsl:value-of select="/document/model[@id='ModelVars']/row/basePath"/>';
			var BS_COL;
			
			function pageLoad(){
				var view_id = "<xsl:value-of select='$VIEW_ID'/>";
				BS_COL = ("col-"+$('#users-device-size').find('div:visible').first().attr('id')+"-");
				var v = new ProjectManager_View(view_id);
			}
		</script>		
		<title>Project Manager</title>
	</head>
	<body onload="pageLoad();">
		<xsl:apply-templates select="/document/model[@id='ModelServResponse']/row"/>		
		
		<div class="page-header">
			<img id="logo" src="{$BASE_PATH}img/logo.png"/>
		</div>		
		<div id="{$VIEW_ID}" class="panel-group">
			<div class="panel panel-primary">
				<div class="panel-heading">Version managing</div>
				<div class="form-horizontal">
					<div id="{$VIEW_ID}cur_version"/>
					<div id="{$VIEW_ID}version_commit_descr"/>
					<div id="{$VIEW_ID}unify_js"/>
				</div>
			</div>
			<br></br><br></br>
			<div class="panel panel-primary">
				<div class="panel-heading">Project managing</div>
				<div id="{$VIEW_ID}build_project"/>
				<div id="{$VIEW_ID}create_symlinks"/>
				<div id="{$VIEW_ID}pull"/>
			</div>
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
				dv.parentNode.removeChild(dv);
			}
		</script>
		 
	</body>
</html>		
</xsl:template>

</xsl:stylesheet>
