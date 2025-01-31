-- VIEW: holidays_list

--DROP VIEW holidays_list;

CREATE OR REPLACE VIEW holidays_list AS
	SELECT
		h.date,
		date10_descr(h.date) AS date_str,
		name
	FROM holidays h
	ORDER BY h.date
	;
	
ALTER VIEW holidays_list OWNER TO polimerplast;
