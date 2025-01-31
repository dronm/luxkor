-- VIEW: kladr_naspunkt

DROP VIEW kladr_naspunkt;

CREATE OR REPLACE VIEW kladr_naspunkt AS
	SELECT 
		k.code,
		k.name||' '||k.socr AS name,
		--k.socr,
		substr(k.code,1,2)||'00000000000' AS region_code,
		(SELECT t.name||' '||t.socr FROM kladr AS t WHERE t.code = substr(k.code,1,2)||'00000000000') AS region_name,
		
		substr(k.code,1,5)||'00000000' AS raion_code,
		CASE
			WHEN substr(k.code,3,3)='000' THEN ''
			ELSE (SELECT t.name||' '||t.socr FROM kladr AS t WHERE t.code = substr(k.code,1,5)||'00000000')||','
		END AS raion_name,
	
		(SELECT t.name||' '||t.socr FROM kladr AS t WHERE t.code = substr(k.code,1,2)||'00000000000')
		||','||
		CASE
			WHEN substr(k.code,3,3)='000' THEN ''
			ELSE (SELECT t.name||' '||t.socr FROM kladr AS t WHERE t.code = substr(k.code,1,5)||'00000000')||','
		END	
		||k.name||' '||k.socr
		AS full_name
	FROM kladr AS k
	LEFT JOIN plpl_prior_regions AS prior ON prior.code=substr(k.code,1,2)
	WHERE 
		NOT k.code LIKE substr(k.code,1,2)||'___00000000'
	ORDER BY prior.sort,code,name
	;
	
ALTER VIEW kladr_naspunkt OWNER TO postgres;
GRANT ALL ON TABLE public.kladr TO postgres;
GRANT SELECT ON TABLE public.kladr_naspunkt TO polimerplast;
