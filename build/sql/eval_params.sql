--DROP function eval_params(text,integer,integer,integer);
--length,width,height
CREATE or REPLACE function eval_params(
	formula text,
	mes_l integer,
	mes_w integer,
	mes_h integer)
	RETURNS text
AS $body$
	SELECT
		replace(
			lower(replace(
				lower(replace(lower($1),'д',(CASE WHEN $2 IS NULL THEN '' ELSE $2::text END)::text||'::numeric')),
				'ш',(CASE WHEN $3 IS NULL THEN '' ELSE $3::text END)::text||'::numeric'
			)),
			'в',(CASE WHEN $4 IS NULL THEN '' ELSE $4::text END)::text||'::numeric'
		)
		;
$body$ language sql;
ALTER function eval_params(text,integer,integer,integer) OWNER TO polimerplast;