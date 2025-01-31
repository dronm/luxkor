-- VIEW: client_firm_bank_accounts_list

--DROP VIEW client_firm_bank_accounts_list;

CREATE OR REPLACE VIEW client_firm_bank_accounts_list AS
	SELECT
		t.id,
		t.client_id,
		cl.name AS client_descr,
		t.firm_id,
		f.name AS firm_descr,
		t.ext_bank_account_id,
		t.ext_bank_account_descr
		
	FROM client_firm_bank_accounts AS t
	LEFT JOIN clients AS cl ON cl.id=t.client_id
	LEFT JOIN firms AS f ON f.id=t.firm_id
	ORDER BY t.client_id,f.name
	;
	
ALTER VIEW client_firm_bank_accounts_list OWNER TO ;
