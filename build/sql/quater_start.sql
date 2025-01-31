-- Function: quater_start(timestamp with time zone)

-- DROP FUNCTION quater_start(timestamp with time zone);

CREATE OR REPLACE FUNCTION quater_start(timestamp with time zone)
  RETURNS timestamp with time zone AS
$BODY$
	SELECT
		(EXTRACT( YEAR FROM $1)::text
		||'-'||
		CASE
			WHEN EXTRACT(MONTH FROM $1)<4 THEN '01'
			WHEN EXTRACT(MONTH FROM $1)<7 THEN '04'
			WHEN EXTRACT(MONTH FROM $1)<10 THEN '07'
			ELSE '10'
		END
		||'-01 00:00:00')::timestampTZ
	;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION quater_start(timestamp with time zone)
  OWNER TO polimerplast;

