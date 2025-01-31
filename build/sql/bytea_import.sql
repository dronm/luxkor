--DROP FUNCTION bytea_import(p_path text, p_result out bytea);

CREATE OR REPLACE FUNCTION
bytea_import(p_path text, p_result out bytea) AS
$BODY$
DECLARE
  l_oid oid;
  r record;
BEGIN
  p_result := '';
  select lo_import(p_path) into l_oid;
  for r in ( select data 
             from pg_largeobject 
             where loid = l_oid 
             order by pageno ) loop
    p_result = p_result || r.data;
  end loop;
  perform lo_unlink(l_oid);
end;
$BODY$
LANGUAGE plpgsql;

ALTER FUNCTION bytea_import(p_path text, p_result out bytea) OWNER TO polimerplast;