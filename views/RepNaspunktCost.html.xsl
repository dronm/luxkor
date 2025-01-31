<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">
 
<xsl:import href="functions.xsl"/>

<xsl:key name="naspunkts" match="row" use="naspunkt_id/."/>
<xsl:key name="deliv_cost_opts" match="row" use="deliv_cost_opt_id/."/>
<xsl:key name="naspunkts_deliv_cost_opts" match="row" use="concat(naspunkt_id/.,'|',deliv_cost_opt_id/.)"/>

<!-- Main template-->
<xsl:template match="/">
	<xsl:apply-templates select="document/model[@id='ModelServResponse']"/>	
	<xsl:apply-templates select="document/model[@id='ModelVars']"/>	
	<xsl:apply-templates select="document/model[@id='NaspunktCostList_Model']"/>		
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
<xsl:template match="model[@id='NaspunktCostList_Model']">
	<xsl:variable name="cost_opts_cnt" select="count(//row[generate-id()=generate-id(key('deliv_cost_opts',deliv_cost_opt_id/.)[1])])"/>

	<table id="NaspunktCostList" class="table table-bordered table-striped">
		<!-- header -->
		<thead>
		<tr>
			<th rowspan="2">Населенный пункт</th>
			<th rowspan="2">Расстояние (км.)</th>
			<th colspan="{$cost_opts_cnt}">Ценовые категории</th>
		</tr>
		
		<tr>
			<xsl:for-each select="//row[generate-id() =
			generate-id(key('deliv_cost_opts',deliv_cost_opt_id/.)[1])]">				
				<xsl:sort select="deliv_cost_opt_descr/."/>
				<th align="left">
					<xsl:value-of select="deliv_cost_opt_descr/."/>
				</th>
			</xsl:for-each>				
		</tr>
		
		</thead> 		 
		
		<tbody>
		<xsl:for-each select="//row[generate-id() =
		generate-id(key('naspunkts',naspunkt_id/.)[1])]">
			<xsl:sort select="naspunkt_descr/."/>
			<xsl:variable name="naspunkt_id" select="naspunkt_id/."/>
			
			<xsl:variable name="row_class">
				<xsl:choose>
					<xsl:when test="position() mod 2">odd</xsl:when>
					<xsl:otherwise>even</xsl:otherwise>													
				</xsl:choose>
			</xsl:variable>	
					
			<tr class="{$row_class}">
			
				<td align="left"><xsl:value-of select="naspunkt_descr/."/></td>
				<td align="right"><xsl:value-of select="distance/."/></td>
				
				<xsl:for-each select="//row[generate-id() =
				generate-id(key('deliv_cost_opts',deliv_cost_opt_id/.)[1])]">
					<xsl:sort select="deliv_cost_opt_descr/."/>
					<xsl:variable name="row_val" select="key('naspunkts_deliv_cost_opts',concat($naspunkt_id,'|',deliv_cost_opt_id/.))"/>
					
					<td align="right">
					<xsl:call-template name="format_money">
						<xsl:with-param name="val" select="$row_val/cost/."/>
					</xsl:call-template>																					
					</td>
				</xsl:for-each>
			</tr>
		</xsl:for-each>
		</tbody>
		
	</table>
</xsl:template>

</xsl:stylesheet>
