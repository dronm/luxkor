-- Function: regl_delete_tmp_data()

-- DROP FUNCTION regl_delete_tmp_data();

CREATE OR REPLACE FUNCTION regl_delete_tmp_data()
  RETURNS VOID AS
$BODY$
	DELETE FROM doc_orders_t_tmp_products
	WHERE login_id=ANY(
		SELECT id FROM logins
		WHERE date_time_out IS NOT NULL
		);
	DELETE FROM doc_orders_t_tmp_cust_surveys
	WHERE login_id=ANY(
		SELECT id FROM logins
		WHERE date_time_out IS NOT NULL
	);
$BODY$
LANGUAGE sql;
ALTER FUNCTION regl_delete_tmp_data() OWNER TO polimerplast;
