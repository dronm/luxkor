-- Function: text_from_template(text,text[],anyelement)

-- DROP FUNCTION text_from_template(text,text[],anyelement);

CREATE OR REPLACE FUNCTION text_from_template(text,text[],anyelement)
  RETURNS text AS
$BODY$
DECLARE
	param text;
	res text;
	param_val text;
BEGIN
	EXECUTE 'SELECT ($1).client'
	USING $3
	INTO res;
	/*
	res = $1;
	FOREACH param SLICE 1 IN ARRAY $2
	LOOP
		execute 'SELECT '||param||' FROM '||pg_typeof($3) into param_val;
		replace(res,'['||param||']',(EXECUTE SQL 'SELECT '||param||' FROM '||))
	END LOOP;
	RETURN res;
	*/
	RETURN res;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION text_from_template(text,text[],anyelement) OWNER TO polimerplast;
