CREATE OR REPLACE FUNCTION bool_descr(boolean)
  RETURNS text AS
$BODY$
	SELECT CASE WHEN $1 THEN 'да' ELSE 'нет' END;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION bool_descr(boolean)
  OWNER TO polimerplast;

