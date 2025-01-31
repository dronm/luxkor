<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">
 
<xsl:import href="functions.xsl"/>

<!-- Main template-->
<xsl:template match="/">
	<xsl:apply-templates select="document/model[@id='ModelServResponse']"/>	
	<xsl:apply-templates select="document/model[@id='header']"/>		
	<xsl:apply-templates select="document/model[@id='products']"/>		
</xsl:template>

<!-- Error -->
<xsl:template match="model[@id='ModelServResponse']">
	<xsl:if test="not(row[1]/result='0')">
	<div class="error">
		<xsl:value-of select="row[1]/descr"/>
	</div>
	</xsl:if>
</xsl:template>

<!-- header -->
<xsl:template match="model[@id='header']">
<h1>Прайс лист</h1>
<div>дата: <xsl:value-of select="row/date"/></div>
<div>город: <xsl:value-of select="row/production_city_descr"/></div>
<xsl:if test="row/min_order_quant &gt; 0">
<div>минимальное количество: <xsl:value-of select="row/min_order_quant"/></div>
</xsl:if>
</xsl:template>

<!-- products -->
<xsl:template match="model[@id='products']">
<table class="table table-bordered table-striped">
	<thead>
	<tr>
		<th>№</th>
		<th>Продукция</th>
		<th>Ед-ца</th>
		<th>Цена</th>
	</tr>
	</thead>
	
	<tbody>
		<xsl:apply-templates select="row"/>
	</tbody>
</table>
</xsl:template>

<!-- product rows -->
<xsl:template match="model[@id='products']/row">
	<tr>
		<td align="center"><xsl:value-of select="position()"/></td>
		
		<td><xsl:value-of select="product_descr"/></td>
		
		<td align="center"><xsl:value-of select="measure_unit_descr"/></td>
		
		<td align="right">
			<xsl:call-template name="format_money">
				<xsl:with-param name="val" select="price/."/>
			</xsl:call-template>		
		</td>
	</tr>
</xsl:template>

</xsl:stylesheet>