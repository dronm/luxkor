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
	<xsl:apply-templates select="document/model[@id='RepProductionLoad_Model']"/>		
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
<xsl:template match="model[@id='RepProductionLoad_Model']">
	<table id="RepProductionLoad" class="table table-bordered table-striped">
		<!-- header -->
		<thead>
		<tr>
			<th>Дата</th>
			<xsl:for-each select="//row[generate-id() =
			generate-id(key('products',product_id/.)[1])]">				
				<xsl:sort select="product_descr/."/>
				<th align="center">
					<xsl:value-of select="product_descr/."/>
				</th>
			</xsl:for-each>		
		</tr>
		</thead> 		 
		<!-- days -->
		<tbody>
		<xsl:for-each select="//row[generate-id() =
		generate-id(key('days',delivery_plan_date/.)[1])]">
			<xsl:sort select="delivery_plan_date/."/>
			<xsl:variable name="delivery_plan_date" select="delivery_plan_date/."/>
			
			<xsl:variable name="row_class">
				<xsl:choose>
					<xsl:when test="position() mod 2">odd</xsl:when>
					<xsl:otherwise>even</xsl:otherwise>													
				</xsl:choose>
			</xsl:variable>			
			<tr class="{$row_class}">
				<td align="center"><xsl:value-of select="delivery_plan_date_descr/."/></td>
				<xsl:for-each select="//row[generate-id() =
				generate-id(key('products',product_id/.)[1])]">
					<xsl:sort select="product_descr/."/>
					<xsl:variable name="prod_row" select="key('products_days',concat(product_id/.,'|',$delivery_plan_date))"/>
					<td align="right">
					<xsl:call-template name="format_quant">
						<xsl:with-param name="val" select="$prod_row/quant/."/>
					</xsl:call-template>																					
					</td>
				</xsl:for-each>
			</tr>
		</xsl:for-each>
		</tbody>
		
		<!-- totals-->
		<tfoot>
			<tr>
				<td class="total">Итого</td>
				<xsl:for-each select="//row[generate-id() =
				generate-id(key('products',product_id/.)[1])]">
					<xsl:sort select="product_descr/."/>
					<td align="right">
					<xsl:call-template name="format_quant">
						<xsl:with-param name="val" select="sum(key('products',product_id/.)/quant/.)"/>
					</xsl:call-template>																					
					</td>
				</xsl:for-each>
			</tr>
		</tfoot>
	</table>
</xsl:template>

</xsl:stylesheet>
