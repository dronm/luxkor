-- Function: deliv_date_calc(order_id int,to_production_date date)

-- DROP FUNCTION deliv_date_calc(order_id int,to_production_date date);

CREATE OR REPLACE FUNCTION deliv_date_calc(order_id int,to_production_date date)
  RETURNS record AS
$$
	WITH dates AS (
		SELECT 	
			o.delivery_plan_date,
			/*
			CASE
				WHEN cl.pay_type='with_delay'::payment_types THEN o.delivery_plan_date
			ELSE
				bank_day_next( ($2+bank_day_diff(o.date_time::date,o.delivery_plan_date))::date )
			END
			*/
			-- ОТМЕНИЛИ ВЕСЬ СДВИГ ДАТЫ СОВСЕМ 12/04/16
			o.delivery_plan_date AS d
		FROM doc_orders o
		LEFT JOIN clients cl ON cl.id=o.client_id
		WHERE o.id=$1
	)
	SELECT 
		(SELECT dates.d FROM dates) AS delivery_plan_date,
		(SELECT dates.d=dates.delivery_plan_date FROM dates) AS delivery_plan_date_correct
	;
$$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION deliv_date_calc(order_id int,to_production_date date) OWNER TO polimerplast;
