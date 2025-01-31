-- VIEW: client_debt_list

DROP VIEW client_debt_list;

CREATE OR REPLACE VIEW client_debt_list AS
	SELECT
		t.id,
		t.firm_id,
		f.name AS firm_descr,
		t.client_id,
		cl.name AS client_descr,
		t.client_debt_period_days_from,
		p.days_descr AS client_debt_period_days_descr,
		t.def_debt,
		t.debt_total,
		t.days,
		date5_time5_descr(t.update_date) AS update_date_descr
	FROM client_debts AS t
	LEFT JOIN clients cl ON cl.id=t.client_id
	LEFT JOIN firms f ON f.id=t.firm_id
	LEFT JOIN client_debt_periods_list AS p ON p.days_from=t.client_debt_period_days_from
	ORDER BY cl.name,t.days;
	;
	
ALTER VIEW client_debt_list OWNER TO polimerplast;
