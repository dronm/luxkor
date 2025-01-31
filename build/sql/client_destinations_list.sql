-- View: client_destinations_list

--DROP VIEW client_destinations_list;

CREATE OR REPLACE VIEW client_destinations_list AS 
	SELECT
		cd.id,
		cd.client_id,
		
		--ВРЕМЕННО
		cd.value AS address,
		/*
		array_to_string(
			ARRAY[
				cd.addr_index,
				cd.region,
				cd.raion,
				cd.gorod,
				cd.naspunkt,
				cd.ulitza,
				CASE 
					WHEN empty(cd.dom) THEN NULL
					ELSE 'дом '||cd.dom
				END,
				CASE 
					WHEN empty(cd.korpus) THEN NULL
					ELSE 'корпус '||cd.korpus
				END,
				CASE 
					WHEN empty(cd.kvartira) THEN NULL
					ELSE 'кв. '||cd.kvartira
				END		
			],
		',') AS address,
		*/
		cd.value
		
	FROM client_destinations AS cd
	ORDER BY address;

ALTER TABLE client_destinations_list OWNER TO polimerplast;

