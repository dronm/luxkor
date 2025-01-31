-- View: pay_schedule_list

--DROP VIEW pay_schedule_list;

CREATE OR REPLACE VIEW pay_schedule_list AS 
	SELECT 
		p.pay_date AS pay_date,
		date10_descr(p.pay_date) AS pay_date_descr,
		p.client_id,
		cl.name AS client_descr,
		p.firm_id,
		f.name AS firm_descr,
		p.total,
		format_money(p.total) AS total_descr
	FROM client_pay_schedules AS p
	LEFT JOIN firms AS f ON f.id=p.firm_id
	LEFT JOIN clients AS cl ON cl.id=p.client_id
	ORDER BY f.name,p.pay_date;
ALTER TABLE pay_schedule_list OWNER TO polimerplast;