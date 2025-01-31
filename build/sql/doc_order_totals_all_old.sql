/*
DROP function doc_order_totals_all(
		warehouse_id integer,
		client_id integer,
		login_id integer,
		to_third_party_only boolean
);
*/
/*
Пересчитывает базовую ед.,массу,цену
для временной таблицы с товарами
в соответствии с параметрами
*/
CREATE or REPLACE function doc_order_totals_all(
		warehouse_id integer,
		client_id integer,
		login_id integer,
		to_third_party_only boolean
)
	RETURNS TABLE
		(
		line_number integer,
		product_id integer,
		base_quant numeric,
		volume_m numeric,
		weight_t numeric,
		price numeric,
		total numeric,
		total_pack numeric
		)
		
AS $body$
SELECT
	t.line_number,
	t.product_id,
	
	--base_quant
	(SELECT
		coalesce(base_quant,0)
	FROM doc_order_totals(
		$1,$2,t.product_id,
		t.mes_length,t.mes_width,t.mes_height,
		t.quant,t.measure_unit_id,
		t.pack_exists,t.pack_in_price,$4,
		t.price_edit,t.price
	) AS (
		base_quant numeric,volume_m numeric,
		weight_t numeric,price numeric,total numeric,total_pack numeric
		)
	),
	--volume_m
	(SELECT
		coalesce(volume_m,0)
	FROM doc_order_totals(
		$1,$2,t.product_id,
		t.mes_length,t.mes_width,t.mes_height,
		t.quant,t.measure_unit_id,
		t.pack_exists,t.pack_in_price,$4,
		t.price_edit,t.price		
	) AS (
		base_quant numeric,volume_m numeric,
		weight_t numeric,price numeric,total numeric,total_pack numeric
		)
	),
	--weight_t
	(SELECT
		coalesce(weight_t,0)
	FROM doc_order_totals(
		$1,$2,t.product_id,
		t.mes_length,t.mes_width,t.mes_height,
		t.quant,t.measure_unit_id,
		t.pack_exists,t.pack_in_price,$4,
		t.price_edit,t.price		
	) AS (
		base_quant numeric,volume_m numeric,
		weight_t numeric,price numeric,total numeric,total_pack numeric
		)
	),
	--price
	(SELECT
		coalesce(price,0)
	FROM doc_order_totals(
		$1,$2,t.product_id,
		t.mes_length,t.mes_width,t.mes_height,
		t.quant,t.measure_unit_id,
		t.pack_exists,t.pack_in_price,$4,
		t.price_edit,t.price
	) AS (
		base_quant numeric,volume_m numeric,
		weight_t numeric,price numeric,total numeric,total_pack numeric
		)
	),
	--total
	(SELECT
		total
	FROM doc_order_totals(
		$1,$2,t.product_id,
		t.mes_length,t.mes_width,t.mes_height,
		t.quant,t.measure_unit_id,
		t.pack_exists,t.pack_in_price,$4,
		t.price_edit,t.price
	) AS (
		base_quant numeric,volume_m numeric,
		weight_t numeric,price numeric,total numeric,total_pack numeric
		)
	),
	
	--total pack
	(SELECT
		total_pack
	FROM doc_order_totals(
		$1,$2,t.product_id,
		t.mes_length,t.mes_width,t.mes_height,
		t.quant,t.measure_unit_id,
		t.pack_exists,t.pack_in_price,$4,
		t.price_edit,t.price
	) AS (
		base_quant numeric,volume_m numeric,
		weight_t numeric,price numeric,total numeric,total_pack numeric
		)
	)	
FROM doc_orders_t_tmp_products t
WHERE
	t.login_id=$3
	--AND (t.price_edit=FALSE OR t.price_edit IS NULL);
$body$
language sql;
ALTER function doc_order_totals_all(
		warehouse_id integer,
		client_id integer,
		login_id integer,
		to_third_party_only boolean
) OWNER TO polimerplast;