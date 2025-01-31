-- Function: public.doc_orders_process()

-- DROP FUNCTION public.doc_orders_process();

CREATE OR REPLACE FUNCTION public.doc_orders_process()
  RETURNS trigger AS
$BODY$
BEGIN
	IF (TG_WHEN='BEFORE' AND TG_OP='INSERT') THEN
		/*
		SELECT
			const_new_order_prefix_val() || coalesce(MAX( substr(t.number::varchar,length(const_new_order_prefix_val())+1)::int ),0)+1
		INTO NEW.number
		FROM doc_orders AS t
		WHERE
			substr(t.number::varchar,1,length(const_new_order_prefix_val()))=const_new_order_prefix_val();
		*/
		NEW.date_time = now()::timestamp without time zone;
		IF NEW.deliv_type='by_client' AND NEW.deliv_destination_id IS NOT NULL THEN
			NEW.deliv_destination_id = NULL;
		END IF;
		
		
		--delivery costs
		/*
		IF NEW.deliv_type='by_supplier'
		AND NEW.deliv_cost_opt_id IS NOT NULL
		AND coalesce(NEW.deliv_expenses_edit,FALSE) = FALSE
		AND coalesce(NEW.deliv_expenses,0) = 0
		THEN
			SELECT coalesce(dc.cost2,0) INTO NEW.deliv_expenses
			FROM deliv_costs AS dc
			WHERE
				dc.production_city_id=(SELECT w.production_city_id FROM warehouses w WHERE w.id = NEW.warehouse_id)
				AND dc.deliv_cost_type = 'city'
				AND dc.deliv_cost_opt_id = NEW.deliv_cost_opt_id
			LIMIT 1
			;		
		END IF;
		*/
		
		RETURN NEW;
	ELSIF (TG_WHEN='AFTER' AND TG_OP='INSERT') THEN	
		--log
		INSERT INTO doc_log (doc_type,doc_id)
		VALUES ('order'::doc_types,NEW.id);
	
		RETURN NEW;
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='UPDATE') THEN
		IF NEW.deliv_type='by_client' THEN
			NEW.deliv_destination_id = NULL;
		END IF;
		
		RETURN NEW;
	ELSIF (TG_WHEN='AFTER' AND TG_OP='UPDATE') THEN
	
		RETURN NEW;
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		--history
		DELETE FROM doc_orders_states
		WHERE doc_orders_id=OLD.id;

		--cancel causes
		DELETE FROM doc_orders_cancel_causes
		WHERE doc_id=OLD.id;
		
		DELETE FROM doc_orders_products_passports
		WHERE doc_order_id=OLD.id;

		DELETE FROM deliveries
		WHERE doc_order_id=OLD.id;

		DELETE FROM doc_order_prints_seq
		WHERE doc_id=OLD.id;
		
		/*
		DELETE FROM doc_orders_states AS st
		WHERE st.id=(
			SELECT sub.id
			FROM doc_orders_states AS sub
			WHERE sub.doc_orders_id=OLD.id
			ORDER BY sub.date_time DESC
			LIMIT 1
			);
		*/	
		--detail tables		
		DELETE FROM doc_orders_t_products WHERE doc_id=OLD.id;
		DELETE FROM doc_orders_t_cust_surveys WHERE doc_id=OLD.id;
		DELETE FROM doc_orders_t_prod_batches WHERE doc_id=OLD.id;
		
		--register actions					
											
		
		--log
		DELETE FROM doc_log WHERE
		doc_type='order'::doc_types
		AND doc_id=OLD.id;
		
		RETURN OLD;
	ELSIF (TG_WHEN='AFTER' AND TG_OP='DELETE') THEN
		RETURN OLD;
	END IF;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION public.doc_orders_process()
  OWNER TO polimerplast;

