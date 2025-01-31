-- Function: work_day(date)

-- DROP FUNCTION work_day(date);

CREATE OR REPLACE FUNCTION work_day(date)
  RETURNS date AS
$BODY$
	SELECT
		CASE
			WHEN EXTRACT(DOW FROM $1)=6 THEN
				($1+'2 days'::interval)::date
			WHEN EXTRACT(DOW FROM $1)=0 THEN
				($1+'1 day'::interval)::date			
			ELSE $1
		END
	;
$BODY$
  LANGUAGE sql STABLE
  COST 100;
ALTER FUNCTION work_day(date) OWNER TO polimerplast;
