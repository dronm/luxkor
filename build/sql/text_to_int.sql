-- Function: public.text_to_int(text, integer)

-- DROP FUNCTION public.text_to_int(text, integer);

CREATE OR REPLACE FUNCTION public.text_to_int(text, integer)
  RETURNS integer AS
$BODY$
begin
    return cast($1 as integer);
exception
    when invalid_text_representation then
        return $2;
    WHEN SQLSTATE '22003' THEN return $2;
end;

$BODY$
  LANGUAGE plpgsql IMMUTABLE
  COST 100;
ALTER FUNCTION public.text_to_int(text, integer)
  OWNER TO polimerplast;

