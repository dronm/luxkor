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
			<fo:block-container font-family="Arial" font-style="normal"
				absolute-position="absolute"
				left="76mm" top="35mm">
				<fo:block>
					ПРОВЕРКА
				</fo:block>
			</fo:block-container>
		
        </fo:flow>					
      </fo:page-sequence>
    </fo:root>
</xsl:template>

</xsl:stylesheet>