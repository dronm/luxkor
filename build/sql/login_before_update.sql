/* before trigger*/
CREATE TRIGGER login_before_update
	BEFORE UPDATE ON logins
	FOR EACH ROW EXECUTE PROCEDURE before_log_out();

