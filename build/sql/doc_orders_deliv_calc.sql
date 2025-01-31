--DROP function doc_order_deliv_calc(integer,text);
	
CREATE or REPLACE function doc_order_deliv_calc(
	warehouse_id integer,
	points text
	)
	RETURNS TABLE(
		city_route text,
		city_cost_km numeric(15,2),
		city_cost numeric(15,2),
		country_route text,
		country_cost_km numeric(15,2),
		country_cost numeric(15,2)
		)
AS $body$
	WITH
		line AS (
			SELECT ST_MakeLine(ARRAY[$2]) AS v
		),
		costs AS(
			SELECT
				t.deliv_cost_type,
				t.cost,
				t.cost_per_km
			FROM deliv_costs t
		)
	SELECT
		--city route
		replace(replace(ST_AsText(ST_Intersection((SELECT t.v FROM line t),w.zone)),'LINESTRING(',''),')','')
		AS city_route,
		
		--Тариф city
		(SELECT t.cost_per_km
		FROM costs t
		WHERE t.deliv_cost_type='city'
		) AS city_cost_km,

		(SELECT t.cost
		FROM costs t
		WHERE t.deliv_cost_type='city'
		) AS city_cost,
		
		--country route
		replace(replace(ST_AsText(ST_Difference((SELECT t.v FROM line t),w.zone)),'LINESTRING(',''),')','')
		AS country_route,
				
		--Тариф country
		(SELECT t.cost_per_km
		FROM costs t
		WHERE t.deliv_cost_type='country'
		) AS country_cost_km,

		(SELECT t.cost
		FROM costs t
		WHERE t.deliv_cost_type='country'
		) AS country_cost
		
	FROM warehouses AS w
	WHERE w.id=$1
	;
$body$
language sql;
ALTER function doc_order_deliv_calc(integer,text) OWNER TO polimerplast;