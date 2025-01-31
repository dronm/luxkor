/*Function: pay_date(
	in_ship_date date,
	in_pay_type payment_types,
	in_delay_days integer,
	in_fix_to_dow boolean,
	in_dow integer[])
*/

/*DROP FUNCTION pay_date(
	in_ship_date date,
	in_pay_type payment_types,
	in_delay_days integer,
	in_fix_to_dow boolean,
	in_dow integer[])
*/

CREATE OR REPLACE FUNCTION pay_date(
	in_ship_date date,
	in_pay_type payment_types,
	in_delay_days integer,
	in_fix_to_dow boolean,
	in_dow integer[]
	)
RETURNS date AS
$BODY$
	WITH
		pay_day AS (SELECT ($1+($3||' days')::interval)::date AS d),
		max_dow AS (SELECT max(x) AS dow FROM unnest($5) x),
		min_dow AS (SELECT min(x) AS dow FROM unnest($5) x)
	SELECT
		CASE
			/* Без привязки к дню недели
			- первый рабочий день*/
			WHEN $2='with_delay'
			AND $4=FALSE
			THEN
				work_day(
					(SELECT t.d FROM pay_day t)
				)

			/* С привязкой к дню недели */
			WHEN $2='with_delay'
			AND $4
			THEN
				CASE
					/* если есть значение берем его*/
					WHEN
						EXTRACT(DOW FROM (SELECT t.d FROM pay_day t)) = ANY($5)
					THEN
						(SELECT t.d FROM pay_day t)
					
					
					/*меньше минимального
					то МИНИМУМ на этой неделе
					*/
					WHEN
						EXTRACT(DOW FROM (SELECT t.d FROM pay_day t))<(SELECT t.dow FROM min_dow t)
					THEN
						(SELECT t.d FROM pay_day t)
						+
						((SELECT t.dow FROM min_dow t) -
						EXTRACT(DOW FROM (SELECT t.d FROM pay_day t))							
						||' days')::interval
					
					/*больше максимального
					то МИНИМУМ на след неделе
					*/
					WHEN
						(EXTRACT(DOW FROM (SELECT t.d FROM pay_day t))>(SELECT t.dow FROM max_dow t))
					THEN
						(SELECT t.d FROM pay_day t)
						+
						(
							(7 - EXTRACT(DOW FROM (SELECT t.d FROM pay_day t)) +
							(SELECT t.dow FROM min_dow t)
							)
						||' days')::interval
						
					/* иначе ближайшее бОльшее значение*/
					ELSE
						(SELECT t.d FROM pay_day t) + 
						(
							(SELECT v FROM unnest($5) v
							WHERE v>EXTRACT(DOW FROM (SELECT t.d FROM pay_day t))
							LIMIT 1) - 
							EXTRACT(DOW FROM (SELECT t.d FROM pay_day t))
						||'days')::interval
				END
			ELSE $1
		END::date;
$BODY$
LANGUAGE sql IMMUTABLE STRICT COST 100;	
ALTER FUNCTION pay_date(
	in_ship_date date,
	in_pay_type payment_types,
	in_delay_days integer,
	in_fix_to_dow boolean,
	in_dow integer[])
OWNER TO polimerplast;