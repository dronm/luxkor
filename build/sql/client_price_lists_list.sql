-- View: client_price_lists_list

--DROP VIEW client_price_lists_list;

CREATE OR REPLACE VIEW client_price_lists_list AS 
	SELECT
		p.id,
		p.name,
		p.production_city_id,
		ct.name AS production_city_descr,
		p.to_third_party_only,
		p.default_price_list
		
	FROM client_price_lists AS p
	LEFT JOIN production_cities AS ct ON ct.id=p.production_city_id
	ORDER BY ct.name,p.name;
ALTER TABLE client_price_lists_list OWNER TO polimerplast;

