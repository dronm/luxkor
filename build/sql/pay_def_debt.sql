--DROP FUNCTION pay_def_debt(in_firm_id int,in_client_id int,in_debt numeric);

/*
Возвращает просроченные долги по
фирме/клиенту/сумме долга из 1с
по датам когда надо было платить
*/
-- Function: public.pay_def_debt(integer, integer, numeric)

-- DROP FUNCTION public.pay_def_debt(integer, integer, numeric);

CREATE OR REPLACE FUNCTION public.pay_def_debt(IN in_firm_id integer, IN in_client_id integer, IN in_debt numeric)
  RETURNS TABLE(pay_date date, total numeric) AS
$BODY$
	WITH
		debt AS (SELECT $3 AS val),

		client_pay AS (SELECT
			(cl.pay_type='cash'::payment_types OR cl.pay_type='in_advance'::payment_types) AS no_sched
			FROM clients cl WHERE cl.id=$2)

	SELECT 
		def_debts.pay_date,
		SUM(def_debts.def_debt) AS total
	FROM 	
	(
	SELECT
		sub.id,
		sub.date_time,
		sub.total,
		sub.debt,
		CASE
			WHEN (SELECT no_sched FROM client_pay)
			AND sub.date_time::date < now()::date THEN
				--always default!!!
				sub.date_time::date+'1 day'::interval
			ELSE sch.pay_date
		END::date AS pay_date,
		
		CASE
			WHEN (SELECT no_sched FROM client_pay)
			AND sub.date_time::date < now()::date THEN
				--always default!!!
				sub.debt
			WHEN sch.pay_date::date<now()::date THEN sub.debt
			ELSE 0
		END AS def_debt
	FROM 	
	(	
		SELECT
			id,
			delivery_fact_date AS date_time,
			total,
			CASE 
				WHEN (SELECT t.val FROM debt t) > sum(total) OVER (ORDER BY date_time DESC) THEN
					total
				WHEN (sum(total) OVER (ORDER BY date_time DESC) - (SELECT t.val FROM debt t)) <= total THEN
					total - (sum(total) OVER (ORDER BY date_time DESC) - (SELECT t.val FROM debt t))
				ELSE 0
			END AS debt
		FROM doc_orders
		WHERE client_id=$2
		AND firm_id=$1
		AND delivery_fact_date IS NOT NULL
		ORDER BY delivery_fact_date DESC
	) AS sub

	LEFT JOIN client_pay_schedules AS sch ON sch.doc_id=sub.id

	WHERE sub.debt>0
	) AS def_debts
	GROUP BY def_debts.pay_date
	HAVING SUM(def_debts.def_debt)>0;
$BODY$
  LANGUAGE sql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.pay_def_debt(integer, integer, numeric)
  OWNER TO polimerplast;

