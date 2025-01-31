-- Function: doc_orders_t_tmp_products_process()

-- DROP FUNCTION doc_orders_t_tmp_products_process();

CREATE OR REPLACE FUNCTION doc_orders_t_tmp_products_process()
  RETURNS trigger AS
$BODY$
BEGIN
	IF (TG_WHEN='BEFORE' AND TG_OP='INSERT') THEN
		IF NOT doc_orders_t_tmp_products_can_add(NEW.view_id,NEW.product_id) THEN
			RAISE 'Данный вид продукции невозможно отгрузить с другими видами продукции документа!';
		END IF;
		
		
		SELECT coalesce(MAX(t.line_number),0)+1 INTO NEW.line_number
		FROM doc_orders_t_tmp_products AS t
		WHERE t.view_id=NEW.view_id;
		--(NEW.view_id IS NOT NULL AND t.view_id=NEW.view_id)
		-- OR (NEW.view_id IS NULL AND t.login_id=NEW.login_id);
		/*
		NEW.total = NEW.total_no_deliv;
		NEW.price = NEW.price_no_deliv;
		NEW.total_deliv = 0;
		*/
		IF coalesce(NEW.total_deliv,0) = 0 THEN
			NEW.total = NEW.total_no_deliv;
			NEW.price = NEW.price_no_deliv;
		END IF;	
		
		
		RETURN NEW;
		
	ELSIF (TG_WHEN='AFTER' AND TG_OP='INSERT') THEN
		RETURN NEW;
		
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='UPDATE') THEN
		
		IF coalesce(NEW.total_deliv,0) = 0 THEN
			NEW.total = NEW.total_no_deliv;
			NEW.price = NEW.price_no_deliv;
		END IF;	
		
	
		RETURN NEW;					
	ELSIF (TG_WHEN='AFTER' AND TG_OP='UPDATE') THEN
		RETURN NEW;									
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		RETURN OLD;
	ELSIF (TG_WHEN='AFTER' AND TG_OP='DELETE') THEN
		/*
		UPDATE doc_orders_t_tmp_products
		SET line_number = line_number - 1
		WHERE view_id=OLD.view_id AND line_number>OLD.line_number;
		*/
		
		UPDATE  doc_orders_t_tmp_products t
		SET line_number = p.line_number - 1
		FROM    (
			SELECT  line_number,view_id			
			FROM    doc_orders_t_tmp_products AS tmp
			WHERE   tmp.view_id=OLD.view_id AND tmp.line_number>OLD.line_number
			ORDER BY tmp.line_number ASC
		) p 
		WHERE t.view_id = p.view_id AND t.line_number = p.line_number;
		
		RETURN OLD;
	END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_t_tmp_products_process()
  OWNER TO polimerplast;
