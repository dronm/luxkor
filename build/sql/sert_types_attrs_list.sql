-- View: sert_types_attrs_list

--DROP VIEW sert_types_attrs_list;

CREATE OR REPLACE VIEW sert_types_attrs_list AS 
	SELECT *
	FROM sert_types_attrs;

ALTER TABLE sert_types_attrs_list OWNER TO polimerplast;

