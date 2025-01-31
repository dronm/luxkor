-- Function: doc_orders_inc_print()

-- DROP FUNCTION doc_orders_inc_print();

CREATE OR REPLACE FUNCTION doc_orders_inc_print(in_doc_id int)
  RETURNS integer AS $$
DECLARE
	v_cnt int;
BEGIN
	UPDATE doc_order_prints_seq INTO v_cnt SET cnt = cnt+1 WHERE doc_id = in_doc_id RETURNING cnt;
	IF FOUND THEN
		RETURN v_cnt;
	END IF;

	BEGIN
		v_cnt = 1;
		INSERT INTO doc_order_prints_seq (doc_id, cnt) VALUES (in_doc_id, 1);
	EXCEPTION WHEN OTHERS THEN
		UPDATE doc_order_prints_seq INTO v_cnt SET cnt = cnt+1 WHERE doc_id = in_doc_id RETURNING cnt;
	END;
	RETURN v_cnt;
END;	
$$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_inc_print(in_doc_id int) OWNER TO polimerplast;
