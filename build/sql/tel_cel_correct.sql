-- Function: tel_cel_correct(text)

-- DROP FUNCTION tel_cel_correct(text);

CREATE OR REPLACE FUNCTION tel_cel_correct(tel_cel text)
  RETURNS boolean AS
$BODY$
	WITH dig AS (
		SELECT
			regexp_replace($1, '[^0-9]+', '', 'g')
		AS tel
	
	)	
	SELECT
		--корректная длина
		(
			(
				(substr((SELECT dig.tel FROM dig),1,1)='7' OR substr((SELECT dig.tel FROM dig),1,1)='8')
				AND length((SELECT dig.tel FROM dig))=11
			)
			OR
			(
				(substr((SELECT dig.tel FROM dig),1,1)<>'7' AND substr((SELECT dig.tel FROM dig),1,1)<>'8')
				AND length((SELECT dig.tel FROM dig))=10
			)
		)
		
		AND 
		
		(
			CASE 
				WHEN length((SELECT dig.tel FROM dig))=11 THEN substr((SELECT dig.tel FROM dig),2,3)
				ELSE substr((SELECT dig.tel FROM dig),1,3)
			END
			IN (SELECT id::text FROM tel_prefix)
		)
$BODY$
  LANGUAGE sql STABLE;
ALTER FUNCTION tel_cel_correct(text)
  OWNER TO polimerplast;

