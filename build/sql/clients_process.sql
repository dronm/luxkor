-- Function: clients_process()

-- DROP FUNCTION clients_process();

CREATE OR REPLACE FUNCTION clients_process()
  RETURNS trigger AS
$BODY$
DECLARE
	v_orders_cnt int;
BEGIN
	IF (TG_WHEN='BEFORE' AND TG_OP='DELETE') THEN
		--адреса
		SELECT COUNT(*)
		INTO v_orders_cnt
		FROM doc_orders WHERE client_id=OLD.id;
		IF v_orders_cnt>0 THEN
			RAISE 'По клиенту есть заявки, удаление невозможно!';
		END IF;
		
		--адреса
		DELETE FROM client_destinations WHERE client_id=OLD.id;

		--контракты
		DELETE FROM client_contracts WHERE client_id=OLD.id;

		--оплаты
		DELETE FROM client_pay_schedules WHERE client_id=OLD.id;

		--прайсы
		DELETE FROM client_price_list_clients WHERE client_id=OLD.id;

		--юзеры
		DELETE FROM users WHERE client_id=OLD.id;		
		
		RETURN OLD;
	END IF;
END;
$BODY$
LANGUAGE plpgsql VOLATILE COST 100;
ALTER FUNCTION clients_process()
  OWNER TO polimerplast;
