/*
DROP FUNCTION product_full_package_check(
		product_id integer,
		mes_l integer,
		mes_w integer,
		mes_h integer,
		measure_unit_id int,
		quant numeric
);
		*/
/*
TRUE - проверка пройдена
FALSE - есть ошибка
*/

CREATE OR REPLACE FUNCTION product_full_package_check(
		product_id integer,
		mes_l integer,
		mes_w integer,
		mes_h integer,
		measure_unit_id int,
		quant numeric
) RETURNS boolean
AS $body$
	SELECT TRUE;
$body$
language sql;
	
ALTER function product_full_package_check(
		product_id integer,
		mes_l integer,
		mes_w integer,
		mes_h integer,
		measure_unit_id int,
		quant numeric
) OWNER TO polimerplast;
