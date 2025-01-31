-- Function: price_list_tune(int,boolean)

--DROP FUNCTION price_list_tune(int,boolean);

CREATE OR REPLACE FUNCTION price_list_tune(
	IN in_production_city_id int,
	IN in_to_third_party_only boolean)
RETURNS TABLE(
	production_city_id int,
	production_city_descr text,	
	to_third_party_only boolean,
	price_list_id integer,
	price_list_descr text,
	product_id integer,
	product_descr text,
	price numeric
	) AS
$BODY$
	SELECT
		pr.production_city_id AS production_city_id,
		city.name::text AS production_city_descr,
		pr.to_third_party_only,
		pr.id AS price_list_id,
		pr.name::text AS price_list_descr,
		p.id AS product_id,
		p.name::text AS product_descr,
		COALESCE(pr_p.price,0) AS price
	FROM products AS p
	LEFT JOIN client_price_list_products AS pr_p
		ON pr_p.product_id=p.id
	LEFT JOIN client_price_lists AS pr
		ON pr.id=pr_p.price_list_id
	LEFT JOIN production_cities AS city ON city.id=pr.production_city_id
	WHERE 
		($1 IS NULL OR ($1 IS NOT NULL AND $1=pr.production_city_id))
		AND ($2 IS NULL OR ($2 IS NOT NULL AND $2=pr.to_third_party_only))
	ORDER BY p.name;
$BODY$
LANGUAGE sql VOLATILE CALLED ON NULL INPUT COST 100;	
ALTER FUNCTION price_list_tune(int,boolean) OWNER TO polimerplast;

