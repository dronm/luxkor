-- Function: doc_orders_append_list(in_doc_id integer)

-- DROP FUNCTION doc_orders_append_list(in_doc_id integer);

CREATE OR REPLACE FUNCTION doc_orders_append_list(in_doc_id integer)
  RETURNS TABLE(
  	doc_id integer,
  	doc_number text,
  	firm_id integer,
  	firm_descr text,
  	doc_total numeric(15,2),
  	selected bool
  ) AS
$$
	WITH
	in_doc_h AS (
		SELECT
			t.client_id,
			(
				coalesce(t.paid,FALSE) OR coalesce(t.paid_by_bank,FALSE)
			) AS paid,
			
			(SELECT st.state
			FROM doc_orders_states AS st
			WHERE st.doc_orders_id=t.id
			ORDER BY st.date_time DESC
			LIMIT 1
			) AS state
		FROM doc_orders t
		WHERE t.id=in_doc_id
	)
	SELECT
		o.id AS doc_id,
		o.number::text AS doc_number,
		o.firm_id,
		f.name::text AS ficrm_descr,
		
		(o.total+
		CASE WHEN coalesce(o.deliv_add_cost_to_product,FALSE)=FALSE THEN
			coalesce(o.deliv_total,0)
		ELSE
			0
		END
		+coalesce(o.total_pack,0)		
		) AS total,
		
		FALSE AS selected
		
	FROM doc_orders AS o
	LEFT JOIN firms AS f ON f.id=o.firm_id
	LEFT JOIN clients AS cl ON cl.id=o.client_id
	WHERE
		o.id<>in_doc_id
		
		AND
		o.client_id = (SELECT in_doc_h.client_id FROM in_doc_h)
		
		AND
		(		
			--Заявка в новых и выбираем только из новых
			(			
				(SELECT in_doc_h.state FROM in_doc_h) IN ('new','waiting_for_us','waiting_for_client')
				AND
				(SELECT st.state
				FROM doc_orders_states AS st
				WHERE st.doc_orders_id=o.id
				ORDER BY st.date_time DESC
				LIMIT 1) IN ('new','waiting_for_us','waiting_for_client')
			)
		
			--ИЛИ Заявка в текущих тогда выбираем из новых и из текущих
			OR
			(
				(
					(cl.pay_type='cash' AND (SELECT in_doc_h.paid FROM in_doc_h)=FALSE)
					OR
					(
						(SELECT in_doc_h.state FROM in_doc_h) NOT IN (
							'new',
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
				)
				AND
				(
					(cl.pay_type='cash' AND (coalesce(o.paid,FALSE) OR coalesce(o.paid_by_bank,FALSE))=FALSE)
					OR
					(
					(SELECT st.state
					FROM doc_orders_states AS st
					WHERE st.doc_orders_id=o.id
					ORDER BY st.date_time DESC
					LIMIT 1) NOT IN ('new',
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
					
				)
		)
	)
	
	ORDER BY f.name,o.number;
$$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION doc_orders_append_list(in_doc_id integer) OWNER TO polimerplast;
