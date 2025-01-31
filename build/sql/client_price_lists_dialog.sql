-- View: client_price_lists_dialog

--DROP VIEW client_price_lists_dialog;

CREATE OR REPLACE VIEW client_price_lists_dialog AS 
	SELECT 
		p.id,
		p.name,
		p.to_third_party_only,
		p.part_ship_do_not_change_price,
		p.min_order_quant,
		p.production_city_id,
		ct.name AS production_city_descr,
		p.default_price_list
	FROM client_price_lists AS p
	LEFT JOIN production_cities AS ct ON ct.id=p.production_city_id
	;
ALTER TABLE client_price_lists_dialog OWNER TO polimerplast;

