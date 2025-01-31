-- View: doc_orders_closed_list

DROP VIEW doc_orders_closed_list;

/*
CREATE OR REPLACE VIEW doc_orders_closed_list AS 
	SELECT *		
	FROM doc_orders_list AS d
	WHERE d.state IN ('shipped',
			'loading',
			'on_way',
			'unloading',
			'closed',
			'canceled_by_sales_manager',
			'canceled_by_client'
		)
		AND NOT (d.pay_type='cash' AND d.paid=FALSE)
	;
ALTER TABLE doc_orders_closed_list OWNER TO polimerplast;

