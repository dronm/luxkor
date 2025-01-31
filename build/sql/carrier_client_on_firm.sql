-- Function: carrier_client_on_firm(in_client_ids_on_firm jsonb, in_firm_id int)

-- DROP FUNCTION carrier_client_on_firm(in_firm_id int);

CREATE OR REPLACE FUNCTION carrier_client_on_firm(in_client_ids_on_firm jsonb, in_firm_id int)
  RETURNS int AS
$$
	SELECT
		(sub.client_id_on_firm->>'client_id')::int AS client_id
	FROM(
		SELECT jsonb_array_elements(in_client_ids_on_firm) client_id_on_firm
	) AS sub
		WHERE (sub.client_id_on_firm->>'firm_id')::int=in_firm_id
$$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION carrier_client_on_firm(in_client_ids_on_firm jsonb, in_firm_id int) OWNER TO ;
