--DROP function eval(expression text);
CREATE or REPLACE function eval(expression text) returns numeric
as $body$
declare
  res numeric;
begin
	EXECUTE 'SELECT '||
		CASE 
			WHEN expression IS NULL OR expression='' THEN '0'
			ELSE expression
		END		
	INTO res;
	RETURN res;
end;
$body$ language plpgsql;
ALTER function eval(expression text) OWNER TO polimerplast;