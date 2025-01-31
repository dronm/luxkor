UPDATE street
SET
	address = str.address,
	address_descr = str.address_descr
FROM	
(SELECT
	street.code AS id,
	CASE WHEN street.index IS NULL OR street.index='' THEN '' ELSE street.index||', ' END||
	reg.name||' '||scr_reg.scname||','||
	CASE WHEN raion.code IS NULL THEN ''
		ELSE raion.name||' '||scr_raion.scname||', '
	END||

	CASE WHEN gorod.code IS NULL THEN ''
		ELSE gorod.name||' '||scr_gorod.scname||', '
	END||

	street.name||' '||scr_street.scname
	AS address_descr
	
	,
	(
	lower(scr_street.socrname)||' '||
	lower(street.name)||' '||
	CASE WHEN gorod.code IS NULL THEN '' ELSE lower(gorod.name)||' '||lower(scr_gorod.socrname)||' ' END||
	CASE WHEN reg.code IS NULL THEN '' ELSE lower(reg.name)||' '||lower(scr_reg.socrname)||' ' END||
	CASE WHEN raion.code IS NULL THEN '' ELSE lower(raion.name)||' '||lower(scr_raion.socrname) END
	)::tsvector AS address
	
FROM street
LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_street ON scr_street.scname=street.socr
LEFT JOIN kladr AS gorod ON substr(gorod.code,1,11)=street.code_part

LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_gorod ON scr_gorod.scname=gorod.socr

LEFT JOIN kladr AS reg ON substr(reg.code,1,11)=substr(street.code_part,1,2)||'000000000'
LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_reg ON scr_reg.scname=reg.socr

LEFT JOIN kladr AS raion ON raion.code=substr(street.code_part,1,5)||'00000000' AND raion.code<>substr(street.code_part,1,2)||'00000000000'
LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_raion ON scr_raion.scname=raion.socr

--WHERE street.code='72000001000012400' OR street.code='72001000018000900'
) AS str
WHERE street.code = str.id and street.address_descr IS NULL



CREATE INDEX street_address_idx ON street USING gin(address);

SELECT address,address_descr FROM street WHERE address @@ to_tsquery('сакко') limit 5;
--plainto_tsquery('сакко') limit 5;

SELECT to_tsvector('Это мой пример некоторого теста') @@ plainto_tsquery('мой тест');


CREATE INDEX street_code
  ON public.street
  USING btree
  (code COLLATE pg_catalog."default");

CREATE INDEX street_code_part_idx
  ON public.street
  USING btree
  (code_part COLLATE pg_catalog."default");

CREATE INDEX street_lower_name_
  ON public.street
  USING btree
  (lower(name::text) COLLATE pg_catalog."default");



UPDATE street
SET
	address = str.address,
	address_descr = str.address_descr
FROM	
(SELECT
	street.code AS id,
	CASE WHEN street.index IS NULL OR street.index='' THEN '' ELSE street.index||', ' END||
	reg.name||' '||scr_reg.scname||','||
	CASE WHEN raion.code IS NULL THEN ''
		ELSE raion.name||' '||scr_raion.scname||', '
	END||

	CASE WHEN gorod.code IS NULL THEN ''
		ELSE gorod.name||' '||scr_gorod.scname||', '
	END||

	street.name||' '||scr_street.scname
	AS address_descr
	
	,
	to_tsvector(
	street.name||
	CASE WHEN gorod.code IS NULL THEN '' ELSE ' '||lower(gorod.name) END||
	CASE WHEN reg.code IS NULL THEN '' ELSE ' '||lower(reg.name) END||
	CASE WHEN raion.code IS NULL THEN '' ELSE ' '||lower(raion.name) END
	
	) AS address
	
	/*
	(
	lower(scr_street.socrname)||' '||
	lower(street.name)||' '||
	CASE WHEN gorod.code IS NULL THEN '' ELSE lower(gorod.name)||' '||lower(scr_gorod.socrname)||' ' END||
	CASE WHEN reg.code IS NULL THEN '' ELSE lower(reg.name)||' '||lower(scr_reg.socrname)||' ' END||
	CASE WHEN raion.code IS NULL THEN '' ELSE lower(raion.name)||' '||lower(scr_raion.socrname) END
	)::tsvector AS address
	*/
	
FROM street
LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_street ON scr_street.scname=street.socr
LEFT JOIN kladr AS gorod ON substr(gorod.code,1,11)=street.code_part

LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_gorod ON scr_gorod.scname=gorod.socr

LEFT JOIN kladr AS reg ON substr(reg.code,1,11)=substr(street.code_part,1,2)||'000000000'
LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_reg ON scr_reg.scname=reg.socr

LEFT JOIN kladr AS raion ON raion.code=substr(street.code_part,1,5)||'00000000' AND raion.code<>substr(street.code_part,1,2)||'00000000000'
LEFT JOIN (SELECT DISTINCT scname,socrname FROM socrbase) AS scr_raion ON scr_raion.scname=raion.socr

) AS str
WHERE street.code = str.id

