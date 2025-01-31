-- View: client_contract_list

DROP VIEW client_contract_list;

CREATE OR REPLACE VIEW client_contract_list AS 
	SELECT
		c.id,
		c.client_id,
		c.number,
		c.state,
		c.firm_id,
		f.name AS firm_descr,
		get_contract_states_descr(c.state) AS state_descr,
		c.date_to,
		date8_descr(c.date_to) AS date_to_descr,
		c.date_from,
		date8_descr(c.date_from) AS date_from_descr
		
	FROM client_contracts AS c
	LEFT JOIN firms AS f ON f.id=c.firm_id
	ORDER BY c.date_to;
ALTER TABLE client_contract_list OWNER TO polimerplast;

