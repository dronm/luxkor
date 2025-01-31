<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:output method="xml"/> 

<!-- Main template -->
<xsl:template match="/">
    <fo:root>
      <fo:layout-master-set>
        <fo:simple-page-master master-name="Report"
              page-height="21cm" page-width="14.7cm" margin-top="0"
			  margin-left="0" margin-right="0">
          <fo:region-body margin-top="0"/>
		  <fo:region-before/>
        </fo:simple-page-master>
      </fo:layout-master-set>
      <fo:page-sequence master-reference="Report">	  
	  
		<!-- flow-name="xsl-region-body"-->
        <fo:flow flow-name="xsl-region-body">			
			<fo:block font-family="Arial" font-style="normal"
				font-size="12pt"
				margin-top="10px"
				font-weight="bold"
				text-decoration="underline"
				text-align="center">
				<xsl:value-of select="document/firm_descr"/>
			</fo:block>			
			<fo:block font-family="Arial" font-style="normal"
				font-size="8pt"
				margin-top="5px"
				text-align="center">
				<xsl:value-of select="document/firm_data"/>
			</fo:block>

			<fo:block font-family="Arial" font-style="normal"
				font-size="12pt"
				margin-top="50px"
				font-weight="bold"
				text-align="center">
				ПАСПОРТ
			</fo:block>

			<fo:block font-family="Arial" font-style="normal"
				font-size="8pt"
				text-align="center">
				На плиты пенополистирольные самозатухающие ГОСТ 15588-86
			</fo:block>
			
			<fo:table table-layout="fixed"
			margin-top="10px"
			border-style="none"
			font-family="Arial" font-style="normal"
			font-weight="normal" text-align="right"
			font-size="10pt"
			>
				<fo:table-column column-width="5cm"/>
				<fo:table-column column-width="10cm"/>
				
				<fo:table-body>
					<!-- Марка -->
					<fo:table-row>
						<fo:table-cell>
							<fo:block>Марка:</fo:block>
						</fo:table-cell>																												
						<fo:table-cell text-align="left">
							<fo:block>
								<xsl:value-of select="document/product_descr"/>
							</fo:block>
						</fo:table-cell>																												
					</fo:table-row>
					<!-- Дата -->
					<fo:table-row>
						<fo:table-cell>
							<fo:block>Дата:</fo:block>
						</fo:table-cell>																												
						<fo:table-cell text-align="left">
							<fo:block>
								<xsl:value-of select="document/date_descr"/>
							</fo:block>
						</fo:table-cell>
					</fo:table-row>
					<!-- Партия -->
					<fo:table-row>
						<fo:table-cell>
							<fo:block>Партия:</fo:block>
						</fo:table-cell>																												
						<fo:table-cell text-align="left">
							<fo:block>1117</fo:block>
						</fo:table-cell>
					</fo:table-row>
					<!-- Объем партии -->
					<fo:table-row>
						<fo:table-cell>
							<fo:block>Объем партии:</fo:block>
						</fo:table-cell>																												
						<fo:table-cell text-align="left">
							<fo:block>112 куб.м.</fo:block>
						</fo:table-cell>
					</fo:table-row>
					
				</fo:table-body>
			</fo:table>
			
			<!-- Атрибуты -->
			<xsl:apply-templates/>
			
			<!-- Подвал -->
			<fo:block
			margin-top="20px"
			margin-left="5px"
			font-family="Arial"
			font-style="normal"
			font-size="6pt"
			text-align="left">			
				<fo:block>
					• Санитарно-эпидемиологическое заключение № 72.ОЦ.01.224.П.000170.03.07 Министерства
					здравоохранения Российской Федерации выдано Центром госсанэпидемнадзора   Тюменской области « 28 » марта 2007 г.;
				</fo:block>
				<fo:block>
					• Сертификат соответствия ГОСТ № РОСС.RU.MM04.H05521  23.01.2015;
				</fo:block>
				<fo:block>
					• Сертификат соответствия техническому регламенту о требованиях пожарной безопасности
					  С-RU.ПБ47.В.00049 ТР 0639800 от  29.06.11;
				</fo:block>
				<fo:block>
					• Сертификат соответствия № РСС RU.И565.РП20.0064 от 05.07.2011 "РОССТРОЙСЕРТИФИКАЦИЯ".
				</fo:block>
			
			</fo:block>
        </fo:flow>					
      </fo:page-sequence>
    </fo:root>
</xsl:template>

<xsl:template match="attrs">
	<fo:table
	margin-left="5px"
	table-layout="fixed"
	margin-top="10px"
	>
		<fo:table-column column-width="1cm"/>
		<fo:table-column column-width="8cm"/>
		<fo:table-column column-width="2cm"/>
		<fo:table-column column-width="2cm"/>
	
		<fo:table-header			
			font-family="Arial" font-style="normal"
			font-weight="bold" text-align="center"
			font-size="8pt"			
			display-align="center"			
			>
			<fo:table-row>
				<fo:table-cell
				border-width="0.2mm" border-style="solid"
				>
					<fo:block>№</fo:block>
				</fo:table-cell>
				<fo:table-cell
				border-width="0.2mm" border-style="solid"
				>
					<fo:block>Наименование показателя</fo:block>
				</fo:table-cell>
				<fo:table-cell
				border-width="0.2mm" border-style="solid"
				>
					<fo:block>Норма по ГОСТ 15588-86</fo:block>
				</fo:table-cell>
				<fo:table-cell
				border-width="0.2mm" border-style="solid"
				>
					<fo:block>Результаты анализа</fo:block>
				</fo:table-cell>				
			</fo:table-row>
		</fo:table-header>
		
		<fo:table-body
		font-family="Arial" font-style="normal"
		font-weight="normal" text-align="left"
		font-size="8pt"			
		display-align="center"
		>
			<xsl:apply-templates/>
		</fo:table-body>
	
	</fo:table>
</xsl:template>

<xsl:template match="attr">
	<fo:table-row>
		<!-- №-->
		<fo:table-cell
		border-width="0.2mm" border-style="solid"
		text-align="center"
		>
			<fo:block>
				<xsl:value-of select="position()"/>
			</fo:block>
		</fo:table-cell>
		
		<!-- Наименование -->
		<fo:table-cell
		border-width="0.2mm" border-style="solid"
		>
			<fo:block>
				<xsl:value-of select="attr_text"/>
			</fo:block>
		</fo:table-cell>

		<!-- Норма -->
		<fo:table-cell
		border-width="0.2mm" border-style="solid"
		text-align="center"
		>
			<fo:block>
				<xsl:value-of select="attr_val_norm"/>
			</fo:block>
		</fo:table-cell>

		<!-- Анализ -->
		<fo:table-cell
		border-width="0.2mm" border-style="solid"
		text-align="center"
		>
			<fo:block>
				<xsl:value-of select="attr_val"/>
			</fo:block>
		</fo:table-cell>
		
	</fo:table-row>
</xsl:template>

</xsl:stylesheet>