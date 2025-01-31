-- Function: product_warehouses_process()

-- DROP FUNCTION product_warehouses_process();

CREATE OR REPLACE FUNCTION product_warehouses_process()
  RETURNS trigger AS
$BODY$
DECLARE
	v_product_id int;
BEGIN
	IF (TG_WHEN='AFTER') THEN
		IF (TG_OP='INSERT') THEN
			v_product_id = NEW.product_id;
		ELSIF (TG_OP='UPDATE') THEN
			v_product_id = NEW.product_id;
		ELSE
			v_product_id = OLD.product_id;
		END IF;
		
		UPDATE products
		SET warehouses_str=(
			SELECT COALESCE(string_agg(w.name,','),'')
			FROM product_warehouses AS pw
			LEFT JOIN warehouses AS w ON w.id=pw.warehouse_id
			WHERE pw.product_id=v_product_id		
		)
		WHERE products.id=v_product_id;
		
		IF (TG_OP='INSERT' OR TG_OP='UPDATE') THEN
			RETURN NEW;
		ELSE
			RETURN OLD;
		END IF;
	END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION product_warehouses_process() OWNER TO polimerplast;
