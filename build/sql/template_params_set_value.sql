-- Function: template_params_set_value(in_template text, in_param text, in_user_id int,in_val text)

-- DROP FUNCTION template_params_set_value(in_template text, in_param text, in_user_id int,in_val text);

CREATE OR REPLACE FUNCTION template_params_set_value(in_template text, in_param text, in_user_id int,in_val text)
  RETURNS void AS
$$
BEGIN
    UPDATE template_params set val = in_val WHERE template=in_template AND param=in_param AND user_id=in_user_id;
    IF FOUND THEN
        RETURN;
    END IF;
    BEGIN
        INSERT INTO template_params (template, param,user_id,val) VALUES (in_template, in_param, in_user_id, in_val);
    EXCEPTION WHEN OTHERS THEN
        UPDATE template_params set val = in_val WHERE template=in_template AND param=in_param AND user_id=in_user_id;
    END;
    RETURN;
END;
$$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION template_params_set_value(in_template text, in_param text, in_user_id int,in_val text) OWNER TO polimerplast;
