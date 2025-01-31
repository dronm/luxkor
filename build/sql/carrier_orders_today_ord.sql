-- Function: carrier_orders_today_ord(timestamp without time zone)

--DROP FUNCTION carrier_orders_today_ord(timestamp without time zone);

CREATE OR REPLACE FUNCTION carrier_orders_today_ord(timestamp without time zone)
  RETURNS int AS
$$
	WITH
		diff AS (SELECT ($1::date-'2017-10-01'::date)::int AS v),
		cnt AS (SELECT count(*)::int AS v FROM carrier_orders)
	SELECT 
		(SELECT diff.v FROM diff)-
		( (SELECT diff.v FROM diff) / (SELECT cnt.v FROM cnt) * (SELECT cnt.v FROM cnt) )
		+1
	;
$$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION carrier_orders_today_ord(timestamp without time zone) OWNER TO ;
