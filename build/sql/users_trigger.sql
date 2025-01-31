-- Trigger: users_trigger on users

-- DROP TRIGGER users_trigger ON users;

CREATE TRIGGER users_trigger
  BEFORE DELETE
  ON users FOR EACH ROW
  EXECUTE PROCEDURE users_process();
