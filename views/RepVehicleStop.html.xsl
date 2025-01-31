<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">
 
<xsl:import href="functions.xsl"/>

<xsl:key name="days" match="row" use="delivery_plan_date/."/>
<xsl:key name="products" match="row" use="product_id/."/>
<xsl:key name="products_days" match="row" use="concat(product_id/.,'|',delivery_plan_date/.)"/>

<!-- Main template-->
<xsl:template match="/">
	<xsl:apply-templates select="document/model[@id='ModelServResponse']"/>	
	<xsl:apply-templates select="document/model[@id='ModelVars']"/>	
	<xsl:apply-templates select="document/model[@id='VehicleStop_Model']"/>		
</xsl:template>

<!-- Error -->
<xsl:template match="model[@id='ModelServResponse']">
	<xsl:if test="not(row[1]/result='0')">
	<div class="error">
		<xsl:value-of select="row[1]/descr"/>
	</div>
	</xsl:if>
</xsl:template>

<!-- table -->
<xsl:template match="model[@id='VehicleStop_Model']">
	<table id="RepProductionLoad" class="table table-bordered table-striped">
		<!-- header -->
		<thead>
		<tr>
			<th>ТС</th>
			<th>Дата</th>
			<th>Продолжительность стоянки</th>
			<th>Адрес</th>
		</tr>
		</thead> 		 
		<!-- days -->
		<tbody>
			<xsl:apply-templates select="row"/>	
		</tbody>
		
	</table>
</xsl:template>

<xsl:template match="model[@id='VehicleStop_Model']/row">
	<tr>
		<td align="center"><xsl:value-of select="vh_descr"/></td>
		<td align="center"><xsl:value-of select="date_time_descr"/></td>
		<td align="center"><xsl:value-of select="duration"/></td>
		<td><xsl:value-of select="address"/></td>
	</tr>
</xsl:template>


</xsl:stylesheet>
