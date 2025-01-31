-- View: vehicles_select_list


--DROP VIEW doc_orders_dialog;
--DROP VIEW doc_orders_print_h;
--DROP VIEW vehicles_select_list;

CREATE OR REPLACE VIEW vehicles_select_list AS 
	SELECT 
		v.id,
		v.vol,
		v.plate,
		v.load_weight_t,
		v.model||' '||v.vol::text || 'м3/' ||v.load_weight_t::text||'т' AS descr,
		v.plate||coalesce(' '||person_init(dr.name),'') AS complete_descr
		
	FROM vehicles AS v
	LEFT JOIN drivers AS dr ON dr.id=v.driver_id
	ORDER BY v.model,v.vol;
ALTER TABLE vehicles_select_list OWNER TO polimerplast;

