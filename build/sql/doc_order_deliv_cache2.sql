-- Function: public.doc_order_deliv_cache(integer, integer, boolean, integer, integer)

-- DROP FUNCTION public.doc_order_deliv_cache(integer, integer, boolean, integer, integer);

CREATE OR REPLACE FUNCTION public.doc_order_deliv_cache(
    IN warehouse_id integer,
    IN client_destination_id integer,
    IN include_route boolean,
    IN deliv_cost_opt_id integer,
    IN production_city_id integer)
  RETURNS TABLE(
  	dest_near_road_lon numeric,
  	dest_near_road_lat numeric,
  	wh_near_road_lon numeric,
  	wh_near_road_lat numeric,
  	city_route text,
  	city_route_distance integer,
  	city_cost numeric,
  	country_route text,
  	country_route_distance integer,
  	country_cost numeric,
  	city_cost2 numeric,
  	country_cost2 numeric
  ) AS
$BODY$
	WITH
		w_data AS (
		SELECT
			w.near_road_lon,
			w.near_road_lat
		FROM warehouses w
		WHERE w.id=$1
		),
		dest_data AS (
		SELECT
			d.near_road_lon,
			d.near_road_lat
		FROM client_destinations d
		WHERE d.id=$2
		),
		
		/*
		prod_city AS (
			SELECT
				w.production_city_id AS id,
				w.near_road_lon,
				w.near_road_lat,
			FROM warehouses w
			WHERE w.id=$1
		),
		*/
		cache AS (
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
				AND t.deliv_cost_opt_id=$4
				AND t.production_city_id=$5
			) AS city_cost,
			
			CASE $3
			WHEN TRUE THEN
				replace(replace(st_astext(ch.country_route),'LINESTRING(',''),')','')
			ELSE ''
			END AS country_route,
			ch.country_route_distance,
			
			(SELECT t.cost
			FROM deliv_costs t
			WHERE t.deliv_cost_type='country'::deliv_cost_types
				AND t.deliv_cost_opt_id=$4
				AND t.production_city_id=$5
			) AS country_cost,
			
			(SELECT t.cost2
			FROM deliv_costs t
			WHERE t.deliv_cost_type='city'::deliv_cost_types
				AND t.deliv_cost_opt_id=$4
				AND t.production_city_id=$5
			) AS city_cost2,
			
			(SELECT t.cost2
			FROM deliv_costs t
			WHERE t.deliv_cost_type='country'::deliv_cost_types
				AND t.deliv_cost_opt_id=$4
				AND t.production_city_id=$5
			) AS country_cost2
			
			
		FROM deliv_distance_cache AS ch
		WHERE ch.client_destination_id=$2
		AND ch.warehouse_id=$1
	)
	
	SELECT
		(SELECT t.near_road_lon FROM dest_data t) AS dest_near_road_lon,
		(SELECT t.near_road_lat FROM dest_data t) AS dest_near_road_lat,
	
		(SELECT t.near_road_lon FROM w_data t) AS wh_near_road_lon,
		(SELECT t.near_road_lat FROM w_data t) AS wh_near_road_lat,
	/*
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
	*/
	--КЭШ
	(SELECT t.city_route FROM cache AS t) AS city_route,
	(SELECT t.city_route_distance FROM cache t) AS city_route_distance,
	(SELECT t.city_cost FROM cache t) AS city_cost,
	(SELECT t.country_route FROM cache t) AS country_route,
	(SELECT t.country_route_distance FROM cache t) AS country_route_distance,
	(SELECT t.country_cost FROM cache t) AS  country_cost,
	
	(SELECT t.city_cost2 FROM cache t) AS city_cost2,
	(SELECT t.country_cost2 FROM cache t) AS  country_cost2
	;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.doc_order_deliv_cache(integer, integer, boolean, integer, integer)
  OWNER TO polimerplast;

