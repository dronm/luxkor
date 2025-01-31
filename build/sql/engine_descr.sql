-- Function: engine_descr(character)

-- DROP FUNCTION engine_descr(character);

CREATE OR REPLACE FUNCTION engine_descr(character)
  RETURNS text AS
$BODY$
	SELECT 
		CASE $1
			WHEN '1' THEN 'вкл.'
			ELSE 'выкл.'
		END;
	
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION engine_descr(character)
  OWNER TO polimerplast;
