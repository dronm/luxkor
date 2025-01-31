<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">
 
<xsl:import href="functions.xsl"/>

<xsl:key name="periods" match="row" use="client_debt_period_days_from/."/>
<xsl:key name="firms" match="row" use="firm_id/."/>
<xsl:key name="firms_periods" match="row" use="concat(firm_id/.,'|',client_debt_period_days_from/.)"/>

<!-- Main template-->
<xsl:template match="/">
	<xsl:apply-templates select="document/model[@id='ModelServResponse']"/>	
	<xsl:apply-templates select="document/model[@id='ModelVars']"/>	
	<xsl:apply-templates select="document/model[@id='Payment_Model']"/>		
</xsl:template>

<xsl:template match="model[@id='ModelVars']">
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
<xsl:template match="model[@id='Payment_Model']">
	<xsl:choose>
	<xsl:when test="/document/model[@id='ban_inf']/row/def_debt_exists/.='true'">
		<div class="alert alert-danger">
		<h3>В настоящее время просроченная задолженность составляет 
		<strong>
		<xsl:call-template name="format_money">
			<xsl:with-param name="val" select="/document/model[@id='ban_inf']/row/def_debt/."/>
		</xsl:call-template>руб.</strong></h3>		
		<h4>В т.ч.</h4>
		</div>
		<table id="Payment_Model" class="table table-bordered table-striped">
			<!-- header -->
			<thead>
			<tr>
				<th>Нарушение сроков</th>
				<xsl:for-each select="//row[generate-id() =
				generate-id(key('firms',firm_id/.)[1])]">				
					<xsl:sort select="firm_descr/."/>
					<th align="center">
						<xsl:value-of select="firm_descr/."/>
					</th>
				</xsl:for-each>		
				
			</tr>
			</thead>
			<tbody>		
				<xsl:for-each select="//row[generate-id() =
				generate-id(key('periods',client_debt_period_days_from/.)[1])]">				
					<xsl:sort select="client_debt_period_days_from/."/>
					
					<xsl:variable name="client_debt_period_days_from" select="client_debt_period_days_from/."/>
					
					<xsl:variable name="row_class">
						<xsl:choose>
							<xsl:when test="position() mod 2">odd</xsl:when>
							<xsl:otherwise>even</xsl:otherwise>													
						</xsl:choose>
					</xsl:variable>			
					<tr class="{$row_class}">
						<td align="center">
							<xsl:value-of select="period_descr/."/>
						</td>
						
						<xsl:for-each select="//row[generate-id() =
						generate-id(key('firms',firm_id/.)[1])]">				
							<xsl:sort select="firm_descr/."/>
							
							<xsl:variable name="firm_row" select="key('firms_periods',concat(firm_id/.,'|',$client_debt_period_days_from))"/>
							
							<td align="right">
								<xsl:call-template name="format_money">
									<xsl:with-param name="val" select="$firm_row/def_debt/."/>
								</xsl:call-template>																					
							</td>
						</xsl:for-each>		
					</tr>
				</xsl:for-each>		
			
			</tbody>
		</table>
		<xsl:if test="/document/model[@id='ban_inf']/banned/. = '1'">
			<div>Отгрузки Вашей организации временно приостановлены.</div>
		</xsl:if>
	</xsl:when>
	<xsl:otherwise>
		<div>В настоящее время просроченной задолженности нет.</div>
	</xsl:otherwise>
	</xsl:choose>
</xsl:template>

</xsl:stylesheet>