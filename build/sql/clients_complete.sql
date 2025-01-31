-- View: clients_complete

--DROP VIEW clients_complete;


CREATE OR REPLACE VIEW clients_complete AS 
	SELECT 
		cl.id,
		cl.name,
		cl.def_firm_id,
		cl.def_warehouse_id,
		
		CASE
			WHEN cl.def_firm_id IS NULL THEN 0
			ELSE
				(SELECT t.debt_total FROM client_debts AS t WHERE t.client_id=cl.id AND t.firm_id=cl.def_firm_id LIMIT 1)
		END AS debt_total,
		
		CASE
			WHEN cl.def_firm_id IS NULL THEN 0
			ELSE
				(SELECT sum(t.def_debt) FROM client_debts AS t WHERE t.client_id=cl.id AND t.firm_id=cl.def_firm_id)
		END AS def_debt,
		
		--Если ДА - из клиента, иначе - константа!
		CASE
			WHEN coalesce(cl.deliv_add_cost_to_product,FALSE) THEN cl.deliv_add_cost_to_product
			ELSE const_order_deliv_add_cost_to_product_val()
		END AS deliv_add_cost_to_product
		
	FROM clients AS cl
	
	ORDER BY cl.name;
ALTER TABLE clients_complete OWNER TO polimerplast;

