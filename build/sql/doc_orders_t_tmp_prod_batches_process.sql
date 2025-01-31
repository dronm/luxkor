-- FUNCTION: public.doc_orders_t_tmp_prod_batches_process()

-- DROP FUNCTION IF EXISTS public.doc_orders_t_tmp_prod_batches_process();

CREATE OR REPLACE FUNCTION public.doc_orders_t_tmp_prod_batches_process()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN
	IF (TG_WHEN='BEFORE' AND TG_OP='INSERT') THEN
		SELECT coalesce(MAX(t.line_number),0)+1 INTO NEW.line_number
		FROM doc_orders_t_tmp_prod_batches AS t
		WHERE t.view_id=NEW.view_id;
		--raise exception 'NEW.line_number=%', NEW.line_number;
		RETURN NEW;
		
	ELSIF (TG_WHEN='AFTER' AND TG_OP='INSERT') THEN
		RETURN NEW;
		
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='UPDATE') THEN
		
		RETURN NEW;					
		
	ELSIF (TG_WHEN='AFTER' AND TG_OP='UPDATE') THEN
		RETURN NEW;									
		
	ELSIF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		RETURN OLD;
		
	ELSIF (TG_WHEN='AFTER' AND TG_OP='DELETE') THEN
		
		UPDATE  doc_orders_t_tmp_prod_batches t
		SET line_number = p.line_number - 1
		FROM    (
			SELECT  line_number,view_id			
			FROM    doc_orders_t_tmp_prod_batches AS tmp
			WHERE   tmp.view_id=OLD.view_id AND tmp.line_number>OLD.line_number
			ORDER BY tmp.line_number ASC
		) p 
		WHERE t.view_id = p.view_id AND t.line_number = p.line_number;
		
		RETURN OLD;
	END IF;
END;
$BODY$;

ALTER FUNCTION public.doc_orders_t_tmp_prod_batches_process()
    OWNER TO ;

