-- Function: public.warehouse_list_for_order(integer, integer)

-- DROP FUNCTION public.warehouse_list_for_order(integer, integer);

CREATE OR REPLACE FUNCTION public.warehouse_list_for_order(
    IN in_login_id integer,
    IN in_product_id integer)
  RETURNS TABLE(id integer, name text) AS
$BODY$
	(SELECT
		w.id,
		w.name::text
	FROM warehouses w
	WHERE $2=0 AND coalesce(deleted,FALSE)=FALSE)
	
	UNION
	
	(SELECT
		DISTINCT(sub.warehouse_id),
		w.name::text
	FROM	
	(
	(SELECT pw.warehouse_id
	FROM product_warehouses AS pw
	WHERE pw.product_id=$2
		/*
		AND pw.warehouse_id=ANY(
			SELECT DISTINCT(pw.warehouse_id)
			FROM product_warehouses AS pw
			WHERE pw.product_id = ANY(
				SELECT t.product_id
				FROM doc_orders_t_tmp_products AS t
				WHERE t.login_id=$1
				)		
			)
		*/
	)
	/*
	UNION

	(SELECT DISTINCT(pw.warehouse_id)
	FROM product_warehouses AS pw
	WHERE pw.product_id = ANY(
		SELECT t.product_id
		FROM doc_orders_t_tmp_products AS t
		WHERE t.login_id=$1
		)
	)
	*/
	) AS sub
	LEFT JOIN warehouses AS w ON w.id=sub.warehouse_id
	WHERE $2>0
	ORDER BY w.name::text)
	;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.warehouse_list_for_order(integer, integer)
  OWNER TO polimerplast;

