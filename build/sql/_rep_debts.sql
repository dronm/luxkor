-- VIEW: rep_debts

--DROP VIEW rep_debts;

CREATE OR REPLACE VIEW rep_debts AS
	SELECT
		sub.firm_id,
		firms.name AS firm_descr,
		sub.client_id,
		clients.name AS client_descr,
		sum(coalesce(sub.shipped_not_payed,0)) AS shipped_not_payed,
		sum(coalesce(sub.not_shipped_payed,0)) AS not_shipped_payed,
		sum(coalesce(sub.balance,0)) AS balance
	FROM
	(SELECT
		d.firm_id,
		d.client_id,
		
		/*
		(SELECT s1.state FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=d.id
		ORDER BY s1.date_time DESC
		LIMIT 1
		) AS state,

		coalesce((SELECT t.debt_total FROM client_debts t WHERE t.client_id=d.client_id AND t.firm_id=d.firm_id LIMIT 1),0)
		AS debt_total,
		*/
		
		--ОТГРУЖЕНО, НО НЕ ОПЛАЧЕНО 
		CASE
			WHEN (SELECT s1.state FROM doc_orders_states AS s1
				WHERE s1.doc_orders_id=d.id
				ORDER BY s1.date_time DESC
				LIMIT 1
			) IN ('shipped','loading','on_way','unloading','closed')
			AND coalesce((SELECT t.debt_total FROM client_debts t WHERE t.client_id=d.client_id AND t.firm_id=d.firm_id LIMIT 1),0)>0
			THEN
				-(d.total+
					CASE
						WHEN d.deliv_type='by_supplier'::delivery_types
							AND coalesce(d.deliv_add_cost_to_product,FALSE)=FALSE THEN
								d.deliv_total
						ELSE 0
					END+
					coalesce(d.total_pack,0)
	
				)		
			ELSE 0::numeric
		END AS shipped_not_payed,
	
		--НЕ ОТГРУЖЕНО, НО ОПЛАЧЕНО 
		CASE
			WHEN (SELECT s1.state FROM doc_orders_states AS s1
				WHERE s1.doc_orders_id=d.id
				ORDER BY s1.date_time DESC
				LIMIT 1
			) IN ('producing','produced')
			AND coalesce((SELECT t.debt_total FROM client_debts t WHERE t.client_id=d.client_id AND t.firm_id=d.firm_id LIMIT 1),0)<=0
			THEN
				(d.total+
					CASE
						WHEN d.deliv_type='by_supplier'::delivery_types
							AND coalesce(d.deliv_add_cost_to_product,FALSE)=FALSE THEN
								d.deliv_total
						ELSE 0
					END+
					coalesce(d.total_pack,0)
	
				)		
			ELSE 0::numeric
		END AS not_shipped_payed,
	
		--РАЗНИЦА (ОТГРУЖЕНО, НО НЕ ОПЛАЧЕНО) - (НЕ ОТГРУЖЕНО, НО ОПЛАЧЕНО)
		(--ОТГРУЖЕНО, НО НЕ ОПЛАЧЕНО 
		CASE
			WHEN (SELECT s1.state FROM doc_orders_states AS s1
				WHERE s1.doc_orders_id=d.id
				ORDER BY s1.date_time DESC
				LIMIT 1
			) IN ('shipped','loading','on_way','unloading','closed')
			AND coalesce((SELECT t.debt_total FROM client_debts t WHERE t.client_id=d.client_id AND t.firm_id=d.firm_id LIMIT 1),0)>0
			THEN
				-(d.total+
					CASE
						WHEN d.deliv_type='by_supplier'::delivery_types
							AND coalesce(d.deliv_add_cost_to_product,FALSE)=FALSE THEN
								d.deliv_total
						ELSE 0
					END+
					coalesce(d.total_pack,0)
	
				)		
			ELSE 0::numeric
		END)
		-
		(--НЕ ОТГРУЖЕНО, НО ОПЛАЧЕНО 
		CASE
			WHEN (SELECT s1.state FROM doc_orders_states AS s1
				WHERE s1.doc_orders_id=d.id
				ORDER BY s1.date_time DESC
				LIMIT 1
			) IN ('producing','produced')
			AND coalesce((SELECT t.debt_total FROM client_debts t WHERE t.client_id=d.client_id AND t.firm_id=d.firm_id LIMIT 1),0)<=0
			THEN
				(d.total+
					CASE
						WHEN d.deliv_type='by_supplier'::delivery_types
							AND coalesce(d.deliv_add_cost_to_product,FALSE)=FALSE THEN
								d.deliv_total
						ELSE 0
					END+
					coalesce(d.total_pack,0)
	
				)		
			ELSE 0::numeric
		END
		)	
		AS balance
	
	FROM doc_orders AS d
	LEFT JOIN clients AS cl ON cl.id=d.client_id
	WHERE 
		(cl.pay_type='cash' AND d.paid=FALSE)
		OR
		((SELECT s1.state FROM doc_orders_states AS s1
		WHERE s1.doc_orders_id=d.id
		ORDER BY s1.date_time DESC
		LIMIT 1
		) NOT IN ('new',
			'waiting_for_client',
			'waiting_for_us',
			'shipped',
			'loading',
			'on_way',
			'unloading',
			'closed',
			'canceled_by_sales_manager',
			'canceled_by_client'					
			)
		)
	ORDER BY d.firm_id,d.client_id,d.delivery_fact_date
	) AS sub
	
	LEFT JOIN firms ON firms.id = sub.firm_id
	LEFT JOIN clients ON clients.id = sub.client_id
	
	WHERE sub.balance<>0
	GROUP BY sub.firm_id,firms.name,sub.client_id,clients.name
	ORDER BY firms.name,clients.name
	;
	
ALTER VIEW rep_debts OWNER TO polimerplast;
