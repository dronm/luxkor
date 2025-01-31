<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:import href="functions.xsl"/>

<xsl:template name="q_to_whole">
	<xsl:param name="val"/>
	<xsl:choose>
		<xsl:when test="round($val)=$val">
			<xsl:value-of select="round($val)"/>
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="$val"/>
		</xsl:otherwise>		
	</xsl:choose>
</xsl:template>

<!-- Main template-->
<xsl:template match="/">
	<xsl:apply-templates select="document/model[@id='ModelServResponse']"/>	
	<xsl:apply-templates select="document/model[@id='head']"/>
	<xsl:apply-templates select="document/model[@id='FileList_Model']"/>		
</xsl:template>

<!-- Error -->
<xsl:template match="model[@id='ModelServResponse']">
	<xsl:if test="not(row[1]/result='0')">
	<div class="error">
		<xsl:value-of select="row[1]/descr"/>
	</div>
	</xsl:if>
</xsl:template>

<xsl:template match="model[@id='head']/row">
<xsl:variable name="doc_id" select="id"/>


<xsl:if test="position() &gt; 1">
<span class="pagebreak"></span>
</xsl:if>

<div class="doc_order_print_order_store">
	<div class="small_text">отрывной талон склад</div>
	<div>№<xsl:value-of select="number"/><xsl:text>&#160;</xsl:text><xsl:value-of select="client_descr"/></div>
	<xsl:variable name="pack_exists" select="count(/document/model[@id='products']/row/pack_exists[node()='true']) &gt;0"/>
	<xsl:variable name="extra_price_category_exists" select="count(/document/model[@id='products']/row/extra_price_category[node() != '0']) &gt;0"/>
	
	<table>
		<thead>
		<tr>
			<th>Продукция</th>
			<th>Ед.для заявок</th>
			<th>Ед.базовая</th>
			<xsl:if test="$pack_exists">
				<th></th>
			</xsl:if>
			<xsl:if test="$extra_price_category_exists">
				<th></th>
			</xsl:if>
			
		</tr>
		</thead>
		<tbody>
	<xsl:for-each select="/document/model[@id='products']/row">
		<xsl:if test="doc_id=$doc_id">
		<tr>
			<td><xsl:value-of select="dimen"/></td>
			<td>
				<xsl:variable name="q">
					<xsl:choose>
					<xsl:when test="measure_unit_descr = order_measure_unit_descr">
						<xsl:value-of select="quant"/>
					</xsl:when>
					<xsl:when test="(quant_order_measure_unit - round(quant_order_measure_unit)) &lt; 0.001">
						<xsl:value-of select="round(quant_order_measure_unit)"/>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="quant_order_measure_unit"/>
					</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>	
				
				<xsl:call-template name="q_to_whole">
					<xsl:with-param name="val" select="$q"/>
				</xsl:call-template>
				<xsl:value-of select="concat(' ',order_measure_unit_descr)"/>
				
			</td>
			<td>
				<xsl:call-template name="q_to_whole">
					<xsl:with-param name="val" select="quant_base_measure_unit"/>
				</xsl:call-template>																					
			<xsl:value-of select="concat(' ',base_measure_unit_descr)"/>
			</td>	
			
			<xsl:if test="$pack_exists">
				<td>
				<xsl:if test="pack_exists='true'">Упаковка</xsl:if>
				</td>
			</xsl:if>
			
			<xsl:if test="$extra_price_category_exists">
				<td>
				<xsl:if test="extra_price_category != '0'">Кат.рез.<xsl:value-of select="extra_price_category"/>
				</xsl:if>
				</td>
			</xsl:if>
			
			<!--
			<td><xsl:value-of select="quant_order_measure_unit"/><xsl:value-of select="order_measure_unit_descr"/></td>
			<td><xsl:value-of select="quant_base_measure_unit"/><xsl:value-of select="base_measure_unit_descr"/></td>
			-->
		</tr>
		</xsl:if>
	</xsl:for-each>
		</tbody>
	</table>
	
</div>

<table class="doc_order_print_order_body">
	<tr>
	<td align="left">
		<div>Заявка №<xsl:value-of select="number"/>
		<xsl:text>&#160;</xsl:text>
		Заказчик: <xsl:value-of select="client_descr"/>
		</div>
		
		<xsl:for-each select="/document/model[@id='products' and @doc_id=$doc_id]/row">
			<div>
				<xsl:value-of select="position()"/>.
				<xsl:text>&#160;</xsl:text>
				<xsl:value-of select="product_descr"/>;
				<xsl:text>&#160;</xsl:text>
				<xsl:value-of select="dimen"/>;
				<xsl:text>&#160;</xsl:text>
				<!--<xsl:value-of select="quant"/>-->
				<xsl:call-template name="q_to_whole">
					<xsl:with-param name="val" select="quant"/>
				</xsl:call-template>				
				<xsl:value-of select="measure_unit_descr"/>;
				<xsl:text>&#160;</xsl:text>
				<xsl:call-template name="q_to_whole">
					<xsl:with-param name="val" select="quant_base_measure_unit"/>
				</xsl:call-template>
				<xsl:value-of select="base_measure_unit_descr"/>;
			</div>
		</xsl:for-each>
		
		<xsl:variable name="deliv_dest_descr">
			<xsl:choose>
			<xsl:when test="deliv_type='by_client'">
				<xsl:value-of select="concat('Самовывоз ', deliv_destination_descr)"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="deliv_destination_descr"/>
			</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<div>Адрес доставки: <xsl:value-of select="$deliv_dest_descr"/>
		</div>
		<div>Контактный телефон: <xsl:value-of select="tels"/>
		</div>
		<div>Комментарий: <xsl:value-of select="sales_manager_comment"/>
		</div>		
	</td>
	<td align="right">
		<div>Дата отгрузки: <span class="totals"><xsl:value-of select="delivery_fact_date_descr"/></span></div>
		<div>Дата передачи в производство: <span class="totals"><xsl:value-of select="to_production_date_descr"/></span></div>
		<div>Всего: <span class="totals">
			<!--<xsl:value-of select="total_quant"/>-->
				<xsl:call-template name="q_to_whole">
					<xsl:with-param name="val" select="total_quant"/>
				</xsl:call-template>
			
			</span></div>
	</td>
	</tr>
</table>

<table class="doc_order_print_table">
	<tr>
		<td>Наим.</td>
		<td>кг/м3</td>
		<td>Размер</td>
		<td>Листов</td>
		<td>м3</td>
		<td>Груз отпустил (подпись)</td>
		<td>Груз принял (подпись)</td>
		<td>№ накл.</td>
	</tr>
	<tr>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>	
	</tr>
	<tr>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>	
	</tr>
	<tr>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>	
	</tr>
	<tr>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>	
	</tr>
	<tr>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>	
	</tr>
	<tr>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>	
	</tr>
	<tr>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>	
	</tr>
	
</table>

<!--<br/><br/><br/><br/><br/>-->

<xsl:variable name="order_bottom_style">
	<xsl:choose>
	<xsl:when test="count(/document/model[@id='products']/row)>6">
		<xsl:value-of select="''"/>
	</xsl:when>
	<xsl:otherwise>
		<xsl:value-of select="'position:absolute;'"/>
	</xsl:otherwise>
	</xsl:choose>
</xsl:variable>	

<div class="doc_order_print_order_bottom" style="{$order_bottom_style}">
	<div class="small_text">отрывной талон водителя</div>
	<div>Адрес доставки: <xsl:value-of select="deliv_destination_descr"/>
	</div>
	<div>Контактный телефон: <xsl:value-of select="tels"/>
	</div>
	<div>Комментарий: <xsl:value-of select="sales_manager_comment"/>
	</div>		
</div>

</xsl:template>


<xsl:template match="model[@id='FileList_Model']/row">
	<p style="page-break-before: always;">&#160;</p>
	<img src="data:image/png;base64, {file_data}">
	</img>	
</xsl:template>
</xsl:stylesheet>
