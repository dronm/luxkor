-- VIEW: acc_pko_list

--DROP VIEW acc_pko_list;

CREATE OR REPLACE VIEW acc_pko_list AS
	SELECT
		id ,
		date_time,
		date8_time5_descr(date_time) AS date_time_descr,
		acc_pko_type,
		enum_acc_pko_types_descr(acc_pko_type) AS acc_pko_type_descr,
		total,
		order_list,
		order_ids
	FROM acc_pkos
	ORDER BY date_time
	;
	
ALTER VIEW acc_pko_list OWNER TO polimerplast;
