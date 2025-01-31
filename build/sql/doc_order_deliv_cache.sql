-- Function: public.doc_order_deliv_cache(integer, integer, boolean)

-- НЕ РОАБОЧАЯ ФУНКЦИЯ 

-- DROP FUNCTION public.doc_order_deliv_cache(integer, integer, boolean);

CREATE OR REPLACE FUNCTION public.doc_order_deliv_cache(
    IN warehouse_id integer,
    IN client_destination_id integer,
    IN include_route boolean)
  RETURNS TABLE(
  	dest text,
  	wh text,
  	city_route text,
  	city_route_distance integer,
  	city_cost numeric,
  	city_cost_km numeric,
  	country_route text,
  	country_route_distance integer,
  	country_cost numeric,
  	country_cost_km numeric
  	
  ) AS
$BODY$
	WITH cache AS (
		SELECT
			CASE $3
			WHEN TRUE THEN
				replace(replace(st_astext(ch.city_route),'LINESTRING(',''),')','')
			ELSE ''
			END AS city_route,
			ch.city_route_distance,
			
			(SELECT t.cost
			FROM deliv_costs t
			WHERE t.deliv_cost_type='city'::deliv_cost_types
			) AS city_cost,
			
			(SELECT t.cost_per_km
			FROM deliv_costs t
			WHERE t.deliv_cost_type='city'::deliv_cost_types
			) AS city_cost_km,
			
			CASE $3
			WHEN TRUE THEN
				replace(replace(st_astext(ch.country_route),'LINESTRING(',''),')','')
			ELSE ''
			END AS country_route,
			ch.country_route_distance,
			
			(SELECT t.cost
			FROM deliv_costs t
			WHERE t.deliv_cost_type='country'::deliv_cost_types
			) AS country_cost,
			
			(SELECT t.cost_per_km
			FROM deliv_costs t
			WHERE t.deliv_cost_type='country'::deliv_cost_types
			) AS country_cost_km
			
			
		FROM deliv_distance_cache AS ch
		WHERE ch.client_destination_id=$2
		AND ch.warehouse_id=$1
	)
	
	SELECT
	
	--центр зоны клиента
	(SELECT
		replace(replace(st_astext(d.zone_center),'POINT(',''),')','')
	FROM client_destinations AS d
	WHERE d.id=$2
	) AS dest,
	
	--центр зоны склада
	(SELECT
		replace(replace(st_astext(ST_Centroid(w.zone)),'POINT(',''),')','')
	FROM warehouses AS w
	WHERE w.id=$1
	) AS wh,
	
	--КЭШ
	(SELECT t.city_route FROM cache AS t) AS city_route,
	(SELECT t.city_route_distance FROM cache t) AS city_route_distance,
	(SELECT t.city_cost FROM cache t) AS city_cost,
	(SELECT t.city_cost_km FROM cache t) AS city_cost_km,
	(SELECT t.country_route FROM cache t) AS country_route,
	(SELECT t.country_route_distance FROM cache t) AS country_route_distance,
	(SELECT t.country_cost FROM cache t) AS  country_cost,
	(SELECT t.country_cost_km FROM cache t) AS  country_cost_km
	;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.doc_order_deliv_cache(integer, integer, boolean)
  OWNER TO polimerplast;

