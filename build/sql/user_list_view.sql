-- View: user_list_view

--DROP VIEW user_list_view;

CREATE OR REPLACE VIEW user_list_view AS 
	SELECT
		u.id,
		u.name,
		u.name_full,
		u.email,
		get_role_types_descr(u.role_id) AS role_descr,
		(u.ext_id IS NOT NULL AND u.ext_id<>'') match_1c,
		(SELECT string_agg(w.name,', ') FROM user_warehouses uw
			LEFT JOIN warehouses w ON w.id= uw.warehouse_id
			WHERE uw.user_id=u.id
		) AS warehouse_descr
	FROM users AS u
	WHERE u.role_id<>'client'::role_types	
	ORDER BY u.name_full;
ALTER TABLE user_list_view OWNER TO polimerplast;

