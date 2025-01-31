-- Function: products_process()

-- DROP FUNCTION products_process();

CREATE OR REPLACE FUNCTION products_process()
  RETURNS trigger AS
$BODY$
BEGIN
	IF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		--
		DELETE FROM product_custom_size_prices WHERE product_id=OLD.id;

		--
		DELETE FROM product_measure_units WHERE product_id=OLD.id;

		--
		DELETE FROM product_warehouses WHERE product_id=OLD.id;

		--
		DELETE FROM product_1c_names WHERE product_id=OLD.id;

		RETURN OLD;
	END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION products_process()
  OWNER TO polimerplast;
