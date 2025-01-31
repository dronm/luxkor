-- View: client_price_list_clients_list

--DROP VIEW client_price_list_clients_list;

CREATE OR REPLACE VIEW client_price_list_clients_list AS 
	SELECT 
		pcl.id,
		p.id AS client_price_list_id,
		pcl.client_id,
		p.name||', город:'||ct.name||', '||
		CASE
			WHEN p.to_third_party_only THEN 'для третьих лиц'
			ELSE 'только НЕ для третьих лиц'
		END AS client_price_list_descr
		
	FROM client_price_list_clients AS pcl
	LEFT JOIN client_price_lists AS p ON p.id=pcl.price_list_id
	LEFT JOIN production_cities AS ct ON ct.id=p.production_city_id
	;
ALTER TABLE client_price_list_clients_list OWNER TO polimerplast;

