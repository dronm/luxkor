-- View: public.doc_orders_list

-- DROP VIEW public.doc_orders_list;

CREATE OR REPLACE VIEW public.doc_orders_list
 AS
 SELECT d.id,
    d.number,
    d.date_time,
    date8_time5_descr(d.date_time) AS date_time_descr,
    d.delivery_plan_date,
    date8_descr(d.delivery_plan_date) AS delivery_plan_date_descr,
        CASE
            WHEN d.deliv_type = 'by_supplier'::delivery_types AND (( SELECT t.state
               FROM doc_orders_states t
              WHERE t.doc_orders_id = d.id
              ORDER BY t.date_time DESC
             LIMIT 1)) = 'produced'::order_states AND (d.delivery_plan_date < now()::date OR d.delivery_plan_date < d.delivery_fact_date::date) THEN 'behind_plan'::text
            ELSE ''::text
        END AS behind_plan,
    d.product_plan_date,
    date8_descr(d.product_plan_date) AS product_plan_date_descr,
    -- dest.address AS address_descr,
	d.deliv_destination AS address_descr,
    d.client_id,
    cl.name AS client_descr,
    cl.pay_type,
    d.warehouse_id,
    w.name AS warehouse_descr,
    d.product_str AS products_descr,
    d.product_ids,
    d.total,
    format_money(d.total) AS total_descr,
    round(t_prod.quant, 3) AS total_quant,
    round(d.total_volume, 3) AS total_volume,
    ( SELECT s1.state
           FROM doc_orders_states s1
          WHERE s1.doc_orders_id = d.id
          ORDER BY s1.date_time DESC
         LIMIT 1) AS state,
    get_order_states_descr(( SELECT s1.state
           FROM doc_orders_states s1
          WHERE s1.doc_orders_id = d.id
          ORDER BY s1.date_time DESC
         LIMIT 1)) AS state_descr,
    d.ext_ship_num,
    d.ext_order_num,
    d.delivery_fact_date,
    date8_time5_descr(d.delivery_fact_date) AS delivery_fact_date_descr,
    d.client_number,
    d.printed,
    d.cust_surv_date_time,
    date8_time5_descr(d.cust_surv_date_time) AS cust_surv_date_time_descr,
    ( SELECT users.name::text AS name
           FROM doc_orders_states s1
             LEFT JOIN users ON users.id = s1.user_id
          WHERE s1.doc_orders_id = d.id
          ORDER BY s1.date_time DESC
         LIMIT 1) AS submit_user_descr,
    d.paid,
    d.paid_by_bank
   FROM doc_orders d
     LEFT JOIN ( SELECT t.doc_id,
            sum(t.quant_base_measure_unit) AS quant
           FROM doc_orders_t_products t
          GROUP BY t.doc_id) t_prod ON t_prod.doc_id = d.id
     LEFT JOIN clients cl ON cl.id = d.client_id
     LEFT JOIN warehouses w ON w.id = d.warehouse_id
 ; -- ORDER BY d.date_time DESC, d.number;


