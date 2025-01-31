-- View: client_user_list

--DROP VIEW client_user_list;

CREATE OR REPLACE VIEW client_user_list AS 
	SELECT 
		u.id,
		u.name,
		u.name_full,
		u.email,
		u.cel_phone,
		u.client_id
	FROM users AS u
	ORDER BY u.name_full;
ALTER TABLE client_user_list OWNER TO polimerplast;

