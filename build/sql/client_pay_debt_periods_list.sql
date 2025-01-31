-- View: client_debt_periods_list

--DROP VIEW client_debt_periods_list;

CREATE OR REPLACE VIEW client_debt_periods_list AS 
	SELECT
		p.days_from,
		p.days_to,
		p.days_from::text||'-'||p.days_to::text||' дней' days_descr
	FROM client_debt_periods AS p;

ALTER TABLE client_debt_periods_list OWNER TO polimerplast;

