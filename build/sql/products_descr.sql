--DROP FUNCTION products_descr(products,l int,w int,h int,for_1c boolean, firm_id int);

CREATE or REPLACE FUNCTION products_descr(products, l int, w int, h int, for_1c boolean, firm_id int)
RETURNS text
AS $body$
	SELECT
		CASE
			WHEN $5 THEN
				 coalesce(
				 	(SELECT p_nm.name_for_1c
					FROM product_1c_names AS p_nm
					WHERE p_nm.product_id = $1.id AND p_nm.firm_id = $6
				)
				, $1.name_for_1c)
			ELSE $1.name
		END
		|| ' '||
		array_to_string(
			ARRAY[
				CASE
					WHEN $1.mes_length_exists THEN $2
					ELSE NULL
				END,
				CASE
					WHEN $1.mes_width_exists THEN $3
					ELSE NULL
				END,
				CASE
					WHEN $1.mes_height_exists THEN $4
					ELSE NULL
				END		
			],'x',''
		);
	
$body$ LANGUAGE sql;
ALTER function products_descr(products,l int,w int,h int,for_1c boolean, firm_id int)
	OWNER TO polimerplast;
