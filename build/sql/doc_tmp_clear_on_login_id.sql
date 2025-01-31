-- Function: doc_tmp_clear_on_login_id(in_login_id integer)

-- DROP FUNCTION doc_tmp_clear_on_login_id(in_login_id integer);

CREATE OR REPLACE FUNCTION doc_tmp_clear_on_login_id(in_login_id integer)
  RETURNS void AS
$$
	DELETE FROM doc_orders_t_tmp_products WHERE login_id=$1;
	DELETE FROM doc_orders_t_tmp_cust_surveys WHERE login_id=$1;
$$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION doc_tmp_clear_on_login_id(in_login_id integer) OWNER TO polimerplast;
