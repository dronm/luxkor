CREATE OR REPLACE FUNCTION date10_descr(date)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'DD/MM/YYYY');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date10_descr(date) OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION date10_time6_descr(timestamp without time zone)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'DD/MM/YYYY HH24:MI');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date10_time6_descr(timestamp without time zone)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION date10_time8_descr(timestamp without time zone)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'DD/MM/YYYY HH24:MI:SS');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date10_time8_descr(timestamp without time zone)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION date5_time5_descr(timestamp without time zone)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'DD/MM HH24:MI');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date5_time5_descr(timestamp without time zone)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION date8_descr(date)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'DD/MM/YY');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date8_descr(date)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION date8_time5_descr(timestamp without time zone)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'DD/MM/YY HH24:MI');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date8_time5_descr(timestamp without time zone)
  OWNER TO polimerplast;
CREATE OR REPLACE FUNCTION date8_time8_descr(timestamp without time zone)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'DD/MM/YY HH24:MI:SS');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date8_time8_descr(timestamp without time zone)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION time5_descr(time without time zone)
  RETURNS character varying AS
$BODY$
	SELECT to_char($1,'HH24:MI');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION time5_descr(time without time zone)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION time5_descr(interval)
  RETURNS text AS
$BODY$
	SELECT to_char($1,'HH24:MI');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION time5_descr(interval) OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION get_date_str_rus(date)
  RETURNS character varying AS
$BODY$
DECLARE
	v_months varchar[12];
BEGIN
	v_months[0] = 'Января';
	v_months[1] = 'Февраля';
	v_months[2] = 'Марта';
	v_months[3] = 'Апреля';
	v_months[4] = 'Мая';
	v_months[5] = 'Июня';
	v_months[6] = 'Июля';
	v_months[7] = 'Августа';
	v_months[8] = 'Сентября';
	v_months[9] = 'Октября';
	v_months[10] = 'Ноября';
	v_months[11] = 'Декабря';
	RETURN EXTRACT(DAY FROM $1) || ' ' || v_months[date_part('month',$1)-1] || ' ' || date_part('year',$1);
END;
$BODY$
  LANGUAGE plpgsql IMMUTABLE
  COST 100;
ALTER FUNCTION get_date_str_rus(date)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION dow_descr(date)
  RETURNS character varying AS
$BODY$
	SELECT
		CASE EXTRACT(DOW FROM $1)
			WHEN 0 THEN 'Воскресенье'
			WHEN 1 THEN 'Понедельник'
			WHEN 2 THEN 'Вторник'
			WHEN 3 THEN 'Среда'
			WHEN 4 THEN 'Четверг'
			WHEN 5 THEN 'Пятница'
			ELSE 'Суббота'
		END;
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION dow_descr(date)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION dow_descr_short(date)
  RETURNS character varying AS
$BODY$
	SELECT
		CASE EXTRACT(DOW FROM $1)
			WHEN 0 THEN 'Вс'
			WHEN 1 THEN 'Пн'
			WHEN 2 THEN 'Вт'
			WHEN 3 THEN 'Ср'
			WHEN 4 THEN 'Чт'
			WHEN 5 THEN 'Пт'
			ELSE 'Сб'
		END;
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION dow_descr_short(date)
  OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION get_month_rus(date)
  RETURNS character varying AS
$BODY$
DECLARE
	v_months varchar[12];
BEGIN
	v_months[0] = 'Января';
	v_months[1] = 'Февраля';
	v_months[2] = 'Марта';
	v_months[3] = 'Апреля';
	v_months[4] = 'Мая';
	v_months[5] = 'Июня';
	v_months[6] = 'Июля';
	v_months[7] = 'Августа';
	v_months[8] = 'Сентября';
	v_months[9] = 'Октября';
	v_months[10] = 'Ноября';
	v_months[11] = 'Декабря';
	RETURN v_months[date_part('month',$1)-1];
END;
$BODY$
  LANGUAGE plpgsql IMMUTABLE
  COST 100;
ALTER FUNCTION get_month_rus(date)
  OWNER TO postgres;

CREATE OR REPLACE FUNCTION date5_descr(date)
  RETURNS text AS
$BODY$
	SELECT to_char($1,'DD/MM/YY');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION date5_descr(date) OWNER TO polimerplast;


-- Function: date8_descr(date)

-- DROP FUNCTION date8_descr(date);

CREATE OR REPLACE FUNCTION format_money(numeric)
  RETURNS text AS
$BODY$
	SELECT to_char($1,'FM999 999.00');
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION format_money(numeric)
  OWNER TO polimerplast;


CREATE OR REPLACE FUNCTION format_rub(numeric)
  RETURNS text AS
$BODY$
	SELECT format_money($1)||' р.';
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION format_rub(numeric) OWNER TO polimerplast;



CREATE OR REPLACE FUNCTION interval_descr(IN in_interval interval)
  RETURNS text AS
$BODY$
	SELECT
		CASE 
		WHEN EXTRACT(DAY FROM $1)=0 THEN
			to_char($1,'HH24:MI')
		ELSE
			EXTRACT(DAY FROM $1) || ' сут.' || to_char($1,'HH24:MI')
		END;
		
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION interval_descr(interval)
  OWNER TO polimerplast;



CREATE TABLE sessions
(
  id character(128) NOT NULL,
  set_time character(10) NOT NULL,
  data text NOT NULL,
  session_key character(128) NOT NULL,
  CONSTRAINT sessions_pkey PRIMARY KEY (id)
)
WITH (OIDS=FALSE);
ALTER TABLE sessions OWNER TO polimerplast;


-- Function: get_short_str(text, integer)

-- DROP FUNCTION get_short_str(text, integer);

CREATE OR REPLACE FUNCTION get_short_str(text, integer)
  RETURNS text AS
$BODY$
	SELECT
	CASE
		WHEN $1=null THEN ''
		WHEN length($1)>($2+3) THEN substring($1,1,$2) || '...'
		ELSE $1
	END
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION get_short_str(text, integer)
  OWNER TO beton;


CREATE OR REPLACE FUNCTION not_equal(par1 integer,par2 integer)
  RETURNS boolean AS
$BODY$
	SELECT $1<>$2 OR ($1 IS NULL AND $2 IS NOT NULL) OR ($1 IS NOT NULL AND $2 IS NULL);
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION not_equal(integer,integer) OWNER TO polimerplast;

CREATE OR REPLACE FUNCTION not_equal(par1 numeric,par2 numeric)
  RETURNS boolean AS
$BODY$
	SELECT $1<>$2 OR ($1 IS NULL AND $2 IS NOT NULL) OR ($1 IS NOT NULL AND $2 IS NULL);
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION not_equal(numeric,numeric) OWNER TO polimerplast;
  
  
CREATE OR REPLACE FUNCTION not_equal(par1 boolean,par2 boolean)
  RETURNS boolean AS
$BODY$
	SELECT $1<>$2 OR ($1 IS NULL AND $2 IS NOT NULL) OR ($1 IS NOT NULL AND $2 IS NULL);
$BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;
ALTER FUNCTION not_equal(boolean,boolean) OWNER TO polimerplast;
    
	
create or replace function text_to_int(text, integer) returns integer as $$
begin
    return cast($1 as integer);
exception
    when invalid_text_representation then
        return $2;
end;
$$ language plpgsql immutable;	
ALTER FUNCTION text_to_int(text, integer) OWNER TO polimerplast;