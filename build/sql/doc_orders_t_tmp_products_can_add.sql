-- Function: doc_orders_t_tmp_products_can_add(in_view_id varchar(32), in_product_id int)

-- DROP FUNCTION doc_orders_t_tmp_products_can_add(in_view_id varchar(32), in_product_id int);

CREATE OR REPLACE FUNCTION doc_orders_t_tmp_products_can_add(in_view_id varchar(32), in_product_id int)
  RETURNS boolean AS
$BODY$
	SELECT
		CASE WHEN COALESCE(COUNT(sub.*),0)>0 THEN TRUE ELSE FALSE END
	FROM (
		SELECT pw2.warehouse_id
		FROM product_warehouses AS pw2
		WHERE pw2.product_id=$2
		AND 
		(
			((SELECT COALESCE(COUNT(*),0)
			FROM doc_orders_t_tmp_products AS t
			WHERE t.view_id=$1)=0)
			
			OR
			
			(pw2.warehouse_id=ANY(
					SELECT DISTINCT(pw.warehouse_id)
					FROM product_warehouses AS pw
					WHERE pw.product_id = ANY(
						SELECT t.product_id
						FROM doc_orders_t_tmp_products AS t
						WHERE t.view_id=$1
					)	
				)
			)
		)
	) AS sub
$BODY$
LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_t_tmp_products_can_add(in_view_id varchar(32), in_product_id int)
  OWNER TO polimerplast;
