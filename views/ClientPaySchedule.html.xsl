<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">
 
<xsl:import href="functions.xsl"/>

<xsl:key name="days" match="row" use="pay_date/."/>
<xsl:key name="firms" match="row" use="firm_id/."/>
<xsl:key name="firms_days" match="row" use="concat(firm_id/.,'|',pay_date/.)"/>

<!-- Main template-->
<xsl:template match="/">
	<xsl:apply-templates select="document/model[@id='ModelServResponse']"/>	
	<xsl:apply-templates select="document/model[@id='ModelVars']"/>	
	<xsl:apply-templates select="document/model[@id='Payment_Model']"/>		
</xsl:template>

<!-- Error -->
<xsl:template match="model[@id='ModelServResponse']">
	<xsl:if test="not(row[1]/result='0')">
	<div class="error">
		<xsl:value-of select="row[1]/descr"/>
	</div>
	</xsl:if>
</xsl:template>

<xsl:template match="model[@id='ModelVars']">
</xsl:template>

<!-- table -->
<xsl:template match="model[@id='Payment_Model']">
	<xsl:choose>
	<xsl:when test="sum(row/total/.) &gt; 0">
		<table id="Payment_Model" class="table table-bordered table-striped">
			<!-- header -->
			<thead>
			<tr>
				<th>Организация</th>
				<xsl:for-each select="//row[generate-id() =
				generate-id(key('days',pay_date/.)[1])]">				
					<xsl:sort select="pay_date/."/>
					<th align="center">
						<xsl:value-of select="pay_date_descr/."/>
					</th>
				</xsl:for-each>		
			</tr>
			</thead> 		 
			
			<tbody>
			<xsl:for-each select="//row[generate-id() =
			generate-id(key('firms',firm_id/.)[1])]">
				<xsl:sort select="firm_descr/."/>
				<xsl:variable name="firm_id" select="firm_id/."/>
				<xsl:variable name="row_class">
					<xsl:choose>
						<xsl:when test="position() mod 2">odd</xsl:when>
						<xsl:otherwise>even</xsl:otherwise>													
					</xsl:choose>
				</xsl:variable>			
				<tr class="{$row_class}">
					<td align="center"><xsl:value-of select="firm_descr/."/></td>
					<xsl:for-each select="//row[generate-id() =
					generate-id(key('days',pay_date/.)[1])]">
						<xsl:sort select="pay_date/."/>
						<xsl:variable name="firm_row" select="key('firms_days',concat($firm_id,'|',pay_date/.))"/>
						<td align="right">
						<xsl:call-template name="format_money">
							<xsl:with-param name="val" select="$firm_row/total/."/>
						</xsl:call-template>																					
						</td>
					</xsl:for-each>
				</tr>
			</xsl:for-each>
			</tbody>
			
			<!-- totals -->
			<tfoot>
				<tr>
					<td class="total">Итого</td>
					<xsl:for-each select="//row[generate-id() =
					generate-id(key('days',pay_date/.)[1])]">
						<td align="right">
						<xsl:call-template name="format_money">
							<xsl:with-param name="val" select="sum(key('days',pay_date/.)/total/.)"/>
						</xsl:call-template>																					
						</td>
					</xsl:for-each>
				</tr>
			</tfoot>
		</table>
		<xsl:if test="/document/model[@id='pay_interval']/.">
			<div><strong>Следующий платеж через <xsl:value-of select="/document/model[@id='pay_interval']/."/> дн.
			</strong></div>
		</xsl:if>
	</xsl:when>
	<xsl:otherwise>
		<div>Платежей нет.</div>
	</xsl:otherwise>
	</xsl:choose>
</xsl:template>

</xsl:stylesheet>