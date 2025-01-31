-- View: user_dialog_view

DROP VIEW user_dialog_view;

CREATE OR REPLACE VIEW user_dialog_view AS 
	SELECT
		u.id,
		u.name,
		u.name_full,
		u.email,
		u.role_id,
		get_role_types_descr(u.role_id) AS role_descr,
		u.cel_phone,
		u.tel_ext,
		u.sign_order,
		(u.ext_id IS NOT NULL AND u.ext_id<>'') match_1c,
		u.ext_login,
		u.warehouse_id,
		w.name AS warehouse_descr
		
	FROM users AS u
	LEFT JOIN warehouses AS w ON w.id=u.warehouse_id
	;

ALTER TABLE user_dialog_view OWNER TO polimerplast;

