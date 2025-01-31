-- View: client_price_lists_select

--DROP VIEW client_price_lists_select;

CREATE OR REPLACE VIEW client_price_lists_select AS 
	SELECT
		p.id,
		p.name||', город:'||ct.name||', '||
		CASE
			WHEN p.to_third_party_only THEN 'для третьих лиц'
			ELSE 'только НЕ для третьих лиц'
		END AS descr
		
	FROM client_price_lists AS p
	LEFT JOIN production_cities AS ct ON ct.id=p.production_city_id
	ORDER BY ct.name,p.name;
ALTER TABLE client_price_lists_select OWNER TO polimerplast;

