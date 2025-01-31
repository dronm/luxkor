-- View: deliv_cost_opts_list

--DROP VIEW deliv_cost_opts_list;

CREATE OR REPLACE VIEW deliv_cost_opts_list AS 
	SELECT 
		t.id,
		t.volume_m,
		t.weight_t,
		t.volume_m::text||'м3 '||ROUND(t.weight_t,1)::text||'т' AS descr
	FROM deliv_cost_opts AS t
	ORDER BY t.volume_m DESC;
ALTER TABLE deliv_cost_opts_list OWNER TO polimerplast;