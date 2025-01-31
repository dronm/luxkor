-- VIEW: carriers_list

--DROP VIEW carriers_list;

CREATE OR REPLACE VIEW carriers_list AS
	SELECT
		carriers.*,
		clients.name AS client_descr
	FROM carriers
	LEFT JOIN clients ON clients.id=carriers.client_id
	ORDER BY carriers.name
	;
	
ALTER VIEW carriers_list OWNER TO ;
