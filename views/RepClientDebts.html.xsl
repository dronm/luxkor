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
	<xsl:apply-templates select="document/model[@id='RepClientDebtList_Model']"/>		
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
<xsl:template match="model[@id='RepClientDebtList_Model']">
	<table id="RepProductionLoad" class="table table-bordered table-striped">
		<!-- header -->
		<thead>
		<tr>
			<th>Организация</th>
			<th>Контрагент</th>
			<th>Отгружено, не оплачено</th>
			<th>Оплачено, не отгружено</th>
			<th>Сумма</th>
		</tr>
		</thead> 		 
		
		<tbody>
			<xsl:apply-templates/>
		</tbody>
		
		<!-- totals-->
		<tfoot>
			<tr>
				<td colspan="2" class="total">Итого</td>
				<td align="right">
					<xsl:call-template name="format_money">
						<xsl:with-param name="val" select="sum(row/shipped_not_payed/node())"/>
					</xsl:call-template>																									
				</td>
				<td align="right">
					<xsl:call-template name="format_money">
						<xsl:with-param name="val" select="sum(row/not_shipped_payed/node())"/>
					</xsl:call-template>																									
				</td>
				<td align="right">
					<xsl:call-template name="format_money">
						<xsl:with-param name="val" select="sum(row/balance/node())"/>
					</xsl:call-template>																									
				</td>
				
			</tr>
		</tfoot>
	</table>
</xsl:template>

<xsl:template match="model[@id='RepClientDebtList_Model']/row">
	<tr>
		<td><xsl:value-of select="firm_descr"/></td>
		<td><xsl:value-of select="client_descr"/></td>
		<td align="right">
			<xsl:call-template name="format_money">
				<xsl:with-param name="val" select="shipped_not_payed/node()"/>
			</xsl:call-template>
		</td>
		<td align="right">
			<xsl:call-template name="format_money">
				<xsl:with-param name="val" select="not_shipped_payed/node()"/>
			</xsl:call-template>
		</td>
		<td align="right">
			<xsl:call-template name="format_money">
				<xsl:with-param name="val" select="balance/node()"/>
			</xsl:call-template>
		</td>
		
	</tr>
</xsl:template>

</xsl:stylesheet>
