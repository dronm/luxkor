<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:import href="functions.xsl"/>
 <!--
<xsl:output method="html"/> 
-->
<xsl:key name="price_lists" match="row" use="price_list_id/."/>
<xsl:key name="products" match="row" use="product_id/."/>
<xsl:key name="price_lists_products" match="row" use="concat(price_list_id/.,'|',product_id/.)"/>

<!-- Main template-->
<xsl:template match="/">
	<xsl:apply-templates select="document/model[@id='ModelServResponse']"/>	
	<xsl:apply-templates select="document/model[@id='ModelVars']"/>	
	<xsl:apply-templates select="document/model[@id='RepSale_Model']"/>		
</xsl:template>

<!-- table -->
<xsl:template match="model[@id='RepSale_Model']">
	<xsl:variable name="model_id" select="@id"/>	
	<table id="{@model_id}">
		<thead>
			<tr>
				<xsl:for-each select="./row[1]/*">
					<xsl:variable name="field_id" select="name()"/>
					<xsl:if test="$field_id != 'sys_level_val' and $field_id != 'sys_level_count'">
					<xsl:variable name="label">
						<xsl:choose>
							<xsl:when test="/document/metadata[@modelId=$model_id]/field[@id=$field_id]/@alias">
								<xsl:value-of select="/document/metadata[@modelId=$model_id]/field[@id=$field_id]/@alias"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:value-of select="/document/metadata[@modelId=$model_id]/@id"/>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:variable>
					<th><xsl:value-of select="$label"/></th>
					</xsl:if>
				</xsl:for-each>
			</tr>
		</thead>
	
		<tbody>
			<xsl:apply-templates/>
		</tbody>
	</table>
</xsl:template>

<!-- Error -->
<xsl:template match="model[@id='ModelServResponse']">
	<xsl:if test="not(row[1]/result='0')">
	<div class="error">
		<xsl:value-of select="row[1]/descr"/>
	</div>
	</xsl:if>
</xsl:template>

<!-- table row -->
<xsl:template match="row">
	<xsl:variable name="class_name">
		<xsl:choose>
		<xsl:when test="sys_level_val &gt;= 0">level_<xsl:value-of select="sys_level_val"/>
		</xsl:when>
		<xsl:otherwise></xsl:otherwise>
		</xsl:choose>	
	</xsl:variable>
	<tr class="{$class_name}">
		<xsl:apply-templates/>
	</tr>
</xsl:template>

<!-- table row -->
<xsl:template match="row/*">
	<xsl:variable name="pos" select="position() div 2"/>
	
	<xsl:choose>
	<xsl:when test="not(../sys_level_count)">
		<!-- НЕТ span-->
		<td><xsl:value-of select="node()"/></td>
	</xsl:when>
	<xsl:when test="$pos = 1 and (number(../sys_level_count)=number(../sys_level_val))">
		<!-- первоя строка,первая колонка -->
		<xsl:choose>
			<xsl:when test="number(../sys_level_count) &gt;= 2">
			<td colspan="{../sys_level_count}">Итого</td>
			</xsl:when>
			<xsl:otherwise>
			<!-- NO SPAN -->
			<td>Итого</td>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:when>
	<xsl:when test="$pos &lt; (number(../sys_level_count)-number(../sys_level_val))">
	<td/>
	</xsl:when>
	<xsl:when test="$pos &lt;= (number(../sys_level_count)-number(../sys_level_val))">
		<xsl:variable name="span_cnt" select="number(../sys_level_count) - $pos + 1"/>		
		<xsl:choose>
		<xsl:when test="$span_cnt &gt;= 2">
			<td colspan="{$span_cnt}"><xsl:value-of select="node()"/></td>
		</xsl:when>
		<xsl:otherwise>
			<td><xsl:value-of select="node()"/></td>
		</xsl:otherwise>		
		</xsl:choose>
	</xsl:when>		
	<xsl:when test="$pos &gt; number(../sys_level_count)">
		<!-- Нужно выводить TD без спана-->
		<td><xsl:value-of select="node()"/></td>
	</xsl:when>		
	<xsl:otherwise>
		<!-- Не нужен TD -->
	</xsl:otherwise>
	</xsl:choose>
	
</xsl:template>

<!-- заглушка -->
<xsl:template match="row/sys_level_val">
</xsl:template>

<xsl:template match="row/sys_level_count">
</xsl:template>
<!--
<xsl:template match="row/volume">
	<td align="right"><xsl:value-of select="node()"/></td>
</xsl:template>

<xsl:template match="row/quant_base_measure_unit">
	<td align="right"><xsl:value-of select="node()"/></td>
</xsl:template>

<xsl:template match="row/number">
	<td align="center"><xsl:value-of select="node()"/></td>
</xsl:template>
-->

</xsl:stylesheet>