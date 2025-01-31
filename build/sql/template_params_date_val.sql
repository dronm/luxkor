-- Function: template_params_date_val(date_type_or_val text, date_from bool)

-- DROP FUNCTION template_params_date_val(date_type_or_val text, date_from bool);

CREATE OR REPLACE FUNCTION template_params_date_val(date_type_or_val text, date_from bool)
  RETURNS timestamp AS
$$
	SELECT
		CASE
			--from
			WHEN date_from AND date_type_or_val = 'cur_date' THEN
				(now()::date + '00:00:00'::interval)::timestamp
				
			WHEN date_from AND date_type_or_val = 'cur_week' THEN
				(date_trunc('week', now()))::timestamp
				
			WHEN date_from AND date_type_or_val = 'cur_month' THEN
				(date_trunc('month', now()))::timestamp
				
			WHEN date_from AND date_type_or_val = 'cur_quarter' THEN
				(quater_start(now()))::timestamp
				
			WHEN date_from AND date_type_or_val = 'cur_year' THEN
				(date_trunc('year', now()))::timestamp

			--flowers specific
			/*
			WHEN date_from AND date_type_or_val = 'cur_shift' THEN
				(now()::date + const_shift_start_time_val())::timestamp
			*/
			
			--to
			WHEN NOT date_from AND date_type_or_val = 'cur_date' THEN
				(now()::date + '23:59:59'::interval)::timestamp
				
			WHEN NOT date_from AND date_type_or_val = 'cur_week' THEN	
				(date_trunc('week', now())+'1 week'::interval-'1 day'::interval)::date + '23:59:59'::interval
				
			WHEN NOT date_from AND date_type_or_val = 'cur_month' THEN
				(date_trunc('month', now())+'1 month'::interval-'1 day'::interval)::date + '23:59:59'::interval
				
			WHEN NOT date_from AND date_type_or_val = 'cur_quarter' THEN
				(quater_start(now())+'3 months'::interval-'1 day'::interval)::date + '23:59:59'::interval
				
			WHEN NOT date_from AND date_type_or_val = 'cur_year' THEN
				(date_trunc('year', now())+'1 year'::interval-'1 day'::interval)::date + '23:59:59'::interval
				
			--flowers specific
			/*
			WHEN NOT date_from AND date_type_or_val = 'cur_shift' THEN
				( (now()::date + const_shift_start_time_val()) + const_shift_length_time_val() - '1 second'::interval)::timestamp
			*/
				
			ELSE date_type_or_val::timestamp
		END
	;
$$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION template_params_date_val(date_type_or_val text, date_from bool) OWNER TO polimerplast;
