-- View: client_debts_list

--DROP VIEW client_debts_list;

CREATE OR REPLACE VIEW client_debts_list AS 
	SELECT 
		t.*,
		f.name AS firm_descr,
		per.days_from||'-'||per.days_to AS period_descr
	FROM client_debts AS t
	LEFT JOIN firms AS f ON f.id=t.firm_id
	LEFT JOIN client_debt_periods AS per ON per.days_from=t.client_debt_period_days_from
	ORDER BY f.name,per.days_from;
ALTER TABLE client_debts_list OWNER TO polimerplast;