<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="ViewBase.html.xsl"/>

<!--
<div><input id="submit_register" class="formbutton" type="submit" value="Регистрация" name="submit_register"/></div>
-->

<xsl:template match="/">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<xsl:apply-templates select="/document/model[@id='ModelVars']"/>
		<xsl:apply-templates select="/document/model[@id='ModelStyleSheet']/row"/>
		<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
		<title>Project manager</title>
	</head>
	<body>
		<div class="page-header">Project manager</div>		

		<xsl:apply-templates select="/document/model[@id='ModelServResponse']/row"/>
		
		<xsl:apply-templates select="/document/model[@id='Log_Model']/row"/>				
		
		<div class="panel-group">
			<div class="panel panel-primary">
				<div class="panel-heading">Update managing</div>
				
				<!-- zip -->
				<form action="index.php" method="POST" name="" enctype="multipart/form-data">
					<input type="hidden" name="c" value="ProjectManager_Controller"/>
					<input type="hidden" name="f" value="zip_project"/>
					<input type="hidden" name="v" value="ProjectManager"/>
					<input type="submit" value="Zip project" name="zip_project"/>			
				</form>		
				
				<!-- database zip -->
				<form action="index.php" method="POST" name="" enctype="multipart/form-data">
					<input type="hidden" name="c" value="ProjectManager_Controller"/>
					<input type="hidden" name="f" value="zip_db"/>
					<input type="hidden" name="v" value="ProjectManager"/>
					<input type="submit" value="Zip database" name="zip_db"/>
				</form>		

				<!-- run sql -->
				<form action="index.php" method="POST" name="" enctype="multipart/form-data">
					<input type="hidden" name="c" value="ProjectManager_Controller"/>
					<input type="hidden" name="f" value="apply_sql"/>
					<input type="hidden" name="v" value="ProjectManager"/>
					<input type="submit" value="Run sql scripts" name="apply_sql"/>
				</form>		

				<!-- install_patch -->
				<form action="index.php" method="POST" name="" enctype="multipart/form-data">
					<input type="hidden" name="c" value="ProjectManager_Controller"/>
					<input type="hidden" name="f" value="apply_patch"/>
					<input type="hidden" name="v" value="ProjectManager"/>
					<input type="submit" title="For production version only! Build directory and Updates/sql will be removed!" value="Install patch" name="apply_patch"/>
				</form>		
				
			</div>
		</div>
		
	</body>
</html>		
</xsl:template>

<xsl:template match="model[@id='Log_Model']">	
<div class="panel panel-primary">
	<div class="panel-heading">Action log</div>
	<xsl:apply-templates/>
</div>
</xsl:template>

<xsl:template match="model[@id='Log_Model']/row/*">	
<div><xsl:value-of select="node()"/></div>
</xsl:template>

</xsl:stylesheet>
