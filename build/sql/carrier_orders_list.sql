-- VIEW: carrier_orders_list

--DROP VIEW carrier_orders_list;

CREATE OR REPLACE VIEW carrier_orders_list AS
	SELECT
		carrier_orders.*,
		carriers.name AS carrier_descr,
		drivers.name AS driver_descr,
		vehicles.plate AS vehicle_descr,
		(carrier_orders_today_ord(now()::timestamp without time zone)=carrier_orders.ord) AS today_ord
	FROM carrier_orders
	LEFT JOIN carriers ON carriers.id=carrier_orders.carrier_id
	LEFT JOIN drivers ON drivers.id=carrier_orders.driver_id
	LEFT JOIN vehicles ON vehicles.id=carrier_orders.vehicle_id
	ORDER BY carrier_orders.ord
	;
	
ALTER VIEW carrier_orders_list OWNER TO ;
