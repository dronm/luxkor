/*DROP function deliv_assign_order_to_vehicle(
	in_order_id int,
	in_vehicle_id int,
	in_hour_id int,
	in_delivery_date date
	);
*/
CREATE or REPLACE function deliv_assign_order_to_vehicle(
	in_order_id int,
	in_vehicle_id int,
	in_hour_id int,
	in_delivery_date date
)
	RETURNS VOID AS
$BODY$
DECLARE
	v_h_to int;
	v_vh_wt numeric;
	v_vh_vm numeric;
	
	/* period row*/
	--v_per_rec RECORD;
	
	/* Order record id, wt,vm*/ 
	v_o_rec doc_order_vm_wt;
BEGIN
--************ НАЧАЛО ПРОВЕРКИ *******************************
	
	/* !!!ПРОВЕРИТь ОТПРАВЛЕННЫЕ УВЕДОМЛЕНИЯ!!! */

	/* !!!НЕ РАНЕЕ ТЕКУЩЕГО ВРЕМЕНИ!!! */
	/*
	IF (now()::date < $4) THEN
		RAISE 'Дата доставки меньше текущей!';
	END IF;
	*/
	SELECT dh.h_to INTO v_h_to
	FROM delivery_hours AS dh
	WHERE dh.id = $3;
	
	/*
	IF (now()::date = $4 AND EXTRACT(HOUR FROM now()) > v_h_to) THEN
		RAISE 'Время доставки меньше текущего!';
	END IF;
	*/
	
	--масса и объем по ТС
	SELECT vol,load_weight_t
	INTO v_vh_vm,v_vh_wt
	FROM vehicles WHERE id=$2;

	--масса и объем по тек.заявке
	SELECT
		$1 AS id,
		COALESCE(total_volume,0) AS vm,
		COALESCE(total_weight,0) AS wt		
	INTO v_o_rec
	FROM doc_orders WHERE id=$1;
	
	IF v_o_rec.vm>v_vh_vm THEN
		RAISE 'Заявка не проходит по объему!';
	END IF;
	IF v_o_rec.wt>v_vh_wt THEN
		RAISE 'Заявка не проходит по массе!';
	END IF;
	
--************ КОНЕЦ ПРОВЕРКИ *******************************

	DELETE FROM deliveries
	WHERE doc_order_id=$1;
	
	PERFORM deliv_place_orders(
			$4,$3,
			$2,v_vh_vm,v_vh_wt,
			ARRAY[v_o_rec],
			v_o_rec.vm,v_o_rec.wt
	);
	
	--Setting order vehicle
	UPDATE doc_orders
	SET vehicle_id=$2
	WHERE id=$1;
	
	/*
		INSERT INTO deliveries (
			vehicle_id,doc_order_id,
			delivery_hour_id,deliv_date,added_date_time
			)
		VALUES (
			$2,$1,
			$3,$4,now()::timestamp
		);
	*/
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER function deliv_assign_order_to_vehicle(
	in_order_id int,
	in_vehicle_id int,
	in_hour_id int,
	in_delivery_date date
)
	OWNER TO polimerplast;
