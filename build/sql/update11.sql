--constant value table
		CREATE TABLE IF NOT EXISTS const_new_order_prefix
		(name text, descr text, val  varchar(3));
		ALTER TABLE const_new_order_prefix OWNER TO polimerplast;
		INSERT INTO const_new_order_prefix (name,descr,val) VALUES (
			'Префикс новых заявок',
			'',
			'Н'
		);
	
		--constant get value
		CREATE OR REPLACE FUNCTION const_new_order_prefix_val()
		RETURNS  varchar(3) AS
		$BODY$
			SELECT val:: varchar(3) AS val FROM const_new_order_prefix LIMIT 1;
		$BODY$
		LANGUAGE sql VOLATILE COST 100;
		ALTER FUNCTION const_new_order_prefix_val() OWNER TO polimerplast;
		
		--constant set value
		CREATE OR REPLACE FUNCTION const_new_order_prefix_set_val(varchar(3))
		RETURNS void AS
		$BODY$
			UPDATE const_new_order_prefix SET val=$1;
		$BODY$
		LANGUAGE sql VOLATILE COST 100;
		ALTER FUNCTION const_new_order_prefix_set_val(varchar(3)) OWNER TO polimerplast;
		
		--edit view: all keys and descr
		CREATE OR REPLACE VIEW const_new_order_prefix_view AS
		SELECT t.name,t.descr
		,t.val::text AS val_descr
		FROM const_new_order_prefix AS t
		
		;
		ALTER VIEW const_new_order_prefix_view OWNER TO polimerplast;
	
