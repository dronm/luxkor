-- Function: doc_orders_states_set_percent(in_doc_order_id int, in_percent int)

-- DROP FUNCTION doc_orders_states_set_percent(in_doc_order_id int, in_percent int);

CREATE OR REPLACE FUNCTION doc_orders_states_set_percent(in_doc_order_id int, in_percent int)
  RETURNS void AS
$BODY$
DECLARE
	v_state order_states;
	v_id int;
BEGIN
	SELECT
		state,
		id
	INTO
		v_state,
		v_id	
	FROM doc_orders_states
	WHERE doc_orders_id=in_doc_order_id
	ORDER BY date_time DESC
	LIMIT 1;
	
	IF in_percent=100 AND v_state='producing' THEN
		--перевод в выполнена
		INSERT INTO doc_orders_states
		(doc_orders_id,date_time,state,user_id)
		VALUES
		(in_doc_order_id,now(),'produced',NULL);
		
	ELSIF in_percent<100 AND v_state='produced' THEN
		--remove last state
		DELETE FROM doc_orders_states WHERE id=v_id;	
	END IF;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_states_set_percent(in_doc_order_id int, in_percent int) OWNER TO ;
